const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const AVATAR_PREWIEW_SRC = 'img/muffin-grey.svg';
const PHOTOS_PREVIEW_INNER_HTML =  '<img src="" alt="Аватар пользователя" width="70" height="70">';

const avatarChooser = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview img');

const photosChooser = document.querySelector('.ad-form__input');
const photosPreview = document.querySelector('.ad-form__photo');


const uploadAvatar = () => {

  avatarChooser.addEventListener('change', (evt) => {
    const file = evt.target.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((element) => {
      return fileName.endsWith(element);
    });

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        avatarPreview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
}

const uploadPhotos = () => {

  photosChooser.addEventListener('change', (evt) => {
    const file = evt.target.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((element) => {
      return fileName.endsWith(element);
    });

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        photosPreview.innerHTML = PHOTOS_PREVIEW_INNER_HTML;
        document.querySelector('.ad-form__photo img').src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
}

const resetUpload = () => {
  avatarPreview.src = AVATAR_PREWIEW_SRC;
  photosPreview.innerHTML = '';
}

uploadAvatar();
uploadPhotos();

export { resetUpload }
