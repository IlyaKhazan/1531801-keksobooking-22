import { isEscEvent } from './util.js';
import { formReset } from './form.js';
import { setLatLngDefault } from './main.js';

const successPopup = document.querySelector('#success').content.cloneNode(true);
const errorSendPopup = document.querySelector('#error').content.cloneNode(true);
const errorGetPopup = document.querySelector('#error-get').content.cloneNode(true);
const main = document.querySelector('main');

const openErrorGetPopup = () => {
  main.appendChild(errorGetPopup);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.querySelector('.error').addEventListener('click', closeErrorGetPopup);
}

const closeErrorGetPopup = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onPopupEscKeydown);
};

const openErrorSendPopup = () => {
  main.appendChild(errorSendPopup);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.querySelector('.error').addEventListener('click', closeErrorSendPopup);
}

const closeErrorSendPopup = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onPopupEscKeydown);
};

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    //closeFormPopup();
    closeErrorSendPopup();
  }
};

const openSuccessPopup = () => {
  main.appendChild(successPopup);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.querySelector('.success').addEventListener('click', closeSuccessPopup);
};

const closeSuccessPopup = () => {
  document.querySelector('.success').remove();
  formReset();
  document.removeEventListener('keydown', onPopupEscKeydown);
  setLatLngDefault();
};

export { openErrorSendPopup, openErrorGetPopup, onPopupEscKeydown, openSuccessPopup, closeSuccessPopup };
