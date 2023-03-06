class Card {
  constructor(card, templateSelector, handleCardClic) {
    this._name = card.name;
    this._link = card.link;
    this._templateSelector = templateSelector;
    this._handleCardClic = handleCardClic;
  };

  /**Получить шаблон */
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  };

  /**Сгенерировать карточку */
  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardElementTitle = this._cardElement.querySelector('.element__title');
    this._cardElementPhoto = this._cardElement.querySelector('.element__img');
    this._cardElementLike = this._cardElement.querySelector('.element__button');
    this._cardElementDel = this._cardElement.querySelector('.element__basket');

    this._cardElementTitle.textContent = this._name;
    this._cardElementPhoto.src = this._link;

    this._setEventListeners();

    return this._cardElement;
  };

  /** Функция лайк-дизлайка карточки */
  _likeCard() {
    this._cardElementLike.classList.toggle('element__button_active');
  };

  /** Функция удаления карточки */
  _deliteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  };


  /**Слушатели событий */
  _setEventListeners() {
    this._cardElementLike.addEventListener('click', () => this._likeCard());
    this._cardElementDel.addEventListener('click', () => this._deliteCard());
    this._cardElementPhoto.addEventListener('click', () =>
      this._handleCardClic({
        link: this._link,
        name: this._name,
      }));
  };
};

export { Card };

