import { AJAX, API_URL } from "./helpers.js";

export const state = {
  beer: {},
  search: {
    query: "",
    results: [],
    page: 1,
    resultsPerPage: 5,
  },
  bookmarks: [],
};

const createBeerObj = function (data) {
  const beer = data[0];
  return {
    id: beer.id,
    name: beer.name,
    tagline: beer.tagline,
    first_brewed: beer.first_brewed,
    description: beer.description,
    abv: beer.abv,
    ph: beer.ph,
    img: beer.image_url,
    food_pairing: beer.food_pairing,
    ingredients: beer.ingredients,
    brewers_tips: beer.brewers_tips,
    ingredient: {
      hops: [],
      malt: [],
      yeast: "",
    },
  };
};

export const loadRandomBeer = async function () {
  try {
    const data = await AJAX(`${API_URL}/random`);

    state.beer = createBeerObj(data);
  } catch (err) {
    alert(err);
  }
};

export const loadSearchResults = async function (query) {
  try {
    const data = await AJAX(`${API_URL}?beer_name=${query}`);

    state.search.results = data.map((beer) => {
      return {
        id: beer.id,
        name: beer.name,
        abv: beer.abv,
        img: beer.image_url,
      };
    });
  } catch (err) {
    alert(err);
  }
};

export const loadSelectedBeer = async function (selected) {
  try {
    const data = await AJAX(`${API_URL}/${selected}`);

    state.beer = createBeerObj(data);

    if (state.bookmarks.some((el) => el.id === parseInt(selected)))
      state.beer.bookmarked = true;
    else state.beer.bookmarked = false;
  } catch (err) {
    alert(err);
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage; // 0
  const end = page * state.search.resultsPerPage; // 5
  return state.search.results.slice(start, end);
};

const persistBookmarks = function () {
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};

export const addBookmark = function (beer) {
  state.bookmarks.push(beer);

  if (beer.id === state.beer.id) state.beer.bookmarked = true;

  persistBookmarks();
};

export const deleteBookmark = function (id) {
  const index = state.bookmarks.findIndex((el) => el.id === id);

  state.bookmarks.splice(index, 1);

  if (id === state.beer.id) state.beer.bookmarked = false;

  persistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem("bookmarks");
  if (storage) state.bookmarks = JSON.parse(storage);
};

init();
