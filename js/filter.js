import { renderMarkers, clearMarkers } from './map.js';

const DEFAULT_CONTROL_VALUE = 'any';
const SIMILAR_OFFERS_COUNT = 10;

const housingTypeFilter = document.querySelector('#housing-type');

const filterOffers = (data) => {
  return data
    .filter((element) => element.offer.type === housingTypeFilter.value || housingTypeFilter.value === DEFAULT_CONTROL_VALUE)
    .slice(0, SIMILAR_OFFERS_COUNT);
}

const updateOffers = (offers) => {
  clearMarkers();
  const newMarkers = filterOffers(offers);
  renderMarkers(newMarkers);
}

const setFilterListener = (offers) => {
  housingTypeFilter.addEventListener('change', () => {
    updateOffers(offers);
  })
}

export { setFilterListener };
