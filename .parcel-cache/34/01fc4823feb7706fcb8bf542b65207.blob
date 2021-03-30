// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, cache, entry, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject.parcelRequire === 'function' &&
    globalObject.parcelRequire;
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  globalObject.parcelRequire = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"08be95db71e18c695e39470f2daac536":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "1edb6ce78d1353936fbdade5f7e89dcd";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH */

var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept, acceptedAssets; // eslint-disable-next-line no-redeclare

var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
  var port = HMR_PORT || location.port;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    acceptedAssets = {};
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH); // Handle HMR Update

      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || hmrAcceptCheck(global.parcelRequire, asset.id);

        if (didAccept) {
          handled = true;
        }
      });

      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });

        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];

          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      } // Render the fancy html overlay


      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      document.body.appendChild(overlay);
    }
  };

  ws.onerror = function (e) {
    console.error(e.message);
  };

  ws.onclose = function (e) {
    console.warn('[parcel] 🚨 Connection to the HMR server was lost');
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}

function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';

  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }

  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    if (link.parentNode !== null) {
      link.parentNode.removeChild(link);
    }
  };

  newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now());
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      var absolute = /^https?:\/\//i.test(links[i].getAttribute('href'));

      if (!absolute) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    if (asset.type === 'css') {
      reloadCSS();
    } else {
      var fn = new Function('require', 'module', 'exports', asset.output);
      modules[asset.id] = [fn, asset.depsByBundle[bundle.HMR_BUNDLE_ID]];
    }
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1]);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(global.parcelRequire, id);
      });

      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }

  acceptedAssets[id] = true;
}
},{}],"175e469a7ea7db1c8c0744d04372621f":[function(require,module,exports) {
"use strict";

var model = _interopRequireWildcard(require("./model.js"));

var _beerView = _interopRequireDefault(require("./views/beerView.js"));

var _searchView = _interopRequireDefault(require("./views/searchView.js"));

var _resultsView = _interopRequireDefault(require("./views/resultsView.js"));

var _infoView = _interopRequireDefault(require("./views/infoView.js"));

var _bookmarksView = _interopRequireDefault(require("./views/bookmarksView.js"));

var _paginationView = _interopRequireDefault(require("./views/paginationView.js"));

var helpers = _interopRequireWildcard(require("./helpers.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const controlRandomBeer = async function () {
  try {
    // 1) Loading Beer
    await model.loadRandomBeer();
    helpers.splitIngredients(model.state.beer.ingredients, model.state.beer.ingredient); // 2) Rendering Beer

    _beerView.default.render(model.state.beer);

    _infoView.default.render(model.state.beer);

    helpers.calculateBeerSize();
  } catch (err) {
    alert(err);
  }
};

const controlSearchBeers = async function () {
  try {
    // 1)Get search query
    const query = _searchView.default.getQuery();

    if (!query) return; // 2) Load search results

    await model.loadSearchResults(query); // 3) Render Search Beer

    _resultsView.default.render(model.getSearchResultsPage(1)); // 4) Render Pagination Buttons


    _paginationView.default.render(model.state.search);
  } catch (err) {
    alert(err);
  }
};

const controlSelectedBeer = async function (selected) {
  try {
    await model.loadSelectedBeer(selected);
    helpers.splitIngredients(model.state.beer.ingredients, model.state.beer.ingredient);

    _beerView.default.render(model.state.beer);

    _infoView.default.render(model.state.beer);

    helpers.calculateBeerSize();
  } catch (err) {
    alert(err);
  }
};

const controlPagination = function (goToPage) {
  _resultsView.default.render(model.getSearchResultsPage(goToPage));

  _paginationView.default.render(model.state.search);
};

const controlAddBookmark = function () {
  if (!model.state.beer.bookmarked) model.addBookmark(model.state.beer);else model.deleteBookmark(model.state.beer.id);

  _bookmarksView.default.render(model.state.bookmarks);

  helpers.bookmarkType();
};

const controlBookmarks = function () {
  _bookmarksView.default.render(model.state.bookmarks);
};

const resetApp = function () {
  helpers.resetLocalStorage(model.state.bookmarks);

  _resultsView.default.reset();

  _paginationView.default.reset();

  _beerView.default.reset();

  _infoView.default.reset();

  _bookmarksView.default.reset();
};

const init = function () {
  _bookmarksView.default.addHandlerRender(controlBookmarks);

  _searchView.default.addHandlerSearch(controlSearchBeers);

  _beerView.default.addHandlerRandom(controlRandomBeer);

  _paginationView.default.addHandlerClick(controlPagination);

  _searchView.default.addHandlerSelected(controlSelectedBeer);

  _beerView.default.addHandlerBookmark(controlAddBookmark);

  _bookmarksView.default.addHandlerSelectedBookmark(controlSelectedBeer);

  _searchView.default.addHandlerReset(resetApp);
};

init();
},{"./model.js":"aabf248f40f7693ef84a0cb99f385d1f","./views/beerView.js":"4de097975be2370ccf295e02d873ac27","./views/searchView.js":"c5d792f7cac03ef65de30cc0fbb2cae7","./views/resultsView.js":"eacdbc0d50ee3d2819f3ee59366c2773","./views/infoView.js":"ccd0f9bfdc3baec3c1e0b3a50db74695","./views/bookmarksView.js":"7ed9311e216aa789713f70ebeec3ed40","./views/paginationView.js":"d2063f3e7de2e4cdacfcb5eb6479db05","./helpers.js":"0e8dcd8a4e1c61cf18f78e1c2563655d"}],"aabf248f40f7693ef84a0cb99f385d1f":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteBookmark = exports.addBookmark = exports.getSearchResultsPage = exports.loadSelectedBeer = exports.loadSearchResults = exports.loadRandomBeer = exports.state = void 0;

var _helpers = require("./helpers.js");

const state = {
  beer: {},
  search: {
    query: "",
    results: [],
    page: 1,
    resultsPerPage: 5
  },
  bookmarks: []
};
exports.state = state;

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
      yeast: ""
    }
  };
};

