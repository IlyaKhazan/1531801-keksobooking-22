import { createData, typeTranslates } from './data.js';

const listElement = document.querySelector('.map__canvas');
const itemTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarData = createData();

const itemElements = similarData.map(({ offer, author }) => {
  const itemElement = itemTemplate.cloneNode(true);
  const getPhotosData = () => {
    let itemElementPhoto = itemElement.querySelector('.popup__photo');
    itemElement.querySelector('.popup__photos').innerHTML = '';
    offer.photos.forEach((photo) => {
      itemElementPhoto = itemElementPhoto.cloneNode(true);
      itemElementPhoto.src = photo;
      itemElement.querySelector('.popup__photos').appendChild(itemElementPhoto);
    });
  }

  const getFeaturesData = () => {
    itemElement.querySelector('.popup__features').innerHTML = '';
    offer.features.forEach((feature) => {
      let itemElementFeatures = document.createElement('li');
      itemElementFeatures.classList.add('popup__feature');
      itemElement.querySelector('.popup__features').appendChild(itemElementFeatures);
      itemElement.querySelector('.popup__feature').cloneNode(true);
      itemElementFeatures.classList.add(`popup__feature--${feature}`)
    });
  }

  itemElement.querySelector('.popup__title').textContent = offer.title;
  itemElement.querySelector('.popup__text--address').textContent = offer.address;
  itemElement.querySelector('.popup__text--price').textContent = `${offer.Price} ₽/ночь`;
  itemElement.querySelector('.popup__text--capacity').textContent = `${offer.Rooms} комнаты для ${offer.Guests} гостей`;
  itemElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  itemElement.querySelector('.popup__description').textContent = offer.description;
  itemElement.querySelector('.popup__avatar').src = author.avatar;
  itemElement.querySelector('.popup__type').textContent = typeTranslates[offer.type];
  getPhotosData();
  getFeaturesData();

  return itemElement;
});

listElement.appendChild(itemElements[1])
