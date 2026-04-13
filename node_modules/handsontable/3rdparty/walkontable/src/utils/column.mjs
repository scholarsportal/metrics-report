import "core-js/modules/es.error.cause.js";
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { getScrollbarWidth } from "./../../../../helpers/dom/element.mjs";
import { ColumnStretching } from "./columnStretching.mjs";
/**
 * Column utils class contains all necessary information about sizes of the columns.
 *
 * @class {ColumnUtils}
 */
export default class ColumnUtils {
  /**
   * @param {TableDao} dataAccessObject The table Data Access Object.
   * @param {Settings} wtSettings The walkontable settings.
   */
  constructor(dataAccessObject, wtSettings) {
    /**
     * @type {TableDao}
     */
    _defineProperty(this, "dataAccessObject", void 0);
    /**
     * @type {Settings}
     */
    _defineProperty(this, "wtSettings", void 0);
    /**
     * @type {Map<number, number>}
     */
    _defineProperty(this, "headerWidths", new Map());
    /**
     * @type {ColumnStretching}
     */
    _defineProperty(this, "stretching", void 0);
    this.dataAccessObject = dataAccessObject;
    this.wtSettings = wtSettings;
    this.stretching = new ColumnStretching({
      totalColumns: () => this.wtSettings.getSetting('totalColumns'),
      stretchMode: () => this.wtSettings.getSetting('stretchH'),
      stretchingColumnWidthFn: (stretchedWidth, column) => this.wtSettings.getSetting('onBeforeStretchingColumnWidth', stretchedWidth, column),
      columnWidthFn: sourceCol => this.dataAccessObject.wtTable.getColumnWidth(sourceCol)
    });
  }

  /**
   * Returns column width based on passed source index.
   *
   * @param {number} sourceIndex Column source index.
   * @returns {number}
   */
  getWidth(sourceIndex) {
    return this.wtSettings.getSetting('columnWidth', sourceIndex) || this.wtSettings.getSetting('defaultColumnWidth');
  }

  /**
   * Returns stretched column width based on passed source index.
   *
   * @param {number} sourceIndex Column source index.
   * @returns {number}
   */
  getStretchedColumnWidth(sourceIndex) {
    let width = this.getWidth(sourceIndex);
    const stretchedWidth = this.stretching.getStretchedColumnWidth(sourceIndex, width);
    if (stretchedWidth) {
      width = stretchedWidth;
    }
    return width;
  }

  /**
   * Returns column header height based on passed header level.
   *
   * @param {number} level Column header level.
   * @returns {number}
   */
  getHeaderHeight(level) {
    let height = this.wtSettings.getSetting('defaultRowHeight');
    const oversizedHeight = this.dataAccessObject.wtViewport.oversizedColumnHeaders[level];
    if (oversizedHeight !== undefined) {
      height = height ? Math.max(height, oversizedHeight) : oversizedHeight;
    }
    return height;
  }

  /**
   * Returns column header width based on passed source index.
   *
   * @param {number} sourceIndex Column source index.
   * @returns {number}
   */
  getHeaderWidth(sourceIndex) {
    return this.headerWidths.get(this.dataAccessObject.wtTable.columnFilter.sourceToRendered(sourceIndex));
  }

  /**
   * Refreshes the stretching column width by recalculating the widths of the columns.
   */
  refreshStretching() {
    const {
      wtTable,
      wtViewport,
      cloneSource
    } = this.dataAccessObject;
    const mainHolder = cloneSource ? cloneSource.wtTable.holder : wtTable.holder;
    const scrollbarCompensation = mainHolder.offsetHeight < mainHolder.scrollHeight ? getScrollbarWidth() : 0;
    this.stretching.refreshStretching(wtViewport.getViewportWidth() - scrollbarCompensation);
  }

  /**
   * Calculates column header widths that can be retrieved from the cache.
   */
  calculateWidths() {
    const {
      wtSettings
    } = this;
    let rowHeaderWidthSetting = wtSettings.getSetting('rowHeaderWidth');
    this.refreshStretching();
    rowHeaderWidthSetting = wtSettings.getSetting('onModifyRowHeaderWidth', rowHeaderWidthSetting);
    if (rowHeaderWidthSetting !== null && rowHeaderWidthSetting !== undefined) {
      const rowHeadersCount = wtSettings.getSetting('rowHeaders').length;
      const defaultColumnWidth = wtSettings.getSetting('defaultColumnWidth');
      for (let visibleColumnIndex = 0; visibleColumnIndex < rowHeadersCount; visibleColumnIndex++) {
        let width = Array.isArray(rowHeaderWidthSetting) ? rowHeaderWidthSetting[visibleColumnIndex] : rowHeaderWidthSetting;
        width = width === null || width === undefined ? defaultColumnWidth : width;
        this.headerWidths.set(visibleColumnIndex, width);
      }
    }
  }
}