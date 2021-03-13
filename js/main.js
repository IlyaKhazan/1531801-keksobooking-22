import './offer.js';
import './form.js';
import { renderMarkers } from './map.js';
import { setFormSubmit} from './form.js';
import { getData } from './api.js';
import { setLatLngDefault } from './map.js';

getData(renderMarkers);
setFormSubmit();

export {setLatLngDefault};
