class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
    this._authorization = config.headers['authorization'];
  }

  /**Проверить на ошибки */
_checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Упс.... Что-то пошло не так! Ошибка: ${res.status}`);
};

  /**Запросить данные с сервера */
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._authorization
      },
    })
    .then(res => this._checkResponse(res))
  }

  /**Функция добавления новой карточки на сервер */
addNewCard(data) {
  return fetch(`${this._url}/cards`, {
    method: 'POST',
    headers: this._headers,
    body: JSON.stringify({
      name: data.name,
      link: data.link,
    }),
  })
  .then(res => this._checkResponse(res))
};

/**Функция получения данных пользователя с сервера*/
getUserInfoApi() {
  return fetch(`${this._url}/users/me`, {
    headers: {
      authorization: this._authorization
    },
  })
  .then(res => this._checkResponse(res))
}

/**Функция передачи данных пользователя с сервера */
setUserInfoApi(data) {
  return fetch(`${this._url}/users/me`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      name: data.name,
      about: data.about,
    }),
  })
  .then(res => this._checkResponse(res))
}

/**Функция передачи на сервер нового аватара */
setUserAvatar(data) {
  return fetch(`${this._url}/users/me/avatar`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      avatar: data.avatar,
    }),
  })
  .then(res => this._checkResponse(res))
}

/**Функция удаления карточки с сервера */
deleteCard(cardId) {
  return fetch(`${this._url}/cards/${cardId}`, {
    method: 'DELETE',
    headers: this._headers,
  })
  .then(res => this._checkResponse(res))
}

/**Функция отправки лайка на сервер */
putCardLike(cardId) {
  return fetch(`${this._url}/cards/${cardId}/likes`, {
    method: 'PUT',
    headers: this._headers,
  })
  .then(res => this._checkResponse(res))
}

/**Функция удаления лайка с сервера */
deleteCardLike(cardId) {
  return fetch(`${this._url}/cards/${cardId}/likes`, {
    method: 'DELETE',
    headers: this._headers,
  })
  .then(res => this._checkResponse(res))
}

}

export { Api };
