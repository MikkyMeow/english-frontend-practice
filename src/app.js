const dialogueData = window.DIALOGUES;
const PROGRESS_STORAGE_KEY = "english-trainer-progress-v1";
const dialogueListElement = document.querySelector("#dialogueList");
const dialoguePlayerContent = document.querySelector("#dialoguePlayerContent");

function loadProgress() {
  try {
    const savedProgress = JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY));
    return savedProgress && typeof savedProgress === "object" && !Array.isArray(savedProgress) ? savedProgress : {};
  } catch (error) {
    return {};
  }
}

let progress = loadProgress();

function getDialogueProgress(dialogue) {
  const completedLines = new Set(progress[dialogue.id] || []);
  const completed = dialogue.lines.filter((line, index) => completedLines.has(`${line.speaker}:${index}`)).length;
  return { completed, percent: Math.round((completed / dialogue.lines.length) * 100) };
}

function renderDialogueList() {
  dialogueListElement.innerHTML = dialogueData.map((dialogue) => {
    const dialogueProgress = getDialogueProgress(dialogue);
    return `
    <button class="dialogue-card" type="button" data-open-dialogue="${dialogue.id}" data-title="${dialogue.title}">
      <span class="dialogue-card-title">${dialogue.title}</span>
      <span class="dialogue-card-description">${dialogue.description} — ${dialogue.lines.length} реплики</span>
      <span class="progress-row">
        <span class="progress-track"><span class="progress-value" style="width: ${dialogueProgress.percent}%"></span></span>
        <span class="progress-label">${dialogueProgress.percent}%</span>
      </span>
    </button>
  `;
  }).join("");
}

function renderDialogues() {
  dialoguePlayerContent.innerHTML = dialogueData.map((dialogue, dialogueIndex) => `
    <section class="chat" id="dialogue-${dialogue.id}" data-dialogue="${dialogue.id}" aria-label="${dialogue.ariaLabel}" ${dialogueIndex === 0 ? "" : "hidden"}>
      ${dialogue.lines.map((line, lineIndex) => `
        <article class="message ${line.speaker === "mia" ? "left" : "right"}" data-speaker="${line.speaker}" data-dialogue-id="${dialogue.id}" data-line-index="${lineIndex}">
          <div class="message-header">
            <span class="speaker">${line.name}</span>
            <button class="voice-button" type="button" aria-label="Play ${line.name} line">▶</button>
          </div>
          <p class="text">${line.text}</p>
          <p class="translation" lang="ru" hidden>${line.translation}</p>
        </article>
      `).join("")}
    </section>
  `).join("");
}

renderDialogueList();
renderDialogues();

const dialogues = [...document.querySelectorAll(".chat[data-dialogue]")];
const allMessages = [...document.querySelectorAll(".message")];
let messages = [...dialogues[0].querySelectorAll(".message")];
const playAllButton = document.querySelector("#playAll");
const stopAudioButton = document.querySelector("#stopAudio");
const startRolePlayButton = document.querySelector("#startRolePlay");
const roleButtons = [...document.querySelectorAll(".role-button")];
const dialogueCards = [...document.querySelectorAll("[data-open-dialogue]")];
const dialogueListView = document.querySelector("#dialogueListView");
const playerView = document.querySelector("#playerView");
const playerTitle = document.querySelector("#playerTitle");
const playerProgress = document.querySelector("#playerProgress");
const backToDialoguesButton = document.querySelector("#backToDialogues");
const toggleTranslationButton = document.querySelector("#toggleTranslation");
const translations = [...document.querySelectorAll(".translation")];
const voiceStatus = document.querySelector("#voiceStatus");
const synth = window.speechSynthesis;
let voices = [];
let selectedVoices = {};
let isPlayingSequence = false;
let isRolePlayActive = false;
let currentRecognition = null;
let selectedUserRole = "mia";
let currentDialogueId = null;

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

toggleTranslationButton.setAttribute("aria-controls", dialogues.map((dialogue) => dialogue.id).join(" "));

function setStatus(text) {
  voiceStatus.textContent = text;
}

function clearActiveMessage() {
  allMessages.forEach((message) => message.classList.remove("is-speaking", "is-listening"));
}

function stopRecognition() {
  if (!currentRecognition) return;
  currentRecognition.onend = null;
  try {
    currentRecognition.abort();
  } catch (error) {
    // Recognition may already be stopped by the browser.
  }
  currentRecognition = null;
}

function showAnswerResult(message, transcript, comparison) {
  let result = message.querySelector(".answer-result");
  if (!result) {
    result = document.createElement("p");
    result.className = "answer-result";
    message.append(result);
  }
  result.className = `answer-result ${comparison.isCorrect ? "correct" : "incorrect"}`;
  const similarityPercent = Math.round(comparison.similarity * 100);
  result.textContent = `${comparison.isCorrect ? "✓ Реплика засчитана." : "Попробуйте точнее."} Распознано: “${transcript}”. Совпадение: ${similarityPercent}%.`;
}

function updateProgressUI(dialogueId) {
  const dialogue = dialogueData.find((item) => item.id === dialogueId);
  const dialogueProgress = getDialogueProgress(dialogue);
  const card = document.querySelector(`[data-open-dialogue="${dialogueId}"]`);

  if (card) {
    card.querySelector(".progress-value").style.width = `${dialogueProgress.percent}%`;
    card.querySelector(".progress-label").textContent = `${dialogueProgress.percent}%`;
  }

  if (currentDialogueId === dialogueId) {
    const completedLines = new Set(progress[dialogueId] || []);
    const roleSummary = ["mia", "daniel"].map((role) => {
      const total = dialogue.lines.filter((line) => line.speaker === role).length;
      const completed = dialogue.lines.filter((line, index) => line.speaker === role && completedLines.has(`${role}:${index}`)).length;
      const name = role === "mia" ? "Mia" : "Daniel";
      return `${name} ${completed}/${total}`;
    }).join(" · ");
    playerProgress.textContent = `Прогресс ${dialogueProgress.percent}% · ${roleSummary}`;
  }
}

function saveSuccessfulLine(message) {
  const dialogueId = message.dataset.dialogueId;
  const progressKey = `${message.dataset.speaker}:${message.dataset.lineIndex}`;
  const completedLines = new Set(progress[dialogueId] || []);
  completedLines.add(progressKey);
  progress[dialogueId] = [...completedLines];

  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    // Progress remains available until the page is closed if storage is unavailable.
  }
  updateProgressUI(dialogueId);
}

function listenToMessage(message, index) {
  if (!SpeechRecognition) {
    isRolePlayActive = false;
    setStatus("Распознавание речи не поддерживается этим браузером.");
    return;
  }

  stopRecognition();
  const recognition = new SpeechRecognition();
  currentRecognition = recognition;
  recognition.lang = "en-US";
  recognition.interimResults = true;
  recognition.continuous = false;
  let hasFinalResult = false;

  clearActiveMessage();
  message.classList.add("is-listening");
  setStatus(`Ваш ход (${message.querySelector(".speaker").textContent}). Говорите по-английски…`);

  recognition.onresult = (event) => {
    let transcript = "";
    let isFinal = false;
    for (let resultIndex = event.resultIndex; resultIndex < event.results.length; resultIndex += 1) {
      transcript += event.results[resultIndex][0].transcript;
      isFinal ||= event.results[resultIndex].isFinal;
    }
    setStatus(`Слышно: ${transcript}`);

    if (!isFinal) return;
    hasFinalResult = true;
    currentRecognition = null;
    message.classList.remove("is-listening");
        const comparison = compareAnswer(message.querySelector(".text").textContent, transcript);
        showAnswerResult(message, transcript.trim(), comparison);
        if (comparison.isCorrect) saveSuccessfulLine(message);
    setStatus(comparison.isCorrect ? "Реплика принята." : "Реплика распознана — сравнение показано под сообщением.");
    window.setTimeout(() => processRolePlayLine(index + 1), 650);
  };

  recognition.onerror = (event) => {
    if (event.error === "aborted") return;
    message.classList.remove("is-listening");
    if (event.error === "not-allowed" || event.error === "service-not-allowed") {
      isRolePlayActive = false;
      setStatus("Нет доступа к микрофону. Разрешите его в настройках браузера и запустите диалог снова.");
      return;
    }
    setStatus("Не удалось распознать речь. Микрофон включается снова…");
  };

  recognition.onend = () => {
    if (currentRecognition === recognition) currentRecognition = null;
    if (isRolePlayActive && !hasFinalResult) {
      window.setTimeout(() => listenToMessage(message, index), 350);
    }
  };

  try {
    recognition.start();
  } catch (error) {
    isRolePlayActive = false;
    message.classList.remove("is-listening");
    setStatus("Не удалось включить микрофон. Запустите диалог ещё раз.");
  }
}

function processRolePlayLine(index) {
  if (!isRolePlayActive) return;
  if (index >= messages.length) {
    isRolePlayActive = false;
    currentRecognition = null;
    clearActiveMessage();
    setStatus("Диалог завершён.");
    return;
  }

  const message = messages[index];
  if (message.dataset.speaker === selectedUserRole) {
    listenToMessage(message, index);
  } else {
    setStatus(`${message.querySelector(".speaker").textContent} говорит…`);
    speakMessage(message, () => processRolePlayLine(index + 1));
  }
}

function chooseVoices() {
  if (!synth) {
    setStatus("Speech is not supported in this browser.");
    return;
  }

  voices = synth.getVoices();
  const englishVoices = voices.filter((voice) => voice.lang.toLowerCase().startsWith("en"));
  const preferred = englishVoices.length ? englishVoices : voices;

  if (!preferred.length) {
    setStatus("No browser voices found.");
    return;
  }

  selectedVoices = {
    mia: preferred.find((voice) => /female|samantha|victoria|karen|zira|moira/i.test(voice.name)) || preferred[0],
    daniel: preferred.find((voice) => /male|daniel|alex|fred|david|mark/i.test(voice.name)) || preferred[1] || preferred[0],
  };

  const hasTwoVoices = selectedVoices.mia && selectedVoices.daniel && selectedVoices.mia.name !== selectedVoices.daniel.name;
  setStatus(hasTwoVoices ? "Using two different voices." : "Using available browser voice.");
}

