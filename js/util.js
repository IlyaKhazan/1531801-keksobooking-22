const getRandomInt = (min, max) => {

  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  throw new Error('Введите корректные числа');
};

const getRandomFloat = (min, max, decimals = 5) => {

  if (min >= 0 && max > min) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
  }

  throw new Error('Введите корректные числа');
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};

const shuffleArray = (array) => {

  const newArray = array.slice();

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return newArray;
}

const getUniqRandomLengthArray = (array) => {
  shuffleArray(array);

  return array.slice(getRandomInt(0, array.length - 1));
}

const setDeclination = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

export {
  getRandomInt,
  getRandomFloat,
  getRandomArrayElement,
  getUniqRandomLengthArray,
  setDeclination
}
