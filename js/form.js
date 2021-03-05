import { typeMinCosts, roomCapacity } from './data.js';

const form = document.querySelector('.ad-form');
const filters = document.querySelector('.map__filters');
const addFormElements = Array.from(form.elements);
const addFilterElements = Array.from(filters.elements);

const title = form.querySelector('#title');
const price = form.querySelector('#price');
const type = form.querySelector('#type');

const checkIn = form.querySelector('#timein');
const checkOut = form.querySelector('#timeout');
const checkInOutGroup = form.querySelector('.ad-form__element--time');

const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');

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

const typePriceFilterChange = () => {
  price.min = typeMinCosts[type.value];
  price.placeholder = typeMinCosts[type.value];
}

const checkInOutChange = (evt) => {
  checkIn.value = evt.target.value;
  checkOut.value = evt.target.value;
}

const roomCapacityFilterChange = () => {
  capacity.innerHTML = roomCapacity[roomNumber.value];
}

type.addEventListener('change', typePriceFilterChange);
checkInOutGroup.addEventListener('change', checkInOutChange);
roomNumber.addEventListener('change', roomCapacityFilterChange);

title.addEventListener('input', () => {
  title.reportValidity();
});

price.addEventListener('input', () => {
  price.reportValidity();
});

typePriceFilterChange();
roomCapacityFilterChange();

export { activatePage, deactivatePage }
