import { typeMinCosts } from './data.js';

const price = document.querySelector('#price');
const type = document.querySelector('#type');
const checkIn = document.querySelector('#timein');
const checkOut = document.querySelector('#timeout');
const checkInOutGroup = document.querySelector('.ad-form__element--time');

const typePriceFilterChange = (evt) => {
  price.min = typeMinCosts[evt.target.value];
  price.placeholder = typeMinCosts[evt.target.value];
}

const checkInOutChange = (evt) => {
  checkIn.value = evt.target.value;
  checkOut.value = evt.target.value;
}

type.addEventListener('change', typePriceFilterChange);
checkInOutGroup.addEventListener('change', checkInOutChange);
