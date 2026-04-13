"use strict";

exports.__esModule = true;
require("core-js/modules/es.error.cause.js");
require("core-js/modules/es.array.at.js");
require("core-js/modules/es.array.push.js");
var _constants = require("./constants");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
/**
 * @typedef {object} ViewportColumnsCalculatorOptions
 * @property {number} viewportWidth Width of the viewport.
 * @property {number} scrollOffset Current horizontal scroll position of the viewport.
 * @property {number} totalColumns Total number of columns.
 * @property {Function} columnWidthFn Function that returns the width of the column at a given index (in px).
 * @property {Function} overrideFn Function that changes calculated this.startRow, this.endRow (used by
 *   MergeCells plugin).
 * @property {string} calculationType String which describes types of calculation which will be performed.
 * @property {string} inlineStartOffset Inline-start offset of the parent container.
 * @property {string} stretchMode Stretch mode 'all' or 'last'.
 * @property {Function} stretchingColumnWidthFn Function that returns the new width of the stretched column.
 */
/**
 * Calculates indexes of columns to render OR columns that are visible.
 * To redo the calculation, you need to create a new calculator.
 *
 * @class ViewportColumnsCalculator
 */
var _options = /*#__PURE__*/new WeakMap();
class ViewportColumnsCalculator {
  /**
   * Default column width.
   *
   * @type {number}
   */
  static get DEFAULT_WIDTH() {
    return 50;
  }

  /**
   * Number of rendered/visible columns.
   *
   * @type {number}
   */

  /**
   * @param {ViewportColumnsCalculatorOptions} options Object with all options specified for column viewport calculation.
   */
  constructor(options) {
    _defineProperty(this, "count", 0);
    /**
     * Index of the first rendered/visible column (can be overwritten using overrideFn).
     *
     * @type {number|null}
     */
    _defineProperty(this, "startColumn", null);
    /**
     * Index of the last rendered/visible column (can be overwritten using overrideFn).
     *
     * @type {null}
     */
    _defineProperty(this, "endColumn", null);
    /**
     * Position of the first rendered/visible column (in px).
     *
     * @type {number|null}
     */
    _defineProperty(this, "startPosition", null);
    /**
     * Determines if the viewport is visible in the trimming container.
     *
     * @type {boolean}
     */
    _defineProperty(this, "isVisibleInTrimmingContainer", false);
    /**
     * The calculator options.
     *
     * @type {ViewportColumnsCalculatorOptions}
     */
    _classPrivateFieldInitSpec(this, _options, void 0);
    _classPrivateFieldSet(_options, this, options);
    this.calculate();
  }

  /**
   * Calculates viewport.
   */
  calculate() {
    const {
      calculationType,
      overrideFn,
      scrollOffset,
      totalColumns,
      viewportWidth
    } = _classPrivateFieldGet(_options, this);
    const zeroBasedScrollOffset = Math.max(_classPrivateFieldGet(_options, this).scrollOffset, 0);
    // +1 pixel for row header width compensation for horizontal scroll > 0
    const compensatedViewportWidth = zeroBasedScrollOffset > 0 ? viewportWidth + 1 : viewportWidth;
    let sum = 0;
    let needReverse = true;
    const startPositions = [];
    let columnWidth;
    let firstVisibleColumnWidth = 0;
    let lastVisibleColumnWidth = 0;
    for (let i = 0; i < totalColumns; i++) {
      columnWidth = this._getColumnWidth(i);
      if (sum <= zeroBasedScrollOffset && calculationType !== _constants.FULLY_VISIBLE_TYPE) {
        this.startColumn = i;
        firstVisibleColumnWidth = columnWidth;
      }
      if (sum >= zeroBasedScrollOffset && sum + (calculationType === _constants.FULLY_VISIBLE_TYPE ? columnWidth : 0) <= zeroBasedScrollOffset + compensatedViewportWidth) {
        if (this.startColumn === null || this.startColumn === undefined) {
          this.startColumn = i;
          firstVisibleColumnWidth = columnWidth;
        }
        this.endColumn = i;
      }
      startPositions.push(sum);
      sum += columnWidth;
      lastVisibleColumnWidth = columnWidth;
      if (calculationType !== _constants.FULLY_VISIBLE_TYPE) {
        this.endColumn = i;
      }
      if (sum >= zeroBasedScrollOffset + viewportWidth) {
        needReverse = false;
        break;
      }
    }
    const mostRightScrollOffset = scrollOffset + viewportWidth - compensatedViewportWidth;
    const inlineEndColumnOffset = calculationType === _constants.FULLY_VISIBLE_TYPE ? 0 : lastVisibleColumnWidth;
    const inlineStartColumnOffset = calculationType === _constants.FULLY_VISIBLE_TYPE ? firstVisibleColumnWidth : 0;
    if (
    // the table is to the left of the viewport
    mostRightScrollOffset < -1 * _classPrivateFieldGet(_options, this).inlineStartOffset || scrollOffset > startPositions.at(-1) + inlineEndColumnOffset ||
    // the table is to the right of the viewport
    -1 * _classPrivateFieldGet(_options, this).scrollOffset - _classPrivateFieldGet(_options, this).viewportWidth > -1 * inlineStartColumnOffset) {
      this.isVisibleInTrimmingContainer = false;
    } else {
      this.isVisibleInTrimmingContainer = true;
    }
    if (this.endColumn === totalColumns - 1 && needReverse) {
      this.startColumn = this.endColumn;
      while (this.startColumn > 0) {
        const viewportSum = startPositions[this.endColumn] + columnWidth - startPositions[this.startColumn - 1];
        if (viewportSum <= viewportWidth || calculationType !== _constants.FULLY_VISIBLE_TYPE) {
          this.startColumn -= 1;
        }
        if (viewportSum > viewportWidth) {
          break;
        }
      }
    }
    if (calculationType === _constants.RENDER_TYPE && this.startColumn !== null && overrideFn) {
      overrideFn(this);
    }
    this.startPosition = startPositions[this.startColumn];
    if (this.startPosition === undefined) {
      this.startPosition = null;
    }

    // If totalColumns exceeded its total columns size set endColumn to the latest item
    if (totalColumns < this.endColumn) {
      this.endColumn = totalColumns - 1;
    }
    if (this.startColumn !== null) {
      this.count = this.endColumn - this.startColumn + 1;
    }
  }

  /**
   * @param {number} column The visual column index.
   * @returns {number}
   * @private
   */
  _getColumnWidth(column) {
    let width = _classPrivateFieldGet(_options, this).columnWidthFn(column);
    if (isNaN(width)) {
      width = ViewportColumnsCalculator.DEFAULT_WIDTH;
    }
    return width;
  }
}
exports.ViewportColumnsCalculator = ViewportColumnsCalculator;