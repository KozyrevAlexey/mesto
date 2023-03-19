import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor(selectorPopup, { submitCallback }) {
    super(selectorPopup);
    this._submitCallback = submitCallback;
    this._formSubmit = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._formSubmit.querySelectorAll('.popup__input'));
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

  /**Слушатели */
  setEventListeners() {
    super.setEventListeners();
    this._formSubmit.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallback(this._getInputValues());
      this.close();
    })
  }
};

export { PopupWithForm };
