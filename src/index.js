import sayGreatings from './cli.js';
import roundLogic from './gameRound.js';
import gameGen from './gameGenerator.js';
import answersRandomizer from './answersRandomizer.js';
import winningsCounter from './winningsCounter.js';

export default () => {
  const userData = sayGreatings();
  const game = gameGen(userData[1]);
  const helpTest = ['50/50  |', 'Помощь зала  |', 'СМС другу'];

  const result = game.reduce((accum, curentItem, index) => {
    if (accum[0] === index) {
      const question = answersRandomizer(curentItem);
      return roundLogic(question, accum[1], accum[0]);
    }
    return accum;
  }, [0, helpTest], 0);
  const [counterRounds, , takeMoney] = result;

  console.log(`Поздравляю ${userData[0]}!!! Ваш счет пополнился на ${winningsCounter(counterRounds, takeMoney)} рублей`);
};
