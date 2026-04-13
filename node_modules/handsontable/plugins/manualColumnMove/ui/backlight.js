"use strict";

exports.__esModule = true;
var _base = _interopRequireDefault(require("./_base"));
var _element = require("../../../helpers/dom/element");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CSS_CLASSNAME = 'ht__manualColumnMove--backlight';

/**
 * @class BacklightUI
 * @util
 */
class BacklightUI extends _base.default {
  /**
   * Custom className on build process.
   */
  build() {
    super.build();
    (0, _element.addClass)(this._element, CSS_CLASSNAME);
  }
}
var _default = exports.default = BacklightUI;