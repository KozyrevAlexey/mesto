import Popup from "./Popup.js";

class PopupWithRemoval extends Popup {
  constructor(selectorPopup, {submitCallback}) {
    super(selectorPopup);
    this._submitCallback = submitCallback;
  }

  /**Функция открытия Popup и получения данных о карточке */
  open( {idCard, cardElement} ) {
    super.open();
    this.id = idCard;
    this.card = cardElement;
  }

  /**Слушатель */
  setEventListeners() {
    super.setEventListeners();
    this._buttonSubmit.addEventListener('click', () => {
      this._submitCallback(this);
    })
  }
}

export{ PopupWithRemoval };
