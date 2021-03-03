/* global L:readonly */
import { similarData, createOffer } from './offer.js';
import { activatePage, deactivatePage } from './form.js';

const LAYER_LINK = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>';
const DECIMALS = 5;
const DEFAULT_ZOOM = 10;

const DefaultCoordinates = {
  LATITUDE: 35.68310,
  LONGITUDE: 139.75983,
}

const PinSize = {
  WIDTH: 52,
  HEIGHT: 52,
}

const address = document.querySelector('#address');

const onMarkerDrag = (evt) => {
  const { lat, lng } = evt.target.getLatLng();
  address.value = `${lat.toFixed(DECIMALS)}, ${lng.toFixed(DECIMALS)}`;
}

const renderMarkers = (data) => {
  data.forEach((offer) => {
    const lat = offer.location.x;
    const lng = offer.location.y;

    const pinIcon = L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [`${PinSize.WIDTH}`, `${PinSize.HEIGHT}`],
      iconAnchor: [`${PinSize.WIDTH / 2}`, `${PinSize.HEIGHT}`],
    });

    const pinMarker = L.marker({
      lat,
      lng,
    },
    {
      icon: pinIcon,
    },
    );

    pinMarker.addTo(map);
    pinMarker.bindPopup(createOffer(offer),
      {
        keepInView: true,
      })
  })
}

deactivatePage();

const map = L.map('map-canvas')
  .on('load', () => {
    activatePage();
  })
  .setView({
    lat: DefaultCoordinates.LATITUDE,
    lng: DefaultCoordinates.LONGITUDE,
  }, DEFAULT_ZOOM);

L.tileLayer(
  `${LAYER_LINK}`,
  {
    attribution: `${LAYER_ATTRIBUTION}`,
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [`${PinSize.WIDTH}`, `${PinSize.HEIGHT}`],
  iconAnchor: [`${PinSize.WIDTH / 2}`, `${PinSize.HEIGHT}`],
});

const mainPinMarker = L.marker(
  {
    lat: DefaultCoordinates.LATITUDE,
    lng: DefaultCoordinates.LONGITUDE,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

renderMarkers(similarData);

address.value = `${DefaultCoordinates.LATITUDE}, ${DefaultCoordinates.LONGITUDE} `;

mainPinMarker.addTo(map);
mainPinMarker.on('drag', onMarkerDrag);
