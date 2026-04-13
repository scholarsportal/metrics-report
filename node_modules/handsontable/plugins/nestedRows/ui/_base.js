"use strict";

exports.__esModule = true;
require("core-js/modules/es.error.cause.js");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Base class for the Nested Rows' UI sub-classes.
 *
 * @private
 * @class
 */
class BaseUI {
  constructor(pluginInstance, hotInstance) {
    /**
     * Instance of Handsontable.
     *
     * @type {Core}
     */
    _defineProperty(this, "hot", void 0);
    /**
     * Reference to the main plugin instance.
     */
    _defineProperty(this, "plugin", void 0);
    this.hot = hotInstance;
    this.plugin = pluginInstance;
  }
}
var _default = exports.default = BaseUI;