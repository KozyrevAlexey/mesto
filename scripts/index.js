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

/** Добавление карточек */
const cardTemplate = document.querySelector('.template-card').content;                     // Найти шаблон карточки для добавления
const cardsContainer = document.querySelector('.elements');                                // Найти раздел, куда будут добавлятся карточки

/** Функция лайк-дизлайка карточки */
const bindCardLikeEventListener = (buttonLike) => {
  buttonLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__button_active');
  });
};

/** Функция удаления карточки */
const bindCardDeleteEventListener = (cardData) => {
  cardData.addEventListener('click', (evt) => {
    evt.target.closest('.element').remove();
  });
};

/** Функция создания карточки */
const createCard = (cardData) => {
  const cardElement = cardTemplate.cloneNode(true);                                        // Клонировать содержимое тега template
  const cardElementTitle = cardElement.querySelector('.element__title');                   // Найти в шаблоне заголовок
  const cardElementPhoto = cardElement.querySelector('.element__img');                     // Найти в шаблоне фотографию
  const cardElementLike = cardElement.querySelector('.element__button');                   // Найти кнопку нравится-ненравится
  const cardElementDel = cardElement.querySelector('.element__basket');                    // Найти кнопку удаления карточе

  cardElementTitle.textContent = cardData.name;                                            // Присвоить значение name заголовку
  cardElementPhoto.src = cardData.link;                                                    // Присвоить значение link ссылке на картинку
  cardElementPhoto.alt = cardData.alt;                                                     // Присвоить описание картинке

  bindCardPreviewEventListener(cardElementPhoto);                                          // Открыть popup просмотра изображения карточки
  bindCardLikeEventListener(cardElementLike);                                              // Отметить в карточке нравится - ненравится
  bindCardDeleteEventListener(cardElementDel);                                             // Удалить карточку

  return cardElement;                                                                      // Отобразить карточку на странице
};

/** Функция открытия просмотра изображения карточки */
const bindCardPreviewEventListener = (cardImageElement) => {
  cardImageElement.addEventListener('click', (evt) => {
    openPopup(popupImage);
    elementImage.src = cardImageElement.src;
    elementImage.alt = cardImageElement.alt;
    elementTitle.textContent = evt.target.closest('.element').textContent;
  });
};

/** Создание карточек из массива */
initialCards.forEach((cardData) => {
  cardsContainer.append(createCard(cardData));
});

/** Общая функция открытия Popup */
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};

/** Общая функция закрытия Popup */
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

/** Функция открытия Popup редактирования профиля c указанными на странице данными */
popupOpenEdit.addEventListener('click', () => {
  openPopup(popupProfile);
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
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
    const popupClosest = evt.target.closest('.popup');
    closePopup(popupClosest);
  });
});

/** Функция открытия Popup добавления карточки местности */
popupOpenAdd.addEventListener('click', () => {
  openPopup(popupPlace);
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

