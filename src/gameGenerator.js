import data from '../data/data.js';
import { getRandomIntInclusive } from './utils.js';

function gameGenerator() {
  const gameAssembly = [];
  const dataQuestions = data;
  let numberQuestion = 0;

  while (gameAssembly.filter((item) => item !== undefined).length < 15) {
    const numberArrayWithQuestions = getRandomIntInclusive(0, dataQuestions.length - 1);
    if (!gameAssembly.includes(dataQuestions[numberArrayWithQuestions][numberQuestion])) {
      gameAssembly.push(dataQuestions[numberArrayWithQuestions][numberQuestion]);
      numberQuestion += 1;
    }
  }

  return gameAssembly.filter((item) => item !== undefined);
}

export default gameGenerator;
