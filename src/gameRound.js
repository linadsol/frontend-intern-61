import readlineSync from 'readline-sync';
import smsFriend from './smsFriend.js';
import holeHelp from './holeHelp.js';
import fiftyFifty from './fiftyFifty.js';
import winningsCounter from './winningsCounter.js';

export default (question1, helpy, roundNumbery = 0) => {
  let question = [...question1];
  console.log(question[0]);
  const rightAnswer = question[1];
  const help = [...helpy];
  let takeMoney = false;
  const goal = winningsCounter(roundNumbery);
  let roundNumber = roundNumbery;

  const helpExpression = (helps, money = 0) => {
    console.log('Вы уже использовали эту подсказку');
    console.log(`У Вас есть подсказки: ${helps.join('  ')}`);
    console.log('Укажите правильный вариант ответа или введите 1 - для подсказки 50/50; 2 - для подсказки "Помощь зала"; 3 - для выбора подсказки "СМС другу"');
    console.log(`Сейчас Ваш выигрыш составляет ${money} рублей, если вы хотите его забрать, введите значок "$"`);
  };

  const answers = question.slice(2);
  console.log(answers.join('   '));
  console.log(' ');
  console.log(`У Вас есть подсказки: ${help.join('  ')}`);
  console.log('Укажите правильный вариант ответа или введите 1 - для подсказки 50/50; 2 - для подсказки "Помощь зала"; 3 - для выбора подсказки "СМС другу"');
  console.log(`Сейчас Ваш выигрыш составляет ${goal} рублей, если вы хотите его забрать, введите значок "$"`);
  const userAnswer = readlineSync.question('');
  let normalaizedUserAnswer = userAnswer.toUpperCase();

  while (normalaizedUserAnswer !== 'A' && normalaizedUserAnswer !== 'B' && normalaizedUserAnswer !== 'C' && normalaizedUserAnswer !== 'D') {
    let newAnswer = normalaizedUserAnswer;
    if (normalaizedUserAnswer === '1') {
      if (help[0] === '    ') {
        helpExpression(help, goal);
      } else {
        help[0] = '    ';
        question = [...fiftyFifty(question, help)];
        // подсказка 50/50
      }
      newAnswer = readlineSync.question('');
    } else if (normalaizedUserAnswer === '2') {
      if (help[1] === '    ') {
        helpExpression(help, goal);
      } else {
        help[1] = '    ';
        holeHelp(question, roundNumber);
      }
      newAnswer = readlineSync.question('');
    } else if (normalaizedUserAnswer === '3') {
      if (help[2] === '    ') {
        helpExpression(help, goal);
      } else {
        help[2] = '    ';
        smsFriend(question, roundNumber);
      }
      newAnswer = readlineSync.question('');
    } else if (normalaizedUserAnswer === '$') {
      takeMoney = true;
      break;
    } else {
      console.log('Вы ввели неверные данные...');
      console.log('Введите вариант ответа в виде буквы на английском языке в любом регистре или число от 1 до 3, если выхотите использовать подсказку');
      console.log('Чтобы забрать выигрыш введите "$"');
      newAnswer = readlineSync.question('');
    }
    normalaizedUserAnswer = newAnswer.toUpperCase();
  }
  if (normalaizedUserAnswer === rightAnswer.slice(0, 1)) {
    console.log('\nЭто правильный ответ!\n');
    roundNumber += 1;
  } else if (normalaizedUserAnswer === 'A' || normalaizedUserAnswer === 'B' || normalaizedUserAnswer === 'C' || normalaizedUserAnswer === 'D') {
    console.log('\nОтвет не правильный...');
    console.log(`Правильный ответ ${rightAnswer}\n`);
  }
  return [roundNumber, help, takeMoney];
};
