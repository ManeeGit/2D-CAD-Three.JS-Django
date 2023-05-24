// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
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
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"Rwy1c":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "82747369ee78fc69";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"9QMpC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vectorJs = require("vector-js");
var _vectorJsDefault = parcelHelpers.interopDefault(_vectorJs);
// Construct an interactive within the HTML element with the id "my-interactive"
let myInteractive = new Interactive("my-interactive");
(0, _vectorJs.myInteractive).border = true;
// Construct a control point at the the location (100, 100)
let control = (0, _vectorJs.myInteractive).control(100, 100);
let line = (0, _vectorJs.myInteractive).line(50, 25, 150, 125);
// Print the two objects to the console
console.log(control, line, (0, _vectorJs.myInteractive));

},{"vector-js":"hSoAZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hSoAZ":[function(require,module,exports) {
(function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(this, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ /******/ // Flag the module as loaded
            /******/ module1.l = true;
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ /******/ // identity function for calling harmony imports with the correct context
        /******/ __webpack_require__.i = function(value) {
            return value;
        };
        /******/ /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
                /******/ configurable: false,
                /******/ enumerable: true,
                /******/ get: getter
            });
        /******/ };
        /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module1) {
            /******/ var getter = module1 && module1.__esModule ? /******/ function getDefault() {
                return module1["default"];
            } : /******/ function getModuleExports() {
                return module1;
            };
            /******/ __webpack_require__.d(getter, "a", getter);
            /******/ return getter;
        /******/ };
        /******/ /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/ /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = 0);
    /******/ }([
        /* 0 */ /***/ function(module1, __webpack_exports__, __webpack_require__) {
            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", {
                value: true
            });
            /**
 * Generic Vector class
 *
 *
 * @example
 * import vector, {Vector} from 'Vector';
 *
 * Instantiate new objects in the following ways
 *  1. use vector convenience function like so: vector(x, y);
 *  2. use Vector object directly like: new Vector(x, y);
 *
 * Methods on a newly created vector, such as .add or .subtract
 * modify the x and y properties on that vector, changing them forever
 * i.e.
 *      let vec1 = vector(0, 0);
 *      let vec2 = vector(10, 20);
 *      vec1.add(vec2);
 *
 * Results in vec1.x = 10 and vec1.y = 20.  vec2 is unmodified
 *
 * To perform an operation on two vectors and return a new vector,
 * without modifying the input vectors, use the methods on {Vector}
 * i.e.
 *      let vec1 = vector(0, 0);
 *      let vec2 = vector(10, 20);
 *      let vec3 = Vector.add(vec1, vec2);
 *
 * Results in vec1 and vec2 remining unmodified,
 * and vec3.x = 10 and vec3.y = 20
 *
 */ // import {radToDeg} from './math';
            /**
 * Base Vector constructor
 * @constructor
 * @param {number} x - x coordinate
 * @param {number} y - y coordinate
 */ const Vector = function(x, y) {
                this.x = x || 0;
                this.y = y || 0;
            };
            /* harmony export (immutable) */ __webpack_exports__["Vector"] = Vector;
            /**
 * Prototype object for all Vectors
 */ Vector.prototype = {
                /**
     * Return a copy of a vector
     * @method
     * @return {Vector} a new vector object
     */ clone: function() {
                    return new Vector(this.x, this.y);
                },
                /**
     * Generic Setter
     * @method
     * @param {string} prop - property to set
     * @param {*} val - value to set
     * @return {This} for chaining
     */ set: function(prop, val) {
                    if (prop === "x") this.x = val;
                    else if (prop === "y") this.y = val;
                    return this;
                },
                /**
     * Add another vector to this vector, modifying internal
     * properties
     * @method
     * @param {Vector} vec - vector to add
     * @return {This} for chaining
     */ add: function(...args) {
                    let x, y;
                    if (args.length === 1) {
                        let vec = args[0];
                        if (typeof vec === "object") {
                            x = vec.x;
                            y = vec.y;
                        }
                    } else if (args.length === 2) {
                        if (typeof args[0] === "number" && typeof args[1] === "number") {
                            x = args[0];
                            y = args[1];
                        }
                    }
                    this.x += x;
                    this.y += y;
                    return this;
                },
                /**
     * Subtract another vector from this vector
     * @method
     * @param {Vector} vec - vector to subtract
     * @return {This} for chaining
     */ subtract: function(vec) {
                    this.x -= vec.x;
                    this.y -= vec.y;
                    return this;
                },
                /**
     * Multiply another vector by this vector or scalar
     * modifies internal properties
     * @param {Vector|number} vec - either Vector object or single scalar
     * @return {This} for chaining
     */ multiply: function(vec) {
                    if (typeof vec === "object") {
                        this.x *= vec.x;
                        this.y *= vec.y;
                    } else if (typeof vec === "number") {
                        this.x *= vec;
                        this.y *= vec;
                    }
                    return this;
                },
                /**
     * Gives the magnitude (length, essentially) of the vector
     * @method
     * @return {number} magnitude of the vector
     */ magnitude: function() {
                    return Math.sqrt(this.x * this.x + this.y * this.y);
                },
                /**
     * Magnitude squared - useful when trying to save on computation
     * @method
     * @return {number} mag squared
     */ magnitudeSq: function() {
                    return this.x * this.x + this.y * this.y;
                },
                /**
     * Negate both x and y values (essentially rotate vector 180 degrees)
     * @method
     * @return {Vector} for method chaining
     */ negate: function() {
                    this.x = -this.x;
                    this.y = -this.y;
                    return this;
                },
                /**
     * Translate to specified x and y points
     * @param {number} x - amount to move in the x
     * @param {number} y - amount to move in the y
     * @return {This} for chaining
     */ // translate:
                // function(x, y) {
                //     this.x += x;
                //     this.y += y;
                //     return this;
                // },
                /**
     * Rotate vector around specified point of rotation
     * Note: Will rotate around origin
     * @param {number} angle - amount of rotation in radians
     * @return {This} for chaining
     */ rotate: function(angle) {
                    let sin = Math.sin(angle);
                    let cos = Math.cos(angle);
                    let x = this.x * cos - this.y * sin;
                    let y = this.x * sin + this.y * cos;
                    this.x = x;
                    this.y = y;
                    return this;
                },
                /**
     * Dot product between two vectors
     * Does NOT modify internal state
     * @param {Vector} vec - the vector to dot with
     * @return {number} dot product
     */ dot: function(vec) {
                    return this.x * vec.x + this.y * vec.y;
                },
                /**
     * Cross product between two vectors
     * Does NOT modify internal state
     * @method
     * @param {Vector} vec - the vec to cross with
     * @return {number} cross product
     */ cross: function(vec) {
                    return this.x * vec.y - this.y * vec.x;
                },
                /**
     * Return angle between two vectors in radians
     * @param {Vector} vec - vector to find angle to
     * @return {number} theta - radians between two vectors
     */ angleTo: function(vec) {
                    let a = this.magnitude();
                    let b = vec.magnitude();
                    let d = this.dot(vec);
                    let theta = Math.acos(d / (a * b));
                    return theta;
                },
                /**
     * Return angle from 0 of this vector
     * @method
     * @param {string} [mode] - if mode = 'DEGREES', return value will be in
     * degrees, otherwise radians
     * @return {number} angle in degrees or radians (depending on mode)
     *
     */ getAngle: function(mode) {
                    if (mode === "DEGREES") {
                        let angle = Math.atan(this.y / this.x);
                        return angle * 180 / Math.PI;
                    // return radToDeg(Math.atan(this.y / this.x));
                    }
                    let a = Math.atan2(this.y, this.x);
                    //return a;
                    return a < 0 ? Math.PI * 2 + a : a;
                },
                /**
     * Convert to a unit vector
     * i.e. change length of vector to 1
     * @method
     * @return {This} for chaining
     */ normalize: function() {
                    let mag = this.magnitude();
                    this.x /= mag;
                    this.y /= mag;
                    return this;
                },
                /**
     * Create normal vector based on current vector
     * Modifies internal state!
     * @param {string} side - specify 'left' or 'right' normal
     * @return {This} for chaining
     */ perp: function(side) {
                    if (side === "right") {
                        let tmp = this.x;
                        this.x = this.y;
                        this.y = -tmp;
                    } else {
                        let tmp = this.x;
                        this.x = -this.y;
                        this.y = tmp;
                    }
                    return this;
                },
                /**
     * Calculate euclidian distance between two vectors
     * @param {Vector} vec - vector to find distance to
     * @return {number} euclidean distance
     */ distanceTo: function(vec) {
                    return Math.sqrt((vec.x - this.x) * (vec.x - this.x) + (vec.y - this.y) * (vec.y - this.y));
                },
                /**
     * Scalar Projection of A onto B assuming B is NOT a unit vector
     * @param {Vector} vec - the vector to project onto
     * @return {number} component of A on B
     */ scalarProject: function(vec) {
                    return this.dot(vec) / vec.magnitude();
                },
                /**
     * Calculate Scalar projection of A onto B assuming that B is a unit vector
     * This is more efficient assuming we already have a unit vector
     * @param {Vector} vec - the unit vector to project onto
     * @return {number} component of A on B
     */ scalarProjectUnit: function(vec) {
                    return this.dot(vec);
                },
                /**
     * Vector Projection of A onto B assuming B is NOT a unit vector
     * @param {Vector} vec - vector to project onto
     * @return {This} for chaining
     */ vectorProject: function(vec) {
                    let scalarComp = this.dot(vec) / vec.magnitudeSq();
                    this.x = vec.x * scalarComp;
                    this.y = vec.y * scalarComp;
                    return this;
                },
                /**
     * Vector Projection of A onto B assuming B IS a unit vector
     * @param {Vector} vec - vector to project onto
     * @return {This} for chaining
     */ vectorProjectUnit: function(vec) {
                    let scalarComp = this.dot(vec);
                    this.x = vec.x * scalarComp;
                    this.y = vec.y * scalarComp;
                    return this;
                }
            };
            Vector.prototype.translate = Vector.prototype.add;
            /**
 * Convenience function so we can ignore the 'new' keyword
 * @param {number} x - initial x value
 * @param {number} y - initial y value
 * @return {Vector} a new vector object
 */ var vector = function(x, y) {
                return new Vector(x, y);
            };
            // ---------- Static Methods -----------//
            /**
 * @static
 * @param {Vector} v1 - first Vector obj
 * @param {Vector} v2 - second Vector obj
 * @return {Vector}
 *
 * Adds two vectors, and returns a new one
 */ Vector.add = function(v1, v2) {
                return new Vector(v1.x + v2.x, v1.y + v2.y);
            };
            Vector.subtract = function(v1, v2) {
                return new Vector(v1.x - v2.x, v1.y - v2.y);
            };
            Vector.multiply = function(v1, v2) {
                if (typeof v1 === "number" && typeof v2 === "number") return v1 * v2;
                if (typeof v1 === "object" && typeof v2 === "number") return new Vector(v1.x * v2, v1.y * v2);
                if (typeof v2 === "object" && typeof v1 === "number") return new Vector(v1 * v2.x, v1 * v2.y);
                return new Vector(v1.x * v2.x, v1.y * v2.y);
            };
            Vector.dot = function(v1, v2) {
                return v1.x * v2.x + v1.y * v2.y;
            };
            Vector.angleBetween = function(v1, v2) {
                let a = v1.magnitude();
                let b = v2.magnitude();
                let d = v1.dot(v2);
                let theta = Math.acos(d / (a * b));
                return theta;
            };
            Vector.perp = function(v1, side) {
                switch(side){
                    case "right":
                        return new Vector(v1.y, -v1.x);
                    default:
                        return new Vector(-v1.y, v1.x);
                }
            };
            Vector.negate = function(v) {
                return new Vector(-v.x, -v.y);
            };
            /* harmony default export */ __webpack_exports__["default"] = vector;
        /***/ }
    ]);
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["Rwy1c","9QMpC"], "9QMpC", "parcelRequireaf32")

//# sourceMappingURL=main.ee78fc69.js.map
