import { typeMinCosts } from './data.js';

const price = document.querySelector('#price');
const type = document.querySelector('#type');
const checkIn = document.querySelector('#timein');
const checkOut = document.querySelector('#timeout');

const typePriceFilterChange = (evt) => {
  price.min = typeMinCosts[evt.target.value];
  price.placeholder = typeMinCosts[evt.target.value];
}

const checkInFilterChange = (evt) => {
  checkOut.value = evt.target.value;
}

const checkOutFilterChange = (evt) => {
  checkIn.value = evt.target.value;
}

type.addEventListener('change', typePriceFilterChange);
checkIn.addEventListener('change', checkInFilterChange);
checkOut.addEventListener('change', checkOutFilterChange);
