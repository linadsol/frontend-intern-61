import { getRandomIntInclusive } from './utils.js';

export default (question, roundNumber) => {
  console.log('Привет, давно не общались :)');
  console.log('Я постарась тебе помочь.');
  console.log(`Тааак, ${question[0].toLowerCase()}`);
  const rightAnswer = question[1];
  if (roundNumber < 5) {
    console.log(`Хорошо что вопрос такой легкий, я уверен что ответ - ${rightAnswer}`);
  } else if (roundNumber < 10) {
    const randomNumber = getRandomIntInclusive(0, 100);
    if (randomNumber > 50) {
      console.log(`Да, вопрос не лёгкий, но я на днях читал об этом. Думаю ответ - ${question[rightAnswer]}`);
    } else {
      console.log(`Сложный вопрос. Я не уверен, но мне кажется, что ответ - ${question[getRandomIntInclusive(2, 5)]}`);
    }
  } else if (roundNumber < 14) {
    console.log(`Ох.... прости, я не знаю ответа на этот вопрос. Могу только угадать, пусть будет - ${question[getRandomIntInclusive(2, 5)]}`);
  }
};
