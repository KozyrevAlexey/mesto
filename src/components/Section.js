class Section {
  constructor({renderer}, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  };

  /**Отрисовать контент */
  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }

  /**Добавить контент */
  addItem(element) {
    this._container.prepend(element);
  }
};



export { Section };
