"use strict";

exports.__esModule = true;
exports.createHighlight = createHighlight;
var _src = require("../../../3rdparty/walkontable/src");
var _visualSelection = _interopRequireDefault(require("../visualSelection"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Creates the new instance of Selection, responsible for highlighting cells which are covered by fill handle
 * functionality. This type of selection can present on the table only one at the time.
 *
 * @param {object} highlightParams A configuration object to create a highlight.
 * @returns {Selection}
 */
function createHighlight(_ref) {
  let {
    ...restOptions
  } = _ref;
  return new _visualSelection.default({
    className: 'fill',
    border: {
      width: 1,
      color: '#ff0000'
    },
    ...restOptions,
    selectionType: _src.HIGHLIGHT_FILL_TYPE
  });
}