import View from "./View.js";
import previewView from "./previewView.js";

class ResultsView extends View {
  _parentElement = document.querySelector(".search--results");
  _errorMessage = `No results for your search, please try again. <span class="emoji">❌</span>`;

  _generateMarkup() {
    return this._data
      .map((result) => previewView.render(result, false))
      .join("");
  }

  _resetMarkup() {
    return `<div class="before--content animated">
    Search for a beer to, the results will appear here
    <span class="emoji">🍻</span>
    </div>`;
  }
}

export default new ResultsView();
