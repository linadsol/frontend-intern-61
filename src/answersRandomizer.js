export default (question) => {
  const rightAnswer = question[1];
  const answers = question.slice(1);
  const mixedAnswers = answers.sort(() => Math.random() - 0.5);
  const listed = ['A: ', 'B: ', 'C: ', 'D: '];
  const listedAnswers = mixedAnswers.map((answer, i) => (listed[i] + answer));
  const listedRightAnswer = listedAnswers.filter((item) => item.slice(3) === rightAnswer);
  return [question[0], listedRightAnswer, listedAnswers].flat();
};
