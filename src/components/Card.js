class Card {
  constructor({data, userId, templateSelector, handleCardClick, handleCardDelete, handleCardLike, handleCardDeleteLike}) {
    this._name = data.name;
    this._link = data.link;
    this._dataLikes = data.likes;
    this.idCard = data._id;
    this.cardData = data;
    this._idUserCard = data.owner._id;
    this._likesCounter = data.likes.length;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._putLike = handleCardLike;
    this._removeLike = handleCardDeleteLike;
    this._userId = userId;
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
    this.cardElement = this._getTemplate();
    this._cardElementTitle = this.cardElement.querySelector('.element__title');
    this._cardElementPhoto = this.cardElement.querySelector('.element__img');
    this._cardElementLike = this.cardElement.querySelector('.element__button');
    this._cardElementDel = this.cardElement.querySelector('.element__basket');
    this._cardElementLikesCount = this.cardElement.querySelector('.element__span');

    this._cardElementTitle.textContent = this._name;
    this._cardElementPhoto.src = this._link;
    this._cardElementPhoto.alt = this._name;
    this.renderCardLike(this.cardData);

    /**Проверка отображения корзины на карточке User */
    if (this._idUserCard !== this._userId) {
      this._cardElementDel.remove();
    }

    this._setEventListeners();

    return this.cardElement;
  };

  /** Функция проверки наличия лайка на карточке */
  likedCard() {
    return this._dataLikes.some(like => like._id === this._userId)
  };

  /**Функция изменения установки и снятия лайка */
  togleLike() {
    if (this.likedCard()) {
      this._removeLike(this.idCard);
    } else {
      this._putLike(this.idCard);
    }
  }

  /**Функция общего отображения лайков и их колличества  */
  renderCardLike(card) {
      this._dataLikes = card.likes;
    if(this._dataLikes.length === 0) {
      this._cardElementLikesCount.textContent = '0';
    } else {
      this._cardElementLikesCount.textContent = this._dataLikes.length
    }
    if (this.likedCard()) {
      this._cardElementLike.classList.add('element__button_active');
    } else {
      this._cardElementLike.classList.remove('element__button_active');
    }
  }

  deleteCard() {
    this.cardElement.remove();
    this.cardElement = null;
  };

   /**Слушатели событий */
  _setEventListeners() {
    this._cardElementLike.addEventListener('click', () => this.togleLike());
    this._cardElementDel.addEventListener('click', () => this._handleCardDelete(this, this.idCard));
    this._cardElementPhoto.addEventListener('click', () => this._handleCardClick());
  };
};

export { Card };

