import dataIT from '../data/data.js';
import dataGeneral from '../data/questionWithoutIt.js';
import { getRandomIntInclusive } from './utils.js';

function gameGenerator(mode = '1') {
  const gameAssembly = [];
  let dataQuestions = [];
  switch (mode) {
    case '1':
      dataQuestions = [...dataGeneral];
      break;
    case '2':
      dataQuestions = [...dataIT];
      break;
    default:
      break;
  }
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
