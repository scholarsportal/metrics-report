import "core-js/modules/es.error.cause.js";
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @typedef {object} RenderAllColumnsCalculatorOptions
 * @property {number} totalColumns Total number of columns.
 */
/**
 * Holds all calculations needed to perform the rendering of all columns.
 *
 * @class RenderAllColumnsCalculator
 */
export class RenderAllColumnsCalculator {
  /**
   * @param {RenderAllColumnsCalculatorOptions} options Object with all options specified for column viewport calculation.
   */
  constructor(options) {
    /**
     * Number of rendered/visible columns.
     *
     * @type {number}
     */
    _defineProperty(this, "count", 0);
    /**
     * Index of the first rendered/visible column.
     *
     * @type {number}
     */
    _defineProperty(this, "startColumn", 0);
    /**
     * Index of the last rendered/visible column.
     *
     * @type {number}
     */
    _defineProperty(this, "endColumn", 0);
    /**
     * Position of the first rendered/visible column (in px).
     *
     * @type {number}
     */
    _defineProperty(this, "startPosition", 0);
    this.count = options.totalColumns;
    this.endColumn = this.count - 1;
  }
}