function speakMessage(message, onEnd) {
  if (!synth) {
    setStatus("Speech is not supported in this browser.");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(message.querySelector(".text").textContent);
  const speaker = message.dataset.speaker;
  utterance.lang = "en-US";
  utterance.rate = speaker === "mia" ? 0.96 : 0.9;
  utterance.pitch = speaker === "mia" ? 1.12 : 0.82;
  utterance.voice = selectedVoices[speaker] || null;

  utterance.onstart = () => {
    clearActiveMessage();
    message.classList.add("is-speaking");
  };

  utterance.onend = () => {
    message.classList.remove("is-speaking");
    if (onEnd) onEnd();
  };

  utterance.onerror = () => {
    clearActiveMessage();
    setStatus("Could not play this line.");
  };

  synth.speak(utterance);
}

function playSingleMessage(message) {
  if (!synth) return;
  isRolePlayActive = false;
  isPlayingSequence = false;
  stopRecognition();
  synth.cancel();
  speakMessage(message);
}

function playSequence(index = 0) {
  if (!isPlayingSequence || index >= messages.length) {
    isPlayingSequence = false;
    clearActiveMessage();
    return;
  }

  speakMessage(messages[index], () => playSequence(index + 1));
}

allMessages.forEach((message) => {
  message.querySelector(".voice-button").addEventListener("click", () => playSingleMessage(message));
});

roleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedUserRole = button.dataset.role;
    roleButtons.forEach((roleButton) => {
      roleButton.setAttribute("aria-pressed", String(roleButton === button));
    });
  });
});

function stopCurrentActivity() {
  isRolePlayActive = false;
  isPlayingSequence = false;
  stopRecognition();
  if (synth) synth.cancel();
  clearActiveMessage();
}

function openDialogue(dialogueId, title) {
  stopCurrentActivity();
  dialogues.forEach((dialogue) => {
    dialogue.hidden = dialogue.dataset.dialogue !== dialogueId;
  });
  const activeDialogue = dialogues.find((dialogue) => dialogue.dataset.dialogue === dialogueId);
  messages = [...activeDialogue.querySelectorAll(".message")];
  messages.forEach((message) => message.querySelector(".answer-result")?.remove());
  activeDialogue.scrollTop = 0;
      playerTitle.textContent = title;
      currentDialogueId = dialogueId;
      updateProgressUI(dialogueId);
  setStatus("");
  dialogueListView.hidden = true;
  playerView.hidden = false;
}

dialogueCards.forEach((card) => {
  card.addEventListener("click", () => openDialogue(card.dataset.openDialogue, card.dataset.title));
});

backToDialoguesButton.addEventListener("click", () => {
  stopCurrentActivity();
  playerView.hidden = true;
  dialogueListView.hidden = false;
});

playAllButton.addEventListener("click", () => {
  if (!synth) return;
  isRolePlayActive = false;
  stopRecognition();
  synth.cancel();
  isPlayingSequence = true;
  playSequence();
});

startRolePlayButton.addEventListener("click", () => {
  if (!synth) {
    setStatus("Speech is not supported in this browser.");
    return;
  }
  if (!SpeechRecognition) {
    setStatus("Распознавание речи не поддерживается этим браузером.");
    return;
  }

  isPlayingSequence = false;
  isRolePlayActive = false;
  stopRecognition();
  synth.cancel();
  clearActiveMessage();
  messages.forEach((message) => message.querySelector(".answer-result")?.remove());
  isRolePlayActive = true;
  const selectedRoleName = roleButtons.find((button) => button.dataset.role === selectedUserRole).textContent;
  setStatus(`Вы играете за ${selectedRoleName}.`);
  processRolePlayLine(0);
});

stopAudioButton.addEventListener("click", () => {
  isRolePlayActive = false;
  isPlayingSequence = false;
  stopRecognition();
  if (synth) synth.cancel();
  clearActiveMessage();
  setStatus("Воспроизведение остановлено.");
});

toggleTranslationButton.addEventListener("click", () => {
  const shouldShow = toggleTranslationButton.getAttribute("aria-expanded") === "false";

  translations.forEach((translation) => {
    translation.hidden = !shouldShow;
  });
  toggleTranslationButton.setAttribute("aria-expanded", String(shouldShow));
  toggleTranslationButton.textContent = shouldShow ? "Скрыть перевод" : "Показать перевод";
});

if ("speechSynthesis" in window) {
  chooseVoices();
  speechSynthesis.addEventListener("voiceschanged", chooseVoices);
} else {
  setStatus("Speech is not supported in this browser.");
}
