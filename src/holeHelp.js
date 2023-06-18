import { getRandomIntInclusive } from './utils.js';

export default (question, roundNumber) => {
  console.log('Давайте спросим мнение у нашего уважаемого зала. Может быть он знает ответ?');
  const answers = question.slice(2);
  const rightAnswer = question[1];

  if (roundNumber < 5) {
    const totalPercentage = 100;
    const rightPersent = Math.floor(Math.random() * (100 - 70 + 1) + 70);
    let wrongPercent = totalPercentage - rightPersent;
    const hallAnswer = answers.map((item) => {
      if (item === rightAnswer) {
        const result = item.split(':');
        result[1] = rightPersent;
        return result.join(': ');
      }
      const percent = getRandomIntInclusive(0, wrongPercent);
      const result = item.split(':');
      result[1] = percent;
      wrongPercent -= percent;
      return result.join(': ');
    });
    console.log('Вот мнение нашего зала:');
    console.log(hallAnswer.join('   '));
    console.log('Напомним, что вам не обязательно с ним соглашаться.');
  } else if (roundNumber < 10) {
    const totalPercentage = 100;
    const rightPersent = Math.floor(Math.random() * (60 - 50 + 1) + 50);
    let wrongPercent = totalPercentage - rightPersent;
    const hallAnswer = answers.map((item) => {
      if (item === rightAnswer) {
        const result = item.split(':');
        result[1] = rightPersent;
        return result.join(': ');
      }
      const percent = getRandomIntInclusive(0, wrongPercent);
      const result = item.split(':');
      result[1] = percent;
      wrongPercent -= percent;
      return result.join(': ');
    });
    console.log('Вот мнение нашего зала:');
    console.log(hallAnswer.join('   '));
    console.log('Напомним, что вам не обязательно с ним соглашаться.');
  } else if (roundNumber < 14) {
    const totalPercentage = 100;
    const rightPersent = Math.floor(Math.random() * (40 - 10 + 1) + 10);
    let wrongPercent = totalPercentage - rightPersent;
    const hallAnswer = answers.map((item) => {
      if (item === rightAnswer) {
        const result = item.split(':');
        result[1] = rightPersent;
        return result.join(': ');
      }
      const percent = getRandomIntInclusive(0, wrongPercent);
      const result = item.split(':');
      result[1] = percent;
      wrongPercent -= percent;
      return result.join(': ');
    });
    console.log('Вот мнение нашего зала:');
    console.log(hallAnswer.join('   '));
    console.log('Напомним, что вам не обязательно с ним соглашаться.');
  }
};
