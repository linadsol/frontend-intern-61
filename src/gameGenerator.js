import data from '../data/data.js';
import { getRandomIntInclusive } from './utils.js';

function gameGenerator() {
  const gameAssembly = [];
  const dataQuestions = data;

  while (gameAssembly.filter((item) => item !== undefined).length < 15) {
    const numberQuestion = getRandomIntInclusive(0, data.length);
    if (!gameAssembly.includes(dataQuestions[numberQuestion])) {
      gameAssembly.push(dataQuestions[numberQuestion]);
    }
  }

  return gameAssembly.filter((item) => item !== undefined);
}

export default gameGenerator;
