const popupElement = document.querySelector('.popup');
const popupElementClose = popupElement.querySelector('.popup__button-close');
const popupElementOpen = document.querySelector('.edit-buton');
const popupElementForm = popupElement.querySelector('.popup__form');

let profileName = document.querySelector('.profile-info__title');
let profileJob = document.querySelector('.profile-info__intro');
let inputName = document.querySelector('.popup__imput_name');
let inputJob = document.querySelector('.popup__imput_job');

const openPopup = function () {
  popupElement.classList.add('popup__open');
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

const closePopup = function () {
  popupElement.classList.remove('popup__open');
}

const closePopupClickOverlay = function (event) {
  if (event.target === event.currentTarget) {
    closePopup();
  }
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup();
}

popupElementOpen.addEventListener('click', openPopup);
popupElementClose.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupClickOverlay);
popupElementForm.addEventListener('submit', handleFormSubmit);
