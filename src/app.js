const PROGRESS_STORAGE_KEY = "english-trainer-progress-v1";
const CUSTOM_DIALOGUES_STORAGE_KEY = "english-trainer-custom-dialogues-v1";
const VOICE_SETTINGS_STORAGE_KEY = "english-trainer-voice-settings-v1";
const JSON_EXAMPLE = {
  id: "weekend-plans",
  title: "Планы на выходные",
  description: "Alice и Bob обсуждают выходные",
  ariaLabel: "Weekend plans dialogue",
  lines: [
    { speaker: "alice", name: "Alice", text: "What are you doing this weekend?", translation: "Что ты делаешь на этих выходных?" },
    { speaker: "bob", name: "Bob", text: "I'm going to visit my friends.", translation: "Я собираюсь навестить друзей." },
    { speaker: "alice", name: "Alice", text: "That sounds great. Can I join you?", translation: "Звучит здорово. Можно с вами?" },
    { speaker: "bob", name: "Bob", text: "Of course. I'll send you the address.", translation: "Конечно. Я пришлю тебе адрес." },
  ],
};

function validateDialogue(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Ожидается JSON-объект диалога.");
  if (typeof value.id !== "string" || !/^[a-z0-9-]+$/.test(value.id)) throw new Error("id должен содержать только a–z, цифры и дефисы.");
  if (window.DIALOGUES.some((dialogue) => dialogue.id === value.id)) throw new Error("Этот id занят встроенным диалогом.");
  if (typeof value.title !== "string" || !value.title.trim()) throw new Error("Укажите непустой title.");
  if (!Array.isArray(value.lines) || value.lines.length < 2) throw new Error("lines должен содержать минимум две реплики.");

  const lines = value.lines.map((line, index) => {
    if (!line || typeof line !== "object") throw new Error(`Реплика ${index + 1} должна быть объектом.`);
    if (typeof line.speaker !== "string" || !/^[a-zA-Z0-9_-]+$/.test(line.speaker)) throw new Error(`Реплика ${index + 1}: speaker должен быть строковым идентификатором.`);
    for (const field of ["name", "text", "translation"]) {
      if (typeof line[field] !== "string" || !line[field].trim()) throw new Error(`Реплика ${index + 1}: заполните ${field}.`);
    }
    return { speaker: line.speaker, name: line.name.trim(), text: line.text.trim(), translation: line.translation.trim() };
  });

  const speakers = [...new Set(lines.map((line) => line.speaker))];
  if (speakers.length !== 2) throw new Error("В диалоге должно быть ровно два разных спикера.");
  speakers.forEach((speaker) => {
    const names = new Set(lines.filter((line) => line.speaker === speaker).map((line) => line.name));
    if (names.size !== 1) throw new Error(`У спикера ${speaker} должно быть одно имя во всех репликах.`);
  });

  return {
    id: value.id,
    title: value.title.trim(),
    description: typeof value.description === "string" ? value.description.trim() : "Пользовательский диалог",
    ariaLabel: typeof value.ariaLabel === "string" ? value.ariaLabel.trim() : value.title.trim(),
    lines,
  };
}

function loadCustomDialogues() {
  try {
    const stored = JSON.parse(localStorage.getItem(CUSTOM_DIALOGUES_STORAGE_KEY));
    if (!Array.isArray(stored)) return [];
    return stored.flatMap((dialogue) => {
      try { return [validateDialogue(dialogue)]; } catch (error) { return []; }
    });
  } catch (error) {
    return [];
  }
}

let customDialogues = loadCustomDialogues();
const dialogueData = [
  ...window.DIALOGUES.map((dialogue) => ({ ...dialogue, source: "built-in" })),
  ...customDialogues.map((dialogue) => ({ ...dialogue, id: `custom-${dialogue.id}`, originalId: dialogue.id, source: "custom" })),
];

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

