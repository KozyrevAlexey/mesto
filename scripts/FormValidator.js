class FormValidator {
  constructor(config, form){
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formSelector = config.formSelector;
    this._inputList = document.querySelectorAll(this._inputSelector);
    this._form = form;
    this._form = document.querySelector(form);
    this._buttonSubmint = this._form.querySelector(this._submitButtonSelector);
  }

  /**Функция валидации формы */
  enableValidation() {
    this._form.addEventListener('submit', this._disableEventDefault);
    this._form.addEventListener('input', () => {
      this._toggleButton();
    });
    this._addInputListners();
    this._toggleButton();
    this._resetValidationStyle();
  };

  /**Функция вывода сообщения валидации */
  _hendleFormInput(evt) {
    this._input = evt.target;
    this._inputId = this._input.id;
    this._errorElement = document.querySelector(`#${this._inputId}-error`);

    if (this._input.validity.valid) {
      this._input.classList.remove(this._inputErrorClass);
      this._errorElement.textContent = '';
    } else {
      this._input.classList.add(this._inputErrorClass);
      this._errorElement.textContent = this._input.validationMessage;
    }
  };

  /**Функция переключения кнопки сабмит */
  _toggleButton() {
    this._isFormValid = this._form.checkValidity();
    this._buttonSubmint.disabled = !this._isFormValid;
    this._buttonSubmint.classList.toggle(this._inactiveButtonClass, !this._isFormValid);
  }

  /**Отменить события по умолчанию */
  _disableEventDefault(evt) {
    evt.preventDefault
  };

  /**Объявить функцию слушателей всех инпутов */
_addInputListners() {
  this._inputList.forEach((item) => {
    item.addEventListener('input', (evt) => {
      this._hendleFormInput(evt);
    });
  })
};

/***Функция сброса общих стилей при открытии Popup*/
_resetValidationStyle() {
  this._disableSubmitInput();
  this._disableSubmitButton();
};

/** Функция валидации строки ввода */
_disableSubmitInput() {
  this._inputList.forEach((input) => {
    input.classList.remove(this._inputErrorClass );
    input.nextElementSibling.textContent = '';
  });
}

/** Функция валидации кнопки Submit */
_disableSubmitButton() {
  this._buttonSubmint.classList.add(this._inactiveButtonClass);
  this._buttonSubmint.setAttribute('disabled', '');
}
}
export { FormValidator };
