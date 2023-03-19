class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formSelector = config.formSelector;
    this._form = form;
    this._buttonSubmint = this._form.querySelector(this._submitButtonSelector);
  }

  /**Функция валидации формы */
  enableValidation() {
    this._addInputListners();
  };

  /**Добавить класс ошибки */
  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    inputElement.classList.add(this._errorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  /**Снять класс ошибки */
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._errorClass);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
  }

  /**Проверить валидность поля */
  _handleFormInput(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  /**Функция переключения кнопки сабмит */
  _toggleButton() {
    this._isFormValid = this._form.checkValidity();
    this._buttonSubmint.disabled = !this._isFormValid;
    this._buttonSubmint.classList.toggle(this._inactiveButtonClass, !this._isFormValid);
  }

  /**Объявить функцию слушателей всех инпутов */
  _addInputListners() {
    this._toggleButton();
    this._inputList = this._form.querySelectorAll(this._inputSelector);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._handleFormInput(inputElement);
        this._toggleButton();
      });
    })
  };

  /**Сбросить валидацию после закрытия формы */
  clearValidationForm() {
    this._toggleButton();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    })
  }
}

export { FormValidator };
