import arr1 from './questionsPortnov.js';
import arr2 from './questionsRuntov.js';
import arr3 from './questionsRuntov2.js';

export default () => {
  const result = [...arr1, ...arr2, ...arr3];
  return result;
};
