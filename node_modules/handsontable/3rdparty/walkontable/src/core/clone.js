"use strict";

exports.__esModule = true;
require("core-js/modules/es.error.cause.js");
var _event = _interopRequireDefault(require("../event"));
var _base = _interopRequireDefault(require("./_base"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @class Walkontable
 */
class Clone extends _base.default {
  /**
   * @param {HTMLTableElement} table Main table.
   * @param {SettingsPure|Settings} settings The Walkontable settings.
   * @param {WalkontableCloneOptions} clone Clone data.
   */
  constructor(table, settings, clone) {
    super(table, settings);
    /**
     * @type {Walkontable}
     */
    _defineProperty(this, "cloneSource", void 0);
    /**
     * @type {Overlay}
     */
    _defineProperty(this, "cloneOverlay", void 0);
    const facadeGetter = this.wtSettings.getSetting('facade', this);
    this.cloneSource = clone.source;
    this.cloneOverlay = clone.overlay;
    this.wtTable = this.cloneOverlay.createTable(this.getTableDao(), facadeGetter, this.domBindings, this.wtSettings);
    this.wtViewport = clone.viewport;
    this.selectionManager = clone.selectionManager;
    this.wtEvent = new _event.default(facadeGetter, this.domBindings, this.wtSettings, this.eventManager, this.wtTable, this.selectionManager, clone.event);
    this.findOriginalHeaders();
  }
}
exports.default = Clone;