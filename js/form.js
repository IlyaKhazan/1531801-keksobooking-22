import { typeMinCosts } from './data.js';

const form = document.querySelector('.ad-form');
const filters = document.querySelector('.map__filters');
const addFormElements = Array.from(form.elements);
const addFilterElements = Array.from(filters.elements);

const price = form.querySelector('#price');
const type = form.querySelector('#type');
const checkIn = form.querySelector('#timein');
const checkOut = form.querySelector('#timeout');
const checkInOutGroup = form.querySelector('.ad-form__element--time');

const toggleElements = (elements, state) => {
  elements.forEach((item) => item.disabled = state);
}

const deactivatePage = () => {
  form.classList.add('ad-form--disabled');
  filters.classList.add('map__filters--disabled');
  toggleElements(addFormElements, true);
  toggleElements(addFilterElements, true);
}

const activatePage = () => {
  form.classList.remove('ad-form--disabled');
  filters.classList.remove('map__filters--disabled');
  toggleElements(addFormElements, false);
  toggleElements(addFilterElements, false);
};

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

export { activatePage, deactivatePage }
