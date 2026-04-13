"use strict";

exports.__esModule = true;
require("core-js/modules/es.error.cause.js");
var _element = require("../../../helpers/dom/element");
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
/**
 * @class Scroll
 */
var _Scroll_brand = /*#__PURE__*/new WeakSet();
class Scroll {
  /**
   * @param {ScrollDao} dataAccessObject Tha data access object.
   */
  constructor(dataAccessObject) {
    /**
     * Get last visible column based on virtual dom and how table is visible in browser window viewport.
     *
     * @param {number} lastColumnIndex The last visible column index.
     * @returns {number}
     */
    _classPrivateMethodInitSpec(this, _Scroll_brand);
    /**
     * The data access object.
     *
     * @protected
     * @type {ScrollDao}
     */
    _defineProperty(this, "dataAccessObject", void 0);
    this.dataAccessObject = dataAccessObject;
  }

  /**
   * Scrolls viewport to a cell.
   *
   * @param {CellCoords} coords The cell coordinates.
   * @param {boolean} [snapToTop] If `true`, viewport is scrolled to show the cell on the top of the table.
   * @param {boolean} [snapToRight] If `true`, viewport is scrolled to show the cell on the right of the table.
   * @param {boolean} [snapToBottom] If `true`, viewport is scrolled to show the cell on the bottom of the table.
   * @param {boolean} [snapToLeft] If `true`, viewport is scrolled to show the cell on the left of the table.
   * @returns {boolean}
   */
  scrollViewport(coords, snapToTop, snapToRight, snapToBottom, snapToLeft) {
    const scrolledHorizontally = this.scrollViewportHorizontally(coords.col, snapToRight, snapToLeft);
    const scrolledVertically = this.scrollViewportVertically(coords.row, snapToTop, snapToBottom);
    return scrolledHorizontally || scrolledVertically;
  }

  /**
   * Scrolls viewport to a column.
   *
   * @param {number} column Visual column index.
   * @param {boolean} [snapToRight] If `true`, viewport is scrolled to show the cell on the right of the table.
   * @param {boolean} [snapToLeft] If `true`, viewport is scrolled to show the cell on the left of the table.
   * @returns {boolean}
   */
  scrollViewportHorizontally(column, snapToRight, snapToLeft) {
    const {
      drawn,
      totalColumns
    } = this.dataAccessObject;

    // do not scroll the viewport when the column points to a range outside of the dataset
    if (!drawn || !Number.isInteger(column) || column < 0 || column > totalColumns) {
      return false;
    }
    const autoSnapping = snapToRight === undefined && snapToLeft === undefined;
    const {
      fixedColumnsStart,
      inlineStartOverlay
    } = this.dataAccessObject;

    // for auto-snapping (both snap* arguments are undefined) do not scroll the viewport
    // when the columns points to the overlays
    if (autoSnapping && column < fixedColumnsStart) {
      return false;
    }
    column = this.dataAccessObject.wtSettings.getSetting('onBeforeViewportScrollHorizontally', column);
    if (!Number.isInteger(column) || column < 0 || column > totalColumns) {
      return false;
    }
    const firstColumn = this.getFirstVisibleColumn();
    const lastColumn = this.getLastVisibleColumn();
    let result = false;
    if (autoSnapping && (column < firstColumn || column > lastColumn) || !autoSnapping) {
      // if there is at least one fully visible column determine the snapping direction based on
      // that columns or by snapToRight/snapToLeft flags, if provided.
      result = inlineStartOverlay.scrollTo(column, autoSnapping ? column >= this.getLastPartiallyVisibleColumn() : snapToRight);
    }
    return result;
  }

  /**
   * Scrolls viewport to a row.
   *
   * @param {number} row Visual row index.
   * @param {boolean} [snapToTop] If `true`, viewport is scrolled to show the cell on the top of the table.
   * @param {boolean} [snapToBottom] If `true`, viewport is scrolled to show the cell on the bottom of the table.
   * @returns {boolean}
   */
  scrollViewportVertically(row, snapToTop, snapToBottom) {
    const {
      drawn,
      totalRows
    } = this.dataAccessObject;

    // do not scroll the viewport when the row points to a range outside of the dataset
    if (!drawn || !Number.isInteger(row) || row < 0 || row > totalRows) {
      return false;
    }
    const autoSnapping = snapToTop === undefined && snapToBottom === undefined;
    const {
      fixedRowsBottom,
      fixedRowsTop,
      topOverlay
    } = this.dataAccessObject;

    // for auto-snapping (both snap* arguments are undefined) do not scroll the viewport
    // when the rows points to the overlays
    if (autoSnapping && (row < fixedRowsTop || row > totalRows - fixedRowsBottom - 1)) {
      return false;
    }
    row = this.dataAccessObject.wtSettings.getSetting('onBeforeViewportScrollVertically', row);
    if (!Number.isInteger(row) || row < 0 || row > totalRows) {
      return false;
    }
    const firstRow = this.getFirstVisibleRow();
    const lastRow = this.getLastVisibleRow();
    let result = false;
    if (autoSnapping && (row < firstRow || row > lastRow) || !autoSnapping) {
      // if there is at least one fully visible row determine the snapping direction based on
      // that rows or by snapToTop/snapToBottom flags, if provided.
      result = topOverlay.scrollTo(row, autoSnapping ? row >= this.getLastPartiallyVisibleRow() : snapToBottom);
    }
    return result;
  }

