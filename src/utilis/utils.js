/** Добавление карточек "из коробки" */
const initialCards = [
  {
    name: 'Москва',
    link: 'https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    // alt: '#'
  },
  {
    name: 'Ростов',
    link: 'https://images.unsplash.com/photo-1661595705828-ead987797764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80',
    // alt: '#'
  },
  {
    name: 'Тюмень',
    link: 'https://images.unsplash.com/photo-1621878983992-bac95a1e8dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80   ',
    // alt: '#'
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1490879112094-281fea0883dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
    // alt: '#'
  },
  {
    name: 'Сибирь',
    link: 'https://images.unsplash.com/photo-1521531105925-7c51dffd5098?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80',
    // alt: '#'
  },
  {
    name: 'Сочи',
    link: 'https://images.unsplash.com/photo-1549092156-04ee20673b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80 ',
    // alt: '#'
  }
];

// /** Объект валидации */

const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

/**Данные для обращения к серверу */
const apiConfig = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers:{
    'Content-Type': "application/json",
    authorization: '433d83bc-6b8b-4de8-9d1d-be42c9389f4e'
  }
}

export { initialCards, formValidationConfig, apiConfig };





// const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
//     // alt: 'Изображение низких гор покрытых зеленью и снегом'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
//     // alt: 'Изображение реки с берегами покрытым первым снегом'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
//     // alt: 'Изображение квартала многоэтажных домов в вечернее время'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
//     // alt: 'Изображение лишайника на склоне сопок Камчатки'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
//     // alt: 'Изображение железной дороги идущей вдоль низких посадок деревьев'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
//     // alt: 'Изображение крутого берега озера Байкал присыпанного снегом'
//   }
// ];
