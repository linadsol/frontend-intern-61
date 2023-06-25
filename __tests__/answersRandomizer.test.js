import answersRandomizer from '../src/answersRandomizer.js';
import baze from '../data/data.js';

const elementOfData = baze[0][1];
const check1 = answersRandomizer(elementOfData);
const check2 = check1[1].slice(3);

test('Проверка рандомайзера вопросов', () => {
  expect(Array.isArray(check1)).toBe(true);
  expect(check1.length).toBe(6);
  expect(check2).toBe(elementOfData[1]);

//    console.log(elementOfData);
//    console.log(elementOfData[1]);
//    console.log(check1);
//    console.log(check2);
});
