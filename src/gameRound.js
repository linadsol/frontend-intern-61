import readlineSync from 'readline-sync';

export default (question, help, roundNumber = 0) => {
  console.log(question[0]);
  const rightAnswer = question[1];
  const answers = question.slice(2);
  console.log(answers.join('   '));
  console.log(`У Вас есть подсказки: ${help.join(',  ')}`);
  console.log('Укажите правильный вариант ответа или введите 1 - для подсказки 50/50; 2 - для подсказки "Помощь зала"; 3 - для выбора подсказки "СМС другу"');
  const userAnswer = readlineSync.question('');
  const normalaizedUserAnswer = userAnswer.toUpperCase();
  if (normalaizedUserAnswer === rightAnswer.slice(0, 1)) {
    console.log('Это правильный ответ!');
    // eslint-disable-next-line no-param-reassign
    roundNumber += 1;
  } else if (normalaizedUserAnswer === 'A' || normalaizedUserAnswer === 'B' || normalaizedUserAnswer === 'C' || normalaizedUserAnswer === 'D') {
    console.log('Ответ не правильный...');
    console.log(`Правильный ответ ${rightAnswer}`);
  }
  return roundNumber;
};
