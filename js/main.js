import './offer.js';
import './form.js';
import { renderMarkers } from './map.js';
import { setFormSubmit } from './form.js';
import { getData } from './api.js';
import { setLatLngDefault } from './map.js';
import { showErrorGetPopup } from './popup.js';
import { setFilterListener } from './filter.js';

const onDataSuccess = (offers) => {
  renderMarkers(offers);
  setFilterListener(offers);
}

const onDataFail = () => showErrorGetPopup();

getData(onDataSuccess, onDataFail);
setFormSubmit();

export { setLatLngDefault };
