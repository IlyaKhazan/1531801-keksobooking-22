const getRandomInt = (min, max) => {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  throw new Error('Введите корректные числа');
};


const getRandomFloat = (min, max, decimals = 2) => {
  if (min >= 0 && max > min) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
  }

  throw new Error('Введите корректные числа');
};

getRandomInt(20, 95);
getRandomFloat(15, 21, 4);
