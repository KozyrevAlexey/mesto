import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import {initialCards, formValidationConfig } from './utils.js';

/** Popup редактирования профиля */
const popupProfile = document.querySelector('.popup_type_profile');                     // Найти popup редактирования профиля
const popupOpenEdit = document.querySelector('.profile__edit-buton');                   // Найти кнопку открытия редактирования профиля
const popupFormProfile = popupProfile.querySelector('.popup__form_type_profile');       // Найти форму popup изменения профиля
const profileName = document.querySelector('.profile-info__title');                     // Найти данные - name на странице
const profileJob = document.querySelector('.profile-info__intro');                      // Найти данные - job на странице
const inputName = document.querySelector('.popup__input_type_name');                    // Найти поле ввода - name в форме редактирования профиля
const inputJob = document.querySelector('.popup__input_type_job');                      // Найти поле ввода - job в форме редактирования профиля

/** Popup редактирования карточек региона */
const popupPlace = document.querySelector('.popup_type_place');                          // Найти popup редактирования карточек
const popupOpenAdd = document.querySelector('.profile__add-button');                     // Найти кнопку открытия редактирования карточек
const popupFormPlace = popupPlace.querySelector('.popup__form_type_place');              // Найти форму popup изменения карточек
const popupFormTitle = popupPlace.querySelector('.popup__input_type_title');             // Найти поле ввода - название региона в форме добавления карточки
const popupFormLink = popupPlace.querySelector('.popup__input_type_link');               // Найти поле ввода - ссылки на фото в форме добавления карточки

/** Popup открытия просмотра изображения */
const popupImage = document.querySelector('.popup_type_image');                           // Найти popup открытия просмотра увеличенного изображения
const elementImage = document.querySelector('.popup__img');                               // Найти изображение
const elementTitle = document.querySelector('.popup__name');                              // Найти описание региона

/** Кнопка закрытия Popup */
const popupCloseList = document.querySelectorAll('.popup__button-close');                  // Найти ВСЕ кнопки закрытия Popup

/** Границы окна Popup */
const popups = document.querySelectorAll('.popup');                                  // Найти границы окна при нажатии на Esc и Overlay

/** Добавление карточек */
const cardsContainer = document.querySelector('.elements');                                // Найти раздел, куда будут добавлятся карточки



/** Функция создания карточки */
const createCard = (cardData) => {
  const card = new Card(cardData, '.template-card', handleCardClic);

  return card.generateCard();
};

/** Функция открытия просмотра изображения карточки */
const handleCardClic = (cardImage) => {
  openPopup(popupImage);

  elementImage.src = cardImage.link;
  elementImage.alt = cardImage.alt;
  elementTitle.textContent = cardImage.name;
}

/** Создание карточек из массива */
initialCards.forEach((cardData) => {
  cardsContainer.append(createCard(cardData));
});

/** Общая функция открытия Popup */
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscClosePopup);
};

/** Общая функция закрытия Popup */
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', handleEscClosePopup);
};

/**Функция закрытия по клавише Esc */
const handleEscClosePopup = (evt) => {
  if (evt.key === 'Escape') {
    const popupClose = document.querySelector('.popup_opened');
    closePopup(popupClose);
  };
};

/** Функция открытия Popup редактирования профиля c указанными на странице данными */
popupOpenEdit.addEventListener('click', () => {
  openPopup(popupProfile);
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  validationFormProfile.clearValidationForm();
});

/** Функция сохранения внесенных в формы popup изменений при закрытии окна */
popupFormProfile.addEventListener('submit', (evt) => {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;

  closePopup(popupProfile);
});

/** Закрытие всех Popup при нажатии на крестик */
popupCloseList.forEach((item) => {
  item.addEventListener('click', (evt) => {
    const popupClosestCross = popupAddClosest(evt);
    closePopup(popupClosestCross);
  });
});

/** Закрытие всех Popup при нажатии на Overlay */
popups.forEach((item) => {
  item.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(item);
    };
  });
});

/** Функция открытия Popup добавления карточки местности */
popupOpenAdd.addEventListener('click', () => {
  openPopup(popupPlace);
  popupFormTitle.value = '';
  popupFormLink.value = '';
  validationFormPlace.clearValidationForm();
});

/** Функция сохранения внесенных в формы popup данных (название региона и ссылку на фото) при закрытии окна */
popupFormPlace.addEventListener('submit', (evt) => {
  evt.preventDefault();

  renderCard({
    name: popupFormTitle.value,
    link: popupFormLink.value,
  });

  evt.target.reset();
  closePopup(popupPlace);
});

/** Функция добавления новой карточки в начало блока с данными из PopUp добавления новой карточки местности */
const renderCard = (card) => {
  cardsContainer.prepend(createCard(card));
};

/**Функция возвращения события */
const popupAddClosest = (evt) => {
  return evt.target.closest('.popup');
};

/**Валидация форм */
const validationFormProfile = new FormValidator(formValidationConfig, '.popup__form_type_profile');
validationFormProfile.enableValidation();

const validationFormPlace = new FormValidator(formValidationConfig, '.popup__form_type_place');
validationFormPlace.enableValidation();
