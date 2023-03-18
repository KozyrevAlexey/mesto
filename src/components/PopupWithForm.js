import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor(selectorPopup, submitCallback) {
    super(selectorPopup);
    this._submitCallback = submitCallback;
    this._formSubmit = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._formSubmit.querySelector('.popup__input'));
    this._inputtsValues = {};
  }

  /**Получить входные значения input */
  _getInputValues() {
    this._inputList.forEach((input) => {
      const inputName = input.getAttribute('name')
      this._inputtsValues[inputName] = input.value;
    });
    return this._inputtsValues
  }

  /**Функция наполнения формы input переданными данными*/
  inputsFill(data) {
    this._inputList.forEach((input) => {
      const inputName = input.getAttribute('name')
      input.value = data[`$(inputName)`];
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
      this._close();
    })
  }

};

export { PopupWithForm };
