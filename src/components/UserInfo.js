class UserInfo {
  constructor({ selectorUserName, selectorUserJob, selectorUserAvatar}) {
    this._profileName = document.querySelector(selectorUserName);
    this._profileJob = document.querySelector(selectorUserJob);
    this._profileAvatar = document.querySelector(selectorUserAvatar);
  }

  /**Функция получения информации из профиля */
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileJob.textContent,
    }
  }

  /**Функция добавления информации в профиль из формы */
  setUserInfo({name, about}) {
    this._profileName.textContent = name;
    this._profileJob.textContent = about;
  }

  /**Функция добавления ссылки на новую картинку аватара */
  setUserAvatar( url ) {
    this._profileAvatar.src = url.avatar
  }

};

export { UserInfo };
