import View from "./View.js";
import previewView from "./previewView.js";

class BookmarksView extends View {
  _parentElement = document.querySelector(".bookmarks__list");
  _errorMessage =
    " No bookmarks yet, bookmark a beer and it will appear here 🙂";

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  addHandlerSelectedBookmark(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const clicked = e.target.closest(".preview__box");
      if (!clicked) return;

      const selected = clicked.dataset.id;
      handler(selected);
    });
  }
  _generateMarkup() {
    return this._data
      .map((bookmark) => previewView.render(bookmark, false))
      .join("");
  }

  _resetMarkup() {
    return `<div class="message">
    <p>
      No bookmarks yet, bookmark a beer and it will appear here 🙂
    </p>
  </div>`;
  }
}

export default new BookmarksView();
