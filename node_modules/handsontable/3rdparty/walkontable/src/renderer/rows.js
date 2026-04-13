"use strict";

exports.__esModule = true;
require("core-js/modules/es.error.cause.js");
var _base = _interopRequireDefault(require("./_base"));
var _console = require("./../../../../helpers/console");
var _templateLiteralTag = require("./../../../../helpers/templateLiteralTag");
var _orderView = require("./../utils/orderView");
var _element = require("../../../../helpers/dom/element");
var _a11y = require("../../../../helpers/a11y");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
let performanceWarningAppeared = false;

/**
 * Rows renderer responsible for managing (inserting, tracking, rendering) TR elements belongs to TBODY.
 *
 *   <tbody> (root node)
 *     ├ <tr>   \
 *     ├ <tr>    \
 *     ├ <tr>     - RowsRenderer
 *     ├ <tr>    /
 *     └ <tr>   /.
 *
 * @class {RowsRenderer}
 */
class RowsRenderer extends _base.default {
  constructor(rootNode) {
    super('TR', rootNode);
    /**
     * Cache for OrderView classes connected to specified node.
     *
     * @type {WeakMap}
     */
    _defineProperty(this, "orderView", void 0);
    this.orderView = new _orderView.OrderView(rootNode, sourceRowIndex => this.nodesPool.obtain(sourceRowIndex), this.nodeType);
  }

  /**
   * Returns currently rendered node.
   *
   * @param {string} visualIndex Visual index of the rendered node (it always goeas from 0 to N).
   * @returns {HTMLTableRowElement}
   */
  getRenderedNode(visualIndex) {
    return this.orderView.getNode(visualIndex);
  }

  /**
   * Renders the cells.
   */
  render() {
    const {
      rowsToRender
    } = this.table;
    if (!performanceWarningAppeared && rowsToRender > 1000) {
      performanceWarningAppeared = true;
      (0, _console.warn)((0, _templateLiteralTag.toSingleLine)`Performance tip: Handsontable rendered more than 1000 visible rows.\x20
        Consider limiting the number of rendered rows by specifying the table height and/or\x20
        turning off the "renderAllRows" option.`);
    }
    if (this.table.isAriaEnabled()) {
      (0, _element.setAttribute)(this.rootNode, [(0, _a11y.A11Y_ROWGROUP)()]);
    }
    this.orderView.setSize(rowsToRender).setOffset(this.table.renderedRowToSource(0)).start();
    for (let visibleRowIndex = 0; visibleRowIndex < rowsToRender; visibleRowIndex++) {
      this.orderView.render();
      const TR = this.orderView.getCurrentNode();
      const sourceRowIndex = this.table.renderedRowToSource(visibleRowIndex);
      if (this.table.isAriaEnabled()) {
        var _this$table$rowUtils$, _this$table$rowUtils;
        (0, _element.setAttribute)(TR, [(0, _a11y.A11Y_ROW)(),
        // `aria-rowindex` is incremented by both tbody and thead rows.
        (0, _a11y.A11Y_ROWINDEX)(sourceRowIndex + ((_this$table$rowUtils$ = (_this$table$rowUtils = this.table.rowUtils) === null || _this$table$rowUtils === void 0 || (_this$table$rowUtils = _this$table$rowUtils.dataAccessObject) === null || _this$table$rowUtils === void 0 ? void 0 : _this$table$rowUtils.columnHeaders.length) !== null && _this$table$rowUtils$ !== void 0 ? _this$table$rowUtils$ : 0) + 1)]);
      }
    }
    this.orderView.end();
  }
}
exports.default = RowsRenderer;