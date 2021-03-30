import View from "./View.js";

class infoView extends View {
  _parentElement = document.querySelector(".beer--information");

  _generateMarkup() {
    return `
    <div class="info">
              <span class="info__type">Name: </span>
              <span class="info__content">${this._data.name}</span>
            </div>
            <div class="info">
              <span class="info__type">Tagline: </span>
              <span class="info__content">${this._data.tagline}</span>
            </div>
            <div class="info">
              <span class="info__type">First Brewed: </span
              ><span class="info__content">${this._data.first_brewed}</span>
            </div>
            <div class="info">
              <span class="info__type">Description: </span>
              <span class="info__content">${this._data.description}</span>
            </div>
            <div class="info">
              <span class="info__type">% Alcohol: </span>
              <span class="info__content">${this._data.abv}%</span>
            </div>
            <div class="info">
              <span class="info__type">Ph: </span>
              <span class="info__content">${this._data.ph}</span>
            </div>
            <div class="info">
              <span class="info__type">Ingredients</span>
              <span class="info__content"><ul>
              <li><span class="info__ingredient">Hops: </span>${this._data.ingredient.hops}</li>
              <li><span class="info__ingredient">Malt: </span>${this._data.ingredient.malt}</li>
              <li><span class="info__ingredient">Yeast: </span>${this._data.ingredient.yeast}</li>
            </ul></span>
            </div>
            <div class="info">
              <span class="info__type">Food Pairnings: </span>
              <span class="info__content">${this._data.food_pairing}</span>
            </div>
            <div class="info">
              <span class="info__type">Brewer Tips: </span>
              <span class="info__content">${this._data.brewers_tips}</span>
            </div>`;
  }

  _resetMarkup() {
    return `<div class="before--content animated">
    Select a searched beer or generate a random one to display the
    corresponding information <span class="emoji">📇</span>
    </div>`;
  }
}
export default new infoView();
