/* global L:readonly */
import { similarData, createOffer } from './offer.js';

const form = document.querySelector('.ad-form');
const formAllFieldsets = form.querySelectorAll('fieldset');
const filters = document.querySelector('.map__filters');
const filtersAllSelects = filters.querySelectorAll('select');
const address = document.querySelector('#address');
const layerLink = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const layerAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>';
const deafaultLatitude = 35.68955;
const defaultLongitude = 139.69171;
const defaultZoom = 10;

const toggleElements = (element, boolean) => {

  element.forEach((item) => {
    item.disabled = boolean;
  },
  )
}

const deactivatePage = () => {
  form.classList.add('ad-form--disabled');
  toggleElements(formAllFieldsets, true);
  filters.classList.add('map__filters--disabled');
  toggleElements(filtersAllSelects, true);
  filters.querySelector('fieldset').disabled = true;
}

const activatePage = () => {
  form.classList.remove('ad-form--disabled');
  toggleElements(formAllFieldsets, false);
  filters.classList.remove('map__filters--disabled');
  toggleElements(filtersAllSelects, false);
  filters.querySelector('fieldset').disabled = false;
};

deactivatePage();

const map = L.map('map-canvas')
  .on('load', () => {
    activatePage();
  })
  .setView({
    lat: deafaultLatitude,
    lng: defaultLongitude,
  }, defaultZoom);

L.tileLayer(
  `${layerLink}`,
  {
    attribution: `${layerAttribution}`,
  },
).addTo(map);

similarData.forEach((offer) => {
  const lat = offer.location.x;
  const lng = offer.location.y;

  const pinIcon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [22, 22],
    iconAnchor: [11, 22],
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

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: deafaultLatitude,
    lng: defaultLongitude,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);
address.value = `${mainPinMarker.getLatLng().lat.toFixed(5)}, ${mainPinMarker.getLatLng().lng.toFixed(5)}`;
mainPinMarker.on('moveend', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});
