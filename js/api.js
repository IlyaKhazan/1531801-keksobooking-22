import { showErrorGetPopup } from './popup.js';

const API_URL = 'https://22.javascript.pages.academy/keksobooking';

const getData = (onSuccess) => {
  fetch(`${API_URL}/data`)
    .then((response) => {
      if (response.ok) {
        response.json()
          .then((data) => {
            onSuccess(data);
          });
      } else {
        showErrorGetPopup();
      }
    })
    .catch(() => {
      showErrorGetPopup();
    });
}

const sendData = (onSuccess, onFail, body) => {
  fetch(
    API_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };
