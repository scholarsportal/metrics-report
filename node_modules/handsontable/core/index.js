"use strict";

exports.__esModule = true;
var _focusCatcher = require("./focusCatcher");
Object.keys(_focusCatcher).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _focusCatcher[key]) return;
  exports[key] = _focusCatcher[key];
});
var _viewportScroll = require("./viewportScroll");
Object.keys(_viewportScroll).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _viewportScroll[key]) return;
  exports[key] = _viewportScroll[key];
});