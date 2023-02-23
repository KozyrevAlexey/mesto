class Card {
  constructor(card, templateSelector) {
    this._name = card.name;
    this._link = card.link;
    this._alt = card.alt;
    this._templateSelector = templateSelector;
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

    /**Найти карточку и ее элементы */
    this._cardElement = this._getTemplate();
    this._cardElementTitle = this._cardElement.querySelector('.element__title');
    this._cardElementPhoto = this._cardElement.querySelector('.element__img');
    this._cardElementLike = this._cardElement.querySelector('.element__button');
    this._cardElementDel = this._cardElement.querySelector('.element__basket');

    /**Передать данные в карточку */
    this._cardElementTitle.textContent = this._name;
    this._cardElementPhoto.src = this._link;
    this._cardElementPhoto.alt = this._alt;

    /**Установить слушатель */
    this._setEventListeners();

    return this._cardElement;
  };

  /** Функция лайк-дизлайка карточки */
  _likeCard(evt) {
    evt.target.classList.toggle('element__button_active');
  };

  /** Функция удаления карточки */
  _deliteCard() {
    this._cardElement.remove();
  };

  /**Слушатели событий */
  _setEventListeners() {
    this._cardElementLike.addEventListener('click', this._likeCard);
    this._cardElementDel.addEventListener('click', () => this._deliteCard());
  };

};

export { Card };
