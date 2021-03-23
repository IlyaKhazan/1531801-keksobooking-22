import { createImgElement } from './util.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const AVATAR_PREVIEW_SRC = 'img/muffin-grey.svg';

const avatarChooser = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview img');

const photosChooser = document.querySelector('.ad-form__input');
const photosPreview = document.querySelector('.ad-form__photo');

const uploadPhoto = (evt, cb) => {
  const file = evt.target.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((element) => {
    return fileName.endsWith(element);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => cb(reader));
    reader.readAsDataURL(file);
  }
}

avatarChooser.addEventListener('change', (evt) => {
  uploadPhoto(evt, (reader) => {
    avatarPreview.src = reader.result;
  })
});

photosChooser.addEventListener('change', (evt) => {
  uploadPhoto(evt, (reader) => {
    photosPreview.innerHTML = '';
    const img = createImgElement();
    img.src = reader.result;
    photosPreview.appendChild(img);
  })
});

const resetUpload = () => {
  avatarPreview.src = AVATAR_PREVIEW_SRC;
  photosPreview.innerHTML = '';
}

export { resetUpload }
