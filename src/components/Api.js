class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
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
      headers: this._headers,
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
}



export { Api };
