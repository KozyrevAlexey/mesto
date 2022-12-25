const popupElement = document.querySelector('.popup'); //Найти popup
const popupElementClose = popupElement.querySelector('.popup__button-close'); //Найти кнопку закрытия
const popupElementOpen = document.querySelector('.profile__edit-buton'); //Найти кнопку открытия редактирования профиля
const popupElementForm = popupElement.querySelector('.popup__form'); //Найти форму popup изменения профиля

let profileName = document.querySelector('.profile-info__title'); //Найти данные - name на странице
let profileJob = document.querySelector('.profile-info__intro'); //Найти данные - job на странице
let inputName = document.querySelector('.popup__input_type_name'); //Найти поле ввода - name в форме
let inputJob = document.querySelector('.popup__input_type_job'); //Найти поле ввода - job в форме

//Функция открытия popup с данными name и job указанных на странице
const openPopup = function () {
  popupElement.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

//Функция закрытия popup без сохранения внесенных данных
const closePopup = function () {
  popupElement.classList.remove('popup_opened');
}

//Функция закрытия при нажатии на overlay. Сейчас не используется
// const closePopupClickOverlay = function (event) {
//   if (event.target === event.currentTarget) {
//     closePopup();
//   }
// }

//Функция сохранения внесенных в формы popup изменений при закрытии окна
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup();
}

//Слушатели событий
popupElementOpen.addEventListener('click', openPopup);
popupElementClose.addEventListener('click', closePopup);
// popupElement.addEventListener('click', closePopupClickOverlay);
popupElementForm.addEventListener('submit', handleFormSubmit);
