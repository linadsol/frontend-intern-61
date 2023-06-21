import fiftyFifty from '../src/fiftyFifty.js';
import data from '../data/data.js';
import genGame from '../src/gameGenerator.js';
import { getRandomIntInclusive } from '../src/utils.js';

const game = genGame(data);
const question = game[getRandomIntInclusive(0, 14)];
const help = ['    ', 'Помощь зала  |', 'СМС другу'];

test('Подсказка 50/50', () => {
  const newQestion = fiftyFifty(question, help);
  expect(Array.isArray(newQestion)).toBe(true);
  let i = 0;
  newQestion.forEach((item) => {
    if (item === '    ') i += 1;
  });
  expect(i).toEqual(2);
  expect(newQestion.length).toEqual(5);
});
