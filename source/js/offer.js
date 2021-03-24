import { setDeclination } from './util.js';

const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

const typeTranslates = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
}

const renderPhotosData = (photos, clone) => {
  const photoNode = clone.querySelector('.popup__photo');
  const photosContainer = clone.querySelector('.popup__photos');
  photosContainer.innerHTML = '';

  photos.forEach((photo) => {
    const photoItem = photoNode.cloneNode(true);
    photoItem.src = photo;
    photosContainer.appendChild(photoItem);
  });
}

const renderFeaturesData = (features, clone) => {
  const featuresContainer = clone.querySelector('.popup__features');
  featuresContainer.innerHTML = '';

  features.forEach((feature) => {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature', `popup__feature--${feature}`);
    featuresContainer.appendChild(featureItem);
  });
}

const createOffer = ({ offer, author }) => {
  const popupElement = popupTemplate.cloneNode(true);

  popupElement.querySelector('.popup__title').textContent = offer.title;
  popupElement.querySelector('.popup__text--address').textContent = offer.address;
  popupElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  popupElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} ${setDeclination(offer.rooms, ['комната', 'комнаты', 'комнат'])} для ${offer.guests} ${setDeclination(offer.guests, ['гостя', 'гостей', 'гостей'])}`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  popupElement.querySelector('.popup__description').textContent = offer.description;
  popupElement.querySelector('.popup__avatar').src = author.avatar;
  popupElement.querySelector('.popup__type').textContent = typeTranslates[offer.type];

  renderPhotosData(offer.photos, popupElement);
  renderFeaturesData(offer.features, popupElement);

  const offerFields = Array.from(popupElement.children);

  offerFields.forEach((offerField) => {
    if (!offerField.innerHTML && !offerField.classList.contains('popup__avatar')) {
      offerField.remove()
    }
  })

  return popupElement;
};

export { createOffer };
