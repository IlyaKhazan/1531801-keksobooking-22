import { isEscEvent } from './util.js';

const successPopup = document.querySelector('#success').content.querySelector('.success');
const errorSendPopup = document.querySelector('#error').content.querySelector('.error');
const errorGetPopup = document.querySelector('#error-get').content.querySelector('.error__get');
const main = document.querySelector('main');

const showPopup = (element) => {
  const closePopup = () => {
    element.remove();
    document.removeEventListener('keydown', onDocumentKeyDown);
  }

  const onElementClick = () => closePopup();

  const onDocumentKeyDown = (evt) => {
    if (isEscEvent(evt)) {
      closePopup();
    }
  }

  element.addEventListener('click', onElementClick);
  document.addEventListener('keydown', onDocumentKeyDown);

  main.appendChild(element);
}

const showSuccessPopup = () => {
  const successPopupModal = successPopup.cloneNode(true);
  showPopup(successPopupModal);
}

const showErrorSendPopup = () => {
  const errorSendPopupModal = errorSendPopup.cloneNode(true);
  showPopup(errorSendPopupModal);
}

const showErrorGetPopup = () => {
  const errorGetPopupModal = errorGetPopup.cloneNode(true);
  showPopup(errorGetPopupModal);
}

export {
  showSuccessPopup,
  showErrorSendPopup,
  showErrorGetPopup
};
