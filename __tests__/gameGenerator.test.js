import gameGenerator from '../src/gameGenerator.js';

const resultArray = gameGenerator();

describe('Тест результата работы генератора игры', () => {
  it(' 15 элементов (вопросы в виде массивов) и содержания вопросов в виде массива из вопроса и 4-х ответов', () => {
    expect(Array.isArray(resultArray)).toBe(true);
    expect(resultArray.length).toBe(15);
    resultArray.forEach((elementsResultArray) => {
      expect(Array.isArray(elementsResultArray)).toBe(true);
      expect(elementsResultArray.length).toBe(5);
    });
  });
});
