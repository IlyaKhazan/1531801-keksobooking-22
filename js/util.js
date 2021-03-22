const DEBOUNCE_TIME = 500;
const PhotosPreviewImgSize = {
  WIDTH: 70,
  HEIGHT: 70,
}

const setDeclination = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const debounce = (callback, ms = DEBOUNCE_TIME) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), ms);
  };
};

const createImgElement = (width = PhotosPreviewImgSize.WIDTH, height = PhotosPreviewImgSize.HEIGHT) => {
  const img = document.createElement('img');
  img.alt = 'Фотография объявления';
  img.width = width;
  img.height = height;
  img.src = '';

  return img;
}

export {
  createImgElement,
  setDeclination,
  isEscEvent,
  debounce
}
