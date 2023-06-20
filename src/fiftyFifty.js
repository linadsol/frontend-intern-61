export default (question, helps) => {
  const rightAnswer = question[1];
  const wrongAnswer = [];
  for (let i = 2; i < question.length; i += 1) {
    if (question[i] !== rightAnswer) {
      wrongAnswer.push(i);
    }
    const indexWrong1 = wrongAnswer[Math.floor(Math.random() * 2)];
    let indexWrong2 = wrongAnswer[Math.floor(Math.random() * 2)];
    while (indexWrong2 === indexWrong1) {
      indexWrong2 = wrongAnswer[Math.floor(Math.random() * 2)];
    }

    question[indexWrong1] = '    ';
    question[indexWrong2] = '    ';
  }
  console.log(question[0]);
  console.log(question[2], question[3], question[4], question[5]);
  console.log(`У Вас есть подсказки: ${helps.join('  ')}`);
  return question;
};
