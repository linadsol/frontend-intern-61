export default (question1, helps) => {
  let counter = 0;
  const question = [...question1];
  const rightAnswer = question[1];
  const wrigtIndex = Math.floor(Math.random() * 3);
  for (let i = 2; i < question.length; i += 1) {
    if (question[i] !== rightAnswer) {
      if (counter !== wrigtIndex) {
        question[i] = '    ';
      }
      counter += 1;
    }
  }
  console.log(question[0]);
  console.log(question.slice(2).join('    '));
  console.log(`У Вас есть подсказки: ${helps.join('  ')}`);
  return question;
};