  /**
   * Get first visible row based on virtual dom and how table is visible in browser window viewport.
   *
   * @returns {number}
   */
  getFirstVisibleRow() {
    return this.dataAccessObject.wtTable.getFirstVisibleRow();
  }

  /**
   * Get last visible row based on virtual dom and how table is visible in browser window viewport.
   *
   * @returns {number}
   */
  getLastVisibleRow() {
    return _assertClassBrand(_Scroll_brand, this, _getLastRowIndex).call(this, this.dataAccessObject.wtTable.getLastVisibleRow());
  }

  /**
   * Get first partially visible row based on virtual dom and how table is visible in browser window viewport.
   *
   * @returns {number}
   */
  getFirstPartiallyVisibleRow() {
    return this.dataAccessObject.wtTable.getFirstPartiallyVisibleRow();
  }

  /**
   * Get last visible row based on virtual dom and how table is visible in browser window viewport.
   *
   * @returns {number}
   */
  getLastPartiallyVisibleRow() {
    return _assertClassBrand(_Scroll_brand, this, _getLastRowIndex).call(this, this.dataAccessObject.wtTable.getLastPartiallyVisibleRow());
  }

  /**
   * Get first visible column based on virtual dom and how table is visible in browser window viewport.
   *
   * @returns {number}
   */
  getFirstVisibleColumn() {
    return this.dataAccessObject.wtTable.getFirstVisibleColumn();
  }

  /**
   * Get last visible column based on virtual dom and how table is visible in browser window viewport.
   *
   * @returns {number}
   */
  getLastVisibleColumn() {
    return _assertClassBrand(_Scroll_brand, this, _getLastColumnIndex).call(this, this.dataAccessObject.wtTable.getLastVisibleColumn());
  }

  /**
   * Get first partially visible column based on virtual dom and how table is visible in browser window viewport.
   *
   * @returns {number}
   */
  getFirstPartiallyVisibleColumn() {
    return this.dataAccessObject.wtTable.getFirstPartiallyVisibleColumn();
  }

  /**
   * Get last partially visible column based on virtual dom and how table is visible in browser window viewport.
   *
   * @returns {number}
   */
  getLastPartiallyVisibleColumn() {
    return _assertClassBrand(_Scroll_brand, this, _getLastColumnIndex).call(this, this.dataAccessObject.wtTable.getLastPartiallyVisibleColumn());
  }
}
function _getLastColumnIndex(lastColumnIndex) {
  const {
    wtSettings,
    inlineStartOverlay,
    wtTable,
    wtViewport,
    totalColumns,
    rootWindow
  } = this.dataAccessObject;
  if (inlineStartOverlay.mainTableScrollableElement === rootWindow) {
    const isRtl = wtSettings.getSetting('rtlMode');
    let inlineStartRootElementOffset = null;
    if (isRtl) {
      const tableRect = wtTable.TABLE.getBoundingClientRect();
      const rootDocument = this.dataAccessObject.rootWindow.document;
      const docOffsetWidth = rootDocument.documentElement.offsetWidth;
      inlineStartRootElementOffset = Math.abs(tableRect.right - docOffsetWidth);
    } else {
      const rootElementOffset = (0, _element.offset)(wtTable.wtRootElement);
      inlineStartRootElementOffset = rootElementOffset.left;
    }
    const windowScrollLeft = Math.abs((0, _element.getScrollLeft)(rootWindow, rootWindow));

    // Only calculate lastColumnIndex when table didn't filled (from right) whole viewport space
    if (inlineStartRootElementOffset > windowScrollLeft) {
      const windowWidth = (0, _element.innerWidth)(rootWindow);
      let columnsWidth = wtViewport.getRowHeaderWidth();
      for (let column = 1; column <= totalColumns; column++) {
        columnsWidth += inlineStartOverlay.sumCellSizes(column - 1, column);
        if (inlineStartRootElementOffset + columnsWidth - windowScrollLeft >= windowWidth) {
          // Return physical column - 1 (-2 because rangeEach gives column index + 1 - sumCellSizes requirements)
          lastColumnIndex = column - 2;
          break;
        }
      }
    }
  }
  return lastColumnIndex;
}
/**
 * Get last visible row based on virtual dom and how table is visible in browser window viewport.
 *
 * @param {number} lastRowIndex The last visible row index.
 * @returns {number}
 */
function _getLastRowIndex(lastRowIndex) {
  const {
    topOverlay,
    wtTable,
    wtViewport,
    totalRows,
    rootWindow
  } = this.dataAccessObject;
  if (topOverlay.mainTableScrollableElement === rootWindow) {
    const rootElementOffset = (0, _element.offset)(wtTable.wtRootElement);
    const windowScrollTop = (0, _element.getScrollTop)(rootWindow, rootWindow);

    // Only calculate lastRowIndex when table didn't filled (from bottom) whole viewport space
    if (rootElementOffset.top > windowScrollTop) {
      const windowHeight = (0, _element.innerHeight)(rootWindow);
      let rowsHeight = wtViewport.getColumnHeaderHeight();
      for (let row = 1; row <= totalRows; row++) {
        rowsHeight += topOverlay.sumCellSizes(row - 1, row);
        if (rootElementOffset.top + rowsHeight - windowScrollTop >= windowHeight) {
          // Return physical row - 1 (-2 because rangeEach gives row index + 1 - sumCellSizes requirements)
          lastRowIndex = row - 2;
          break;
        }
      }
    }
  }
  return lastRowIndex;
}
var _default = exports.default = Scroll;