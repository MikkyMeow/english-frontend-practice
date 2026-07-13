const contractions = {
  "i'm": ["i am"],
  "i'll": ["i will"],
  "i've": ["i have"],
  "i'd": ["i would", "i had"],
  "you're": ["you are"],
  "you'll": ["you will"],
  "you've": ["you have"],
  "you'd": ["you would", "you had"],
  "he's": ["he is", "he has"],
  "she's": ["she is", "she has"],
  "it's": ["it is", "it has"],
  "we're": ["we are"],
  "we'll": ["we will"],
  "we've": ["we have"],
  "they're": ["they are"],
  "they'll": ["they will"],
  "they've": ["they have"],
  "that's": ["that is", "that has"],
  "there's": ["there is", "there has"],
  "what's": ["what is", "what has"],
  "don't": ["do not"],
  "doesn't": ["does not"],
  "didn't": ["did not"],
  "isn't": ["is not"],
  "aren't": ["are not"],
  "wasn't": ["was not"],
  "can't": ["cannot", "can not"],
  "won't": ["will not"],
  "wouldn't": ["would not"],
  "haven't": ["have not"],
};

function expandContractions(text) {
  const normalizedApostrophes = text.toLowerCase().replace(/[’‘`]/g, "'");
  let variants = [normalizedApostrophes];

  Object.entries(contractions).forEach(([shortForm, fullForms]) => {
    variants = variants.flatMap((variant) => {
      if (!variant.includes(shortForm)) return [variant];
      return fullForms.map((fullForm) => variant.split(shortForm).join(fullForm));
    });
  });

  return [...new Set(variants.map((variant) => variant.replace(/[^a-z0-9]/g, "")))];
}

function levenshtein(first, second) {
  const previous = Array.from({ length: second.length + 1 }, (_, index) => index);

  for (let row = 1; row <= first.length; row += 1) {
    let diagonal = previous[0];
    previous[0] = row;
    for (let column = 1; column <= second.length; column += 1) {
      const above = previous[column];
      previous[column] = first[row - 1] === second[column - 1]
        ? diagonal
        : Math.min(diagonal, above, previous[column - 1]) + 1;
      diagonal = above;
    }
  }

  return previous[second.length];
}

function compareAnswer(expected, actual) {
  const expectedVariants = expandContractions(expected);
  const actualVariants = expandContractions(actual);
  let distance = Infinity;
  let comparedLength = 1;

  expectedVariants.forEach((expectedVariant) => {
    actualVariants.forEach((actualVariant) => {
      const currentDistance = levenshtein(expectedVariant, actualVariant);
      if (currentDistance < distance) {
        distance = currentDistance;
        comparedLength = Math.max(expectedVariant.length, actualVariant.length, 1);
      }
    });
  });

  const similarity = Math.max(0, 1 - distance / comparedLength);
  return { distance, similarity, isCorrect: similarity > 0.9 };
}

window.compareAnswer = compareAnswer;
