import View from "./View.js";

class BeerView extends View {
  _parentElement = document.querySelector(".beer--container");

  addHandlerRandom(handler) {
    const randomBtn = document.querySelector(".btn--random");
    randomBtn.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  addHandlerBookmark(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".bookmark");
      if (!btn) return;
      handler();
    });
  }

  _generateMarkup() {
    return `
    <div class="beer">
        <div class="beer__name u-margin-bottom-medium">${this._data.name}
        <button class="bookmark">${
          this._data.bookmarked
            ? `<i class="fas fa-bookmark fa-2x"></i>`
            : `<i class="far fa-bookmark fa-2x"></i>`
        }</button></div>
        <img class="beer__image u-margin-bottom-medium" src="${
          this._data.img
        }" alt="No Image Available" />
        <div class="beer__abv">${this._data.abv}% Alcohol</div>
    </div>`;
  }

  _resetMarkup() {
    return `<div class="before--content animated">
    Select a searched beer or generate a random one to display the
    corresponding image <span class="emoji">🍺</span>
    </div>`;
  }
}

export default new BeerView();
