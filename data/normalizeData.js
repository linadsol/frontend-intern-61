import mergedData from './mergedData.js';

export default () => {
  const data = mergedData();
  const makeTheFirstAnswerCorrectInOptions = data.map(([question, answerOptions, answer]) => {
    const options = [];
    let correctAnswer = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const option of answerOptions) {
      const firstLetterInOption = option[0];
      if (answer === firstLetterInOption) {
        correctAnswer = option;
      } else {
        options.push(option);
      }
    }
    const normalazeOption = [correctAnswer, ...options];
    return [question, normalazeOption];
  });

  const normalizeDataWithoutFirstLetterInOptions = makeTheFirstAnswerCorrectInOptions.map(
    (oneQuestion) => {
      const [question, options] = oneQuestion;
      const optionsWithoutFirstLetter = options
        .filter((oneOption) => oneOption.length !== 0)
        .map((oneOption) => oneOption.slice(3));
      return [question, optionsWithoutFirstLetter];
    },
  );

  return normalizeDataWithoutFirstLetterInOptions;
};
