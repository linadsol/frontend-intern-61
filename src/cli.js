import readlineSync from 'readline-sync';

function sayGreatings() {
  console.log('Добро пожаловать в игру "Кто хочет стать миллионером?"');
  const name = readlineSync.question('Наш сегодняшний участник: ');
  console.log(`Привет, ${name}!`);
  console.log('Напомним правила игры:\n - Вас ждут 15 вопросов разной стоимости и сложности. \n - При ответе верно на все вопросы вы забираете главный приз - один миллион рублей!\n - Также вам доступны три подсказки: \n  <50/50>\n  <Помощь зала>\n  <Смс от друга>\nИспользовать их можно только один раз в любой момент игры.');
  console.log('Желаем удачи!\n');
  return name;
}

export default sayGreatings;
