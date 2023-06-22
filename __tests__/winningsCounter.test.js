import winningsCounter from '../src/winningsCounter.js';

const option1 = [4, true];
const option2 = [4, false];
const option3 = [8, true];
const option4 = [8, false];
const option5 = [15, true];
const option6 = [15, false];
const option7 = [10, false];

test('Проверка генерации денежного приза', () => {
  expect(winningsCounter(option1[0], option1[1])).toBe(500);
  expect(winningsCounter(option2[0], option2[1])).toBe(0);
  expect(winningsCounter(option3[0], option3[1])).toBe(8000);
  expect(winningsCounter(option4[0], option4[1])).toBe(1000);
  expect(winningsCounter(option5[0], option5[1])).toBe(1000000);
  expect(winningsCounter(option6[0], option6[1])).toBe(1000000);
  expect(winningsCounter(option7[0], option7[1])).toBe(64000);
});
