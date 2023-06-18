import readlineSync from 'readline-sync';

export default (question, helpy, roundNumbery = 0) => {
  console.log(question[0]);
  const rightAnswer = question[1];
  const help = [...helpy];
  let roundNumber = roundNumbery;

  const helpExpression = (helps) => {
    console.log('Вы уже использовали эту подсказку');
    console.log(`У Вас есть подсказки: ${helps.join('  ')}`);
    console.log('Укажите правильный вариант ответа или введите 1 - для подсказки 50/50; 2 - для подсказки "Помощь зала"; 3 - для выбора подсказки "СМС другу"');
  };

  const answers = question.slice(2);
  console.log(answers.join('   '));
  console.log(`У Вас есть подсказки: ${help.join('  ')}`);
  console.log('Укажите правильный вариант ответа или введите 1 - для подсказки 50/50; 2 - для подсказки "Помощь зала"; 3 - для выбора подсказки "СМС другу"');
  const userAnswer = readlineSync.question('');
  let normalaizedUserAnswer = userAnswer.toUpperCase();

  while (normalaizedUserAnswer !== 'A' && normalaizedUserAnswer !== 'B' && normalaizedUserAnswer !== 'C' && normalaizedUserAnswer !== 'D') {
    let newAnswer = normalaizedUserAnswer;
    if (normalaizedUserAnswer === '1') {
      if (help[0] === '    ') {
        helpExpression(help);
      } else {
        help[0] = '    ';
      // подсказка 50/50
      }
      newAnswer = readlineSync.question('');
    } else if (normalaizedUserAnswer === '2') {
      if (help[1] === '    ') {
        helpExpression(help);
      } else {
        help[1] = '    ';
      // подсказка помощь зала
      }
      newAnswer = readlineSync.question('');
    } else if (normalaizedUserAnswer === '3') {
      if (help[2] === '    ') {
        helpExpression(help);
      } else {
        help[2] = '    ';
      // подсказка смс другу
      }
      newAnswer = readlineSync.question('');
    } else {
      console.log('Вы ввели неверные данные...');
      console.log('Введите вариант ответа в виде буквы на английском языке в любом регистре или число от 1 до 3, если выхотите использовать подсказку');
      newAnswer = readlineSync.question('');
    }
    normalaizedUserAnswer = newAnswer.toUpperCase();
  }
  if (normalaizedUserAnswer === rightAnswer.slice(0, 1)) {
    console.log('Это правильный ответ!');
    roundNumber += 1;
  } else if (normalaizedUserAnswer === 'A' || normalaizedUserAnswer === 'B' || normalaizedUserAnswer === 'C' || normalaizedUserAnswer === 'D') {
    console.log('Ответ не правильный...');
    console.log(`Правильный ответ ${rightAnswer}`);
  }
  return [roundNumber, help];
};
