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
  array.sort(() => Math.random() - 0.5);

  return array;
}

const getUniqRandomLengthArray = (array) => {
  shuffleArray(array);
  const newArray = array.slice(getRandomInt(0, array.length - 1));

  return newArray;
}

const AUTHOR = {
  MIN: 1,
  MAX: 8,
}
const PRICE = {
  MIN: 0,
  MAX: 1000000,
}
const GUESTS = {
  MIN: 1,
  MAX: 100,
}
const ROOMS = {
  MIN: 1,
  MAX: 100,
}
const LOCATIONX = {
  MIN: 35.65000,
  MAX: 35.70000,
}
const LOCATIONY = {
  MIN: 139.70000,
  MAX: 139.80000,
}
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const SIMILAR_ITEM_COUNT = 10;



const createItem = () => {
  const LATITUDE = getRandomFloat(LOCATIONX.MIN, LOCATIONX.MAX);
  const LONGITUDE = getRandomFloat(LOCATIONY.MIN, LOCATIONY.MAX);
  const ADDRESS = LATITUDE + ', ' + LONGITUDE;

  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInt(AUTHOR.MIN, AUTHOR.MAX) + '.png',
    },
    offer: {
      title: 'Специальное предложение!',
      address: ADDRESS,
      price: getRandomInt(PRICE.MIN, PRICE.MAX),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInt(ROOMS.MIN, ROOMS.MAX),
      guests: getRandomInt(GUESTS.MIN, GUESTS.MAX),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      features: getUniqRandomLengthArray(FEATURES),
      description: 'Отличный выбор для семьи из трёх человек',
      photos: getUniqRandomLengthArray(PHOTOS),
    },
    location: {
      x: LATITUDE,
      y: LONGITUDE,
    },
  }
};

const similarItems = new Array(SIMILAR_ITEM_COUNT).fill(null).map(() => createItem());

similarItems;
