import sayGreatings from './src/cli.js';
import roundLogic from './src/gameRound.js';
import gameGen from './src/gameGenerator.js';
import answersRandomizer from './src/answersRandomizer.js';

const userName = sayGreatings();
const game = gameGen();
const helpTest = ['50/50  |', 'Помощь зала  |', 'СМС другу'];

const result = game.reduce((accum, curentItem, index) => {
  if (accum[0] === index) {
    const question = answersRandomizer(curentItem);
    return roundLogic(question, accum[1], accum[0]);
  }
  return accum;
}, [0, helpTest]);

console.log(`Поздравляю ${userName}!!! Ваш счет ${result[0]}`);
