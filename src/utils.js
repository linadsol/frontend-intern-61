// генерация рандомного числа в заданном диапазоне (максимум и минимум включаются)
function getRandomIntInclusive(minNumber, maxNumber) {
  const min = Math.ceil(minNumber);
  const max = Math.floor(maxNumber);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getRandomIntInclusive };
