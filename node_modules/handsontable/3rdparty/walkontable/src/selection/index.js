"use strict";

exports.__esModule = true;
var _exportNames = {
  SelectionManager: true,
  Selection: true
};
var _selection = _interopRequireDefault(require("./selection"));
exports.Selection = _selection.default;
var _constants = require("./constants");
Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _constants[key]) return;
  exports[key] = _constants[key];
});
var _constants2 = require("./border/constants");
Object.keys(_constants2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _constants2[key]) return;
  exports[key] = _constants2[key];
});
var _manager = require("./manager");
exports.SelectionManager = _manager.SelectionManager;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }