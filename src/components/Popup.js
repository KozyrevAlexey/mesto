export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._buttonClose = this._popup.querySelector('.popup__button-close');
  }

  /**Функция открытия Popup */
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClosePopup)
  }

  /**Функция закрытия Popup */
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClosePopup)
  }

  /**Функция закрытия по клавише ESC */
  _handleEscClosePopup = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  /**Закрытие Popup при нажатии на Overlay */
  _handleOverlayClosePopup = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close();
    };
  }

  /**Слушатели */
  setEventListeners() {
    this._buttonClose.addEventListener('click', () => {
      this.close();
    });
    this._popup.addEventListener('mousedown', this._handleOverlayClosePopup);
  }
};

