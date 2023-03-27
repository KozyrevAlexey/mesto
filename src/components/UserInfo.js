class UserInfo {
  constructor({ selectorUserName, selectorUserJob }) {
    this._profileName = document.querySelector(selectorUserName);
    this._profileJob = document.querySelector(selectorUserJob);
    this._profileAvatar = document.querySelector('.profile__img');
  }

  /**Функция получения информации из профиля */
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileJob.textContent,
    }
  }

  /**Функция добавления информации в профиль из формы */
  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileJob.textContent = data.about;
  }

  /**Функция добавления ссылки на новую картинку аватара */
  setUserAvatar(url) {
    this._profileAvatar.src = url.avatar
  }

  /**Функция идентифекации пользователя */
  getUserID(id) {
    this._myID = id;
  }
};

export { UserInfo };
