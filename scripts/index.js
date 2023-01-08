//Popup редактирования профиля
const popupProfile = document.querySelector('.popup__profile');                         // Найти popup редактирования профиля
const popupOpenEdit = document.querySelector('.profile__edit-buton');                   // Найти кнопку открытия редактирования профиля
const popupFormProfile = popupProfile.querySelector('.popap__form_profile');            // Найти форму popup изменения профиля
const profileName = document.querySelector('.profile-info__title');                     // Найти данные - name на странице
const profileJob = document.querySelector('.profile-info__intro');                      // Найти данные - job на странице
const inputName = document.querySelector('.popup__input_type_name');                    // Найти поле ввода - name в форме
const inputJob = document.querySelector('.popup__input_type_job');                      // Найти поле ввода - job в форме

//Popup редактирования карточек региона
const popupPlace = document.querySelector('.popup__place');                             // Найти popup редактирования карточек
const popupOpenAdd = document.querySelector('.profile__add-button');                    // Найти кнопку открытия редактирования карточек
const popupFormPlace = popupPlace.querySelector('.popap__form_place');                  // Найти форму popup изменения карточек

//Popup открытия просмотра изображения
const popupImagi = document.querySelector('.popup__image');                             // Найти popup открытия просмотра увеличенного изображения

const popupClose = document.querySelectorAll('.popup__button-close');                   // Найти ВСЕ крестики закрытия Popup

// Добавление карточек
const cardTemplate = document.querySelector('.template__card').content;                 // Найти шаблон карточки для добавления
const cardOnline = document.querySelector('.elements');                                 // Найти раздел, куда будут добавлятся карточки

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

//Функция создания карточки с возможностью выполнить лайк-дизлайк, удаление карточки
const allCard = (name, link) => {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);              // Клонировать содержимое тега template
  const cardElementTitle = cardElement.querySelector('.element__title');                   // Найти в шаблоне заголовок
  const cardElementPhoto = cardElement.querySelector('.element__img');                     // Найти в шаблоне фотографию
  const cardElementLike = cardElement.querySelector('.element__button');                   // Найти в шаблоне кнопку лайк-дизлайк
  const cardElementResetButton = cardElement.querySelector('.element__basket');            // Найти в шаблоне кнопку удаления

  cardElementTitle.textContent = name;                                                     // Присвоить значение name заголовку
  cardElementPhoto.src = link;                                                             // Присвоить значение link ссылке на картинку

  //Функция лайк-дизлайка карточки
  cardElementLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__button_active');                                  // Изменить выбраный элемент по клику на кнопку лайк
  });

  //Функция удаления карточки
  cardElementResetButton.addEventListener('click', (evt) => {
    evt.target.closest('.element').remove()                                                 // Удалить выбранный элемент по клику на карточку
  });

  return cardElement                                                                        // Отобразить карточку на странице
};

//Создание карточек из массива
initialCards.forEach((element) => {
  cardOnline.append(allCard(element.name, element.link));                                   // Преобразовать массив в строчный элемент
});

//Общая функция открытия Popup
const openPopup = (item) => {
  item.classList.add('popup_opened');                                                       // Добавить класс для открытия Popup
};

//Общая функция закрытия Popup
const closePopup = (item) => {
  item.classList.remove('popup_opened');                                                    // Удалить класс у открытого Popup
};

//Функция открытия Popup редактирования профиля указанными на странице данными
popupOpenEdit.addEventListener('click', () => {                                            // Отследить действие "нажать" в форме popup изменения профиля
  openPopup(popupProfile);                                                                 // Общей функцией и заданной для popup переменной открыть popup редактированияя профиля
  inputName.value = profileName.textContent;                                               // Дублировать с страницы имени в форму Popup
  inputJob.value = profileJob.textContent;                                                 // Дублировать с страницы вида деятельности в форму Popup
});

//Функция сохранения внесенных в формы popup изменений при закрытии окна
popupFormProfile.addEventListener('submit', (evt) => {                                     // Отследить действие "отправить" в форме popup изменения профиля
  evt.preventDefault();                                                                    // Отменить перезагрузку страницы
  profileName.textContent = inputName.value;                                               // Перезаписать на странице новое имя
  profileJob.textContent = inputJob.value;                                                 // Перезаписать на странице новое имя
  closePopup(popupProfile);                                                                // Закрыть popup редактирования профиля
});

//Закрытие всех Popup при нажатии на крестик
popupClose.forEach((item) => {                                                              // Методом перебора найти необходимую кнопку
  item.addEventListener('click', (evt) => {                                                 // Отследить действие "нажать" по крестику
    const popupClosest = evt.target.closest('.popup');                                      // Завести переменную...
    closePopup(popupClosest);                                                               // ...по которой закрыть popup
  });
});

//Функция открытия Popup добавления карточки местности
popupOpenAdd.addEventListener('click', () => {                                               // Отследить действие "нажать" в форме popup добавить новое место
  openPopup(popupPlace)                                                                      // Общей функцией и заданной для popup переменной открыть popup добавления карточки
});


//  const popupElement = document.querySelector('.popup'); //Найти popup
//Функция закрытия при нажатии на overlay. Сейчас не используется
// const closePopupClickOverlay = function (event) {
//   if (event.target === event.currentTarget) {
//     closePopup(popupProfile);
//   }
// }

//Слушатели событий
//popupElement.addEventListener('click', closePopupClickOverlay); //Отслеживаем действие по клику на Overlay