function getSpeakers(dialogue) {
  return [...new Map(dialogue.lines.map((line) => [line.speaker, { id: line.speaker, name: line.name }])).values()];
}

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
    <button class="dialogue-card" type="button" data-open-dialogue="${dialogue.id}" data-title="${escapeHTML(dialogue.title)}">
      <span class="dialogue-card-title">${escapeHTML(dialogue.title)}</span>
      <span class="dialogue-card-description">${escapeHTML(dialogue.description)} — ${dialogue.lines.length} реплики</span>
      <span class="source-badge ${dialogue.source === "custom" ? "custom" : ""}">${dialogue.source === "custom" ? "Свой JSON" : "Встроенный"}</span>
      <span class="progress-row">
        <span class="progress-track"><span class="progress-value" style="width: ${dialogueProgress.percent}%"></span></span>
        <span class="progress-label">${dialogueProgress.percent}%</span>
      </span>
    </button>
  `;
  }).join("");
}

function renderDialogues() {
  dialoguePlayerContent.innerHTML = dialogueData.map((dialogue, dialogueIndex) => {
    const firstSpeakerId = getSpeakers(dialogue)[0].id;
    return `
    <section class="chat" id="dialogue-${dialogue.id}" data-dialogue="${dialogue.id}" aria-label="${escapeHTML(dialogue.ariaLabel)}" ${dialogueIndex === 0 ? "" : "hidden"}>
      ${dialogue.lines.map((line, lineIndex) => `
        <article class="message ${line.speaker === firstSpeakerId ? "left" : "right"}" data-speaker="${line.speaker}" data-dialogue-id="${dialogue.id}" data-line-index="${lineIndex}">
          <div class="message-header">
            <span class="speaker">${escapeHTML(line.name)}</span>
            <button class="voice-button" type="button" aria-label="Play ${escapeHTML(line.name)} line">▶</button>
          </div>
          <p class="text">${escapeHTML(line.text)}</p>
          <p class="translation" lang="ru" hidden>${escapeHTML(line.translation)}</p>
        </article>
      `).join("")}
    </section>
  `;
  }).join("");
}

renderDialogueList();
renderDialogues();

const dialogues = [...document.querySelectorAll(".chat[data-dialogue]")];
const allMessages = [...document.querySelectorAll(".message")];
let messages = [...dialogues[0].querySelectorAll(".message")];
const playAllButton = document.querySelector("#playAll");
const stopAudioButton = document.querySelector("#stopAudio");
const startRolePlayButton = document.querySelector("#startRolePlay");
const roleButtonsContainer = document.querySelector("#roleButtons");
let roleButtons = [];
const dialogueCards = [...document.querySelectorAll("[data-open-dialogue]")];
const dialogueListView = document.querySelector("#dialogueListView");
const playerView = document.querySelector("#playerView");
const playerTitle = document.querySelector("#playerTitle");
const playerProgress = document.querySelector("#playerProgress");
const backToDialoguesButton = document.querySelector("#backToDialogues");
const importView = document.querySelector("#importView");
const openImportButton = document.querySelector("#openImport");
const backFromImportButton = document.querySelector("#backFromImport");
const copyJsonExampleButton = document.querySelector("#copyJsonExample");
const saveDialogueJsonButton = document.querySelector("#saveDialogueJson");
const dialogueJsonInput = document.querySelector("#dialogueJson");
const importStatus = document.querySelector("#importStatus");
const toggleTranslationButton = document.querySelector("#toggleTranslation");
const translations = [...document.querySelectorAll(".translation")];
const voiceStatus = document.querySelector("#voiceStatus");
const toggleVoiceSettingsButton = document.querySelector("#toggleVoiceSettings");
const voiceSettingsPanel = document.querySelector("#voiceSettingsPanel");
const synth = window.speechSynthesis;
let voices = [];
let preferredVoices = [];
let selectedVoices = {};
let isPlayingSequence = false;
let isRolePlayActive = false;
let currentRecognition = null;
let selectedUserRole = null;
let currentDialogueId = null;

function loadVoiceSettings() {
  try {
    const stored = JSON.parse(localStorage.getItem(VOICE_SETTINGS_STORAGE_KEY));
    return stored && typeof stored === "object" && !Array.isArray(stored) ? stored : {};
  } catch (error) {
    return {};
  }
}

let voiceSettings = loadVoiceSettings();

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

toggleTranslationButton.setAttribute("aria-controls", dialogues.map((dialogue) => dialogue.id).join(" "));

function setStatus(text) {
  voiceStatus.textContent = text;
}

function clearActiveMessage() {
  allMessages.forEach((message) => message.classList.remove("is-speaking", "is-listening"));
}

function scrollToMessage(message) {
  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  window.requestAnimationFrame(() => {
    message.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "center",
      inline: "nearest",
    });
  });
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

function showAnswerResult(message, transcript, comparison, onRetry) {
  let result = message.querySelector(".answer-result");
  if (!result) {
    result = document.createElement("p");
    result.className = "answer-result";
    message.append(result);
  }
  result.className = `answer-result ${comparison.isCorrect ? "correct" : "incorrect"}`;
  const similarityPercent = Math.round(comparison.similarity * 100);
  result.textContent = `${comparison.isCorrect ? "✓ Реплика засчитана." : "Попробуйте точнее."} Распознано: “${transcript}”. Совпадение: ${similarityPercent}%.`;
  if (!comparison.isCorrect && onRetry) {
    const retryButton = document.createElement("button");
    retryButton.className = "retry-answer-button";
    retryButton.type = "button";
    retryButton.textContent = "Повторить фразу";
    retryButton.addEventListener("click", () => {
      if (!isRolePlayActive) return;
      retryButton.remove();
      onRetry();
    }, { once: true });
    result.append(" ", retryButton);
  }
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
    const roleSummary = getSpeakers(dialogue).map((speaker) => {
      const total = dialogue.lines.filter((line) => line.speaker === speaker.id).length;
      const completed = dialogue.lines.filter((line, index) => line.speaker === speaker.id && completedLines.has(`${speaker.id}:${index}`)).length;
      const name = speaker.name;
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
  scrollToMessage(message);
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
    showAnswerResult(message, transcript.trim(), comparison, () => listenToMessage(message, index));
    scrollToMessage(message);
    if (comparison.isCorrect) {
      saveSuccessfulLine(message);
      setStatus("Реплика принята.");
      window.setTimeout(() => processRolePlayLine(index + 1), 650);
    } else {
      setStatus("Совпадение меньше 85%. Нажмите «Повторить фразу» и попробуйте ещё раз.");
    }
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
  preferredVoices = englishVoices.length ? englishVoices : voices;

  if (!preferredVoices.length) {
    setStatus("No browser voices found.");
    return;
  }

  if (currentDialogueId) {
    const dialogue = dialogueData.find((item) => item.id === currentDialogueId);
    assignVoices(dialogue);
    renderVoiceSettings(dialogue);
  }
  else setStatus(preferredVoices.length > 1 ? "Using two different voices." : "Using available browser voice.");
}

function getDefaultVoiceSettings(index) {
  return {
    voiceURI: preferredVoices[index]?.voiceURI || preferredVoices[0]?.voiceURI || "",
    rate: index === 0 ? 0.96 : 0.9,
    pitch: index === 0 ? 1.08 : 0.9,
  };
}

function getSpeakerVoiceSettings(speakerId, index) {
  const defaults = getDefaultVoiceSettings(index);
  const saved = voiceSettings[speakerId] || {};
  const savedRate = Number(saved.rate);
  const savedPitch = Number(saved.pitch);
  return {
    voiceURI: typeof saved.voiceURI === "string" ? saved.voiceURI : defaults.voiceURI,
    rate: Number.isFinite(savedRate) ? Math.min(1.5, Math.max(0.5, savedRate)) : defaults.rate,
    pitch: Number.isFinite(savedPitch) ? Math.min(1.5, Math.max(0.5, savedPitch)) : defaults.pitch,
  };
}

function saveVoiceSettings() {
  try {
    localStorage.setItem(VOICE_SETTINGS_STORAGE_KEY, JSON.stringify(voiceSettings));
  } catch (error) {
    // Settings remain available until the page is closed if storage is unavailable.
  }
}

function assignVoices(dialogue) {
  selectedVoices = {};
  getSpeakers(dialogue).forEach((speaker, index) => {
    const settings = getSpeakerVoiceSettings(speaker.id, index);
    selectedVoices[speaker.id] = preferredVoices.find((voice) => voice.voiceURI === settings.voiceURI)
      || preferredVoices[index]
      || preferredVoices[0]
      || null;
  });
  const assigned = Object.values(selectedVoices).filter(Boolean);
  setStatus(assigned.length > 1 && assigned[0].name !== assigned[1].name ? "Using two different voices." : "Using available browser voice.");
}

function renderVoiceSettings(dialogue) {
  if (!dialogue) return;
  const speakers = getSpeakers(dialogue);
  voiceSettingsPanel.innerHTML = speakers.map((speaker, index) => {
    const settings = getSpeakerVoiceSettings(speaker.id, index);
    const assignedVoice = selectedVoices[speaker.id];
    return `
      <fieldset class="voice-settings-card" data-voice-speaker="${escapeHTML(speaker.id)}">
        <legend>${escapeHTML(speaker.name)}</legend>
        <label class="voice-setting-label">
          <span>Голос</span>
          <select class="voice-select" data-voice-setting="voiceURI" ${preferredVoices.length ? "" : "disabled"}>
            ${preferredVoices.length ? preferredVoices.map((voice) => `
              <option value="${escapeHTML(voice.voiceURI)}" ${voice.voiceURI === assignedVoice?.voiceURI ? "selected" : ""}>${escapeHTML(voice.name)} (${escapeHTML(voice.lang)})</option>
            `).join("") : '<option value="">Нет доступных голосов</option>'}
          </select>
        </label>
        <label class="voice-setting-label range-setting">
          <span>Скорость <output>${settings.rate.toFixed(2)}</output></span>
          <input type="range" min="0.5" max="1.5" step="0.05" value="${settings.rate}" data-voice-setting="rate">
        </label>
        <label class="voice-setting-label range-setting">
          <span>Тембр <output>${settings.pitch.toFixed(2)}</output></span>
          <input type="range" min="0.5" max="1.5" step="0.05" value="${settings.pitch}" data-voice-setting="pitch">
        </label>
      </fieldset>
    `;
  }).join("");
}

function speakMessage(message, onEnd) {
  if (!synth) {
    setStatus("Speech is not supported in this browser.");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(message.querySelector(".text").textContent);
  const speaker = message.dataset.speaker;
  const activeDialogueData = dialogueData.find((dialogue) => dialogue.id === currentDialogueId);
  const speakerIndex = activeDialogueData ? getSpeakers(activeDialogueData).findIndex((item) => item.id === speaker) : 0;
  const settings = getSpeakerVoiceSettings(speaker, Math.max(0, speakerIndex));
  utterance.lang = "en-US";
  utterance.rate = settings.rate;
  utterance.pitch = settings.pitch;
  utterance.voice = selectedVoices[speaker] || null;

  utterance.onstart = () => {
    clearActiveMessage();
    message.classList.add("is-speaking");
    scrollToMessage(message);
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

function setupRoleButtons(dialogue) {
  const speakers = getSpeakers(dialogue);
  selectedUserRole = speakers[0].id;
  roleButtonsContainer.innerHTML = speakers.map((speaker, index) => `
    <button class="role-button" type="button" data-role="${speaker.id}" aria-pressed="${index === 0}">${escapeHTML(speaker.name)}</button>
  `).join("");
  roleButtons = [...roleButtonsContainer.querySelectorAll(".role-button")];
  roleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedUserRole = button.dataset.role;
      roleButtons.forEach((roleButton) => roleButton.setAttribute("aria-pressed", String(roleButton === button)));
    });
  });
}

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
  const activeDialogueData = dialogueData.find((dialogue) => dialogue.id === dialogueId);
  messages = [...activeDialogue.querySelectorAll(".message")];
  messages.forEach((message) => message.querySelector(".answer-result")?.remove());
  activeDialogue.scrollTop = 0;
  playerTitle.textContent = title;
  currentDialogueId = dialogueId;
  setupRoleButtons(activeDialogueData);
  assignVoices(activeDialogueData);
  renderVoiceSettings(activeDialogueData);
  updateProgressUI(dialogueId);
  setStatus("");
  dialogueListView.hidden = true;
  playerView.hidden = false;
}

dialogueCards.forEach((card) => {
  card.addEventListener("click", () => openDialogue(card.dataset.openDialogue, card.dataset.title));
});

function setImportStatus(text, type = "") {
  importStatus.textContent = text;
  importStatus.className = `import-status ${type}`.trim();
}

openImportButton.addEventListener("click", () => {
  dialogueListView.hidden = true;
  importView.hidden = false;
  setImportStatus("");
});

backFromImportButton.addEventListener("click", () => {
  importView.hidden = true;
  dialogueListView.hidden = false;
});

copyJsonExampleButton.addEventListener("click", async () => {
  const json = JSON.stringify(JSON_EXAMPLE, null, 2);
  dialogueJsonInput.value = json;
  try {
    await navigator.clipboard.writeText(json);
    setImportStatus("Пример JSON скопирован.", "success");
  } catch (error) {
    dialogueJsonInput.focus();
    dialogueJsonInput.select();
    const copied = document.execCommand("copy");
    setImportStatus(copied ? "Пример JSON скопирован." : "Пример вставлен в поле — скопируйте его вручную.", copied ? "success" : "");
  }
});

saveDialogueJsonButton.addEventListener("click", () => {
  try {
    const parsed = JSON.parse(dialogueJsonInput.value);
    const validated = validateDialogue(parsed);
    const existingIndex = customDialogues.findIndex((dialogue) => dialogue.id === validated.id);
    if (existingIndex >= 0) customDialogues[existingIndex] = validated;
    else customDialogues.push(validated);
    localStorage.setItem(CUSTOM_DIALOGUES_STORAGE_KEY, JSON.stringify(customDialogues));
    setImportStatus("Диалог сохранён. Обновляю список…", "success");
    window.setTimeout(() => window.location.reload(), 500);
  } catch (error) {
    const message = error instanceof SyntaxError ? `Некорректный JSON: ${error.message}` : error.message;
    setImportStatus(message || "Не удалось сохранить диалог.", "error");
  }
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

toggleVoiceSettingsButton.addEventListener("click", () => {
  const shouldShow = toggleVoiceSettingsButton.getAttribute("aria-expanded") === "false";
  voiceSettingsPanel.hidden = !shouldShow;
  toggleVoiceSettingsButton.setAttribute("aria-expanded", String(shouldShow));
  toggleVoiceSettingsButton.textContent = shouldShow ? "Скрыть настройки" : "Настройки голосов";
});

voiceSettingsPanel.addEventListener("input", (event) => {
  const control = event.target.closest("[data-voice-setting]");
  if (!control) return;
  const card = control.closest("[data-voice-speaker]");
  const speakerId = card.dataset.voiceSpeaker;
  const dialogue = dialogueData.find((item) => item.id === currentDialogueId);
  const speakerIndex = getSpeakers(dialogue).findIndex((speaker) => speaker.id === speakerId);
  const current = getSpeakerVoiceSettings(speakerId, speakerIndex);
  const key = control.dataset.voiceSetting;
  current[key] = key === "voiceURI" ? control.value : Number(control.value);
  voiceSettings[speakerId] = current;
  saveVoiceSettings();
  assignVoices(dialogue);
  if (control.type === "range") control.closest("label").querySelector("output").textContent = Number(control.value).toFixed(2);
});

if ("speechSynthesis" in window) {
  chooseVoices();
  speechSynthesis.addEventListener("voiceschanged", chooseVoices);
} else {
  setStatus("Speech is not supported in this browser.");
}