const loadRandomBeer = async function () {
  try {
    const data = await (0, _helpers.AJAX)(`${_helpers.API_URL}/random`);
    state.beer = createBeerObj(data);
  } catch (err) {
    alert(err);
  }
};

exports.loadRandomBeer = loadRandomBeer;

const loadSearchResults = async function (query) {
  try {
    const data = await (0, _helpers.AJAX)(`${_helpers.API_URL}?beer_name=${query}`);
    state.search.results = data.map(beer => {
      return {
        id: beer.id,
        name: beer.name,
        abv: beer.abv,
        img: beer.image_url
      };
    });
  } catch (err) {
    alert(err);
  }
};

exports.loadSearchResults = loadSearchResults;

const loadSelectedBeer = async function (selected) {
  try {
    const data = await (0, _helpers.AJAX)(`${_helpers.API_URL}/${selected}`);
    state.beer = createBeerObj(data);
    if (state.bookmarks.some(el => el.id === parseInt(selected))) state.beer.bookmarked = true;else state.beer.bookmarked = false;
  } catch (err) {
    alert(err);
  }
};

exports.loadSelectedBeer = loadSelectedBeer;

const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage; // 0

  const end = page * state.search.resultsPerPage; // 5

  return state.search.results.slice(start, end);
};

exports.getSearchResultsPage = getSearchResultsPage;

const persistBookmarks = function () {
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};

const addBookmark = function (beer) {
  state.bookmarks.push(beer);
  if (beer.id === state.beer.id) state.beer.bookmarked = true;
  persistBookmarks();
};

exports.addBookmark = addBookmark;

const deleteBookmark = function (id) {
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);
  if (id === state.beer.id) state.beer.bookmarked = false;
  persistBookmarks();
};

exports.deleteBookmark = deleteBookmark;

const init = function () {
  const storage = localStorage.getItem("bookmarks");
  if (storage) state.bookmarks = JSON.parse(storage);
};

init();
},{"./helpers.js":"0e8dcd8a4e1c61cf18f78e1c2563655d"}],"0e8dcd8a4e1c61cf18f78e1c2563655d":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetLocalStorage = exports.bookmarkType = exports.API_URL = exports.calculateBeerSize = exports.AJAX = exports.splitIngredients = void 0;

const splitIngredients = function (element, ingredient) {
  element.hops.forEach(el => ingredient.hops.push(` ${el.name}`));
  element.malt.forEach(el => ingredient.malt.push(` ${el.name}`));
  ingredient.hops = [...new Set(ingredient.hops)];
  ingredient.malt = [...new Set(ingredient.malt)];
  ingredient.yeast = element.yeast;
};

exports.splitIngredients = splitIngredients;

const AJAX = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

exports.AJAX = AJAX;

const calculateBeerSize = function () {
  const info = document.querySelector(".beer--information");
  const beer = document.querySelector(".beer");

  if (info) {
    const infoHeight = window.getComputedStyle(info).height;
    beer.style.height = infoHeight;
  }
};

exports.calculateBeerSize = calculateBeerSize;
const API_URL = "https://api.punkapi.com/v2/beers";
exports.API_URL = API_URL;

const bookmarkType = function () {
  let inner = document.querySelector(".bookmark").innerHTML;
  if (inner === `<i class="far fa-bookmark fa-2x"></i>`) document.querySelector(".bookmark").innerHTML = `<i class="fas fa-bookmark fa-2x"></i>`;else document.querySelector(".bookmark").innerHTML = `<i class="far fa-bookmark fa-2x"></i>`;
};

exports.bookmarkType = bookmarkType;

const resetLocalStorage = function (bookmark) {
  localStorage.clear();
  bookmark.length = 0;
};

exports.resetLocalStorage = resetLocalStorage;
},{}],"4de097975be2370ccf295e02d873ac27":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _View = _interopRequireDefault(require("./View.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class BeerView extends _View.default {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_parentElement", document.querySelector(".beer--container"));
  }

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
        <button class="bookmark">${this._data.bookmarked ? `<i class="fas fa-bookmark fa-2x"></i>` : `<i class="far fa-bookmark fa-2x"></i>`}</button></div>
        <img class="beer__image u-margin-bottom-medium" src="${this._data.img}" alt="No Image Available" />
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

var _default = new BeerView();

exports.default = _default;
},{"./View.js":"61b7a1b097e16436be3d54c2f1828c73"}],"61b7a1b097e16436be3d54c2f1828c73":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class View {
  render(data, render = true) {
    console.log(data);
    if (!data || data.length === 0) return this.renderError();
    this._data = data;

    const markup = this._generateMarkup();

    if (!render) return markup;
    this.clear();

    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  clear() {
    this._parentElement.innerHTML = "";
  }

  reset() {
    const markup = this._resetMarkup();

    this.clear();

    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError() {
    this.clear();
    const markup = `<div class="before--content animated">
    ${this._errorMessage}
    </div>`;

    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

}

exports.default = View;
},{}],"c5d792f7cac03ef65de30cc0fbb2cae7":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _View = _interopRequireDefault(require("./View.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class SearchView extends _View.default {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_parentElement", document.querySelector(".search--results"));
  }

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

var _default = new SearchView();

exports.default = _default;
},{"./View.js":"61b7a1b097e16436be3d54c2f1828c73"}],"eacdbc0d50ee3d2819f3ee59366c2773":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _View = _interopRequireDefault(require("./View.js"));

var _previewView = _interopRequireDefault(require("./previewView.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ResultsView extends _View.default {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_parentElement", document.querySelector(".search--results"));

    _defineProperty(this, "_errorMessage", `No results for your search, please try again. <span class="emoji">❌</span>`);
  }

  _generateMarkup() {
    return this._data.map(result => _previewView.default.render(result, false)).join("");
  }

  _resetMarkup() {
    return `<div class="before--content animated">
    Search for a beer to, the results will appear here
    <span class="emoji">🍻</span>
    </div>`;
  }

}

var _default = new ResultsView();

exports.default = _default;
},{"./View.js":"61b7a1b097e16436be3d54c2f1828c73","./previewView.js":"e4d6583325a8b6c9380670c4f233bf07"}],"e4d6583325a8b6c9380670c4f233bf07":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _View = _interopRequireDefault(require("./View.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PreviewView extends _View.default {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_parentElement", "");
  }

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

var _default = new PreviewView();

exports.default = _default;
},{"./View.js":"61b7a1b097e16436be3d54c2f1828c73"}],"ccd0f9bfdc3baec3c1e0b3a50db74695":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _View = _interopRequireDefault(require("./View.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class infoView extends _View.default {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_parentElement", document.querySelector(".beer--information"));
  }

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

var _default = new infoView();

exports.default = _default;
},{"./View.js":"61b7a1b097e16436be3d54c2f1828c73"}],"7ed9311e216aa789713f70ebeec3ed40":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _View = _interopRequireDefault(require("./View.js"));

var _previewView = _interopRequireDefault(require("./previewView.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class BookmarksView extends _View.default {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_parentElement", document.querySelector(".bookmarks__list"));

    _defineProperty(this, "_errorMessage", " No bookmarks yet, bookmark a beer and it will appear here 🙂");
  }

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
    return this._data.map(bookmark => _previewView.default.render(bookmark, false)).join("");
  }

  _resetMarkup() {
    return `<div class="message">
    <p>
      No bookmarks yet, bookmark a beer and it will appear here 🙂
    </p>
  </div>`;
  }

}

var _default = new BookmarksView();

exports.default = _default;
},{"./View.js":"61b7a1b097e16436be3d54c2f1828c73","./previewView.js":"e4d6583325a8b6c9380670c4f233bf07"}],"d2063f3e7de2e4cdacfcb5eb6479db05":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _View = _interopRequireDefault(require("./View.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PaginationView extends _View.default {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_parentElement", document.querySelector(".pagination"));
  }

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
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage); // P1 and there are other pages

    if (currPage === 1 && numPages > 1) return `<button data-goto="${currPage + 1}" class="btn--inline pagination__btn--next">Page ${currPage + 1}<i class="fas fa-arrow-circle-right"></i></button>`; // Last P

    if (currPage === numPages && numPages > 1) {
      return `<button data-goto="${currPage - 1}" class="btn--inline pagination__btn--prev"><i class="fas fa-arrow-circle-left"></i>Page ${currPage - 1}</button>`;
    } // Other P


    if (currPage < numPages) {
      return `<button data-goto="${currPage - 1}" class="btn--inline pagination__btn--prev"><i class="fas fa-arrow-circle-left"></i>Page ${currPage - 1}</button>
      <button data-goto="${currPage + 1}" class="btn--inline pagination__btn--next">Page ${currPage + 1}<i class="fas fa-arrow-circle-right"></i></button>`;
    } // P1 and there are no other pages


    return ``;
  }

  _resetMarkup() {
    return ``;
  }

}

var _default = new PaginationView();

exports.default = _default;
},{"./View.js":"61b7a1b097e16436be3d54c2f1828c73"}]},{},["08be95db71e18c695e39470f2daac536","175e469a7ea7db1c8c0744d04372621f"], null)

//# sourceMappingURL=controller.1edb6ce7.js.map
