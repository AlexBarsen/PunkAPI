export const splitIngredients = function (element, ingredient) {
  element.hops.forEach((el) => ingredient.hops.push(` ${el.name}`));
  element.malt.forEach((el) => ingredient.malt.push(` ${el.name}`));

  ingredient.hops = [...new Set(ingredient.hops)];
  ingredient.malt = [...new Set(ingredient.malt)];
  ingredient.yeast = element.yeast;
};

export const AJAX = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const calculateBeerSize = function () {
  const info = document.querySelector(".beer--information");
  const beer = document.querySelector(".beer");
  if (info) {
    const infoHeight = window.getComputedStyle(info).height;
    beer.style.height = infoHeight;
  }
};

export const API_URL = "https://api.punkapi.com/v2/beers";

export const bookmarkType = function () {
  let inner = document.querySelector(".bookmark").innerHTML;
  if (inner === `<i class="far fa-bookmark fa-2x"></i>`)
    document.querySelector(
      ".bookmark"
    ).innerHTML = `<i class="fas fa-bookmark fa-2x"></i>`;
  else
    document.querySelector(
      ".bookmark"
    ).innerHTML = `<i class="far fa-bookmark fa-2x"></i>`;
};

export const resetLocalStorage = function (bookmark) {
  localStorage.clear();

  bookmark.length = 0;
};
