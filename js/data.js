import {
  getRandomInt,
  getRandomFloat,
  getRandomArrayElement,
  getUniqRandomLengthArray
}
  from './util.js'

const Author = {
  MIN: 1,
  MAX: 8,
}

const Price = {
  MIN: 0,
  MAX: 1000000,
}

const Guests = {
  MIN: 1,
  MAX: 100,
}

const Rooms = {
  MIN: 1,
  MAX: 100,
}

const Location = {
  X: {
    MIN: 35.65000,
    MAX: 35.70000,
  },

  Y: {
    MIN: 139.70000,
    MAX: 139.80000,
  },
}

const typeTranslates = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
}

const typeMinCosts = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
}

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const SIMILAR_ITEM_COUNT = 10;

const createItem = () => {
  const latitude = getRandomFloat(Location.X.MIN, Location.X.MAX);
  const longitude = getRandomFloat(Location.Y.MIN, Location.Y.MAX);

  return {
    author: {
      avatar: `img/avatars/user0${getRandomInt(Author.MIN, Author.MAX)}.png`,
    },
    offer: {
      title: 'Специальное предложение!',
      address: `${latitude}, ${longitude}`,
      price: getRandomInt(Price.MIN, Price.MAX),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInt(Rooms.MIN, Rooms.MAX),
      guests: getRandomInt(Guests.MIN, Guests.MAX),
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

const createData = () => {
  return new Array(SIMILAR_ITEM_COUNT).fill(null).map(() => createItem());
}

export { createData, typeTranslates, typeMinCosts }
