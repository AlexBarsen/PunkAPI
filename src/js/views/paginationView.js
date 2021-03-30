import View from "./View.js";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // P1 and there are other pages
    if (currPage === 1 && numPages > 1)
      return `<button data-goto="${
        currPage + 1
      }" class="btn--inline pagination__btn--next">Page ${
        currPage + 1
      }<i class="fas fa-arrow-circle-right"></i></button>`;

    // Last P
    if (currPage === numPages && numPages > 1) {
      return `<button data-goto="${
        currPage - 1
      }" class="btn--inline pagination__btn--prev"><i class="fas fa-arrow-circle-left"></i>Page ${
        currPage - 1
      }</button>`;
    }

    // Other P
    if (currPage < numPages) {
      return `<button data-goto="${
        currPage - 1
      }" class="btn--inline pagination__btn--prev"><i class="fas fa-arrow-circle-left"></i>Page ${
        currPage - 1
      }</button>
      <button data-goto="${
        currPage + 1
      }" class="btn--inline pagination__btn--next">Page ${
        currPage + 1
      }<i class="fas fa-arrow-circle-right"></i></button>`;
    }
    // P1 and there are no other pages
    return ``;
  }

  _resetMarkup() {
    return ``;
  }
}

export default new PaginationView();
