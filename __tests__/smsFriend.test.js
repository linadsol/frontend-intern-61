import smsFriend from '../src/smsFriend.js';
import data from '../data/data.js';
import genGame from '../src/gameGenerator.js';
import { getRandomIntInclusive } from '../src/utils.js';
import answerRandomizer from '../src/answersRandomizer.js';
import fiftyFifty from '../src/fiftyFifty.js';

const game = genGame(data);
const question = game[getRandomIntInclusive(0, 14)];
const questionMarked = answerRandomizer(question);
const help = ['50/50  |', 'Помощь зала  |', 'СМС другу'];
const questionAfterFifty = fiftyFifty(questionMarked, help);

test('Проверка фугкции помощь зала на возврат варианта ответа', () => {
  const option1 = smsFriend(questionMarked, 5);
  expect(option1[0] && option1[1]).toBeDefined();
  const option2 = smsFriend(questionMarked, 9);
  expect(option2[0] && option2[1]).toBeDefined();
  const option3 = smsFriend(questionMarked, 13);
  expect(option3[0] && option3[1]).toBeDefined();
  const option4 = smsFriend(questionAfterFifty, 8);
  expect(option4[0] && option4[1]).toBeDefined();
});
