"use strict";

exports.__esModule = true;
var _menu = require("./menu");
Object.keys(_menu).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _menu[key]) return;
  exports[key] = _menu[key];
});