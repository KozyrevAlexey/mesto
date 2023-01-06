//Popup редактирования профиля
const popupProfile = document.querySelector('.popup__profile'); //Найти popup редактирования профиля
const popupOpenEdit = document.querySelector('.profile__edit-buton'); //Найти кнопку открытия редактирования профиля
const popupFormProfile = popupProfile.querySelector('.popap__form_profile'); //Найти форму popup изменения профиля
const profileName = document.querySelector('.profile-info__title'); //Найти данные - name на странице
const profileJob = document.querySelector('.profile-info__intro'); //Найти данные - job на странице
const inputName = document.querySelector('.popup__input_type_name'); //Найти поле ввода - name в форме
const inputJob = document.querySelector('.popup__input_type_job'); //Найти поле ввода - job в форме

//Popup редактирования карточек региона
const popupPlace = document.querySelector('.popup__place'); //Найти popup редактирования карточек
const popupOpenAdd = document.querySelector('.profile__add-button'); //Найти кнопку открытия редактирования карточек
const popupFormPlace = popupPlace.querySelector('.popap__form_place'); //Найти форму popup изменения карточек

//Popup открытия просмотра изображения
const popupImagi = document.querySelector('.popup__image'); //Найти popup открытия просмотра увеличенного изображения


const popupClose = document.querySelector('.popup__button-close'); //Найти кнопку закрытия Popup

// Добавление карточек
const cardTemplate = document.querySelector('#template__card').content; //Найти шаблон карточки для добавления
const cardOnline = document.querySelector('.elements'); //Найти раздел, куда будут добавлятся карточки



//Добавление карточек "из коробки"
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



//Функция создания карточки
const allCard = (name, link) => {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true); // клонируем содержимое тега template
  const cardTitle = cardElement.querySelector('.element__title') //Найти в шаблоне заголовок
  const cardPhoto = cardElement.querySelector('.element__img'); //Найти в шаблоне фотографию


  cardTitle.textContent = name; //Присвоить значение name заголовку
  cardPhoto.src = link; //Присвоить значение link ссылке на картинку

  return cardElement //Отобразить карточку на странице
}

//Создание карточек из массива
initialCards.forEach((element) => {
  cardOnline.append(allCard(element.name, element.link));
});














//Функция открытия popup с данными name и job указанных на странице
const openPopup = function () {
  popupProfile.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

const openPopupp = function () {
  popupPlace.classList.add('popup_opened');
}

//Функция закрытия popup без сохранения внесенных данных
const closePopup = function () {
  popupProfile.classList.remove('popup_opened');
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
popupOpenEdit.addEventListener('click', openPopup);
popupOpenAdd.addEventListener('click', openPopupp);
popupClose.addEventListener('click', closePopup);
// popupElement.addEventListener('click', closePopupClickOverlay);
popupFormProfile.addEventListener('submit', handleFormSubmit);

