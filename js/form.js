//import { setLatLngDefault } from './map.js';
import { isEscEvent } from './util.js';
import { sendData } from './api.js';

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

const typeMinCosts = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
}

const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const roomCapacity = {
  100: '<option value="0">не для гостей</option>',
  1: '<option value="1">для 1 гостя</option>',
  2: '<option value="2">для 2 гостей</option> <option value="1"> для 1 гостя</option>',
  3: '<option value="3">для 3 гостей</option> <option value="2">для 2 гостей</option> <option value="1">для 1 гостя</option>',
}

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

const resetButton = document.querySelector('.ad-form__reset');

const formReset = () => {
  form.reset();
  filters.reset();
  capacity.innerHTML = roomCapacity[roomNumber.value];
}

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  formReset();
});

const openErrorPopup = () => {
  const errorPopup = document.querySelector('#error').content.cloneNode(true);

  document.querySelector('main').appendChild(errorPopup);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.querySelector('.error').addEventListener('click', closeErrorPopup);
}

const closeErrorPopup = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onPopupEscKeydown);
};

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    //closeFormPopup();
    closeErrorPopup();
  }
};

const openFormPopup = () => {
  const successPopup = document.querySelector('#success').content.cloneNode(true);

  document.querySelector('main').appendChild(successPopup);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.querySelector('.success').addEventListener('click', closeFormPopup);
};

const closeFormPopup = () => {
  document.querySelector('.success').remove();
  formReset();
  //setMainPinMarkerDefault;
  document.removeEventListener('keydown', onPopupEscKeydown);
};

const setFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => onSuccess(),
      () => openErrorPopup(),
      new FormData(evt.target),
    );
  });
};

export { activatePage, deactivatePage, setFormSubmit, openFormPopup }
