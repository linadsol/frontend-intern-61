import readlineSync from 'readline-sync';

function sayGreatings() {
  console.log('Добро пожаловать в игру "Кто хочет стать миллионером?"');
  const name = readlineSync.question('Наш сегодняшний участник: ');
  console.log(`Привет, ${name}!`);
  console.log('В эту игру можно играть в двух режимах: \n 1 - Игра с вопросами ОБЩЕЙ ЭРУДИЦИИ\n 2 - Игра с вопросами по IT специфике FRONTEND (HTML, CSS, JS, GIT)');
  let mode = '';
  mode = readlineSync.question('Нажмите 1 - для выбора первого режима игры  2 - для выбора второго режима игры\n');
  while (mode !== '1' && mode !== '2') {
    console.log('Вы ввели неверные данные :(');
    console.log('Нажмите 1 - для выбора первого режима игры  2 - для выбора второго режима игры');
    mode = readlineSync.question('');
  }
  console.log('Напомним правила игры:\n - Вас ждут 15 вопросов разной стоимости и сложности. \n - При ответе верно на все вопросы вы забираете главный приз - один миллион рублей!\n - Также вам доступны три подсказки: \n  <50/50>\n  <Помощь зала>\n  <Смс от друга>\nИспользовать их можно только один раз в любой момент игры.');
  console.log('Желаем удачи!\n');
  return [name, mode];
}

export default sayGreatings;
