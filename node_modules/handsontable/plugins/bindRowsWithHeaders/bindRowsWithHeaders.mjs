import "core-js/modules/es.error.cause.js";
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
import { BasePlugin } from "../base/index.mjs";
import LooseBindsMap from "./maps/looseBindsMap.mjs";
import StrictBindsMap from "./maps/strictBindsMap.mjs";
export const PLUGIN_KEY = 'bindRowsWithHeaders';
export const PLUGIN_PRIORITY = 210;
const DEFAULT_BIND = 'loose';
const bindTypeToMapStrategy = new Map([['loose', LooseBindsMap], ['strict', StrictBindsMap]]);

/**
 * @plugin BindRowsWithHeaders
 * @class BindRowsWithHeaders
 *
 * @description
 * Plugin allows binding the table rows with their headers.
 *
 * If the plugin is enabled, the table row headers will "stick" to the rows, when they are hidden/moved. Basically, if
 * at the initialization row 0 has a header titled "A", it will have it no matter what you do with the table.
 *
 * @example
 * ::: only-for javascript
 * ```js
 * const container = document.getElementById('example');
 * const hot = new Handsontable(container, {
 *   data: getData(),
 *   // enable plugin
 *   bindRowsWithHeaders: true
 * });
 * ```
 * :::
 *
 * ::: only-for react
 * ```jsx
 * <HotTable
 *   data={getData()}
 *   // enable plugin
 *   bindRowsWithHeaders={true}
 * />
 * ```
 * :::
 */
var _BindRowsWithHeaders_brand = /*#__PURE__*/new WeakSet();
export class BindRowsWithHeaders extends BasePlugin {
  constructor() {
    super(...arguments);
    /**
     * On modify row header listener.
     *
     * @param {number} row Row index.
     * @returns {number}
     */
    _classPrivateMethodInitSpec(this, _BindRowsWithHeaders_brand);
    /**
     * Plugin indexes cache.
     *
     * @private
     * @type {null|IndexMap}
     */
    _defineProperty(this, "headerIndexes", null);
  }
  static get PLUGIN_KEY() {
    return PLUGIN_KEY;
  }
  static get PLUGIN_PRIORITY() {
    return PLUGIN_PRIORITY;
  }
  /**
   * Checks if the plugin is enabled in the handsontable settings. This method is executed in {@link Hooks#beforeInit}
   * hook and if it returns `true` then the {@link BindRowsWithHeaders#enablePlugin} method is called.
   *
   * @returns {boolean}
   */
  isEnabled() {
    return !!this.hot.getSettings()[PLUGIN_KEY];
  }

  /**
   * Enables the plugin functionality for this Handsontable instance.
   */
  enablePlugin() {
    if (this.enabled) {
      return;
    }
    let bindType = this.hot.getSettings()[PLUGIN_KEY];
    if (typeof bindType !== 'string') {
      bindType = DEFAULT_BIND;
    }
    const MapStrategy = bindTypeToMapStrategy.get(bindType);
    this.headerIndexes = this.hot.rowIndexMapper.registerMap('bindRowsWithHeaders', new MapStrategy());
    this.addHook('modifyRowHeader', row => _assertClassBrand(_BindRowsWithHeaders_brand, this, _onModifyRowHeader).call(this, row));
    super.enablePlugin();
  }

  /**
   * Disables the plugin functionality for this Handsontable instance.
   */
  disablePlugin() {
    this.hot.rowIndexMapper.unregisterMap('bindRowsWithHeaders');
    super.disablePlugin();
  }
  /**
   * Destroys the plugin instance.
   */
  destroy() {
    super.destroy();
  }
}
function _onModifyRowHeader(row) {
  return this.headerIndexes.getValueAtIndex(this.hot.toPhysicalRow(row));
}