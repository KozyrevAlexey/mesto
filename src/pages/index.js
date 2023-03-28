import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { apiConfig, formValidationConfig } from '../utilis/utils.js';
import { Api } from '../components/Api.js'

import '../pages/index.css';

/**----------------Api------------------------------ */
const api = new Api(apiConfig);

/**Отобразить полученные карточки с сервера */
Promise.resolve(api.getInitialCards())
.then(data => {
  cardsContainer.renderItems(data)
})
.catch((err) => alert(err))

/**Отобразить полученные данные профиля и аватар с сервера */
Promise.resolve(api.getUserInfoApi())
.then((res) => {
  userInfo.setUserAvatar(res);
  userInfo.setUserInfo(res);
  userInfo.getUserID(res._id);
})
.catch((err) => alert(err))


/**-------------Карточки с изображением---------------------- */

/**Создание Popup изображения */
const cardImagePopup = new PopupWithImage('.popup_type_image');

/** Функция создания карточки */
const createCard = (cardData) => {
  const card = new Card(cardData, '.template-card', () => {
    cardImagePopup.open(cardData);
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

/**-------------Popup добавления и редактирования----------------- */

/** Найти кнопки открытия Popup */
const popupOpenEdit = document.querySelector('.profile__edit-buton');
const popupOpenAdd = document.querySelector('.profile__add-button');
const popupOpenAvatar = document.querySelector('.profile__avatar')

/**Получение формы профиля */
const userInfo = new UserInfo({
  selectorUserName: '.profile-info__title',
  selectorUserJob: '.profile-info__intro'
})

/**Функция создания Popup редактировапния профиля */
const popupFormProfile = new PopupWithForm('.popup_type_profile', {
  submitCallback: (data) => {
    popupFormProfile.renderPreloader(true, 'Загрузка...')
    api.setUserInfoApi(data)
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .catch((err) => alert(err))
    .finally(() => {
      popupFormProfile.renderPreloader(false);
    })
  }
})

/**Функция открытия Popup редактировапния профиля */
popupOpenEdit.addEventListener('click', () => {
  popupFormProfile.open();
  popupFormProfile.setInputValues(userInfo.getUserInfo());
  validatorForms['form-profile'].clearValidationForm();
});

/**Функция создания Popup добавления карточки */
const  popupFormAddCards = new PopupWithForm('.popup_type_place', {
  submitCallback: (data) => {
    popupFormAddCards.renderPreloader(true, 'Сохранение...')
    api.addNewCard(data)
    .then((newCard) => {
      cardsContainer.addItem(createCard({
        name: newCard.name,
        link: newCard.link,
      }))
    })
    .catch((err) => alert(err))
    .finally(() => {
      popupFormAddCards.renderPreloader(false);
    })
  }
})

/**Функция открытия Popup добавления карточки */
popupOpenAdd.addEventListener('click', () => {
  popupFormAddCards.open();
  validatorForms['form-place'].clearValidationForm();
});

/**Функция создания Popup редактирования аватара */
const popupFormAvatar = new PopupWithForm('.popup_type_avatar', {
  submitCallback: (data) => {
    popupFormAvatar.renderPreloader(true, 'Загрузка...')
    api.setUserAvatar(data)
    .then((res) => {
      userInfo.setUserAvatar(res);
    })
    .catch((err) => alert(err))
    .finally(() => {
      popupFormAvatar.renderPreloader(false);
    })
  }
})

/**Функция открытия Popup аватара */
popupOpenAvatar.addEventListener('click', () => {
  popupFormAvatar.open();
  validatorForms['form-avatar'].clearValidationForm();
})

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
cardImagePopup.setEventListeners();
popupFormProfile.setEventListeners();
popupFormAddCards.setEventListeners();
popupFormAvatar.setEventListeners();

