"use strict";

exports.__esModule = true;
var _exportNames = {
  Selection: true,
  handleMouseEvent: true,
  detectSelectionType: true,
  normalizeSelectionFactory: true
};
var _selection = _interopRequireDefault(require("./selection"));
exports.Selection = _selection.default;
var _mouseEventHandler = require("./mouseEventHandler");
exports.handleMouseEvent = _mouseEventHandler.handleMouseEvent;
var _utils = require("./utils");
exports.detectSelectionType = _utils.detectSelectionType;
exports.normalizeSelectionFactory = _utils.normalizeSelectionFactory;
var _highlight = require("./highlight/highlight");
Object.keys(_highlight).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _highlight[key]) return;
  exports[key] = _highlight[key];
});
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }