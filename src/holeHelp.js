import { getRandomIntInclusive } from './utils.js';

const logic = (ans, rightAns, min, max) => {
  const totalPercentage = 100;
  const rightPersent = getRandomIntInclusive(min, max);
  let wrongPercent = totalPercentage - rightPersent;
  const hallAnswer = ans.map((item) => {
    if (item === rightAns) {
      const result = item.split(':');
      result[1] = `${rightPersent} %`;
      return result.join(': ');
    }
    const percent = getRandomIntInclusive(0, wrongPercent);
    const result = item.split(':');
    result[1] = `${percent} %`;
    wrongPercent -= percent;
    return result.join(': ');
  });
  console.log('Вот мнение нашего зала:');
  console.log(hallAnswer.join('   '));
  console.log(`Затруднились с ответом ${wrongPercent} %`);
  console.log('Напомним, что вам не обязательно с ним соглашаться.');
};

export default (question, roundNumber) => {
  console.log('Давайте спросим мнение у нашего уважаемого зала. Может быть он знает ответ?');
  const answers = question.slice(2).filter((item) => item !== '    ');
  const rightAnswer = question[1];
  if (roundNumber < 5) {
    logic(answers, rightAnswer, 70, 80);
  } else if (roundNumber < 10) {
    logic(answers, rightAnswer, 40, 60);
  } else if (roundNumber < 15) {
    logic(answers, rightAnswer, 0, 40);
  }
};
