import { Author, Price, Guests, Rooms, Location, TYPES, CHECKINS, CHECKOUTS, FEATURES, PHOTOS, SIMILAR_ITEM_COUNT } from './data.js';

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

const createItem = () => {
  const latitude = getRandomFloat(Location.X.MIN, Location.X.MAX);
  const longitude = getRandomFloat(Location.Y.MIN, Location.Y.MAX);

  return {
    Author: {
      avatar: `'img/avatars/user0${getRandomInt(Author.MIN, Author.MAX)}.png'`,
    },
    offer: {
      title: 'Специальное предложение!',
      address: `${latitude}, ${longitude}`,
      Price: getRandomInt(Price.MIN, Price.MAX),
      type: getRandomArrayElement(TYPES),
      Rooms: getRandomInt(Rooms.MIN, Rooms.MAX),
      Guests: getRandomInt(Guests.MIN, Guests.MAX),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      features: getUniqRandomLengthArray(FEATURES),
      description: 'Отличный выбор для семьи из трёх человек',
      photos: getUniqRandomLengthArray(PHOTOS),
    },
    location: {
      x: latitude,
      y: longitude,
    },
  }
};

const similarItems = new Array(SIMILAR_ITEM_COUNT).fill(null).map(() => createItem());
