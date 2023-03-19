import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { initialCards, formValidationConfig } from '../utilis/utils.js';

import '../pages/index.css';

/**-------------Карточки с изображением---------------------- */

/**Создание Popup изображения */
const openImagePopup = new PopupWithImage('.popup_type_image');

/** Функция создания карточки */
const createCard = (cardData) => {
  const card = new Card(cardData, '.template-card', () => {
    openImagePopup.open(cardData);
  });

  return card.generateCard();
}

/**Функция создания секции */
const cardsContainer = new Section({
  renderer: (card) => {
    cardsContainer.addItem(createCard(card));
  },
}, '.elements'
);

/** Отобразить карточки на странице*/
cardsContainer.renderItems(initialCards);

/**-------------Popup добавления и редактирования----------------- */

/** Найти кнопки открытия Popup */
const popupOpenEdit = document.querySelector('.profile__edit-buton');
const popupOpenAdd = document.querySelector('.profile__add-button');

/**Получение формы профиля */
const userInfo = new UserInfo({
  selectorUserName: '.profile-info__title',
  selectorUserJob: '.profile-info__intro'
})

/**Функция создания Popup редактировапния профиля */
const popupFormProfile = new PopupWithForm('.popup_type_profile', ({ name, job }) => {
  userInfo.setUserInfo({ name, job });
});

/**Функция открытия Popup редактировапния профиля */
popupOpenEdit.addEventListener('click', () => {
  popupFormProfile.open();
  popupFormProfile.inputsFill(userInfo.getUserInfo());
  validatorForms['form-profile'].clearValidationForm();
});


/**Функция создания Popup добавления карточки */
const popupFormAddCards = new PopupWithForm('.popup_type_place', ({ link, title }) => {
  cardsContainer.addItem(createCard({
    name: title,
    link: link,
    alt: title,
  }))
});

/**Функция открытия Popup добавления карточки */
popupOpenAdd.addEventListener('click', () => {
  popupFormAddCards.open();
  validatorForms['form-place'].clearValidationForm();
});

/**------------------Валидация---------------------- */

/**Получение экземпляров класса */
const validatorForms = {};

/**Функция валидации */
const enableValidation = (data) => {
  const listForm = Array.from(document.querySelectorAll(data.formSelector))
  listForm.forEach((formElement) => {
    const formValidator = new FormValidator(data, formElement);
    const formName = formElement.getAttribute('name');

    validatorForms[formName] = formValidator;
    formValidator.enableValidation();
  })
}

/**Вызов функции валидации */
enableValidation(formValidationConfig);

/**Слушатели */
openImagePopup.setEventListeners();
popupFormProfile.setEventListeners();
popupFormAddCards.setEventListeners();

