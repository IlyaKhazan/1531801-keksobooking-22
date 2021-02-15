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

export { Author, Price, Guests, Rooms, Location, TYPES, CHECKINS, CHECKOUTS, FEATURES, PHOTOS, SIMILAR_ITEM_COUNT };
