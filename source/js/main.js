import 'leaflet/dist/leaflet.css';
import './offer.js';
import './upload.js';
import { renderMarkers, setLatLngDefault } from './map.js';
import { setFormSubmit } from './form.js';
import { getData } from './api.js';
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
