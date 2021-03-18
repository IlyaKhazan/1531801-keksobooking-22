import { renderMarkers, clearMarkers } from './map.js';
import { filters } from './form.js';
import { debounce } from './util.js';

const DEFAULT_CONTROL_VALUE = 'any';
const SIMILAR_OFFERS_COUNT = 10;
const PriceValues = {
  LOW_PRICE: 10000,
  HIGH_PRICE: 50000,
}

const housingTypeFilter = document.querySelector('#housing-type');
const housingRoomsFilter = document.querySelector('#housing-rooms');
const housingGuestsFilter = document.querySelector('#housing-guests');
const housingPriceFilter = document.querySelector('#housing-price');

const checkTypes = (element) => {
  return element.offer.type === housingTypeFilter.value || housingTypeFilter.value === DEFAULT_CONTROL_VALUE
}

const checkRooms = (element) => {
  return element.offer.rooms === parseInt(housingRoomsFilter.value) || housingRoomsFilter.value === DEFAULT_CONTROL_VALUE
}

const checkPrice = (element) => {
  switch (housingPriceFilter.value) {
    case DEFAULT_CONTROL_VALUE:
      return true;

    case 'middle':
      return element.offer.price >= PriceValues.LOW_PRICE;

    case 'low':
      return element.offer.price < PriceValues.LOW_PRICE;

    case 'high':
      return element.offer.price >= PriceValues.HIGH_PRICE;

    default:
      return false;
  }
}

const checkFeatures = (element) => {
  const checkedFeatures = Array.from(filters.querySelectorAll('input:checked'));

  return checkedFeatures.every((checkedFeature) => {
    return element.offer.features.includes(checkedFeature.value);
  })
}

const checkGuests = (element) => {
  return element.offer.guests === parseInt(housingGuestsFilter.value) || housingGuestsFilter.value === DEFAULT_CONTROL_VALUE
}

const compareValues = (element) => {
  return (checkTypes(element)) &&
    (checkRooms(element)) &&
    (checkPrice(element)) &&
    (checkGuests(element)) &&
    (checkFeatures(element))
}

const filterOffers = (data) => {
  return data
    .filter(compareValues).slice(0, SIMILAR_OFFERS_COUNT);
}

const updateOffers = (offers) => {
  clearMarkers();
  const newMarkers = filterOffers(offers);
  renderMarkers(newMarkers);
}

const setFilterListener = (offers) => {

  filters.addEventListener('change', debounce(() => {
    updateOffers(offers);
  }, 500));
}

export { setFilterListener };
