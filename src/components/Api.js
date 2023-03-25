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
  return Promise.reject(`Ошибка: ${res.status}`);
};

  /**Запросить данные с сервера */
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    })
    .then(res => this._checkResponse(res))
  }
}

export { Api };
