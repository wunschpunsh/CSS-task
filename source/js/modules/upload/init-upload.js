const initUpload = () => {
  const upload = document.querySelector('.custom-upload input[type=file]');
  const uploadText = document.querySelector('.custom-upload__text');
  upload.addEventListener('change', () => {
    const file = upload.files[0];
    uploadText.textContent = file.name;
  });
};

export {initUpload};
