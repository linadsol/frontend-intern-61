import { getRandomIntInclusive } from './utils.js';

export default (question, roundNumber) => {
  const normalizeQuestion = question.filter((item) => item !== '    ');
  const randomAnswer = normalizeQuestion[getRandomIntInclusive(2, normalizeQuestion.length - 1)];
  const rightAnswer = normalizeQuestion[1];

  console.log('');
  console.log('Привет, давно не общались :)');
  console.log('Я постарась тебе помочь.');
  console.log(`Тааак, ${normalizeQuestion[0].toLowerCase()}`);

  if (roundNumber < 5) {
    console.log(`Хорошо что вопрос такой легкий, я уверен что ответ - ${rightAnswer}`);
  } else if (roundNumber < 10) {
    const randomNumber = getRandomIntInclusive(0, 100);
    if (randomNumber > 50) {
      console.log(`Да, вопрос не лёгкий, но я на днях читал об этом. Думаю ответ - ${rightAnswer}`);
    } else {
      console.log(`Это сложный вопрос. Я не уверен и могу ошибиться, но мне кажется, что ответ - ${randomAnswer}`);
    }
  } else if (roundNumber < 14) {
    console.log(`Ох.... прости, я не знаю ответа на этот вопрос. Могу только угадать, пусть будет - ${randomAnswer}`);
  }
  return [rightAnswer, randomAnswer];
};
