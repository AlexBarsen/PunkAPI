import View from "./View.js";

class SearchView extends View {
  _parentElement = document.querySelector(".search--results");

  getQuery() {
    const query = document.querySelector(".search__field").value;
    this.clearInput();
    return query;
  }

  clearInput() {
    const inputValue = document.querySelector(".search__field");
    inputValue.value = "";
  }

  addHandlerSearch(handler) {
    const searchInput = document.querySelector(".search");
    searchInput.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  addHandlerSelected(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const clicked = e.target.closest(".preview__box");
      if (!clicked) return;

      const selected = clicked.dataset.id;
      handler(selected);
    });
  }

  addHandlerReset(handler) {
    const reset = document.querySelector(".btn--reset");
    reset.addEventListener("click", function (e) {
      const clicked = e.target.closest(".btn--reset");
      if (!clicked) return;
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
