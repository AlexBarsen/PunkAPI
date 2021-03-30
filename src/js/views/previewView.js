import View from "./View.js";

class PreviewView extends View {
  _parentElement = "";

  _generateMarkup() {
    return `
    <li class="preview">
    <button data-id="${this._data.id}" class="preview__box">
      <img
        class="preview__img"
        src="${this._data.img}"
        alt="No image available"
      />
      <div class="preview__data">
        <h4 class="preview__title">${this._data.name}</h4>
        <p class="preview__abv">${this._data.abv}% Alcohol</p>
      </div>
    </button>
  </li>`;
  }
}

export default new PreviewView();
