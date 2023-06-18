import { getRandomIntInclusive } from './utils.js';

export default (question, roundNumber) => {
  console.log('Привет, давно не общались :)');
  console.log('Я постарась тебе помочь.');
  console.log(`Тааак, ${question[0].toLowerCase()}`)
  if (roundNumber < 5) {
    console.log(`Хорошо что вопрос такой легкий, я уверен что ответ - ${question[1]}`);
  } else if (roundNumber < 10) {
    console.log(`Сложный вопрос. Я не уверен, но мне кажется, что ответ - ${question[getRandomIntInclusive(2, 5)]}`);
  } else if (roundNumber < 14) {
    console.log(`Ох.... прости, я не знаю ответа на этот вопрос. Могу только угадать, пусть будет - ${question[getRandomIntInclusive(2, 5)]}`);
  }
};
