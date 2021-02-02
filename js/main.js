//#1

const getRandomInt = (min, max) => {
  if (min >= 0 && max > min) {
    min = Math.ceil(min); //округляет значение аргумента min в меньшую сторону
    max = Math.floor(max); //округляет значение аргумента max в большую сторону
    return Math.floor(Math.random() * (max - min + 1)) + min; //прибавляет единицу к минимально возможному числу, округляет и задаёт минимально возможно значение
  }
};

//#2

const getRandomFloat = (min, max, decimals) => {
  if (min >= 0 && max > min) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(decimals)); //форматирует числовое значение в строковое, сохраняя при этом указанное количество десятичных знаков (2 по умолчанию) и сразу переводит в числовое значение
  }
};

getRandomInt(20, 95);
getRandomFloat(15, 21, 2);
