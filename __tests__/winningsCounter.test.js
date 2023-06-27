import winningsCounter from '../src/winningsCounter.js';

const option1 = [1, true];
const option2 = [2, true];
const option3 = [3, true];
const option4 = [4, true];
const option5 = [5, true];
const option6 = [6, true];
const option7 = [7, true];
const option8 = [8, true];
const option9 = [9, true];
const option10 = [15, true];
const option11 = [10, true];
const option12 = [11, true];

const option20 = [4, false];
const option30 = [8, false];
const option40 = [10, false];

test('Проверка генерации денежного приза', () => {
  expect(winningsCounter(option1[0], option1[1])).toBe(100);
  expect(winningsCounter(option2[0], option2[1])).toBe(200);
  expect(winningsCounter(option3[0], option3[1])).toBe(300);
  expect(winningsCounter(option4[0], option4[1])).toBe(500);
  expect(winningsCounter(option5[0], option5[1])).toBe(1000);
  expect(winningsCounter(option6[0], option6[1])).toBe(2000);
  expect(winningsCounter(option7[0], option7[1])).toBe(4000);
  expect(winningsCounter(option8[0], option8[1])).toBe(8000);
  expect(winningsCounter(option9[0], option9[1])).toBe(16000);
  expect(winningsCounter(option10[0], option10[1])).toBe(1000000);
  expect(winningsCounter(option11[0], option11[1])).toBe(32000);
  expect(winningsCounter(option12[0], option12[1])).toBe(64000);

  expect(winningsCounter(option20[0], option20[1])).toBe(0);
  expect(winningsCounter(option30[0], option30[1])).toBe(1000);
  expect(winningsCounter(option40[0], option40[1])).toBe(32000);
});
