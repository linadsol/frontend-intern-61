import holeHelp from '../src/holeHelp.js';
import genGame from '../src/gameGenerator.js';
import { getRandomIntInclusive } from '../src/utils.js';
import answerRandomizer from '../src/answersRandomizer.js';

const game = genGame();
const question = game[getRandomIntInclusive(0, 14)];
const questionMarked = answerRandomizer(question);
const rightAnswer = questionMarked[1];
const answers = questionMarked.slice(2);
const i = answers.reduce((acc, item, index) => {
  if (item === rightAnswer) return index;
  return acc;
}, 0);

const takeNumberPercent = (ans, index) => {
  const rezultArr1 = ans[index].split(':').slice(1).flat();
  return Number(rezultArr1[0].trim().slice(0, -1));
};

const rezult1 = holeHelp(questionMarked, 4);
const rezult2 = holeHelp(questionMarked, 8);
const rezult3 = holeHelp(questionMarked, 12);

test('Проверка процентов', () => {
  const persent1 = takeNumberPercent(rezult1, i);
  expect(((persent1 >= 70) && (persent1 <= 80))).toBeTruthy();

  const persent2 = takeNumberPercent(rezult2, i);
  expect(((persent2 >= 40) && (persent2 <= 60))).toBeTruthy();

  const persent3 = takeNumberPercent(rezult3, i);
  expect(((persent3 >= 0) && (persent3 <= 40))).toBeTruthy();
});
