import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor(selectorPopup, submitCallback) {
    super(selectorPopup);
    this._submitCallback = submitCallback;
    this._formSubmit = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._formSubmit.querySelectorAll('.popup__input'));
    this._inputsValues = {};
  }

  /**Получить входные значения input */
  _getInputValues() {
    this._inputList.forEach((input) => {
      const inputName = input.getAttribute('name')
      this._inputsValues[inputName] = input.value;
    });
    return this._inputsValues;
  }

  /**Функция наполнения формы input переданными данными*/
  inputsFill(data) {
    this._inputList.forEach((input) => {
      const inputName = input.getAttribute('name')
      input.value = data[`${inputName}`];
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
