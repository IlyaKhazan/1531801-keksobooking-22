const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview img');

const photosChooser = document.querySelector('.ad-form__input');
const photosPreview = document.querySelector('.ad-form__photo img');

const uploadImage = (fileChooser, preview) => {

  fileChooser.addEventListener('change', (evt) => {
    const file = evt.target.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((element) => {
      return fileName.endsWith(element);
    });

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
}

uploadImage(avatarChooser, avatarPreview);
uploadImage(photosChooser, photosPreview);

export { avatarPreview, photosPreview }
