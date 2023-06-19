import baze from '../data/data.js';

 describe('Проверка полной структуры массива', () => {
    it('Каждый элемент массива является массивом с 15 элементами и каждый массив вопросов содержит 5 элементов', () => {
       baze.forEach(item => {
          expect(Array.isArray(item)).toBe(true);
          expect(item.length).toBe(15);
          item.forEach(question => {
             expect(Array.isArray(question)).toBe(true);
             expect(question.length).toBe(5);
          });
       });
    });
 });