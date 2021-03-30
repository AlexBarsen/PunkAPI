import * as model from "./model.js";
import beerView from "./views/beerView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import infoView from "./views/infoView.js";
import bookmarksView from "./views/bookmarksView.js";
import paginationView from "./views/paginationView.js";
import * as helpers from "./helpers.js";

const controlRandomBeer = async function () {
  try {
    // 1) Loading Beer
    await model.loadRandomBeer();

    helpers.splitIngredients(
      model.state.beer.ingredients,
      model.state.beer.ingredient
    );
    // 2) Rendering Beer
    beerView.render(model.state.beer);
    infoView.render(model.state.beer);

    helpers.calculateBeerSize();
  } catch (err) {
    alert(err);
  }
};

const controlSearchBeers = async function () {
  try {
    // 1)Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render Search Beer
    resultsView.render(model.getSearchResultsPage(1));

    // 4) Render Pagination Buttons
    paginationView.render(model.state.search);
  } catch (err) {
    alert(err);
  }
};

const controlSelectedBeer = async function (selected) {
  try {
    await model.loadSelectedBeer(selected);

    helpers.splitIngredients(
      model.state.beer.ingredients,
      model.state.beer.ingredient
    );

    beerView.render(model.state.beer);
    infoView.render(model.state.beer);
    helpers.calculateBeerSize();
  } catch (err) {
    alert(err);
  }
};

const controlPagination = function (goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));

  paginationView.render(model.state.search);
};

const controlAddBookmark = function () {
  if (!model.state.beer.bookmarked) model.addBookmark(model.state.beer);
  else model.deleteBookmark(model.state.beer.id);

  bookmarksView.render(model.state.bookmarks);

  helpers.bookmarkType();
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const resetApp = function () {
  helpers.resetLocalStorage(model.state.bookmarks);
  resultsView.reset();
  paginationView.reset();
  beerView.reset();
  infoView.reset();
  bookmarksView.reset();
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  searchView.addHandlerSearch(controlSearchBeers);
  beerView.addHandlerRandom(controlRandomBeer);
  paginationView.addHandlerClick(controlPagination);
  searchView.addHandlerSelected(controlSelectedBeer);
  beerView.addHandlerBookmark(controlAddBookmark);
  bookmarksView.addHandlerSelectedBookmark(controlSelectedBeer);
  searchView.addHandlerReset(resetApp);
};

init();
