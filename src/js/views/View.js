export default class View {
  render(data, render = true) {
    console.log(data);

    if (!data || data.length === 0) return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this.clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  clear() {
    this._parentElement.innerHTML = "";
  }

  reset() {
    const markup = this._resetMarkup();
    this.clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError() {
    this.clear();
    const markup = `<div class="before--content animated">
    ${this._errorMessage}
    </div>`;
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
