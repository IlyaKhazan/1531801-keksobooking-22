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
