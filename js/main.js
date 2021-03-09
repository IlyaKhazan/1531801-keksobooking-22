import './offer.js';
import './form.js';
import './map.js';
import { renderMarkers } from './map.js';
import { setFormSubmit, openFormPopup } from './form.js';
import { getData } from './api.js';

getData(renderMarkers);
setFormSubmit(openFormPopup);
