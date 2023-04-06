import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor(selectorPopup, { submitCallback }) {
    super(selectorPopup);
    this._submitCallback = submitCallback;
    this._formSubmit = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._formSubmit.querySelectorAll('.popup__input'));
    this._buttonSubmit = this._formSubmit.querySelector('.popup__button-submit');
  }

  /**Получить входные значения input */
  _getInputValues() {
    this._inputsValues = {};
    this._inputList.forEach((input) => {
      this._inputsValues[input.name] = input.value;
    });
    return this._inputsValues;
  }

  /**Функция наполнения формы input переданными данными*/
  setInputValues = (data) => {
    this._inputList.forEach((input, i) => {
      input.value = Object.values(data)[i];
    });
  }

  /**Функция закрытия формы и ее очистки */
  close() {
    this._formSubmit.reset();
    super.close();
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
    super.setEventListeners();
    this._formSubmit.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallback(this._getInputValues());
    })
  }
};

export { PopupWithForm };
