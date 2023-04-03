export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._buttonClose = this._popup.querySelector('.popup__button-close');
    this._buttonSubmit = this._popup.querySelector('.popup__button-submit');
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

  /**Функция отображения Preloader */
  renderPreloader(loading, displayText) {
    if (!this._buttonSubmit) return;
    if (loading) {
      this.defaulText = this._buttonSubmit.textContent;
      this._buttonSubmit.textContent = displayText;
    } else {
      this._buttonSubmit.textContent = this.defaulText;
    }
  }

  /**Слушатели */
  setEventListeners() {
    this._buttonClose.addEventListener('click', () => {
      this.close();
    });
    this._popup.addEventListener('mousedown', this._handleOverlayClosePopup);
  }
};

