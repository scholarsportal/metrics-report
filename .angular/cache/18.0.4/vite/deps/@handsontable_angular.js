import {
  require_task,
  require_validate_arguments_length
} from "./chunk-ITE7GHBP.js";
import {
  A11Y_COLCOUNT,
  A11Y_HIDDEN,
  A11Y_MULTISELECTABLE,
  A11Y_PRESENTATION,
  A11Y_ROWCOUNT,
  A11Y_TREEGRID,
  BaseEditor,
  CHECKBOX_CHECKED,
  CHECKBOX_UNCHECKED,
  CONTEXTMENU_ITEMS_ADD_COMMENT,
  CONTEXTMENU_ITEMS_ALIGNMENT,
  CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM,
  CONTEXTMENU_ITEMS_ALIGNMENT_CENTER,
  CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY,
  CONTEXTMENU_ITEMS_ALIGNMENT_LEFT,
  CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE,
  CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT,
  CONTEXTMENU_ITEMS_ALIGNMENT_TOP,
  CONTEXTMENU_ITEMS_BORDERS,
  CONTEXTMENU_ITEMS_BORDERS_BOTTOM,
  CONTEXTMENU_ITEMS_BORDERS_LEFT,
  CONTEXTMENU_ITEMS_BORDERS_RIGHT,
  CONTEXTMENU_ITEMS_BORDERS_TOP,
  CONTEXTMENU_ITEMS_CLEAR_COLUMN,
  CONTEXTMENU_ITEMS_COPY,
  CONTEXTMENU_ITEMS_COPY_COLUMN_HEADERS_ONLY,
  CONTEXTMENU_ITEMS_COPY_WITH_COLUMN_GROUP_HEADERS,
  CONTEXTMENU_ITEMS_COPY_WITH_COLUMN_HEADERS,
  CONTEXTMENU_ITEMS_CUT,
  CONTEXTMENU_ITEMS_EDIT_COMMENT,
  CONTEXTMENU_ITEMS_FREEZE_COLUMN,
  CONTEXTMENU_ITEMS_HIDE_COLUMN,
  CONTEXTMENU_ITEMS_HIDE_ROW,
  CONTEXTMENU_ITEMS_INSERT_LEFT,
  CONTEXTMENU_ITEMS_INSERT_RIGHT,
  CONTEXTMENU_ITEMS_MERGE_CELLS,
  CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD,
  CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD,
  CONTEXTMENU_ITEMS_NO_ITEMS,
  CONTEXTMENU_ITEMS_READ_ONLY,
  CONTEXTMENU_ITEMS_READ_ONLY_COMMENT,
  CONTEXTMENU_ITEMS_REDO,
  CONTEXTMENU_ITEMS_REMOVE_BORDERS,
  CONTEXTMENU_ITEMS_REMOVE_COLUMN,
  CONTEXTMENU_ITEMS_REMOVE_COMMENT,
  CONTEXTMENU_ITEMS_REMOVE_ROW,
  CONTEXTMENU_ITEMS_ROW_ABOVE,
  CONTEXTMENU_ITEMS_ROW_BELOW,
  CONTEXTMENU_ITEMS_SHOW_COLUMN,
  CONTEXTMENU_ITEMS_SHOW_ROW,
  CONTEXTMENU_ITEMS_UNDO,
  CONTEXTMENU_ITEMS_UNFREEZE_COLUMN,
  CONTEXTMENU_ITEMS_UNMERGE_CELLS,
  FILTERS_BUTTONS_CANCEL,
  FILTERS_BUTTONS_CLEAR,
  FILTERS_BUTTONS_OK,
  FILTERS_BUTTONS_PLACEHOLDER_SEARCH,
  FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE,
  FILTERS_BUTTONS_PLACEHOLDER_VALUE,
  FILTERS_BUTTONS_SELECT_ALL,
  FILTERS_CONDITIONS_AFTER,
  FILTERS_CONDITIONS_BEFORE,
  FILTERS_CONDITIONS_BEGINS_WITH,
  FILTERS_CONDITIONS_BETWEEN,
  FILTERS_CONDITIONS_CONTAINS,
  FILTERS_CONDITIONS_EMPTY,
  FILTERS_CONDITIONS_ENDS_WITH,
  FILTERS_CONDITIONS_EQUAL,
  FILTERS_CONDITIONS_GREATER_THAN,
  FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL,
  FILTERS_CONDITIONS_LESS_THAN,
  FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL,
  FILTERS_CONDITIONS_NONE,
  FILTERS_CONDITIONS_NOT_BETWEEN,
  FILTERS_CONDITIONS_NOT_CONTAIN,
  FILTERS_CONDITIONS_NOT_EMPTY,
  FILTERS_CONDITIONS_NOT_EQUAL,
  FILTERS_CONDITIONS_TODAY,
  FILTERS_CONDITIONS_TOMORROW,
  FILTERS_CONDITIONS_YESTERDAY,
  FILTERS_DIVS_FILTER_BY_CONDITION,
  FILTERS_DIVS_FILTER_BY_VALUE,
  FILTERS_LABELS_CONJUNCTION,
  FILTERS_LABELS_DISJUNCTION,
  FILTERS_VALUES_BLANK_CELLS,
  GRID_GROUP,
  IndexMapper,
  TextCellType,
  ViewportColumnsCalculator,
  WalkontableFacade,
  _getEditorInstance,
  _getItem,
  _getItem2,
  _getItem3,
  _getItem4,
  _injectProductInfo,
  _register4 as _register,
  addClass,
  arrayEach,
  arrayFilter,
  arrayMap,
  arrayReduce,
  clearTextSelection,
  constants_exports,
  coords_default,
  countFirstRowKeys,
  createObjectPropListener,
  createUniqueMap,
  debounce,
  deepClone,
  deepExtend,
  deepObjectSize,
  duckSchema,
  empty,
  error,
  eventManager_default,
  extend,
  extendArray,
  fastInnerHTML,
  fastInnerText,
  getDifferenceOfArrays,
  getParentWindow,
  getPlugin,
  getPluginsNames,
  getProperty,
  getScrollbarWidth,
  handleMouseEvent,
  hasClass,
  hasOwnProperty,
  inherit,
  instanceToHTML,
  isChildOf,
  isCtrlMetaKey,
  isDefined,
  isEmpty,
  isFunction,
  isFunctionKey,
  isImmediatePropagationStopped,
  isInput,
  isIpadOS,
  isLeftClick,
  isMacOS,
  isMobileBrowser,
  isNumericLike,
  isObject,
  isObjectEqual,
  isOutsideInput,
  isRegExp,
  isRightClick,
  isUndefined,
  isVisible,
  localHooks_default,
  mixin,
  objectEach,
  observeVisibilityChangeOnce,
  pivot,
  pluginHooks_default,
  randomString,
  rangeEach,
  rangeEachReverse,
  range_default,
  registerAllShortcutContexts,
  removeClass,
  selection_default,
  setAttribute,
  setProperty,
  spreadsheetColumnLabel,
  staticRegister,
  stopImmediatePropagation,
  stringToArray,
  stringify2 as stringify,
  to2dArray,
  toSingleLine,
  toUpperCaseFirst,
  warn
} from "./chunk-EYFUX3VO.js";
import "./chunk-ULQL3V3N.js";
import {
  require_array_slice,
  require_engine_user_agent,
  require_export,
  require_function_apply,
  require_global,
  require_is_callable
} from "./chunk-NW5RDBVR.js";
import "./chunk-WXXMLALP.js";
import {
  Component,
  Injectable,
  Input,
  NgModule,
  NgZone,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-ZQVNVM3G.js";
import "./chunk-MJQNUHK2.js";
import "./chunk-MOY5LPCH.js";
import "./chunk-SAI3DHVA.js";
import {
  __commonJS,
  __spreadProps,
  __spreadValues
} from "./chunk-XEBHCIPT.js";

// node_modules/core-js/modules/web.clear-immediate.js
var require_web_clear_immediate = __commonJS({
  "node_modules/core-js/modules/web.clear-immediate.js"() {
    "use strict";
    var $ = require_export();
    var global = require_global();
    var clearImmediate2 = require_task().clear;
    $({ global: true, bind: true, enumerable: true, forced: global.clearImmediate !== clearImmediate2 }, {
      clearImmediate: clearImmediate2
    });
  }
});

// node_modules/core-js/internals/engine-is-bun.js
var require_engine_is_bun = __commonJS({
  "node_modules/core-js/internals/engine-is-bun.js"(exports, module) {
    "use strict";
    module.exports = typeof Bun == "function" && Bun && typeof Bun.version == "string";
  }
});

// node_modules/core-js/internals/schedulers-fix.js
var require_schedulers_fix = __commonJS({
  "node_modules/core-js/internals/schedulers-fix.js"(exports, module) {
    "use strict";
    var global = require_global();
    var apply = require_function_apply();
    var isCallable = require_is_callable();
    var ENGINE_IS_BUN = require_engine_is_bun();
    var USER_AGENT = require_engine_user_agent();
    var arraySlice = require_array_slice();
    var validateArgumentsLength = require_validate_arguments_length();
    var Function = global.Function;
    var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function() {
      var version = global.Bun.version.split(".");
      return version.length < 3 || version[0] === "0" && (version[1] < 3 || version[1] === "3" && version[2] === "0");
    }();
    module.exports = function(scheduler, hasTimeArg) {
      var firstParamIndex = hasTimeArg ? 2 : 1;
      return WRAP ? function(handler, timeout) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
        var fn = isCallable(handler) ? handler : Function(handler);
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
          apply(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
      } : scheduler;
    };
  }
});

// node_modules/core-js/modules/web.set-immediate.js
var require_web_set_immediate = __commonJS({
  "node_modules/core-js/modules/web.set-immediate.js"() {
    "use strict";
    var $ = require_export();
    var global = require_global();
    var setTask = require_task().set;
    var schedulersFix = require_schedulers_fix();
    var setImmediate2 = global.setImmediate ? schedulersFix(setTask, false) : setTask;
    $({ global: true, bind: true, enumerable: true, forced: global.setImmediate !== setImmediate2 }, {
      setImmediate: setImmediate2
    });
  }
});

// node_modules/core-js/modules/web.immediate.js
require_web_clear_immediate();
require_web_set_immediate();

// node_modules/handsontable/editorManager.mjs
function _classPrivateMethodInitSpec(obj, privateSet) {
  _checkPrivateRedeclaration(obj, privateSet);
  privateSet.add(obj);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _assertClassBrand(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
var _EditorManager_brand = /* @__PURE__ */ new WeakSet();
var EditorManager = class {
  /**
   * @param {Core} hotInstance The Handsontable instance.
   * @param {TableMeta} tableMeta The table meta instance.
   * @param {Selection} selection The selection instance.
   */
  constructor(hotInstance, tableMeta, _selection) {
    _classPrivateMethodInitSpec(this, _EditorManager_brand);
    _defineProperty(this, "hot", void 0);
    _defineProperty(this, "tableMeta", void 0);
    _defineProperty(this, "selection", void 0);
    _defineProperty(this, "eventManager", void 0);
    _defineProperty(this, "destroyed", false);
    _defineProperty(this, "activeEditor", void 0);
    _defineProperty(this, "cellProperties", void 0);
    this.hot = hotInstance;
    this.tableMeta = tableMeta;
    this.selection = _selection;
    this.eventManager = new eventManager_default(hotInstance);
    this.hot.addHook("afterDocumentKeyDown", (event) => _assertClassBrand(_EditorManager_brand, this, _onAfterDocumentKeyDown).call(this, event));
    this.eventManager.addEventListener(this.hot.rootDocument.documentElement, "compositionstart", (event) => {
      if (!this.destroyed && this.hot.isListening()) {
        this.openEditor("", event);
      }
    });
    this.hot.view._wt.update("onCellDblClick", (event, coords, elem) => _assertClassBrand(_EditorManager_brand, this, _onCellDblClick).call(this, event, coords, elem));
  }
  /**
   * Get active editor.
   *
   * @returns {BaseEditor}
   */
  getActiveEditor() {
    return this.activeEditor;
  }
  /**
   * Prepare text input to be displayed at given grid cell.
   */
  prepareEditor() {
    var _this$hot$getSelected;
    if (this.activeEditor && this.activeEditor.isWaiting()) {
      this.closeEditor(false, false, (dataSaved) => {
        if (dataSaved) {
          this.prepareEditor();
        }
      });
      return;
    }
    const highlight = (_this$hot$getSelected = this.hot.getSelectedRangeLast()) === null || _this$hot$getSelected === void 0 ? void 0 : _this$hot$getSelected.highlight;
    if (!highlight || highlight.isHeader()) {
      return;
    }
    const {
      row,
      col
    } = highlight;
    const modifiedCellCoords = this.hot.runHooks("modifyGetCellCoords", row, col);
    let visualRowToCheck = row;
    let visualColumnToCheck = col;
    if (Array.isArray(modifiedCellCoords)) {
      [visualRowToCheck, visualColumnToCheck] = modifiedCellCoords;
    }
    this.cellProperties = this.hot.getCellMeta(visualRowToCheck, visualColumnToCheck);
    if (!this.isCellEditable()) {
      this.clearActiveEditor();
      return;
    }
    const td = this.hot.getCell(row, col, true);
    if (td) {
      const editorClass = this.hot.getCellEditor(this.cellProperties);
      const prop = this.hot.colToProp(visualColumnToCheck);
      const originalValue = this.hot.getSourceDataAtCell(this.hot.toPhysicalRow(visualRowToCheck), visualColumnToCheck);
      this.activeEditor = _getEditorInstance(editorClass, this.hot);
      this.activeEditor.prepare(row, col, prop, td, originalValue, this.cellProperties);
    }
  }
  /**
   * Check is editor is opened/showed.
   *
   * @returns {boolean}
   */
  isEditorOpened() {
    return this.activeEditor && this.activeEditor.isOpened();
  }
  /**
   * Open editor with initial value.
   *
   * @param {null|string} newInitialValue New value from which editor will start if handled property it's not the `null`.
   * @param {Event} event The event object.
   * @param {boolean} [enableFullEditMode=false] When true, an editor works in full editing mode. Mode disallows closing an editor
   *                                             when arrow keys are pressed.
   */
  openEditor(newInitialValue, event) {
    let enableFullEditMode = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (!this.isCellEditable()) {
      this.clearActiveEditor();
      return;
    }
    const selection = this.hot.getSelectedRangeLast();
    let allowOpening = this.hot.runHooks("beforeBeginEditing", selection.highlight.row, selection.highlight.col, newInitialValue, event, enableFullEditMode);
    if (event instanceof MouseEvent && typeof allowOpening !== "boolean") {
      allowOpening = this.hot.selection.getLayerLevel() === 0 && selection.isSingle();
    }
    if (allowOpening === false) {
      this.clearActiveEditor();
      return;
    }
    if (!this.activeEditor) {
      this.hot.scrollToFocusedCell();
      this.prepareEditor();
    }
    if (this.activeEditor) {
      if (enableFullEditMode) {
        this.activeEditor.enableFullEditMode();
      }
      this.activeEditor.beginEditing(newInitialValue, event);
    }
  }
  /**
   * Close editor, finish editing cell.
   *
   * @param {boolean} restoreOriginalValue If `true`, then closes editor without saving value from the editor into a cell.
   * @param {boolean} isCtrlPressed If `true`, then editor will save value to each cell in the last selected range.
   * @param {Function} callback The callback function, fired after editor closing.
   */
  closeEditor(restoreOriginalValue, isCtrlPressed, callback) {
    if (this.activeEditor) {
      this.activeEditor.finishEditing(restoreOriginalValue, isCtrlPressed, callback);
    } else if (callback) {
      callback(false);
    }
  }
  /**
   * Close editor and save changes.
   *
   * @param {boolean} isCtrlPressed If `true`, then editor will save value to each cell in the last selected range.
   */
  closeEditorAndSaveChanges(isCtrlPressed) {
    this.closeEditor(false, isCtrlPressed);
  }
  /**
   * Close editor and restore original value.
   *
   * @param {boolean} isCtrlPressed Indication of whether the CTRL button is pressed.
   */
  closeEditorAndRestoreOriginalValue(isCtrlPressed) {
    this.closeEditor(true, isCtrlPressed);
  }
  /**
   * Clears reference to an instance of the active editor.
   *
   * @private
   */
  clearActiveEditor() {
    this.activeEditor = void 0;
  }
  /**
   * Checks if the currently selected cell (pointed by selection highlight coords) is editable.
   * Editable cell is when:
   *   - the cell has defined an editor type;
   *   - the cell is not marked as read-only;
   *   - the cell is not hidden.
   *
   * @private
   * @returns {boolean}
   */
  isCellEditable() {
    const selection = this.hot.getSelectedRangeLast();
    if (!selection) {
      return false;
    }
    const editorClass = this.hot.getCellEditor(this.cellProperties);
    const {
      row,
      col
    } = selection.highlight;
    const {
      rowIndexMapper,
      columnIndexMapper
    } = this.hot;
    const isCellHidden = rowIndexMapper.isHidden(this.hot.toPhysicalRow(row)) || columnIndexMapper.isHidden(this.hot.toPhysicalColumn(col));
    if (this.cellProperties.readOnly || !editorClass || isCellHidden) {
      return false;
    }
    return true;
  }
  /**
   * Controls selection's behavior after clicking `Enter`.
   *
   * @private
   * @param {KeyboardEvent} event The keyboard event object.
   */
  moveSelectionAfterEnter(event) {
    const enterMoves = __spreadValues({}, typeof this.tableMeta.enterMoves === "function" ? this.tableMeta.enterMoves(event) : this.tableMeta.enterMoves);
    if (event.shiftKey) {
      enterMoves.row = -enterMoves.row;
      enterMoves.col = -enterMoves.col;
    }
    if (this.hot.selection.isMultiple()) {
      this.selection.transformFocus(enterMoves.row, enterMoves.col);
    } else {
      this.selection.transformStart(enterMoves.row, enterMoves.col, true);
    }
  }
  /**
   * Destroy the instance.
   */
  destroy() {
    this.destroyed = true;
    this.eventManager.destroy();
  }
};
function _onAfterDocumentKeyDown(event) {
  const selection = this.hot.getSelectedRangeLast();
  if (!this.hot.isListening() || !selection || selection.highlight.isHeader() || isImmediatePropagationStopped(event)) {
    return;
  }
  const {
    keyCode
  } = event;
  const isCtrlPressed = (event.ctrlKey || event.metaKey) && !event.altKey;
  if (!this.activeEditor || this.activeEditor && !this.activeEditor.isWaiting()) {
    if (!isFunctionKey(keyCode) && !isCtrlMetaKey(keyCode) && !isCtrlPressed && !this.isEditorOpened()) {
      this.openEditor("", event);
    }
  }
}
function _onCellDblClick(event, coords) {
  if (coords.isCell()) {
    this.openEditor(null, event, true);
  }
}
var instances = /* @__PURE__ */ new WeakMap();
EditorManager.getInstance = function(hotInstance, tableMeta, selection) {
  let editorManager = instances.get(hotInstance);
  if (!editorManager) {
    editorManager = new EditorManager(hotInstance, tableMeta, selection);
    instances.set(hotInstance, editorManager);
  }
  return editorManager;
};
var editorManager_default = EditorManager;

// node_modules/handsontable/focusManager.mjs
function _classPrivateMethodInitSpec2(obj, privateSet) {
  _checkPrivateRedeclaration2(obj, privateSet);
  privateSet.add(obj);
}
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration2(obj, privateMap);
  privateMap.set(obj, value);
}
function _checkPrivateRedeclaration2(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldGet(s, a) {
  return s.get(_assertClassBrand2(s, a));
}
function _classPrivateFieldSet(s, a, r) {
  return s.set(_assertClassBrand2(s, a), r), r;
}
function _assertClassBrand2(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
var FOCUS_MODES = Object.freeze({
  CELL: "cell",
  MIXED: "mixed"
});
var _hot = /* @__PURE__ */ new WeakMap();
var _focusMode = /* @__PURE__ */ new WeakMap();
var _refocusDelay = /* @__PURE__ */ new WeakMap();
var _refocusElementGetter = /* @__PURE__ */ new WeakMap();
var _debouncedSelect = /* @__PURE__ */ new WeakMap();
var _FocusManager_brand = /* @__PURE__ */ new WeakSet();
var FocusManager = class {
  constructor(hotInstance) {
    var _this = this;
    _classPrivateMethodInitSpec2(this, _FocusManager_brand);
    _classPrivateFieldInitSpec(this, _hot, void 0);
    _classPrivateFieldInitSpec(this, _focusMode, void 0);
    _classPrivateFieldInitSpec(this, _refocusDelay, 1);
    _classPrivateFieldInitSpec(this, _refocusElementGetter, null);
    _classPrivateFieldInitSpec(this, _debouncedSelect, /* @__PURE__ */ new Map());
    const hotSettings = hotInstance.getSettings();
    _classPrivateFieldSet(_hot, this, hotInstance);
    _classPrivateFieldSet(_focusMode, this, hotSettings.imeFastEdit ? FOCUS_MODES.MIXED : FOCUS_MODES.CELL);
    _classPrivateFieldGet(_hot, this).addHook("afterUpdateSettings", function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _assertClassBrand2(_FocusManager_brand, _this, _onUpdateSettings).call(_this, ...args);
    });
    _classPrivateFieldGet(_hot, this).addHook("afterSelection", function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return _assertClassBrand2(_FocusManager_brand, _this, _focusCell).call(_this, ...args);
    });
    _classPrivateFieldGet(_hot, this).addHook("afterSelectionFocusSet", function() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return _assertClassBrand2(_FocusManager_brand, _this, _focusCell).call(_this, ...args);
    });
    _classPrivateFieldGet(_hot, this).addHook("afterSelectionEnd", function() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return _assertClassBrand2(_FocusManager_brand, _this, _focusEditorElement).call(_this, ...args);
    });
  }
  /**
   * Get the current focus mode.
   *
   * @returns {'cell' | 'mixed'}
   */
  getFocusMode() {
    return _classPrivateFieldGet(_focusMode, this);
  }
  /**
   * Set the focus mode.
   *
   * @param {'cell' | 'mixed'} focusMode The new focus mode.
   */
  setFocusMode(focusMode) {
    if (Object.values(FOCUS_MODES).includes(focusMode)) {
      _classPrivateFieldSet(_focusMode, this, focusMode);
    } else {
      warn(`"${focusMode}" is not a valid focus mode.`);
    }
  }
  /**
   * Get the delay after which the focus will change from the cell elements to the active editor's `TEXTAREA`
   * element if the focus mode is set to 'mixed'.
   *
   * @returns {number} Delay in milliseconds.
   */
  getRefocusDelay() {
    return _classPrivateFieldGet(_refocusDelay, this);
  }
  /**
   * Set the delay after which the focus will change from the cell elements to the active editor's `TEXTAREA`
   * element if the focus mode is set to 'mixed'.
   *
   * @param {number} delay Delay in milliseconds.
   */
  setRefocusDelay(delay) {
    _classPrivateFieldSet(_refocusDelay, this, delay);
  }
  /**
   * Set the function to be used as the "refocus element" getter. It should return a focusable HTML element.
   *
   * @param {Function} getRefocusElementFunction The refocus element getter.
   */
  setRefocusElementGetter(getRefocusElementFunction) {
    _classPrivateFieldSet(_refocusElementGetter, this, getRefocusElementFunction);
  }
  /**
   * Get the element to be used when refocusing the browser after a delay in case of the focus mode being 'mixed'.
   *
   * @returns {HTMLTextAreaElement|HTMLElement|undefined}
   */
  getRefocusElement() {
    if (typeof _classPrivateFieldGet(_refocusElementGetter, this) === "function") {
      return _classPrivateFieldGet(_refocusElementGetter, this).call(this);
    } else {
      var _classPrivateFieldGet22;
      return (_classPrivateFieldGet22 = _classPrivateFieldGet(_hot, this).getActiveEditor()) === null || _classPrivateFieldGet22 === void 0 ? void 0 : _classPrivateFieldGet22.TEXTAREA;
    }
  }
  /**
   * Set the browser's focus to the highlighted cell of the last selection.
   *
   * @param {HTMLTableCellElement} [selectedCell] The highlighted cell/header element.
   */
  focusOnHighlightedCell(selectedCell) {
    const focusElement = (element) => {
      var _classPrivateFieldGet32, _classPrivateFieldGet4;
      const currentHighlightCoords = (_classPrivateFieldGet32 = _classPrivateFieldGet(_hot, this).getSelectedRangeLast()) === null || _classPrivateFieldGet32 === void 0 ? void 0 : _classPrivateFieldGet32.highlight;
      if (!currentHighlightCoords) {
        return;
      }
      let elementToBeFocused = _classPrivateFieldGet(_hot, this).runHooks("modifyFocusedElement", currentHighlightCoords.row, currentHighlightCoords.col, element);
      if (!(elementToBeFocused instanceof HTMLElement)) {
        elementToBeFocused = element;
      }
      if (elementToBeFocused && !((_classPrivateFieldGet4 = _classPrivateFieldGet(_hot, this).getActiveEditor()) !== null && _classPrivateFieldGet4 !== void 0 && _classPrivateFieldGet4.isOpened())) {
        elementToBeFocused.focus({
          preventScroll: true
        });
      }
    };
    if (selectedCell) {
      focusElement(selectedCell);
    } else {
      _assertClassBrand2(_FocusManager_brand, this, _getSelectedCell).call(this, (element) => focusElement(element));
    }
  }
  /**
   * Set the focus to the active editor's `TEXTAREA` element after the provided delay. If no delay is provided, it
   * will be taken from the manager's configuration.
   *
   * @param {number} [delay] Delay in milliseconds.
   */
  refocusToEditorTextarea() {
    var _classPrivateFieldGet5;
    let delay = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _classPrivateFieldGet(_refocusDelay, this);
    const refocusElement = this.getRefocusElement();
    if (_classPrivateFieldGet(_hot, this).getSettings().imeFastEdit && !((_classPrivateFieldGet5 = _classPrivateFieldGet(_hot, this).getActiveEditor()) !== null && _classPrivateFieldGet5 !== void 0 && _classPrivateFieldGet5.isOpened()) && !!refocusElement) {
      if (!_classPrivateFieldGet(_debouncedSelect, this).has(delay)) {
        _classPrivateFieldGet(_debouncedSelect, this).set(delay, debounce(() => {
          refocusElement.select();
        }, delay));
      }
      _classPrivateFieldGet(_debouncedSelect, this).get(delay)();
    }
  }
};
function _getSelectedCell(callback) {
  var _classPrivateFieldGet6;
  const highlight = (_classPrivateFieldGet6 = _classPrivateFieldGet(_hot, this).getSelectedRangeLast()) === null || _classPrivateFieldGet6 === void 0 ? void 0 : _classPrivateFieldGet6.highlight;
  if (!highlight || !_classPrivateFieldGet(_hot, this).selection.isCellVisible(highlight)) {
    callback(null);
    return;
  }
  const cell = _classPrivateFieldGet(_hot, this).getCell(highlight.row, highlight.col, true);
  if (cell === null) {
    _classPrivateFieldGet(_hot, this).addHookOnce("afterScroll", () => {
      callback(_classPrivateFieldGet(_hot, this).getCell(highlight.row, highlight.col, true));
    });
  } else {
    callback(cell);
  }
}
function _focusCell() {
  _assertClassBrand2(_FocusManager_brand, this, _getSelectedCell).call(this, (selectedCell) => {
    const {
      activeElement
    } = _classPrivateFieldGet(_hot, this).rootDocument;
    if (activeElement && isOutsideInput(activeElement)) {
      activeElement.blur();
    }
    this.focusOnHighlightedCell(selectedCell);
  });
}
function _focusEditorElement() {
  _assertClassBrand2(_FocusManager_brand, this, _getSelectedCell).call(this, (selectedCell) => {
    if (this.getFocusMode() === FOCUS_MODES.MIXED && selectedCell.nodeName === "TD") {
      this.refocusToEditorTextarea();
    }
  });
}
function _onUpdateSettings(newSettings) {
  if (typeof newSettings.imeFastEdit === "boolean") {
    this.setFocusMode(newSettings.imeFastEdit ? FOCUS_MODES.MIXED : FOCUS_MODES.CELL);
  }
}

// node_modules/handsontable/utils/rootInstance.mjs
var holder = /* @__PURE__ */ new WeakMap();
var rootInstanceSymbol = Symbol("rootInstance");
function registerAsRootInstance(object) {
  holder.set(object, true);
}
function hasValidParameter(rootSymbol) {
  return rootSymbol === rootInstanceSymbol;
}
function isRootInstance(object) {
  return holder.has(object);
}

// node_modules/handsontable/tableView.mjs
function _classPrivateMethodInitSpec3(obj, privateSet) {
  _checkPrivateRedeclaration3(obj, privateSet);
  privateSet.add(obj);
}
function _classPrivateFieldInitSpec2(obj, privateMap, value) {
  _checkPrivateRedeclaration3(obj, privateMap);
  privateMap.set(obj, value);
}
function _checkPrivateRedeclaration3(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _defineProperty2(obj, key, value) {
  key = _toPropertyKey2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey2(t) {
  var i = _toPrimitive2(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive2(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _classPrivateFieldGet2(s, a) {
  return s.get(_assertClassBrand3(s, a));
}
function _classPrivateFieldSet2(s, a, r) {
  return s.set(_assertClassBrand3(s, a), r), r;
}
function _assertClassBrand3(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
var _columnHeadersCount = /* @__PURE__ */ new WeakMap();
var _rowHeadersCount = /* @__PURE__ */ new WeakMap();
var _selectionMouseDown = /* @__PURE__ */ new WeakMap();
var _mouseDown = /* @__PURE__ */ new WeakMap();
var _table = /* @__PURE__ */ new WeakMap();
var _lastWidth = /* @__PURE__ */ new WeakMap();
var _lastHeight = /* @__PURE__ */ new WeakMap();
var _TableView_brand = /* @__PURE__ */ new WeakSet();
var TableView = class {
  /**
   * @param {Hanstontable} hotInstance Instance of {@link Handsontable}.
   */
  constructor(hotInstance) {
    _classPrivateMethodInitSpec3(this, _TableView_brand);
    _defineProperty2(this, "hot", void 0);
    _defineProperty2(this, "eventManager", void 0);
    _defineProperty2(this, "settings", void 0);
    _defineProperty2(this, "THEAD", void 0);
    _defineProperty2(this, "TBODY", void 0);
    _defineProperty2(this, "_wt", void 0);
    _defineProperty2(this, "activeWt", void 0);
    _classPrivateFieldInitSpec2(this, _columnHeadersCount, 0);
    _classPrivateFieldInitSpec2(this, _rowHeadersCount, 0);
    _defineProperty2(this, "postponedAdjustElementsSize", false);
    _classPrivateFieldInitSpec2(this, _selectionMouseDown, false);
    _classPrivateFieldInitSpec2(this, _mouseDown, void 0);
    _classPrivateFieldInitSpec2(this, _table, void 0);
    _classPrivateFieldInitSpec2(this, _lastWidth, 0);
    _classPrivateFieldInitSpec2(this, _lastHeight, 0);
    this.hot = hotInstance;
    this.eventManager = new eventManager_default(this.hot);
    this.settings = this.hot.getSettings();
    this.createElements();
    this.registerEvents();
    this.initializeWalkontable();
  }
  /**
   * Renders WalkontableUI.
   */
  render() {
    if (!this.hot.isRenderSuspended()) {
      this.hot.runHooks("beforeRender", this.hot.forceFullRender);
      if (this.postponedAdjustElementsSize) {
        this.postponedAdjustElementsSize = false;
        this.adjustElementsSize(true);
      }
      this._wt.draw(!this.hot.forceFullRender);
      this.hot.runHooks("afterRender", this.hot.forceFullRender);
      this.hot.forceFullRender = false;
      this.hot.renderCall = false;
    }
  }
  /**
   * Adjust overlays elements size and master table size.
   */
  adjustElementsSize() {
    if (this.hot.isRenderSuspended()) {
      this.postponedAdjustElementsSize = true;
    } else {
      this._wt.wtOverlays.adjustElementsSize();
    }
  }
  /**
   * Returns td object given coordinates.
   *
   * @param {CellCoords} coords Renderable cell coordinates.
   * @param {boolean} topmost Indicates whether the cell should be calculated from the topmost.
   * @returns {HTMLTableCellElement|null}
   */
  getCellAtCoords(coords, topmost) {
    const td = this._wt.getCell(coords, topmost);
    if (td < 0) {
      return null;
    }
    return td;
  }
  /**
   * Scroll viewport to a cell.
   *
   * @param {CellCoords} coords Renderable cell coordinates.
   * @param {boolean} [snapToTop] If `true`, viewport is scrolled to show the cell on the top of the table.
   * @param {boolean} [snapToRight] If `true`, viewport is scrolled to show the cell on the right side of the table.
   * @param {boolean} [snapToBottom] If `true`, viewport is scrolled to show the cell on the bottom side of the table.
   * @param {boolean} [snapToLeft] If `true`, viewport is scrolled to show the cell on the left side of the table.
   * @returns {boolean}
   */
  scrollViewport(coords, snapToTop, snapToRight, snapToBottom, snapToLeft) {
    return this._wt.scrollViewport(coords, snapToTop, snapToRight, snapToBottom, snapToLeft);
  }
  /**
   * Scroll viewport to a column.
   *
   * @param {number} column Renderable column index.
   * @param {boolean} [snapToRight] If `true`, viewport is scrolled to show the cell on the right side of the table.
   * @param {boolean} [snapToLeft] If `true`, viewport is scrolled to show the cell on the left side of the table.
   * @returns {boolean}
   */
  scrollViewportHorizontally(column, snapToRight, snapToLeft) {
    return this._wt.scrollViewportHorizontally(column, snapToRight, snapToLeft);
  }
  /**
   * Scroll viewport to a row.
   *
   * @param {number} row Renderable row index.
   * @param {boolean} [snapToTop] If `true`, viewport is scrolled to show the cell on the top of the table.
   * @param {boolean} [snapToBottom] If `true`, viewport is scrolled to show the cell on the bottom side of the table.
   * @returns {boolean}
   */
  scrollViewportVertically(row, snapToTop, snapToBottom) {
    return this._wt.scrollViewportVertically(row, snapToTop, snapToBottom);
  }
  /**
   * Prepares DOMElements and adds correct className to the root element.
   *
   * @private
   */
  createElements() {
    const {
      rootElement,
      rootDocument
    } = this.hot;
    const originalStyle = rootElement.getAttribute("style");
    if (originalStyle) {
      rootElement.setAttribute("data-originalstyle", originalStyle);
    }
    addClass(rootElement, "handsontable");
    _classPrivateFieldSet2(_table, this, rootDocument.createElement("TABLE"));
    addClass(_classPrivateFieldGet2(_table, this), "htCore");
    if (this.hot.getSettings().tableClassName) {
      addClass(_classPrivateFieldGet2(_table, this), this.hot.getSettings().tableClassName);
    }
    if (this.settings.ariaTags) {
      setAttribute(_classPrivateFieldGet2(_table, this), [A11Y_PRESENTATION()]);
      setAttribute(rootElement, [A11Y_TREEGRID(), A11Y_ROWCOUNT(-1), A11Y_COLCOUNT(this.hot.countCols()), A11Y_MULTISELECTABLE()]);
    }
    this.THEAD = rootDocument.createElement("THEAD");
    _classPrivateFieldGet2(_table, this).appendChild(this.THEAD);
    this.TBODY = rootDocument.createElement("TBODY");
    _classPrivateFieldGet2(_table, this).appendChild(this.TBODY);
    this.hot.table = _classPrivateFieldGet2(_table, this);
    this.hot.container.insertBefore(_classPrivateFieldGet2(_table, this), this.hot.container.firstChild);
  }
  /**
   * Attaches necessary listeners.
   *
   * @private
   */
  registerEvents() {
    const {
      rootElement,
      rootDocument,
      selection,
      rootWindow
    } = this.hot;
    const documentElement = rootDocument.documentElement;
    this.eventManager.addEventListener(rootElement, "mousedown", (event) => {
      _classPrivateFieldSet2(_selectionMouseDown, this, true);
      if (!this.isTextSelectionAllowed(event.target)) {
        clearTextSelection(rootWindow);
        event.preventDefault();
        rootWindow.focus();
      }
    });
    this.eventManager.addEventListener(rootElement, "mouseup", () => {
      _classPrivateFieldSet2(_selectionMouseDown, this, false);
    });
    this.eventManager.addEventListener(rootElement, "mousemove", (event) => {
      if (_classPrivateFieldGet2(_selectionMouseDown, this) && !this.isTextSelectionAllowed(event.target)) {
        if (this.settings.fragmentSelection) {
          clearTextSelection(rootWindow);
        }
        event.preventDefault();
      }
    });
    this.eventManager.addEventListener(documentElement, "keyup", (event) => {
      if (selection.isInProgress() && !event.shiftKey) {
        selection.finish();
      }
    });
    this.eventManager.addEventListener(documentElement, "mouseup", (event) => {
      if (selection.isInProgress() && isLeftClick(event)) {
        selection.finish();
      }
      _classPrivateFieldSet2(_mouseDown, this, false);
      const isOutsideInputElement = isOutsideInput(rootDocument.activeElement);
      if (isInput(rootDocument.activeElement) && !isOutsideInputElement) {
        return;
      }
      if (isOutsideInputElement || !selection.isSelected() && !selection.isSelectedByAnyHeader() && !rootElement.contains(event.target) && !isRightClick(event)) {
        this.hot.unlisten();
      }
    });
    this.eventManager.addEventListener(documentElement, "contextmenu", (event) => {
      if (selection.isInProgress() && isRightClick(event)) {
        selection.finish();
        _classPrivateFieldSet2(_mouseDown, this, false);
      }
    });
    this.eventManager.addEventListener(documentElement, "touchend", () => {
      if (selection.isInProgress()) {
        selection.finish();
      }
      _classPrivateFieldSet2(_mouseDown, this, false);
    });
    this.eventManager.addEventListener(documentElement, "mousedown", (event) => {
      const originalTarget = event.target;
      const eventX = event.x || event.clientX;
      const eventY = event.y || event.clientY;
      let next = event.target;
      if (_classPrivateFieldGet2(_mouseDown, this) || !rootElement || !this.hot.view) {
        return;
      }
      const {
        holder: holder2
      } = this.hot.view._wt.wtTable;
      if (next === holder2) {
        const scrollbarWidth = getScrollbarWidth(rootDocument);
        if (rootDocument.elementFromPoint(eventX + scrollbarWidth, eventY) !== holder2 || rootDocument.elementFromPoint(eventX, eventY + scrollbarWidth) !== holder2) {
          return;
        }
      } else {
        while (next !== documentElement) {
          if (next === null) {
            if (event.isTargetWebComponent) {
              break;
            }
            return;
          }
          if (next === rootElement) {
            return;
          }
          next = next.parentNode;
        }
      }
      const outsideClickDeselects = typeof this.settings.outsideClickDeselects === "function" ? this.settings.outsideClickDeselects(originalTarget) : this.settings.outsideClickDeselects;
      if (outsideClickDeselects) {
        this.hot.deselectCell();
      } else {
        this.hot.destroyEditor(false, false);
      }
    });
    let parentWindow = getParentWindow(rootWindow);
    while (parentWindow !== null) {
      this.eventManager.addEventListener(parentWindow.document.documentElement, "click", () => {
        this.hot.unlisten();
      });
      parentWindow = getParentWindow(parentWindow);
    }
    this.eventManager.addEventListener(_classPrivateFieldGet2(_table, this), "selectstart", (event) => {
      if (this.settings.fragmentSelection || isInput(event.target)) {
        return;
      }
      event.preventDefault();
    });
  }
  /**
   * Translate renderable cell coordinates to visual coordinates.
   *
   * @param {CellCoords} coords The cell coordinates.
   * @returns {CellCoords}
   */
  translateFromRenderableToVisualCoords(_ref) {
    let {
      row,
      col
    } = _ref;
    return this.hot._createCellCoords(...this.translateFromRenderableToVisualIndex(row, col));
  }
  /**
   * Translate renderable row and column indexes to visual row and column indexes.
   *
   * @param {number} renderableRow Renderable row index.
   * @param {number} renderableColumn Renderable columnIndex.
   * @returns {number[]}
   */
  translateFromRenderableToVisualIndex(renderableRow, renderableColumn) {
    let visualRow = renderableRow >= 0 ? this.hot.rowIndexMapper.getVisualFromRenderableIndex(renderableRow) : renderableRow;
    let visualColumn = renderableColumn >= 0 ? this.hot.columnIndexMapper.getVisualFromRenderableIndex(renderableColumn) : renderableColumn;
    if (visualRow === null) {
      visualRow = renderableRow;
    }
    if (visualColumn === null) {
      visualColumn = renderableColumn;
    }
    return [visualRow, visualColumn];
  }
  /**
   * Returns the number of renderable indexes.
   *
   * @private
   * @param {IndexMapper} indexMapper The IndexMapper instance for specific axis.
   * @param {number} maxElements Maximum number of elements (rows or columns).
   *
   * @returns {number|*}
   */
  countRenderableIndexes(indexMapper, maxElements) {
    const consideredElements = Math.min(indexMapper.getNotTrimmedIndexesLength(), maxElements);
    const firstNotHiddenIndex = indexMapper.getNearestNotHiddenIndex(consideredElements - 1, -1);
    if (firstNotHiddenIndex === null) {
      return 0;
    }
    return indexMapper.getRenderableFromVisualIndex(firstNotHiddenIndex) + 1;
  }
  /**
   * Returns the number of renderable columns.
   *
   * @returns {number}
   */
  countRenderableColumns() {
    return this.countRenderableIndexes(this.hot.columnIndexMapper, this.settings.maxCols);
  }
  /**
   * Returns the number of renderable rows.
   *
   * @returns {number}
   */
  countRenderableRows() {
    return this.countRenderableIndexes(this.hot.rowIndexMapper, this.settings.maxRows);
  }
  /**
   * Returns number of not hidden row indexes counting from the passed starting index.
   * The counting direction can be controlled by `incrementBy` argument.
   *
   * @param {number} visualIndex The visual index from which the counting begins.
   * @param {number} incrementBy If `-1` then counting is backwards or forward when `1`.
   * @returns {number}
   */
  countNotHiddenRowIndexes(visualIndex, incrementBy) {
    return this.countNotHiddenIndexes(visualIndex, incrementBy, this.hot.rowIndexMapper, this.countRenderableRows());
  }
  /**
   * Returns number of not hidden column indexes counting from the passed starting index.
   * The counting direction can be controlled by `incrementBy` argument.
   *
   * @param {number} visualIndex The visual index from which the counting begins.
   * @param {number} incrementBy If `-1` then counting is backwards or forward when `1`.
   * @returns {number}
   */
  countNotHiddenColumnIndexes(visualIndex, incrementBy) {
    return this.countNotHiddenIndexes(visualIndex, incrementBy, this.hot.columnIndexMapper, this.countRenderableColumns());
  }
  /**
   * Returns number of not hidden indexes counting from the passed starting index.
   * The counting direction can be controlled by `incrementBy` argument.
   *
   * @param {number} visualIndex The visual index from which the counting begins.
   * @param {number} incrementBy If `-1` then counting is backwards or forward when `1`.
   * @param {IndexMapper} indexMapper The IndexMapper instance for specific axis.
   * @param {number} renderableIndexesCount Total count of renderable indexes for specific axis.
   * @returns {number}
   */
  countNotHiddenIndexes(visualIndex, incrementBy, indexMapper, renderableIndexesCount) {
    if (isNaN(visualIndex) || visualIndex < 0) {
      return 0;
    }
    const firstVisibleIndex = indexMapper.getNearestNotHiddenIndex(visualIndex, incrementBy);
    const renderableIndex = indexMapper.getRenderableFromVisualIndex(firstVisibleIndex);
    if (!Number.isInteger(renderableIndex)) {
      return 0;
    }
    let notHiddenIndexes = 0;
    if (incrementBy < 0) {
      notHiddenIndexes = renderableIndex + 1;
    } else if (incrementBy > 0) {
      notHiddenIndexes = renderableIndexesCount - renderableIndex;
    }
    return notHiddenIndexes;
  }
  /**
   * The function returns the number of not hidden column indexes that fit between the first and
   * last fixed column in the left (or right in RTL mode) overlay.
   *
   * @returns {number}
   */
  countNotHiddenFixedColumnsStart() {
    const countCols = this.hot.countCols();
    const visualFixedColumnsStart = Math.min(parseInt(this.settings.fixedColumnsStart, 10), countCols) - 1;
    return this.countNotHiddenColumnIndexes(visualFixedColumnsStart, -1);
  }
  /**
   * The function returns the number of not hidden row indexes that fit between the first and
   * last fixed row in the top overlay.
   *
   * @returns {number}
   */
  countNotHiddenFixedRowsTop() {
    const countRows = this.hot.countRows();
    const visualFixedRowsTop = Math.min(parseInt(this.settings.fixedRowsTop, 10), countRows) - 1;
    return this.countNotHiddenRowIndexes(visualFixedRowsTop, -1);
  }
  /**
   * The function returns the number of not hidden row indexes that fit between the first and
   * last fixed row in the bottom overlay.
   *
   * @returns {number}
   */
  countNotHiddenFixedRowsBottom() {
    const countRows = this.hot.countRows();
    const visualFixedRowsBottom = Math.max(countRows - parseInt(this.settings.fixedRowsBottom, 10), 0);
    return this.countNotHiddenRowIndexes(visualFixedRowsBottom, 1);
  }
  /**
   * The function returns the number of renderable column indexes within the passed range of the visual indexes.
   *
   * @param {number} columnStart The column visual start index.
   * @param {number} columnEnd The column visual end index.
   * @returns {number}
   */
  countRenderableColumnsInRange(columnStart, columnEnd) {
    let count = 0;
    for (let column = columnStart; column <= columnEnd; column++) {
      if (this.hot.columnIndexMapper.getRenderableFromVisualIndex(column) !== null) {
        count += 1;
      }
    }
    return count;
  }
  /**
   * The function returns the number of renderable row indexes within the passed range of the visual indexes.
   *
   * @param {number} rowStart The row visual start index.
   * @param {number} rowEnd The row visual end index.
   * @returns {number}
   */
  countRenderableRowsInRange(rowStart, rowEnd) {
    let count = 0;
    for (let row = rowStart; row <= rowEnd; row++) {
      if (this.hot.rowIndexMapper.getRenderableFromVisualIndex(row) !== null) {
        count += 1;
      }
    }
    return count;
  }
  /**
   * Checks if at least one cell than belongs to the main table is not covered by the top, left or
   * bottom overlay.
   *
   * @returns {boolean}
   */
  isMainTableNotFullyCoveredByOverlays() {
    const fixedAllRows = this.countNotHiddenFixedRowsTop() + this.countNotHiddenFixedRowsBottom();
    const fixedAllColumns = this.countNotHiddenFixedColumnsStart();
    return this.hot.countRenderedRows() > fixedAllRows && this.hot.countRenderedCols() > fixedAllColumns;
  }
  /**
   * Defines default configuration and initializes WalkOnTable instance.
   *
   * @private
   */
  initializeWalkontable() {
    const walkontableConfig = {
      ariaTags: this.settings.ariaTags,
      rtlMode: this.hot.isRtl(),
      externalRowCalculator: this.hot.getPlugin("autoRowSize") && this.hot.getPlugin("autoRowSize").isEnabled(),
      table: _classPrivateFieldGet2(_table, this),
      isDataViewInstance: () => isRootInstance(this.hot),
      preventOverflow: () => this.settings.preventOverflow,
      preventWheel: () => this.settings.preventWheel,
      stretchH: () => this.settings.stretchH,
      data: (renderableRow, renderableColumn) => {
        return this.hot.getDataAtCell(...this.translateFromRenderableToVisualIndex(renderableRow, renderableColumn));
      },
      totalRows: () => this.countRenderableRows(),
      totalColumns: () => this.countRenderableColumns(),
      // Number of renderable columns for the left overlay.
      fixedColumnsStart: () => this.countNotHiddenFixedColumnsStart(),
      // Number of renderable rows for the top overlay.
      fixedRowsTop: () => this.countNotHiddenFixedRowsTop(),
      // Number of renderable rows for the bottom overlay.
      fixedRowsBottom: () => this.countNotHiddenFixedRowsBottom(),
      // Enable the inline start overlay when conditions are met.
      shouldRenderInlineStartOverlay: () => {
        return this.settings.fixedColumnsStart > 0 || walkontableConfig.rowHeaders().length > 0;
      },
      // Enable the top overlay when conditions are met.
      shouldRenderTopOverlay: () => {
        return this.settings.fixedRowsTop > 0 || walkontableConfig.columnHeaders().length > 0;
      },
      // Enable the bottom overlay when conditions are met.
      shouldRenderBottomOverlay: () => {
        return this.settings.fixedRowsBottom > 0;
      },
      minSpareRows: () => this.settings.minSpareRows,
      renderAllRows: this.settings.renderAllRows,
      renderAllColumns: this.settings.renderAllColumns,
      rowHeaders: () => {
        const headerRenderers = [];
        if (this.hot.hasRowHeaders()) {
          headerRenderers.push((renderableRowIndex, TH) => {
            const visualRowIndex = renderableRowIndex >= 0 ? this.hot.rowIndexMapper.getVisualFromRenderableIndex(renderableRowIndex) : renderableRowIndex;
            this.appendRowHeader(visualRowIndex, TH);
          });
        }
        this.hot.runHooks("afterGetRowHeaderRenderers", headerRenderers);
        _classPrivateFieldSet2(_rowHeadersCount, this, headerRenderers.length);
        if (this.hot.getSettings().ariaTags) {
          if (_assertClassBrand3(_TableView_brand, this, _getAriaColcount).call(this) === this.hot.countCols()) {
            _assertClassBrand3(_TableView_brand, this, _updateAriaColcount).call(this, _classPrivateFieldGet2(_rowHeadersCount, this));
          }
        }
        return headerRenderers;
      },
      columnHeaders: () => {
        const headerRenderers = [];
        if (this.hot.hasColHeaders()) {
          headerRenderers.push((renderedColumnIndex, TH) => {
            const visualColumnsIndex = renderedColumnIndex >= 0 ? this.hot.columnIndexMapper.getVisualFromRenderableIndex(renderedColumnIndex) : renderedColumnIndex;
            this.appendColHeader(visualColumnsIndex, TH);
          });
        }
        this.hot.runHooks("afterGetColumnHeaderRenderers", headerRenderers);
        _classPrivateFieldSet2(_columnHeadersCount, this, headerRenderers.length);
        return headerRenderers;
      },
      columnWidth: (renderedColumnIndex) => {
        const visualIndex = this.hot.columnIndexMapper.getVisualFromRenderableIndex(renderedColumnIndex);
        return this.hot.getColWidth(visualIndex === null ? renderedColumnIndex : visualIndex);
      },
      rowHeight: (renderedRowIndex) => {
        const visualIndex = this.hot.rowIndexMapper.getVisualFromRenderableIndex(renderedRowIndex);
        return this.hot.getRowHeight(visualIndex === null ? renderedRowIndex : visualIndex);
      },
      cellRenderer: (renderedRowIndex, renderedColumnIndex, TD) => {
        const [visualRowIndex, visualColumnIndex] = this.translateFromRenderableToVisualIndex(renderedRowIndex, renderedColumnIndex);
        const modifiedCellCoords = this.hot.runHooks("modifyGetCellCoords", visualRowIndex, visualColumnIndex);
        let visualRowToCheck = visualRowIndex;
        let visualColumnToCheck = visualColumnIndex;
        if (Array.isArray(modifiedCellCoords)) {
          [visualRowToCheck, visualColumnToCheck] = modifiedCellCoords;
        }
        const cellProperties = this.hot.getCellMeta(visualRowToCheck, visualColumnToCheck);
        const prop = this.hot.colToProp(visualColumnToCheck);
        let value = this.hot.getDataAtRowProp(visualRowToCheck, prop);
        if (this.hot.hasHook("beforeValueRender")) {
          value = this.hot.runHooks("beforeValueRender", value, cellProperties);
        }
        this.hot.runHooks("beforeRenderer", TD, visualRowIndex, visualColumnIndex, prop, value, cellProperties);
        this.hot.getCellRenderer(cellProperties)(this.hot, TD, visualRowIndex, visualColumnIndex, prop, value, cellProperties);
        this.hot.runHooks("afterRenderer", TD, visualRowIndex, visualColumnIndex, prop, value, cellProperties);
      },
      selections: this.hot.selection.highlight,
      hideBorderOnMouseDownOver: () => this.settings.fragmentSelection,
      onWindowResize: () => {
        if (this.hot && !this.hot.isDestroyed) {
          this.hot.refreshDimensions();
        }
      },
      onContainerElementResize: () => {
        if (this.hot && !this.hot.isDestroyed && isVisible(this.hot.rootElement)) {
          this.hot.refreshDimensions();
        }
      },
      onCellMouseDown: (event, coords, TD, wt) => {
        const visualCoords = this.translateFromRenderableToVisualCoords(coords);
        const controller = {
          row: false,
          column: false,
          cell: false
        };
        this.hot.listen();
        this.activeWt = wt;
        _classPrivateFieldSet2(_mouseDown, this, true);
        this.hot.runHooks("beforeOnCellMouseDown", event, visualCoords, TD, controller);
        if (isImmediatePropagationStopped(event)) {
          return;
        }
        handleMouseEvent(event, {
          coords: visualCoords,
          selection: this.hot.selection,
          controller,
          cellCoordsFactory: (row, column) => this.hot._createCellCoords(row, column)
        });
        this.hot.runHooks("afterOnCellMouseDown", event, visualCoords, TD);
        this.activeWt = this._wt;
      },
      onCellContextMenu: (event, coords, TD, wt) => {
        const visualCoords = this.translateFromRenderableToVisualCoords(coords);
        this.activeWt = wt;
        _classPrivateFieldSet2(_mouseDown, this, false);
        if (this.hot.selection.isInProgress()) {
          this.hot.selection.finish();
        }
        this.hot.runHooks("beforeOnCellContextMenu", event, visualCoords, TD);
        if (isImmediatePropagationStopped(event)) {
          return;
        }
        this.hot.runHooks("afterOnCellContextMenu", event, visualCoords, TD);
        this.activeWt = this._wt;
      },
      onCellMouseOut: (event, coords, TD, wt) => {
        const visualCoords = this.translateFromRenderableToVisualCoords(coords);
        this.activeWt = wt;
        this.hot.runHooks("beforeOnCellMouseOut", event, visualCoords, TD);
        if (isImmediatePropagationStopped(event)) {
          return;
        }
        this.hot.runHooks("afterOnCellMouseOut", event, visualCoords, TD);
        this.activeWt = this._wt;
      },
      onCellMouseOver: (event, coords, TD, wt) => {
        const visualCoords = this.translateFromRenderableToVisualCoords(coords);
        const controller = {
          row: false,
          column: false,
          cell: false
        };
        this.activeWt = wt;
        this.hot.runHooks("beforeOnCellMouseOver", event, visualCoords, TD, controller);
        if (isImmediatePropagationStopped(event)) {
          return;
        }
        if (_classPrivateFieldGet2(_mouseDown, this)) {
          handleMouseEvent(event, {
            coords: visualCoords,
            selection: this.hot.selection,
            controller,
            cellCoordsFactory: (row, column) => this.hot._createCellCoords(row, column)
          });
        }
        this.hot.runHooks("afterOnCellMouseOver", event, visualCoords, TD);
        this.activeWt = this._wt;
      },
      onCellMouseUp: (event, coords, TD, wt) => {
        const visualCoords = this.translateFromRenderableToVisualCoords(coords);
        this.activeWt = wt;
        this.hot.runHooks("beforeOnCellMouseUp", event, visualCoords, TD);
        if (isImmediatePropagationStopped(event) || this.hot.isDestroyed) {
          return;
        }
        this.hot.runHooks("afterOnCellMouseUp", event, visualCoords, TD);
        this.activeWt = this._wt;
      },
      onCellCornerMouseDown: (event) => {
        event.preventDefault();
        this.hot.runHooks("afterOnCellCornerMouseDown", event);
      },
      onCellCornerDblClick: (event) => {
        event.preventDefault();
        this.hot.runHooks("afterOnCellCornerDblClick", event);
      },
      beforeDraw: (force, skipRender) => this.beforeRender(force, skipRender),
      onDraw: (force) => this.afterRender(force),
      onBeforeViewportScrollVertically: (renderableRow) => {
        const rowMapper = this.hot.rowIndexMapper;
        const areColumnHeadersSelected = renderableRow < 0;
        let visualRow = renderableRow;
        if (!areColumnHeadersSelected) {
          visualRow = rowMapper.getVisualFromRenderableIndex(renderableRow);
          if (visualRow === null) {
            return renderableRow;
          }
        }
        visualRow = this.hot.runHooks("beforeViewportScrollVertically", visualRow);
        this.hot.runHooks("beforeViewportScroll");
        if (!areColumnHeadersSelected) {
          return rowMapper.getRenderableFromVisualIndex(visualRow);
        }
        return visualRow;
      },
      onBeforeViewportScrollHorizontally: (renderableColumn) => {
        const columnMapper = this.hot.columnIndexMapper;
        const areRowHeadersSelected = renderableColumn < 0;
        let visualColumn = renderableColumn;
        if (!areRowHeadersSelected) {
          visualColumn = columnMapper.getVisualFromRenderableIndex(renderableColumn);
          if (visualColumn === null) {
            return renderableColumn;
          }
        }
        visualColumn = this.hot.runHooks("beforeViewportScrollHorizontally", visualColumn);
        this.hot.runHooks("beforeViewportScroll");
        if (!areRowHeadersSelected) {
          return columnMapper.getRenderableFromVisualIndex(visualColumn);
        }
        return visualColumn;
      },
      onScrollVertically: () => {
        this.hot.runHooks("afterScrollVertically");
        this.hot.runHooks("afterScroll");
      },
      onScrollHorizontally: () => {
        this.hot.runHooks("afterScrollHorizontally");
        this.hot.runHooks("afterScroll");
      },
      onBeforeRemoveCellClassNames: () => this.hot.runHooks("beforeRemoveCellClassNames"),
      onBeforeHighlightingRowHeader: (renderableRow, headerLevel, highlightMeta) => {
        const rowMapper = this.hot.rowIndexMapper;
        const areColumnHeadersSelected = renderableRow < 0;
        let visualRow = renderableRow;
        if (!areColumnHeadersSelected) {
          visualRow = rowMapper.getVisualFromRenderableIndex(renderableRow);
        }
        const newVisualRow = this.hot.runHooks("beforeHighlightingRowHeader", visualRow, headerLevel, highlightMeta);
        if (!areColumnHeadersSelected) {
          return rowMapper.getRenderableFromVisualIndex(rowMapper.getNearestNotHiddenIndex(newVisualRow, 1));
        }
        return newVisualRow;
      },
      onBeforeHighlightingColumnHeader: (renderableColumn, headerLevel, highlightMeta) => {
        const columnMapper = this.hot.columnIndexMapper;
        const areRowHeadersSelected = renderableColumn < 0;
        let visualColumn = renderableColumn;
        if (!areRowHeadersSelected) {
          visualColumn = columnMapper.getVisualFromRenderableIndex(renderableColumn);
        }
        const newVisualColumn = this.hot.runHooks("beforeHighlightingColumnHeader", visualColumn, headerLevel, highlightMeta);
        if (!areRowHeadersSelected) {
          return columnMapper.getRenderableFromVisualIndex(columnMapper.getNearestNotHiddenIndex(newVisualColumn, 1));
        }
        return newVisualColumn;
      },
      onAfterDrawSelection: (currentRow, currentColumn, layerLevel) => {
        let cornersOfSelection;
        const [visualRowIndex, visualColumnIndex] = this.translateFromRenderableToVisualIndex(currentRow, currentColumn);
        const selectedRange = this.hot.selection.getSelectedRange();
        const selectionRangeSize = selectedRange.size();
        if (selectionRangeSize > 0) {
          const selectionForLayer = selectedRange.peekByIndex(layerLevel !== null && layerLevel !== void 0 ? layerLevel : 0);
          cornersOfSelection = [selectionForLayer.from.row, selectionForLayer.from.col, selectionForLayer.to.row, selectionForLayer.to.col];
        }
        return this.hot.runHooks("afterDrawSelection", visualRowIndex, visualColumnIndex, cornersOfSelection, layerLevel);
      },
      onBeforeDrawBorders: (corners, borderClassName) => {
        const [startRenderableRow, startRenderableColumn, endRenderableRow, endRenderableColumn] = corners;
        const visualCorners = [this.hot.rowIndexMapper.getVisualFromRenderableIndex(startRenderableRow), this.hot.columnIndexMapper.getVisualFromRenderableIndex(startRenderableColumn), this.hot.rowIndexMapper.getVisualFromRenderableIndex(endRenderableRow), this.hot.columnIndexMapper.getVisualFromRenderableIndex(endRenderableColumn)];
        return this.hot.runHooks("beforeDrawBorders", visualCorners, borderClassName);
      },
      onBeforeTouchScroll: () => this.hot.runHooks("beforeTouchScroll"),
      onAfterMomentumScroll: () => this.hot.runHooks("afterMomentumScroll"),
      onBeforeStretchingColumnWidth: (stretchedWidth, renderedColumnIndex) => {
        const visualColumnIndex = this.hot.columnIndexMapper.getVisualFromRenderableIndex(renderedColumnIndex);
        return this.hot.runHooks("beforeStretchingColumnWidth", stretchedWidth, visualColumnIndex);
      },
      onModifyRowHeaderWidth: (rowHeaderWidth) => this.hot.runHooks("modifyRowHeaderWidth", rowHeaderWidth),
      onModifyGetCellCoords: (renderableRowIndex, renderableColumnIndex, topmost) => {
        const rowMapper = this.hot.rowIndexMapper;
        const columnMapper = this.hot.columnIndexMapper;
        const visualColumnIndex = renderableColumnIndex >= 0 ? columnMapper.getVisualFromRenderableIndex(renderableColumnIndex) : renderableColumnIndex;
        const visualRowIndex = renderableRowIndex >= 0 ? rowMapper.getVisualFromRenderableIndex(renderableRowIndex) : renderableRowIndex;
        const visualIndexes = this.hot.runHooks("modifyGetCellCoords", visualRowIndex, visualColumnIndex, topmost);
        if (Array.isArray(visualIndexes)) {
          const [visualRowFrom, visualColumnFrom, visualRowTo, visualColumnTo] = visualIndexes;
          return [visualRowFrom >= 0 ? rowMapper.getRenderableFromVisualIndex(rowMapper.getNearestNotHiddenIndex(visualRowFrom, 1)) : visualRowFrom, visualColumnFrom >= 0 ? columnMapper.getRenderableFromVisualIndex(columnMapper.getNearestNotHiddenIndex(visualColumnFrom, 1)) : visualColumnFrom, visualRowTo >= 0 ? rowMapper.getRenderableFromVisualIndex(rowMapper.getNearestNotHiddenIndex(visualRowTo, -1)) : visualRowTo, visualColumnTo >= 0 ? columnMapper.getRenderableFromVisualIndex(columnMapper.getNearestNotHiddenIndex(visualColumnTo, -1)) : visualColumnTo];
        }
      },
      viewportRowCalculatorOverride: (calc) => {
        let viewportOffset = this.settings.viewportRowRenderingOffset;
        if (viewportOffset === "auto" && this.settings.fixedRowsTop) {
          viewportOffset = 10;
        }
        if (viewportOffset > 0 || viewportOffset === "auto") {
          const renderableRows = this.countRenderableRows();
          const firstRenderedRow = calc.startRow;
          const lastRenderedRow = calc.endRow;
          if (typeof viewportOffset === "number") {
            calc.startRow = Math.max(firstRenderedRow - viewportOffset, 0);
            calc.endRow = Math.min(lastRenderedRow + viewportOffset, renderableRows - 1);
          } else if (viewportOffset === "auto") {
            const offset = Math.ceil(lastRenderedRow / renderableRows * 12);
            calc.startRow = Math.max(firstRenderedRow - offset, 0);
            calc.endRow = Math.min(lastRenderedRow + offset, renderableRows - 1);
          }
        }
        this.hot.runHooks("afterViewportRowCalculatorOverride", calc);
      },
      viewportColumnCalculatorOverride: (calc) => {
        let viewportOffset = this.settings.viewportColumnRenderingOffset;
        if (viewportOffset === "auto" && this.settings.fixedColumnsStart) {
          viewportOffset = 10;
        }
        if (viewportOffset > 0 || viewportOffset === "auto") {
          const renderableColumns = this.countRenderableColumns();
          const firstRenderedColumn = calc.startColumn;
          const lastRenderedColumn = calc.endColumn;
          if (typeof viewportOffset === "number") {
            calc.startColumn = Math.max(firstRenderedColumn - viewportOffset, 0);
            calc.endColumn = Math.min(lastRenderedColumn + viewportOffset, renderableColumns - 1);
          }
          if (viewportOffset === "auto") {
            const offset = Math.ceil(lastRenderedColumn / renderableColumns * 6);
            calc.startColumn = Math.max(firstRenderedColumn - offset, 0);
            calc.endColumn = Math.min(lastRenderedColumn + offset, renderableColumns - 1);
          }
        }
        this.hot.runHooks("afterViewportColumnCalculatorOverride", calc);
      },
      rowHeaderWidth: () => this.settings.rowHeaderWidth,
      columnHeaderHeight: () => {
        const columnHeaderHeight = this.hot.runHooks("modifyColumnHeaderHeight");
        return this.settings.columnHeaderHeight || columnHeaderHeight;
      }
    };
    this.hot.runHooks("beforeInitWalkontable", walkontableConfig);
    this._wt = new WalkontableFacade(walkontableConfig);
    this.activeWt = this._wt;
    const spreader = this._wt.wtTable.spreader;
    const {
      width,
      height
    } = this.hot.rootElement.getBoundingClientRect();
    this.setLastSize(width, height);
    this.eventManager.addEventListener(spreader, "mousedown", (event) => {
      if (event.target === spreader && event.which === 3) {
        event.stopPropagation();
      }
    });
    this.eventManager.addEventListener(spreader, "contextmenu", (event) => {
      if (event.target === spreader && event.which === 3) {
        event.stopPropagation();
      }
    });
    this.eventManager.addEventListener(this.hot.rootDocument.documentElement, "click", () => {
      if (this.settings.observeDOMVisibility) {
        if (this._wt.drawInterrupted) {
          this.hot.forceFullRender = true;
          this.render();
        }
      }
    });
  }
  /**
   * Checks if it's possible to create text selection in element.
   *
   * @private
   * @param {HTMLElement} el The element to check.
   * @returns {boolean}
   */
  isTextSelectionAllowed(el) {
    if (isInput(el)) {
      return true;
    }
    const isChildOfTableBody = isChildOf(el, this.hot.view._wt.wtTable.spreader);
    if (this.settings.fragmentSelection === true && isChildOfTableBody) {
      return true;
    }
    if (this.settings.fragmentSelection === "cell" && this.isSelectedOnlyCell() && isChildOfTableBody) {
      return true;
    }
    if (!this.settings.fragmentSelection && this.isCellEdited() && this.isSelectedOnlyCell()) {
      return true;
    }
    return false;
  }
  /**
   * Checks if user's been called mousedown.
   *
   * @private
   * @returns {boolean}
   */
  isMouseDown() {
    return _classPrivateFieldGet2(_mouseDown, this);
  }
  /**
   * Check if selected only one cell.
   *
   * @private
   * @returns {boolean}
   */
  isSelectedOnlyCell() {
    var _this$hot$getSelected, _this$hot$getSelected2;
    return (_this$hot$getSelected = (_this$hot$getSelected2 = this.hot.getSelectedRangeLast()) === null || _this$hot$getSelected2 === void 0 ? void 0 : _this$hot$getSelected2.isSingleCell()) !== null && _this$hot$getSelected !== void 0 ? _this$hot$getSelected : false;
  }
  /**
   * Checks if active cell is editing.
   *
   * @private
   * @returns {boolean}
   */
  isCellEdited() {
    const activeEditor = this.hot.getActiveEditor();
    return activeEditor && activeEditor.isOpened();
  }
  /**
   * `beforeDraw` callback.
   *
   * @private
   * @param {boolean} force If `true` rendering was triggered by a change of settings or data or `false` if
   *                        rendering was triggered by scrolling or moving selection.
   * @param {object} skipRender Object with `skipRender` property, if it is set to `true ` the next rendering
   *                            cycle will be skipped.
   */
  beforeRender(force, skipRender) {
    if (force) {
      this.hot.runHooks("beforeViewRender", this.hot.forceFullRender, skipRender);
    }
  }
  /**
   * `afterRender` callback.
   *
   * @private
   * @param {boolean} force If `true` rendering was triggered by a change of settings or data or `false` if
   *                        rendering was triggered by scrolling or moving selection.
   */
  afterRender(force) {
    if (force) {
      this.hot.runHooks("afterViewRender", this.hot.forceFullRender);
    }
  }
  /**
   * Append row header to a TH element.
   *
   * @private
   * @param {number} visualRowIndex The visual row index.
   * @param {HTMLTableHeaderCellElement} TH The table header element.
   */
  appendRowHeader(visualRowIndex, TH) {
    if (TH.firstChild) {
      const container = TH.firstChild;
      if (!hasClass(container, "relative")) {
        empty(TH);
        this.appendRowHeader(visualRowIndex, TH);
        return;
      }
      this.updateCellHeader(container.querySelector(".rowHeader"), visualRowIndex, this.hot.getRowHeader);
    } else {
      const {
        rootDocument,
        getRowHeader
      } = this.hot;
      const div = rootDocument.createElement("div");
      const span = rootDocument.createElement("span");
      div.className = "relative";
      span.className = "rowHeader";
      this.updateCellHeader(span, visualRowIndex, getRowHeader);
      div.appendChild(span);
      TH.appendChild(div);
    }
    this.hot.runHooks("afterGetRowHeader", visualRowIndex, TH);
  }
  /**
   * Append column header to a TH element.
   *
   * @private
   * @param {number} visualColumnIndex Visual column index.
   * @param {HTMLTableCellElement} TH The table header element.
   * @param {Function} [label] The function that returns the header label.
   * @param {number} [headerLevel=0] The index of header level counting from the top (positive
   *                                 values counting from 0 to N).
   */
  appendColHeader(visualColumnIndex, TH) {
    let label = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.hot.getColHeader;
    let headerLevel = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    if (TH.firstChild) {
      const container = TH.firstChild;
      if (hasClass(container, "relative")) {
        this.updateCellHeader(container.querySelector(".colHeader"), visualColumnIndex, label, headerLevel);
      } else {
        empty(TH);
        this.appendColHeader(visualColumnIndex, TH, label, headerLevel);
      }
    } else {
      const {
        rootDocument
      } = this.hot;
      const div = rootDocument.createElement("div");
      const span = rootDocument.createElement("span");
      div.className = "relative";
      span.className = "colHeader";
      if (this.settings.ariaTags) {
        setAttribute(div, ...A11Y_PRESENTATION());
        setAttribute(span, ...A11Y_PRESENTATION());
      }
      this.updateCellHeader(span, visualColumnIndex, label, headerLevel);
      div.appendChild(span);
      TH.appendChild(div);
    }
    this.hot.runHooks("afterGetColHeader", visualColumnIndex, TH, headerLevel);
  }
  /**
   * Updates header cell content.
   *
   * @private
   * @param {HTMLElement} element Element to update.
   * @param {number} index Row index or column index.
   * @param {Function} content Function which should be returns content for this cell.
   * @param {number} [headerLevel=0] The index of header level counting from the top (positive
   *                                 values counting from 0 to N).
   */
  updateCellHeader(element, index, content) {
    let headerLevel = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    let renderedIndex = index;
    const parentOverlay = this._wt.wtOverlays.getParentOverlay(element) || this._wt;
    if (element.parentNode) {
      if (hasClass(element, "colHeader")) {
        renderedIndex = parentOverlay.wtTable.columnFilter.sourceToRendered(index);
      } else if (hasClass(element, "rowHeader")) {
        renderedIndex = parentOverlay.wtTable.rowFilter.sourceToRendered(index);
      }
    }
    if (renderedIndex > -1) {
      fastInnerHTML(element, content(index, headerLevel));
    } else {
      fastInnerText(element, String.fromCharCode(160));
      addClass(element, "cornerHeader");
    }
  }
  /**
   * Given a element's left (or right in RTL mode) position relative to the viewport, returns maximum
   * element width until the right (or left) edge of the viewport (before scrollbar).
   *
   * @private
   * @param {number} inlineOffset The left (or right in RTL mode) offset.
   * @returns {number}
   */
  maximumVisibleElementWidth(inlineOffset) {
    const workspaceWidth = this._wt.wtViewport.getWorkspaceWidth();
    const maxWidth = workspaceWidth - inlineOffset;
    return maxWidth > 0 ? maxWidth : 0;
  }
  /**
   * Given a element's top position relative to the viewport, returns maximum element height until the bottom
   * edge of the viewport (before scrollbar).
   *
   * @private
   * @param {number} topOffset The top offset.
   * @returns {number}
   */
  maximumVisibleElementHeight(topOffset) {
    const workspaceHeight = this._wt.wtViewport.getWorkspaceHeight();
    const maxHeight = workspaceHeight - topOffset;
    return maxHeight > 0 ? maxHeight : 0;
  }
  /**
   * Sets new dimensions of the container.
   *
   * @param {number} width The table width.
   * @param {number} height The table height.
   */
  setLastSize(width, height) {
    _classPrivateFieldSet2(_lastWidth, this, width);
    _classPrivateFieldSet2(_lastHeight, this, height);
  }
  /**
   * Returns cached dimensions.
   *
   * @returns {object}
   */
  getLastSize() {
    return {
      width: _classPrivateFieldGet2(_lastWidth, this),
      height: _classPrivateFieldGet2(_lastHeight, this)
    };
  }
  /**
   * Returns the first fully visible row in the table viewport.
   *
   * @returns {number}
   */
  getFirstFullyVisibleRow() {
    return this.hot.rowIndexMapper.getVisualFromRenderableIndex(this.hot.view._wt.wtScroll.getFirstVisibleRow());
  }
  /**
   * Returns the last fully visible row in the table viewport.
   *
   * @returns {number}
   */
  getLastFullyVisibleRow() {
    return this.hot.rowIndexMapper.getVisualFromRenderableIndex(this.hot.view._wt.wtScroll.getLastVisibleRow());
  }
  /**
   * Returns the first fully visible column in the table viewport.
   *
   * @returns {number}
   */
  getFirstFullyVisibleColumn() {
    return this.hot.columnIndexMapper.getVisualFromRenderableIndex(this.hot.view._wt.wtScroll.getFirstVisibleColumn());
  }
  /**
   * Returns the last fully visible column in the table viewport.
   *
   * @returns {number}
   */
  getLastFullyVisibleColumn() {
    return this.hot.columnIndexMapper.getVisualFromRenderableIndex(this.hot.view._wt.wtScroll.getLastVisibleColumn());
  }
  /**
   * Returns the first partially visible row in the table viewport.
   *
   * @returns {number}
   */
  getFirstPartiallyVisibleRow() {
    return this.hot.rowIndexMapper.getVisualFromRenderableIndex(this.hot.view._wt.wtScroll.getFirstPartiallyVisibleRow());
  }
  /**
   * Returns the last partially visible row in the table viewport.
   *
   * @returns {number}
   */
  getLastPartiallyVisibleRow() {
    return this.hot.rowIndexMapper.getVisualFromRenderableIndex(this.hot.view._wt.wtScroll.getLastPartiallyVisibleRow());
  }
  /**
   * Returns the first partially visible column in the table viewport.
   *
   * @returns {number}
   */
  getFirstPartiallyVisibleColumn() {
    return this.hot.columnIndexMapper.getVisualFromRenderableIndex(this.hot.view._wt.wtScroll.getFirstPartiallyVisibleColumn());
  }
  /**
   * Returns the last partially visible column in the table viewport.
   *
   * @returns {number}
   */
  getLastPartiallyVisibleColumn() {
    return this.hot.columnIndexMapper.getVisualFromRenderableIndex(this.hot.view._wt.wtScroll.getLastPartiallyVisibleColumn());
  }
  /**
   * Returns the total count of the rendered column headers.
   *
   * @returns {number}
   */
  getColumnHeadersCount() {
    return _classPrivateFieldGet2(_columnHeadersCount, this);
  }
  /**
   * Returns the total count of the rendered row headers.
   *
   * @returns {number}
   */
  getRowHeadersCount() {
    return _classPrivateFieldGet2(_rowHeadersCount, this);
  }
  /**
   * Returns the table's viewport width. When the table has defined the size of the container,
   * and the columns do not fill the entire viewport, the viewport width is equal to the sum of
   * the columns' widths.
   *
   * @returns {number}
   */
  getViewportWidth() {
    return this.hot.view._wt.wtViewport.getViewportWidth();
  }
  /**
   * Returns the table's total width including the scrollbar width.
   *
   * @returns {number}
   */
  getWorkspaceWidth() {
    return this.hot.view._wt.wtViewport.getWorkspaceWidth();
  }
  /**
   * Returns the table's viewport height. When the table has defined the size of the container,
   * and the rows do not fill the entire viewport, the viewport height is equal to the sum of
   * the rows' heights.
   *
   * @returns {number}
   */
  getViewportHeight() {
    return this.hot.view._wt.wtViewport.getViewportHeight();
  }
  /**
   * Returns the table's total height including the scrollbar height.
   *
   * @returns {number}
   */
  getWorkspaceHeight() {
    return this.hot.view._wt.wtViewport.getWorkspaceHeight();
  }
  /**
   * Destroys internal WalkOnTable's instance. Detaches all of the bonded listeners.
   *
   * @private
   */
  destroy() {
    this._wt.destroy();
    this.eventManager.destroy();
  }
};
function _getAriaColcount() {
  return parseInt(this.hot.rootElement.getAttribute(A11Y_COLCOUNT()[0]), 10);
}
function _updateAriaColcount(delta) {
  const colCount = _assertClassBrand3(_TableView_brand, this, _getAriaColcount).call(this) + delta;
  setAttribute(this.hot.rootElement, ...A11Y_COLCOUNT(colCount));
}
var tableView_default = TableView;

// node_modules/handsontable/dataMap/dataSource.mjs
function _defineProperty3(obj, key, value) {
  key = _toPropertyKey3(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey3(t) {
  var i = _toPrimitive3(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive3(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var DataSource = class {
  constructor(hotInstance) {
    let dataSource = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    _defineProperty3(this, "hot", void 0);
    _defineProperty3(this, "data", void 0);
    _defineProperty3(this, "dataType", "array");
    _defineProperty3(this, "colToProp", () => {
    });
    _defineProperty3(this, "propToCol", () => {
    });
    this.hot = hotInstance;
    this.data = dataSource;
  }
  /**
   * Run the `modifyRowData` hook and return either the modified or the source data for the provided row.
   *
   * @private
   * @param {number} rowIndex Row index.
   * @returns {Array|object} Source or modified row of data.
   */
  modifyRowData(rowIndex) {
    let modifyRowData;
    if (this.hot.hasHook("modifyRowData")) {
      modifyRowData = this.hot.runHooks("modifyRowData", rowIndex);
    }
    return modifyRowData !== void 0 && !Number.isInteger(modifyRowData) ? modifyRowData : this.data[rowIndex];
  }
  /**
   * Get all data.
   *
   * @param {boolean} [toArray=false] If `true` return source data as an array of arrays even when source data was provided
   *                                  in another format.
   * @returns {Array}
   */
  getData() {
    let toArray = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    if (!this.data || this.data.length === 0) {
      return this.data;
    }
    return this.getByRange(null, null, toArray);
  }
  /**
   * Set new data source.
   *
   * @param {Array} data The new data.
   */
  setData(data) {
    this.data = data;
  }
  /**
   * Returns array of column values from the data source. `column` is the index of the row in the data source.
   *
   * @param {number} column Visual column index.
   * @returns {Array}
   */
  getAtColumn(column) {
    const result = [];
    arrayEach(this.data, (row, rowIndex) => {
      const value = this.getAtCell(rowIndex, column);
      result.push(value);
    });
    return result;
  }
  /**
   * Returns a single row of the data or a subset of its columns. If a column range or `toArray` arguments are provided, it
   * operates only on the columns declared by the `columns` setting or the data schema.
   *
   * @param {number} row Physical row index.
   * @param {number} [startColumn] Starting index for the column range (optional).
   * @param {number} [endColumn] Ending index for the column range (optional).
   * @param {boolean} [toArray=false] `true` if the returned value should be forced to be presented as an array.
   * @returns {Array|object}
   */
  getAtRow(row, startColumn, endColumn) {
    let toArray = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    const getAllProps = startColumn === void 0 && endColumn === void 0;
    const {
      dataDotNotation
    } = this.hot.getSettings();
    let dataRow = null;
    let newDataRow = null;
    dataRow = this.modifyRowData(row);
    if (Array.isArray(dataRow)) {
      newDataRow = [];
      if (getAllProps) {
        dataRow.forEach((cell, column) => {
          newDataRow[column] = this.getAtPhysicalCell(row, column, dataRow);
        });
      } else {
        rangeEach(startColumn, endColumn, (column) => {
          newDataRow[column - startColumn] = this.getAtPhysicalCell(row, column, dataRow);
        });
      }
    } else if (isObject(dataRow) || isFunction(dataRow)) {
      if (toArray) {
        newDataRow = [];
      } else {
        newDataRow = {};
      }
      if (!getAllProps || toArray) {
        const rangeStart = 0;
        const rangeEnd = this.countFirstRowKeys() - 1;
        rangeEach(rangeStart, rangeEnd, (column) => {
          const prop = this.colToProp(column);
          if (column >= (startColumn || rangeStart) && column <= (endColumn || rangeEnd) && !Number.isInteger(prop)) {
            const cellValue = this.getAtPhysicalCell(row, prop, dataRow);
            if (toArray) {
              newDataRow.push(cellValue);
            } else if (dataDotNotation) {
              setProperty(newDataRow, prop, cellValue);
            } else {
              newDataRow[prop] = cellValue;
            }
          }
        });
      } else {
        objectEach(dataRow, (value, prop) => {
          const cellValue = this.getAtPhysicalCell(row, prop, dataRow);
          if (dataDotNotation) {
            setProperty(newDataRow, prop, cellValue);
          } else {
            newDataRow[prop] = cellValue;
          }
        });
      }
    }
    return newDataRow;
  }
  /**
   * Set the provided value in the source data set at the provided coordinates.
   *
   * @param {number} row Physical row index.
   * @param {number|string} column Property name / physical column index.
   * @param {*} value The value to be set at the provided coordinates.
   */
  setAtCell(row, column, value) {
    if (row >= this.countRows() || column >= this.countFirstRowKeys()) {
      return;
    }
    if (this.hot.hasHook("modifySourceData")) {
      const valueHolder = createObjectPropListener(value);
      this.hot.runHooks("modifySourceData", row, column, valueHolder, "set");
      if (valueHolder.isTouched()) {
        value = valueHolder.value;
      }
    }
    if (!Number.isInteger(column)) {
      setProperty(this.data[row], column, value);
    } else {
      this.data[row][column] = value;
    }
  }
  /**
   * Get data from the source data set using the physical indexes.
   *
   * @private
   * @param {number} row Physical row index.
   * @param {string|number|Function} column Physical column index / property / function.
   * @param {Array|object} dataRow A representation of a data row.
   * @returns {*} Value at the provided coordinates.
   */
  getAtPhysicalCell(row, column, dataRow) {
    let result = null;
    if (dataRow) {
      if (typeof column === "string") {
        const {
          dataDotNotation
        } = this.hot.getSettings();
        result = dataDotNotation ? getProperty(dataRow, column) : dataRow[column];
      } else if (typeof column === "function") {
        result = column(dataRow);
      } else {
        result = dataRow[column];
      }
    }
    if (this.hot.hasHook("modifySourceData")) {
      const valueHolder = createObjectPropListener(result);
      this.hot.runHooks("modifySourceData", row, column, valueHolder, "get");
      if (valueHolder.isTouched()) {
        result = valueHolder.value;
      }
    }
    return result;
  }
  /**
   * Returns a single value from the data.
   *
   * @param {number} row Physical row index.
   * @param {number} columnOrProp Visual column index or property.
   * @returns {*}
   */
  getAtCell(row, columnOrProp) {
    const dataRow = this.modifyRowData(row);
    return this.getAtPhysicalCell(row, this.colToProp(columnOrProp), dataRow);
  }
  /**
   * Returns source data by passed range.
   *
   * @param {object} [start] Object with physical `row` and `col` keys (or visual column index, if data type is an array of objects).
   * @param {object} [end] Object with physical `row` and `col` keys (or visual column index, if data type is an array of objects).
   * @param {boolean} [toArray=false] If `true` return source data as an array of arrays even when source data was provided
   *                                  in another format.
   * @returns {Array}
   */
  getByRange() {
    let start = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    let end = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    let toArray = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    let getAllProps = false;
    let startRow = null;
    let startCol = null;
    let endRow = null;
    let endCol = null;
    if (start === null || end === null) {
      getAllProps = true;
      startRow = 0;
      endRow = this.countRows() - 1;
    } else {
      startRow = Math.min(start.row, end.row);
      startCol = Math.min(start.col, end.col);
      endRow = Math.max(start.row, end.row);
      endCol = Math.max(start.col, end.col);
    }
    const result = [];
    rangeEach(startRow, endRow, (currentRow) => {
      result.push(getAllProps ? this.getAtRow(currentRow, void 0, void 0, toArray) : this.getAtRow(currentRow, startCol, endCol, toArray));
    });
    return result;
  }
  /**
   * Count number of rows.
   *
   * @returns {number}
   */
  countRows() {
    if (this.hot.hasHook("modifySourceLength")) {
      const modifiedSourceLength = this.hot.runHooks("modifySourceLength");
      if (Number.isInteger(modifiedSourceLength)) {
        return modifiedSourceLength;
      }
    }
    return this.data.length;
  }
  /**
   * Count number of columns.
   *
   * @returns {number}
   */
  countFirstRowKeys() {
    return countFirstRowKeys(this.data);
  }
  /**
   * Destroy instance.
   */
  destroy() {
    this.data = null;
    this.hot = null;
  }
};
var dataSource_default = DataSource;

// node_modules/handsontable/i18n/utils.mjs
function extendNotExistingKeys(target, extension) {
  objectEach(extension, (value, key) => {
    if (isUndefined(target[key])) {
      target[key] = value;
    }
  });
  return target;
}
function normalizeLanguageCode(languageCode) {
  const languageCodePattern = /^([a-zA-Z]{2})-([a-zA-Z]{2})$/;
  const partsOfLanguageCode = languageCodePattern.exec(languageCode);
  if (partsOfLanguageCode) {
    return `${partsOfLanguageCode[1].toLowerCase()}-${partsOfLanguageCode[2].toUpperCase()}`;
  }
  return languageCode;
}
function warnUserAboutLanguageRegistration(languageCode) {
  if (isDefined(languageCode)) {
    error(toSingleLine`Language with code "${languageCode}" was not found. You should register particular language\x20
    before using it. Read more about this issue at: https://docs.handsontable.com/i18n/missing-language-code.`);
  }
}

// node_modules/handsontable/i18n/phraseFormatters/pluralize.mjs
function pluralize(phrasePropositions, pluralForm) {
  const isPluralizable = Array.isArray(phrasePropositions) && Number.isInteger(pluralForm);
  if (isPluralizable) {
    return phrasePropositions[pluralForm];
  }
  return phrasePropositions;
}

// node_modules/handsontable/i18n/phraseFormatters/index.mjs
var {
  register: registerGloballyPhraseFormatter,
  getValues: getGlobalPhraseFormatters
} = staticRegister("phraseFormatters");
function register(name, formatterFn) {
  registerGloballyPhraseFormatter(name, formatterFn);
}
function getAll() {
  return getGlobalPhraseFormatters();
}
register("pluralize", pluralize);

// node_modules/handsontable/i18n/languages/en-US.mjs
var dictionary = {
  languageCode: "en-US",
  [CONTEXTMENU_ITEMS_NO_ITEMS]: "No available options",
  [CONTEXTMENU_ITEMS_ROW_ABOVE]: "Insert row above",
  [CONTEXTMENU_ITEMS_ROW_BELOW]: "Insert row below",
  [CONTEXTMENU_ITEMS_INSERT_LEFT]: "Insert column left",
  [CONTEXTMENU_ITEMS_INSERT_RIGHT]: "Insert column right",
  [CONTEXTMENU_ITEMS_REMOVE_ROW]: ["Remove row", "Remove rows"],
  [CONTEXTMENU_ITEMS_REMOVE_COLUMN]: ["Remove column", "Remove columns"],
  [CONTEXTMENU_ITEMS_UNDO]: "Undo",
  [CONTEXTMENU_ITEMS_REDO]: "Redo",
  [CONTEXTMENU_ITEMS_READ_ONLY]: "Read only",
  [CONTEXTMENU_ITEMS_CLEAR_COLUMN]: "Clear column",
  [CONTEXTMENU_ITEMS_ALIGNMENT]: "Alignment",
  [CONTEXTMENU_ITEMS_ALIGNMENT_LEFT]: "Left",
  [CONTEXTMENU_ITEMS_ALIGNMENT_CENTER]: "Center",
  [CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT]: "Right",
  [CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY]: "Justify",
  [CONTEXTMENU_ITEMS_ALIGNMENT_TOP]: "Top",
  [CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE]: "Middle",
  [CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM]: "Bottom",
  [CONTEXTMENU_ITEMS_FREEZE_COLUMN]: "Freeze column",
  [CONTEXTMENU_ITEMS_UNFREEZE_COLUMN]: "Unfreeze column",
  [CONTEXTMENU_ITEMS_BORDERS]: "Borders",
  [CONTEXTMENU_ITEMS_BORDERS_TOP]: "Top",
  [CONTEXTMENU_ITEMS_BORDERS_RIGHT]: "Right",
  [CONTEXTMENU_ITEMS_BORDERS_BOTTOM]: "Bottom",
  [CONTEXTMENU_ITEMS_BORDERS_LEFT]: "Left",
  [CONTEXTMENU_ITEMS_REMOVE_BORDERS]: "Remove border(s)",
  [CONTEXTMENU_ITEMS_ADD_COMMENT]: "Add comment",
  [CONTEXTMENU_ITEMS_EDIT_COMMENT]: "Edit comment",
  [CONTEXTMENU_ITEMS_REMOVE_COMMENT]: "Delete comment",
  [CONTEXTMENU_ITEMS_READ_ONLY_COMMENT]: "Read-only comment",
  [CONTEXTMENU_ITEMS_MERGE_CELLS]: "Merge cells",
  [CONTEXTMENU_ITEMS_UNMERGE_CELLS]: "Unmerge cells",
  [CONTEXTMENU_ITEMS_COPY]: "Copy",
  [CONTEXTMENU_ITEMS_COPY_WITH_COLUMN_HEADERS]: ["Copy with header", "Copy with headers"],
  [CONTEXTMENU_ITEMS_COPY_WITH_COLUMN_GROUP_HEADERS]: ["Copy with group header", "Copy with group headers"],
  [CONTEXTMENU_ITEMS_COPY_COLUMN_HEADERS_ONLY]: ["Copy header only", "Copy headers only"],
  [CONTEXTMENU_ITEMS_CUT]: "Cut",
  [CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD]: "Insert child row",
  [CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD]: "Detach from parent",
  [CONTEXTMENU_ITEMS_HIDE_COLUMN]: ["Hide column", "Hide columns"],
  [CONTEXTMENU_ITEMS_SHOW_COLUMN]: ["Show column", "Show columns"],
  [CONTEXTMENU_ITEMS_HIDE_ROW]: ["Hide row", "Hide rows"],
  [CONTEXTMENU_ITEMS_SHOW_ROW]: ["Show row", "Show rows"],
  [FILTERS_CONDITIONS_NONE]: "None",
  [FILTERS_CONDITIONS_EMPTY]: "Is empty",
  [FILTERS_CONDITIONS_NOT_EMPTY]: "Is not empty",
  [FILTERS_CONDITIONS_EQUAL]: "Is equal to",
  [FILTERS_CONDITIONS_NOT_EQUAL]: "Is not equal to",
  [FILTERS_CONDITIONS_BEGINS_WITH]: "Begins with",
  [FILTERS_CONDITIONS_ENDS_WITH]: "Ends with",
  [FILTERS_CONDITIONS_CONTAINS]: "Contains",
  [FILTERS_CONDITIONS_NOT_CONTAIN]: "Does not contain",
  [FILTERS_CONDITIONS_GREATER_THAN]: "Greater than",
  [FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL]: "Greater than or equal to",
  [FILTERS_CONDITIONS_LESS_THAN]: "Less than",
  [FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL]: "Less than or equal to",
  [FILTERS_CONDITIONS_BETWEEN]: "Is between",
  [FILTERS_CONDITIONS_NOT_BETWEEN]: "Is not between",
  [FILTERS_CONDITIONS_AFTER]: "After",
  [FILTERS_CONDITIONS_BEFORE]: "Before",
  [FILTERS_CONDITIONS_TODAY]: "Today",
  [FILTERS_CONDITIONS_TOMORROW]: "Tomorrow",
  [FILTERS_CONDITIONS_YESTERDAY]: "Yesterday",
  [FILTERS_VALUES_BLANK_CELLS]: "Blank cells",
  [FILTERS_DIVS_FILTER_BY_CONDITION]: "Filter by condition",
  [FILTERS_DIVS_FILTER_BY_VALUE]: "Filter by value",
  [FILTERS_LABELS_CONJUNCTION]: "And",
  [FILTERS_LABELS_DISJUNCTION]: "Or",
  [FILTERS_BUTTONS_SELECT_ALL]: "Select all",
  [FILTERS_BUTTONS_CLEAR]: "Clear",
  [FILTERS_BUTTONS_OK]: "OK",
  [FILTERS_BUTTONS_CANCEL]: "Cancel",
  [FILTERS_BUTTONS_PLACEHOLDER_SEARCH]: "Search",
  [FILTERS_BUTTONS_PLACEHOLDER_VALUE]: "Value",
  [FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE]: "Second value",
  [CHECKBOX_CHECKED]: "Checked",
  [CHECKBOX_UNCHECKED]: "Unchecked"
};
var en_US_default = dictionary;

// node_modules/handsontable/i18n/registry.mjs
var dictionaryKeys = constants_exports;
var DEFAULT_LANGUAGE_CODE = en_US_default.languageCode;
var {
  register: registerGloballyLanguageDictionary,
  getItem: getGlobalLanguageDictionary,
  hasItem: hasGlobalLanguageDictionary,
  getValues: getGlobalLanguagesDictionaries
} = staticRegister("languagesDictionaries");
registerLanguageDictionary(en_US_default);
function registerLanguageDictionary(languageCodeOrDictionary, dictionary2) {
  let languageCode = languageCodeOrDictionary;
  let dictionaryObject = dictionary2;
  if (isObject(languageCodeOrDictionary)) {
    dictionaryObject = languageCodeOrDictionary;
    languageCode = dictionaryObject.languageCode;
  }
  extendLanguageDictionary(languageCode, dictionaryObject);
  registerGloballyLanguageDictionary(languageCode, deepClone(dictionaryObject));
  return deepClone(dictionaryObject);
}
function extendLanguageDictionary(languageCode, dictionary2) {
  if (languageCode !== DEFAULT_LANGUAGE_CODE) {
    extendNotExistingKeys(dictionary2, getGlobalLanguageDictionary(DEFAULT_LANGUAGE_CODE));
  }
}
function getLanguageDictionary(languageCode) {
  if (!hasLanguageDictionary(languageCode)) {
    return null;
  }
  return deepClone(getGlobalLanguageDictionary(languageCode));
}
function hasLanguageDictionary(languageCode) {
  return hasGlobalLanguageDictionary(languageCode);
}
function getLanguagesDictionaries() {
  return getGlobalLanguagesDictionaries();
}
function getTranslatedPhrase(languageCode, dictionaryKey, argumentsForFormatters) {
  const languageDictionary = getLanguageDictionary(languageCode);
  if (languageDictionary === null) {
    return null;
  }
  const phrasePropositions = languageDictionary[dictionaryKey];
  if (isUndefined(phrasePropositions)) {
    return null;
  }
  const formattedPhrase = getFormattedPhrase(phrasePropositions, argumentsForFormatters);
  if (Array.isArray(formattedPhrase)) {
    return formattedPhrase[0];
  }
  return formattedPhrase;
}
function getFormattedPhrase(phrasePropositions, argumentsForFormatters) {
  let formattedPhrasePropositions = phrasePropositions;
  arrayEach(getAll(), (formatter) => {
    formattedPhrasePropositions = formatter(phrasePropositions, argumentsForFormatters);
  });
  return formattedPhrasePropositions;
}
function getValidLanguageCode(languageCode) {
  let normalizedLanguageCode = normalizeLanguageCode(languageCode);
  if (!hasLanguageDictionary(normalizedLanguageCode)) {
    normalizedLanguageCode = DEFAULT_LANGUAGE_CODE;
    warnUserAboutLanguageRegistration(languageCode);
  }
  return normalizedLanguageCode;
}

// node_modules/handsontable/dataMap/dataMap.mjs
function _defineProperty4(obj, key, value) {
  key = _toPropertyKey4(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey4(t) {
  var i = _toPrimitive4(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive4(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var DataMap = class _DataMap {
  /**
   * @type {number}
   */
  static get DESTINATION_RENDERER() {
    return 1;
  }
  /**
   * @type {number}
   */
  static get DESTINATION_CLIPBOARD_GENERATOR() {
    return 2;
  }
  /**
   * Instance of {@link Handsontable}.
   *
   * @private
   * @type {Handsontable}
   */
  /**
   * @param {object} hotInstance Instance of Handsontable.
   * @param {Array} data Array of arrays or array of objects containing data.
   * @param {MetaManager} metaManager The meta manager instance.
   */
  constructor(hotInstance, data, metaManager) {
    _defineProperty4(this, "hot", void 0);
    _defineProperty4(this, "metaManager", void 0);
    _defineProperty4(this, "tableMeta", void 0);
    _defineProperty4(this, "dataSource", void 0);
    _defineProperty4(this, "duckSchema", void 0);
    _defineProperty4(this, "colToPropCache", void 0);
    _defineProperty4(this, "propToColCache", void 0);
    this.hot = hotInstance;
    this.metaManager = metaManager;
    this.tableMeta = metaManager.getTableMeta();
    this.dataSource = data;
    this.duckSchema = this.createDuckSchema();
    this.createMap();
  }
  /**
   * Generates cache for property to and from column addressation.
   */
  createMap() {
    const schema = this.getSchema();
    if (typeof schema === "undefined") {
      throw new Error("trying to create `columns` definition but you didn't provide `schema` nor `data`");
    }
    const columns = this.tableMeta.columns;
    let i;
    this.colToPropCache = [];
    this.propToColCache = /* @__PURE__ */ new Map();
    if (columns) {
      let columnsLen = 0;
      let filteredIndex = 0;
      let columnsAsFunc = false;
      if (typeof columns === "function") {
        const schemaLen = deepObjectSize(schema);
        columnsLen = schemaLen > 0 ? schemaLen : this.countFirstRowKeys();
        columnsAsFunc = true;
      } else {
        const maxCols = this.tableMeta.maxCols;
        columnsLen = Math.min(maxCols, columns.length);
      }
      for (i = 0; i < columnsLen; i++) {
        const column = columnsAsFunc ? columns(i) : columns[i];
        if (isObject(column)) {
          if (typeof column.data !== "undefined") {
            const index = columnsAsFunc ? filteredIndex : i;
            this.colToPropCache[index] = column.data;
            this.propToColCache.set(column.data, index);
          }
          filteredIndex += 1;
        }
      }
    } else {
      this.recursiveDuckColumns(schema);
    }
  }
  /**
   * Get the amount of physical columns in the first data row.
   *
   * @returns {number} Amount of physical columns in the first data row.
   */
  countFirstRowKeys() {
    return countFirstRowKeys(this.dataSource);
  }
  /**
   * Generates columns' translation cache.
   *
   * @param {object} schema An object to generate schema from.
   * @param {number} lastCol The column index.
   * @param {number} parent The property cache for recursive calls.
   * @returns {number}
   */
  recursiveDuckColumns(schema, lastCol, parent) {
    let lastColumn = lastCol;
    let propertyParent = parent;
    let prop;
    if (typeof lastColumn === "undefined") {
      lastColumn = 0;
      propertyParent = "";
    }
    if (typeof schema === "object" && !Array.isArray(schema)) {
      objectEach(schema, (value, key) => {
        if (value === null) {
          prop = propertyParent + key;
          this.colToPropCache.push(prop);
          this.propToColCache.set(prop, lastColumn);
          lastColumn += 1;
        } else {
          lastColumn = this.recursiveDuckColumns(value, lastColumn, `${key}.`);
        }
      });
    }
    return lastColumn;
  }
  /**
   * Returns property name that corresponds with the given column index.
   *
   * @param {string|number} column Visual column index or another passed argument.
   * @returns {string|number} Column property, physical column index or passed argument.
   */
  colToProp(column) {
    if (Number.isInteger(column) === false) {
      return column;
    }
    const physicalColumn = this.hot.toPhysicalColumn(column);
    if (physicalColumn === null) {
      return column;
    }
    if (this.colToPropCache && isDefined(this.colToPropCache[physicalColumn])) {
      return this.colToPropCache[physicalColumn];
    }
    return physicalColumn;
  }
  /**
   * Translates property into visual column index.
   *
   * @param {string|number} prop Column property which may be also a physical column index.
   * @returns {string|number} Visual column index or passed argument.
   */
  propToCol(prop) {
    const cachedPhysicalIndex = this.propToColCache.get(prop);
    if (isDefined(cachedPhysicalIndex)) {
      return this.hot.toVisualColumn(cachedPhysicalIndex);
    }
    const visualColumn = this.hot.toVisualColumn(prop);
    if (visualColumn === null) {
      return prop;
    }
    return visualColumn;
  }
  /**
   * Returns data's schema.
   *
   * @returns {object}
   */
  getSchema() {
    const schema = this.tableMeta.dataSchema;
    if (schema) {
      if (typeof schema === "function") {
        return schema();
      }
      return schema;
    }
    return this.duckSchema;
  }
  /**
   * Creates the duck schema based on the current dataset.
   *
   * @returns {Array|object}
   */
  createDuckSchema() {
    return this.dataSource && this.dataSource[0] ? duckSchema(this.dataSource[0]) : {};
  }
  /**
   * Refresh the data schema.
   */
  refreshDuckSchema() {
    this.duckSchema = this.createDuckSchema();
  }
  /**
   * Creates row at the bottom of the data array.
   *
   * @param {number} [index] Physical index of the row before which the new row will be inserted.
   * @param {number} [amount=1] An amount of rows to add.
   * @param {object} [options] Additional options for created rows.
   * @param {string} [options.source] Source of method call.
   * @param {'above'|'below'} [options.mode] Sets where the row is inserted: above or below the passed index.
   * @fires Hooks#afterCreateRow
   * @returns {number} Returns number of created rows.
   */
  createRow(index) {
    let amount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    let {
      source,
      mode = "above"
    } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const sourceRowsCount = this.hot.countSourceRows();
    let physicalRowIndex = sourceRowsCount;
    let numberOfCreatedRows = 0;
    let rowIndex = index;
    if (typeof rowIndex !== "number" || rowIndex >= sourceRowsCount) {
      rowIndex = sourceRowsCount;
    }
    if (rowIndex < this.hot.countRows()) {
      physicalRowIndex = this.hot.toPhysicalRow(rowIndex);
    }
    const continueProcess = this.hot.runHooks("beforeCreateRow", rowIndex, amount, source);
    if (continueProcess === false || physicalRowIndex === null) {
      return {
        delta: 0
      };
    }
    const maxRows = this.tableMeta.maxRows;
    const columnCount = this.getSchema().length;
    const rowsToAdd = [];
    while (numberOfCreatedRows < amount && sourceRowsCount + numberOfCreatedRows < maxRows) {
      let row = null;
      if (this.hot.dataType === "array") {
        if (this.tableMeta.dataSchema) {
          row = deepClone(this.getSchema());
        } else {
          row = [];
          rangeEach(columnCount - 1, () => row.push(null));
        }
      } else if (this.hot.dataType === "function") {
        row = this.tableMeta.dataSchema(rowIndex + numberOfCreatedRows);
      } else {
        row = {};
        deepExtend(row, this.getSchema());
      }
      rowsToAdd.push(row);
      numberOfCreatedRows += 1;
    }
    this.hot.rowIndexMapper.insertIndexes(rowIndex, numberOfCreatedRows);
    if (mode === "below") {
      physicalRowIndex = Math.min(physicalRowIndex + 1, sourceRowsCount);
    }
    this.spliceData(physicalRowIndex, 0, rowsToAdd);
    const newVisualRowIndex = this.hot.toVisualRow(physicalRowIndex);
    if (this.hot.countSourceRows() === rowsToAdd.length) {
      this.hot.columnIndexMapper.initToLength(this.hot.getInitialColumnCount());
    }
    if (numberOfCreatedRows > 0) {
      if (index === void 0 || index === null) {
        this.metaManager.createRow(null, numberOfCreatedRows);
      } else if (source !== "auto") {
        this.metaManager.createRow(physicalRowIndex, amount);
      }
    }
    this.hot.runHooks("afterCreateRow", newVisualRowIndex, numberOfCreatedRows, source);
    this.hot.forceFullRender = true;
    return {
      delta: numberOfCreatedRows,
      startPhysicalIndex: physicalRowIndex
    };
  }
  /**
   * Creates column at the right of the data array.
   *
   * @param {number} [index] Visual index of the column before which the new column will be inserted.
   * @param {number} [amount=1] An amount of columns to add.
   * @param {object} [options] Additional options for created columns.
   * @param {string} [options.source] Source of method call.
   * @param {'start'|'end'} [options.mode] Sets where the column is inserted: at the start (left in [LTR](@/api/options.md#layoutdirection), right in [RTL](@/api/options.md#layoutdirection)) or at the end (right in LTR, left in LTR)
   * the passed index.
   * @fires Hooks#afterCreateCol
   * @returns {number} Returns number of created columns.
   */
  createCol(index) {
    let amount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    let {
      source,
      mode = "start"
    } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!this.hot.isColumnModificationAllowed()) {
      throw new Error("Cannot create new column. When data source in an object, you can only have as much columns as defined in first data row, data schema or in the 'columns' setting.If you want to be able to add new columns, you have to use array datasource.");
    }
    const dataSource = this.dataSource;
    const maxCols = this.tableMeta.maxCols;
    const countSourceCols = this.hot.countSourceCols();
    let columnIndex = index;
    if (typeof columnIndex !== "number" || columnIndex >= countSourceCols) {
      columnIndex = countSourceCols;
    }
    const continueProcess = this.hot.runHooks("beforeCreateCol", columnIndex, amount, source);
    if (continueProcess === false) {
      return {
        delta: 0
      };
    }
    let physicalColumnIndex = countSourceCols;
    if (columnIndex < this.hot.countCols()) {
      physicalColumnIndex = this.hot.toPhysicalColumn(columnIndex);
    }
    const numberOfSourceRows = this.hot.countSourceRows();
    let nrOfColumns = this.hot.countCols();
    let numberOfCreatedCols = 0;
    let currentIndex = physicalColumnIndex;
    if (mode === "end") {
      currentIndex = Math.min(currentIndex + 1, countSourceCols);
    }
    const startPhysicalIndex = currentIndex;
    while (numberOfCreatedCols < amount && nrOfColumns < maxCols) {
      if (typeof columnIndex !== "number" || columnIndex >= nrOfColumns) {
        if (numberOfSourceRows > 0) {
          for (let row = 0; row < numberOfSourceRows; row += 1) {
            if (typeof dataSource[row] === "undefined") {
              dataSource[row] = [];
            }
            dataSource[row].push(null);
          }
        } else {
          dataSource.push([null]);
        }
      } else {
        for (let row = 0; row < numberOfSourceRows; row++) {
          dataSource[row].splice(currentIndex, 0, null);
        }
      }
      numberOfCreatedCols += 1;
      currentIndex += 1;
      nrOfColumns += 1;
    }
    this.hot.columnIndexMapper.insertIndexes(columnIndex, numberOfCreatedCols);
    if (numberOfCreatedCols > 0) {
      if (index === void 0 || index === null) {
        this.metaManager.createColumn(null, numberOfCreatedCols);
      } else if (source !== "auto") {
        this.metaManager.createColumn(startPhysicalIndex, amount);
      }
    }
    const newVisualColumnIndex = this.hot.toVisualColumn(startPhysicalIndex);
    this.hot.runHooks("afterCreateCol", newVisualColumnIndex, numberOfCreatedCols, source);
    this.hot.forceFullRender = true;
    this.refreshDuckSchema();
    return {
      delta: numberOfCreatedCols,
      startPhysicalIndex
    };
  }
  /**
   * Removes row from the data array.
   *
   * @fires Hooks#beforeRemoveRow
   * @fires Hooks#afterRemoveRow
   * @param {number} [index] Visual index of the row to be removed. If not provided, the last row will be removed.
   * @param {number} [amount=1] Amount of the rows to be removed. If not provided, one row will be removed.
   * @param {string} [source] Source of method call.
   * @returns {boolean} Returns `false` when action was cancelled, otherwise `true`.
   */
  removeRow(index) {
    let amount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    let source = arguments.length > 2 ? arguments[2] : void 0;
    let rowIndex = Number.isInteger(index) ? index : -amount;
    const removedPhysicalIndexes = this.visualRowsToPhysical(rowIndex, amount);
    const sourceRowsLength = this.hot.countSourceRows();
    rowIndex = (sourceRowsLength + rowIndex) % sourceRowsLength;
    const actionWasNotCancelled = this.hot.runHooks("beforeRemoveRow", rowIndex, removedPhysicalIndexes.length, removedPhysicalIndexes, source);
    if (actionWasNotCancelled === false) {
      return false;
    }
    const numberOfRemovedIndexes = removedPhysicalIndexes.length;
    this.filterData(rowIndex, numberOfRemovedIndexes, removedPhysicalIndexes);
    if (rowIndex < this.hot.countRows()) {
      this.hot.rowIndexMapper.removeIndexes(removedPhysicalIndexes);
      const customDefinedColumns = isDefined(this.tableMeta.columns) || isDefined(this.tableMeta.dataSchema);
      if (this.hot.rowIndexMapper.getNotTrimmedIndexesLength() === 0 && customDefinedColumns === false) {
        this.hot.columnIndexMapper.setIndexesSequence([]);
      }
    }
    const descendingPhysicalRows = removedPhysicalIndexes.slice(0).sort((a, b) => b - a);
    descendingPhysicalRows.forEach((rowPhysicalIndex) => {
      this.metaManager.removeRow(rowPhysicalIndex, 1);
    });
    this.hot.runHooks("afterRemoveRow", rowIndex, numberOfRemovedIndexes, removedPhysicalIndexes, source);
    this.hot.forceFullRender = true;
    return true;
  }
  /**
   * Removes column from the data array.
   *
   * @fires Hooks#beforeRemoveCol
   * @fires Hooks#afterRemoveCol
   * @param {number} [index] Visual index of the column to be removed. If not provided, the last column will be removed.
   * @param {number} [amount=1] Amount of the columns to be removed. If not provided, one column will be removed.
   * @param {string} [source] Source of method call.
   * @returns {boolean} Returns `false` when action was cancelled, otherwise `true`.
   */
  removeCol(index) {
    let amount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    let source = arguments.length > 2 ? arguments[2] : void 0;
    if (this.hot.dataType === "object" || this.tableMeta.columns) {
      throw new Error("cannot remove column with object data source or columns option specified");
    }
    let columnIndex = typeof index !== "number" ? -amount : index;
    columnIndex = (this.hot.countCols() + columnIndex) % this.hot.countCols();
    const removedPhysicalIndexes = this.visualColumnsToPhysical(columnIndex, amount);
    const descendingPhysicalColumns = removedPhysicalIndexes.slice(0).sort((a, b) => b - a);
    const actionWasNotCancelled = this.hot.runHooks("beforeRemoveCol", columnIndex, amount, removedPhysicalIndexes, source);
    if (actionWasNotCancelled === false) {
      return false;
    }
    let isTableUniform = true;
    const removedColumnsCount = descendingPhysicalColumns.length;
    const data = this.dataSource;
    for (let c = 0; c < removedColumnsCount; c++) {
      if (isTableUniform && removedPhysicalIndexes[0] !== removedPhysicalIndexes[c] - c) {
        isTableUniform = false;
      }
    }
    if (isTableUniform) {
      for (let r = 0, rlen = this.hot.countSourceRows(); r < rlen; r++) {
        data[r].splice(removedPhysicalIndexes[0], amount);
        if (r === 0) {
          this.metaManager.removeColumn(removedPhysicalIndexes[0], amount);
        }
      }
    } else {
      for (let r = 0, rlen = this.hot.countSourceRows(); r < rlen; r++) {
        for (let c = 0; c < removedColumnsCount; c++) {
          data[r].splice(descendingPhysicalColumns[c], 1);
          if (r === 0) {
            this.metaManager.removeColumn(descendingPhysicalColumns[c], 1);
          }
        }
      }
    }
    if (columnIndex < this.hot.countCols()) {
      this.hot.columnIndexMapper.removeIndexes(removedPhysicalIndexes);
      if (this.hot.columnIndexMapper.getNotTrimmedIndexesLength() === 0) {
        this.hot.rowIndexMapper.setIndexesSequence([]);
      }
    }
    this.hot.runHooks("afterRemoveCol", columnIndex, amount, removedPhysicalIndexes, source);
    this.hot.forceFullRender = true;
    this.refreshDuckSchema();
    return true;
  }
  /**
   * Add/Removes data from the column.
   *
   * @param {number} col Physical index of column in which do you want to do splice.
   * @param {number} index Index at which to start changing the array. If negative, will begin that many elements from the end.
   * @param {number} amount An integer indicating the number of old array elements to remove. If amount is 0, no elements are removed.
   * @param {Array} [elements] The new columns to add.
   * @returns {Array} Returns removed portion of columns.
   */
  spliceCol(col, index, amount) {
    const colData = this.hot.getDataAtCol(col);
    const removed = colData.slice(index, index + amount);
    const after = colData.slice(index + amount);
    for (var _len = arguments.length, elements = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      elements[_key - 3] = arguments[_key];
    }
    extendArray(elements, after);
    let i = 0;
    while (i < amount) {
      elements.push(null);
      i += 1;
    }
    to2dArray(elements);
    this.hot.populateFromArray(index, col, elements, null, null, "spliceCol");
    return removed;
  }
  /**
   * Add/Removes data from the row.
   *
   * @param {number} row Physical index of row in which do you want to do splice.
   * @param {number} index Index at which to start changing the array. If negative, will begin that many elements from the end.
   * @param {number} amount An integer indicating the number of old array elements to remove. If amount is 0, no elements are removed.
   * @param {Array} [elements] The new rows to add.
   * @returns {Array} Returns removed portion of rows.
   */
  spliceRow(row, index, amount) {
    const rowData = this.hot.getSourceDataAtRow(row);
    const removed = rowData.slice(index, index + amount);
    const after = rowData.slice(index + amount);
    for (var _len2 = arguments.length, elements = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      elements[_key2 - 3] = arguments[_key2];
    }
    extendArray(elements, after);
    let i = 0;
    while (i < amount) {
      elements.push(null);
      i += 1;
    }
    this.hot.populateFromArray(row, index, [elements], null, null, "spliceRow");
    return removed;
  }
  /**
   * Add/remove row(s) to/from the data source.
   *
   * @param {number} index Physical index of the element to add/remove.
   * @param {number} deleteCount Number of rows to remove.
   * @param {Array<object>} elements Row elements to be added.
   */
  spliceData(index, deleteCount, elements) {
    const continueSplicing = this.hot.runHooks("beforeDataSplice", index, deleteCount, elements);
    if (continueSplicing !== false) {
      const newData = [...this.dataSource.slice(0, index), ...elements, ...this.dataSource.slice(index)];
      this.dataSource.length = 0;
      newData.forEach((row) => this.dataSource.push(row));
    }
  }
  /**
   * Filter unwanted data elements from the data source.
   *
   * @param {number} index Visual index of the element to remove.
   * @param {number} amount Number of rows to add/remove.
   * @param {number} physicalRows Physical row indexes.
   */
  filterData(index, amount, physicalRows) {
    let data = this.hot.runHooks("filterData", index, amount, physicalRows);
    if (Array.isArray(data) === false) {
      data = this.dataSource.filter((row, rowIndex) => physicalRows.indexOf(rowIndex) === -1);
    }
    this.dataSource.length = 0;
    Array.prototype.push.apply(this.dataSource, data);
  }
  /**
   * Returns single value from the data array.
   *
   * @param {number} row Visual row index.
   * @param {number} prop The column property.
   * @returns {*}
   */
  get(row, prop) {
    const physicalRow = this.hot.toPhysicalRow(row);
    let dataRow = this.dataSource[physicalRow];
    const modifiedRowData = this.hot.runHooks("modifyRowData", physicalRow);
    dataRow = isNaN(modifiedRowData) ? modifiedRowData : dataRow;
    const {
      dataDotNotation
    } = this.hot.getSettings();
    let value = null;
    if (dataRow && dataRow.hasOwnProperty && hasOwnProperty(dataRow, prop)) {
      value = dataRow[prop];
    } else if (dataDotNotation && typeof prop === "string" && prop.indexOf(".") > -1) {
      let out = dataRow;
      if (!out) {
        return null;
      }
      const sliced = prop.split(".");
      for (let i = 0, ilen = sliced.length; i < ilen; i++) {
        out = out[sliced[i]];
        if (typeof out === "undefined") {
          return null;
        }
      }
      value = out;
    } else if (typeof prop === "function") {
      value = prop(this.dataSource.slice(physicalRow, physicalRow + 1)[0]);
    }
    if (this.hot.hasHook("modifyData")) {
      const valueHolder = createObjectPropListener(value);
      this.hot.runHooks("modifyData", physicalRow, this.propToCol(prop), valueHolder, "get");
      if (valueHolder.isTouched()) {
        value = valueHolder.value;
      }
    }
    return value;
  }
  /**
   * Returns single value from the data array (intended for clipboard copy to an external application).
   *
   * @param {number} row Physical row index.
   * @param {number} prop The column property.
   * @returns {string}
   */
  getCopyable(row, prop) {
    if (this.hot.getCellMeta(row, this.propToCol(prop)).copyable) {
      return this.get(row, prop);
    }
    return "";
  }
  /**
   * Saves single value to the data array.
   *
   * @param {number} row Visual row index.
   * @param {number} prop The column property.
   * @param {string} value The value to set.
   */
  set(row, prop, value) {
    const physicalRow = this.hot.toPhysicalRow(row);
    let newValue = value;
    let dataRow = this.dataSource[physicalRow];
    const modifiedRowData = this.hot.runHooks("modifyRowData", physicalRow);
    dataRow = isNaN(modifiedRowData) ? modifiedRowData : dataRow;
    if (this.hot.hasHook("modifyData")) {
      const valueHolder = createObjectPropListener(newValue);
      this.hot.runHooks("modifyData", physicalRow, this.propToCol(prop), valueHolder, "set");
      if (valueHolder.isTouched()) {
        newValue = valueHolder.value;
      }
    }
    const {
      dataDotNotation
    } = this.hot.getSettings();
    if (dataRow && dataRow.hasOwnProperty && hasOwnProperty(dataRow, prop)) {
      dataRow[prop] = newValue;
    } else if (dataDotNotation && typeof prop === "string" && prop.indexOf(".") > -1) {
      let out = dataRow;
      let i = 0;
      let ilen;
      const sliced = prop.split(".");
      for (i = 0, ilen = sliced.length - 1; i < ilen; i++) {
        if (typeof out[sliced[i]] === "undefined") {
          out[sliced[i]] = {};
        }
        out = out[sliced[i]];
      }
      out[sliced[i]] = newValue;
    } else if (typeof prop === "function") {
      prop(this.dataSource.slice(physicalRow, physicalRow + 1)[0], newValue);
    } else {
      dataRow[prop] = newValue;
    }
  }
  /**
   * This ridiculous piece of code maps rows Id that are present in table data to those displayed for user.
   * The trick is, the physical row id (stored in settings.data) is not necessary the same
   * as the visual (displayed) row id (e.g. When sorting is applied).
   *
   * @param {number} index Visual row index.
   * @param {number} amount An amount of rows to translate.
   * @returns {number}
   */
  visualRowsToPhysical(index, amount) {
    const totalRows = this.hot.countSourceRows();
    const logicRows = [];
    let physicRow = (totalRows + index) % totalRows;
    let rowsToRemove = amount;
    let row;
    while (physicRow < totalRows && rowsToRemove) {
      row = this.hot.toPhysicalRow(physicRow);
      logicRows.push(row);
      rowsToRemove -= 1;
      physicRow += 1;
    }
    return logicRows;
  }
  /**
   *
   * @param {number} index Visual column index.
   * @param {number} amount An amount of rows to translate.
   * @returns {Array}
   */
  visualColumnsToPhysical(index, amount) {
    const totalCols = this.hot.countCols();
    const visualCols = [];
    let physicalCol = (totalCols + index) % totalCols;
    let colsToRemove = amount;
    while (physicalCol < totalCols && colsToRemove) {
      const col = this.hot.toPhysicalColumn(physicalCol);
      visualCols.push(col);
      colsToRemove -= 1;
      physicalCol += 1;
    }
    return visualCols;
  }
  /**
   * Clears the data array.
   */
  clear() {
    for (let r = 0; r < this.hot.countSourceRows(); r++) {
      for (let c = 0; c < this.hot.countCols(); c++) {
        this.set(r, this.colToProp(c), "");
      }
    }
  }
  /**
   * Get data length.
   *
   * @returns {number}
   */
  getLength() {
    const maxRowsFromSettings = this.tableMeta.maxRows;
    let maxRows;
    if (maxRowsFromSettings < 0 || maxRowsFromSettings === 0) {
      maxRows = 0;
    } else {
      maxRows = maxRowsFromSettings || Infinity;
    }
    const length = this.hot.rowIndexMapper.getNotTrimmedIndexesLength();
    return Math.min(length, maxRows);
  }
  /**
   * Returns the data array.
   *
   * @returns {Array}
   */
  getAll() {
    const start = {
      row: 0,
      col: 0
    };
    const end = {
      row: Math.max(this.hot.countRows() - 1, 0),
      col: Math.max(this.hot.countCols() - 1, 0)
    };
    if (start.row - end.row === 0 && !this.hot.countSourceRows()) {
      return [];
    }
    return this.getRange(start, end, _DataMap.DESTINATION_RENDERER);
  }
  /**
   * Count the number of columns cached in the `colToProp` cache.
   *
   * @returns {number} Amount of cached columns.
   */
  countCachedColumns() {
    return this.colToPropCache.length;
  }
  /**
   * Returns data range as array.
   *
   * @param {object} [start] Start selection position. Visual indexes.
   * @param {object} [end] End selection position. Visual indexes.
   * @param {number} destination Destination of datamap.get.
   * @returns {Array}
   */
  getRange(start, end, destination) {
    const output = [];
    let r;
    let c;
    let row;
    const maxRows = this.tableMeta.maxRows;
    const maxCols = this.tableMeta.maxCols;
    if (maxRows === 0 || maxCols === 0) {
      return [];
    }
    const getFn = destination === _DataMap.DESTINATION_CLIPBOARD_GENERATOR ? this.getCopyable : this.get;
    const rlen = Math.min(Math.max(maxRows - 1, 0), Math.max(start.row, end.row));
    const clen = Math.min(Math.max(maxCols - 1, 0), Math.max(start.col, end.col));
    for (r = Math.min(start.row, end.row); r <= rlen; r++) {
      row = [];
      const physicalRow = r >= 0 ? this.hot.toPhysicalRow(r) : r;
      for (c = Math.min(start.col, end.col); c <= clen; c++) {
        if (physicalRow === null) {
          break;
        }
        row.push(getFn.call(this, r, this.colToProp(c)));
      }
      if (physicalRow !== null) {
        output.push(row);
      }
    }
    return output;
  }
  /**
   * Return data as text (tab separated columns).
   *
   * @param {object} [start] Start selection position. Visual indexes.
   * @param {object} [end] End selection position. Visual indexes.
   * @returns {string}
   */
  getText(start, end) {
    return stringify(this.getRange(start, end, _DataMap.DESTINATION_RENDERER));
  }
  /**
   * Return data as copyable text (tab separated columns intended for clipboard copy to an external application).
   *
   * @param {object} [start] Start selection position. Visual indexes.
   * @param {object} [end] End selection position. Visual indexes.
   * @returns {string}
   */
  getCopyableText(start, end) {
    return stringify(this.getRange(start, end, _DataMap.DESTINATION_CLIPBOARD_GENERATOR));
  }
  /**
   * Destroy instance.
   */
  destroy() {
    this.hot = null;
    this.metaManager = null;
    this.dataSource = null;
    this.duckSchema = null;
    this.colToPropCache.length = 0;
    this.propToColCache.clear();
    this.propToColCache = void 0;
  }
};
var dataMap_default = DataMap;

// node_modules/handsontable/dataMap/metaManager/utils.mjs
function canBeOverwritten(propertyName, metaObject) {
  var _metaObject$_automati;
  if (propertyName === "CELL_TYPE") {
    return false;
  }
  return ((_metaObject$_automati = metaObject._automaticallyAssignedMetaProps) === null || _metaObject$_automati === void 0 ? void 0 : _metaObject$_automati.has(propertyName)) || !hasOwnProperty(metaObject, propertyName);
}
function extendByMetaType(metaObject, settings) {
  let settingsToCompareWith = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : metaObject;
  const validType = typeof settings.type === "string" ? _getItem4(settings.type) : settings.type;
  if (metaObject._automaticallyAssignedMetaProps) {
    objectEach(settings, (value, key) => void metaObject._automaticallyAssignedMetaProps.delete(key));
  }
  if (!isObject(validType)) {
    return;
  }
  if (settingsToCompareWith === metaObject && !metaObject._automaticallyAssignedMetaProps) {
    metaObject._automaticallyAssignedMetaProps = /* @__PURE__ */ new Set();
  }
  const expandedType = {};
  objectEach(validType, (value, property) => {
    if (canBeOverwritten(property, settingsToCompareWith)) {
      var _metaObject$_automati2;
      expandedType[property] = value;
      (_metaObject$_automati2 = metaObject._automaticallyAssignedMetaProps) === null || _metaObject$_automati2 === void 0 || _metaObject$_automati2.add(property);
    }
  });
  extend(metaObject, expandedType);
}
function columnFactory(TableMeta2) {
  let conflictList = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  function ColumnMeta2() {
  }
  inherit(ColumnMeta2, TableMeta2);
  for (let i = 0; i < conflictList.length; i++) {
    ColumnMeta2.prototype[conflictList[i]] = void 0;
  }
  return ColumnMeta2;
}
function isUnsignedNumber(value) {
  return Number.isInteger(value) && value >= 0;
}
function assert(condition, errorMessage) {
  if (!condition()) {
    throw new Error(`Assertion failed: ${errorMessage}`);
  }
}
function isNullish(variable) {
  return variable === null || variable === void 0;
}

// node_modules/handsontable/dataMap/metaManager/metaSchema.mjs
var metaSchema_default = () => {
  return {
    /* eslint-disable jsdoc/require-description-complete-sentence */
    /**
     * Information on which of the meta properties were added automatically.
     * For example: setting the `renderer` property directly won't extend the `_automaticallyAssignedMetaProps`
     * entry, but setting a `type` will modify it to `Set(3) {'renderer', 'editor', 'validator', ...}`.
     *
     * @private
     * @type {Set}
     * @default undefined
     */
    _automaticallyAssignedMetaProps: void 0,
    /**
     * The `activeHeaderClassName` option lets you add a CSS class name
     * to every currently-active, currently-selected header (when a whole column or row is selected).
     *
     * Read more:
     * - [`currentRowClassName`](#currentRowClassName)
     * - [`currentColClassName`](#currentColClassName)
     * - [`currentHeaderClassName`](#currentHeaderClassName)
     * - [`invalidCellClassName`](#invalidCellClassName)
     * - [`readOnlyCellClassName`](#readOnlyCellClassName)
     * - [`commentedCellClassName`](#commentedCellClassName)
     * - [`noWordWrapClassName`](#noWordWrapClassName)
     * - [`TableClassName`](#TableClassName)
     * - [`className`](#className)
     *
     * @memberof Options#
     * @type {string}
     * @since 0.38.2
     * @default 'ht__active_highlight'
     * @category Core
     *
     * @example
     * ```js
     * // add an `ht__active_highlight` CSS class name
     * // to every currently-active, currently-selected header
     * activeHeaderClassName: 'ht__active_highlight',
     * ```
     */
    activeHeaderClassName: "ht__active_highlight",
    /**
     * The `allowEmpty` option determines whether Handsontable accepts the following values:
     * - `null`
     * - `undefined`
     * - `''`
     *
     * You can set the `allowEmpty` option to one of the following:
     *
     * | Setting          | Description                                                                                                                          |
     * | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
     * | `true` (default) | - Accept `null`, `undefined` and `''` values<br>- Mark cells that contain `null`, `undefined` or `''` values as `valid`              |
     * | `false`          | - Don't accept `null`, `undefined` and `''` values<br>- Mark cells that contain `null`, `undefined` or `''` values with as `invalid` |
     *
     * ::: tip
     * To use the [`allowEmpty`](#allowempty) option, you need to set the [`validator`](#validator) option (or the [`type`](#type) option).
     * :::
     *
     * @memberof Options#
     * @type {boolean}
     * @default true
     * @category Core
     *
     * @example
     * ```js
     * // allow empty values in each cell of the entire grid
     * allowEmpty: true,
     *
     * // or
     * columns: [
     *   {
     *     type: 'date',
     *     dateFormat: 'DD/MM/YYYY',
     *     // allow empty values in each cell of the 'date' column
     *     allowEmpty: true
     *   }
     * ],
     * ```
     */
    allowEmpty: true,
    /**
     * The `allowHtml` option configures whether [`autocomplete`](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md)
     * and [`dropdown`](@/guides/cell-types/dropdown-cell-type/dropdown-cell-type.md) cells' [`source`](#source) data
     * is treated as HTML.
     *
     * You can set the `allowHtml` option to one of the following:
     *
     * | Setting           | Description                                         |
     * | ----------------- | --------------------------------------------------- |
     * | `false` (default) | The [`source`](#source) data is not treated as HTML |
     * | `true`            | The [`source`](#source) data is treated as HTML     |
     *
     * __Warning:__ Setting the `allowHtml` option to `true` can cause serious XSS vulnerabilities.
     *
     * Read more:
     * - [Autocomplete cell type](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md)
     * - [Dropdown cell type](@/guides/cell-types/dropdown-cell-type/dropdown-cell-type.md)
     * - [`source`](#source)
     *
     * @memberof Options#
     * @type {boolean}
     * @default false
     * @category Core
     *
     * @example
     * ```js
     * columns: [
     *   {
     *   // set the `type` of each cell in this column to `autocomplete`
     *   type: 'autocomplete',
     *   // set options available in every `autocomplete` cell of this column
     *   source: ['<strong>foo</strong>', '<strong>bar</strong>']
     *   // use HTML in the `source` list
     *   allowHtml: true,
     *   },
     * ],
     * ```
     */
    allowHtml: false,
    /**
     * If set to `true`, the `allowInsertColumn` option adds the following menu items to the [context menu](@/guides/accessories-and-menus/context-menu/context-menu.md):
     * - **Insert column left**
     * - **Insert column right**
     *
     * @memberof Options#
     * @type {boolean}
     * @default true
     * @category Core
     *
     * @example
     * ```js
     * // hide the 'Insert column left' and 'Insert column right' menu items from the context menu
     * allowInsertColumn: false,
     * ```
     */
    allowInsertColumn: true,
    /**
     * If set to `true`, the `allowInsertRow` option adds the following menu items to the [context menu](@/guides/accessories-and-menus/context-menu/context-menu.md):
     * - **Insert row above**
     * - **Insert row below**
     *
     * @memberof Options#
     * @type {boolean}
     * @default true
     * @category Core
     *
     * @example
     * ```js
     * // hide the 'Insert row above' and 'Insert row below' menu items from the context menu
     * allowInsertRow: false,
     * ```
     */
    allowInsertRow: true,
    /**
     * The `allowInvalid` option determines whether Handsontable accepts values
     * that were marked as `invalid` by the [cell validator](@/guides/cell-functions/cell-validator/cell-validator.md).
     *
     * You can set the `allowInvalid` option to one of the following:
     *
     * | Setting          | Description                                                                                                                                                                        |
     * | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `true` (default) | - Accept `invalid` values<br>- Allow the user to close the [cell editor](@/guides/cell-functions/cell-editor/cell-editor.md) with `invalid` values<br>- Save `invalid` values into the data source                   |
     * | `false`          | - Don't accept `invalid` values<br>- Don't allow the user to close the [cell editor](@/guides/cell-functions/cell-editor/cell-editor.md) with `invalid` values<br>- Don't save `invalid` values into the data source |
     *
     * Setting the `allowInvalid` option to `false` can be useful when used with the [Autocomplete strict mode](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md#autocomplete-strict-mode).
     *
     * Read more:
     * - [Cell validator](@/guides/cell-functions/cell-validator/cell-validator.md)
     * - [Cell editor](@/guides/cell-functions/cell-editor/cell-editor.md)
     * - [Autocomplete strict mode](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md#autocomplete-strict-mode)
     *
     * @memberof Options#
     * @type {boolean}
     * @default true
     * @category Core
     *
     * @example
     * ```js
     * // don't accept `invalid` values
     * // don't allow the user to close the cell editor
     * // don't save `invalid` values into the data source
     * allowInvalid: false,
     * ```
     */
    allowInvalid: true,
    /**
     * If set to `true`, the `allowRemoveColumn` option adds the following menu items to the [context menu](@/guides/accessories-and-menus/context-menu/context-menu.md):
     * - **Remove column**
     *
     * Read more:
     * - [Context menu](@/guides/accessories-and-menus/context-menu/context-menu.md)
     *
     * @memberof Options#
     * @type {boolean}
     * @default true
     * @category Core
     *
     * @example
     * ```js
     * // hide the 'Remove column' menu item from the context menu
     * allowRemoveColumn: false,
     * ```
     */
    allowRemoveColumn: true,
    /**
     * If set to `true`, the `allowRemoveRow` option adds the following menu items to the [context menu](@/guides/accessories-and-menus/context-menu/context-menu.md):
     * - **Remove row**
     *
     * Read more:
     * - [Context menu](@/guides/accessories-and-menus/context-menu/context-menu.md)
     *
     * @memberof Options#
     * @type {boolean}
     * @default true
     * @category Core
     *
     * @example
     * ```js
     * // hide the 'Remove row' menu item from the context menu
     * allowRemoveRow: false,
     * ```
     */
    allowRemoveRow: true,
    /**
     * If set to `true`, the accessibility-related ARIA tags will be added to the table. If set to `false`, they
     * will be omitted.
     * Defaults to `true`.
     *
     * @memberof Options#
     * @type {boolean}
     * @default true
     * @category Core
     * @since 14.0.0
     */
    ariaTags: true,
    /**
     * The `autoColumnSize` option configures the [`AutoColumnSize`](@/api/autoColumnSize.md) plugin.
     *
     * You can set the `autoColumnSize` option to one of the following:
     *
     * | Setting   | Description                                                                                  |
     * | --------- | -------------------------------------------------------------------------------------------- |
     * | `false`   | Disable the [`AutoColumnSize`](@/api/autoColumnSize.md) plugin                               |
     * | `true`    | Enable the [`AutoColumnSize`](@/api/autoColumnSize.md) plugin with the default configuration |
     * | An object | Enable the [`AutoColumnSize`](@/api/autoColumnSize.md) plugin and modify the plugin options  |
     *
     * If you set the `autoColumnSize` option to an object, you can set the following [`AutoColumnSize`](@/api/autoColumnSize.md) plugin options:
     *
     * | Property                | Possible values                 | Description                                                                                                    |
     * | ----------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------- |
     * | `syncLimit`             | A number \| A percentage string | The number/percentage of columns to keep in sync<br>(default: `50`)                                            |
     * | `useHeaders`            | `true` \| `false`               | When calculating column widths:<br>`true`: use column headers<br>`false`: don't use column headers          |
     * | `samplingRatio`         | A number                        | The number of samples of the same length to be used in column width calculations                               |
     * | `allowSampleDuplicates` | `true` \| `false`               | When calculating column widths:<br>`true`: Allow duplicate samples<br>`false`: Don't allow duplicate samples |
     *
     * By default, the `autoColumnSize` option is set to `undefined`,
     * but the [`AutoColumnSize`](@/api/autoColumnSize.md) plugin acts as enabled.
     * To disable the [`AutoColumnSize`](@/api/autoColumnSize.md) plugin completely,
     * set the `autoColumnSize` option to `false`.
     *
     * Using the [`colWidths`](#colWidths) option forcibly disables the [`AutoColumnSize`](@/api/autoColumnSize.md) plugin.
     *
     * Read more:
     * - [Plugins: `AutoColumnSize`](@/api/autoColumnSize.md)
     *
     * @memberof Options#
     * @type {object|boolean}
     * @default undefined
     * @category AutoColumnSize
     *
     * @example
     * ```js
     * autoColumnSize: {
     *   // keep 40% of columns in sync (the rest of columns: async)
     *   syncLimit: '40%',
     *   // when calculating column widths, use column headers
     *   useHeaders: true,
     *   // when calculating column widths, use 10 samples of the same length
     *   samplingRatio: 10,
     *   // when calculating column widths, allow duplicate samples
     *   allowSampleDuplicates: true
     * },
     * ```
     */
    autoColumnSize: void 0,
    /**
     * The `autoRowSize` option configures the [`AutoRowSize`](@/api/autoRowSize.md) plugin.
     *
     * You can set the `autoRowSize` option to one of the following:
     *
     * | Setting   | Description                                                                            |
     * | --------- | -------------------------------------------------------------------------------------- |
     * | `false`   | Disable the [`AutoRowSize`](@/api/autoRowSize.md) plugin                               |
     * | `true`    | Enable the [`AutoRowSize`](@/api/autoRowSize.md) plugin with the default configuration |
     * | An object | Enable the [`AutoRowSize`](@/api/autoRowSize.md) plugin and modify the plugin options  |
     *
     * To give Handsontable's [scrollbar](https://handsontable.com/docs/8.0.0/demo-scrolling.html)
     * a proper size, set the `autoRowSize` option to `true`.
     *
     * If you set the `autoRowSize` option to an object, you can set the following [`AutoRowSize`](@/api/autoRowSize.md) plugin options:
     *
     * | Property    | Possible values                 | Description                                                       |
     * | ----------- | ------------------------------- | ----------------------------------------------------------------- |
     * | `syncLimit` | A number \| A percentage string | The number/percentage of rows to keep in sync<br>(default: `500`) |
     *
     * Using the [`rowHeights`](#rowHeights) option forcibly disables the [`AutoRowSize`](@/api/autoRowSize.md) plugin.
     *
     * Read more:
     * - [Plugins: `AutoRowSize`](@/api/autoRowSize.md)
     *
     * @memberof Options#
     * @type {object|boolean}
     * @default undefined
     * @category AutoRowSize
     *
     * @example
     * ```js
     * autoRowSize: {
     *   // keep 40% of rows in sync (the rest of rows: async)
     *   syncLimit: '40%'
     * },
     * ```
     */
    autoRowSize: void 0,
    /**
     * | Setting           | Description                                                                                                                                                                                                                                  |
     * | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `false` (default) | When you select a bottom-most cell, pressing <kbd>**↓**</kbd> doesn't do anything.<br><br>When you select a top-most cell, pressing <kbd>**↑**</kbd> doesn't do anything.                                                                    |
     * | `true`            | When you select a bottom-most cell, pressing <kbd>**↓**</kbd> takes you to the top-most cell of the next column.<br><br>When you select a top-most cell, pressing <kbd>**↑**</kbd> takes you to the bottom-most cell of the previous column. |
     *
     * @memberof Options#
     * @type {boolean}
     * @default false
     * @category Core
     *
     * @example
     * ```js
     * // when you select a bottom-most cell, pressing ⬇ doesn't do anything
     * // when you select a top-most cell, pressing ⬆ doesn't do anything
     * autoWrapCol: false, // default setting
     *
     * // when you select a bottom-most cell, pressing ⬇ takes you to the top-most cell of the next column
     * // when you select a top-most cell, pressing ⬆ takes you to the bottom-most cell of the previous column
     * autoWrapCol: true,
     * ```
     */
    autoWrapCol: false,
    /**
     * | Setting           | Description                                                                                                                                                                                                                                                                                                        |
     * | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
     * | `false` (default) | When you select the first cell of a row, pressing <kbd>**←**</kbd>* (or <kbd>**Shift**</kbd>+<kbd>**Tab**</kbd>\*\*) doesn't do anything.<br><br>When you select the last cell of a row, pressing <kbd>**→**</kbd>* (or <kbd>**Tab**</kbd>**) doesn't do anything.                                                  |
     * | `true`            | When you select the first cell of a row, pressing <kbd>**←**</kbd>* (or <kbd>**Shift**</kbd>+<kbd>**Tab**</kbd>\*\*) takes you to the last cell of the row above.<br><br>When you select the last cell of a row, pressing <kbd>**→**</kbd>* (or <kbd>**Tab**</kbd>**) takes you to the first cell of the row below. |
     *
     * \* The exact key depends on your [`layoutDirection`](#layoutdirection) configuration.<br>
     * \*\* Unless [`tabNavigation`](#tabnavigation) is set to `false`.
     *
     * @memberof Options#
     * @type {boolean}
     * @default false
     * @category Core
     *
     * @example
     * ```js
     * // when you select the first cell of a row, pressing ⬅ (or Shift+Tab) doesn't do anything
     * // when you select the last cell of a row, pressing ➡ (or Tab) doesn't do anything
     * autoWrapRow: false, // default setting
     *
     * // when you select the first cell of a row, pressing ⬅ (or Shift+Tab) takes you to the last cell of the row above
     * // when you select the last cell of a row, pressing ➡ (or Tab) takes you to the first cell of the row below
     * autoWrapRow: true,
     * ```
     */
    autoWrapRow: false,
    /**
     * @description
     * The `bindRowsWithHeaders` option configures the [`BindRowsWithHeaders`](@/api/bindRowsWithHeaders.md) plugin.
     *
     * You can set the `bindRowsWithHeaders` option to one of the following:
     *
     * | Setting | Description                                                                  |
     * | ------- | ---------------------------------------------------------------------------- |
     * | `false` | Disable the the [`BindRowsWithHeaders`](@/api/bindRowsWithHeaders.md) plugin |
     * | `true`  | Enable the the [`BindRowsWithHeaders`](@/api/bindRowsWithHeaders.md) plugin  |
     *
     * Read more:
     * - [Plugins: `BindRowsWithHeaders`](@/api/bindRowsWithHeaders.md)
     *
     * @memberof Options#
     * @type {boolean|string}
     * @default undefined
     * @category BindRowsWithHeaders
     *
     * @example
     * ```js
     * // enable the `BindRowsWithHeaders` plugin
     * bindRowsWithHeaders: true
     * ```
     */
    bindRowsWithHeaders: void 0,
    /**
     * The `cell` option lets you apply [configuration options](@/guides/getting-started/configuration-options/configuration-options.md) to individual cells.
     *
     * The `cell` option overwrites the [top-level grid options](@/guides/getting-started/configuration-options/configuration-options.md#set-grid-options),
     * and the [`columns`](#columns) options.
     *
     * Read more:
     * - [Configuration options: Setting cell options](@/guides/getting-started/configuration-options/configuration-options.md#set-cell-options)
     * - [`columns`](#columns)
     *
     * @memberof Options#
     * @type {Array[]}
     * @default []
     * @category Core
     *
     * @example
     * ```js
     * // set the `cell` option to an array of objects
     * cell: [
     *   // make the cell with coordinates (0, 0) read-only
     *   {
     *     row: 0,
     *     col: 0,
     *     readOnly: true
     *   }
     * ],
     * ```
     */
    cell: [],
    /**
     * @description
     * The `cells` option lets you apply any other [configuration options](@/guides/getting-started/configuration-options/configuration-options.md) to
     * individual grid elements (columns, rows, cells), based on any logic you implement.
     *
     * The `cells` option overwrites all other options (including options set by [`columns`](#columns) and [`cell`](#cell)).
     * It takes the following parameters:
     *
     * | Parameter | Required | Type             | Description                                                                                                                                                                                                                                                                                                                             |
     * | --------- | -------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `row`     | Yes      | Number           | A physical row index                                                                                                                                                                                                                                                                                                                    |
     * | `column`  | Yes      | Number           | A physical column index                                                                                                                                                                                                                                                                                                                 |
     * | `prop`    | No       | String \| Number | If [`data`](#data) is set to an [array of arrays](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-arrays), `prop` is the same number as `column`.<br><br>If [`data`](#data) is set to an [array of objects](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-objects), `prop` is a property name for the column's data object. |
     *
     * Read more:
     * - [Configuration options: Implementing custom logic](@/guides/getting-started/configuration-options/configuration-options.md#implement-custom-logic)
     * - [Configuration options: Setting row options](@/guides/getting-started/configuration-options/configuration-options.md#set-row-options)
     * - [`columns`](#columns)
     * - [`cell`](#cell)
     *
     * @memberof Options#
     * @type {Function}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * // set the `cells` option to your custom function
     * cells(row, column, prop) {
     *   const cellProperties = { readOnly: false };
     *   const visualRowIndex = this.instance.toVisualRow(row);
     *   const visualColIndex = this.instance.toVisualColumn(column);
     *
     *   if (visualRowIndex === 0 && visualColIndex === 0) {
     *     cellProperties.readOnly = true;
     *   }
     *
     *   return cellProperties;
     * },
     * ```
     */
    cells: void 0,
    /**
     * The `checkedTemplate` option lets you configure what value
     * a checked [`checkbox`](@/guides/cell-types/checkbox-cell-type/checkbox-cell-type.md) cell has.
     *
     * You can set the `checkedTemplate` option to one of the following:
     *
     * | Setting          | Description                                                                                                                                                                              |
     * | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `true` (default) | If a [`checkbox`](@/guides/cell-types/checkbox-cell-type/checkbox-cell-type.md) cell is checked,<br>the [`getDataAtCell`](@/api/core.md#getDataAtCell) method for this cell returns `true`                  |
     * | A string         | If a [`checkbox`](@/guides/cell-types/checkbox-cell-type/checkbox-cell-type.md) cell is checked,<br>the [`getDataAtCell`](@/api/core.md#getDataAtCell) method for this cell returns a string of your choice |
     *
     * Read more:
     * - [Checkbox cell type: Checkbox template](@/guides/cell-types/checkbox-cell-type/checkbox-cell-type.md#checkbox-template)
     * - [`getDataAtCell()`](@/api/core.md#getDataAtCell)
     * - [`uncheckedTemplate`](#uncheckedTemplate)
     *
     * @memberof Options#
     * @type {boolean|string|number}
     * @default true
     * @category Core
     *
     * @example
     * ```js
     * columns: [
     *   {
     *     // set the `type` of each cell in this column to `checkbox`
     *     // when checked, the cell's value is `true`
     *     // when unchecked, the cell's value is `false`
     *     type: 'checkbox',
     *   },
     *   {
     *     // set the `type` of each cell in this column to `checkbox`
     *     type: 'checkbox',
     *     // when checked, the cell's value is `'Yes'`
     *     checkedTemplate: 'Yes',
     *     // when unchecked, the cell's value is `'No'`
     *     uncheckedTemplate: 'No'
     *  }
     * ],
     * ```
     */
    checkedTemplate: void 0,
    /**
     * The `className` option lets you add CSS class names to every currently-selected element.
     *
     * You can set the `className` option to one of the following:
     *
     * | Setting             | Description                                                      |
     * | ------------------- | ---------------------------------------------------------------- |
     * | A string            | Add a single CSS class name to every currently-selected element  |
     * | An array of strings | Add multiple CSS class names to every currently-selected element |
     *
     * ::: tip
     * Don't change the `className` metadata of the [column summary](@/guides/columns/column-summary/column-summary.md) row.
     * To style the summary row, use the class name assigned automatically by the [`ColumnSummary`](@/api/columnSummary.md) plugin: `columnSummaryResult`.
     * :::
     *
     * To apply different CSS class names on different levels, use Handsontable's [cascading configuration](@/guides/getting-started/configuration-options/configuration-options.md#cascading-configuration).
     *
     * Read more:
     * - [Configuration options: Cascading configuration](@/guides/getting-started/configuration-options/configuration-options.md#cascading-configuration)
     * - [`currentRowClassName`](#currentRowClassName)
     * - [`currentColClassName`](#currentColClassName)
     * - [`currentHeaderClassName`](#currentHeaderClassName)
     * - [`activeHeaderClassName`](#activeHeaderClassName)
     * - [`invalidCellClassName`](#invalidCellClassName)
     * - [`placeholderCellClassName`](#placeholderCellClassName)
     * - [`commentedCellClassName`](#commentedCellClassName)
     * - [`noWordWrapClassName`](#noWordWrapClassName)
     * - [`readOnlyCellClassName`](#readOnlyCellClassName)
     * - [`TableClassName`](#TableClassName)
     *
     * @memberof Options#
     * @type {string|string[]}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * // add a `your-class-name` CSS class name
     * // to every currently-selected element
     * className: 'your-class-name',
     *
     * // add `first-class-name` and `second-class-name` CSS class names
     * // to every currently-selected element
     * className: ['first-class-name', 'second-class-name'],
     * ```
     */
    className: void 0,
    /**
     * The `colHeaders` option configures your grid's column headers.
     *
     * You can set the `colHeaders` option to one of the following:
     *
     * | Setting  | Description                                                          |
     * | -------- | -------------------------------------------------------------------- |
     * | `true`   | Enable the default column headers ('A', 'B', 'C', ...)               |
     * | `false`  | Disable column headers                                               |
     * | An array | Define your own column headers (e.g. `['One', 'Two', 'Three', ...]`) |
     * | A function | Define your own column headers, using a function                     |
     *
     * Read more:
     * - [Column header](@/guides/columns/column-header/column-header.md)
     *
     * @memberof Options#
     * @type {boolean|string[]|Function}
     * @default null
     * @category Core
     *
     * @example
     * ```js
     * // enable the default column headers
     * colHeaders: true,
     *
     * // set your own column headers
     * colHeaders: ['One', 'Two', 'Three'],
     *
     * // set your own column headers, using a function
     * colHeaders: function(visualColumnIndex) {
     *   return `${visualColumnIndex} + : AB`;
     * },
     * ```
     */
    colHeaders: null,
    /**
     * @description
     * The `collapsibleColumns` option configures the [`CollapsibleColumns`](@/api/collapsibleColumns.md) plugin.
     *
     * You can set the `collapsibleColumns` option to one of the following:
     *
     * | Setting              | Description                                                                                       |
     * | -------------------- | ------------------------------------------------------------------------------------------------- |
     * | `false`              | Disable the [`CollapsibleColumns`](@/api/collapsibleColumns.md) plugin                            |
     * | `true`               | Enable the [`CollapsibleColumns`](@/api/collapsibleColumns.md) plugin                             |
     * | An array of objects  | Enable the [`CollapsibleColumns`](@/api/collapsibleColumns.md) plugin for selected column headers |
     *
     * Read more:
     * - [Plugins: `CollapsibleColumns`](@/api/collapsibleColumns.md)
     *
     * @memberof Options#
     * @type {boolean|object[]}
     * @default undefined
     * @category CollapsibleColumns
     *
     * @example
     * ```js
     * // enable column collapsing for all headers
     * collapsibleColumns: true,
     *
     * // enable column collapsing for selected headers
     * collapsibleColumns: [
     *   {row: -4, col: 1, collapsible: true},
     *   {row: -3, col: 5, collapsible: true}
     * ],
     * ```
     */
    collapsibleColumns: void 0,
    /**
     * @description
     * The `columnHeaderHeight` option configures the height of column headers.
     *
     * You can set the `columnHeaderHeight` option to one of the following:
     *
     * | Setting  | Description                                         |
     * | -------- | --------------------------------------------------- |
     * | A number | Set the same height for every column header         |
     * | An array | Set different heights for individual column headers |
     *
     * @memberof Options#
     * @type {number|number[]}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * // set the same height for every column header
     * columnHeaderHeight: 25,
     *
     * // set different heights for individual column headers
     * columnHeaderHeight: [25, 30, 55],
     * ```
     */
    columnHeaderHeight: void 0,
    /**
     * @description
     * The `columns` option lets you apply any other [configuration options](@/guides/getting-started/configuration-options/configuration-options.md) to individual columns (or ranges of columns).
     *
     * You can set the `columns` option to one of the following:
     * - An array of objects (each object represents one column)
     * - A function that returns an array of objects
     *
     * The `columns` option overwrites the [top-level grid options](@/guides/getting-started/configuration-options/configuration-options.md#set-grid-options).
     *
     * When you use `columns`, the [`startCols`](#startCols), [`minCols`](#minCols), and [`maxCols`](#maxCols) options are ignored.
     *
     * Read more:
     * - [Configuration options: Setting column options](@/guides/getting-started/configuration-options/configuration-options.md#set-column-options)
     * - [`startCols`](#startCols)
     * - [`minCols`](#minCols)
     * - [`maxCols`](#maxCols)
     * - [`data`](#data)
     *
     * @memberof Options#
     * @type {object[]|Function}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * // set the `columns` option to an array of objects
     * // each object represents one column
     * columns: [
     *   {
     *     // column options for the first (by physical index) column
     *     type: 'numeric',
     *     numericFormat: {
     *       pattern: '0,0.00 $'
     *     }
     *   },
     *   {
     *     // column options for the second (by physical index) column
     *     type: 'text',
     *     readOnly: true
     *   }
     * ],
     *
     * // or set the `columns` option to a function, based on physical indexes
     * columns(index) {
     *   return {
     *     type: index > 0 ? 'numeric' : 'text',
     *     readOnly: index < 1
     *   }
     * }
     * ```
     */
    columns: void 0,
    /**
     * @description
     * The `columnSorting` option configures the [`ColumnSorting`](@/api/columnSorting.md) plugin.
     *
     * You can set the `columnSorting` option to one of the following:
     *
     * | Setting    | Description                                                                                                                            |
     * | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
     * | `true`     | Enable the [`ColumnSorting`](@/api/columnSorting.md) plugin with the default configuration                                             |
     * | `false`    | Disable the [`ColumnSorting`](@/api/columnSorting.md) plugin                                                                           |
     * | An object  | - Enable the [`ColumnSorting`](@/api/columnSorting.md) plugin<br>- Modify the [`ColumnSorting`](@/api/columnSorting.md) plugin options |
     *
     * If you set the `columnSorting` option to an object,
     * you can set the following [`ColumnSorting`](@/api/columnSorting.md) plugin options:
     *
     * | Option                   | Possible settings                                                                                                                                |
     * | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
     * | `indicator`              | `true`: Display the arrow icon in the column header, to indicate a sortable column<br>`false`: Don't display the arrow icon in the column header  |
     * | `headerAction`           | `true`: Enable clicking on the column header to sort the column<br>`false`: Disable clicking on the column header to sort the column             |
     * | `sortEmptyCells`         | `true`: Sort empty cells as well<br>`false`: Place empty cells at the end                                                                        |
     * | `compareFunctionFactory` | A [custom compare function](@/guides/rows/rows-sorting/rows-sorting.md#add-a-custom-comparator)                                                                |
     *
     * If you set the `columnSorting` option to an object,
     * you can also sort individual columns at Handsontable's initialization.
     * In the `columnSorting` object, add an object named `initialConfig`,
     * with the following properties:
     *
     * | Option      | Possible settings   | Description                                                      |
     * | ----------- | ------------------- | ---------------------------------------------------------------- |
     * | `column`    | A number            | The index of the column that you want to sort at initialization  |
     * | `sortOrder` | `'asc'` \| `'desc'` | The sorting order:<br>`'asc'`: ascending<br>`'desc'`: descending |
     *
     * Read more:
     * - [Rows sorting](@/guides/rows/rows-sorting/rows-sorting.md)
     * - [Rows sorting: Custom compare functions](@/guides/rows/rows-sorting/rows-sorting.md#add-a-custom-comparator)
     * - [`multiColumnSorting`](#multiColumnSorting)
     *
     * @memberof Options#
     * @type {boolean|object}
     * @default undefined
     * @category ColumnSorting
     *
     * @example
     * ```js
     * // enable the `ColumnSorting` plugin
     * columnSorting: true
     *
     * // enable the `ColumnSorting` plugin with custom configuration
     * columnSorting: {
     *   // sort empty cells as well
     *   sortEmptyCells: true,
     *   // display the arrow icon in the column header
     *   indicator: true,
     *   // disable clicking on the column header to sort the column
     *   headerAction: false,
     *   // add a custom compare function
     *   compareFunctionFactory(sortOrder, columnMeta) {
     *     return function(value, nextValue) {
     *       // some value comparisons which will return -1, 0 or 1...
     *     }
     *   }
     * }
     *
     * // enable the `ColumnSorting` plugin
     * columnSorting: {
     *   // at initialization, sort column 1 in ascending order
     *   initialConfig: {
     *     column: 1,
     *     sortOrder: 'asc'
     *   },
     *   // at initialization, sort column 2 in descending order
     *   initialConfig: {
     *     column: 2,
     *     sortOrder: 'desc'
     *   }
     * }
     * ```
     */
    columnSorting: void 0,
    /**
     * @description
     * The `columnSummary` option configures the [`ColumnSummary`](@/api/columnSummary.md) plugin.
     *
     * You can set the `columnSummary` option to an array of objects.
     * Each object configures a single column summary, using the following properties:
     *
     * | Property                 | Possible values                                                         | Description                                                                                                                  |
     * | ------------------------ | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
     * | `sourceColumn`           | A number                                                                | [Column to summarize](@/guides/columns/column-summary/column-summary.md#step-2-select-cells-that-you-want-to-summarize)                     |
     * | `ranges`                 | An array                                                                | [Ranges of rows to summarize](@/guides/columns/column-summary/column-summary.md#step-2-select-cells-that-you-want-to-summarize)             |
     * | `type`                   | `'sum'` \| `'min'` \| `'max'` \| `'count'` \| `'average'` \| `'custom'` | [Summary function](@/guides/columns/column-summary/column-summary.md#step-3-calculate-your-summary)                                         |
     * | `destinationRow`         | A number                                                                | [Destination cell's row coordinate](@/guides/columns/column-summary/column-summary.md#step-4-provide-the-destination-cell-s-coordinates)    |
     * | `destinationColumn`      | A number                                                                | [Destination cell's column coordinate](@/guides/columns/column-summary/column-summary.md#step-4-provide-the-destination-cell-s-coordinates) |
     * | `forceNumeric`           | `true`  \| `false`                                                      | [Treat non-numerics as numerics](@/guides/columns/column-summary/column-summary.md#force-numeric-values)                                  |
     * | `reversedRowCoords`      | `true`  \| `false`                                                      | [Reverse row coordinates](@/guides/columns/column-summary/column-summary.md#step-5-make-room-for-the-destination-cell)                      |
     * | `suppressDataTypeErrors` | `true`  \| `false`                                                      | [Suppress data type errors](@/guides/columns/column-summary/column-summary.md#throw-data-type-errors)                                    |
     * | `readOnly`               | `true`  \| `false`                                                      | Make summary cell read-only                                                                                                  |
     * | `roundFloat`             | `true`  \| `false`  \| A number                                         | [Round summary result](@/guides/columns/column-summary/column-summary.md#round-a-column-summary-result)                                  |
     * | `customFunction`         | A function                                                              | [Custom summary function](@/guides/columns/column-summary/column-summary.md#implement-a-custom-summary-function)                         |
     *
     * Read more:
     * - [Column summary](@/guides/columns/column-summary/column-summary.md)
     * - [Plugins: `ColumnSummary`](@/api/columnSummary.md)
     *
     * @memberof Options#
     * @type {object[]|Function}
     * @default undefined
     * @category ColumnSummary
     *
     * @example
     * ```js
     * columnSummary: [
     *   {
     *     sourceColumn: 0,
     *     ranges: [
     *       [0, 2], [4], [6, 8]
     *     ],
     *     type: 'custom',
     *     destinationRow: 4,
     *     destinationColumn: 1,
     *     forceNumeric: true,
     *     reversedRowCoords: true,
     *     suppressDataTypeErrors: false,
     *     readOnly: true,
     *     roundFloat: false,
     *     customFunction(endpoint) {
     *        return 100;
     *     }
     *   }
     * ],
     * ```
     */
    columnSummary: void 0,
    /**
     * The `colWidths` option sets columns' widths, in pixels.
     *
     * The default column width is 50px. To change it, set the `colWidths` option to one of the following:
     *
     * | Setting     | Description                                                                                          | Example                                                           |
     * | ----------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
     * | A number    | Set the same width for every column                                                                  | `colWidths: 100`                                                  |
     * | A string    | Set the same width for every column                                                                  | `colWidths: '100px'`                                              |
     * | An array    | Set widths separately for each column                                                                | `colWidths: [100, 120, undefined]`                                |
     * | A function  | Set column widths dynamically,<br>on each render                                                     | `colWidths(visualColumnIndex) { return visualColumnIndex * 10; }` |
     * | `undefined` | Used by the [modifyColWidth](@/api/hooks.md#modifyColWidth) hook,<br>to detect column width changes. | `colWidths: undefined`                                            |
     *
     * Setting `colWidths` even for a single column disables the {@link AutoColumnSize} plugin
     * for all columns. For this reason, if you use `colWidths`, we recommend you set a width for each one
     * of your columns. Otherwise, every column with an undefined width defaults back to 50px,
     * which may cut longer columns names.
     *
     * Read more:
     * - [Column width](@/guides/columns/column-width/column-width.md)
     * - [Hooks: `modifyColWidth`](@/api/hooks.md#modifyColWidth)
     * - [`autoColumnSize`](#autoColumnSize)
     *
     * @memberof Options#
     * @type {number|number[]|string|string[]|Array<undefined>|Function}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * // set every column's width to 100px
     * colWidths: 100,
     *
     * // set every column's width to 100px
     * colWidths: '100px',
     *
     * // set the first (by visual index) column's width to 100
     * // set the second (by visual index) column's width to 120
     * // set the third (by visual index) column's width to `undefined`, so that it defaults to 50px
     * // set any other column's width to the default 50px (note that longer cell values and column names can get cut)
     * colWidths: [100, 120, undefined],
     *
     * // set each column's width individually, using a function
     * colWidths(visualColumnIndex) {
     *   return visualColumnIndex * 10;
     * },
     * ```
     */
    colWidths: void 0,
    /**
     * The `commentedCellClassName` option lets you add a CSS class name to cells
     * that have comments.
     *
     * Read more:
     * - [Comments](@/guides/cell-features/comments/comments.md)
     * - [`comments`](#comments)
     * - [`readOnlyCellClassName`](#readOnlyCellClassName)
     * - [`currentRowClassName`](#currentRowClassName)
     * - [`currentHeaderClassName`](#currentHeaderClassName)
     * - [`activeHeaderClassName`](#activeHeaderClassName)
     * - [`invalidCellClassName`](#invalidCellClassName)
     * - [`placeholderCellClassName`](#placeholderCellClassName)
     * - [`readOnlyCellClassName`](#readOnlyCellClassName)
     * - [`noWordWrapClassName`](#noWordWrapClassName)
     * - [`TableClassName`](#TableClassName)
     * - [`className`](#className)
     *
     * @memberof Options#
     * @type {string}
     * @default 'htCommentCell'
     * @category Core
     *
     * @example
     * ```js
     * // add a `has-comment` CSS class name
     * // to each cell that has a comment
     * commentedCellClassName: 'has-comment',
     * ```
     */
    commentedCellClassName: "htCommentCell",
    /**
     * @description
     * The `comments` option configures the [`Comments`](@/api/comments.md) plugin.
     *
     * You can set the `comments` option to one of the following:
     *
     * | Setting   | Description                                                                                                                                                                           |
     * | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `true`    | - Enable the [`Comments`](@/api/comments.md) plugin<br>- Add comment menu items to the [context menu](@/guides/accessories-and-menus/context-menu/context-menu.md)                                 |
     * | `false`   | Disable the [`Comments`](@/api/comments.md) plugin                                                                                                                                    |
     * | An object | - Enable the [`Comments`](@/api/comments.md) plugin<br>- Add comment menu items to the [context menu](@/guides/accessories-and-menus/context-menu/context-menu.md)<br>- Configure comment settings |
     *
     * If you set the `comments` option to an object, you can configure the following comment options:
     *
     * | Option         | Possible settings           | Description                                         |
     * | -------------- | --------------------------- | --------------------------------------------------- |
     * | `displayDelay` | A number (default: `250`)   | Display comments after a delay (in milliseconds)    |
     * | `readOnly`     | `true` \| `false` (default) | `true`: Make comments read-only                     |
     * | `style`        | An object                   | Set comment boxes' `width` and `height` (in pixels) |
     *
     * Read more:
     * - [Comments](@/guides/cell-features/comments/comments.md)
     * - [Context menu](@/guides/accessories-and-menus/context-menu/context-menu.md)
     * - [`width`](#width)
     * - [`height`](#height)
     * - [`readOnly`](#readOnly)
     * - [`commentedCellClassName`](#commentedCellClassName)
     *
     * @memberof Options#
     * @type {boolean|object[]}
     * @default false
     * @category Comments
     *
     * @example
     * ```js
     * // enable the `Comments` plugin
     * comments: true,
     *
     * // enable the `Comments` plugin
     * // and configure its settings
     * comments: {
     *   // display all comments with a 1-second delay
     *   displayDelay: 1000,
     *   // make all comments read-only
     *   readOnly: true,
     *   // set the default size of all comment boxes
     *   style: {
     *     width: 300,
     *     height: 100
     *   }
     * }
     * ```
     */
    comments: false,
    /**
     * @description
     * The `contextMenu` option configures the [`ContextMenu`](@/api/contextMenu.md) plugin.
     *
     * You can set the `contextMenu` option to one of the following:
     *
     * | Setting   | Description                                                                                                                                                                                             |
     * | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `false`   | Disable the [`ContextMenu`](@/api/contextMenu.md) plugin                                                                                                                                                |
     * | `true`    | - Enable the [`ContextMenu`](@/api/contextMenu.md) plugin<br>- Use the [default context menu options](@/guides/accessories-and-menus/context-menu/context-menu.md#context-menu-with-default-options)                 |
     * | An array  | - Enable the [`ContextMenu`](@/api/contextMenu.md) plugin<br>- Modify [individual context menu options](@/guides/accessories-and-menus/context-menu/context-menu.md#context-menu-with-specific-options)              |
     * | An object | - Enable the [`ContextMenu`](@/api/contextMenu.md) plugin<br>- Apply a [custom context menu configuration](@/guides/accessories-and-menus/context-menu/context-menu.md#context-menu-with-a-fully-custom-configuration) |
     *
     * Read more:
     * - [Context menu](@/guides/accessories-and-menus/context-menu/context-menu.md)
     * - [Context menu: Context menu with default options](@/guides/accessories-and-menus/context-menu/context-menu.md#context-menu-with-default-options)
     * - [Context menu: Context menu with specific options](@/guides/accessories-and-menus/context-menu/context-menu.md#context-menu-with-specific-options)
     * - [Context menu: Context menu with fully custom configuration options](@/guides/accessories-and-menus/context-menu/context-menu.md#context-menu-with-a-fully-custom-configuration)
     * - [Plugins: `ContextMenu`](@/api/contextMenu.md)
     *
     * @memberof Options#
     * @type {boolean|string[]|object}
     * @default undefined
     * @category ContextMenu
     *
     * @example
     * ```js
     * // enable the `ContextMenu` plugin
     * // use the default context menu options
     * contextMenu: true,
     *
     * // enable the `ContextMenu` plugin
     * // and modify individual context menu options
     * contextMenu: ['row_above', 'row_below', '---------', 'undo', 'redo'],
     *
     * // enable the `ContextMenu` plugin
     * // and apply a custom context menu configuration
     * contextMenu: {
     *   items: {
     *     'option1': {
     *       name: 'Option 1'
     *     },
     *     'option2': {
     *       name: 'Option 2',
     *       submenu: {
     *         items: [
     *           {
     *             key: 'option2:suboption1',
     *             name: 'Suboption 1',
     *             callback: function(key, options) {
     *               ...
     *             }
     *           },
     *           ...
     *         ]
     *       }
     *     }
     *   }
     * },
     * ```
     */
    contextMenu: void 0,
    /**
     * @description
     * The `copyable` option determines whether a cell's value can be copied to the clipboard or not.
     *
     * You can set the `copyable` option to one of the following:
     *
     * | Setting                                                                                                        | Description                                                                                                            |
     * | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
     * | `true` (default)                                                                                               | - On pressing <kbd>**Ctrl**</kbd>/<kbd>**Cmd**</kbd>+<kbd>**C**</kbd>, add the cell's value to the clipboard         |
     * | `false`<br>(default for the [`password`](@/guides/cell-types/password-cell-type/password-cell-type.md) [cell type](#type))        | - On pressing <kbd>**Ctrl**</kbd>/<kbd>**Cmd**</kbd>+<kbd>**C**</kbd>, add an empty string (`""`) to the clipboard   |
     *
     * Read more:
     * - [Clipboard](@/guides/cell-features/clipboard/clipboard.md)
     * - [Configuration options: Cascading configuration](@/guides/getting-started/configuration-options/configuration-options.md#cascading-configuration)
     * - [Password cell type](@/guides/cell-types/password-cell-type/password-cell-type.md)
     *
     * @memberof Options#
     * @type {boolean}
     * @default true
     * @category Core
     *
     * @example
     * ```js
     * // enable copying for each cell of the entire grid
     * copyable: true,
     *
     * // enable copying for individual columns
     * columns: [
     *   {
     *     // enable copying for each cell of this column
     *     copyable: true
     *   },
     *   {
     *     // disable copying for each cell of this column
     *     copyable: false
     *   }
     * ]
     *
     * // enable copying for specific cells
     * cell: [
     *   {
     *     col: 0,
     *     row: 0,
     *     // disable copying for cell (0, 0)
     *     copyable: false,
     *   }
     * ],
     * ```
     */
    copyable: true,
    /**
     * The `copyPaste` option configures the [`CopyPaste`](@/api/copyPaste.md) plugin.
     *
     * You can set the `copyPaste` option to one of the following:
     *
     * | Setting           | Description                                                                                                            |
     * | ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
     * | `true` (default)  | Enable the [`CopyPaste`](@/api/copyPaste.md) plugin with the default configuration                                     |
     * | `false`           | Disable the [`CopyPaste`](@/api/copyPaste.md) plugin                                                                   |
     * | An object         | - Enable the [`CopyPaste`](@/api/copyPaste.md) plugin<br>- Modify the [`CopyPaste`](@/api/copyPaste.md) plugin options |
     *
     * ##### copyPaste: Additional options
     *
     * If you set the `copyPaste` option to an object, you can set the following `CopyPaste` plugin options:
     *
     * | Option                   | Possible settings                                  | Description                                                                                                                                                                                         |
     * | ------------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `columnsLimit`           | A number (default: `Infinity`)                     | The maximum number of columns that can be copied                                                                                                                                                    |
     * | `rowsLimit`              | A number (default: `Infinity`)                     | The maximum number of columns that can be copied                                                                                                                                                    |
     * | `pasteMode`              | `'overwrite'` \| `'shift_down'` \| `'shift_right'` | When pasting:<br>`'overwrite'`: overwrite the currently-selected cells<br>`'shift_down'`: move the currently-selected cells down<br>`'shift_right'`: move the currently-selected cells to the right |
     * | `copyColumnHeaders`      | Boolean (default: `false`)                         | `true`: add a context menu option for copying cells along with their nearest column headers                                                                                                         |
     * | `copyColumnGroupHeaders` | Boolean (default: `false`)                         | `true`: add a context menu option for copying cells along with all their related columns headers                                                                                                    |
     * | `copyColumnHeadersOnly`  | Boolean (default: `false`)                         | `true`: add a context menu option for copying column headers nearest to the selected cells (without copying cells)                                                                    |
     * | `uiContainer`            | An HTML element                                    | The UI container for the secondary focusable element                                                                                                                                                |
     *
     * Read more:
     * - [Plugins: `CopyPaste`](@/api/copyPaste.md)
     * - [Guides: Clipboard](@/guides/cell-features/clipboard/clipboard.md)
     *
     * @memberof Options#
     * @type {object|boolean}
     * @default true
     * @category CopyPaste
     *
     * @example
     * ```js
     * // enable the plugin with the default configuration
     * copyPaste: true // set by default
     *
     * // disable the plugin
     * copyPaste: false,
     *
     * // enable the plugin with a custom configuration
     * copyPaste: {
     *   // set a maximum number of columns that can be copied
     *   columnsLimit: 25,
     *
     *   // set a maximum number of rows that can be copied
     *   rowsLimit: 50,
     *
     *   // set the paste behavior
     *   pasteMode: 'shift_down',
     *
     *   // add the option to copy cells along with their nearest column headers
     *   copyColumnHeaders: true,
     *
     *   // add the option to copy cells along with all their related columns headers
     *   copyColumnGroupHeaders: true,
     *
     *   // add the option to copy just column headers (without copying cells)
     *   copyColumnHeadersOnly: true,
     *
     *   // set a UI container
     *   uiContainer: document.body,
     * },
     * ```
     */
    copyPaste: true,
    /**
     * The `correctFormat` option configures whether incorrectly-formatted times and dates are amended or not.
     *
     * When the user enters dates and times, Handsontable can automatically adjust their format
     * to match the [`dateFormat`](#dateFormat) and [`timeFormat`](@/guides/cell-types/time-cell-type/time-cell-type.md) settings.
     *
     * You can set the `correctFormat` option to one of the following:
     *
     * | Setting           | Description                                                                                                                                               |
     * | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `false` (default) | Don't correct the format of the entered date or time (treat the entered date or time as invalid)                                                          |
     * | `true`            | Correct the format of the entered date or time to match the [`dateFormat`](#dateFormat) or [`timeFormat`](@/guides/cell-types/time-cell-type/time-cell-type.md) settings |
     *
     * Read more:
     * - [Date cell type](@/guides/cell-types/date-cell-type/date-cell-type.md)
     * - [Time cell type](@/guides/cell-types/time-cell-type/time-cell-type.md)
     * - [`dateFormat`](#dateFormat)
     *
     * @memberof Options#
     * @type {boolean}
     * @default false
     * @category Core
     *
     * @example
     * ```js
     * columns: [
     *   {
     *   // set the `type` of each cell in this column to `date`
     *   type: 'date',
     *   // for every `date` cell of this column, set the date format to `YYYY-MM-DD`
     *   dateFormat: 'YYYY-MM-DD',
     *   // enforce the `YYYY-MM-DD` date format
     *   correctFormat: true
     *   },
     *
     *   {
     *   // set the `type` of each cell in this column to `time`
     *   type: 'time',
     *   // for every `time` cell of this column, set the time format to `h:mm:ss a`
     *   timeFormat: 'h:mm:ss a',
     *   // enforce the `h:mm:ss a` time format
     *   correctFormat: true
     *   },
     * ],
     * ```
     */
    correctFormat: false,
    /**
     * The `currentColClassName` option lets you add a CSS class name
     * to each cell of the currently-visible, currently-selected columns.
     *
     * Read more:
     * - [`currentRowClassName`](#currentRowClassName)
     * - [`currentHeaderClassName`](#currentHeaderClassName)
     * - [`activeHeaderClassName`](#activeHeaderClassName)
     * - [`invalidCellClassName`](#invalidCellClassName)
     * - [`placeholderCellClassName`](#placeholderCellClassName)
     * - [`readOnlyCellClassName`](#readOnlyCellClassName)
     * - [`commentedCellClassName`](#commentedCellClassName)
     * - [`noWordWrapClassName`](#noWordWrapClassName)
     * - [`TableClassName`](#TableClassName)
     * - [`className`](#className)
     *
     * @memberof Options#
     * @type {string}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * // add a `your-class-name` CSS class name
     * // to each cell of the currently-visible, currently-selected columns
     * currentColClassName: 'your-class-name',
     * ```
     */
    currentColClassName: void 0,
    /**
     * The `currentHeaderClassName` option lets you add a CSS class name
     * to every currently-visible, currently-selected header.
     *
     * Read more:
     * - [`currentRowClassName`](#currentRowClassName)
     * - [`currentColClassName`](#currentColClassName)
     * - [`activeHeaderClassName`](#activeHeaderClassName)
     * - [`invalidCellClassName`](#invalidCellClassName)
     * - [`readOnlyCellClassName`](#readOnlyCellClassName)
     * - [`commentedCellClassName`](#commentedCellClassName)
     * - [`noWordWrapClassName`](#noWordWrapClassName)
     * - [`TableClassName`](#TableClassName)
     * - [`className`](#className)
     *
     * @memberof Options#
     * @type {string}
     * @default 'ht__highlight'
     * @category Core
     *
     * @example
     * ```js
     * // add an `ht__highlight` CSS class name
     * // to every currently-visible, currently-selected header
     * currentHeaderClassName: 'ht__highlight',
     * ```
     */
    currentHeaderClassName: "ht__highlight",
    /**
     * The `currentRowClassName` option lets you add a CSS class name
     * to each cell of the currently-visible, currently-selected rows.
     *
     * Read more:
     * - [`currentColClassName`](#currentColClassName)
     * - [`currentHeaderClassName`](#currentHeaderClassName)
     * - [`activeHeaderClassName`](#activeHeaderClassName)
     * - [`invalidCellClassName`](#invalidCellClassName)
     * - [`placeholderCellClassName`](#placeholderCellClassName)
     * - [`readOnlyCellClassName`](#readOnlyCellClassName)
     * - [`commentedCellClassName`](#commentedCellClassName)
     * - [`noWordWrapClassName`](#noWordWrapClassName)
     * - [`TableClassName`](#TableClassName)
     * - [`className`](#className)
     *
     * @memberof Options#
     * @type {string}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * // add a `your-class-name` CSS class name
     * // to each cell of the currently-visible, currently-selected rows
     * currentRowClassName: 'your-class-name',
     * ```
     */
    currentRowClassName: void 0,
    /**
     * @description
     * The `customBorders` option configures the [`CustomBorders`](@/api/customBorders.md) plugin.
     *
     * To enable the [`CustomBorders`](@/api/customBorders.md) plugin
     * (and add its menu items to the [context menu](@/guides/accessories-and-menus/context-menu/context-menu.md)),
     * set the `customBorders` option to `true`.
     *
     * To enable the [`CustomBorders`](@/api/customBorders.md) plugin
     * and add a predefined border around a particular cell,
     * set the `customBorders` option to an array of objects.
     * Each object represents a border configuration for one cell, and has the following properties:
     *
     * | Property | Sub-properties     | Types                              | Description                                                       |
     * | -------- | ------------------ | ---------------------------------- | ----------------------------------------------------------------- |
     * | `row`    | -                  | `row`: Number                      | The cell's row coordinate.                                        |
     * | `col`    | -                  | `col`: Number                      | The cell's column coordinate.                                     |
     * | `start`  | `width`<br>`color` | `width`: Number<br>`color`: String | If the [layout direction](@/guides/internationalization/layout-direction/layout-direction.md) is LTR (default): `start` sets the width (`width`) and color (`color`) of the left-hand border.<br><br>If the [layout direction](@/guides/internationalization/layout-direction/layout-direction.md) is RTL: `start` sets the width (`width`) and color (`color`) of the right-hand border. |
     * | `end`    | `width`<br>`color` | `width`: Number<br>`color`: String | If the [layout direction](@/guides/internationalization/layout-direction/layout-direction.md) is LTR (default): `end` sets the width (`width`) and color (`color`) of the right-hand border.<br><br>If the [layout direction](@/guides/internationalization/layout-direction/layout-direction.md) is RTL: `end` sets the width (`width`) and color (`color`) of the left-hand border. |
     * | `top`    | `width`<br>`color` | `width`: Number<br>`color`: String | Sets the width (`width`) and color (`color`) of the top border. |
     * | `bottom` | `width`<br>`color` | `width`: Number<br>`color`: String | Sets the width (`width`) and color (`color`) of the bottom border. |
     *
     * To enable the [`CustomBorders`](@/api/customBorders.md) plugin
     * and add a predefined border around a range of cells,
     * set the `customBorders` option to an array of objects.
     * Each object represents a border configuration for a single range of cells, and has the following properties:
     *
     * | Property | Sub-properties                               | Types                                                            | Description                                                                                  |
     * | -------- | -------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
     * | `range`  | `from` {`row`, `col`}<br>`to` {`row`, `col`} | `from`: Object<br>`to`: Object<br>`row`: Number<br>`col`: Number | If the [layout direction](@/guides/internationalization/layout-direction/layout-direction.md) is LTR (default):<br>- `from` selects the range's top-left corner.<br>- `to` selects the range's bottom-right corner.<br><br>If the [layout direction](@/guides/internationalization/layout-direction/layout-direction.md) is RTL: <br>- `from` selects the range's top-right corner.<br>- `to` selects the range's bottom-left corner. |
     * | `start`  | `width`<br>`color` | `width`: Number<br>`color`: String | If the [layout direction](@/guides/internationalization/layout-direction/layout-direction.md) is LTR (default): `start` sets the width (`width`) and color (`color`) of the left-hand border.<br><br>If the [layout direction](@/guides/internationalization/layout-direction/layout-direction.md) is RTL: `start` sets the width (`width`) and color (`color`) of the right-hand border. |
     * | `end`    | `width`<br>`color` | `width`: Number<br>`color`: String | If the [layout direction](@/guides/internationalization/layout-direction/layout-direction.md) is LTR (default): `end` sets the width (`width`) and color (`color`) of the right-hand border.<br><br>If the [layout direction](@/guides/internationalization/layout-direction/layout-direction.md) is RTL: `end` sets the width (`width`) and color (`color`) of the left-hand border. |
     * | `top`    | `width`<br>`color`                           | `width`: Number<br>`color`: String                               | Sets the width (`width`) and color (`color`) of the top border. |
     * | `bottom` | `width`<br>`color`                           | `width`: Number<br>`color`: String                               | Sets the width (`width`) and color (`color`) of the bottom border. |
     *
     * Read more:
     * - [Formatting cells: Custom cell borders](@/guides/cell-features/formatting-cells/formatting-cells.md#custom-cell-borders)
     * - [Context menu](@/guides/accessories-and-menus/context-menu/context-menu.md)
     * - [Plugins: `CustomBorders`](@/api/customBorders.md)
     * - [Layout direction](@/guides/internationalization/layout-direction/layout-direction.md)
     * - [`layoutDirection`](#layoutDirection)
     *
     * @memberof Options#
     * @type {boolean|object[]}
     * @default false
     * @category CustomBorders
     *
     * @example
     * ```js
     * // enable the `CustomBorders` plugin
     * customBorders: true,
     *
     * // enable the `CustomBorders` plugin
     * // and add a predefined border for a particular cell
     * customBorders: [
     *   // add an object with a border configuration for one cell
     *   {
     *     // set the cell's row coordinate
     *     row: 2,
     *     // set the cell's column coordinate
     *     col: 2,
     *     // set the left/right border's width and color
     *     start: {
     *       width: 2,
     *       color: 'red'
     *     },
     *     // set the right/left border's width and color
     *     end: {
     *       width: 1,
     *       color: 'green'
     *     },
     *     // set the top border's width and color
     *     top: '',
     *     // set the bottom border's width and color
     *     bottom: ''
     *   }
     * ],
     *
     * // enable the `CustomBorders` plugin
     * // and add a predefined border for a range of cells
     * customBorders: [
     *   // add an object with a border configuration for one range of cells
     *   {
     *     // select a range of cells
     *     range: {
     *       // set the range's top-left corner
     *       from: {
     *         row: 1,
     *         col: 1
     *       },
     *       // set the range's bottom-right corner
     *       to: {
     *         row: 3,
     *         col: 4
     *       }
     *     },
     *     // set the left/right border's width and color
     *     start: {
     *       width: 2,
     *       color: 'red'
     *     },
     *     // set the right/left border's width and color
     *     end: {},
     *     // set the top border's width and color
     *     top: {},
     *     // set the bottom border's width and color
     *     bottom: {}
     *   }
     * ],
     * ```
     */
    customBorders: false,
    /**
     * @description
     * The `data` option sets the initial [data](@/guides/getting-started/binding-to-data/binding-to-data.md) of your Handsontable instance.
     *
     * Handsontable's data is bound to your source data by reference (i.e. when you edit Handsontable's data, your source data alters as well).
     *
     * You can set the `data` option:
     * - Either to an [array of arrays](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-arrays).
     * - Or to an [array of objects](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-objects).
     *
     * If you don't set the `data` option (or set it to `null`), Handsontable renders as an empty 5x5 grid by default.
     *
     * Read more:
     * - [Binding to data](@/guides/getting-started/binding-to-data/binding-to-data.md)
     * - [`dataSchema`](#dataSchema)
     * - [`startRows`](#startRows)
     * - [`startCols`](#startCols)
     *
     * @memberof Options#
     * @type {Array[]|object[]}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * // as an array of arrays
     * data: [
     *   ['A', 'B', 'C'],
     *   ['D', 'E', 'F'],
     *   ['G', 'H', 'J']
     * ]
     *
     * // as an array of objects
     * data: [
     *   {id: 1, name: 'Ted Right'},
     *   {id: 2, name: 'Frank Honest'},
     *   {id: 3, name: 'Joan Well'},
     *   {id: 4, name: 'Gail Polite'},
     *   {id: 5, name: 'Michael Fair'},
     * ]
     * ```
     */
    data: void 0,
    /**
     * @description
     * If `true`, Handsontable will interpret the dots in the columns mapping as a nested object path. If your dataset contains
     * the dots in the object keys and you don't want Handsontable to interpret them as a nested object path, set this option to `false`.
     *
     * The option only works when defined in the global table settings.
     *
     * @since 14.4.0
     * @memberof Options#
     * @type {boolean}
     * @default true
     * @category Core
     *
     * @example
     * ```js
     * // All dots are interpreted as nested object paths
     * dataDotNotation: true,
     * data: [
     *   { id: 1, name: { first: 'Ted', last: 'Right' }, user: { address: '1234 Any Street' } },
     * ],
     * columns={[
     *   { data: 'name.first' },
     *   { data: 'user.address' },
     * ]},
     * ```
     * ```js
     * // All dots are interpreted as simple object keys
     * dataDotNotation: false,
     * data: [
     *   { id: 1, 'name.first': 'Ted', 'user.address': '1234 Any Street' },
     * ],
     * columns={[
     *   { data: 'name.first' },
     *   { data: 'user.address' },
     * ]},
     * ```
     */
    dataDotNotation: true,
    /**
     * @description
     * When the [`data`](#data) option is set to an [array of objects](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-objects)
     * (or is empty), the `dataSchema` option defines the structure of new rows.
     *
     * Using the `dataSchema` option, you can start out with an empty grid.
     *
     * You can set the `dataSchema` option to one of the following:
     * - An object
     * - A function
     *
     * Read more:
     * - [Binding to data: Array of objects with custom data schema](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-objects-with-custom-data-schema)
     * - [Binding to data: Function data source and schema](@/guides/getting-started/binding-to-data/binding-to-data.md#function-data-source-and-schema)
     * - [`data`](#data)
     *
     * @memberof Options#
     * @type {object|Function}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * // with `dataSchema`, you can start with an empty grid
     * data: null,
     * dataSchema: {id: null, name: {first: null, last: null}, address: null},
     * colHeaders: ['ID', 'First Name', 'Last Name', 'Address'],
     * columns: [
     *   {data: 'id'},
     *   {data: 'name.first'},
     *   {data: 'name.last'},
     *   {data: 'address'}
     * ],
     * startRows: 5,
     * minSpareRows: 1
     * ```
     */
    dataSchema: void 0,
    /**
     * The `dateFormat` option configures the date format accepted by [`date`](@/guides/cell-types/date-cell-type/date-cell-type.md) cells.
     *
     * You can set the `dateFormat` option to a string with a proper date format. The default value is: `'DD/MM/YYYY'`.
     *
     * To automatically correct dates whose format doesn't match the `dateFormat` setting, use the [`correctFormat`](#correctFormat) option.
     *
     * Read more:
     * - [Date cell type](@/guides/cell-types/date-cell-type/date-cell-type.md)
     * - [`correctFormat`](#correctFormat)
     * - [`defaultDate`](#defaultDate)
     *
     * @memberof Options#
     * @type {string}
     * @default 'DD/MM/YYYY'
     * @category Core
     *
     * @example
     * ```js
     * columns: [
     *   {
     *   // set the `type` of each cell in this column to `date`
     *   type: 'date',
     *   // for every `date` cell of this column, set the date format to `YYYY-MM-DD`
     *   dateFormat: 'YYYY-MM-DD',
     *   },
     * ],
     * ```
     */
    dateFormat: "DD/MM/YYYY",
    /**
     * The `timeFormat` option configures the time format accepted by [`time`](@/guides/cell-types/time-cell-type/time-cell-type.md) cells.
     *
     * You can set the `timeFormat` option to a string with a proper time format. The default value is: `'h:mm:ss a'`.
     *
     * To automatically correct times whose format doesn't match the `timeFormat` setting, use the [`correctFormat`](#correctFormat) option.
     *
     * Read more:
     * - [Time cell type](@/guides/cell-types/time-cell-type/time-cell-type.md)
     * - [`correctFormat`](#correctFormat)
     *
     * @memberof Options#
     * @type {string}
     * @default 'h:mm:ss a'
     * @category Core
     *
     * @example
     * ```js
     * columns: [
     *   {
     *   // set the `type` of each cell in this column to `time`
     *   type: 'time',
     *   // for every `time` cell of this column, set the time format to `h:mm:ss a`
     *   timeFormat: 'h:mm:ss a',
     *   },
     * ],
     * ```
     */
    timeFormat: "h:mm:ss a",
    /**
     * The `datePickerConfig` option configures the `date` [cell editor](@/guides/cell-functions/cell-editor/cell-editor.md)'s date picker, which uses an external dependency: [Pikaday](https://github.com/Pikaday/Pikaday/tree/1.8.2).
     *
     * You can set the `datePickerConfig` option to an object with any of the available [Pikaday options](https://github.com/Pikaday/Pikaday/tree/1.8.2#configuration),
     * except for the following, which are always overwritten by the `date` [cell editor](@/guides/cell-functions/cell-editor/cell-editor.md):
     * - `bound`
     * - `container`
     * - `field`
     * - `trigger`
     *
     * If the `datePickerConfig` option is not defined, the `date` [cell editor](@/guides/cell-functions/cell-editor/cell-editor.md) overwrites the following [Pikaday options](https://github.com/Pikaday/Pikaday/tree/1.8.2#configuration) as well:
     *
     * | Pikaday option       | Handsontable's setting |
     * | -------------------- | ---------------------- |
     * | `format`             | `'DD/MM/YYYY'`         |
     * | `reposition`         | `false`                |
     *
     * Read more:
     * - [`editor`](#editor)
     * - [`dateFormat`](#dateFormat)
     * - [Cell editor](@/guides/cell-functions/cell-editor/cell-editor.md)
     * - [All Pikaday options &#8594;](https://github.com/Pikaday/Pikaday/tree/1.8.2#configuration)
     *
     * @memberof Options#
     * @type {object}
     * @default undefined
     * @category Core
     */
    datePickerConfig: void 0,
    /**
     * The `defaultDate` option configures the date displayed
     * in empty [`date`](@/guides/cell-types/date-cell-type/date-cell-type.md) cells.
     *
     * You can set the `defaultDate` option to a string.
     *
     * Read more:
     * - [Date cell type](@/guides/cell-types/date-cell-type/date-cell-type.md)
     * - [`dateFormat`](#dateFormat)
     *
     * @memberof Options#
     * @type {string}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * columns: [
     *   {
     *     // set the `type` of each cell in this column to `date`
     *     type: 'date',
     *     // in every empty `date` cell of this column, display `2015-02-02`
     *     defaultDate: '2015-02-02'
     *   }
     * ],
     * ```
     */
    defaultDate: void 0,
    /**
     * @description
     * The `disableVisualSelection` option configures how
     * [selection](@/guides/cell-features/selection/selection.md) is shown.
     *
     * You can set the `disableVisualSelection` option to one of the following:
     *
     * | Setting           | Description                                                                                         |
     * | ----------------- | --------------------------------------------------------------------------------------------------- |
     * | `false` (default) | - Show single-cell selection<br>- Show range selection<br>- Show header selection                   |
     * | `true`            | - Don't show single-cell selection<br>- Don't show range selection<br>- Don't show header selection |
     * | `'current'`       | - Don't show single-cell selection<br>- Show range selection<br>- Show header selection             |
     * | `'area'`          | - Show single-cell selection<br>- Don't show range selection<br>- Show header selection             |
     * | `'header'`        | - Show single-cell selection<br>- Show range selection<br>- Don't show header selection             |
     * | An array          | A combination of `'current'`, `'area'`, and/or `'header'`                                           |
     *
     * Read more:
     * - [Selection](@/guides/cell-features/selection/selection.md)
     *
     * @memberof Options#
     * @type {boolean|string|string[]}
     * @default false
     * @category Core
     *
     * @example
     * ```js
     * // don't show single-cell selection
     * // don't show range selection
     * // don't show header selection
     * disableVisualSelection: true,
     *
     * // don't show single-cell selection
     * // show range selection
     * // show header selection
     * disableVisualSelection: 'current',
     *
     * // don't show single-cell selection
     * // don't show range selection
     * // show header selection
     * disableVisualSelection: ['current', 'area'],
     * ```
     */
    disableVisualSelection: false,
    /**
     * @description
     * The `dragToScroll` option configures the [`DragToScroll`](@/api/dragToScroll.md) plugin.
     *
     * You can set the `dragToScroll` option to one of the following:
     *
     * | Setting          | Description                                                                 |
     * | ---------------- | --------------------------------------------------------------------------- |
     * | `true` (default) | When selection reaches the edge of the grid's viewport, scroll the viewport |
     * | `false`          | Don't scroll the viewport                                                   |
     *
     * Read more:
     * - [Plugins: `DragToScroll`](@/api/dragToScroll.md)
     *
     * @memberof Options#
     * @type {boolean}
     * @default true
     * @category DragToScroll
     *
     * @example
     * ```js
     * // when selection reaches the edge of the grid's viewport, scroll the viewport
     * dragToScroll: true,
     * ```
     */
    dragToScroll: true,
    /**
     * The `dropdownMenu` option configures the [`DropdownMenu`](@/api/dropdownMenu.md) plugin.
     *
     * You can set the `dropdownMenu` option to one of the following:
     *
     * | Setting   | Description                                                                                                                                                                                  |
     * | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `false`   | Disable the [`DropdownMenu`](@/api/dropdownMenu.md) plugin                                                                                                                                   |
     * | `true`    | - Enable the [`DropdownMenu`](@/api/dropdownMenu.md) plugin<br>- Use the [default context menu options](@/guides/accessories-and-menus/context-menu/context-menu.md#context-menu-with-default-options)    |
     * | An array  | - Enable the [`DropdownMenu`](@/api/dropdownMenu.md) plugin<br>- Modify [individual context menu options](@/guides/accessories-and-menus/context-menu/context-menu.md#context-menu-with-specific-options) |
     * | An object | - Enable the [`DropdownMenu`](@/api/dropdownMenu.md) plugin<br>- Apply a custom dropdown menu configuration                                                                                  |
     *
     * Read more:
     * - [Context menu](@/guides/accessories-and-menus/context-menu/context-menu.md)
     * - [Plugins: `DropdownMenu`](@/api/dropdownMenu.md)
     *
     * @memberof Options#
     * @type {boolean|object|string[]}
     * @default undefined
     * @category DropdownMenu
     *
     * @example
     * ```js
     * // enable the `DropdownMenu` plugin
     * // use the default context menu options
     * dropdownMenu: true,
     *
     * // enable the `DropdownMenu` plugin
     * // and modify individual context menu options
     * dropdownMenu: ['---------', 'undo', 'redo'],
     *
     * // enable the `DropdownMenu` plugin
     * // and apply a custom dropdown menu configuration
     * dropdownMenu: {
     *   items: {
     *     'option1': {
     *       name: 'Option 1'
     *     },
     *     'option2': {
     *       name: 'Option 2',
     *       submenu: {
     *         items: [
     *           {
     *             key: 'option2:suboption1',
     *             name: 'Suboption 1',
     *             callback(key, options) {
     *               ...
     *             }
     *           },
     *           ...
     *         ]
     *       }
     *     }
     *   }
     * },
     * ```
     */
    dropdownMenu: void 0,
    /**
     * The `editor` option sets a [cell editor](@/guides/cell-functions/cell-editor/cell-editor.md) for a cell.
     *
     * You can set the `editor` option to one of the following [cell editor aliases](@/guides/cell-functions/cell-editor/cell-editor.md):
     *
     * | Alias               | Cell editor function                                                       |
     * | ------------------- | -------------------------------------------------------------------------- |
     * | A custom alias      | Your [custom cell editor](@/guides/cell-functions/cell-editor/cell-editor.md) function |
     * | `'autocomplete'`    | `AutocompleteEditor`                                                       |
     * | `'base'`            | `BaseEditor`                                                               |
     * | `'checkbox'`        | `CheckboxEditor`                                                           |
     * | `'date'`            | `DateEditor`                                                               |
     * | `'dropdown'`        | `DropdownEditor`                                                           |
     * | `'handsontable'`    | `HandsontableEditor`                                                       |
     * | `'numeric'`         | `NumericEditor`                                                            |
     * | `'password'`        | `PasswordEditor`                                                           |
     * | `'select'`          | `SelectEditor`                                                             |
     * | `'text'`            | `TextEditor`                                                               |
     * | `'time'`            | `TimeEditor`                                                               |
     *
     * To disable editing cells through cell editors,
     * set the `editor` option to `false`.
     * You'll still be able to change cells' content through Handsontable's API
     * or through plugins (e.g. [`CopyPaste`](@/api/copyPaste.md)), though.
     *
     * To set the [`editor`](#editor), [`renderer`](#renderer), and [`validator`](#validator)
     * options all at once, use the [`type`](#type) option.
     *
     * Read more:
     * - [Cell editor](@/guides/cell-functions/cell-editor/cell-editor.md)
     * - [Cell type](@/guides/cell-types/cell-type/cell-type.md)
     * - [Configuration options: Cascading configuration](@/guides/getting-started/configuration-options/configuration-options.md#cascading-configuration)
     * - [`type`](#type)
     *
     * @memberof Options#
     * @type {string|Function|boolean}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * // use the `numeric` editor for each cell of the entire grid
     * editor: 'numeric',
     *
     * // apply the `editor` option to individual columns
     * columns: [
     *   {
     *     // use the `autocomplete` editor for each cell of this column
     *     editor: 'autocomplete'
     *   },
     *   {
     *     // disable editing cells through cell editors for each cell of this column
     *     editor: false
     *   }
     * ]
     * ```
     */
    editor: void 0,
    /**
     * The `enterBeginsEditing` option configures the action of the <kbd>**Enter**</kbd> key.
     *
     * You can set the `enterBeginsEditing` option to one of the following:
     *
     * | Setting          | Description                                                                                                                                                                                               |
     * | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `true` (default) | - On pressing <kbd>**Enter**</kbd> once, enter the editing mode of the active cell<br>- On pressing <kbd>**Enter**</kbd> twice, move to another cell,<br>as configured by the [`enterMoves`](#enterMoves) setting |
     * | `false`          | - On pressing <kbd>**Enter**</kbd> once, move to another cell,<br>as configured by the [`enterMoves`](#enterMoves) setting                                                                                    |
     *
     * Read more:
     * - [`enterMoves`](#enterMoves)
     *
     * @memberof Options#
     * @type {boolean}
     * @default true
     * @category Core
     *
     * @example
     * ```js
     * // press Enter once to start editing
     * // press Enter twice to move to another cell
     * enterBeginsEditing: true,
     *
     * // press Enter once to move to another cell
     * enterBeginsEditing: false,
     * ```
     */
    enterBeginsEditing: true,
    /**
     * The `enterMoves` option configures the action of the <kbd>**Enter**</kbd> key.
     *
     * If the [`enterBeginsEditing`](#enterBeginsEditing) option is set to `true`,
     * the `enterMoves` setting applies to the **second** pressing of the <kbd>**Enter**</kbd> key.
     *
     * If the [`enterBeginsEditing`](#enterBeginsEditing) option is set to `false`,
     * the `enterMoves` setting applies to the **first** pressing of the <kbd>**Enter**</kbd> key.
     *
     * You can set the `enterMoves` option to an object with the following properties
     * (or to a function that returns such an object):
     *
     * | Property | Type   | Description                                                                                                                                              |
     * | -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `col`    | Number | - On pressing <kbd>**Enter**</kbd>, move selection `col` columns right<br>- On pressing <kbd>**Shift**</kbd>+<kbd>**Enter**</kbd>, move selection `col` columns left |
     * | `row`    | Number | - On pressing <kbd>**Enter**</kbd>, move selection `row` rows down<br>- On pressing <kbd>**Shift**</kbd>+<kbd>**Enter**</kbd>, move selection `row` rows up          |
     *
     * Read more:
     * - [`enterBeginsEditing`](#enterBeginsEditing)
     *
     * @memberof Options#
     * @type {object|Function}
     * @default {col: 0, row: 1}
     * @category Core
     *
     * @example
     * ```js
     * // on pressing Enter, move selection 1 column right and 1 row down
     * // on pressing Shift+Enter, move selection 1 column left and 1 row up
     * enterMoves: {col: 1, row: 1},
     *
     * // the same setting, as a function
     * // `event` is a DOM Event object received on pressing Enter
     * // you can use it to check whether the user pressed Enter or Shift+Enter
     * enterMoves(event) {
     *   return {col: 1, row: 1};
     * },
     * ```
     */
    enterMoves: {
      col: 0,
      row: 1
    },
    /**
     * The `fillHandle` option configures the [Autofill](@/api/autofill.md) plugin.
     *
     * You can set the `fillHandle` option to one the following:
     *
     * | Setting        | Description                                                                |
     * | -------------- | -------------------------------------------------------------------------- |
     * | `true`         | - Enable autofill in all directions<br>- Add the fill handle               |
     * | `false`        | Disable autofill                                                           |
     * | `'vertical'`   | - Enable vertical autofill<br>- Add the fill handle                        |
     * | `'horizontal'` | - Enable horizontal autofill<br>- Add the fill handle                      |
     * | An object      | - Enable autofill<br>- Add the fill handle<br>- Configure autofill options |
     *
     * If you set the `fillHandle` option to an object, you can configure the following autofill options:
     *
     * | Option          | Possible settings              | Description                                                                                               |
     * | --------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------- |
     * | `autoInsertRow` | `true` (default) \| `false`    | `true`: When you reach the grid's bottom, add new rows<br>`false`: When you reach the grid's bottom, stop |
     * | `direction`     | `'vertical'` \| `'horizontal'` | `'vertical'`: Enable vertical autofill<br>`'horizontal'`: Enable horizontal autofill                      |
     *
     * Read more:
     * - [AutoFill values](@/guides/cell-features/autofill-values/autofill-values.md)
     *
     * @memberof Options#
     * @type {boolean|string|object}
     * @default true
     * @category Core
     *
     * @example
     * ```js
     * // enable autofill in all directions
     * // with `autoInsertRow` enabled
     * fillHandle: true,
     *
     * // enable vertical autofill
     * // with `autoInsertRow` enabled
     * fillHandle: 'vertical',
     *
     * // enable horizontal autofill
     * // with `autoInsertRow` enabled
     * fillHandle: 'horizontal',
     *
     * // enable autofill in all directions
     * // with `autoInsertRow` disabled
     * fillHandle: {
     *   autoInsertRow: false,
     * },
     *
     * // enable vertical autofill
     * // with `autoInsertRow` disabled
     * fillHandle: {
     *   autoInsertRow: false,
     *   direction: 'vertical'
     * },
     * ```
     */
    fillHandle: {
      autoInsertRow: false
    },
    /**
     * The `filter` option configures whether [`autocomplete`](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md) cells'
     * lists are updated by the end user's input.
     *
     * You can set the `filter` option to one of the following:
     *
     * | Setting          | Description                                                                                                           |
     * | ---------------- | --------------------------------------------------------------------------------------------------------------------- |
     * | `true` (default) | When the end user types into the input area, only options matching the input are displayed                            |
     * | `false`          | When the end user types into the input area, all options are displayed<br>(options matching the input are put in bold |
     *
     * Read more:
     * - [Autocomplete cell type](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md)
     * - [`source`](#source)
     * - [`filteringCaseSensitive`](#filteringCaseSensitive)
     *
     * @memberof Options#
     * @type {boolean}
     * @default true
     * @category Core
     *
     * @example
     * ```js
     * columns: [{
     *   // set the `type` of each cell in this column to `autocomplete`
     *   type: 'autocomplete',
     *   // set options available in every `autocomplete` cell of this column
     *   source: ['A', 'B', 'C'],
     *   // when the end user types in `A`, display only the A option
     *   // when the end user types in `B`, display only the B option
     *   // when the end user types in `C`, display only the C option
     *   filter: true
     * }],
     * ```
     */
    filter: true,
    /**
     * The `filteringCaseSensitive` option configures whether [`autocomplete`](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md) cells'
     * input is case-sensitive.
     *
     * You can set the `filteringCaseSensitive` option to one of the following:
     *
     * | Setting           | Description                                                                                        |
     * | ----------------- | -------------------------------------------------------------------------------------------------- |
     * | `false` (default) | [`autocomplete`](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md) cells' input is not case-sensitive |
     * | `true`            | [`autocomplete`](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md) cells' input is case-sensitive     |
     *
     * Read more:
     * - [Autocomplete cell type](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md)
     * - [`source`](#source)
     * - [`filter`](#filter)
     *
     * @memberof Options#
     * @type {boolean}
     * @default false
     * @category Core
     *
     * @example
     * ```js
     * columns: [
     *   {
     *     type: 'autocomplete',
     *     source: [ ... ],
     *     // match case while searching autocomplete options
     *     filteringCaseSensitive: true
     *   }
     * ],
     * ```
     */
    filteringCaseSensitive: false,
    /**
     * The `filters` option configures the [`Filters`](@/api/filters.md) plugin.
     *
     * You can set the `filters` option to one of the following:
     *
     * | Setting | Description                                      |
     * | ------- | ------------------------------------------------ |
     * | `false` | Disable the [`Filters`](@/api/filters.md) plugin |
     * | `true`  | Enable the [`Filters`](@/api/filters.md) plugin  |
     *
     * Read more:
     * - [Column filter](@/guides/columns/column-filter/column-filter.md)
     * - [Plugins: `Filters`](@/api/filters.md)
     * - [`dropdownMenu`](#dropdownMenu)
     *
     * @memberof Options#
     * @type {boolean}
     * @default undefined
     * @category Filters
     *
     * @example
     * ```js
     * // enable the `Filters` plugin
     * filters: true,
     * ```
     */
    filters: void 0,
    /**
     * `fixedColumnsLeft` is a legacy option.
     *
     * If your grid's [layout direction](@/guides/internationalization/layout-direction/layout-direction.md) is LTR (default), `fixedColumnsLeft` acts like the [`fixedColumnsStart`](#fixedColumnsStart) option.
     *
     * If your grid's [layout direction](@/guides/internationalization/layout-direction/layout-direction.md) is RTL, using `fixedColumnsLeft` throws an error.
     *
     * Use [`fixedColumnsStart`](#fixedColumnsStart), which works in any layout direction.
     *
     * Read more:
     * - [`fixedColumnsStart`](#fixedcolumnsstart)
     *
     * @memberof Options#
     * @type {number}
     * @default 0
     * @category Core
     *
     * @example
     * ```js
     * // freeze the first 3 columns from the left
     * fixedColumnsLeft: 3,
     * ```
     */
    fixedColumnsLeft: 0,
    /**
     * If your grid's [layout direction](@/guides/internationalization/layout-direction/layout-direction.md) is LTR (default), the `fixedColumnsStart` option sets the number of [frozen columns](@/guides/columns/column-freezing/column-freezing.md) at the left-hand edge of the grid.
     *
     * If your grid's [layout direction](@/guides/internationalization/layout-direction/layout-direction.md) is RTL, the `fixedColumnsStart` option sets the number of [frozen columns](@/guides/columns/column-freezing/column-freezing.md) at the right-hand edge of the grid.
     *
     * Read more:
     * - [Column freezing](@/guides/columns/column-freezing/column-freezing.md)
     * - [Layout direction](@/guides/internationalization/layout-direction/layout-direction.md)
     * - [`fixedColumnsLeft`](#fixedcolumnsleft)
     * - [`layoutDirection`](#layoutDirection)
     *
     * @memberof Options#
     * @type {number}
     * @default 0
     * @category Core
     *
     * @example
     * ```js
     * // when `layoutDirection` is set to `inherit` (default)
     * // freeze the first 3 columns from the left or from the right
     * // depending on your HTML document's `dir` attribute
     * layoutDirection: 'inherit',
     * fixedColumnsStart: 3,
     *
     * // when `layoutDirection` is set to `rtl`
     * // freeze the first 3 columns from the right
     * // regardless of your HTML document's `dir` attribute
     * layoutDirection: 'rtl',
     * fixedColumnsStart: 3,
     *
     * // when `layoutDirection` is set to `ltr`
     * // freeze the first 3 columns from the left
     * // regardless of your HTML document's `dir` attribute
     * layoutDirection: 'ltr',
     * fixedColumnsStart: 3,
     * ```
     */
    fixedColumnsStart: 0,
    /**
     * The `fixedRowsBottom` option sets the number of [frozen rows](@/guides/rows/row-freezing/row-freezing.md)
     * at the bottom of the grid.
     *
     * Read more:
     * - [Row freezing](@/guides/rows/row-freezing/row-freezing.md)
     *
     * @memberof Options#
     * @type {number}
     * @default 0
     * @category Core
     *
     * @example
     * ```js
     * // freeze the bottom 3 rows
     * fixedRowsBottom: 3,
     * ```
     */
    fixedRowsBottom: 0,
    /**
     * The `fixedRowsTop` option sets the number of [frozen rows](@/guides/rows/row-freezing/row-freezing.md) at the top of the grid.
     *
     * Read more:
     * - [Row freezing](@/guides/rows/row-freezing/row-freezing.md)
     *
     * @memberof Options#
     * @type {number}
     * @default 0
     * @category Core
     *
     * @example
     * ```js
     * // freeze the top 3 rows
     * fixedRowsTop: 3,
     * ```
     */
    fixedRowsTop: 0,
    /**
     * The `formulas` option configures the [`Formulas`](@/api/formulas.md) plugin.
     *
     * The [`Formulas`](@/api/formulas.md) plugin uses the [HyperFormula](https://handsontable.github.io/hyperformula/) calculation engine.
     * To install [HyperFormula](https://handsontable.github.io/hyperformula/), read the following:
     * - [Formula calculation: Initialization methods](@/guides/formulas/formula-calculation/formula-calculation.md#initialization-methods)
     *
     * You can set the `formulas` option to an object with the following properties:
     *
     * | Property    | Possible values                                                                                                                                                                                                        |
     * | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `engine`    | `HyperFormula` \|<br>A [HyperFormula](https://handsontable.github.io/hyperformula/) instance \|<br>A [HyperFormula configuration](https://handsontable.github.io/hyperformula/api/interfaces/configparams.html) object |
     * | `sheetId`   | A number                                                                                                                                                                                                               |
     * | `sheetName` | A string                                                                                                                                                                                                               |
     *
     * Read more:
     * - [Plugins: `Formulas`](@/api/formulas.md)
     * - [Formula calculation](@/guides/formulas/formula-calculation/formula-calculation.md)
     * - [HyperFormula documentation: Client-side installation](https://handsontable.github.io/hyperformula/guide/client-side-installation)
     * - [HyperFormula documentation: Configuration options](https://handsontable.github.io/hyperformula/api/interfaces/configparams.html)
     *
     * @memberof Options#
     * @type {object}
     * @default undefined
     * @category Formulas
     *
     * @example
     * ```js
     * // either add the `HyperFormula` class
     * formulas: {
     *   // set `engine` to `HyperFormula`
     *   engine: HyperFormula,
     *   sheetId: 1,
     *   sheetName: 'Sheet 1'
     * }
     *
     * // or, add a HyperFormula instance
     * // initialized with the `'internal-use-in-handsontable'` license key
     * const hyperformulaInstance = HyperFormula.buildEmpty({
     *   licenseKey: 'internal-use-in-handsontable',
     * });
     *
     * formulas: {
     *   // set `engine` to a HyperFormula instance
     *   engine: hyperformulaInstance,
     *   sheetId: 1,
     *   sheetName: 'Sheet 1'
     * }
     *
     * // or, add a HyperFormula configuration object
     * formulas: {
     *   // set `engine` to a HyperFormula configuration object
     *   engine: {
     *     hyperformula: HyperFormula // or `engine: hyperformulaInstance`
     *     leapYear1900: false,       // this option comes from HyperFormula
     *     // add more HyperFormula configuration options
     *   },
     *   sheetId: 1,
     *   sheetName: 'Sheet 1'
     * }
     *
     * // use the same HyperFormula instance in multiple Handsontable instances
     *
     * // a Handsontable instance `hot1`
     * formulas: {
     *   engine: HyperFormula,
     *   sheetId: 1,
     *   sheetName: 'Sheet 1'
     * }
     *
     * // a Handsontable instance `hot2`
     * formulas: {
     *   engine: hot1.getPlugin('formulas').engine,
     *   sheetId: 1,
     *   sheetName: 'Sheet 1'
     * }
     * ```
     */
    formulas: void 0,
    /**
     * The `fragmentSelection` option configures text selection settings.
     *
     * You can set the `fragmentSelection` option to one of the following:
     *
     * | Setting           | Description                                        |
     * | ----------------- | ------------------------------------------------- |
     * | `false` (default) | Disable text selection                            |
     * | `true`            | Enable text selection in multiple cells at a time |
     * | `'cell'`          | Enable text selection in one cell at a time       |
     *
     * @memberof Options#
     * @type {boolean|string}
     * @default false
     * @category Core
     *
     * @example
     * ```js
     * // enable text selection in multiple cells at a time
     * fragmentSelection: true,
     *
     * // enable text selection in one cell a time
     * fragmentSelection: 'cell',
     * ```
     */
    fragmentSelection: false,
    /**
     * The `height` option configures the height of your grid.
     *
     * You can set `height` option to one of the following:
     *
     * | Setting                                                                    | Example                    |
     * | -------------------------------------------------------------------------- | -------------------------- |
     * | A number of pixels                                                         | `height: 500`              |
     * | A string with a [CSS unit](https://www.w3schools.com/cssref/css_units.asp) | `height: '75vw'`           |
     * | A function that returns a valid number or string                           | `height() { return 500; }` |
     *
     * Read more:
     * - [Grid size](@/guides/getting-started/grid-size/grid-size.md)
     *
     * @memberof Options#
     * @type {number|string|Function}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * // set the grid's height to 500px
     * height: 500,
     *
     * // set the grid's height to 75vh
     * height: '75vh',
     *
     * // set the grid's height to 500px, using a function
     * height() {
     *   return 500;
     * },
     * ```
     */
    height: void 0,
    /**
     * The `hiddenColumns` option configures the [`HiddenColumns`](@/api/hiddenColumns.md) plugin.
     *
     * You can set the `hiddenColumns` option to one of the following:
     *
     * | Setting   | Description                                                                                  |
     * | --------- | -------------------------------------------------------------------------------------------- |
     * | `false`   | Disable the [`HiddenColumns`](@/api/hiddenColumns.md) plugin                                 |
     * | `true`    | Enable the [`HiddenColumns`](@/api/hiddenColumns.md) plugin with the default plugin options  |
     * | An object | - Enable the [`HiddenColumns`](@/api/hiddenColumns.md) plugin<br>- Modify the plugin options |
     *
     * If you set the `hiddenColumns` to an object, you can set the following [`HiddenColumns`](@/api/hiddenColumns.md) plugin options:
     *
     * | Property           | Possible values     | Description                                                                                                                                             |
     * | ------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `columns`          | An array of indexes | An array of indexes of columns that are hidden at initialization                                                                                        |
     * | `copyPasteEnabled` | `true` \| `false`   | `true`: when copying or pasting data, take hidden columns into account<br>`false`: when copying or pasting data, don't take hidden columns into account |
     * | `indicators`       | `true` \| `false`   | `true`: display UI markers to indicate the presence of hidden columns<br>`false`: display UI markers                                                    |
     *
     * Read more:
     * - [Plugins: `HiddenColumns`](@/api/hiddenColumns.md)
     * - [Column hiding](@/guides/columns/column-hiding/column-hiding.md)
     *
     * @memberof Options#
     * @type {boolean|object}
     * @default undefined
     * @category HiddenColumns
     *
     * @example
     * ```js
     * // enable the `HiddenColumns` plugin
     * hiddenColumns: true,
     *
     * // enable `HiddenColumns` plugin, and modify the plugin options
     * hiddenColumns: {
     *   // set columns that are hidden by default
     *   columns: [5, 10, 15],
     *   // when copying or pasting data, take hidden columns into account
     *   copyPasteEnabled: true,
     *   // show where hidden columns are
     *   indicators: true
     * }
     * ```
     */
    hiddenColumns: void 0,
    /**
     * The `hiddenRows` option configures the [`HiddenRows`](@/api/hiddenRows.md) plugin.
     *
     * You can set the `hiddenRows` option to one of the following:
     *
     * | Setting   | Description                                                                            |
     * | --------- | -------------------------------------------------------------------------------------- |
     * | `false`   | Disable the [`HiddenRows`](@/api/hiddenRows.md) plugin                                 |
     * | `true`    | Enable the [`HiddenRows`](@/api/hiddenRows.md) plugin with the default plugin options  |
     * | An object | - Enable the [`HiddenRows`](@/api/hiddenRows.md) plugin<br>- Modify the plugin options |
     *
     * If you set the `hiddenRows` to an object, you can set the following [`HiddenRows`](@/api/hiddenRows.md) plugin options:
     *
     * | Property           | Possible values     | Description                                                                                                                                       |
     * | ------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `rows   `          | An array of indexes | An array of indexes of rows that are hidden at initialization                                                                                     |
     * | `copyPasteEnabled` | `true` \| `false`   | `true`: when copying or pasting data, take hidden rows into account<br>`false`: when copying or pasting data, don't take hidden rows into account |
     * | `indicators`       | `true` \| `false`   | `true`: display UI markers to indicate the presence of hidden rows<br>`false`: display UI markers                                                 |
     *
     * Read more:
     * - [Plugins: `HiddenRows`](@/api/hiddenRows.md)
     * - [Row hiding](@/guides/rows/row-hiding/row-hiding.md)
     *
     * @memberof Options#
     * @type {boolean|object}
     * @default undefined
     * @category HiddenRows
     *
     * @example
     * ```js
     * // enable the `HiddenRows` plugin
     * hiddenRows: true,
     *
     * // enable `HiddenRows` plugin, and modify the plugin options
     * hiddenRows: {
     *   // set rows that are hidden by default
     *   rows: [5, 10, 15],
     *   // when copying or pasting data, take hidden rows into account
     *   copyPasteEnabled: true,
     *   // show where hidden rows are
     *   indicators: true
     * }
     * ```
     */
    hiddenRows: void 0,
    /**
     * The `invalidCellClassName` option lets you add a CSS class name to cells
     * that were marked as `invalid` by the [cell validator](@/guides/cell-functions/cell-validator/cell-validator.md).
     *
     * Read more:
     * - [Cell validator](@/guides/cell-functions/cell-validator/cell-validator.md)
     * - [`currentRowClassName`](#currentRowClassName)
     * - [`currentHeaderClassName`](#currentHeaderClassName)
     * - [`activeHeaderClassName`](#activeHeaderClassName)
     * - [`currentColClassName`](#currentColClassName)
     * - [`readOnlyCellClassName`](#readOnlyCellClassName)
     * - [`commentedCellClassName`](#commentedCellClassName)
     * - [`noWordWrapClassName`](#noWordWrapClassName)
     * - [`TableClassName`](#TableClassName)
     * - [`className`](#className)
     *
     * @memberof Options#
     * @type {string}
     * @default 'htInvalid'
     * @category Core
     *
     * @example
     * ```js
     * // add a `highlight-error` CSS class name
     * // to every `invalid` cell`
     * invalidCellClassName: 'highlight-error',
     * ```
     */
    invalidCellClassName: "htInvalid",
    /**
     * The `imeFastEdit` option allows using the "fast edit" feature for the IME users. It's disabled by default
     * because of its incompatibility with some of the accessibility features.
     *
     * Enabling this option can make a negative impact on how some screen readers handle reading the table cells.
     *
     * @since 14.0.0
     * @memberof Options#
     * @type {boolean}
     * @category Core
     */
    imeFastEdit: false,
    /**
     * The `isEmptyCol` option lets you define your own custom method
     * for checking if a column at a given visual index is empty.
     *
     * The `isEmptyCol` setting overwrites the built-in [`isEmptyCol`](@/api/core.md#isEmptyCol) method.
     *
     * @memberof Options#
     * @type {Function}
     * @param {number} col Visual column index.
     * @returns {boolean}
     * @category Core
     *
     * @example
     * ```js
     * // overwrite the built-in `isEmptyCol` method
     * isEmptyCol(visualColumnIndex) {
     *    // your custom method
     *    ...
     * },
     * ```
     */
    isEmptyCol(col) {
      let row;
      let rowLen;
      let value;
      for (row = 0, rowLen = this.countRows(); row < rowLen; row++) {
        value = this.getDataAtCell(row, col);
        if (isEmpty(value) === false) {
          return false;
        }
      }
      return true;
    },
    /**
     * The `isEmptyRow` option lets you define your own custom method
     * for checking if a row at a given visual index is empty.
     *
     * The `isEmptyRow` setting overwrites the built-in [`isEmptyRow`](@/api/core.md#isEmptyRow) method.
     *
     * @memberof Options#
     * @type {Function}
     * @param {number} row Visual row index.
     * @returns {boolean}
     * @category Core
     *
     * @example
     * ```js
     * // overwrite the built-in `isEmptyRow` method
     * isEmptyRow(visualRowIndex) {
     *    // your custom method
     *    ...
     * },
     * ```
     */
    isEmptyRow(row) {
      let col;
      let colLen;
      let value;
      let meta;
      for (col = 0, colLen = this.countCols(); col < colLen; col++) {
        value = this.getDataAtCell(row, col);
        if (isEmpty(value) === false) {
          if (typeof value === "object") {
            meta = this.getCellMeta(row, col);
            return isObjectEqual(this.getSchema()[meta.prop], value);
          }
          return false;
        }
      }
      return true;
    },
    /**
     * @description
     * The `label` option configures [`checkbox`](@/guides/cell-types/checkbox-cell-type/checkbox-cell-type.md) cells` labels.
     *
     * You can set the `label` option to an object with the following properties:
     *
     * | Property    | Possible values                   | Description                                                                                                                                                                                                             |
     * | ----------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `position`  | `'after'` (default) \| `'before'` | `'after'`: place the label to the right of the checkbox<br>`'before'`: place the label to the left of the checkbox                                                                                                      |
     * | `value`     | A string \| A function            | The label's text                                                                                                                                                                                                        |
     * | `separated` | `false` (default) \| `true`       | `false`: don't separate the label from the checkbox<br>`true`: separate the label from the checkbox                                                                                                                     |
     * | `property`  | A string                          | - A [`data`](#data) object property name that's used as the label's text <br>- Works only when the [`data`](#data) option is set to an [array of objects](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-objects) |
     *
     * Read more:
     * - [Checkbox cell type: Checkbox labels](@/guides/cell-types/checkbox-cell-type/checkbox-cell-type.md#checkbox-labels)
     *
     * @memberof Options#
     * @type {object}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * columns: [{
     *   type: 'checkbox',
     *   // add 'My label:' after the checkbox
     *   label: { position: 'after', value: 'My label: ', separated: true }
     * }],
     * ```
     */
    label: void 0,
    /**
     * The `language` option configures Handsontable's [language](@/guides/internationalization/language/language.md) settings.
     *
     * You can set the `language` option to one of the following:
     *
     * | Setting             | Description                 |
     * | ------------------- | --------------------------- |
     * | `'en-US'` (default) | English - United States     |
     * | `'ar-AR'`           | Arabic - Global<br><br>To properly render this language, set the [layout direction](@/guides/internationalization/layout-direction/layout-direction.md) to RTL. |
     * | `'cs-CZ'`           | Czech - Czech Republic      |
     * | `'de-CH'`           | German - Switzerland        |
     * | `'de-DE'`           | German - Germany            |
     * | `'es-MX'`           | Spanish - Mexico            |
     * | `'fr-FR'`           | French - France             |
     * | `'hr-HR'`           | Croatian - Croatia          |
     * | `'it-IT'`           | Italian - Italy             |
     * | `'ja-JP'`           | Japanese - Japan            |
     * | `'ko-KR'`           | Korean - Korea              |
     * | `'lv-LV'`           | Latvian - Latvia            |
     * | `'nb-NO'`           | Norwegian (Bokmål) - Norway |
     * | `'nl-NL'`           | Dutch - Netherlands         |
     * | `'pl-PL'`           | Polish - Poland             |
     * | `'pt-BR'`           | Portuguese - Brazil         |
     * | `'ru-RU'`           | Russian - Russia            |
     * | `'sr-SP'`           | Serbian (Latin) - Serbia    |
     * | `'zh-CN'`           | Chinese - China             |
     * | `'zh-TW'`           | Chinese - Taiwan            |
     *
     * Read more:
     * - [Language](@/guides/internationalization/language/language.md)
     * - [`locale`](#locale)
     * - [`layoutDirection`](#layoutdirection)
     *
     * @memberof Options#
     * @type {string}
     * @default 'en-US'
     * @category Core
     *
     * @example
     * ```js
     * // set Handsontable's language to Polish
     * language: 'pl-PL',
     * ```
     */
    language: "en-US",
    /**
     * The `layoutDirection` option configures whether Handsontable renders from the left to the right, or from the right to the left.
     *
     * You can set the layout direction only at Handsontable's [initialization](@/guides/getting-started/installation/installation.md#initialize-handsontable). Any change of the `layoutDirection` option after the initialization (e.g. using the [`updateSettings()`](@/api/core.md#updatesettings) method) is ignored.
     *
     * You can set the `layoutDirection` option only [for the entire grid](@/guides/getting-started/configuration-options/configuration-options.md#set-grid-options).
     * You can't set it for individual columns, rows, or cells.
     *
     * You can set the `layoutDirection` option to one of the following strings:
     *
     * | Setting             | Description                                                                                                                                                                                  |
     * | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `inherit` (default) | Set Handsontable's layout direction automatically,<br>based on the value of your HTML document's [`dir`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir) attribute  |
     * | `rtl`               | Render Handsontable from the right to the left,<br>even when your HTML document's [`dir`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir) attribute is set to `ltr` |
     * | `ltr`               | Render Handsontable from the left to the right,<br>even when your HTML document's [`dir`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir) attribute is set to `rtl` |
     *
     * Read more:
     * - [Layout direction](@/guides/internationalization/layout-direction/layout-direction.md)
     * - [Language](@/guides/internationalization/language/language.md)
     * - [`language`](#language)
     * - [`locale`](#locale)
     * - [`fixedColumnsStart`](#fixedcolumnsstart)
     * - [`customBorders`](#customBorders)
     *
     * @memberof Options#
     * @type {string}
     * @default 'inherit'
     * @category Core
     *
     * @example
     * ```js
     * // inherit Handsontable's layout direction
     * // from the value of your HTML document's `dir` attribute
     * layoutDirection: 'inherit',
     *
     * // render Handsontable from the right to the left
     * // regardless of your HTML document's `dir`
     * layoutDirection: 'rtl',
     *
     * // render Handsontable from the left to the right
     * // regardless of your HTML document's `dir`
     * layoutDirection: 'ltr',
     * ```
     */
    layoutDirection: "inherit",
    /**
     * The `licenseKey` option sets your Handsontable license key.
     *
     * You can set the `licenseKey` option to one of the following:
     *
     * | Setting                                                                                                 | Description                                                                                       |
     * | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
     * | A string with your [commercial license key](@/guides/getting-started/license-key/license-key.md#commercial-license) | For [commercial use](@/guides/technical-specification/software-license/software-license.md#commercial-use)         |
     * | `'non-commercial-and-evaluation'`                                                                       | For [non-commercial use](@/guides/technical-specification/software-license/software-license.md#non-commercial-use) |
     *
     * Read more:
     * - [License key](@/guides/getting-started/license-key/license-key.md)
     *
     * @memberof Options#
     * @type {string}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * // for commercial use
     * licenseKey: 'xxxxx-xxxxx-xxxxx-xxxxx-xxxxx', // your commercial license key
     *
     * // for non-commercial use
     * licenseKey: 'non-commercial-and-evaluation',
     * ```
     */
    licenseKey: void 0,
    /**
     * The `locale` option configures Handsontable's [locale](@/guides/internationalization/locale/locale.md) settings.
     *
     * You can set the `locale` option to any valid and canonicalized Unicode BCP 47 locale tag,
     * both for the [entire grid](@/guides/internationalization/locale/locale.md#set-the-grid-s-locale),
     * and for [individual columns](@/guides/internationalization/locale/locale.md#set-a-column-s-locale).
     *
     * Read more:
     * - [Locale](@/guides/internationalization/locale/locale.md)
     * - [`language`](#language)
     * - [`layoutDirection`](#layoutdirection)
     *
     * @memberof Options#
     * @type {string}
     * @default 'en-US'
     * @category Core
     *
     * @example
     * ```js
     * // set the entire grid's locale to Polish
     * locale: 'pl-PL',
     *
     * // set individual columns' locales
     * columns: [
     *   {
     *     // set the first column's locale to Polish
     *     locale: 'pl-PL',
     *   },
     *   {
     *     // set the second column's locale to German
     *     locale: 'de-DE',
     *   },
     * ],
     * ```
     */
    locale: "en-US",
    /**
     * The `manualColumnFreeze` option configures the [`ManualColumnFreeze`](@/api/manualColumnFreeze.md) plugin.
     *
     * You can set the `manualColumnFreeze` option to one of the following:
     *
     * | Setting  | Description                                                            |
     * | -------- | ---------------------------------------------------------------------- |
     * | `true`   | Enable the [`ManualColumnFreeze`](@/api/manualColumnFreeze.md) plugin  |
     * | `false`  | Disable the [`ManualColumnFreeze`](@/api/manualColumnFreeze.md) plugin |
     *
     * Read more:
     * - [Column freezing](@/guides/columns/column-freezing/column-freezing.md#user-triggered-freeze)
     *
     * @memberof Options#
     * @type {boolean}
     * @default undefined
     * @category ManualColumnFreeze
     *
     * @example
     * ```js
     * // enable the `ManualColumnFreeze` plugin
     * manualColumnFreeze: true,
     * ```
     */
    manualColumnFreeze: void 0,
    /**
     * The `manualColumnMove` option configures the [`ManualColumnMove`](@/api/manualColumnMove.md) plugin.
     *
     * You can set the `manualColumnMove` option to one of the following:
     *
     * | Setting  | Description                                                                                                        |
     * | -------- | ------------------------------------------------------------------------------------------------------------------ |
     * | `true`   | Enable the [`ManualColumnMove`](@/api/manualColumnMove.md) plugin                                                  |
     * | `false`  | Disable the [`ManualColumnMove`](@/api/manualColumnMove.md) plugin                                                 |
     * | An array | - Enable the [`ManualColumnMove`](@/api/manualColumnMove.md) plugin<br>- Move individual columns at initialization |
     *
     * Read more:
     * - [Column moving](@/guides/columns/column-moving/column-moving.md)
     *
     * @memberof Options#
     * @type {boolean|number[]}
     * @default undefined
     * @category ManualColumnMove
     *
     * @example
     * ```js
     * // enable the `ManualColumnMove` plugin
     * manualColumnMove: true,
     *
     * // enable the `ManualColumnMove` plugin
     * // at initialization, move column 0 to 1
     * // at initialization, move column 1 to 4
     * // at initialization, move column 2 to 6
     * manualColumnMove: [1, 4, 6],
     * ```
     */
    manualColumnMove: void 0,
    /**
     * @description
     * The `manualColumnResize` option configures the [`ManualColumnResize`](@/api/manualColumnResize.md) plugin.
     *
     * You can set the `manualColumnResize` option to one of the following:
     *
     * | Setting  | Description                                                                                                           |
     * | -------- | --------------------------------------------------------------------------------------------------------------------- |
     * | `true`   | Enable the [`ManualColumnResize`](@/api/manualColumnResize.md) plugin                                                 |
     * | `false`  | Disable the [`ManualColumnResize`](@/api/manualColumnResize.md) plugin                                                |
     * | An array | - Enable the [`ManualColumnResize`](@/api/manualColumnResize.md) plugin<br>- Set initial widths of individual columns |
     *
     * Read more:
     * - [Column width: Column stretching](@/guides/columns/column-width/column-width.md#column-stretching)
     *
     * @memberof Options#
     * @type {boolean|number[]}
     * @default undefined
     * @category ManualColumnResize
     *
     * @example
     * ```js
     * // enable the `manualColumnResize` plugin
     * manualColumnResize: true,
     *
     * // enable the `manualColumnResize` plugin
     * // set the initial width of column 0 to 40 pixels
     * // set the initial width of column 1 to 50 pixels
     * // set the initial width of column 2 to 60 pixels
     * manualColumnResize: [40, 50, 60],
     * ```
     */
    manualColumnResize: void 0,
    /**
     * @description
     * The `manualRowMove` option configures the [`ManualRowMove`](@/api/manualRowMove.md) plugin.
     *
     * You can set the `manualRowMove` option to one of the following:
     *
     * | Setting  | Description                                                                                               |
     * | -------- | --------------------------------------------------------------------------------------------------------- |
     * | `true`   | Enable the [`ManualRowMove`](@/api/manualRowMove.md) plugin                                               |
     * | `false`  | Disable the [`ManualRowMove`](@/api/manualRowMove.md) plugin                                              |
     * | An array | - Enable the [`ManualRowMove`](@/api/manualRowMove.md) plugin<br>- Move individual rows at initialization |
     *
     * Read more:
     * - [Row moving](@/guides/rows/row-moving/row-moving.md)
     *
     * @memberof Options#
     * @type {boolean|number[]}
     * @default undefined
     * @category ManualRowMove
     *
     * @example
     * ```js
     * // enable the `ManualRowMove` plugin
     * manualRowMove: true,
     *
     * // enable the `ManualRowMove` plugin
     * // at initialization, move row 0 to 1
     * // at initialization, move row 1 to 4
     * // at initialization, move row 2 to 6
     * manualColumnMove: [1, 4, 6],
     * ```
     */
    manualRowMove: void 0,
    /**
     * @description
     * The `manualRowResize` option configures the [`ManualRowResize`](@/api/manualRowResize.md) plugin.
     *
     * You can set the `manualRowResize` option to one of the following:
     *
     * | Setting  | Description                                                                                                   |
     * | -------- | ------------------------------------------------------------------------------------------------------------- |
     * | `true`   | Enable the [`ManualRowResize`](@/api/manualRowResize.md) plugin                                               |
     * | `false`  | Disable the [`ManualRowResize`](@/api/manualRowResize.md) plugin                                              |
     * | An array | - Enable the [`ManualRowResize`](@/api/manualRowResize.md) plugin<br>- Set initial heights of individual rows |
     *
     * Read more:
     * - [Row height: Adjust the row height manually](@/guides/rows/row-height/row-height.md#adjust-the-row-height-manually)
     *
     * @memberof Options#
     * @type {boolean|number[]}
     * @default undefined
     * @category ManualRowResize
     *
     * @example
     * ```js
     * // enable the `ManualRowResize` plugin
     * manualRowResize: true,
     *
     * // enable the `ManualRowResize` plugin
     * // set the initial height of row 0 to 40 pixels
     * // set the initial height of row 1 to 50 pixels
     * // set the initial height of row 2 to 60 pixels
     * manualRowResize: [40, 50, 60],
     * ```
     */
    manualRowResize: void 0,
    /**
     * The `maxCols` option sets a maximum number of columns.
     *
     * The `maxCols` option is used:
     * - At initialization: if the `maxCols` value is lower than the initial number of columns,
     * Handsontable trims columns from the right.
     * - At runtime: for example, when inserting columns.
     *
     * @memberof Options#
     * @type {number}
     * @default Infinity
     * @category Core
     *
     * @example
     * ```js
     * // set the maximum number of columns to 300
     * maxCols: 300,
     * ```
     */
    maxCols: Infinity,
    /**
     * The `maxRows` option sets a maximum number of rows.
     *
     * The `maxRows` option is used:
     * - At initialization: if the `maxRows` value is lower than the initial number of rows,
     * Handsontable trims rows from the bottom.
     * - At runtime: for example, when inserting rows.
     *
     * @memberof Options#
     * @type {number}
     * @default Infinity
     * @category Core
     *
     * @example
     * ```js
     * // set the maximum number of rows to 300
     * maxRows: 300,
     * ```
     */
    maxRows: Infinity,
    /**
     * @description
     * The `mergeCells` option configures the [`MergeCells`](@/api/mergeCells.md) plugin.
     *
     * You can set the `mergeCells` option to one of the following:
     *
     * | Setting             | Description                                                                                         |
     * | ------------------- | --------------------------------------------------------------------------------------------------- |
     * | `true`              | Enable the [`MergeCells`](@/api/mergeCells.md) plugin                                               |
     * | `false`             | Disable the [`MergeCells`](@/api/mergeCells.md) plugin                                              |
     * | An array of objects | - Enable the [`MergeCells`](@/api/mergeCells.md) plugin<br>- Merge specific cells at initialization |
     *
     * To merge specific cells at Handsontable's initialization,
     * set the `mergeCells` option to an array of objects, with the following properties:
     *
     * | Property  | Description                                                |
     * | --------- | ---------------------------------------------------------- |
     * | `row`     | The row index of the merged section's beginning            |
     * | `col`     | The column index of the merged section's beginning         |
     * | `rowspan` | The width (as a number of rows) of the merged section      |
     * | `colspan` | The height (as a number of columns ) of the merged section |
     *
     * Read more:
     * - [Merge cells](@/guides/cell-features/merge-cells/merge-cells.md)
     *
     * @memberof Options#
     * @type {boolean|object[]}
     * @default false
     * @category MergeCells
     *
     * @example
     * ```js
     * // enable the `MergeCells` plugin
     * mergeCells: true,
     *
     * // enable the `MergeCells` plugin
     * // and merge specific cells at initialization
     * mergeCells: [
     *   // merge cells from cell (1,1) to cell (3,3)
     *   {row: 1, col: 1, rowspan: 3, colspan: 3},
     *   // merge cells from cell (3,4) to cell (2,2)
     *   {row: 3, col: 4, rowspan: 2, colspan: 2},
     *   // merge cells from cell (5,6) to cell (3,3)
     *   {row: 5, col: 6, rowspan: 3, colspan: 3}
     * ],
     * ```
     */
    mergeCells: false,
    /**
     * The `minCols` option sets a minimum number of columns.
     *
     * The `minCols` option is used:
     * - At initialization: if the `minCols` value is higher than the initial number of columns,
     * Handsontable adds empty columns to the right.
     * - At runtime: for example, when removing columns.
     *
     * The `minCols` option works only when your [`data`](#data) is an [array of arrays](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-arrays).
     * When your [`data`](#data) is an [array of objects](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-objects),
     * you can only have as many columns as defined in:
     * - The first data row
     * - The [`dataSchema`](#dataSchema) option
     * - The [`columns`](#columns) option
     *
     * @memberof Options#
     * @type {number}
     * @default 0
     * @category Core
     *
     * @example
     * ```js
     * // set the minimum number of columns to 10
     * minCols: 10,
     * ```
     */
    minCols: 0,
    /**
     * The `minRows` option sets a minimum number of rows.
     *
     * The `minRows` option is used:
     * - At initialization: if the `minRows` value is higher than the initial number of rows,
     * Handsontable adds empty rows at the bottom.
     * - At runtime: for example, when removing rows.
     *
     * @memberof Options#
     * @type {number}
     * @default 0
     * @category Core
     *
     * @example
     * ```js
     * // set the minimum number of rows to 10
     * minRows: 10,
     * ```
     */
    minRows: 0,
    /**
     * The `minSpareCols` option sets a minimum number of empty columns
     * at the grid's right-hand end.
     *
     * If there already are other empty columns at the grid's right-hand end,
     * they are counted into the `minSpareCols` value.
     *
     * The total number of columns can't exceed the [`maxCols`](#maxCols) value.
     *
     * The `minSpareCols` option works only when your [`data`](#data) is an [array of arrays](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-arrays).
     * When your [`data`](#data) is an [array of objects](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-objects),
     * you can only have as many columns as defined in:
     * - The first data row
     * - The [`dataSchema`](#dataSchema) option
     * - The [`columns`](#columns) option
     *
     * @memberof Options#
     * @type {number}
     * @default 0
     * @category Core
     *
     * @example
     * ```js
     * // at Handsontable's initialization, add at least 3 empty columns on the right
     * minSpareCols: 3,
     * ```
     */
    minSpareCols: 0,
    /**
     * The `minSpareRows` option sets a minimum number of empty rows
     * at the bottom of the grid.
     *
     * If there already are other empty rows at the bottom,
     * they are counted into the `minSpareRows` value.
     *
     * The total number of rows can't exceed the [`maxRows`](#maxRows) value.
     *
     * @memberof Options#
     * @type {number}
     * @default 0
     * @category Core
     *
     * @example
     * ```js
     * // at Handsontable's initialization, add at least 3 empty rows at the bottom
     * minSpareRows: 3,
     * ```
     */
    minSpareRows: 0,
    /**
     * @description
     * The `multiColumnSorting` option configures the [`MultiColumnSorting`](@/api/columnSorting.md) plugin.
     *
     * You can set the `multiColumnSorting` option to one of the following:
     *
     * | Setting    | Description                                                                                                                                                |
     * | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `true`     | Enable the [`MultiColumnSorting`](@/api/multiColumnSorting.md) plugin with the default configuration                                                       |
     * | `false`    | Disable the [`MultiColumnSorting`](@/api/multiColumnSorting.md) plugin                                                                                     |
     * | An object  | - Enable the [`MultiColumnSorting`](@/api/multiColumnSorting.md) plugin<br>- Modify the [`MultiColumnSorting`](@/api/multiColumnSorting.md) plugin options |
     *
     * If you set the `multiColumnSorting` option to an object,
     * you can set the following [`MultiColumnSorting`](@/api/multiColumnSorting.md) plugin options:
     *
     * | Option                   | Possible settings                                                                                                                                |
     * | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
     * | `indicator`              | `true`: Display the arrow icon in the column header, to indicate a sortable column<br>`false`: Don't display the arrow icon in the column header |
     * | `headerAction`           | `true`: Enable clicking on the column header to sort the column<br>`false`: Disable clicking on the column header to sort the column             |
     * | `sortEmptyCells`         | `true`: Sort empty cells as well<br>`false`: Place empty cells at the end                                                                        |
     * | `compareFunctionFactory` | A [custom compare function](@/guides/rows/rows-sorting/rows-sorting.md#add-a-custom-comparator)                                                               |
     *
     * If you set the `multiColumnSorting` option to an object,
     * you can also sort individual columns at Handsontable's initialization.
     * In the `multiColumnSorting` object, add an object named `initialConfig`,
     * with the following properties:
     *
     * | Option      | Possible settings   | Description                                                      |
     * | ----------- | ------------------- | ---------------------------------------------------------------- |
     * | `column`    | A number            | The index of the column that you want to sort at initialization  |
     * | `sortOrder` | `'asc'` \| `'desc'` | The sorting order:<br>`'asc'`: ascending<br>`'desc'`: descending |
     *
     * Read more:
     * - [Rows sorting](@/guides/rows/rows-sorting/rows-sorting.md)
     * - [`columnSorting`](#columnSorting)
     *
     * @memberof Options#
     * @type {boolean|object}
     * @default undefined
     * @category MultiColumnSorting
     *
     * @example
     * ```js
     * // enable the `MultiColumnSorting` plugin
     * multiColumnSorting: true
     *
     * // enable the `MultiColumnSorting` plugin with custom configuration
     * multiColumnSorting: {
     *   // sort empty cells as well
     *   sortEmptyCells: true,
     *   // display the arrow icon in the column header
     *   indicator: true,
     *   // disable clicking on the column header to sort the column
     *   headerAction: false,
     *   // add a custom compare function
     *   compareFunctionFactory(sortOrder, columnMeta) {
     *     return function(value, nextValue) {
     *       // some value comparisons which will return -1, 0 or 1...
     *     }
     *   }
     * }
     *
     * // enable the `MultiColumnSorting` plugin
     * multiColumnSorting: {
     *   // at initialization, sort column 1 in ascending order
     *   initialConfig: {
     *     column: 1,
     *     sortOrder: 'asc'
     *   },
     *   // at initialization, sort column 2 in descending order
     *   initialConfig: {
     *     column: 2,
     *     sortOrder: 'desc'
     *   }
     * }
     * ```
     */
    multiColumnSorting: void 0,
    /**
     * When set to `true`, the `navigableHeaders` option lets you navigate [row headers](@/guides/rows/row-header/row-header.md) and [column headers](@/guides/columns/column-header/column-header.md), using the arrow keys or the <kbd>**Tab**</kbd> key (if the [`tabNavigation`](#tabNavigation) option is set to `true`).
     *
     * @since 14.0.0
     * @memberof Options#
     * @type {boolean}
     * @default false
     * @category Core
     *
     * @example
     * ```js
     * // you can navigate row and column headers with the keyboard
     * navigableHeaders: true,
     *
     * // default behavior: you can't navigate row and column headers with the keyboard
     * navigableHeaders: false,
     * ```
     */
    navigableHeaders: false,
    /**
     * When set to `false`, the `tabNavigation` option changes the behavior of the
     * <kbd>Tab</kbd> and <kbd>Shift</kbd>+<kbd>Tab</kbd> keyboard shortcuts. The Handsontable
     * no more captures that shortcuts to make the grid navigation available (`tabNavigation: true`)
     * but returns control to the browser so the native page navigation is possible.
     *
     * @since 14.0.0
     * @memberof Options#
     * @type {boolean}
     * @default true
     * @category Core
     *
     * @example
     * ```js
     * // you can't navigate row and column headers using <kbd>Tab</kbd> or <kbd>Shift</kbd>+<kbd>Tab</kbd> keyboard shortcuts
     * tabNavigation: false,
     *
     * // default behavior: you can navigate row and column headers using <kbd>Tab</kbd> or <kbd>Shift</kbd>+<kbd>Tab</kbd> keyboard shortcuts
     * tabNavigation: true,
     * ```
     */
    tabNavigation: true,
    /**
     * @description
     * The `nestedHeaders` option configures the [`NestedHeaders`](@/api/nestedHeaders.md) plugin.
     *
     * You can set the `nestedHeaders` option to one of the following:
     *
     * | Setting           | Description                                                                                                                           |
     * | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
     * | `false` (default) | Disable the [`NestedHeaders`](@/api/nestedHeaders.md) plugin                                                                          |
     * | `true`            | - Enable the [`NestedHeaders`](@/api/nestedHeaders.md) plugin<br>- Don't configure any nested headers                                 |
     * | Array of arrays   | - Enable the [`NestedHeaders`](@/api/nestedHeaders.md) plugin<br>- Configure headers that are nested on Handsontable's initialization |
     *
     * If you set the `nestedHeaders` option to an array of arrays, each array configures one set of nested headers.
     *
     * Each array element configures one header, and can be one of the following:
     *
     * | Array element | Description                                                                                  |
     * | ------------- | -------------------------------------------------------------------------------------------- |
     * | A string      | The header's label                                                                           |
     * | An object     | Properties:<br>`label` (string): the header's label<br>`colspan` (integer): the column width |
     *
     * Read more:
     * - [Plugins: `NestedHeaders`](@/api/nestedHeaders.md)
     * - [Column groups: Nested headers](@/guides/columns/column-groups/column-groups.md#nested-headers)
     *
     * @memberof Options#
     * @type {boolean|Array[]}
     * @default undefined
     * @category NestedHeaders
     *
     * @example
     * ```js
     * nestedHeaders: [
     *   ['A', {label: 'B', colspan: 8}, 'C'],
     *   ['D', {label: 'E', colspan: 4}, {label: 'F', colspan: 4}, 'G'],
     *   ['H', 'I', 'J', 'K', 'L', 'M', 'N', 'R', 'S', 'T']
     * ],
     * ```
     */
    nestedHeaders: void 0,
    /**
     * @description
     * The `nestedRows` option configures the [`NestedRows`](@/api/nestedRows.md) plugin.
     *
     * You can set the `nestedRows` option to one of the following:
     *
     * | Setting           | Description                                            |
     * | ----------------- | ------------------------------------------------------ |
     * | `false` (default) | Disable the [`NestedRows`](@/api/nestedRows.md) plugin |
     * | `true`            | Enable the [`NestedRows`](@/api/nestedRows.md) plugin  |
     *
     * Read more:
     * - [Plugins: `NestedRows`](@/guides/rows/row-parent-child/row-parent-child.md)
     *
     * @example
     * ```js
     * // enable the `NestedRows` plugin
     * nestedRows: true,
     * ```
     *
     * @memberof Options#
     * @type {boolean}
     * @default false
     * @category NestedRows
     */
    nestedRows: void 0,
    /**
     * The `noWordWrapClassName` option lets you add a CSS class name
     * to each cell that has the [`wordWrap`](#wordWrap) option set to `false`.
     *
     * Read more:
     * - [`wordWrap`](#wordWrap)
     * - [`currentRowClassName`](#currentRowClassName)
     * - [`currentColClassName`](#currentColClassName)
     * - [`currentHeaderClassName`](#currentHeaderClassName)
     * - [`invalidCellClassName`](#invalidCellClassName)
     * - [`readOnlyCellClassName`](#readOnlyCellClassName)
     * - [`commentedCellClassName`](#commentedCellClassName)
     * - [`noWordWrapClassName`](#noWordWrapClassName)
     * - [`TableClassName`](#TableClassName)
     * - [`className`](#className)
     *
     * @memberof Options#
     * @type {string}
     * @default 'htNoWrap'
     * @category Core
     *
     * @example
     * ```js
     * // add an `is-noWrapCell` CSS class name
     * // to each cell that doesn't wrap content
     * noWordWrapClassName: 'is-noWrapCell',
     * ```
     */
    noWordWrapClassName: "htNoWrap",
    /**
     * The `numericFormat` option configures the number format and the currency format
     * of [`numeric`](@/guides/cell-types/numeric-cell-type/numeric-cell-type.md) cells` displayed output
     * in the numeric cell renderer.
     *
     * You can set the `numericFormat` option to an object with the following properties:
     *
     * | Property    | Possible values                                                               | Description     |
     * | ----------- | ----------------------------------------------------------------------------- | --------------- |
     * | `pattern`   | All [`numbro.js` number formats](https://numbrojs.com/format.html#numbers)    | Number format   |
     * | `culture`   | All [`numbro.js` currency formats](https://numbrojs.com/format.html#currency) | Currency format |
     *
     * The `numericFormat` option as no effect on the numeric cell editor.
     *
     * In the source data, numeric data is stored as JavaScript numbers.
     *
     * Read more:
     * - [Numeric cell type](@/guides/cell-types/numeric-cell-type/numeric-cell-type.md)
     * - [Third-party licenses](@/guides/technical-specification/third-party-licenses/third-party-licenses.md)
     *
     * @memberof Options#
     * @since 0.35.0
     * @type {object}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * columns: [
     *   {
     *     // set the `type` of each cell in this column to `numeric`
     *     type: 'numeric',
     *     // set the `numericFormat` option for every `numeric` cell of this column
     *     numericFormat: {
     *       // set the number format
     *       pattern: '0,00',
     *       // set the currency format
     *       culture: 'en-US'
     *     }
     *   }
     * ],
     * ```
     */
    numericFormat: void 0,
    /**
     * If the `observeDOMVisibility` option is set to `true`,
     * Handsontable rerenders every time it detects that the grid was made visible in the DOM.
     *
     * @memberof Options#
     * @type {boolean}
     * @default true
     * @category Core
     *
     * @example
     * ```js
     * // don't rerender the grid on visibility changes
     * observeDOMVisibility: false,
     * ```
     */
    observeDOMVisibility: true,
    /**
     * The `outsideClickDeselects` option determines what happens to the current [selection](@/guides/cell-features/selection/selection.md)
     * when you click outside of the grid.
     *
     * You can set the `outsideClickDeselects` option to one of the following:
     *
     * | Setting          | Description                                                                                              |
     * | ---------------- | -------------------------------------------------------------------------------------------------------- |
     * | `true` (default) | On a mouse click outside of the grid, clear the current [selection](@/guides/cell-features/selection/selection.md) |
     * | `false`          | On a mouse click outside of the grid, keep the current [selection](@/guides/cell-features/selection/selection.md)  |
     * | A function       | A function that takes the click event target and returns a boolean                                       |
     *
     * @memberof Options#
     * @type {boolean|Function}
     * @default true
     * @category Core
     *
     * @example
     * ```js
     * // on a mouse click outside of the grid, clear the current selection
     * outsideClickDeselects: true,
     *
     * // on a mouse click outside of the grid, keep the current selection
     * outsideClickDeselects: false,
     *
     * // take the click event target and return `false`
     * outsideClickDeselects(event) {
     *   return false;
     * }
     *
     * // take the click event target and return `true`
     * outsideClickDeselects(event) {
     *   return false;
     * }
     * ```
     */
    outsideClickDeselects: true,
    /**
     * @description
     * The `persistentState` option configures the [`PersistentState`](@/api/persistentState.md) plugin.
     *
     * You can set the `persistentState` to one of the following:
     *
     * | Setting           | Description                                                      |
     * | ----------------- | ---------------------------------------------------------------- |
     * | `false` (default) | Disable the [`PersistentState`](@/api/persistentState.md) plugin |
     * | `true`            | Enable the [`PersistentState`](@/api/persistentState.md) plugin  |
     *
     * Read more:
     * - [Saving data: Saving data locally](@/guides/getting-started/saving-data/saving-data.md#save-data-locally)
     * - [Plugins: `PersistentState`](@/api/persistentState.md)
     *
     * @memberof Options#
     * @type {boolean}
     * @default false
     * @category PersistentState
     *
     * @example
     * ```js
     * // enable the `PersistentState` plugin
     * persistentState: true,
     * ```
     */
    persistentState: void 0,
    /**
     * The `placeholder` option lets you display placeholder text in every empty cell.
     *
     * You can set the `placeholder` option to one of the following:
     *
     * | Setting            | Example        | Description                                                           |
     * | ------------------ | -------------- | --------------------------------------------------------------------- |
     * | A non-empty string | `'Empty cell'` | Display `Empty cell` text in empty cells                              |
     * | A non-string value | `000`          | Display `000` text in empty cells (non-string values get stringified) |
     *
     * Read more:
     * - [`placeholderCellClassName`](#placeholderCellClassName)
     *
     * @memberof Options#
     * @type {string}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * // display 'Empty cell' text
     * // in every empty cell of the entire grid
     * placeholder: 'Empty cell',
     *
     * // or
     * columns: [
     *   {
     *     data: 'date',
     *     dateFormat: 'DD/MM/YYYY',
     *     // display 'Empty date cell' text
     *     // in every empty cell of the `date` column
     *     placeholder: 'Empty date cell'
     *   }
     * ],
     * ```
     */
    placeholder: void 0,
    /**
     * The `placeholderCellClassName` option lets you add a CSS class name to cells
     * that contain [`placeholder`](#placeholder) text.
     *
     * Read more:
     * - [Cell validator](@/guides/cell-functions/cell-validator/cell-validator.md)
     * - [`placeholder`](#placeholder)
     * - [`currentRowClassName`](#currentRowClassName)
     * - [`currentHeaderClassName`](#currentHeaderClassName)
     * - [`activeHeaderClassName`](#activeHeaderClassName)
     * - [`currentColClassName`](#currentColClassName)
     * - [`readOnlyCellClassName`](#readOnlyCellClassName)
     * - [`commentedCellClassName`](#commentedCellClassName)
     * - [`noWordWrapClassName`](#noWordWrapClassName)
     * - [`TableClassName`](#TableClassName)
     * - [`className`](#className)
     *
     * @memberof Options#
     * @type {string}
     * @default 'htPlaceholder'
     * @category Core
     *
     * @example
     * ```js
     * // add a `has-placeholder` CSS class name
     * // to each cell that contains `placeholder` text
     * placeholderCellClassName: 'has-placeholder',
     * ```
     */
    placeholderCellClassName: "htPlaceholder",
    /**
     * The `preventOverflow` option configures preventing Handsontable
     * from overflowing outside of its parent element.
     *
     * You can set the `preventOverflow` option to one of the following:
     *
     * | Setting           | Description                      |
     * | ----------------- | -------------------------------- |
     * | `false` (default) | Don't prevent overflowing        |
     * | `'horizontal'`      | Prevent horizontal overflowing |
     * | `'vertical'`        | Prevent vertical overflowing   |
     *
     * @memberof Options#
     * @type {string|boolean}
     * @default false
     * @category Core
     *
     * @example
     * ```js
     * // prevent horizontal overflowing
     * preventOverflow: 'horizontal',
     * ```
     */
    preventOverflow: false,
    /**
     * The `preventWheel` option configures preventing the `wheel` event's default action
     * on overlays.
     *
     * You can set the `preventWheel` option to one of the following:
     *
     * | Setting           | Description                                      |
     * | ----------------- | ------------------------------------------------ |
     * | `false` (default) | Don't prevent the `wheel` event's default action |
     * | `true`            | Prevent the `wheel` event's default action       |
     *
     * @memberof Options#
     * @private
     * @type {boolean}
     * @default false
     * @category Core
     *
     * @example
     * ```js
     * // don't prevent the `wheel` event's default action
     * preventWheel: false,
     * ```
     */
    preventWheel: false,
    /**
     * @description
     * The `readOnly` option determines whether a [cell](@/guides/cell-features/disabled-cells/disabled-cells.md#read-only-specific-cells),
     * [comment](@/guides/cell-features/comments/comments.md#make-a-comment-read-only), [column](@/guides/cell-features/disabled-cells/disabled-cells.md#read-only-columns)
     * or the [entire grid](@/guides/cell-features/disabled-cells/disabled-cells.md#read-only-grid) is editable or not. You can configure it as follows:
     *
     * | Setting           | Description                                                                                                                |
     * | ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
     * | `false` (default) | Set as editable                                                                                                           |
     * | `true`            | - Set as read-only<br>- Add the [`readOnlyCellClassName`](#readOnlyCellClassName) CSS class name (by default: `htDimmed`) |
     *
     * `readOnly` cells can't be changed by the [`populateFromArray()`](@/api/core.md#populatefromarray) method.
     *
     * Read more:
     * - [Disabled cells](@/guides/cell-features/disabled-cells/disabled-cells.md)
     * - [Configuration options: Cascading configuration](@/guides/getting-started/configuration-options/configuration-options.md#cascading-configuration)
     *
     * @memberof Options#
     * @type {boolean}
     * @default false
     * @category Core
     *
     * @example
     * ```js
     * // make the entire grid read-only
     * const configurationOptions = {
     *   columnSorting: true,
     * };
     *
     * // make the third column read-only
     * const configurationOptions = {
     *   columns: [
     *     {},
     *     {},
     *     {
     *       readOnly: true,
     *     },
     *   ],
     * };
     *
     * // make a specific cell read-only
     * const configurationOptions = {
     *   cell: [
     *     {
     *       row: 0,
     *       col: 0,
     *       readOnly: true,
     *     },
     * };
     * ```
     */
    readOnly: false,
    /**
     * The `readOnlyCellClassName` option lets you add a CSS class name to [read-only](#readOnly) cells.
     *
     * Read more:
     * - [`currentRowClassName`](#currentRowClassName)
     * - [`currentColClassName`](#currentColClassName)
     * - [`currentHeaderClassName`](#currentHeaderClassName)
     * - [`activeHeaderClassName`](#activeHeaderClassName)
     * - [`invalidCellClassName`](#invalidCellClassName)
     * - [`placeholderCellClassName`](#placeholderCellClassName)
     * - [`commentedCellClassName`](#commentedCellClassName)
     * - [`noWordWrapClassName`](#noWordWrapClassName)
     * - [`readOnlyCellClassName`](#readOnlyCellClassName)
     * - [`TableClassName`](#TableClassName)
     *
     * @memberof Options#
     * @type {string}
     * @default 'htDimmed'
     * @category Core
     *
     * @example
     * ```js
     * // add a `is-readOnly` CSS class name
     * // to every read-only cell
     * readOnlyCellClassName: 'is-readOnly',
     * ```
     */
    readOnlyCellClassName: "htDimmed",
    /**
     * The `renderAllRows` option controls Handsontable's [row virtualization](@/guides/rows/row-virtualization/row-virtualization.md).
     * You can configure it as follows:
     *
     * | Setting           | Description                                                                                                                                                                                     |
     * | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `false` (default) | Enable [row virtualization](@/guides/rows/row-virtualization/row-virtualization.md), rendering only the visible rows for optimal performance with large datasets.                                                  |
     * | `true`            | Disable [row virtualization](@/guides/rows/row-virtualization/row-virtualization.md)<br>(render all rows of the grid), rendering all rows in the dataset for consistent rendering and screen reader accessibility. |
     *
     * Setting `renderAllRows` to `true` overwrites the [`viewportRowRenderingOffset`](#viewportRowRenderingOffset) setting.
     *
     * Read more:
     * - [Row virtualization](@/guides/rows/row-virtualization/row-virtualization.md)
     *
     * @memberof Options#
     * @type {boolean}
     * @default false
     * @category Core
     *
     * @example
     * ```js
     * // disable row virtualization
     * renderAllRows: true,
     * ```
     */
    renderAllRows: false,
    /**
     * The `renderAllColumns` option configures Handsontable's [column virtualization](@/guides/columns/column-virtualization/column-virtualization.md).
     *
     * You can set the `renderAllColumns` option to one of the following:
     *
     * | Setting           | Description                                                                                                                                                                                                                      |
     * | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `false` (default) | Enable [column virtualization](@/guides/columns/column-virtualization/column-virtualization.md), rendering only visible columns for better performance with many columns.                                                                              |
     * | `true`            | Disable [column virtualization](@/guides/columns/column-virtualization/column-virtualization.md)<br>(render all columns of the grid), rendering all columns in the dataset, and ensuring all columns are available regardless of horizontal scrolling. |
     *
     * Setting `renderAllColumns` to `true` overwrites the [`viewportColumnRenderingOffset`](#viewportColumnRenderingOffset) setting.
     *
     * Read more:
     * - [Column virtualization](@/guides/columns/column-virtualization/column-virtualization.md)
     *
     * @since 14.1.0
     * @memberof Options#
     * @type {boolean}
     * @default false
     * @category Core
     *
     * @example
     * ```js
     * // disable column virtualization
     * renderAllColumns: true,
     * ```
     */
    renderAllColumns: false,
    /**
     * @description
     * The `renderer` option sets a [cell renderer](@/guides/cell-functions/cell-renderer/cell-renderer.md) for a cell.
     *
     * You can set the `renderer` option to one of the following:
     * - A custom renderer function
     * - One of the following [cell renderer aliases](@/guides/cell-functions/cell-renderer/cell-renderer.md):
     *
     * | Alias               | Cell renderer function                                                         |
     * | ------------------- | ------------------------------------------------------------------------------ |
     * | A custom alias      | Your [custom cell renderer](@/guides/cell-functions/cell-renderer/cell-renderer.md) function |
     * | `'autocomplete'`    | `AutocompleteRenderer`                                                         |
     * | `'base'`            | `BaseRenderer`                                                                 |
     * | `'checkbox'`        | `CheckboxRenderer`                                                             |
     * | `'date'`            | `DateRenderer`                                                                 |
     * | `'dropdown'`        | `DropdownRenderer`                                                             |
     * | `'html'`            | `HtmlRenderer`                                                                 |
     * | `'numeric'`         | `NumericRenderer`                                                              |
     * | `'password'`        | `PasswordRenderer`                                                             |
     * | `'text'`            | `TextRenderer`                                                                 |
     * | `'time'`            | `TimeRenderer`                                                                 |
     *
     * To set the [`renderer`](#renderer), [`editor`](#editor), and [`validator`](#validator)
     * options all at once, use the [`type`](#type) option.
     *
     * Read more:
     * - [Cell renderer](@/guides/cell-functions/cell-renderer/cell-renderer.md)
     * - [Cell type](@/guides/cell-types/cell-type/cell-type.md)
     * - [Configuration options: Cascading configuration](@/guides/getting-started/configuration-options/configuration-options.md#cascading-configuration)
     * - [`type`](#type)
     *
     * @memberof Options#
     * @type {string|Function}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * // use the `numeric` renderer for each cell of the entire grid
     * renderer: `'numeric'`,
     *
     * // add a custom renderer function
     * renderer(hotInstance, td, row, column, prop, value, cellProperties) {
     *   // your custom renderer's logic
     *   ...
     * }
     *
     * // apply the `renderer` option to individual columns
     * columns: [
     *   {
     *     // use the `autocomplete` renderer for each cell of this column
     *     renderer: 'autocomplete'
     *   },
     *   {
     *     // use the `myCustomRenderer` renderer for each cell of this column
     *     renderer: 'myCustomRenderer'
     *   }
     * ]
     * ```
     */
    renderer: void 0,
    /**
     * The `rowHeaders` option configures your grid's row headers.
     *
     * You can set the `rowHeaders` option to one of the following:
     *
     * | Setting    | Description                                                       |
     * | ---------- | ----------------------------------------------------------------- |
     * | `true`     | Enable the default row headers ('1', '2', '3', ...)               |
     * | `false`    | Disable row headers                                               |
     * | An array   | Define your own row headers (e.g. `['One', 'Two', 'Three', ...]`) |
     * | A function | Define your own row headers, using a function                     |
     *
     * Read more:
     * - [Row header](@/guides/rows/row-header/row-header.md)
     *
     * @memberof Options#
     * @type {boolean|string[]|Function}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * // enable the default row headers
     * rowHeaders: true,
     *
     * // set your own row headers
     * rowHeaders: ['One', 'Two', 'Three'],
     *
     * // set your own row headers, using a function
     * rowHeaders: function(visualRowIndex) {
     *   return `${visualRowIndex}: AB`;
     * },
     * ```
     */
    rowHeaders: void 0,
    /**
     * @description
     * The `rowHeaderWidth` option configures the width of row headers.
     *
     * You can set the `rowHeaderWidth` option to one of the following:
     *
     * | Setting  | Description                                     |
     * | -------- | ----------------------------------------------- |
     * | A number | Set the same width for every row header         |
     * | An array | Set different widths for individual row headers |
     *
     * @memberof Options#
     * @type {number|number[]}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * // set the same width for every row header
     * rowHeaderWidth: 25,
     *
     * // set different widths for individual row headers
     * rowHeaderWidth: [25, 30, 55],
     * ```
     */
    rowHeaderWidth: void 0,
    /**
     * The `rowHeights` option sets rows' heights, in pixels.
     *
     * In the rendering process, the default row height is 23 px (22 px + 1 px of the row's bottom border).
     * You can change it to equal or greater than 23px, by setting the `rowHeights` option to one of the following:
     *
     * | Setting     | Description                                                                                         | Example                                                      |
     * | ----------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
     * | A number    | Set the same height for every row                                                                   | `rowHeights: 100`                                            |
     * | A string    | Set the same height for every row                                                                   | `rowHeights: '100px'`                                        |
     * | An array    | Set heights separately for each row                                                                 | `rowHeights: [100, 120, undefined]`                          |
     * | A function  | Set row heights dynamically,<br>on each render                                                      | `rowHeights(visualRowIndex) { return visualRowIndex * 10; }` |
     * | `undefined` | Used by the [modifyRowHeight](@/api/hooks.md#modifyRowHeight) hook,<br>to detect row height changes | `rowHeights: undefined`                                      |
     *
     * The `rowHeights` option also sets the minimum row height that can be set
     * via the {@link ManualRowResize} and {@link AutoRowSize} plugins (if they are enabled).
     *
     * Read more:
     * - [Row height](@/guides/rows/row-height/row-height.md)
     *
     * @memberof Options#
     * @type {number|number[]|string|string[]|Array<undefined>|Function}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * // set every row's height to 100px
     * rowHeights: 100,
     *
     * // set every row's height to 100px
     * rowHeights: '100px',
     *
     * // set the first (by visual index) row's height to 100
     * // set the second (by visual index) row's height to 120
     * // set the third (by visual index) row's height to `undefined`
     * // set any other row's height to the default 23px
     * rowHeights: [100, 120, undefined],
     *
     * // set each row's height individually, using a function
     * rowHeights(visualRowIndex) {
     *   return visualRowIndex * 10;
     * },
     * ```
     */
    rowHeights: void 0,
    /**
     * @description
     * The `search` option configures the [`Search`](@/api/search.md) plugin.
     *
     * You can set the `search` option to one of the following:
     *
     * | Setting           | Description                                                                          |
     * | ----------------- | ------------------------------------------------------------------------------------ |
     * | `false` (default) | Disable the [`Search`](@/api/search.md) plugin                                       |
     * | `true`            | Enable the [`Search`](@/api/search.md) plugin with the default configuration         |
     * | An object         | - Enable the [`Search`](@/api/search.md) plugin<br>- Apply your custom configuration |
     *
     * If you set the `search` option to an object, you can configure the following search options:
     *
     * | Option              | Possible settings | Description                                                                                          |
     * | ------------------- | ----------------- | ---------------------------------------------------------------------------------------------------- |
     * | `searchResultClass` | A string          | Add a custom CSS class name to search results                                                        |
     * | `queryMethod`       | A function        | Add a [custom query method](@/guides/navigation/searching-values/searching-values.md#custom-query-method)  |
     * | `callback`          | A function        | Add a [custom callback function](@/guides/navigation/searching-values/searching-values.md#custom-callback) |
     *
     * Read more:
     * - [Searching values](@/guides/navigation/searching-values/searching-values.md)
     * - [Searching values: Custom query method](@/guides/navigation/searching-values/searching-values.md#custom-query-method)
     * - [Searching values: Custom callback](@/guides/navigation/searching-values/searching-values.md#custom-callback)
     *
     * @memberof Options#
     * @type {boolean|object}
     * @default false
     * @category Search
     *
     * @example
     * ```js
     * // enable the `Search` plugin with the default configuration
     * search: true,
     *
     * // enable the `Search` plugin with a custom configuration
     * search: {
     *   // add a `customClass` CSS class name to search results
     *   searchResultClass: 'customClass',
     *   // add a custom query method
     *   queryMethod(queryStr, value) {
     *     ...
     *   },
     *   // add a custom callback function
     *   callback(instance, row, column, value, result) {
     *     ...
     *   }
     * }
     * ```
     */
    search: false,
    /**
     * @description
     * The `selectionMode` option configures how [selection](@/guides/cell-features/selection/selection.md) works.
     *
     * You can set the `selectionMode` option to one of the following:
     *
     * | Setting      | Description                                                  |
     * | ------------ | ------------------------------------------------------------ |
     * | `'single'`   | Allow the user to select only one cell at a time.            |
     * | `'range'`    | Allow the user to select one range of cells at a time.       |
     * | `'multiple'` | Allow the user to select multiple ranges of cells at a time. |
     *
     * Read more:
     * - [Selection: Selecting ranges](@/guides/cell-features/selection/selection.md#select-ranges)
     *
     * @memberof Options#
     * @type {string}
     * @default 'multiple'
     * @category Core
     *
     * @example
     * ```js
     * // you can only select one cell at at a time
     * selectionMode: 'single',
     *
     * // you can select one range of cells at a time
     * selectionMode: 'range',
     *
     * // you can select multiple ranges of cells at a time
     * selectionMode: 'multiple',
     * ```
     */
    selectionMode: "multiple",
    /**
     * The `selectOptions` option configures options that the end user can choose from in [`select`](@/guides/cell-types/select-cell-type/select-cell-type.md) cells.
     *
     * You can set the `selectOptions` option to one of the following:
     *
     * | Setting                         | Description                                                                   |
     * | ------------------------------- | ----------------------------------------------------------------------------- |
     * | An array of strings             | Each string is one option's value and label                                   |
     * | An object with key-string pairs | - Each key is one option's value<br>- The key's string is that option's label |
     * | A function                      | A function that returns an object with key-string pairs                       |
     *
     * Read more:
     * - [Select cell type](@/guides/cell-types/select-cell-type/select-cell-type.md)
     *
     * @memberof Options#
     * @type {string[]|object|Function}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * columns: [
     *   {
     *     // set the `type` of each cell in this column to `select`
     *     type: 'select',
     *     // set the first option's value and label to `A`
     *     // set the second option's value and label to `B`
     *     // set the third option's value and label to `C`
     *     selectOptions: ['A', 'B', 'C'],
     *   },
     *   {
     *     // set the `type` of each cell in this column to `select`
     *     type: 'select',
     *     selectOptions: {
     *       // set the first option's value to `value1` and label to `Label 1`
     *       value1: 'Label 1',
     *       // set the second option's value to `value2` and label to `Label 2`
     *       value2: 'Label 2',
     *       // set the third option's value to `value3` and label to `Label 3`
     *       value3: 'Label 3',
     *     },
     *   },
     *   {
     *     // set the `type` of each cell in this column to `select`
     *     type: 'select',
     *     // set `selectOption` to a function that returns available options as an object
     *     selectOptions(visualRow, visualColumn, prop) {
     *       return {
     *         value1: 'Label 1',
     *         value2: 'Label 2',
     *         value3: 'Label 3',
     *       };
     *   },
     * ],
     * ```
     */
    selectOptions: void 0,
    /**
     * @description
     * The `skipColumnOnPaste` option determines whether you can paste data into a given column.
     *
     * You can only apply the `skipColumnOnPaste` option to an entire column, using the [`columns`](#columns) option.
     *
     * You can set the `skipColumnOnPaste` option to one of the following:
     *
     * | Setting           | Description                                                                                           |
     * | ----------------- | ----------------------------------------------------------------------------------------------------- |
     * | `false` (default) | Enable pasting data into this column                                                                  |
     * | `true`            | - Disable pasting data into this column<br>- On pasting, paste data into the next column to the right |
     *
     * Read more:
     * - [Configuration options: Setting column options](@/guides/getting-started/configuration-options/configuration-options.md#set-column-options)
     *
     * @memberof Options#
     * @type {boolean}
     * @default false
     * @category Core
     *
     * @example
     * ```js
     * columns: [
     *   {
     *     // disable pasting data into this column
     *     skipColumnOnPaste: true
     *   }
     * ],
     * ```
     */
    skipColumnOnPaste: false,
    /**
     * @description
     *
     * The `skipRowOnPaste` option determines whether you can paste data into a given row.
     *
     * You can only apply the `skipRowOnPaste` option to an entire row, using the [`cells`](#cells) option.
     *
     * You can set the `skipRowOnPaste` option to one of the following:
     *
     * | Setting           | Description                                                                         |
     * | ----------------- | ----------------------------------------------------------------------------------- |
     * | `false` (default) | Enable pasting data into this row                                                   |
     * | `true`            | - Disable pasting data into this row<br>- On pasting, paste data into the row below |
     *
     * Read more:
     * - [Configuration options: Setting row options](@/guides/getting-started/configuration-options/configuration-options.md#set-row-options)
     *
     * @memberof Options#
     * @type {boolean}
     * @default false
     * @category Core
     *
     * @example
     * ```js
     * cells(row, column) {
     *  const cellProperties = {};
     *
     *  // disable pasting data into row 1
     *  if (row === 1) {
     *    cellProperties.skipRowOnPaste = true;
     *  }
     *
     *  return cellProperties;
     * }
     * ```
     */
    skipRowOnPaste: false,
    /**
     * The `sortByRelevance` option configures whether [`autocomplete`](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md) cells'
     * lists are sorted in the same order as provided in the [`source`](#source) option.
     *
     * You can set the `sortByRelevance` option to one of the following:
     *
     * | Setting          | Description                                                                  |
     * | ---------------- | ---------------------------------------------------------------------------- |
     * | `true` (default) | Sort options in the same order as provided in the [`source`](#source) option |
     * | `false`          | Sort options alphabetically                                                  |
     *
     * Read more:
     * - [`source`](#source)
     * - [Autocomplete cell type](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md)
     *
     * @memberof Options#
     * @type {boolean}
     * @default true
     * @category Core
     *
     * @example
     * ```js
     * columns: [{
     *   // set the `type` of each cell in this column to `autocomplete`
     *   type: 'autocomplete',
     *   // set options available in every `autocomplete` cell of this column
     *   source: ['D', 'C', 'B', 'A'],
     *   // sort the `autocomplete` option in this order: D, C, B, A
     *   sortByRelevance: true
     * }],
     * ```
     */
    sortByRelevance: true,
    /**
     * The `source` option sets options available in [`autocomplete`](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md)
     * and [`dropdown`](@/guides/cell-types/dropdown-cell-type/dropdown-cell-type.md) cells.
     *
     * You can set the `source` option to one of the following:
     *
     * - An array
     * - A function
     *
     * Read more:
     * - [Autocomplete cell type](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md)
     * - [Dropdown cell type](@/guides/cell-types/dropdown-cell-type/dropdown-cell-type.md)
     * - [`strict`](#strict)
     * - [`allowHtml`](#allowHtml)
     * - [`filter`](#filter)
     * - [`sortByRelevance`](#sortByRelevance)
     *
     * @memberof Options#
     * @type {Array|Function}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * // set `source` to an array
     * columns: [{
     *   // set the `type` of each cell in this column to `autocomplete`
     *   type: 'autocomplete',
     *   // set options available in every `autocomplete` cell of this column
     *   source: ['A', 'B', 'C', 'D']
     * }],
     *
     * // set `source` to a function
     * columns: [{
     *   // set the `type` of each cell in this column to `autocomplete`
     *   type: 'autocomplete',
     *   // for every `autocomplete` cell in this column, fetch data from an external source
     *   source(query, callback) {
     *     fetch('https://example.com/query?q=' + query, function(response) {
     *       callback(response.items);
     *     })
     *   }
     * }],
     * ```
     */
    source: void 0,
    /**
     * @description
     * If the [`data`](#data) option is not set, the `startCols` option sets the initial number of empty columns.
     *
     * The `startCols` option works only in Handsontable's constructor.
     *
     * @memberof Options#
     * @type {number}
     * @default 5
     * @category Core
     *
     * @example
     * ```js
     * // start with 15 empty columns
     * startCols: 15,
     * ```
     */
    startCols: 5,
    /**
     * @description
     * If the [`data`](#data) option is not set, the `startRows` option sets the initial number of empty rows.
     *
     * The `startRows` option works only in Handsontable's constructor.
     *
     * @memberof Options#
     * @type {number}
     * @default 5
     * @category Core
     *
     * @example
     * ```js
     * // start with 15 empty rows
     * startRows: 15,
     * ```
     */
    startRows: 5,
    /**
     * @description
     * The `stretchH` option determines what happens when the declared grid width
     * is different from the calculated sum of all column widths.
     *
     * You can set the `stretchH` option to one of the following:
     *
     * | Setting            | Description                                                       |
     * | ------------------ | ----------------------------------------------------------------- |
     * | `'none'` (default) | Don't fit the grid to the container (disable column stretching)   |
     * | `'last'`           | Fit the grid to the container, by stretching only the last column |
     * | `'all'`            | Fit the grid to the container, by stretching all columns evenly   |
     *
     * Read more:
     * - [Column width: Column stretching](@/guides/columns/column-width/column-width.md#column-stretching)
     *
     * @memberof Options#
     * @type {string}
     * @default 'none'
     * @category Core
     *
     * @example
     * ```js
     * // fit the grid to the container
     * // by stretching all columns evenly
     * stretchH: 'all',
     * ```
     */
    stretchH: "none",
    /**
     * The `strict` option configures the behavior of [`autocomplete`](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md) cells.
     *
     * You can set the `strict` option to one of the following:
     *
     * | Setting | Mode                                                                                          | Description                                                                                |
     * | ------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
     * | `true`  | [Strict mode](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md#autocomplete-strict-mode)         | The end user:<br>- Can only choose one of suggested values<br>- Can't enter a custom value |
     * | `false` | [Flexible mode](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md#autocomplete-flexible-mode)     | The end user:<br>- Can choose one of suggested values<br>- Can enter a custom value        |
     *
     * Read more:
     * - [Autocomplete cell type](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md)
     * - [`source`](#source)
     *
     * @memberof Options#
     * @type {boolean}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * columns: [
     *   {
     *   // set the `type` of each cell in this column to `autocomplete`
     *   type: 'autocomplete',
     *   // set options available in every `autocomplete` cell of this column
     *   source: ['A', 'B', 'C'],
     *   // values entered must match `A`, `B`, or `C`
     *   strict: true
     *   },
     * ],
     * ```
     */
    strict: void 0,
    /**
     * The `tableClassName` option lets you add CSS class names
     * to every Handsontable instance inside the `container` element.
     *
     * You can set the `tableClassName` option to one of the following:
     *
     * | Setting             | Description                                                                                |
     * | ------------------- | ------------------------------------------------------------------------------------------ |
     * | A string            | Add a single CSS class name to every Handsontable instance inside the `container` element  |
     * | An array of strings | Add multiple CSS class names to every Handsontable instance inside the `container` element |
     *
     * Read more:
     * - [`currentRowClassName`](#currentRowClassName)
     * - [`currentColClassName`](#currentColClassName)
     * - [`currentHeaderClassName`](#currentHeaderClassName)
     * - [`activeHeaderClassName`](#activeHeaderClassName)
     * - [`invalidCellClassName`](#invalidCellClassName)
     * - [`placeholderCellClassName`](#placeholderCellClassName)
     * - [`readOnlyCellClassName`](#readOnlyCellClassName)
     * - [`noWordWrapClassName`](#noWordWrapClassName)
     * - [`commentedCellClassName`](#commentedCellClassName)
     * - [`className`](#className)
     *
     * @memberof Options#
     * @type {string|string[]}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * // add a `your-class-name` CSS class name
     * // to every Handsontable instance inside the `container` element
     * tableClassName: 'your-class-name',
     *
     * // add `first-class-name` and `second-class-name` CSS class names
     * // to every Handsontable instance inside the `container` element
     * tableClassName: ['first-class-name', 'second-class-name'],
     * ```
     */
    tableClassName: void 0,
    /**
     * The `tabMoves` option configures the action of the <kbd>**Tab**</kbd> key.
     *
     * You can set the `tabMoves` option to an object with the following properties
     * (or to a function that returns such an object):
     *
     * | Property | Type   | Description                                                                                                                                              |
     * | -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `row`    | Number | - On pressing <kbd>**Tab**</kbd>, move selection `row` rows down<br>- On pressing <kbd>**Shift**</kbd>+<kbd>**Tab**</kbd>, move selection `row` rows up              |
     * | `col`    | Number | - On pressing <kbd>**Tab**</kbd>, move selection `col` columns right<br>- On pressing <kbd>**Shift**</kbd>+<kbd>**Tab**</kbd>, move selection `col` columns left     |
     *
     * @memberof Options#
     * @type {object|Function}
     * @default {row: 0, col: 1}
     * @category Core
     *
     * @example
     * ```js
     * // on pressing Tab, move selection 2 rows down and 2 columns right
     * // on pressing Shift+Tab, move selection 2 rows up and 2 columns left
     * tabMoves: {row: 2, col: 2},
     *
     * // the same setting, as a function
     * // `event` is a DOM Event object received on pressing Tab
     * // you can use it to check whether the user pressed Tab or Shift+Tab
     * tabMoves(event) {
     *   return {row: 2, col: 2};
     * },
     * ```
     */
    tabMoves: {
      row: 0,
      col: 1
    },
    /**
     * @description
     * The `title` option configures [column header](@/guides/columns/column-header/column-header.md) names.
     *
     * You can set the `title` option to a string.
     *
     * Read more:
     * - [Column header](@/guides/columns/column-header/column-header.md)
     * - [`columns`](#columns)
     *
     * @memberof Options#
     * @type {string}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * columns: [
     *   {
     *     // set the first column header name to `First name`
     *     title: 'First name',
     *     type: 'text',
     *   },
     *   {
     *     // set the second column header name to `Last name`
     *     title: 'Last name',
     *     type: 'text',
     *   }
     * ],
     * ```
     */
    title: void 0,
    /**
     * The `trimDropdown` option configures the width of the [`autocomplete`](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md)
     * and [`dropdown`](@/guides/cell-types/dropdown-cell-type/dropdown-cell-type.md) lists.
     *
     * You can set the `trimDropdown` option to one of the following:
     *
     * | Setting          | Description                                                                     |
     * | ---------------- | ------------------------------------------------------------------------------- |
     * | `true` (default) | Make the dropdown/autocomplete list's width the same as the edited cell's width |
     * | `false`          | Scale the dropdown/autocomplete list's width to the list's content              |
     *
     * Read more:
     * - [Autocomplete cell type](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md)
     * - [Dropdown cell type](@/guides/cell-types/dropdown-cell-type/dropdown-cell-type.md)
     *
     * @memberof Options#
     * @type {boolean}
     * @default true
     * @category Core
     *
     * @example
     * ```js
     * columns: [
     *   {
     *     type: 'autocomplete',
     *     // for each cell of this column
     *     // make the `autocomplete` list's width the same as the edited cell's width
     *     trimDropdown: true,
     *   },
     *   {
     *     type: 'dropdown',
     *     // for each cell of this column
     *     // scale the `dropdown` list's width to the list's content
     *     trimDropdown: false,
     *   }
     * ],
     * ```
     */
    trimDropdown: true,
    /**
     * @description
     * The `trimRows` option configures the [`TrimRows`](@/api/trimRows.md) plugin.
     *
     * You can set the `trimRows` option to one of the following:
     *
     * | Setting                          | Description                                                                                   |
     * | -------------------------------- | --------------------------------------------------------------------------------------------- |
     * | `false`                          | Disable the [`TrimRows`](@/api/trimRows.md) plugin                                            |
     * | `true`                           | Enable the [`TrimRows`](@/api/trimRows.md) plugin                                             |
     * | An array of physical row indexes | - Enable the [`TrimRows`](@/api/trimRows.md) plugin<br>- Trim selected rows at initialization |
     *
     * Read more:
     * - [Plugins: `TrimRows`](@/api/trimRows.md)
     * - [Row trimming](@/guides/rows/row-trimming/row-trimming.md)
     *
     * @memberof Options#
     * @type {boolean|number[]}
     * @default undefined
     * @category TrimRows
     *
     * @example
     * ```js
     * // enable the `TrimRows` plugin
     * trimRows: true,
     *
     * // enable the `TrimRows` plugin
     * // at Handsontable's initialization, trim rows 5, 10, and 15
     * trimRows: [5, 10, 15],
     * ```
     */
    trimRows: void 0,
    /**
     * The `trimWhitespace` option configures automatic whitespace removal. This option
     * affects the cell renderer and the cell editor.
     *
     * You can set the `trimWhitespace` option to one of the following:
     *
     * | Setting          | Description                                                     |
     * | ---------------- | --------------------------------------------------------------- |
     * | `true` (default) | Remove whitespace at the beginning and at the end of each cell |
     * | `false`          | Don't remove whitespace                                         |
     *
     * @memberof Options#
     * @type {boolean}
     * @default true
     * @category Core
     *
     * @example
     * ```js
     * columns: [
     *   {
     *     // don't remove whitespace
     *     // from any cell of this column
     *     trimWhitespace: false
     *   }
     * ]
     * ```
     */
    trimWhitespace: true,
    /**
     * @description
     * The `type` option lets you set the [`renderer`](#renderer), [`editor`](#editor), and [`validator`](#validator)
     * options all at once, by selecting a [cell type](@/guides/cell-types/cell-type/cell-type.md).
     *
     * You can set the `type` option to one of the following:
     *
     * | Cell type                                                         | Renderer, editor & validator                                                                                                                                                                                                                       |
     * | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | A [custom cell type](@/guides/cell-types/cell-type/cell-type.md)            | Renderer: your [custom cell renderer](@/guides/cell-functions/cell-renderer/cell-renderer.md)<br>Editor: your [custom cell editor](@/guides/cell-functions/cell-editor/cell-editor.md)<br>Validator: your [custom cell validator](@/guides/cell-functions/cell-validator/cell-validator.md) |
     * | [`'autocomplete'`](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md) | Renderer: `AutocompleteRenderer`<br>Editor: `AutocompleteEditor`<br>Validator: `AutocompleteValidator`                                                                         |
     * | [`'checkbox'`](@/guides/cell-types/checkbox-cell-type/checkbox-cell-type.md)         | Renderer: `CheckboxRenderer`<br>Editor: `CheckboxEditor`<br>Validator: -                                                                                                                               |
     * | [`'date'`](@/guides/cell-types/date-cell-type/date-cell-type.md)                 | Renderer: `DateRenderer`<br>Editor: `DateEditor`<br>Validator: `DateValidator`                                                                                                 |
     * | [`'dropdown'`](@/guides/cell-types/dropdown-cell-type/dropdown-cell-type.md)         | Renderer: `DropdownRenderer`<br>Editor: `DropdownEditor`<br>Validator: `DropdownValidator`                                                                                     |
     * | [`'handsontable'`](@/guides/cell-types/handsontable-cell-type/handsontable-cell-type.md) | Renderer: `AutocompleteRenderer`<br>Editor: `HandsontableEditor`<br>Validator: -                                                                                                                       |
     * | [`'numeric'`](@/guides/cell-types/numeric-cell-type/numeric-cell-type.md)           | Renderer: `NumericRenderer`<br>Editor: `NumericEditor`<br>Validator: `NumericValidator`                                                                                        |
     * | [`'password'`](@/guides/cell-types/password-cell-type/password-cell-type.md)         | Renderer: `PasswordRenderer`<br>Editor: `PasswordEditor`<br>Validator: -                                                                                                                               |
     * | `'text'`                                                          | Renderer: `TextRenderer`<br>Editor: `TextEditor`<br>Validator: -                                                                                                                                       |
     * | [`'time`'](@/guides/cell-types/time-cell-type/time-cell-type.md)                 | Renderer: `TimeRenderer`<br>Editor: `TimeEditor`<br>Validator: `TimeValidator`                                                                                                 |
     *
     * Read more:
     * - [Cell type](@/guides/cell-types/cell-type/cell-type.md)
     * - [Cell renderer](@/guides/cell-functions/cell-renderer/cell-renderer.md)
     * - [Cell editor](@/guides/cell-functions/cell-editor/cell-editor.md)
     * - [Cell validator](@/guides/cell-functions/cell-validator/cell-validator.md)
     * - [Configuration options: Cascading configuration](@/guides/getting-started/configuration-options/configuration-options.md#cascading-configuration)
     * - [`renderer`](#renderer)
     * - [`editor`](#editor)
     * - [`validator`](#validator)
     *
     * @memberof Options#
     * @type {string}
     * @default 'text'
     * @category Core
     *
     * @example
     * ```js
     * // set the `numeric` cell type for each cell of the entire grid
     * type: `'numeric'`,
     *
     * // apply the `type` option to individual columns
     * columns: [
     *   {
     *     // set the `autocomplete` cell type for each cell of this column
     *     type: 'autocomplete'
     *   },
     *   {
     *     // set the `myCustomCellType` cell type for each cell of this column
     *     type: 'myCustomCellType'
     *   }
     * ]
     * ```
     */
    type: "text",
    /**
     * The `uncheckedTemplate` option lets you configure what value
     * an unchecked [`checkbox`](@/guides/cell-types/checkbox-cell-type/checkbox-cell-type.md) cell has.
     *
     * You can set the `uncheckedTemplate` option to one of the following:
     *
     * | Setting           | Description                                                                                                                                                                                |
     * | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
     * | `false` (default) | If a [`checkbox`](@/guides/cell-types/checkbox-cell-type/checkbox-cell-type.md) cell is unchecked,<br>the [`getDataAtCell`](@/api/core.md#getDataAtCell) method for this cell returns `false`                 |
     * | A string          | If a [`checkbox`](@/guides/cell-types/checkbox-cell-type/checkbox-cell-type.md) cell is unchecked,<br>the [`getDataAtCell`](@/api/core.md#getDataAtCell) method for this cell returns a string of your choice |
     *
     * Read more:
     * - [Checkbox cell type: Checkbox template](@/guides/cell-types/checkbox-cell-type/checkbox-cell-type.md#checkbox-template)
     * - [`getDataAtCell()`](@/api/core.md#getDataAtCell)
     * - [`checkedTemplate`](#checkedTemplate)
     *
     * @memberof Options#
     * @type {boolean|string|number}
     * @default false
     * @category Core
     *
     * @example
     * ```js
     * columns: [
     *   {
     *     // set the `type` of each cell in this column to `checkbox`
     *     // when unchecked, the cell's value is `false`
     *     // when checked, the cell's value is `true`
     *     type: 'checkbox',
     *   },
     *   {
     *     // set the `type` of each cell in this column to `checkbox`
     *     // when unchecked, the cell's value is `'No'`
     *     // when checked, the cell's value is `'Yes'`
     *     type: 'checkbox',
     *     uncheckedTemplate: 'No'
     *     checkedTemplate: 'Yes',
     *  }
     * ],
     * ```
     */
    uncheckedTemplate: void 0,
    /**
     * The `undo` option configures the [`UndoRedo`](@/api/undoRedo.md) plugin.
     *
     * You can set the `undo` option to one of the following:
     *
     * | Setting | Description                                        |
     * | ------- | -------------------------------------------------- |
     * | `true`  | Enable the [`UndoRedo`](@/api/undoRedo.md) plugin  |
     * | `false` | Disable the [`UndoRedo`](@/api/undoRedo.md) plugin |
     *
     * By default, the `undo` option is set to `undefined`,
     * but the [`UndoRedo`](@/api/undoRedo.md) plugin acts as enabled.
     * To disable the [`UndoRedo`](@/api/undoRedo.md) plugin completely,
     * set the `undo` option to `false`.
     *
     * Read more:
     * - [Undo and redo](@/guides/accessories-and-menus/undo-redo/undo-redo.md)
     *
     * @memberof Options#
     * @type {boolean}
     * @default undefined
     * @category UndoRedo
     *
     * @example
     * ```js
     * // enable the `UndoRedo` plugin
     * undo: true,
     * ```
     */
    undo: void 0,
    /**
     * @description
     * The `validator` option sets a [cell validator](@/guides/cell-functions/cell-validator/cell-validator.md) for a cell.
     *
     * You can set the `validator` option to one of the following:
     *
     * | Setting              | Description                                                                      |
     * | -------------------- | -------------------------------------------------------------------------------- |
     * | A string             | A [cell validator alias](@/guides/cell-functions/cell-validator/cell-validator.md)              |
     * | A function           | Your [custom cell validator function](@/guides/cell-functions/cell-validator/cell-validator.md) |
     * | A regular expression | A regular expression used for cell validation                                    |
     *
     * By setting the `validator` option to a string,
     * you can use one of the following [cell validator aliases](@/guides/cell-functions/cell-validator/cell-validator.md):
     *
     * | Alias               | Cell validator function                                                 |
     * | ------------------- | ----------------------------------------------------------------------- |
     * | A custom alias      | Your [custom cell validator](@/guides/cell-functions/cell-validator/cell-validator.md) |
     * | `'autocomplete'`    | `AutocompleteValidator`                                                 |
     * | `'date'`            | `DateValidator`                                                         |
     * | `'dropdown'`        | `DropdownValidator`                                                     |
     * | `'numeric'`         | `NumericValidator`                                                      |
     * | `'time'`            | `TimeValidator`                                                         |
     *
     * To set the [`editor`](#editor), [`renderer`](#renderer), and [`validator`](#validator)
     * options all at once, use the [`type`](#type) option.
     *
     * Read more:
     * - [Cell validator](@/guides/cell-functions/cell-validator/cell-validator.md)
     * - [Cell type](@/guides/cell-types/cell-type/cell-type.md)
     * - [Configuration options: Cascading configuration](@/guides/getting-started/configuration-options/configuration-options.md#cascading-configuration)
     * - [`type`](#type)
     *
     * @memberof Options#
     * @type {Function|RegExp|string}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * columns: [
     *    {
     *      // use a built-in `numeric` cell validator
     *      validator: 'numeric'
     *    },
     *    {
     *      // validate against a regular expression
     *      validator: /^[0-9]$/
     *    },
     *    {
     *      // add a custom cell validator function
     *      validator(value, callback) {
     *          ...
     *      }
     *    },
     * ],
     * ```
     */
    validator: void 0,
    /**
     * @description
     * The `viewportColumnRenderingOffset` option configures the number of columns
     * to be rendered outside of the grid's viewport.
     *
     * You can set the `viewportColumnRenderingOffset` option to one of the following:
     *
     * | Setting            | Description                                             |
     * | ------------------ | ------------------------------------------------------- |
     * | `auto` (default)   | Use the offset calculated automatically by Handsontable |
     * | A number           | Set the offset manually                                 |
     *
     * The `viewportColumnRenderingOffset` setting is ignored when [`renderAllColumns`](#renderAllColumns) is set to `true`.
     *
     * Read more:
     * - [Performance: Define the number of pre-rendered rows and columns](@/guides/optimization/performance/performance.md#define-the-number-of-pre-rendered-rows-and-columns)
     *
     * @memberof Options#
     * @type {number|string}
     * @default 'auto'
     * @category Core
     *
     * @example
     * ```js
     * // render 70 columns outside of the grid's viewport
     * viewportColumnRenderingOffset: 70,
     * ```
     */
    viewportColumnRenderingOffset: "auto",
    /**
     * @description
     * The `viewportRowRenderingOffset` option configures the number of rows
     * to be rendered outside of the grid's viewport.
     *
     * You can set the `viewportRowRenderingOffset` option to one of the following:
     *
     * | Setting            | Description                                             |
     * | ------------------ | ------------------------------------------------------- |
     * | `auto` (default)   | Use the offset calculated automatically by Handsontable |
     * | A number           | Set the offset manually                                 |
     *
     * The `viewportRowRenderingOffset` setting is ignored when [`renderAllRows`](#renderAllRows) is set to `true`.
     *
     * Read more:
     * - [Performance: Define the number of pre-rendered rows and columns](@/guides/optimization/performance/performance.md#define-the-number-of-pre-rendered-rows-and-columns)
     * - [Column virtualization](@/guides/columns/column-virtualization/column-virtualization.md)
     *
     * @memberof Options#
     * @type {number|string}
     * @default 'auto'
     * @category Core
     *
     * @example
     * ```js
     * // render 70 rows outside of the grid's viewport
     * viewportRowRenderingOffset: 70,
     * ```
     */
    viewportRowRenderingOffset: "auto",
    /**
     * The `visibleRows` option sets the height of the [`autocomplete`](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md)
     * and [`dropdown`](@/guides/cell-types/dropdown-cell-type/dropdown-cell-type.md) lists.
     *
     * When the number of list options exceeds the `visibleRows` number, a scrollbar appears.
     *
     * Read more:
     * - [Autocomplete cell type](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md)
     * - [Dropdown cell type](@/guides/cell-types/dropdown-cell-type/dropdown-cell-type.md)
     *
     * @memberof Options#
     * @type {number}
     * @default 10
     * @category Core
     *
     * @example
     * ```js
     * columns: [
     *   {
     *     type: 'autocomplete',
     *     // set the `autocomplete` list's height to 15 options
     *     // for each cell of this column
     *     visibleRows: 15,
     *   },
     *   {
     *     type: 'dropdown',
     *     // set the `dropdown` list's height to 5 options
     *     // for each cell of this column
     *     visibleRows: 5,
     *   }
     * ],
     * ```
     */
    visibleRows: 10,
    /**
     * The `width` option configures the width of your grid.
     *
     * You can set the `width` option to one of the following:
     *
     * | Setting                                                                    | Example                   |
     * | -------------------------------------------------------------------------- | ------------------------- |
     * | A number of pixels                                                         | `width: 500`              |
     * | A string with a [CSS unit](https://www.w3schools.com/cssref/css_units.asp) | `width: '75vw'`           |
     * | A function that returns a valid number or string                           | `width() { return 500; }` |
     *
     * Read more:
     * - [Grid size](@/guides/getting-started/grid-size/grid-size.md)
     *
     * @memberof Options#
     * @type {number|string|Function}
     * @default undefined
     * @category Core
     *
     * @example
     * ```js
     * // set the grid's width to 500px
     * width: 500,
     *
     * // set the grid's width to 75vw
     * width: '75vw',
     *
     * // set the grid's width to 500px, using a function
     * width() {
     *   return 500;
     * },
     * ```
     */
    width: void 0,
    /**
     * The `wordWrap` option configures whether content that exceeds a column's width is wrapped or not.
     *
     * You can set the `wordWrap` option to one of the following:
     *
     * | Setting          | Description                                             |
     * | ---------------- | ------------------------------------------------------- |
     * | `true` (default) | If content exceeds the column's width, wrap the content |
     * | `false`          | Don't wrap content                                      |
     *
     * To style cells that don't wrap content, use the [`noWordWrapClassName`](#noWordWrapClassName) option.
     *
     * Read more:
     * - [`noWordWrapClassName`](#noWordWrapClassName)
     *
     * @memberof Options#
     * @type {boolean}
     * @default true
     * @category Core
     *
     * @example
     * ```js
     * // set column width for every column of the entire grid
     * colWidths: 100,
     *
     * columns: [
     *   {
     *     // don't wrap content in this column
     *     wordWrap: false,
     *   },
     *   {
     *     // if content exceeds this column's width, wrap the content
     *     wordWrap: true,
     *   }
     * ],
     * ```
     */
    wordWrap: true
    /* eslint-enable jsdoc/require-description-complete-sentence */
  };
};

// node_modules/handsontable/dataMap/metaManager/metaLayers/globalMeta.mjs
function _defineProperty5(obj, key, value) {
  key = _toPropertyKey5(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey5(t) {
  var i = _toPrimitive5(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive5(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function createTableMetaEmptyClass() {
  return class TableMeta {
  };
}
var GlobalMeta = class {
  constructor(hot) {
    _defineProperty5(this, "metaCtor", createTableMetaEmptyClass());
    _defineProperty5(this, "meta", void 0);
    this.meta = this.metaCtor.prototype;
    extend(this.meta, metaSchema_default());
    this.meta.instance = hot;
  }
  /**
   * Gets constructor of the global meta object. Necessary for inheritance for creating the next meta layers.
   *
   * @returns {Function}
   */
  getMetaConstructor() {
    return this.metaCtor;
  }
  /**
   * Gets settings object for this layer.
   *
   * @returns {object}
   */
  getMeta() {
    return this.meta;
  }
  /**
   * Updates global settings object by merging settings with the current state.
   *
   * @param {object} settings An object to merge with.
   */
  updateMeta(settings) {
    var _settings$type;
    extend(this.meta, settings);
    extendByMetaType(this.meta, __spreadProps(__spreadValues({}, settings), {
      type: (_settings$type = settings.type) !== null && _settings$type !== void 0 ? _settings$type : this.meta.type
    }), settings);
  }
};

// node_modules/handsontable/dataMap/metaManager/metaLayers/tableMeta.mjs
function _defineProperty6(obj, key, value) {
  key = _toPropertyKey6(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey6(t) {
  var i = _toPrimitive6(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive6(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var TableMeta = class {
  constructor(globalMeta) {
    _defineProperty6(this, "meta", void 0);
    const MetaCtor = globalMeta.getMetaConstructor();
    this.meta = new MetaCtor();
  }
  /**
   * Gets settings object for this layer.
   *
   * @returns {TableMeta}
   */
  getMeta() {
    return this.meta;
  }
  /**
   * Updates table settings object by merging settings with the current state.
   *
   * @param {object} settings An object to merge with.
   */
  updateMeta(settings) {
    extend(this.meta, settings);
    extendByMetaType(this.meta, settings, settings);
  }
};

// node_modules/handsontable/dataMap/metaManager/lazyFactoryMap.mjs
function _defineProperty7(obj, key, value) {
  key = _toPropertyKey7(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey7(t) {
  var i = _toPrimitive7(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive7(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var LazyFactoryMap = class {
  constructor(valueFactory) {
    _defineProperty7(this, "valueFactory", void 0);
    _defineProperty7(this, "data", []);
    _defineProperty7(this, "index", []);
    _defineProperty7(this, "holes", /* @__PURE__ */ new Set());
    this.valueFactory = valueFactory;
  }
  /**
   * Gets or if data not exist creates and returns new data.
   *
   * @param {number} key The item key as zero-based index.
   * @returns {*}
   */
  obtain(key) {
    assert(() => isUnsignedNumber(key), "Expecting an unsigned number.");
    const dataIndex = this._getStorageIndexByKey(key);
    let result;
    if (dataIndex >= 0) {
      result = this.data[dataIndex];
      if (result === void 0) {
        result = this.valueFactory(key);
        this.data[dataIndex] = result;
      }
    } else {
      result = this.valueFactory(key);
      if (this.holes.size > 0) {
        const reuseIndex = this.holes.values().next().value;
        this.holes.delete(reuseIndex);
        this.data[reuseIndex] = result;
        this.index[key] = reuseIndex;
      } else {
        this.data.push(result);
        this.index[key] = this.data.length - 1;
      }
    }
    return result;
  }
  /**
   * Inserts an empty data to the map. This method creates an empty space for obtaining
   * new data.
   *
   * @param {number} key The key as volatile zero-based index at which to begin inserting space for new data.
   * @param {number} [amount=1] Ammount of data to insert.
   */
  insert(key) {
    let amount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    assert(() => isUnsignedNumber(key) || isNullish(key), "Expecting an unsigned number or null/undefined argument.");
    const newIndexes = [];
    const dataLength = this.data.length;
    for (let i = 0; i < amount; i++) {
      newIndexes.push(dataLength + i);
      this.data.push(void 0);
    }
    const insertionIndex = isNullish(key) ? this.index.length : key;
    this.index = [...this.index.slice(0, insertionIndex), ...newIndexes, ...this.index.slice(insertionIndex)];
  }
  /**
   * Removes (soft remove) data from "index" and according to the amount of data.
   *
   * @param {number} key The key as volatile zero-based index at which to begin removing the data.
   * @param {number} [amount=1] Ammount data to remove.
   */
  remove(key) {
    let amount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    assert(() => isUnsignedNumber(key) || isNullish(key), "Expecting an unsigned number or null/undefined argument.");
    const removed = this.index.splice(isNullish(key) ? this.index.length - amount : key, amount);
    for (let i = 0; i < removed.length; i++) {
      const removedIndex = removed[i];
      if (typeof removedIndex === "number") {
        this.holes.add(removedIndex);
      }
    }
  }
  /**
   * Returns the size of the data which this map holds.
   *
   * @returns {number}
   */
  size() {
    return this.data.length - this.holes.size;
  }
  /**
   * Returns a new Iterator object that contains the values for each item in the LazyMap object.
   *
   * @returns {Iterator}
   */
  values() {
    return arrayFilter(this.data, (_, index) => !this.holes.has(index))[Symbol.iterator]();
  }
  /**
   * Returns a new Iterator object that contains an array of `[index, value]` for each item in the LazyMap object.
   *
   * @returns {Iterator}
   */
  entries() {
    const validEntries = [];
    for (let i = 0; i < this.data.length; i++) {
      const keyIndex = this._getKeyByStorageIndex(i);
      if (keyIndex !== -1) {
        validEntries.push([keyIndex, this.data[i]]);
      }
    }
    let dataIndex = 0;
    return {
      next: () => {
        if (dataIndex < validEntries.length) {
          const value = validEntries[dataIndex];
          dataIndex += 1;
          return {
            value,
            done: false
          };
        }
        return {
          done: true
        };
      }
    };
  }
  /**
   * Clears the map.
   */
  clear() {
    this.data = [];
    this.index = [];
    this.holes.clear();
  }
  /**
   * Gets storage index calculated from the key associated with the specified value.
   *
   * @param {number} key Volatile zero-based index.
   * @returns {number} Returns index 0-N or -1 if no storage index found.
   */
  _getStorageIndexByKey(key) {
    return this.index.length > key ? this.index[key] : -1;
  }
  /**
   * Gets the key associated with the specified value calculated from storage index.
   *
   * @param {number} dataIndex Zero-based storage index.
   * @returns {number} Returns index 0-N or -1 if no key found.
   */
  _getKeyByStorageIndex(dataIndex) {
    return this.index.indexOf(dataIndex);
  }
  /**
   * Makes this object iterable.
   *
   * @returns {Iterator}
   */
  [Symbol.iterator]() {
    return this.entries();
  }
};

// node_modules/handsontable/dataMap/metaManager/metaLayers/columnMeta.mjs
function _defineProperty8(obj, key, value) {
  key = _toPropertyKey8(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey8(t) {
  var i = _toPrimitive8(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive8(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var COLUMNS_PROPS_CONFLICTS = ["data", "width"];
var ColumnMeta = class {
  constructor(globalMeta) {
    _defineProperty8(this, "globalMeta", void 0);
    _defineProperty8(this, "metas", new LazyFactoryMap(() => this._createMeta()));
    this.globalMeta = globalMeta;
    this.metas = new LazyFactoryMap(() => this._createMeta());
  }
  /**
   * Updates column meta object by merging settings with the current state.
   *
   * @param {number} physicalColumn The physical column index which points what column meta object is updated.
   * @param {object} settings An object to merge with.
   */
  updateMeta(physicalColumn, settings) {
    const meta = this.getMeta(physicalColumn);
    extend(meta, settings);
    extendByMetaType(meta, settings);
  }
  /**
   * Creates one or more columns at specific position.
   *
   * @param {number} physicalColumn The physical column index which points from what position the column is added.
   * @param {number} amount An amount of columns to add.
   */
  createColumn(physicalColumn, amount) {
    this.metas.insert(physicalColumn, amount);
  }
  /**
   * Removes one or more columns from the collection.
   *
   * @param {number} physicalColumn The physical column index which points from what position the column is removed.
   * @param {number} amount An amount columns to remove.
   */
  removeColumn(physicalColumn, amount) {
    this.metas.remove(physicalColumn, amount);
  }
  /**
   * Gets settings object for this layer.
   *
   * @param {number} physicalColumn The physical column index.
   * @returns {object}
   */
  getMeta(physicalColumn) {
    return this.metas.obtain(physicalColumn);
  }
  /**
   * Gets constructor of the column meta object. Necessary for inheritance - creating the next meta layers.
   *
   * @param {number} physicalColumn The physical column index.
   * @returns {Function}
   */
  getMetaConstructor(physicalColumn) {
    return this.metas.obtain(physicalColumn).constructor;
  }
  /**
   * Clears all saved column meta objects.
   */
  clearCache() {
    this.metas.clear();
  }
  /**
   * Creates and returns new column meta object with properties inherited from the global meta layer.
   *
   * @private
   * @returns {object}
   */
  _createMeta() {
    return columnFactory(this.globalMeta.getMetaConstructor(), COLUMNS_PROPS_CONFLICTS).prototype;
  }
};

// node_modules/handsontable/dataMap/metaManager/metaLayers/cellMeta.mjs
function _defineProperty9(obj, key, value) {
  key = _toPropertyKey9(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey9(t) {
  var i = _toPrimitive9(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive9(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var CellMeta = class {
  constructor(columnMeta) {
    _defineProperty9(this, "columnMeta", void 0);
    _defineProperty9(this, "metas", new LazyFactoryMap(() => this._createRow()));
    this.columnMeta = columnMeta;
  }
  /**
   * Updates cell meta object by merging settings with the current state.
   *
   * @param {number} physicalRow The physical row index which points what cell meta object is updated.
   * @param {number} physicalColumn The physical column index which points what cell meta object is updated.
   * @param {object} settings An object to merge with.
   */
  updateMeta(physicalRow, physicalColumn, settings) {
    const meta = this.getMeta(physicalRow, physicalColumn);
    extend(meta, settings);
    extendByMetaType(meta, settings);
  }
  /**
   * Creates one or more rows at specific position.
   *
   * @param {number} physicalRow The physical row index which points from what position the row is added.
   * @param {number} amount An amount of rows to add.
   */
  createRow(physicalRow, amount) {
    this.metas.insert(physicalRow, amount);
  }
  /**
   * Creates one or more columns at specific position.
   *
   * @param {number} physicalColumn The physical column index which points from what position the column is added.
   * @param {number} amount An amount of columns to add.
   */
  createColumn(physicalColumn, amount) {
    for (let i = 0; i < this.metas.size(); i++) {
      this.metas.obtain(i).insert(physicalColumn, amount);
    }
  }
  /**
   * Removes one or more rows from the collection.
   *
   * @param {number} physicalRow The physical row index which points from what position the row is removed.
   * @param {number} amount An amount of rows to remove.
   */
  removeRow(physicalRow, amount) {
    this.metas.remove(physicalRow, amount);
  }
  /**
   * Removes one or more columns from the collection.
   *
   * @param {number} physicalColumn The physical column index which points from what position the column is removed.
   * @param {number} amount An amount of columns to remove.
   */
  removeColumn(physicalColumn, amount) {
    for (let i = 0; i < this.metas.size(); i++) {
      this.metas.obtain(i).remove(physicalColumn, amount);
    }
  }
  /**
   * Gets settings object for this layer.
   *
   * @param {number} physicalRow The physical row index.
   * @param {number} physicalColumn The physical column index.
   * @param {string} [key] If the key exists its value will be returned, otherwise the whole cell meta object.
   * @returns {object}
   */
  getMeta(physicalRow, physicalColumn, key) {
    const cellMeta = this.metas.obtain(physicalRow).obtain(physicalColumn);
    if (key === void 0) {
      return cellMeta;
    }
    return cellMeta[key];
  }
  /**
   * Sets settings object for this layer defined by "key" property.
   *
   * @param {number} physicalRow The physical row index.
   * @param {number} physicalColumn The physical column index.
   * @param {string} key The property name to set.
   * @param {*} value Value to save.
   */
  setMeta(physicalRow, physicalColumn, key, value) {
    var _cellMeta$_automatica;
    const cellMeta = this.metas.obtain(physicalRow).obtain(physicalColumn);
    (_cellMeta$_automatica = cellMeta._automaticallyAssignedMetaProps) === null || _cellMeta$_automatica === void 0 || _cellMeta$_automatica.delete(key);
    cellMeta[key] = value;
  }
  /**
   * Removes a property defined by the "key" argument from the cell meta object.
   *
   * @param {number} physicalRow The physical row index.
   * @param {number} physicalColumn The physical column index.
   * @param {string} key The property name to remove.
   */
  removeMeta(physicalRow, physicalColumn, key) {
    const cellMeta = this.metas.obtain(physicalRow).obtain(physicalColumn);
    delete cellMeta[key];
  }
  /**
   * Returns all cell meta objects that were created during the Handsontable operation. As cell meta
   * objects are created lazy, the length of the returned collection depends on how and when the
   * table has asked for access to that meta objects.
   *
   * @returns {object[]}
   */
  getMetas() {
    const metas = [];
    const rows = Array.from(this.metas.values());
    for (let row = 0; row < rows.length; row++) {
      if (isDefined(rows[row])) {
        metas.push(...rows[row].values());
      }
    }
    return metas;
  }
  /**
   * Returns all cell meta objects that were created during the Handsontable operation but for
   * specific row index.
   *
   * @param {number} physicalRow The physical row index.
   * @returns {object[]}
   */
  getMetasAtRow(physicalRow) {
    assert(() => isUnsignedNumber(physicalRow), "Expecting an unsigned number.");
    const rowsMeta = new Map(this.metas);
    return rowsMeta.has(physicalRow) ? Array.from(rowsMeta.get(physicalRow).values()) : [];
  }
  /**
   * Clears all saved cell meta objects.
   */
  clearCache() {
    this.metas.clear();
  }
  /**
   * Creates and returns new structure for cell meta objects stored in columnar axis.
   *
   * @private
   * @returns {object}
   */
  _createRow() {
    return new LazyFactoryMap((physicalColumn) => this._createMeta(physicalColumn));
  }
  /**
   * Creates and returns new cell meta object with properties inherited from the column meta layer.
   *
   * @private
   * @param {number} physicalColumn The physical column index.
   * @returns {object}
   */
  _createMeta(physicalColumn) {
    const ColumnMeta2 = this.columnMeta.getMetaConstructor(physicalColumn);
    return new ColumnMeta2();
  }
};

// node_modules/handsontable/dataMap/metaManager/index.mjs
var MetaManager = class {
  constructor(hot) {
    let customSettings = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let metaMods = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    this.hot = hot;
    this.globalMeta = new GlobalMeta(hot);
    this.tableMeta = new TableMeta(this.globalMeta);
    this.columnMeta = new ColumnMeta(this.globalMeta);
    this.cellMeta = new CellMeta(this.columnMeta);
    metaMods.forEach((ModifierClass) => new ModifierClass(this));
    this.globalMeta.updateMeta(customSettings);
  }
  /**
   * Gets the global meta object that is a root of all default settings, which are recognizable by Handsontable.
   * Other layers inherites all properties from this. Adding, removing, or changing property in that
   * object has a direct reflection to all layers.
   *
   * @returns {object}
   */
  getGlobalMeta() {
    return this.globalMeta.getMeta();
  }
  /**
   * Updates global settings object by merging settings with the current state.
   *
   * @param {object} settings An object to merge with.
   */
  updateGlobalMeta(settings) {
    this.globalMeta.updateMeta(settings);
  }
  /**
   * Gets settings object that was passed in the Handsontable constructor. That layer contains all
   * default settings inherited from the GlobalMeta layer merged with settings passed by the developer.
   * Adding, removing, or changing property in that object has no direct reflection on any other layers.
   *
   * @returns {TableMeta}
   */
  getTableMeta() {
    return this.tableMeta.getMeta();
  }
  /**
   * Updates table settings object by merging settings with the current state.
   *
   * @param {object} settings An object to merge with.
   */
  updateTableMeta(settings) {
    this.tableMeta.updateMeta(settings);
  }
  /**
   * Gets column meta object that is a root of all settings defined in the column property of the Handsontable
   * settings. Each column in the Handsontable is associated with a unique meta object which identified by
   * the physical column index. Adding, removing, or changing property in that object has a direct reflection
   * only for the CellMeta layer. The reflection will be visible only if the property doesn't exist in the lower
   * layers (prototype lookup).
   *
   * @param {number} physicalColumn The physical column index.
   * @returns {object}
   */
  getColumnMeta(physicalColumn) {
    return this.columnMeta.getMeta(physicalColumn);
  }
  /**
   * Updates column meta object by merging settings with the current state.
   *
   * @param {number} physicalColumn The physical column index which points what column meta object is updated.
   * @param {object} settings An object to merge with.
   */
  updateColumnMeta(physicalColumn, settings) {
    this.columnMeta.updateMeta(physicalColumn, settings);
  }
  /**
   * Gets the cell meta object that is a root of all settings defined for the specific cell rendered by
   * the Handsontable. Each cell meta inherits settings from higher layers. When a property doesn't
   * exist in that layer, it is looked up through a prototype to the highest layer. Starting
   * from CellMeta -> ColumnMeta and ending to GlobalMeta, which stores default settings. Adding,
   * removing, or changing property in that object has no direct reflection on any other layers.
   *
   * @param {number} physicalRow The physical row index.
   * @param {number} physicalColumn The physical column index.
   * @param {object} options Additional options that are used to extend the cell meta object.
   * @param {number} options.visualRow The visual row index of the currently requested cell meta object.
   * @param {number} options.visualColumn The visual column index of the currently requested cell meta object.
   * @returns {object}
   */
  getCellMeta(physicalRow, physicalColumn, _ref) {
    let {
      visualRow,
      visualColumn
    } = _ref;
    const cellMeta = this.cellMeta.getMeta(physicalRow, physicalColumn);
    cellMeta.visualRow = visualRow;
    cellMeta.visualCol = visualColumn;
    cellMeta.row = physicalRow;
    cellMeta.col = physicalColumn;
    this.runLocalHooks("afterGetCellMeta", cellMeta);
    return cellMeta;
  }
  /**
   * Gets a value (defined by the `key` property) from the cell meta object.
   *
   * @param {number} physicalRow The physical row index.
   * @param {number} physicalColumn The physical column index.
   * @param {string} key Defines the value that will be returned from the cell meta object.
   * @returns {*}
   */
  getCellMetaKeyValue(physicalRow, physicalColumn, key) {
    if (typeof key !== "string") {
      throw new Error("The passed cell meta object key is not a string");
    }
    return this.cellMeta.getMeta(physicalRow, physicalColumn, key);
  }
  /**
   * Sets settings object for cell meta object defined by "key" property.
   *
   * @param {number} physicalRow The physical row index.
   * @param {number} physicalColumn The physical column index.
   * @param {string} key The property name to set.
   * @param {*} value Value to save.
   */
  setCellMeta(physicalRow, physicalColumn, key, value) {
    this.cellMeta.setMeta(physicalRow, physicalColumn, key, value);
  }
  /**
   * Updates cell meta object by merging settings with the current state.
   *
   * @param {number} physicalRow The physical row index which points what cell meta object is updated.
   * @param {number} physicalColumn The physical column index which points what cell meta object is updated.
   * @param {object} settings An object to merge with.
   */
  updateCellMeta(physicalRow, physicalColumn, settings) {
    this.cellMeta.updateMeta(physicalRow, physicalColumn, settings);
  }
  /**
   * Removes a property defined by the "key" argument from the cell meta object.
   *
   * @param {number} physicalRow The physical row index.
   * @param {number} physicalColumn The physical column index.
   * @param {string} key The property name to remove.
   */
  removeCellMeta(physicalRow, physicalColumn, key) {
    this.cellMeta.removeMeta(physicalRow, physicalColumn, key);
  }
  /**
   * Returns all cell meta objects that were created during the Handsontable operation. As cell meta
   * objects are created lazy, the length of the returned collection depends on how and when the
   * table has asked for access to that meta objects.
   *
   * @returns {object[]}
   */
  getCellsMeta() {
    return this.cellMeta.getMetas();
  }
  /**
   * Returns all cell meta objects that were created during the Handsontable operation but for
   * specific row index.
   *
   * @param {number} physicalRow The physical row index.
   * @returns {object[]}
   */
  getCellsMetaAtRow(physicalRow) {
    return this.cellMeta.getMetasAtRow(physicalRow);
  }
  /**
   * Creates one or more rows at specific position.
   *
   * @param {number} physicalRow The physical row index which points from what position the row is added.
   * @param {number} [amount=1] An amount of rows to add.
   */
  createRow(physicalRow) {
    let amount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    this.cellMeta.createRow(physicalRow, amount);
  }
  /**
   * Removes one or more rows from the collection.
   *
   * @param {number} physicalRow The physical row index which points from what position the row is removed.
   * @param {number} [amount=1] An amount rows to remove.
   */
  removeRow(physicalRow) {
    let amount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    this.cellMeta.removeRow(physicalRow, amount);
  }
  /**
   * Creates one or more columns at specific position.
   *
   * @param {number} physicalColumn The physical column index which points from what position the column is added.
   * @param {number} [amount=1] An amount of columns to add.
   */
  createColumn(physicalColumn) {
    let amount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    this.cellMeta.createColumn(physicalColumn, amount);
    this.columnMeta.createColumn(physicalColumn, amount);
  }
  /**
   * Removes one or more columns from the collection.
   *
   * @param {number} physicalColumn The physical column index which points from what position the column is removed.
   * @param {number} [amount=1] An amount of columns to remove.
   */
  removeColumn(physicalColumn) {
    let amount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    this.cellMeta.removeColumn(physicalColumn, amount);
    this.columnMeta.removeColumn(physicalColumn, amount);
  }
  /**
   * Clears all saved cell meta objects. It keeps column meta, table meta, and global meta intact.
   */
  clearCellsCache() {
    this.cellMeta.clearCache();
  }
  /**
   * Clears all saved cell and columns meta objects.
   */
  clearCache() {
    this.cellMeta.clearCache();
    this.columnMeta.clearCache();
  }
};
mixin(MetaManager, localHooks_default);

// node_modules/handsontable/dataMap/replaceData.mjs
function replaceData(data, setDataMapFunction, callbackFunction, config) {
  const {
    hotInstance,
    dataMap,
    dataSource,
    internalSource,
    source,
    metaManager,
    firstRun
  } = config;
  const capitalizedInternalSource = toUpperCaseFirst(internalSource);
  const tableMeta = hotInstance.getSettings();
  if (Array.isArray(tableMeta.dataSchema)) {
    hotInstance.dataType = "array";
  } else if (isFunction(tableMeta.dataSchema)) {
    hotInstance.dataType = "function";
  } else {
    hotInstance.dataType = "object";
  }
  if (dataMap) {
    dataMap.destroy();
  }
  data = hotInstance.runHooks(`before${capitalizedInternalSource}`, data, firstRun, source);
  const newDataMap = new dataMap_default(hotInstance, data, metaManager);
  setDataMapFunction(newDataMap);
  if (typeof data === "object" && data !== null) {
    if (!(data.push && data.splice)) {
      data = [data];
    }
  } else if (data === null) {
    const dataSchema = newDataMap.getSchema();
    data = [];
    let row;
    let r = 0;
    let rlen = 0;
    for (r = 0, rlen = tableMeta.startRows; r < rlen; r++) {
      if ((hotInstance.dataType === "object" || hotInstance.dataType === "function") && tableMeta.dataSchema) {
        row = deepClone(dataSchema);
        data.push(row);
      } else if (hotInstance.dataType === "array") {
        row = deepClone(dataSchema[0]);
        data.push(row);
      } else {
        row = [];
        for (let c = 0, clen = tableMeta.startCols; c < clen; c++) {
          row.push(null);
        }
        data.push(row);
      }
    }
  } else {
    throw new Error(`${internalSource} only accepts array of objects or array of arrays (${typeof data} given)`);
  }
  if (Array.isArray(data[0])) {
    hotInstance.dataType = "array";
  }
  tableMeta.data = data;
  newDataMap.dataSource = data;
  dataSource.data = data;
  dataSource.dataType = hotInstance.dataType;
  dataSource.colToProp = newDataMap.colToProp.bind(newDataMap);
  dataSource.propToCol = newDataMap.propToCol.bind(newDataMap);
  dataSource.countCachedColumns = newDataMap.countCachedColumns.bind(newDataMap);
  callbackFunction(newDataMap);
  hotInstance.runHooks(`after${capitalizedInternalSource}`, data, firstRun, source);
  if (!firstRun) {
    hotInstance.runHooks("afterChange", null, internalSource);
    hotInstance.render();
  }
  if (hotInstance.getSettings().ariaTags) {
    setAttribute(hotInstance.rootElement, [
      A11Y_ROWCOUNT(-1),
      // If run after initialization, add the number of row headers.
      A11Y_COLCOUNT(hotInstance.countCols() + (hotInstance.view ? hotInstance.countRowHeaders() : 0))
    ]);
  }
}

// node_modules/handsontable/dataMap/metaManager/mods/dynamicCellMeta.mjs
function _defineProperty10(obj, key, value) {
  key = _toPropertyKey10(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey10(t) {
  var i = _toPrimitive10(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive10(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var DynamicCellMetaMod = class {
  constructor(metaManager) {
    _defineProperty10(this, "metaManager", void 0);
    _defineProperty10(this, "metaSyncMemo", /* @__PURE__ */ new Map());
    this.metaManager = metaManager;
    metaManager.addLocalHook("afterGetCellMeta", (cellMeta) => this.extendCellMeta(cellMeta));
    pluginHooks_default.getSingleton().add("beforeRender", (forceFullRender) => {
      if (forceFullRender) {
        this.metaSyncMemo.clear();
      }
    }, this.metaManager.hot);
  }
  /**
   * Extends the cell meta object by user-specific properties.
   *
   * The cell meta object can be extended dynamically,
   * either by Handsontable's hooks (`beforeGetCellMeta` and`afterGetCellMeta`),
   * or by Handsontable's `cells` option.
   *
   * To boost performance, the extending process is triggered only once per one slow Handsontable render cycle.
   *
   * @param {object} cellMeta The cell meta object.
   */
  extendCellMeta(cellMeta) {
    var _this$metaSyncMemo$ge;
    const {
      row: physicalRow,
      col: physicalColumn
    } = cellMeta;
    if ((_this$metaSyncMemo$ge = this.metaSyncMemo.get(physicalRow)) !== null && _this$metaSyncMemo$ge !== void 0 && _this$metaSyncMemo$ge.has(physicalColumn)) {
      return;
    }
    const {
      visualRow,
      visualCol
    } = cellMeta;
    const hot = this.metaManager.hot;
    const prop = hot.colToProp(visualCol);
    cellMeta.prop = prop;
    hot.runHooks("beforeGetCellMeta", visualRow, visualCol, cellMeta);
    const cellType = hasOwnProperty(cellMeta, "type") ? cellMeta.type : null;
    let cellSettings = isFunction(cellMeta.cells) ? cellMeta.cells(physicalRow, physicalColumn, prop) : null;
    if (cellType) {
      if (cellSettings) {
        var _cellSettings$type;
        cellSettings.type = (_cellSettings$type = cellSettings.type) !== null && _cellSettings$type !== void 0 ? _cellSettings$type : cellType;
      } else {
        cellSettings = {
          type: cellType
        };
      }
    }
    if (cellSettings) {
      this.metaManager.updateCellMeta(physicalRow, physicalColumn, cellSettings);
    }
    hot.runHooks("afterGetCellMeta", visualRow, visualCol, cellMeta);
    if (!this.metaSyncMemo.has(physicalRow)) {
      this.metaSyncMemo.set(physicalRow, /* @__PURE__ */ new Set());
    }
    this.metaSyncMemo.get(physicalRow).add(physicalColumn);
  }
};

// node_modules/handsontable/dataMap/metaManager/mods/extendMetaProperties.mjs
function _classPrivateFieldInitSpec3(obj, privateMap, value) {
  _checkPrivateRedeclaration4(obj, privateMap);
  privateMap.set(obj, value);
}
function _checkPrivateRedeclaration4(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _defineProperty11(obj, key, value) {
  key = _toPropertyKey11(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey11(t) {
  var i = _toPrimitive11(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive11(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _classPrivateFieldGet3(s, a) {
  return s.get(_assertClassBrand4(s, a));
}
function _assertClassBrand4(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
var _initOnlyCallback = /* @__PURE__ */ new WeakMap();
var ExtendMetaPropertiesMod = class {
  constructor(metaManager) {
    _defineProperty11(this, "metaManager", void 0);
    _defineProperty11(this, "usageTracker", /* @__PURE__ */ new Set());
    _defineProperty11(this, "propDescriptors", /* @__PURE__ */ new Map([["ariaTags", {
      initOnly: true
    }], ["fixedColumnsLeft", {
      target: "fixedColumnsStart",
      onChange(propName) {
        const isRtl = this.metaManager.hot.isRtl();
        if (isRtl && propName === "fixedColumnsLeft") {
          throw new Error("The `fixedColumnsLeft` is not supported for RTL. Please use option `fixedColumnsStart`.");
        }
        if (this.usageTracker.has("fixedColumnsLeft") && this.usageTracker.has("fixedColumnsStart")) {
          throw new Error("The `fixedColumnsLeft` and `fixedColumnsStart` should not be used together. Please use only the option `fixedColumnsStart`.");
        }
      }
    }], ["layoutDirection", {
      initOnly: true
    }], ["renderAllColumns", {
      initOnly: true
    }], ["renderAllRows", {
      initOnly: true
    }]]));
    _classPrivateFieldInitSpec3(this, _initOnlyCallback, (propName, value, isInitialChange) => {
      if (!isInitialChange) {
        throw new Error(`The \`${propName}\` option can not be updated after the Handsontable is initialized.`);
      }
    });
    this.metaManager = metaManager;
    this.extendMetaProps();
  }
  /**
   * Extends the meta options based on the object descriptors from the `propDescriptors` list.
   */
  extendMetaProps() {
    this.propDescriptors.forEach((descriptor, alias) => {
      const {
        initOnly,
        target,
        onChange
      } = descriptor;
      const hasTarget = typeof target === "string";
      const targetProp = hasTarget ? target : alias;
      const origProp = `_${targetProp}`;
      this.metaManager.globalMeta.meta[origProp] = this.metaManager.globalMeta.meta[targetProp];
      if (onChange) {
        this.installPropWatcher(alias, origProp, onChange);
        if (hasTarget) {
          this.installPropWatcher(target, origProp, onChange);
        }
      } else if (initOnly) {
        this.installPropWatcher(alias, origProp, _classPrivateFieldGet3(_initOnlyCallback, this));
        if (!this.metaManager.globalMeta.meta._initOnlySettings) {
          this.metaManager.globalMeta.meta._initOnlySettings = [];
        }
        this.metaManager.globalMeta.meta._initOnlySettings.push(alias);
      }
    });
  }
  /**
   * Installs the property watcher to the `propName` option and forwards getter and setter to
   * the new one.
   *
   * @param {string} propName The property to watch.
   * @param {string} origProp The property from/to the value is forwarded.
   * @param {Function} onChange The callback.
   */
  installPropWatcher(propName, origProp, onChange) {
    const self = this;
    Object.defineProperty(this.metaManager.globalMeta.meta, propName, {
      get() {
        return this[origProp];
      },
      set(value) {
        const isInitialChange = !self.usageTracker.has(propName);
        self.usageTracker.add(propName);
        onChange.call(self, propName, value, isInitialChange);
        this[origProp] = value;
      },
      enumerable: true,
      configurable: true
    });
  }
};

// node_modules/handsontable/core/focusCatcher/focusDetector.mjs
function installFocusDetector(hot) {
  let hooks = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const rootElement = hot.rootElement;
  const inputTrapTop = createInputElement(hot);
  const inputTrapBottom = createInputElement(hot);
  inputTrapTop.addEventListener("focus", () => hooks === null || hooks === void 0 ? void 0 : hooks.onFocusFromTop());
  inputTrapBottom.addEventListener("focus", () => hooks === null || hooks === void 0 ? void 0 : hooks.onFocusFromBottom());
  rootElement.firstChild.before(inputTrapTop);
  rootElement.lastChild.after(inputTrapBottom);
  return {
    /**
     * Activates the detector by resetting the tabIndex of the input elements.
     */
    activate() {
      hot._registerTimeout(() => {
        inputTrapTop.tabIndex = 0;
        inputTrapBottom.tabIndex = 0;
      }, 10);
    },
    /**
     * Deactivates the detector by setting tabIndex to -1.
     */
    deactivate() {
      hot._registerTimeout(() => {
        inputTrapTop.tabIndex = -1;
        inputTrapBottom.tabIndex = -1;
      }, 10);
    }
  };
}
function createInputElement(hot) {
  const rootDocument = hot.rootDocument;
  const input = rootDocument.createElement("input");
  input.type = "text";
  input.classList.add("htFocusCatcher");
  if (hot.getSettings().ariaTags) {
    setAttribute(input, [A11Y_PRESENTATION(), A11Y_HIDDEN()]);
  }
  return input;
}

// node_modules/handsontable/core/focusCatcher/index.mjs
function installFocusCatcher(hot) {
  const clampCoordsIfNeeded = normalizeCoordsIfNeeded(hot);
  let recentlyAddedFocusCoords;
  const {
    activate,
    deactivate
  } = installFocusDetector(hot, {
    onFocusFromTop() {
      var _clampCoordsIfNeeded;
      const mostTopStartCoords = (_clampCoordsIfNeeded = clampCoordsIfNeeded(recentlyAddedFocusCoords)) !== null && _clampCoordsIfNeeded !== void 0 ? _clampCoordsIfNeeded : getMostTopStartPosition(hot);
      if (mostTopStartCoords) {
        hot.runHooks("modifyFocusOnTabNavigation", "from_above", mostTopStartCoords);
        hot.selectCell(mostTopStartCoords.row, mostTopStartCoords.col);
      }
      hot.listen();
    },
    onFocusFromBottom() {
      var _clampCoordsIfNeeded2;
      const mostBottomEndCoords = (_clampCoordsIfNeeded2 = clampCoordsIfNeeded(recentlyAddedFocusCoords)) !== null && _clampCoordsIfNeeded2 !== void 0 ? _clampCoordsIfNeeded2 : getMostBottomEndPosition(hot);
      if (mostBottomEndCoords) {
        hot.runHooks("modifyFocusOnTabNavigation", "from_below", mostBottomEndCoords);
        hot.selectCell(mostBottomEndCoords.row, mostBottomEndCoords.col);
      }
      hot.listen();
    }
  });
  const rowWrapState = {
    wrapped: false,
    flipped: false
  };
  let isSavingCoordsEnabled = true;
  let isTabOrShiftTabPressed = false;
  let preventViewportScroll = false;
  hot.addHook("afterListen", () => deactivate());
  hot.addHook("afterUnlisten", () => activate());
  hot.addHook("afterSelection", (row, column, row2, column2, preventScrolling) => {
    if (isTabOrShiftTabPressed && (rowWrapState.wrapped && rowWrapState.flipped || preventViewportScroll)) {
      preventViewportScroll = false;
      preventScrolling.value = true;
    }
    if (isSavingCoordsEnabled) {
      var _hot$getSelectedRange;
      recentlyAddedFocusCoords = (_hot$getSelectedRange = hot.getSelectedRangeLast()) === null || _hot$getSelectedRange === void 0 ? void 0 : _hot$getSelectedRange.highlight;
    }
  });
  hot.addHook("beforeRowWrap", (interruptedByAutoInsertMode, newCoords, isFlipped) => {
    rowWrapState.wrapped = true;
    rowWrapState.flipped = isFlipped;
  });
  function deactivateTable() {
    rowWrapState.wrapped = false;
    rowWrapState.flipped = false;
    hot.deselectCell();
    hot.unlisten();
  }
  const shortcutOptions = {
    keys: [["Tab"], ["Shift", "Tab"]],
    preventDefault: false,
    stopPropagation: false,
    relativeToGroup: GRID_GROUP,
    group: "focusCatcher"
  };
  hot.getShortcutManager().getContext("grid").addShortcuts([__spreadProps(__spreadValues({}, shortcutOptions), {
    callback: () => {
      const {
        tabNavigation
      } = hot.getSettings();
      isTabOrShiftTabPressed = true;
      if (hot.getSelectedRangeLast() && !tabNavigation) {
        isSavingCoordsEnabled = false;
      }
      if (!tabNavigation) {
        preventViewportScroll = true;
      }
    },
    position: "before"
  }), __spreadProps(__spreadValues({}, shortcutOptions), {
    callback: (event) => {
      const {
        tabNavigation,
        autoWrapRow
      } = hot.getSettings();
      isTabOrShiftTabPressed = false;
      isSavingCoordsEnabled = true;
      if (!tabNavigation || !hot.selection.isSelected() || autoWrapRow && rowWrapState.wrapped && rowWrapState.flipped || !autoWrapRow && rowWrapState.wrapped) {
        if (autoWrapRow && rowWrapState.wrapped && rowWrapState.flipped) {
          recentlyAddedFocusCoords = event.shiftKey ? getMostTopStartPosition(hot) : getMostBottomEndPosition(hot);
        }
        deactivateTable();
        return false;
      }
      event.preventDefault();
    },
    position: "after"
  })]);
}
function getMostTopStartPosition(hot) {
  const {
    rowIndexMapper,
    columnIndexMapper
  } = hot;
  const {
    navigableHeaders
  } = hot.getSettings();
  let topRow = navigableHeaders && hot.countColHeaders() > 0 ? -hot.countColHeaders() : 0;
  let startColumn = navigableHeaders && hot.countRowHeaders() > 0 ? -hot.countRowHeaders() : 0;
  if (topRow === 0) {
    topRow = rowIndexMapper.getVisualFromRenderableIndex(topRow);
  }
  if (startColumn === 0) {
    startColumn = columnIndexMapper.getVisualFromRenderableIndex(startColumn);
  }
  if (topRow === null || startColumn === null) {
    return null;
  }
  return hot._createCellCoords(topRow, startColumn);
}
function getMostBottomEndPosition(hot) {
  var _rowIndexMapper$getVi, _columnIndexMapper$ge;
  const {
    rowIndexMapper,
    columnIndexMapper
  } = hot;
  const {
    navigableHeaders
  } = hot.getSettings();
  let bottomRow = rowIndexMapper.getRenderableIndexesLength() - 1;
  let endColumn = columnIndexMapper.getRenderableIndexesLength() - 1;
  if (bottomRow < 0) {
    if (!navigableHeaders || hot.countColHeaders() === 0) {
      return null;
    }
    bottomRow = -1;
  }
  if (endColumn < 0) {
    if (!navigableHeaders || hot.countColHeaders() === 0) {
      return null;
    }
    endColumn = -1;
  }
  return hot._createCellCoords((_rowIndexMapper$getVi = rowIndexMapper.getVisualFromRenderableIndex(bottomRow)) !== null && _rowIndexMapper$getVi !== void 0 ? _rowIndexMapper$getVi : bottomRow, (_columnIndexMapper$ge = columnIndexMapper.getVisualFromRenderableIndex(endColumn)) !== null && _columnIndexMapper$ge !== void 0 ? _columnIndexMapper$ge : endColumn);
}
function normalizeCoordsIfNeeded(hot) {
  return (coords) => {
    if (!coords) {
      return null;
    }
    const mostTopStartCoords = getMostTopStartPosition(hot);
    const mostBottomEndCoords = getMostBottomEndPosition(hot);
    if (coords.col < mostTopStartCoords.col) {
      coords.col = mostTopStartCoords.col;
    }
    if (coords.col > mostBottomEndCoords.col) {
      coords.col = mostBottomEndCoords.col;
    }
    if (coords.row < mostTopStartCoords.row) {
      coords.row = mostTopStartCoords.row;
    }
    if (coords.row > mostBottomEndCoords.row) {
      coords.row = mostBottomEndCoords.row;
    }
    return coords;
  };
}

// node_modules/handsontable/core/viewportScroll/scrollStrategies/columnHeaderScroll.mjs
function columnHeaderScrollStrategy(hot) {
  return (_ref) => {
    let {
      col
    } = _ref;
    hot.scrollViewportTo({
      col
    });
  };
}

// node_modules/handsontable/core/viewportScroll/scrollStrategies/cornerHeaderScroll.mjs
function cornerHeaderScrollStrategy() {
  return () => {
  };
}

// node_modules/handsontable/core/viewportScroll/scrollStrategies/focusScroll.mjs
function focusScrollStrategy(hot) {
  return (cellCoords) => {
    hot.scrollViewportTo(cellCoords.toObject());
  };
}

// node_modules/handsontable/core/viewportScroll/scrollStrategies/multipleScroll.mjs
function multipleScrollStrategy(hot) {
  return (cellCoords) => {
    hot.scrollViewportTo(cellCoords.toObject());
  };
}

// node_modules/handsontable/core/viewportScroll/scrollStrategies/noncontiguousScroll.mjs
function noncontiguousScrollStrategy(hot) {
  return (cellCoords) => {
    hot.scrollViewportTo(cellCoords.toObject());
  };
}

// node_modules/handsontable/core/viewportScroll/scrollStrategies/rowHeaderScroll.mjs
function rowHeaderScrollStrategy(hot) {
  return (_ref) => {
    let {
      row
    } = _ref;
    hot.scrollViewportTo({
      row
    });
  };
}

// node_modules/handsontable/core/viewportScroll/scrollStrategies/singleScroll.mjs
function singleScrollStrategy(hot) {
  return (cellCoords) => {
    const selectionSource = hot.selection.getSelectionSource();
    const {
      row,
      col
    } = cellCoords;
    if (row < 0 && col >= 0) {
      hot.scrollViewportTo({
        col
      });
    } else if (col < 0 && row >= 0) {
      hot.scrollViewportTo({
        row
      });
    } else {
      if (selectionSource === "mouse") {
        if (col === hot.view.getLastPartiallyVisibleColumn() || row === hot.view.getLastPartiallyVisibleRow()) {
          return;
        }
      }
      hot.scrollViewportTo({
        row,
        col
      });
    }
  };
}

// node_modules/handsontable/core/viewportScroll/index.mjs
function createViewportScroller(hot) {
  const {
    selection
  } = hot;
  let skipNextCall = false;
  let isSuspended = false;
  return {
    resume() {
      isSuspended = false;
    },
    suspend() {
      isSuspended = true;
    },
    skipNextScrollCycle() {
      skipNextCall = true;
    },
    scrollTo(cellCoords) {
      var _scrollStrategy;
      if (skipNextCall || isSuspended) {
        skipNextCall = false;
        return;
      }
      let scrollStrategy;
      if (selection.isFocusSelectionChanged()) {
        scrollStrategy = focusScrollStrategy(hot);
      } else if (selection.isSelectedByCorner()) {
        scrollStrategy = cornerHeaderScrollStrategy(hot);
      } else if (selection.isSelectedByRowHeader()) {
        scrollStrategy = rowHeaderScrollStrategy(hot);
      } else if (selection.isSelectedByColumnHeader()) {
        scrollStrategy = columnHeaderScrollStrategy(hot);
      } else if (selection.getSelectedRange().size() === 1 && selection.isMultiple()) {
        scrollStrategy = multipleScrollStrategy(hot);
      } else if (selection.getSelectedRange().size() === 1 && !selection.isMultiple()) {
        scrollStrategy = singleScrollStrategy(hot);
      } else if (selection.getSelectedRange().size() > 1) {
        scrollStrategy = noncontiguousScrollStrategy(hot);
      }
      (_scrollStrategy = scrollStrategy) === null || _scrollStrategy === void 0 || _scrollStrategy(cellCoords);
    }
  };
}

// node_modules/handsontable/shortcuts/utils.mjs
var mappings = /* @__PURE__ */ new Map([
  [" ", "space"],
  // custom mapping
  ["spacebar", "space"],
  ["scroll", "scrolllock"],
  ["del", "delete"],
  ["esc", "escape"],
  ["medianexttrack", "mediatracknext"],
  ["mediaprevioustrack", "mediatrackprevious"],
  ["volumeup", "audiovolumeup"],
  ["volumedown", "audiovolumedown"],
  ["volumemute", "audiovolumemute"],
  ["multiply", "*"],
  ["add", "+"],
  ["divide", "/"],
  ["subtract", "-"],
  ["left", "arrowleft"],
  ["right", "arrowright"],
  ["up", "arrowup"],
  ["down", "arrowdown"]
]);
var normalizeKeys = (keys) => {
  return keys.map((key) => {
    const lowercaseKey = key.toLowerCase();
    if (mappings.has(lowercaseKey)) {
      return mappings.get(lowercaseKey);
    }
    return lowercaseKey;
  }).sort().join("+");
};
var getKeysList = (normalizedKeys) => {
  return normalizedKeys.split("+");
};
var codeToKeyRegExp = new RegExp("^(?:Key|Digit)([A-Z0-9])$");
var keyCodeNames = /* @__PURE__ */ new Set(["Backquote", "Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "Semicolon", "Quote", "Comma", "Period", "Slash"]);
var normalizeEventKey = (_ref) => {
  let {
    key,
    code
  } = _ref;
  let normalizedKey = key;
  if (codeToKeyRegExp.test(code)) {
    normalizedKey = code.replace(codeToKeyRegExp, "$1");
  } else if (keyCodeNames.has(code)) {
    normalizedKey = code;
  }
  return normalizedKey.toLowerCase();
};

// node_modules/handsontable/shortcuts/context.mjs
var __kindOf = Symbol("shortcut-context");
function isContextObject(objectToCheck) {
  return isObject(objectToCheck) && objectToCheck.__kindOf === __kindOf;
}
var createContext = (name) => {
  const SHORTCUTS = createUniqueMap({
    errorIdExists: (keys) => `The "${keys}" shortcut is already registered in the "${name}" context.`
  });
  const addShortcut = function() {
    let {
      keys,
      callback,
      group,
      runOnlyIf = () => true,
      captureCtrl = false,
      preventDefault = true,
      stopPropagation = false,
      relativeToGroup,
      position,
      forwardToContext
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (isUndefined(group)) {
      throw new Error("You need to define the shortcut's group.");
    }
    if (isFunction(callback) === false) {
      throw new Error("The shortcut's callback needs to be a function.");
    }
    if (Array.isArray(keys) === false) {
      throw new Error(toSingleLine`Pass the shortcut\'s keys as an array of arrays,\x20
      using the KeyboardEvent.key properties:\x20
      https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values.`);
    }
    const newShortcut = {
      callback,
      group,
      runOnlyIf,
      captureCtrl,
      preventDefault,
      stopPropagation
    };
    if (isDefined(relativeToGroup)) {
      newShortcut.relativeToGroup = relativeToGroup;
      newShortcut.position = position;
    }
    if (isContextObject(forwardToContext)) {
      newShortcut.forwardToContext = forwardToContext;
    }
    keys.forEach((keyCombination) => {
      const normalizedKeys = normalizeKeys(keyCombination);
      const hasKeyCombination = SHORTCUTS.hasItem(normalizedKeys);
      if (hasKeyCombination) {
        const shortcuts = SHORTCUTS.getItem(normalizedKeys);
        let insertionIndex = shortcuts.findIndex((shortcut) => shortcut.group === relativeToGroup);
        if (insertionIndex !== -1) {
          if (position === "before") {
            insertionIndex -= 1;
          } else {
            insertionIndex += 1;
          }
        } else {
          insertionIndex = shortcuts.length;
        }
        shortcuts.splice(insertionIndex, 0, newShortcut);
      } else {
        SHORTCUTS.addItem(normalizedKeys, [newShortcut]);
      }
    });
  };
  const addShortcuts = function(shortcuts) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    shortcuts.forEach((shortcut) => {
      objectEach(options, (value, key) => {
        if (Object.prototype.hasOwnProperty.call(shortcut, key) === false) {
          shortcut[key] = options[key];
        }
      });
      addShortcut(shortcut);
    });
  };
  const removeShortcutsByKeys = (keys) => {
    const normalizedKeys = normalizeKeys(keys);
    SHORTCUTS.removeItem(normalizedKeys);
  };
  const removeShortcutsByGroup = (group) => {
    const shortcuts = SHORTCUTS.getItems();
    shortcuts.forEach((_ref) => {
      let [normalizedKeys, shortcutOptions] = _ref;
      const leftOptions = shortcutOptions.filter((option) => option.group !== group);
      if (leftOptions.length === 0) {
        removeShortcutsByKeys(getKeysList(normalizedKeys));
      } else {
        shortcutOptions.length = 0;
        shortcutOptions.push(...leftOptions);
      }
    });
  };
  const getShortcuts = (keys) => {
    const normalizedKeys = normalizeKeys(keys);
    const shortcuts = SHORTCUTS.getItem(normalizedKeys);
    return isDefined(shortcuts) ? shortcuts.slice() : [];
  };
  const hasShortcut = (keys) => {
    const normalizedKeys = normalizeKeys(keys);
    return SHORTCUTS.hasItem(normalizedKeys);
  };
  return {
    __kindOf,
    addShortcut,
    addShortcuts,
    getShortcuts,
    hasShortcut,
    removeShortcutsByKeys,
    removeShortcutsByGroup
  };
};

// node_modules/handsontable/shortcuts/keyObserver.mjs
function createKeysObserver() {
  const PRESSED_KEYS = /* @__PURE__ */ new Set();
  return {
    /**
     * Press a key.
     *
     * @param {string} key Names of the shortcut's keys,
     * (coming from [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)),
     * in lowercase or uppercase, unified across browsers
     */
    press(key) {
      PRESSED_KEYS.add(key);
    },
    /**
     * Release a pressed key.
     *
     * @param {string} key Names of the shortcut's keys,
     * (coming from [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)),
     * in lowercase or uppercase, unified across browsers
     */
    release(key) {
      PRESSED_KEYS.delete(key);
    },
    /**
     * Release all pressed keys.
     */
    releaseAll() {
      PRESSED_KEYS.clear();
    },
    /**
     * Check if a key is pressed.
     *
     * @param {string} key Names of the shortcut's keys,
     * (coming from [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)),
     * in lowercase or uppercase, unified across browsers
     * @returns {boolean}
     */
    isPressed(key) {
      return PRESSED_KEYS.has(key);
    }
  };
}

// node_modules/handsontable/shortcuts/recorder.mjs
var MODIFIER_KEYS = ["meta", "alt", "shift", "control"];
var modifierKeysObserver = createKeysObserver();
var modKeyListeners = [];
var instanceCounter = 0;
function useRecorder(ownerWindow, handleEvent, beforeKeyDown, afterKeyDown, callback) {
  const isModifierKey = (pressedKey) => {
    return MODIFIER_KEYS.includes(pressedKey);
  };
  const getPressedModifierKeys = function(event) {
    let mergeMetaKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const pressedModifierKeys = [];
    if (event.altKey) {
      pressedModifierKeys.push("alt");
    }
    if (mergeMetaKeys && (event.ctrlKey || event.metaKey)) {
      pressedModifierKeys.push("control/meta");
    } else {
      if (event.ctrlKey) {
        pressedModifierKeys.push("control");
      }
      if (event.metaKey) {
        pressedModifierKeys.push("meta");
      }
    }
    if (event.shiftKey) {
      pressedModifierKeys.push("shift");
    }
    return pressedModifierKeys;
  };
  const onkeydown = (event) => {
    if (handleEvent(event) === false) {
      return;
    }
    const result = beforeKeyDown(event);
    if (event.keyCode === 229 || result === false || isImmediatePropagationStopped(event)) {
      return;
    }
    const pressedKey = normalizeEventKey(event);
    let extraModifierKeys = [];
    if (!isModifierKey(pressedKey)) {
      extraModifierKeys = getPressedModifierKeys(event);
    }
    const pressedKeys = [pressedKey].concat(extraModifierKeys);
    const isExecutionCancelled = callback(event, pressedKeys);
    if (!isExecutionCancelled && (isMacOS() && extraModifierKeys.includes("meta") || !isMacOS() && extraModifierKeys.includes("control"))) {
      callback(event, [pressedKey].concat(getPressedModifierKeys(event, true)));
    }
    afterKeyDown(event);
  };
  const onkeydownForModKeys = (event) => {
    if (event.key) {
      const pressedKey = normalizeEventKey(event);
      if (isModifierKey(pressedKey)) {
        modifierKeysObserver.press(pressedKey);
      }
    }
  };
  const onkeyupForModKeys = (event) => {
    if (event.key) {
      const pressedKey = normalizeEventKey(event);
      if (isModifierKey(pressedKey)) {
        modifierKeysObserver.release(pressedKey);
      }
    }
  };
  const onblur = () => {
    modifierKeysObserver.releaseAll();
  };
  const mount = () => {
    let eventTarget = ownerWindow;
    instanceCounter += 1;
    while (eventTarget) {
      if (instanceCounter === 1) {
        eventTarget.document.documentElement.addEventListener("keydown", onkeydownForModKeys);
        modKeyListeners.push({
          event: "keydown",
          listener: onkeydownForModKeys
        });
        eventTarget.document.documentElement.addEventListener("keyup", onkeyupForModKeys);
        modKeyListeners.push({
          event: "keyup",
          listener: onkeyupForModKeys
        });
      }
      eventTarget.document.documentElement.addEventListener("keydown", onkeydown);
      eventTarget.document.documentElement.addEventListener("blur", onblur);
      eventTarget = getParentWindow(eventTarget);
    }
  };
  const unmount = () => {
    let eventTarget = ownerWindow;
    instanceCounter -= 1;
    while (eventTarget) {
      if (instanceCounter === 0) {
        for (let i = 0; i < modKeyListeners.length; i++) {
          const {
            event,
            listener
          } = modKeyListeners[i];
          eventTarget.document.documentElement.removeEventListener(event, listener);
        }
        modKeyListeners.length = 0;
      }
      eventTarget.document.documentElement.removeEventListener("keydown", onkeydown);
      eventTarget.document.documentElement.removeEventListener("blur", onblur);
      eventTarget = getParentWindow(eventTarget);
    }
  };
  return {
    mount,
    unmount,
    isPressed: (key) => modifierKeysObserver.isPressed(key),
    releasePressedKeys: () => modifierKeysObserver.releaseAll()
  };
}

// node_modules/handsontable/shortcuts/manager.mjs
var createShortcutManager = (_ref) => {
  let {
    ownerWindow,
    handleEvent,
    beforeKeyDown,
    afterKeyDown
  } = _ref;
  const CONTEXTS = createUniqueMap({
    errorIdExists: (keys) => `The "${keys}" context name is already registered.`
  });
  let activeContextName = "grid";
  const addContext = (contextName) => {
    const context = createContext(contextName);
    CONTEXTS.addItem(contextName, context);
    return context;
  };
  const getActiveContextName = () => {
    return activeContextName;
  };
  const getContext = (contextName) => {
    return CONTEXTS.getItem(contextName);
  };
  const setActiveContextName = (contextName) => {
    if (!CONTEXTS.hasItem(contextName)) {
      throw new Error(toSingleLine`You've tried to activate the "${contextName}" shortcut context\x20
        that does not exist. Before activation, register the context using the "addContext" method.`);
    }
    activeContextName = contextName;
  };
  let isCtrlKeySilenced = false;
  const recorderCallback = function(event, keys) {
    let context = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : getActiveContextName();
    const activeContext = isContextObject(context) ? context : getContext(context);
    let isExecutionCancelled = false;
    if (!activeContext.hasShortcut(keys)) {
      return isExecutionCancelled;
    }
    const shortcuts = activeContext.getShortcuts(keys);
    for (let index = 0; index < shortcuts.length; index++) {
      const {
        callback,
        runOnlyIf,
        preventDefault,
        stopPropagation,
        captureCtrl,
        forwardToContext
      } = shortcuts[index];
      if (runOnlyIf(event) === true) {
        isCtrlKeySilenced = captureCtrl;
        isExecutionCancelled = callback(event, keys) === false;
        isCtrlKeySilenced = false;
        if (preventDefault) {
          event.preventDefault();
        }
        if (stopPropagation) {
          stopImmediatePropagation(event);
          event.stopPropagation();
        }
        if (isExecutionCancelled) {
          break;
        }
        if (forwardToContext) {
          recorderCallback(event, keys, forwardToContext);
        }
      }
    }
    return isExecutionCancelled;
  };
  const keyRecorder = useRecorder(ownerWindow, handleEvent, beforeKeyDown, afterKeyDown, recorderCallback);
  keyRecorder.mount();
  return {
    addContext,
    getActiveContextName,
    getContext,
    setActiveContextName,
    /**
     * Returns whether `control` or `meta` keys are pressed.
     *
     * @memberof ShortcutManager#
     * @type {Function}
     * @returns {boolean}
     */
    isCtrlPressed: () => !isCtrlKeySilenced && (keyRecorder.isPressed("control") || keyRecorder.isPressed("meta")),
    /**
     * Release every previously pressed key.
     *
     * @type {Function}
     * @memberof ShortcutManager#
     */
    releasePressedKeys: () => keyRecorder.releasePressedKeys(),
    /**
     * Destroy a context manager instance.
     *
     * @type {Function}
     * @memberof ShortcutManager#
     */
    destroy: () => keyRecorder.unmount()
  };
};

// node_modules/handsontable/core.mjs
var activeGuid = null;
var foreignHotInstances = /* @__PURE__ */ new Map();
function Core(rootElement, userSettings) {
  var _userSettings$layoutD, _this = this;
  let rootInstanceSymbol2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  let instance = this;
  const eventManager = new eventManager_default(instance);
  let datamap;
  let dataSource;
  let grid;
  let editorManager;
  let focusManager;
  let viewportScroller;
  let firstRun = true;
  if (hasValidParameter(rootInstanceSymbol2)) {
    registerAsRootInstance(this);
  }
  this.rootElement = rootElement;
  this.rootDocument = rootElement.ownerDocument;
  this.rootWindow = this.rootDocument.defaultView;
  this.isDestroyed = false;
  this.renderSuspendedCounter = 0;
  this.executionSuspendedCounter = 0;
  const layoutDirection = (_userSettings$layoutD = userSettings === null || userSettings === void 0 ? void 0 : userSettings.layoutDirection) !== null && _userSettings$layoutD !== void 0 ? _userSettings$layoutD : "inherit";
  const rootElementDirection = ["rtl", "ltr"].includes(layoutDirection) ? layoutDirection : this.rootWindow.getComputedStyle(this.rootElement).direction;
  this.rootElement.setAttribute("dir", rootElementDirection);
  this.isRtl = function() {
    return rootElementDirection === "rtl";
  };
  this.isLtr = function() {
    return !instance.isRtl();
  };
  this.getDirectionFactor = function() {
    return instance.isLtr() ? 1 : -1;
  };
  userSettings.language = getValidLanguageCode(userSettings.language);
  const metaManager = new MetaManager(instance, userSettings, [DynamicCellMetaMod, ExtendMetaPropertiesMod]);
  const tableMeta = metaManager.getTableMeta();
  const globalMeta = metaManager.getGlobalMeta();
  const pluginsRegistry = createUniqueMap();
  this.container = this.rootDocument.createElement("div");
  this.renderCall = false;
  rootElement.insertBefore(this.container, rootElement.firstChild);
  if (isRootInstance(this)) {
    _injectProductInfo(userSettings.licenseKey, rootElement);
  }
  this.guid = `ht_${randomString()}`;
  foreignHotInstances.set(this.guid, this);
  this.columnIndexMapper = new IndexMapper();
  this.rowIndexMapper = new IndexMapper();
  this.columnIndexMapper.addLocalHook("indexesSequenceChange", (source) => {
    instance.runHooks("afterColumnSequenceChange", source);
  });
  this.rowIndexMapper.addLocalHook("indexesSequenceChange", (source) => {
    instance.runHooks("afterRowSequenceChange", source);
  });
  dataSource = new dataSource_default(instance);
  if (!this.rootElement.id || this.rootElement.id.substring(0, 3) === "ht_") {
    this.rootElement.id = this.guid;
  }
  const visualToRenderableCoords = (coords) => {
    const {
      row: visualRow,
      col: visualColumn
    } = coords;
    return instance._createCellCoords(
      // We just store indexes for rows and columns without headers.
      visualRow >= 0 ? instance.rowIndexMapper.getRenderableFromVisualIndex(visualRow) : visualRow,
      visualColumn >= 0 ? instance.columnIndexMapper.getRenderableFromVisualIndex(visualColumn) : visualColumn
    );
  };
  const renderableToVisualCoords = (coords) => {
    const {
      row: renderableRow,
      col: renderableColumn
    } = coords;
    return instance._createCellCoords(
      // We just store indexes for rows and columns without headers.
      renderableRow >= 0 ? instance.rowIndexMapper.getVisualFromRenderableIndex(renderableRow) : renderableRow,
      renderableColumn >= 0 ? instance.columnIndexMapper.getVisualFromRenderableIndex(renderableColumn) : renderableColumn
      // eslint-disable-line max-len
    );
  };
  const findFirstNonHiddenRenderableRow = (visualRowFrom, visualRowTo) => {
    const dir = visualRowTo > visualRowFrom ? 1 : -1;
    const minIndex = Math.min(visualRowFrom, visualRowTo);
    const maxIndex = Math.max(visualRowFrom, visualRowTo);
    const rowIndex = instance.rowIndexMapper.getNearestNotHiddenIndex(visualRowFrom, dir);
    if (rowIndex === null || dir === 1 && rowIndex > maxIndex || dir === -1 && rowIndex < minIndex) {
      return null;
    }
    return rowIndex >= 0 ? instance.rowIndexMapper.getRenderableFromVisualIndex(rowIndex) : rowIndex;
  };
  const findFirstNonHiddenRenderableColumn = (visualColumnFrom, visualColumnTo) => {
    const dir = visualColumnTo > visualColumnFrom ? 1 : -1;
    const minIndex = Math.min(visualColumnFrom, visualColumnTo);
    const maxIndex = Math.max(visualColumnFrom, visualColumnTo);
    const columnIndex = instance.columnIndexMapper.getNearestNotHiddenIndex(visualColumnFrom, dir);
    if (columnIndex === null || dir === 1 && columnIndex > maxIndex || dir === -1 && columnIndex < minIndex) {
      return null;
    }
    return columnIndex >= 0 ? instance.columnIndexMapper.getRenderableFromVisualIndex(columnIndex) : columnIndex;
  };
  let selection = new selection_default(tableMeta, {
    rowIndexMapper: instance.rowIndexMapper,
    columnIndexMapper: instance.columnIndexMapper,
    countCols: () => instance.countCols(),
    countRows: () => instance.countRows(),
    propToCol: (prop) => datamap.propToCol(prop),
    isEditorOpened: () => instance.getActiveEditor() ? instance.getActiveEditor().isOpened() : false,
    countRenderableColumns: () => this.view.countRenderableColumns(),
    countRenderableRows: () => this.view.countRenderableRows(),
    countRowHeaders: () => this.countRowHeaders(),
    countColHeaders: () => this.countColHeaders(),
    countRenderableRowsInRange: function() {
      return _this.view.countRenderableRowsInRange(...arguments);
    },
    countRenderableColumnsInRange: function() {
      return _this.view.countRenderableColumnsInRange(...arguments);
    },
    getShortcutManager: () => instance.getShortcutManager(),
    createCellCoords: (row, column) => instance._createCellCoords(row, column),
    createCellRange: (highlight, from, to) => instance._createCellRange(highlight, from, to),
    visualToRenderableCoords,
    renderableToVisualCoords,
    findFirstNonHiddenRenderableRow,
    findFirstNonHiddenRenderableColumn,
    isDisabledCellSelection: (visualRow, visualColumn) => {
      if (visualRow < 0 || visualColumn < 0) {
        return instance.getSettings().disableVisualSelection;
      }
      return instance.getCellMeta(visualRow, visualColumn).disableVisualSelection;
    }
  });
  this.selection = selection;
  const onIndexMapperCacheUpdate = (_ref) => {
    let {
      hiddenIndexesChanged
    } = _ref;
    if (hiddenIndexesChanged) {
      this.selection.commit();
    }
  };
  this.columnIndexMapper.addLocalHook("cacheUpdated", onIndexMapperCacheUpdate);
  this.rowIndexMapper.addLocalHook("cacheUpdated", onIndexMapperCacheUpdate);
  this.selection.addLocalHook("afterSetRangeEnd", (cellCoords, isLastSelectionLayer) => {
    const preventScrolling = createObjectPropListener(false);
    const selectionRange = this.selection.getSelectedRange();
    const {
      from,
      to
    } = selectionRange.current();
    const selectionLayerLevel = selectionRange.size() - 1;
    this.runHooks("afterSelection", from.row, from.col, to.row, to.col, preventScrolling, selectionLayerLevel);
    this.runHooks("afterSelectionByProp", from.row, instance.colToProp(from.col), to.row, instance.colToProp(to.col), preventScrolling, selectionLayerLevel);
    if (isLastSelectionLayer && (!preventScrolling.isTouched() || preventScrolling.isTouched() && !preventScrolling.value)) {
      viewportScroller.scrollTo(cellCoords);
    }
    const isSelectedByRowHeader = selection.isSelectedByRowHeader();
    const isSelectedByColumnHeader = selection.isSelectedByColumnHeader();
    if (isSelectedByRowHeader && isSelectedByColumnHeader) {
      addClass(this.rootElement, ["ht__selection--rows", "ht__selection--columns"]);
    } else if (isSelectedByRowHeader) {
      removeClass(this.rootElement, "ht__selection--columns");
      addClass(this.rootElement, "ht__selection--rows");
    } else if (isSelectedByColumnHeader) {
      removeClass(this.rootElement, "ht__selection--rows");
      addClass(this.rootElement, "ht__selection--columns");
    } else {
      removeClass(this.rootElement, ["ht__selection--rows", "ht__selection--columns"]);
    }
    if (selection.getSelectionSource() !== "shift") {
      editorManager.closeEditor(null);
    }
    instance.view.render();
    editorManager.prepareEditor();
  });
  this.selection.addLocalHook("beforeSetFocus", (cellCoords) => {
    this.runHooks("beforeSelectionFocusSet", cellCoords.row, cellCoords.col);
  });
  this.selection.addLocalHook("afterSetFocus", (cellCoords) => {
    const preventScrolling = createObjectPropListener(false);
    this.runHooks("afterSelectionFocusSet", cellCoords.row, cellCoords.col, preventScrolling);
    if (!preventScrolling.isTouched() || preventScrolling.isTouched() && !preventScrolling.value) {
      viewportScroller.scrollTo(cellCoords);
    }
    editorManager.closeEditor();
    instance.view.render();
    editorManager.prepareEditor();
  });
  this.selection.addLocalHook("afterSelectionFinished", (cellRanges) => {
    const selectionLayerLevel = cellRanges.length - 1;
    const {
      from,
      to
    } = cellRanges[selectionLayerLevel];
    this.runHooks("afterSelectionEnd", from.row, from.col, to.row, to.col, selectionLayerLevel);
    this.runHooks("afterSelectionEndByProp", from.row, instance.colToProp(from.col), to.row, instance.colToProp(to.col), selectionLayerLevel);
  });
  this.selection.addLocalHook("afterIsMultipleSelection", (isMultiple) => {
    const changedIsMultiple = this.runHooks("afterIsMultipleSelection", isMultiple.value);
    if (isMultiple.value) {
      isMultiple.value = changedIsMultiple;
    }
  });
  this.selection.addLocalHook("afterDeselect", () => {
    editorManager.closeEditor();
    instance.view.render();
    removeClass(this.rootElement, ["ht__selection--rows", "ht__selection--columns"]);
    this.runHooks("afterDeselect");
  });
  this.selection.addLocalHook("beforeHighlightSet", () => this.runHooks("beforeSelectionHighlightSet")).addLocalHook("beforeSetRangeStart", function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _this.runHooks("beforeSetRangeStart", ...args);
  }).addLocalHook("beforeSetRangeStartOnly", function() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return _this.runHooks("beforeSetRangeStartOnly", ...args);
  }).addLocalHook("beforeSetRangeEnd", function() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return _this.runHooks("beforeSetRangeEnd", ...args);
  }).addLocalHook("beforeSelectColumns", function() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return _this.runHooks("beforeSelectColumns", ...args);
  }).addLocalHook("afterSelectColumns", function() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }
    return _this.runHooks("afterSelectColumns", ...args);
  }).addLocalHook("beforeSelectRows", function() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }
    return _this.runHooks("beforeSelectRows", ...args);
  }).addLocalHook("afterSelectRows", function() {
    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }
    return _this.runHooks("afterSelectRows", ...args);
  }).addLocalHook("beforeModifyTransformStart", function() {
    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }
    return _this.runHooks("modifyTransformStart", ...args);
  }).addLocalHook("afterModifyTransformStart", function() {
    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }
    return _this.runHooks("afterModifyTransformStart", ...args);
  }).addLocalHook("beforeModifyTransformFocus", function() {
    for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      args[_key10] = arguments[_key10];
    }
    return _this.runHooks("modifyTransformFocus", ...args);
  }).addLocalHook("afterModifyTransformFocus", function() {
    for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
      args[_key11] = arguments[_key11];
    }
    return _this.runHooks("afterModifyTransformFocus", ...args);
  }).addLocalHook("beforeModifyTransformEnd", function() {
    for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
      args[_key12] = arguments[_key12];
    }
    return _this.runHooks("modifyTransformEnd", ...args);
  }).addLocalHook("afterModifyTransformEnd", function() {
    for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
      args[_key13] = arguments[_key13];
    }
    return _this.runHooks("afterModifyTransformEnd", ...args);
  }).addLocalHook("beforeRowWrap", function() {
    for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
      args[_key14] = arguments[_key14];
    }
    return _this.runHooks("beforeRowWrap", ...args);
  }).addLocalHook("beforeColumnWrap", function() {
    for (var _len15 = arguments.length, args = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
      args[_key15] = arguments[_key15];
    }
    return _this.runHooks("beforeColumnWrap", ...args);
  }).addLocalHook("insertRowRequire", (totalRows) => this.alter("insert_row_above", totalRows, 1, "auto")).addLocalHook("insertColRequire", (totalCols) => this.alter("insert_col_start", totalCols, 1, "auto"));
  grid = {
    /**
     * Inserts or removes rows and columns.
     *
     * @private
     * @param {string} action Possible values: "insert_row_above", "insert_row_below", "insert_col_start", "insert_col_end",
     *                        "remove_row", "remove_col".
     * @param {number|Array} index Row or column visual index which from the alter action will be triggered.
     *                             Alter actions such as "remove_row" and "remove_col" support array indexes in the
     *                             format `[[index, amount], [index, amount]...]` this can be used to remove
     *                             non-consecutive columns or rows in one call.
     * @param {number} [amount=1] Amount of rows or columns to remove.
     * @param {string} [source] Optional. Source of hook runner.
     * @param {boolean} [keepEmptyRows] Optional. Flag for preventing deletion of empty rows.
     */
    alter(action, index) {
      var _index, _index2;
      let amount = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
      let source = arguments.length > 3 ? arguments[3] : void 0;
      let keepEmptyRows = arguments.length > 4 ? arguments[4] : void 0;
      const normalizeIndexesGroup = (indexes) => {
        if (indexes.length === 0) {
          return [];
        }
        const sortedIndexes = [...indexes];
        sortedIndexes.sort((_ref2, _ref3) => {
          let [indexA] = _ref2;
          let [indexB] = _ref3;
          if (indexA === indexB) {
            return 0;
          }
          return indexA > indexB ? 1 : -1;
        });
        const normalizedIndexes = arrayReduce(sortedIndexes, (acc, _ref4) => {
          let [groupIndex, groupAmount] = _ref4;
          const previousItem = acc[acc.length - 1];
          const [prevIndex, prevAmount] = previousItem;
          const prevLastIndex = prevIndex + prevAmount;
          if (groupIndex <= prevLastIndex) {
            const amountToAdd = Math.max(groupAmount - (prevLastIndex - groupIndex), 0);
            previousItem[1] += amountToAdd;
          } else {
            acc.push([groupIndex, groupAmount]);
          }
          return acc;
        }, [sortedIndexes[0]]);
        return normalizedIndexes;
      };
      switch (action) {
        case "insert_row_below":
        case "insert_row_above":
          const numberOfSourceRows = instance.countSourceRows();
          if (tableMeta.maxRows === numberOfSourceRows) {
            return;
          }
          const insertRowMode = action === "insert_row_below" ? "below" : "above";
          index = (_index = index) !== null && _index !== void 0 ? _index : insertRowMode === "below" ? numberOfSourceRows : 0;
          const {
            delta: rowDelta,
            startPhysicalIndex: startRowPhysicalIndex
          } = datamap.createRow(index, amount, {
            source,
            mode: insertRowMode
          });
          selection.shiftRows(instance.toVisualRow(startRowPhysicalIndex), rowDelta);
          break;
        case "insert_col_start":
        case "insert_col_end":
          const insertColumnMode = action === "insert_col_end" ? "end" : "start";
          index = (_index2 = index) !== null && _index2 !== void 0 ? _index2 : insertColumnMode === "end" ? instance.countSourceCols() : 0;
          const {
            delta: colDelta,
            startPhysicalIndex: startColumnPhysicalIndex
          } = datamap.createCol(index, amount, {
            source,
            mode: insertColumnMode
          });
          if (colDelta) {
            if (Array.isArray(tableMeta.colHeaders)) {
              const spliceArray = [instance.toVisualColumn(startColumnPhysicalIndex), 0];
              spliceArray.length += colDelta;
              Array.prototype.splice.apply(tableMeta.colHeaders, spliceArray);
            }
            selection.shiftColumns(instance.toVisualColumn(startColumnPhysicalIndex), colDelta);
          }
          break;
        case "remove_row":
          const removeRow = (indexes) => {
            let offset = 0;
            arrayEach(indexes, (_ref5) => {
              let [groupIndex, groupAmount] = _ref5;
              const calcIndex = isEmpty(groupIndex) ? instance.countRows() - 1 : Math.max(groupIndex - offset, 0);
              if (Number.isInteger(groupIndex)) {
                groupIndex = Math.max(groupIndex - offset, 0);
              }
              const wasRemoved = datamap.removeRow(groupIndex, groupAmount, source);
              if (!wasRemoved) {
                return;
              }
              if (selection.isSelected()) {
                const {
                  row
                } = instance.getSelectedRangeLast().highlight;
                if (row >= groupIndex && row <= groupIndex + groupAmount - 1) {
                  editorManager.closeEditor(true);
                }
              }
              const totalRows = instance.countRows();
              if (totalRows === 0) {
                selection.deselect();
              } else if (source === "ContextMenu.removeRow") {
                selection.refresh();
              } else {
                selection.shiftRows(groupIndex, -groupAmount);
              }
              const fixedRowsTop = tableMeta.fixedRowsTop;
              if (fixedRowsTop >= calcIndex + 1) {
                tableMeta.fixedRowsTop -= Math.min(groupAmount, fixedRowsTop - calcIndex);
              }
              const fixedRowsBottom = tableMeta.fixedRowsBottom;
              if (fixedRowsBottom && calcIndex >= totalRows - fixedRowsBottom) {
                tableMeta.fixedRowsBottom -= Math.min(groupAmount, fixedRowsBottom);
              }
              offset += groupAmount;
            });
          };
          if (Array.isArray(index)) {
            removeRow(normalizeIndexesGroup(index));
          } else {
            removeRow([[index, amount]]);
          }
          break;
        case "remove_col":
          const removeCol = (indexes) => {
            let offset = 0;
            arrayEach(indexes, (_ref6) => {
              let [groupIndex, groupAmount] = _ref6;
              const calcIndex = isEmpty(groupIndex) ? instance.countCols() - 1 : Math.max(groupIndex - offset, 0);
              let physicalColumnIndex = instance.toPhysicalColumn(calcIndex);
              if (Number.isInteger(groupIndex)) {
                groupIndex = Math.max(groupIndex - offset, 0);
              }
              const wasRemoved = datamap.removeCol(groupIndex, groupAmount, source);
              if (!wasRemoved) {
                return;
              }
              if (selection.isSelected()) {
                const {
                  col
                } = instance.getSelectedRangeLast().highlight;
                if (col >= groupIndex && col <= groupIndex + groupAmount - 1) {
                  editorManager.closeEditor(true);
                }
              }
              const totalColumns = instance.countCols();
              if (totalColumns === 0) {
                selection.deselect();
              } else if (source === "ContextMenu.removeColumn") {
                selection.refresh();
              } else {
                selection.shiftColumns(groupIndex, -groupAmount);
              }
              const fixedColumnsStart = tableMeta.fixedColumnsStart;
              if (fixedColumnsStart >= calcIndex + 1) {
                tableMeta.fixedColumnsStart -= Math.min(groupAmount, fixedColumnsStart - calcIndex);
              }
              if (Array.isArray(tableMeta.colHeaders)) {
                if (typeof physicalColumnIndex === "undefined") {
                  physicalColumnIndex = -1;
                }
                tableMeta.colHeaders.splice(physicalColumnIndex, groupAmount);
              }
              offset += groupAmount;
            });
          };
          if (Array.isArray(index)) {
            removeCol(normalizeIndexesGroup(index));
          } else {
            removeCol([[index, amount]]);
          }
          break;
        default:
          throw new Error(`There is no such action "${action}"`);
      }
      instance.view.render();
      if (!keepEmptyRows) {
        grid.adjustRowsAndCols();
      }
    },
    /**
     * Makes sure there are empty rows at the bottom of the table.
     *
     * @private
     */
    adjustRowsAndCols() {
      const minRows = tableMeta.minRows;
      const minSpareRows = tableMeta.minSpareRows;
      const minCols = tableMeta.minCols;
      const minSpareCols = tableMeta.minSpareCols;
      if (minRows) {
        const nrOfRows = instance.countRows();
        if (nrOfRows < minRows) {
          datamap.createRow(nrOfRows, minRows - nrOfRows, {
            source: "auto"
          });
        }
      }
      if (minSpareRows) {
        const emptyRows = instance.countEmptyRows(true);
        if (emptyRows < minSpareRows) {
          const emptyRowsMissing = minSpareRows - emptyRows;
          const rowsToCreate = Math.min(emptyRowsMissing, tableMeta.maxRows - instance.countSourceRows());
          datamap.createRow(instance.countRows(), rowsToCreate, {
            source: "auto"
          });
        }
      }
      {
        let emptyCols;
        if (minCols || minSpareCols) {
          emptyCols = instance.countEmptyCols(true);
        }
        let nrOfColumns = instance.countCols();
        if (minCols && !tableMeta.columns && nrOfColumns < minCols) {
          const colsToCreate = minCols - nrOfColumns;
          emptyCols += colsToCreate;
          datamap.createCol(nrOfColumns, colsToCreate, {
            source: "auto"
          });
        }
        if (minSpareCols && !tableMeta.columns && instance.dataType === "array" && emptyCols < minSpareCols) {
          nrOfColumns = instance.countCols();
          const emptyColsMissing = minSpareCols - emptyCols;
          const colsToCreate = Math.min(emptyColsMissing, tableMeta.maxCols - nrOfColumns);
          datamap.createCol(nrOfColumns, colsToCreate, {
            source: "auto"
          });
        }
      }
      if (instance.view) {
        instance.view.adjustElementsSize();
      }
    },
    /**
     * Populate the data from the provided 2d array from the given cell coordinates.
     *
     * @private
     * @param {object} start Start selection position. Visual indexes.
     * @param {Array} input 2d data array.
     * @param {object} [end] End selection position (only for drag-down mode). Visual indexes.
     * @param {string} [source="populateFromArray"] Source information string.
     * @param {string} [method="overwrite"] Populate method. Possible options: `shift_down`, `shift_right`, `overwrite`.
     * @returns {object|undefined} Ending td in pasted area (only if any cell was changed).
     */
    populateFromArray(start, input, end, source, method) {
      let r;
      let rlen;
      let c;
      let clen;
      const setData = [];
      const current = {};
      const newDataByColumns = [];
      const startRow = start.row;
      const startColumn = start.col;
      rlen = input.length;
      if (rlen === 0) {
        return false;
      }
      let columnsPopulationEnd = 0;
      let rowsPopulationEnd = 0;
      if (isObject(end)) {
        columnsPopulationEnd = end.col - startColumn + 1;
        rowsPopulationEnd = end.row - startRow + 1;
      }
      switch (method) {
        case "shift_down":
          const populatedDataByColumns = pivot(input);
          const numberOfDataColumns = populatedDataByColumns.length;
          const numberOfColumnsToPopulate = Math.max(numberOfDataColumns, columnsPopulationEnd);
          const pushedDownDataByRows = instance.getData().slice(startRow);
          const pushedDownDataByColumns = pivot(pushedDownDataByRows).slice(startColumn, startColumn + numberOfColumnsToPopulate);
          for (c = 0; c < numberOfColumnsToPopulate; c += 1) {
            if (c < numberOfDataColumns) {
              for (r = 0, rlen = populatedDataByColumns[c].length; r < rowsPopulationEnd - rlen; r += 1) {
                populatedDataByColumns[c].push(populatedDataByColumns[c][r % rlen]);
              }
              if (c < pushedDownDataByColumns.length) {
                newDataByColumns.push(populatedDataByColumns[c].concat(pushedDownDataByColumns[c]));
              } else {
                newDataByColumns.push(populatedDataByColumns[c].concat(new Array(pushedDownDataByRows.length).fill(null)));
              }
            } else {
              newDataByColumns.push(populatedDataByColumns[c % numberOfDataColumns].concat(pushedDownDataByColumns[c]));
            }
          }
          instance.populateFromArray(startRow, startColumn, pivot(newDataByColumns));
          break;
        case "shift_right":
          const numberOfDataRows = input.length;
          const numberOfRowsToPopulate = Math.max(numberOfDataRows, rowsPopulationEnd);
          const pushedRightDataByRows = instance.getData().slice(startRow).map((rowData) => rowData.slice(startColumn));
          for (r = 0; r < numberOfRowsToPopulate; r += 1) {
            if (r < numberOfDataRows) {
              for (c = 0, clen = input[r].length; c < columnsPopulationEnd - clen; c += 1) {
                input[r].push(input[r][c % clen]);
              }
              if (r < pushedRightDataByRows.length) {
                for (let i = 0; i < pushedRightDataByRows[r].length; i += 1) {
                  input[r].push(pushedRightDataByRows[r][i]);
                }
              } else {
                input[r].push(...new Array(pushedRightDataByRows[0].length).fill(null));
              }
            } else {
              input.push(input[r % rlen].slice(0, numberOfRowsToPopulate).concat(pushedRightDataByRows[r]));
            }
          }
          instance.populateFromArray(startRow, startColumn, input);
          break;
        case "overwrite":
        default:
          current.row = start.row;
          current.col = start.col;
          let skippedRow = 0;
          let skippedColumn = 0;
          let pushData = true;
          let cellMeta;
          const getInputValue = function getInputValue2(row) {
            let col = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
            const rowValue = input[row % input.length];
            if (col !== null) {
              return rowValue[col % rowValue.length];
            }
            return rowValue;
          };
          const rowInputLength = input.length;
          const rowSelectionLength = end ? end.row - start.row + 1 : 0;
          if (end) {
            rlen = rowSelectionLength;
          } else {
            rlen = Math.max(rowInputLength, rowSelectionLength);
          }
          for (r = 0; r < rlen; r++) {
            if (end && current.row > end.row && rowSelectionLength > rowInputLength || !tableMeta.allowInsertRow && current.row > instance.countRows() - 1 || current.row >= tableMeta.maxRows) {
              break;
            }
            const visualRow = r - skippedRow;
            const colInputLength = getInputValue(visualRow).length;
            const colSelectionLength = end ? end.col - start.col + 1 : 0;
            if (end) {
              clen = colSelectionLength;
            } else {
              clen = Math.max(colInputLength, colSelectionLength);
            }
            current.col = start.col;
            cellMeta = instance.getCellMeta(current.row, current.col);
            if ((source === "CopyPaste.paste" || source === "Autofill.fill") && cellMeta.skipRowOnPaste) {
              skippedRow += 1;
              current.row += 1;
              rlen += 1;
              continue;
            }
            skippedColumn = 0;
            for (c = 0; c < clen; c++) {
              if (end && current.col > end.col && colSelectionLength > colInputLength || !tableMeta.allowInsertColumn && current.col > instance.countCols() - 1 || current.col >= tableMeta.maxCols) {
                break;
              }
              cellMeta = instance.getCellMeta(current.row, current.col);
              if ((source === "CopyPaste.paste" || source === "Autofill.fill") && cellMeta.skipColumnOnPaste) {
                skippedColumn += 1;
                current.col += 1;
                clen += 1;
                continue;
              }
              if (cellMeta.readOnly && source !== "UndoRedo.undo") {
                current.col += 1;
                continue;
              }
              const visualColumn = c - skippedColumn;
              let value = getInputValue(visualRow, visualColumn);
              let orgValue = instance.getDataAtCell(current.row, current.col);
              if (value !== null && typeof value === "object") {
                if (Array.isArray(value) && orgValue === null)
                  orgValue = [];
                if (orgValue === null || typeof orgValue !== "object") {
                  pushData = false;
                } else {
                  const orgValueSchema = duckSchema(Array.isArray(orgValue) ? orgValue : orgValue[0] || orgValue);
                  const valueSchema = duckSchema(Array.isArray(value) ? value : value[0] || value);
                  if (isObjectEqual(orgValueSchema, valueSchema) || Array.isArray(orgValueSchema) && Array.isArray(valueSchema)) {
                    value = deepClone(value);
                  } else {
                    pushData = false;
                  }
                }
              } else if (orgValue !== null && typeof orgValue === "object") {
                pushData = false;
              }
              if (pushData) {
                setData.push([current.row, current.col, value]);
              }
              pushData = true;
              current.col += 1;
            }
            current.row += 1;
          }
          instance.setDataAtCell(setData, null, null, source || "populateFromArray");
          break;
      }
    }
  };
  function setLanguage(languageCode) {
    const normalizedLanguageCode = normalizeLanguageCode(languageCode);
    if (hasLanguageDictionary(normalizedLanguageCode)) {
      instance.runHooks("beforeLanguageChange", normalizedLanguageCode);
      globalMeta.language = normalizedLanguageCode;
      instance.runHooks("afterLanguageChange", normalizedLanguageCode);
    } else {
      warnUserAboutLanguageRegistration(languageCode);
    }
  }
  function setClassName(className, classSettings) {
    const element = className === "className" ? instance.rootElement : instance.table;
    if (firstRun) {
      addClass(element, classSettings);
    } else {
      let globalMetaSettingsArray = [];
      let settingsArray = [];
      if (globalMeta[className]) {
        globalMetaSettingsArray = Array.isArray(globalMeta[className]) ? globalMeta[className] : stringToArray(globalMeta[className]);
      }
      if (classSettings) {
        settingsArray = Array.isArray(classSettings) ? classSettings : stringToArray(classSettings);
      }
      const classNameToRemove = getDifferenceOfArrays(globalMetaSettingsArray, settingsArray);
      const classNameToAdd = getDifferenceOfArrays(settingsArray, globalMetaSettingsArray);
      if (classNameToRemove.length) {
        removeClass(element, classNameToRemove);
      }
      if (classNameToAdd.length) {
        addClass(element, classNameToAdd);
      }
    }
    globalMeta[className] = classSettings;
  }
  this.init = function() {
    dataSource.setData(tableMeta.data);
    instance.runHooks("beforeInit");
    if (isMobileBrowser() || isIpadOS()) {
      addClass(instance.rootElement, "mobile");
    }
    this.updateSettings(tableMeta, true);
    this.view = new tableView_default(this);
    editorManager = editorManager_default.getInstance(instance, tableMeta, selection);
    viewportScroller = createViewportScroller(instance);
    focusManager = new FocusManager(instance);
    if (isRootInstance(this)) {
      installFocusCatcher(instance);
    }
    instance.runHooks("init");
    this.forceFullRender = true;
    this.view.render();
    if (!!firstRun && instance.rootElement.offsetParent === null) {
      observeVisibilityChangeOnce(instance.rootElement, () => {
        instance.view._wt.wtOverlays.updateLastSpreaderSize();
        instance.render();
        instance.view.adjustElementsSize();
      });
    }
    if (typeof firstRun === "object") {
      instance.runHooks("afterChange", firstRun[0], firstRun[1]);
      firstRun = false;
    }
    instance.runHooks("afterInit");
  };
  function ValidatorsQueue() {
    let resolved = false;
    return {
      validatorsInQueue: 0,
      valid: true,
      addValidatorToQueue() {
        this.validatorsInQueue += 1;
        resolved = false;
      },
      removeValidatorFormQueue() {
        this.validatorsInQueue = this.validatorsInQueue - 1 < 0 ? 0 : this.validatorsInQueue - 1;
        this.checkIfQueueIsEmpty();
      },
      onQueueEmpty() {
      },
      checkIfQueueIsEmpty() {
        if (this.validatorsInQueue === 0 && resolved === false) {
          resolved = true;
          this.onQueueEmpty(this.valid);
        }
      }
    };
  }
  function getParsedNumber(numericData) {
    const unifiedNumericData = numericData.replace(",", ".");
    if (isNaN(parseFloat(unifiedNumericData)) === false) {
      return parseFloat(unifiedNumericData);
    }
    return numericData;
  }
  function validateChanges(changes, source, callback) {
    if (!changes.length) {
      return;
    }
    const activeEditor = instance.getActiveEditor();
    const waitingForValidator = new ValidatorsQueue();
    let shouldBeCanceled = true;
    waitingForValidator.onQueueEmpty = (isValid) => {
      if (activeEditor && shouldBeCanceled) {
        activeEditor.cancelChanges();
      }
      callback(isValid);
    };
    for (let i = changes.length - 1; i >= 0; i--) {
      const [row, prop, , newValue] = changes[i];
      const visualCol = datamap.propToCol(prop);
      let cellProperties;
      if (Number.isInteger(visualCol)) {
        cellProperties = instance.getCellMeta(row, visualCol);
      } else {
        cellProperties = __spreadValues(__spreadValues({}, Object.getPrototypeOf(tableMeta)), tableMeta);
      }
      if (cellProperties.type === "numeric" && typeof newValue === "string" && isNumericLike(newValue)) {
        changes[i][3] = getParsedNumber(newValue);
      }
      if (instance.getCellValidator(cellProperties)) {
        waitingForValidator.addValidatorToQueue();
        instance.validateCell(changes[i][3], cellProperties, /* @__PURE__ */ function(index, cellPropertiesReference) {
          return function(result) {
            if (typeof result !== "boolean") {
              throw new Error("Validation error: result is not boolean");
            }
            if (result === false && cellPropertiesReference.allowInvalid === false) {
              shouldBeCanceled = false;
              changes.splice(index, 1);
              cellPropertiesReference.valid = true;
              const cell = instance.getCell(cellPropertiesReference.visualRow, cellPropertiesReference.visualCol);
              if (cell !== null) {
                removeClass(cell, tableMeta.invalidCellClassName);
              }
            }
            waitingForValidator.removeValidatorFormQueue();
          };
        }(i, cellProperties), source);
      }
    }
    waitingForValidator.checkIfQueueIsEmpty();
  }
  function applyChanges(changes, source) {
    let i = changes.length - 1;
    if (i < 0) {
      return;
    }
    for (; i >= 0; i--) {
      let skipThisChange = false;
      if (changes[i] === null) {
        changes.splice(i, 1);
        continue;
      }
      if ((changes[i][2] === null || changes[i][2] === void 0) && (changes[i][3] === null || changes[i][3] === void 0)) {
        continue;
      }
      if (tableMeta.allowInsertRow) {
        while (changes[i][0] > instance.countRows() - 1) {
          const {
            delta: numberOfCreatedRows
          } = datamap.createRow(void 0, void 0, {
            source
          });
          if (numberOfCreatedRows === 0) {
            skipThisChange = true;
            break;
          }
        }
      }
      if (instance.dataType === "array" && (!tableMeta.columns || tableMeta.columns.length === 0) && tableMeta.allowInsertColumn) {
        while (datamap.propToCol(changes[i][1]) > instance.countCols() - 1) {
          const {
            delta: numberOfCreatedColumns
          } = datamap.createCol(void 0, void 0, {
            source
          });
          if (numberOfCreatedColumns === 0) {
            skipThisChange = true;
            break;
          }
        }
      }
      if (skipThisChange) {
        continue;
      }
      datamap.set(changes[i][0], changes[i][1], changes[i][3]);
    }
    instance.forceFullRender = true;
    grid.adjustRowsAndCols();
    instance.runHooks("beforeChangeRender", changes, source);
    editorManager.closeEditor();
    instance.view.render();
    editorManager.prepareEditor();
    instance.view.adjustElementsSize();
    instance.runHooks("afterChange", changes, source || "edit");
    const activeEditor = instance.getActiveEditor();
    if (activeEditor && isDefined(activeEditor.refreshValue)) {
      activeEditor.refreshValue();
    }
  }
  this._createCellCoords = function(row, column) {
    return instance.view._wt.createCellCoords(row, column);
  };
  this._createCellRange = function(highlight, from, to) {
    return instance.view._wt.createCellRange(highlight, from, to);
  };
  this.validateCell = function(value, cellProperties, callback, source) {
    let validator = instance.getCellValidator(cellProperties);
    function done(valid) {
      let canBeValidated = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      if (!canBeValidated || cellProperties.hidden === true) {
        callback(valid);
        return;
      }
      const col = cellProperties.visualCol;
      const row = cellProperties.visualRow;
      const td = instance.getCell(row, col, true);
      if (td && td.nodeName !== "TH") {
        const renderableRow = instance.rowIndexMapper.getRenderableFromVisualIndex(row);
        const renderableColumn = instance.columnIndexMapper.getRenderableFromVisualIndex(col);
        instance.view._wt.getSetting("cellRenderer", renderableRow, renderableColumn, td);
      }
      callback(valid);
    }
    if (isRegExp(validator)) {
      validator = /* @__PURE__ */ function(expression) {
        return function(cellValue, validatorCallback) {
          validatorCallback(expression.test(cellValue));
        };
      }(validator);
    }
    if (isFunction(validator)) {
      value = instance.runHooks("beforeValidate", value, cellProperties.visualRow, cellProperties.prop, source);
      instance._registerImmediate(() => {
        validator.call(cellProperties, value, (valid) => {
          if (!instance) {
            return;
          }
          valid = instance.runHooks("afterValidate", valid, value, cellProperties.visualRow, cellProperties.prop, source);
          cellProperties.valid = valid;
          done(valid);
          instance.runHooks("postAfterValidate", valid, value, cellProperties.visualRow, cellProperties.prop, source);
        });
      });
    } else {
      instance._registerImmediate(() => {
        cellProperties.valid = true;
        done(cellProperties.valid, false);
      });
    }
  };
  function setDataInputToArray(row, propOrCol, value) {
    if (Array.isArray(row)) {
      return row;
    }
    return [[row, propOrCol, value]];
  }
  function processChanges(changes, source) {
    const activeEditor = instance.getActiveEditor();
    const beforeChangeResult = instance.runHooks("beforeChange", changes, source || "edit");
    const filteredChanges = changes.filter((change) => change !== null);
    if (beforeChangeResult === false || filteredChanges.length === 0) {
      if (activeEditor) {
        activeEditor.cancelChanges();
      }
      return [];
    }
    return filteredChanges;
  }
  this.setDataAtCell = function(row, column, value, source) {
    const input = setDataInputToArray(row, column, value);
    const changes = [];
    let changeSource = source;
    let i;
    let ilen;
    let prop;
    for (i = 0, ilen = input.length; i < ilen; i++) {
      if (typeof input[i] !== "object") {
        throw new Error("Method `setDataAtCell` accepts row number or changes array of arrays as its first parameter");
      }
      if (typeof input[i][1] !== "number") {
        throw new Error("Method `setDataAtCell` accepts row and column number as its parameters. If you want to use object property name, use method `setDataAtRowProp`");
      }
      if (input[i][1] >= this.countCols()) {
        prop = input[i][1];
      } else {
        prop = datamap.colToProp(input[i][1]);
      }
      changes.push([input[i][0], prop, dataSource.getAtCell(this.toPhysicalRow(input[i][0]), input[i][1]), input[i][2]]);
    }
    if (!changeSource && typeof row === "object") {
      changeSource = column;
    }
    const processedChanges = processChanges(changes, source);
    instance.runHooks("afterSetDataAtCell", processedChanges, changeSource);
    validateChanges(processedChanges, changeSource, () => {
      applyChanges(processedChanges, changeSource);
    });
  };
  this.setDataAtRowProp = function(row, prop, value, source) {
    const input = setDataInputToArray(row, prop, value);
    const changes = [];
    let changeSource = source;
    let i;
    let ilen;
    for (i = 0, ilen = input.length; i < ilen; i++) {
      changes.push([input[i][0], input[i][1], dataSource.getAtCell(this.toPhysicalRow(input[i][0]), input[i][1]), input[i][2]]);
    }
    if (!changeSource && typeof row === "object") {
      changeSource = prop;
    }
    const processedChanges = processChanges(changes, source);
    instance.runHooks("afterSetDataAtRowProp", processedChanges, changeSource);
    validateChanges(processedChanges, changeSource, () => {
      applyChanges(processedChanges, changeSource);
    });
  };
  this.listen = function() {
    if (instance && !instance.isListening()) {
      foreignHotInstances.forEach((foreignHot) => {
        if (instance !== foreignHot) {
          foreignHot.unlisten();
        }
      });
      activeGuid = instance.guid;
      instance.runHooks("afterListen");
    }
  };
  this.unlisten = function() {
    if (this.isListening()) {
      activeGuid = null;
      instance.runHooks("afterUnlisten");
    }
  };
  this.isListening = function() {
    return activeGuid === instance.guid;
  };
  this.destroyEditor = function() {
    let revertOriginal = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    let prepareEditorIfNeeded = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    editorManager.closeEditor(revertOriginal);
    instance.view.render();
    if (prepareEditorIfNeeded && selection.isSelected()) {
      editorManager.prepareEditor();
    }
  };
  this.populateFromArray = function(row, column, input, endRow, endCol, source, method) {
    if (!(typeof input === "object" && typeof input[0] === "object")) {
      throw new Error("populateFromArray parameter `input` must be an array of arrays");
    }
    const c = typeof endRow === "number" ? instance._createCellCoords(endRow, endCol) : null;
    return grid.populateFromArray(instance._createCellCoords(row, column), input, c, source, method);
  };
  this.spliceCol = function(column, index, amount) {
    for (var _len16 = arguments.length, elements = new Array(_len16 > 3 ? _len16 - 3 : 0), _key16 = 3; _key16 < _len16; _key16++) {
      elements[_key16 - 3] = arguments[_key16];
    }
    return datamap.spliceCol(column, index, amount, ...elements);
  };
  this.spliceRow = function(row, index, amount) {
    for (var _len17 = arguments.length, elements = new Array(_len17 > 3 ? _len17 - 3 : 0), _key17 = 3; _key17 < _len17; _key17++) {
      elements[_key17 - 3] = arguments[_key17];
    }
    return datamap.spliceRow(row, index, amount, ...elements);
  };
  this.getSelected = function() {
    if (selection.isSelected()) {
      return arrayMap(selection.getSelectedRange(), (_ref7) => {
        let {
          from,
          to
        } = _ref7;
        return [from.row, from.col, to.row, to.col];
      });
    }
  };
  this.getSelectedLast = function() {
    const selected = this.getSelected();
    let result;
    if (selected && selected.length > 0) {
      result = selected[selected.length - 1];
    }
    return result;
  };
  this.getSelectedRange = function() {
    if (selection.isSelected()) {
      return Array.from(selection.getSelectedRange());
    }
  };
  this.getSelectedRangeLast = function() {
    const selectedRange = this.getSelectedRange();
    let result;
    if (selectedRange && selectedRange.length > 0) {
      result = selectedRange[selectedRange.length - 1];
    }
    return result;
  };
  this.emptySelectedCells = function(source) {
    if (!selection.isSelected() || this.countRows() === 0 || this.countCols() === 0) {
      return;
    }
    const changes = [];
    arrayEach(selection.getSelectedRange(), (cellRange) => {
      if (cellRange.isSingleHeader()) {
        return;
      }
      const topStart = cellRange.getTopStartCorner();
      const bottomEnd = cellRange.getBottomEndCorner();
      rangeEach(topStart.row, bottomEnd.row, (row) => {
        rangeEach(topStart.col, bottomEnd.col, (column) => {
          if (!this.getCellMeta(row, column).readOnly) {
            changes.push([row, column, null]);
          }
        });
      });
    });
    if (changes.length > 0) {
      this.setDataAtCell(changes, source);
    }
  };
  this.isRenderSuspended = function() {
    return this.renderSuspendedCounter > 0;
  };
  this.suspendRender = function() {
    this.renderSuspendedCounter += 1;
  };
  this.resumeRender = function() {
    const nextValue = this.renderSuspendedCounter - 1;
    this.renderSuspendedCounter = Math.max(nextValue, 0);
    if (!this.isRenderSuspended() && nextValue === this.renderSuspendedCounter) {
      if (this.renderCall) {
        this.render();
      } else {
        instance.view.render();
      }
    }
  };
  this.render = function() {
    if (this.view) {
      this.renderCall = true;
      this.forceFullRender = true;
      if (!this.isRenderSuspended()) {
        instance.view.render();
      }
    }
  };
  this.batchRender = function(wrappedOperations) {
    this.suspendRender();
    const result = wrappedOperations();
    this.resumeRender();
    return result;
  };
  this.isExecutionSuspended = function() {
    return this.executionSuspendedCounter > 0;
  };
  this.suspendExecution = function() {
    this.executionSuspendedCounter += 1;
    this.columnIndexMapper.suspendOperations();
    this.rowIndexMapper.suspendOperations();
  };
  this.resumeExecution = function() {
    let forceFlushChanges = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const nextValue = this.executionSuspendedCounter - 1;
    this.executionSuspendedCounter = Math.max(nextValue, 0);
    if (!this.isExecutionSuspended() && nextValue === this.executionSuspendedCounter || forceFlushChanges) {
      this.columnIndexMapper.resumeOperations();
      this.rowIndexMapper.resumeOperations();
    }
  };
  this.batchExecution = function(wrappedOperations) {
    let forceFlushChanges = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    this.suspendExecution();
    const result = wrappedOperations();
    this.resumeExecution(forceFlushChanges);
    return result;
  };
  this.batch = function(wrappedOperations) {
    this.suspendRender();
    this.suspendExecution();
    const result = wrappedOperations();
    this.resumeExecution();
    this.resumeRender();
    return result;
  };
  this.refreshDimensions = function() {
    if (!instance.view) {
      return;
    }
    const {
      width: lastWidth,
      height: lastHeight
    } = instance.view.getLastSize();
    const {
      width,
      height
    } = instance.rootElement.getBoundingClientRect();
    const isSizeChanged = width !== lastWidth || height !== lastHeight;
    const isResizeBlocked = instance.runHooks("beforeRefreshDimensions", {
      width: lastWidth,
      height: lastHeight
    }, {
      width,
      height
    }, isSizeChanged) === false;
    if (isResizeBlocked) {
      return;
    }
    if (isSizeChanged || instance.view._wt.wtOverlays.scrollableElement === instance.rootWindow) {
      instance.view.setLastSize(width, height);
      instance.render();
    }
    instance.runHooks("afterRefreshDimensions", {
      width: lastWidth,
      height: lastHeight
    }, {
      width,
      height
    }, isSizeChanged);
  };
  this.updateData = function(data, source) {
    replaceData(data, (newDataMap) => {
      datamap = newDataMap;
    }, (newDataMap) => {
      datamap = newDataMap;
      instance.columnIndexMapper.fitToLength(this.getInitialColumnCount());
      instance.rowIndexMapper.fitToLength(this.countSourceRows());
      grid.adjustRowsAndCols();
      selection.refresh();
    }, {
      hotInstance: instance,
      dataMap: datamap,
      dataSource,
      internalSource: "updateData",
      source,
      metaManager,
      firstRun
    });
  };
  this.loadData = function(data, source) {
    replaceData(data, (newDataMap) => {
      datamap = newDataMap;
    }, () => {
      metaManager.clearCellsCache();
      instance.initIndexMappers();
      grid.adjustRowsAndCols();
      selection.refresh();
      if (firstRun) {
        firstRun = [null, "loadData"];
      }
    }, {
      hotInstance: instance,
      dataMap: datamap,
      dataSource,
      internalSource: "loadData",
      source,
      metaManager,
      firstRun
    });
  };
  this.getInitialColumnCount = function() {
    const columnsSettings = tableMeta.columns;
    let finalNrOfColumns = 0;
    if (Array.isArray(columnsSettings)) {
      finalNrOfColumns = columnsSettings.length;
    } else if (isFunction(columnsSettings)) {
      if (instance.dataType === "array") {
        const nrOfSourceColumns = this.countSourceCols();
        for (let columnIndex = 0; columnIndex < nrOfSourceColumns; columnIndex += 1) {
          if (columnsSettings(columnIndex)) {
            finalNrOfColumns += 1;
          }
        }
      } else if (instance.dataType === "object" || instance.dataType === "function") {
        finalNrOfColumns = datamap.colToPropCache.length;
      }
    } else if (isDefined(tableMeta.dataSchema)) {
      const schema = datamap.getSchema();
      finalNrOfColumns = Array.isArray(schema) ? schema.length : deepObjectSize(schema);
    } else {
      finalNrOfColumns = this.countSourceCols();
    }
    return finalNrOfColumns;
  };
  this.initIndexMappers = function() {
    this.columnIndexMapper.initToLength(this.getInitialColumnCount());
    this.rowIndexMapper.initToLength(this.countSourceRows());
  };
  this.getData = function(row, column, row2, column2) {
    if (isUndefined(row)) {
      return datamap.getAll();
    }
    return datamap.getRange(instance._createCellCoords(row, column), instance._createCellCoords(row2, column2), datamap.DESTINATION_RENDERER);
  };
  this.getCopyableText = function(startRow, startCol, endRow, endCol) {
    return datamap.getCopyableText(instance._createCellCoords(startRow, startCol), instance._createCellCoords(endRow, endCol));
  };
  this.getCopyableData = function(row, column) {
    return datamap.getCopyable(row, datamap.colToProp(column));
  };
  this.getSchema = function() {
    return datamap.getSchema();
  };
  this.updateSettings = function(settings) {
    let init = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const dataUpdateFunction = (firstRun ? instance.loadData : instance.updateData).bind(this);
    let columnsAsFunc = false;
    let i;
    let j;
    if (isDefined(settings.rows)) {
      throw new Error('The "rows" setting is no longer supported. Do you mean startRows, minRows or maxRows?');
    }
    if (isDefined(settings.cols)) {
      throw new Error('The "cols" setting is no longer supported. Do you mean startCols, minCols or maxCols?');
    }
    if (isDefined(settings.ganttChart)) {
      throw new Error('Since 8.0.0 the "ganttChart" setting is no longer supported.');
    }
    for (i in settings) {
      if (i === "data") {
      } else if (i === "language") {
        setLanguage(settings.language);
      } else if (i === "className") {
        setClassName("className", settings.className);
      } else if (i === "tableClassName" && instance.table) {
        setClassName("tableClassName", settings.tableClassName);
        instance.view._wt.wtOverlays.syncOverlayTableClassNames();
      } else if (pluginHooks_default.getSingleton().isRegistered(i) || pluginHooks_default.getSingleton().isDeprecated(i)) {
        if (isFunction(settings[i]) || Array.isArray(settings[i])) {
          settings[i].initialHook = true;
          instance.addHook(i, settings[i]);
        }
      } else if (!init && hasOwnProperty(settings, i)) {
        globalMeta[i] = settings[i];
      }
    }
    if (settings.data === void 0 && tableMeta.data === void 0) {
      dataUpdateFunction(null, "updateSettings");
    } else if (settings.data !== void 0) {
      dataUpdateFunction(settings.data, "updateSettings");
    } else if (settings.columns !== void 0) {
      datamap.createMap();
      instance.initIndexMappers();
    }
    const clen = instance.countCols();
    const columnSetting = tableMeta.columns;
    if (columnSetting && isFunction(columnSetting)) {
      columnsAsFunc = true;
    }
    if (settings.cell !== void 0 || settings.cells !== void 0 || settings.columns !== void 0) {
      metaManager.clearCache();
    }
    if (clen > 0) {
      for (i = 0, j = 0; i < clen; i++) {
        if (columnSetting) {
          const column = columnsAsFunc ? columnSetting(i) : columnSetting[j];
          if (column) {
            metaManager.updateColumnMeta(j, column);
          }
        }
        j += 1;
      }
    }
    if (isDefined(settings.cell)) {
      objectEach(settings.cell, (cell) => {
        instance.setCellMetaObject(cell.row, cell.col, cell);
      });
    }
    instance.runHooks("afterCellMetaReset");
    let currentHeight = instance.rootElement.style.height;
    if (currentHeight !== "") {
      currentHeight = parseInt(instance.rootElement.style.height, 10);
    }
    let height = settings.height;
    if (isFunction(height)) {
      height = height();
    }
    if (init) {
      const initialStyle = instance.rootElement.getAttribute("style");
      if (initialStyle) {
        instance.rootElement.setAttribute("data-initialstyle", instance.rootElement.getAttribute("style"));
      }
    }
    if (height === null) {
      const initialStyle = instance.rootElement.getAttribute("data-initialstyle");
      if (initialStyle && (initialStyle.indexOf("height") > -1 || initialStyle.indexOf("overflow") > -1)) {
        instance.rootElement.setAttribute("style", initialStyle);
      } else {
        instance.rootElement.style.height = "";
        instance.rootElement.style.overflow = "";
      }
    } else if (height !== void 0) {
      instance.rootElement.style.height = isNaN(height) ? `${height}` : `${height}px`;
      instance.rootElement.style.overflow = "hidden";
    }
    if (typeof settings.width !== "undefined") {
      let width = settings.width;
      if (isFunction(width)) {
        width = width();
      }
      instance.rootElement.style.width = isNaN(width) ? `${width}` : `${width}px`;
    }
    if (!init) {
      if (instance.view) {
        instance.view._wt.wtViewport.resetHasOversizedColumnHeadersMarked();
        instance.view._wt.exportSettingsAsClassNames();
      }
      instance.runHooks("afterUpdateSettings", settings);
    }
    grid.adjustRowsAndCols();
    if (instance.view && !firstRun) {
      instance.forceFullRender = true;
      instance.view.render();
      instance.view._wt.wtOverlays.adjustElementsSize();
    }
    if (!init && instance.view && (currentHeight === "" || height === "" || height === void 0) && currentHeight !== height) {
      instance.view._wt.wtOverlays.updateMainScrollableElements();
    }
  };
  this.getValue = function() {
    const sel = instance.getSelectedLast();
    if (tableMeta.getValue) {
      if (isFunction(tableMeta.getValue)) {
        return tableMeta.getValue.call(instance);
      } else if (sel) {
        return instance.getData()[sel[0][0]][tableMeta.getValue];
      }
    } else if (sel) {
      return instance.getDataAtCell(sel[0], sel[1]);
    }
  };
  this.getSettings = function() {
    return tableMeta;
  };
  this.clear = function() {
    this.selectAll();
    this.emptySelectedCells();
  };
  this.alter = function(action, index, amount, source, keepEmptyRows) {
    grid.alter(action, index, amount, source, keepEmptyRows);
  };
  this.getCell = function(row, column) {
    let topmost = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    let renderableColumnIndex = column;
    let renderableRowIndex = row;
    if (column >= 0) {
      if (this.columnIndexMapper.isHidden(this.toPhysicalColumn(column))) {
        return null;
      }
      renderableColumnIndex = this.columnIndexMapper.getRenderableFromVisualIndex(column);
    }
    if (row >= 0) {
      if (this.rowIndexMapper.isHidden(this.toPhysicalRow(row))) {
        return null;
      }
      renderableRowIndex = this.rowIndexMapper.getRenderableFromVisualIndex(row);
    }
    if (renderableRowIndex === null || renderableColumnIndex === null || renderableRowIndex === void 0 || renderableColumnIndex === void 0) {
      return null;
    }
    return instance.view.getCellAtCoords(instance._createCellCoords(renderableRowIndex, renderableColumnIndex), topmost);
  };
  this.getCoords = function(element) {
    const renderableCoords = this.view._wt.wtTable.getCoords(element);
    if (renderableCoords === null) {
      return null;
    }
    const {
      row: renderableRow,
      col: renderableColumn
    } = renderableCoords;
    let visualRow = renderableRow;
    let visualColumn = renderableColumn;
    if (renderableRow >= 0) {
      visualRow = this.rowIndexMapper.getVisualFromRenderableIndex(renderableRow);
    }
    if (renderableColumn >= 0) {
      visualColumn = this.columnIndexMapper.getVisualFromRenderableIndex(renderableColumn);
    }
    return instance._createCellCoords(visualRow, visualColumn);
  };
  this.colToProp = function(column) {
    return datamap.colToProp(column);
  };
  this.propToCol = function(prop) {
    return datamap.propToCol(prop);
  };
  this.toVisualRow = (row) => this.rowIndexMapper.getVisualFromPhysicalIndex(row);
  this.toVisualColumn = (column) => this.columnIndexMapper.getVisualFromPhysicalIndex(column);
  this.toPhysicalRow = (row) => this.rowIndexMapper.getPhysicalFromVisualIndex(row);
  this.toPhysicalColumn = (column) => this.columnIndexMapper.getPhysicalFromVisualIndex(column);
  this.getDataAtCell = function(row, column) {
    return datamap.get(row, datamap.colToProp(column));
  };
  this.getDataAtRowProp = function(row, prop) {
    return datamap.get(row, prop);
  };
  this.getDataAtCol = function(column) {
    const columnData = [];
    const dataByRows = datamap.getRange(instance._createCellCoords(0, column), instance._createCellCoords(tableMeta.data.length - 1, column), datamap.DESTINATION_RENDERER);
    for (let i = 0; i < dataByRows.length; i += 1) {
      for (let j = 0; j < dataByRows[i].length; j += 1) {
        columnData.push(dataByRows[i][j]);
      }
    }
    return columnData;
  };
  this.getDataAtProp = function(prop) {
    const columnData = [];
    const dataByRows = datamap.getRange(instance._createCellCoords(0, datamap.propToCol(prop)), instance._createCellCoords(tableMeta.data.length - 1, datamap.propToCol(prop)), datamap.DESTINATION_RENDERER);
    for (let i = 0; i < dataByRows.length; i += 1) {
      for (let j = 0; j < dataByRows[i].length; j += 1) {
        columnData.push(dataByRows[i][j]);
      }
    }
    return columnData;
  };
  this.getSourceData = function(row, column, row2, column2) {
    let data;
    if (row === void 0) {
      data = dataSource.getData();
    } else {
      data = dataSource.getByRange(instance._createCellCoords(row, column), instance._createCellCoords(row2, column2));
    }
    return data;
  };
  this.getSourceDataArray = function(row, column, row2, column2) {
    let data;
    if (row === void 0) {
      data = dataSource.getData(true);
    } else {
      data = dataSource.getByRange(instance._createCellCoords(row, column), instance._createCellCoords(row2, column2), true);
    }
    return data;
  };
  this.getSourceDataAtCol = function(column) {
    return dataSource.getAtColumn(column);
  };
  this.setSourceDataAtCell = function(row, column, value, source) {
    const input = setDataInputToArray(row, column, value);
    const isThereAnySetSourceListener = this.hasHook("afterSetSourceDataAtCell");
    const changesForHook = [];
    if (isThereAnySetSourceListener) {
      arrayEach(input, (_ref8) => {
        let [changeRow, changeProp, changeValue] = _ref8;
        changesForHook.push([
          changeRow,
          changeProp,
          dataSource.getAtCell(changeRow, changeProp),
          // The previous value.
          changeValue
        ]);
      });
    }
    arrayEach(input, (_ref9) => {
      let [changeRow, changeProp, changeValue] = _ref9;
      dataSource.setAtCell(changeRow, changeProp, changeValue);
    });
    if (isThereAnySetSourceListener) {
      this.runHooks("afterSetSourceDataAtCell", changesForHook, source);
    }
    this.render();
    const activeEditor = instance.getActiveEditor();
    if (activeEditor && isDefined(activeEditor.refreshValue)) {
      activeEditor.refreshValue();
    }
  };
  this.getSourceDataAtRow = function(row) {
    return dataSource.getAtRow(row);
  };
  this.getSourceDataAtCell = function(row, column) {
    return dataSource.getAtCell(row, column);
  };
  this.getDataAtRow = function(row) {
    const data = datamap.getRange(instance._createCellCoords(row, 0), instance._createCellCoords(row, this.countCols() - 1), datamap.DESTINATION_RENDERER);
    return data[0] || [];
  };
  this.getDataType = function(rowFrom, columnFrom, rowTo, columnTo) {
    const coords = rowFrom === void 0 ? [0, 0, this.countRows(), this.countCols()] : [rowFrom, columnFrom, rowTo, columnTo];
    const [rowStart, columnStart] = coords;
    let [, , rowEnd, columnEnd] = coords;
    let previousType = null;
    let currentType = null;
    if (rowEnd === void 0) {
      rowEnd = rowStart;
    }
    if (columnEnd === void 0) {
      columnEnd = columnStart;
    }
    let type = "mixed";
    rangeEach(Math.max(Math.min(rowStart, rowEnd), 0), Math.max(rowStart, rowEnd), (row) => {
      let isTypeEqual = true;
      rangeEach(Math.max(Math.min(columnStart, columnEnd), 0), Math.max(columnStart, columnEnd), (column) => {
        const cellType = this.getCellMeta(row, column);
        currentType = cellType.type;
        if (previousType) {
          isTypeEqual = previousType === currentType;
        } else {
          previousType = currentType;
        }
        return isTypeEqual;
      });
      type = isTypeEqual ? currentType : "mixed";
      return isTypeEqual;
    });
    return type;
  };
  this.removeCellMeta = function(row, column, key) {
    const [physicalRow, physicalColumn] = [this.toPhysicalRow(row), this.toPhysicalColumn(column)];
    let cachedValue = metaManager.getCellMetaKeyValue(physicalRow, physicalColumn, key);
    const hookResult = instance.runHooks("beforeRemoveCellMeta", row, column, key, cachedValue);
    if (hookResult !== false) {
      metaManager.removeCellMeta(physicalRow, physicalColumn, key);
      instance.runHooks("afterRemoveCellMeta", row, column, key, cachedValue);
    }
    cachedValue = null;
  };
  this.spliceCellsMeta = function(visualIndex) {
    let deleteAmount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    for (var _len18 = arguments.length, cellMetaRows = new Array(_len18 > 2 ? _len18 - 2 : 0), _key18 = 2; _key18 < _len18; _key18++) {
      cellMetaRows[_key18 - 2] = arguments[_key18];
    }
    if (cellMetaRows.length > 0 && !Array.isArray(cellMetaRows[0])) {
      throw new Error("The 3rd argument (cellMetaRows) has to be passed as an array of cell meta objects array.");
    }
    if (deleteAmount > 0) {
      metaManager.removeRow(this.toPhysicalRow(visualIndex), deleteAmount);
    }
    if (cellMetaRows.length > 0) {
      arrayEach(cellMetaRows.reverse(), (cellMetaRow) => {
        metaManager.createRow(this.toPhysicalRow(visualIndex));
        arrayEach(cellMetaRow, (cellMeta, columnIndex) => this.setCellMetaObject(visualIndex, columnIndex, cellMeta));
      });
    }
    instance.render();
  };
  this.setCellMetaObject = function(row, column, prop) {
    if (typeof prop === "object") {
      objectEach(prop, (value, key) => {
        this.setCellMeta(row, column, key, value);
      });
    }
  };
  this.setCellMeta = function(row, column, key, value) {
    const allowSetCellMeta = instance.runHooks("beforeSetCellMeta", row, column, key, value);
    if (allowSetCellMeta === false) {
      return;
    }
    let physicalRow = row;
    let physicalColumn = column;
    if (row < this.countRows()) {
      physicalRow = this.toPhysicalRow(row);
    }
    if (column < this.countCols()) {
      physicalColumn = this.toPhysicalColumn(column);
    }
    metaManager.setCellMeta(physicalRow, physicalColumn, key, value);
    instance.runHooks("afterSetCellMeta", row, column, key, value);
  };
  this.getCellsMeta = function() {
    return metaManager.getCellsMeta();
  };
  this.getCellMeta = function(row, column) {
    let physicalRow = this.toPhysicalRow(row);
    let physicalColumn = this.toPhysicalColumn(column);
    if (physicalRow === null) {
      physicalRow = row;
    }
    if (physicalColumn === null) {
      physicalColumn = column;
    }
    return metaManager.getCellMeta(physicalRow, physicalColumn, {
      visualRow: row,
      visualColumn: column
    });
  };
  this.getCellMetaAtRow = function(row) {
    return metaManager.getCellsMetaAtRow(row);
  };
  this.isColumnModificationAllowed = function() {
    return !(instance.dataType === "object" || tableMeta.columns);
  };
  this.getCellRenderer = function(rowOrMeta, column) {
    const cellRenderer = typeof rowOrMeta === "number" ? instance.getCellMeta(rowOrMeta, column).renderer : rowOrMeta.renderer;
    if (typeof cellRenderer === "string") {
      return _getItem2(cellRenderer);
    }
    return isUndefined(cellRenderer) ? _getItem2("text") : cellRenderer;
  };
  this.getCellEditor = function(rowOrMeta, column) {
    const cellEditor = typeof rowOrMeta === "number" ? instance.getCellMeta(rowOrMeta, column).editor : rowOrMeta.editor;
    if (typeof cellEditor === "string") {
      return _getItem(cellEditor);
    }
    return isUndefined(cellEditor) ? _getItem("text") : cellEditor;
  };
  this.getCellValidator = function(rowOrMeta, column) {
    const cellValidator = typeof rowOrMeta === "number" ? instance.getCellMeta(rowOrMeta, column).validator : rowOrMeta.validator;
    if (typeof cellValidator === "string") {
      return _getItem3(cellValidator);
    }
    return cellValidator;
  };
  this.validateCells = function(callback) {
    this._validateCells(callback);
  };
  this.validateRows = function(rows, callback) {
    if (!Array.isArray(rows)) {
      throw new Error("validateRows parameter `rows` must be an array");
    }
    this._validateCells(callback, rows);
  };
  this.validateColumns = function(columns, callback) {
    if (!Array.isArray(columns)) {
      throw new Error("validateColumns parameter `columns` must be an array");
    }
    this._validateCells(callback, void 0, columns);
  };
  this._validateCells = function(callback, rows, columns) {
    const waitingForValidator = new ValidatorsQueue();
    if (callback) {
      waitingForValidator.onQueueEmpty = callback;
    }
    let i = instance.countRows() - 1;
    while (i >= 0) {
      if (rows !== void 0 && rows.indexOf(i) === -1) {
        i -= 1;
        continue;
      }
      let j = instance.countCols() - 1;
      while (j >= 0) {
        if (columns !== void 0 && columns.indexOf(j) === -1) {
          j -= 1;
          continue;
        }
        waitingForValidator.addValidatorToQueue();
        instance.validateCell(instance.getDataAtCell(i, j), instance.getCellMeta(i, j), (result) => {
          if (typeof result !== "boolean") {
            throw new Error("Validation error: result is not boolean");
          }
          if (result === false) {
            waitingForValidator.valid = false;
          }
          waitingForValidator.removeValidatorFormQueue();
        }, "validateCells");
        j -= 1;
      }
      i -= 1;
    }
    waitingForValidator.checkIfQueueIsEmpty();
  };
  this.getRowHeader = function(row) {
    let rowHeader = tableMeta.rowHeaders;
    let physicalRow = row;
    if (physicalRow !== void 0) {
      physicalRow = instance.runHooks("modifyRowHeader", physicalRow);
    }
    if (physicalRow === void 0) {
      rowHeader = [];
      rangeEach(instance.countRows() - 1, (i) => {
        rowHeader.push(instance.getRowHeader(i));
      });
    } else if (Array.isArray(rowHeader) && rowHeader[physicalRow] !== void 0) {
      rowHeader = rowHeader[physicalRow];
    } else if (isFunction(rowHeader)) {
      rowHeader = rowHeader(physicalRow);
    } else if (rowHeader && typeof rowHeader !== "string" && typeof rowHeader !== "number") {
      rowHeader = physicalRow + 1;
    }
    return rowHeader;
  };
  this.hasRowHeaders = function() {
    return !!tableMeta.rowHeaders;
  };
  this.hasColHeaders = function() {
    if (tableMeta.colHeaders !== void 0 && tableMeta.colHeaders !== null) {
      return !!tableMeta.colHeaders;
    }
    for (let i = 0, ilen = instance.countCols(); i < ilen; i++) {
      if (instance.getColHeader(i)) {
        return true;
      }
    }
    return false;
  };
  this.getColHeader = function(column) {
    let headerLevel = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
    const columnIndex = instance.runHooks("modifyColHeader", column);
    if (columnIndex === void 0) {
      const out = [];
      const ilen = instance.countCols();
      for (let i = 0; i < ilen; i++) {
        out.push(instance.getColHeader(i));
      }
      return out;
    }
    let result = tableMeta.colHeaders;
    const translateVisualIndexToColumns = function(visualColumnIndex) {
      const arr = [];
      const columnsLen = instance.countCols();
      let index = 0;
      for (; index < columnsLen; index++) {
        if (isFunction(tableMeta.columns) && tableMeta.columns(index)) {
          arr.push(index);
        }
      }
      return arr[visualColumnIndex];
    };
    const physicalColumn = instance.toPhysicalColumn(columnIndex);
    const prop = translateVisualIndexToColumns(physicalColumn);
    if (tableMeta.colHeaders === false) {
      result = null;
    } else if (tableMeta.columns && isFunction(tableMeta.columns) && tableMeta.columns(prop) && tableMeta.columns(prop).title) {
      result = tableMeta.columns(prop).title;
    } else if (tableMeta.columns && tableMeta.columns[physicalColumn] && tableMeta.columns[physicalColumn].title) {
      result = tableMeta.columns[physicalColumn].title;
    } else if (Array.isArray(tableMeta.colHeaders) && tableMeta.colHeaders[physicalColumn] !== void 0) {
      result = tableMeta.colHeaders[physicalColumn];
    } else if (isFunction(tableMeta.colHeaders)) {
      result = tableMeta.colHeaders(physicalColumn);
    } else if (tableMeta.colHeaders && typeof tableMeta.colHeaders !== "string" && typeof tableMeta.colHeaders !== "number") {
      result = spreadsheetColumnLabel(columnIndex);
    }
    result = instance.runHooks("modifyColumnHeaderValue", result, column, headerLevel);
    return result;
  };
  this._getColWidthFromSettings = function(col) {
    let width;
    if (col >= 0) {
      const cellProperties = instance.getCellMeta(0, col);
      width = cellProperties.width;
    }
    if (width === void 0 || width === tableMeta.width) {
      width = tableMeta.colWidths;
    }
    if (width !== void 0 && width !== null) {
      switch (typeof width) {
        case "object":
          width = width[col];
          break;
        case "function":
          width = width(col);
          break;
        default:
          break;
      }
      if (typeof width === "string") {
        width = parseInt(width, 10);
      }
    }
    return width;
  };
  this.getColWidth = function(column) {
    let width = instance._getColWidthFromSettings(column);
    width = instance.runHooks("modifyColWidth", width, column);
    if (width === void 0) {
      width = ViewportColumnsCalculator.DEFAULT_WIDTH;
    }
    return width;
  };
  this._getRowHeightFromSettings = function(row) {
    let height = tableMeta.rowHeights;
    if (height !== void 0 && height !== null) {
      switch (typeof height) {
        case "object":
          height = height[row];
          break;
        case "function":
          height = height(row);
          break;
        default:
          break;
      }
      if (typeof height === "string") {
        height = parseInt(height, 10);
      }
    }
    return height;
  };
  this.getRowHeight = function(row) {
    let height = instance._getRowHeightFromSettings(row);
    height = instance.runHooks("modifyRowHeight", height, row);
    return height;
  };
  this.countSourceRows = function() {
    return dataSource.countRows();
  };
  this.countSourceCols = function() {
    return dataSource.countFirstRowKeys();
  };
  this.countRows = function() {
    return datamap.getLength();
  };
  this.countCols = function() {
    const maxCols = tableMeta.maxCols;
    const dataLen = this.columnIndexMapper.getNotTrimmedIndexesLength();
    return Math.min(maxCols, dataLen);
  };
  this.countRenderedRows = function() {
    return instance.view._wt.drawn ? instance.view._wt.wtTable.getRenderedRowsCount() : -1;
  };
  this.countVisibleRows = function() {
    return instance.view._wt.drawn ? instance.view._wt.wtTable.getVisibleRowsCount() : -1;
  };
  this.countRenderedCols = function() {
    return instance.view._wt.drawn ? instance.view._wt.wtTable.getRenderedColumnsCount() : -1;
  };
  this.countVisibleCols = function() {
    return instance.view._wt.drawn ? instance.view._wt.wtTable.getVisibleColumnsCount() : -1;
  };
  this.countRowHeaders = function() {
    return this.view.getRowHeadersCount();
  };
  this.countColHeaders = function() {
    return this.view.getColumnHeadersCount();
  };
  this.countEmptyRows = function() {
    let ending = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    let emptyRows = 0;
    rangeEachReverse(instance.countRows() - 1, (visualIndex) => {
      if (instance.isEmptyRow(visualIndex)) {
        emptyRows += 1;
      } else if (ending === true) {
        return false;
      }
    });
    return emptyRows;
  };
  this.countEmptyCols = function() {
    let ending = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    let emptyColumns = 0;
    rangeEachReverse(instance.countCols() - 1, (visualIndex) => {
      if (instance.isEmptyCol(visualIndex)) {
        emptyColumns += 1;
      } else if (ending === true) {
        return false;
      }
    });
    return emptyColumns;
  };
  this.isEmptyRow = function(row) {
    return tableMeta.isEmptyRow.call(instance, row);
  };
  this.isEmptyCol = function(column) {
    return tableMeta.isEmptyCol.call(instance, column);
  };
  this.selectCell = function(row, column, endRow, endColumn) {
    let scrollToCell = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
    let changeListener = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true;
    if (isUndefined(row) || isUndefined(column)) {
      return false;
    }
    return this.selectCells([[row, column, endRow, endColumn]], scrollToCell, changeListener);
  };
  this.selectCells = function() {
    let coords = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [[]];
    let scrollToCell = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    let changeListener = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    if (scrollToCell === false) {
      viewportScroller.suspend();
    }
    const wasSelected = selection.selectCells(coords);
    if (wasSelected && changeListener) {
      instance.listen();
    }
    viewportScroller.resume();
    return wasSelected;
  };
  this.selectColumns = function(startColumn) {
    let endColumn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : startColumn;
    let focusPosition = arguments.length > 2 ? arguments[2] : void 0;
    return selection.selectColumns(startColumn, endColumn, focusPosition);
  };
  this.selectRows = function(startRow) {
    let endRow = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : startRow;
    let focusPosition = arguments.length > 2 ? arguments[2] : void 0;
    return selection.selectRows(startRow, endRow, focusPosition);
  };
  this.deselectCell = function() {
    selection.deselect();
  };
  this.selectAll = function() {
    let includeRowHeaders = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    let includeColumnHeaders = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : includeRowHeaders;
    let options = arguments.length > 2 ? arguments[2] : void 0;
    viewportScroller.skipNextScrollCycle();
    selection.selectAll(includeRowHeaders, includeColumnHeaders, options);
  };
  const getIndexToScroll = (indexMapper, visualIndex) => {
    return indexMapper.getNearestNotHiddenIndex(visualIndex, 1, true);
  };
  this.scrollViewportTo = function(options) {
    var _options;
    if (typeof options === "number") {
      var _arguments$;
      options = {
        row: arguments[0],
        col: arguments[1],
        verticalSnap: arguments[2] ? "bottom" : "top",
        horizontalSnap: arguments[3] ? "end" : "start",
        considerHiddenIndexes: (_arguments$ = arguments[4]) !== null && _arguments$ !== void 0 ? _arguments$ : true
      };
    }
    const {
      row,
      col,
      verticalSnap,
      horizontalSnap,
      considerHiddenIndexes
    } = (_options = options) !== null && _options !== void 0 ? _options : {};
    let snapToTop;
    let snapToBottom;
    let snapToInlineStart;
    let snapToInlineEnd;
    if (verticalSnap !== void 0) {
      snapToTop = verticalSnap === "top";
      snapToBottom = !snapToTop;
    }
    if (horizontalSnap !== void 0) {
      snapToInlineStart = horizontalSnap === "start";
      snapToInlineEnd = !snapToInlineStart;
    }
    let renderableRow = row;
    let renderableColumn = col;
    if (considerHiddenIndexes === void 0 || considerHiddenIndexes) {
      const isValidRowGrid = Number.isInteger(row) && row >= 0;
      const isValidColumnGrid = Number.isInteger(col) && col >= 0;
      const visualRowToScroll = isValidRowGrid ? getIndexToScroll(this.rowIndexMapper, row) : void 0;
      const visualColumnToScroll = isValidColumnGrid ? getIndexToScroll(this.columnIndexMapper, col) : void 0;
      if (visualRowToScroll === null || visualColumnToScroll === null) {
        return false;
      }
      renderableRow = isValidRowGrid ? instance.rowIndexMapper.getRenderableFromVisualIndex(visualRowToScroll) : row;
      renderableColumn = isValidColumnGrid ? instance.columnIndexMapper.getRenderableFromVisualIndex(visualColumnToScroll) : col;
    }
    const isRowInteger = Number.isInteger(renderableRow);
    const isColumnInteger = Number.isInteger(renderableColumn);
    if (isRowInteger && renderableRow >= 0 && isColumnInteger && renderableColumn >= 0) {
      return instance.view.scrollViewport(instance._createCellCoords(renderableRow, renderableColumn), snapToTop, snapToInlineEnd, snapToBottom, snapToInlineStart);
    }
    if (isRowInteger && renderableRow >= 0 && (isColumnInteger && renderableColumn < 0 || !isColumnInteger)) {
      return instance.view.scrollViewportVertically(renderableRow, snapToTop, snapToBottom);
    }
    if (isColumnInteger && renderableColumn >= 0 && (isRowInteger && renderableRow < 0 || !isRowInteger)) {
      return instance.view.scrollViewportHorizontally(renderableColumn, snapToInlineEnd, snapToInlineStart);
    }
    return false;
  };
  this.scrollToFocusedCell = function() {
    let callback = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : () => {
    };
    if (!this.selection.isSelected()) {
      return;
    }
    this.addHookOnce("afterScroll", callback);
    const {
      highlight
    } = this.getSelectedRangeLast();
    const isScrolled = this.scrollViewportTo(highlight.toObject());
    if (isScrolled) {
      this.view.render();
    } else {
      this.removeHook("afterScroll", callback);
      this._registerImmediate(() => callback());
    }
  };
  this.destroy = function() {
    instance._clearTimeouts();
    instance._clearImmediates();
    if (instance.view) {
      instance.view.destroy();
    }
    if (dataSource) {
      dataSource.destroy();
    }
    dataSource = null;
    this.getShortcutManager().destroy();
    metaManager.clearCache();
    foreignHotInstances.delete(this.guid);
    if (isRootInstance(instance)) {
      const licenseInfo = this.rootDocument.querySelector(".hot-display-license-info");
      if (licenseInfo) {
        licenseInfo.parentNode.removeChild(licenseInfo);
      }
    }
    empty(instance.rootElement);
    eventManager.destroy();
    if (editorManager) {
      editorManager.destroy();
    }
    instance.batchExecution(() => {
      instance.rowIndexMapper.unregisterAll();
      instance.columnIndexMapper.unregisterAll();
      pluginsRegistry.getItems().forEach((_ref10) => {
        let [, plugin] = _ref10;
        plugin.destroy();
      });
      pluginsRegistry.clear();
      instance.runHooks("afterDestroy");
    }, true);
    pluginHooks_default.getSingleton().destroy(instance);
    objectEach(instance, (property, key, obj) => {
      if (isFunction(property)) {
        obj[key] = postMortem(key);
      } else if (key !== "guid") {
        obj[key] = null;
      }
    });
    instance.isDestroyed = true;
    if (datamap) {
      datamap.destroy();
    }
    datamap = null;
    grid = null;
    selection = null;
    editorManager = null;
    instance = null;
  };
  function postMortem(method) {
    return () => {
      throw new Error(`The "${method}" method cannot be called because this Handsontable instance has been destroyed`);
    };
  }
  this.getActiveEditor = function() {
    return editorManager.getActiveEditor();
  };
  this.getPlugin = function(pluginName) {
    const unifiedPluginName = toUpperCaseFirst(pluginName);
    if (unifiedPluginName === "UndoRedo") {
      return this.undoRedo;
    }
    return pluginsRegistry.getItem(unifiedPluginName);
  };
  this.getPluginName = function(plugin) {
    if (plugin === this.undoRedo) {
      return this.undoRedo.constructor.PLUGIN_KEY;
    }
    return pluginsRegistry.getId(plugin);
  };
  this.getInstance = function() {
    return instance;
  };
  this.addHook = function(key, callback, orderIndex) {
    pluginHooks_default.getSingleton().add(key, callback, instance, orderIndex);
  };
  this.hasHook = function(key) {
    return pluginHooks_default.getSingleton().has(key, instance) || pluginHooks_default.getSingleton().has(key);
  };
  this.addHookOnce = function(key, callback, orderIndex) {
    pluginHooks_default.getSingleton().once(key, callback, instance, orderIndex);
  };
  this.removeHook = function(key, callback) {
    pluginHooks_default.getSingleton().remove(key, callback, instance);
  };
  this.runHooks = function(key, p1, p2, p3, p4, p5, p6) {
    return pluginHooks_default.getSingleton().run(instance, key, p1, p2, p3, p4, p5, p6);
  };
  this.getTranslatedPhrase = function(dictionaryKey, extraArguments) {
    return getTranslatedPhrase(tableMeta.language, dictionaryKey, extraArguments);
  };
  this.toHTML = () => instanceToHTML(this);
  this.toTableElement = () => {
    const tempElement = this.rootDocument.createElement("div");
    tempElement.insertAdjacentHTML("afterbegin", instanceToHTML(this));
    return tempElement.firstElementChild;
  };
  this.timeouts = [];
  this._registerTimeout = function(handle) {
    let delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    let handleFunc = handle;
    if (typeof handleFunc === "function") {
      handleFunc = setTimeout(handleFunc, delay);
    }
    this.timeouts.push(handleFunc);
  };
  this._clearTimeouts = function() {
    arrayEach(this.timeouts, (handler) => {
      clearTimeout(handler);
    });
  };
  this.immediates = [];
  this._registerImmediate = function(callback) {
    this.immediates.push(setImmediate(callback));
  };
  this._clearImmediates = function() {
    arrayEach(this.immediates, (handler) => {
      clearImmediate(handler);
    });
  };
  this._getEditorManager = function() {
    return editorManager;
  };
  this.isRtl = function() {
    return instance.rootWindow.getComputedStyle(instance.rootElement).direction === "rtl";
  };
  this.isLtr = function() {
    return !instance.isRtl();
  };
  this.getDirectionFactor = function() {
    return instance.isLtr() ? 1 : -1;
  };
  const shortcutManager = createShortcutManager({
    handleEvent() {
      return instance.isListening();
    },
    beforeKeyDown: (event) => {
      return this.runHooks("beforeKeyDown", event);
    },
    afterKeyDown: (event) => {
      if (this.isDestroyed) {
        return;
      }
      instance.runHooks("afterDocumentKeyDown", event);
    },
    ownerWindow: this.rootWindow
  });
  this.addHook("beforeOnCellMouseDown", (event) => {
    if (event.ctrlKey === false && event.metaKey === false) {
      shortcutManager.releasePressedKeys();
    }
  });
  this.getShortcutManager = function() {
    return shortcutManager;
  };
  this.getFocusManager = function() {
    return focusManager;
  };
  getPluginsNames().forEach((pluginName) => {
    const PluginClass = getPlugin(pluginName);
    pluginsRegistry.addItem(pluginName, new PluginClass(this));
  });
  registerAllShortcutContexts(instance);
  shortcutManager.setActiveContextName("grid");
  pluginHooks_default.getSingleton().run(instance, "construct");
}

// node_modules/handsontable/base.mjs
_register(TextCellType);
Handsontable.editors = {
  BaseEditor
};
function Handsontable(rootElement, userSettings) {
  const instance = new Core(rootElement, userSettings || {}, rootInstanceSymbol);
  instance.init();
  return instance;
}
Handsontable.Core = function(rootElement) {
  let userSettings = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return new Core(rootElement, userSettings, rootInstanceSymbol);
};
Handsontable.DefaultSettings = metaSchema_default();
Handsontable.hooks = pluginHooks_default.getSingleton();
Handsontable.CellCoords = coords_default;
Handsontable.CellRange = range_default;
Handsontable.packageName = "handsontable";
Handsontable.buildDate = "11/06/2024 09:51:42";
Handsontable.version = "14.4.0";
Handsontable.languages = {
  dictionaryKeys,
  getLanguageDictionary,
  getLanguagesDictionaries,
  registerLanguageDictionary,
  getTranslatedPhrase
};
var base_default = Handsontable;

// node_modules/@handsontable/angular/fesm2022/handsontable-angular.mjs
var _c0 = ["container"];
var instances2 = /* @__PURE__ */ new Map();
var HOT_DESTROYED_WARNING = "The Handsontable instance bound to this component was destroyed and cannot be used properly.";
var HotTableRegisterer = class _HotTableRegisterer {
  getInstance(id) {
    const hotInstance = instances2.get(id);
    if (hotInstance.isDestroyed) {
      console.warn(HOT_DESTROYED_WARNING);
      return null;
    }
    return hotInstance;
  }
  registerInstance(id, instance) {
    return instances2.set(id, instance);
  }
  removeInstance(id) {
    return instances2.delete(id);
  }
  static ɵfac = function HotTableRegisterer_Factory(t) {
    return new (t || _HotTableRegisterer)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _HotTableRegisterer,
    factory: _HotTableRegisterer.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HotTableRegisterer, [{
    type: Injectable
  }], null, null);
})();
var AVAILABLE_OPTIONS = Object.keys(base_default.DefaultSettings);
var AVAILABLE_HOOKS = base_default.hooks.getRegistered();
var HotSettingsResolver = class _HotSettingsResolver {
  mergeSettings(component) {
    const isSettingsObject = "settings" in component && typeof component["settings"] === "object";
    const mergedSettings = isSettingsObject ? component["settings"] : {};
    const options = AVAILABLE_HOOKS.concat(AVAILABLE_OPTIONS);
    options.forEach((key) => {
      const isHook = AVAILABLE_HOOKS.indexOf(key) > -1;
      let option;
      if (isSettingsObject && isHook) {
        option = component["settings"][key];
      }
      if (component[key] !== void 0) {
        option = component[key];
      }
      if (option === void 0) {
        return;
      } else if ("ngZone" in component && typeof option === "function" && isHook) {
        mergedSettings[key] = function(...args) {
          return component.ngZone.run(() => option.apply(this, args));
        };
      } else {
        mergedSettings[key] = option;
      }
    });
    return mergedSettings;
  }
  prepareChanges(changes) {
    const result = {};
    const parameters = Object.keys(changes);
    parameters.forEach((param) => {
      if (changes.hasOwnProperty(param)) {
        result[param] = changes[param].currentValue;
      }
    });
    return result;
  }
  static ɵfac = function HotSettingsResolver_Factory(t) {
    return new (t || _HotSettingsResolver)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _HotSettingsResolver,
    factory: _HotSettingsResolver.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HotSettingsResolver, [{
    type: Injectable
  }], null, null);
})();
var HotTableComponent = class _HotTableComponent {
  _hotTableRegisterer;
  _hotSettingsResolver;
  ngZone;
  container;
  __hotInstance = null;
  columnsComponents = [];
  // component inputs
  settings;
  hotId = "";
  // handsontable options
  activeHeaderClassName;
  allowEmpty;
  allowHtml;
  allowInsertColumn;
  allowInsertRow;
  allowInvalid;
  allowRemoveColumn;
  allowRemoveRow;
  ariaTags;
  autoColumnSize;
  autoRowSize;
  autoWrapCol;
  autoWrapRow;
  bindRowsWithHeaders;
  cell;
  cells;
  checkedTemplate;
  className;
  colHeaders;
  collapsibleColumns;
  columnHeaderHeight;
  columns;
  columnSorting;
  columnSummary;
  colWidths;
  commentedCellClassName;
  comments;
  contextMenu;
  copyable;
  copyPaste;
  correctFormat;
  currentColClassName;
  currentHeaderClassName;
  currentRowClassName;
  customBorders;
  data;
  dataDotNotation;
  dataSchema;
  dateFormat;
  datePickerConfig;
  defaultDate;
  tabNavigation;
  disableVisualSelection;
  dragToScroll;
  dropdownMenu;
  editor;
  enterBeginsEditing;
  enterMoves;
  fillHandle;
  filter;
  filteringCaseSensitive;
  filters;
  fixedColumnsLeft;
  fixedColumnsStart;
  fixedRowsBottom;
  fixedRowsTop;
  formulas;
  fragmentSelection;
  height;
  hiddenColumns;
  hiddenRows;
  invalidCellClassName;
  imeFastEdit;
  label;
  language;
  layoutDirection;
  licenseKey;
  locale;
  manualColumnFreeze;
  manualColumnMove;
  manualColumnResize;
  manualRowMove;
  manualRowResize;
  maxCols;
  maxRows;
  mergeCells;
  minCols;
  minRows;
  minSpareCols;
  minSpareRows;
  multiColumnSorting;
  navigableHeaders;
  nestedHeaders;
  nestedRows;
  noWordWrapClassName;
  numericFormat;
  observeDOMVisibility;
  outsideClickDeselects;
  persistentState;
  placeholder;
  placeholderCellClassName;
  preventOverflow;
  preventWheel;
  readOnly;
  readOnlyCellClassName;
  renderAllColumns;
  renderAllRows;
  renderer;
  rowHeaders;
  rowHeaderWidth;
  rowHeights;
  search;
  selectionMode;
  selectOptions;
  skipColumnOnPaste;
  skipRowOnPaste;
  sortByRelevance;
  source;
  startCols;
  startRows;
  stretchH;
  strict;
  tableClassName;
  tabMoves;
  title;
  trimDropdown;
  trimRows;
  trimWhitespace;
  type;
  uncheckedTemplate;
  undo;
  validator;
  viewportColumnRenderingOffset;
  viewportRowRenderingOffset;
  visibleRows;
  width;
  wordWrap;
  // handsontable hooks
  afterAddChild;
  afterAutofill;
  afterBeginEditing;
  afterCellMetaReset;
  afterChange;
  afterChangesObserved;
  afterColumnCollapse;
  afterColumnExpand;
  afterColumnFreeze;
  afterColumnMove;
  afterColumnResize;
  afterColumnSequenceChange;
  afterColumnSort;
  afterColumnUnfreeze;
  afterContextMenuDefaultOptions;
  afterContextMenuHide;
  afterContextMenuShow;
  afterCopy;
  afterCopyLimit;
  afterCreateCol;
  afterCreateRow;
  afterCut;
  afterDeselect;
  afterDestroy;
  afterDetachChild;
  afterDocumentKeyDown;
  afterDrawSelection;
  afterDropdownMenuDefaultOptions;
  afterDropdownMenuHide;
  afterDropdownMenuShow;
  afterFilter;
  afterFormulasValuesUpdate;
  afterGetCellMeta;
  afterGetColHeader;
  afterGetColumnHeaderRenderers;
  afterGetRowHeader;
  afterGetRowHeaderRenderers;
  afterHideColumns;
  afterHideRows;
  afterInit;
  afterLanguageChange;
  afterListen;
  afterLoadData;
  afterMergeCells;
  afterModifyTransformEnd;
  afterModifyTransformFocus;
  afterModifyTransformStart;
  afterMomentumScroll;
  afterNamedExpressionAdded;
  afterNamedExpressionRemoved;
  afterOnCellContextMenu;
  afterOnCellCornerDblClick;
  afterOnCellCornerMouseDown;
  afterOnCellMouseDown;
  afterOnCellMouseOut;
  afterOnCellMouseOver;
  afterOnCellMouseUp;
  afterPaste;
  afterPluginsInitialized;
  afterRedo;
  afterRedoStackChange;
  afterRefreshDimensions;
  afterRemoveCellMeta;
  afterRemoveCol;
  afterRemoveRow;
  afterRender;
  afterRenderer;
  afterRowMove;
  afterRowResize;
  afterRowSequenceChange;
  afterScrollHorizontally;
  afterScrollVertically;
  afterScroll;
  afterSelectColumns;
  afterSelection;
  afterSelectionByProp;
  afterSelectionEnd;
  afterSelectionEndByProp;
  afterSelectionFocusSet;
  afterSelectRows;
  afterSetCellMeta;
  afterSetDataAtCell;
  afterSetDataAtRowProp;
  afterSetSourceDataAtCell;
  afterSheetAdded;
  afterSheetRenamed;
  afterSheetRemoved;
  afterTrimRow;
  afterUndo;
  afterUndoStackChange;
  afterUnhideColumns;
  afterUnhideRows;
  afterUnlisten;
  afterUnmergeCells;
  afterUntrimRow;
  afterUpdateData;
  afterUpdateSettings;
  afterValidate;
  afterViewportColumnCalculatorOverride;
  afterViewportRowCalculatorOverride;
  afterViewRender;
  beforeAddChild;
  beforeAutofill;
  beforeBeginEditing;
  beforeCellAlignment;
  beforeChange;
  beforeChangeRender;
  beforeColumnCollapse;
  beforeColumnExpand;
  beforeColumnFreeze;
  beforeColumnMove;
  beforeColumnResize;
  beforeColumnSort;
  beforeColumnWrap;
  beforeColumnUnfreeze;
  beforeContextMenuSetItems;
  beforeContextMenuShow;
  beforeCopy;
  beforeCreateCol;
  beforeCreateRow;
  beforeCut;
  beforeDetachChild;
  beforeDrawBorders;
  beforeDropdownMenuSetItems;
  beforeDropdownMenuShow;
  beforeFilter;
  beforeGetCellMeta;
  beforeHideColumns;
  beforeHideRows;
  beforeHighlightingColumnHeader;
  beforeHighlightingRowHeader;
  beforeInit;
  beforeInitWalkontable;
  beforeKeyDown;
  beforeLanguageChange;
  beforeLoadData;
  beforeMergeCells;
  beforeOnCellContextMenu;
  beforeOnCellMouseDown;
  beforeOnCellMouseOut;
  beforeOnCellMouseOver;
  beforeOnCellMouseUp;
  beforePaste;
  beforeRedo;
  beforeRedoStackChange;
  beforeRefreshDimensions;
  beforeRemoveCellClassNames;
  beforeRemoveCellMeta;
  beforeRemoveCol;
  beforeRemoveRow;
  beforeRender;
  beforeRenderer;
  beforeRowMove;
  beforeRowResize;
  beforeRowWrap;
  beforeSelectColumns;
  beforeSelectionFocusSet;
  beforeSelectionHighlightSet;
  beforeSelectRows;
  beforeSetCellMeta;
  beforeSetRangeEnd;
  beforeSetRangeStart;
  beforeSetRangeStartOnly;
  beforeStretchingColumnWidth;
  beforeTouchScroll;
  beforeTrimRow;
  beforeUndo;
  beforeUndoStackChange;
  beforeUnhideColumns;
  beforeUnhideRows;
  beforeUnmergeCells;
  beforeUntrimRow;
  beforeUpdateData;
  beforeValidate;
  beforeValueRender;
  beforeViewportScroll;
  beforeViewportScrollHorizontally;
  beforeViewportScrollVertically;
  beforeViewRender;
  construct;
  init;
  modifyAutoColumnSizeSeed;
  modifyAutofillRange;
  modifyColHeader;
  modifyColumnHeaderHeight;
  modifyColumnHeaderValue;
  modifyColWidth;
  modifyCopyableRange;
  modifyFiltersMultiSelectValue;
  modifyFocusedElement;
  modifyData;
  modifyFocusOnTabNavigation;
  modifyGetCellCoords;
  modifyRowData;
  modifyRowHeader;
  modifyRowHeaderWidth;
  modifyRowHeight;
  modifySourceData;
  modifyTransformEnd;
  modifyTransformFocus;
  modifyTransformStart;
  persistentStateLoad;
  persistentStateReset;
  persistentStateSave;
  constructor(_hotTableRegisterer, _hotSettingsResolver, ngZone) {
    this._hotTableRegisterer = _hotTableRegisterer;
    this._hotSettingsResolver = _hotSettingsResolver;
    this.ngZone = ngZone;
  }
  get hotInstance() {
    if (!this.__hotInstance || this.__hotInstance && !this.__hotInstance.isDestroyed) {
      return this.__hotInstance;
    } else {
      this._hotTableRegisterer.removeInstance(this.hotId);
      console.warn(HOT_DESTROYED_WARNING);
      return null;
    }
  }
  set hotInstance(hotInstance) {
    this.__hotInstance = hotInstance;
  }
  ngAfterViewInit() {
    const options = this._hotSettingsResolver.mergeSettings(this);
    if (this.columnsComponents.length > 0) {
      const columns = [];
      this.columnsComponents.forEach((column) => {
        columns.push(this._hotSettingsResolver.mergeSettings(column));
      });
      options["columns"] = columns;
    }
    this.ngZone.runOutsideAngular(() => {
      this.hotInstance = new base_default.Core(this.container.nativeElement, options);
      if (this.hotId) {
        this._hotTableRegisterer.registerInstance(this.hotId, this.hotInstance);
      }
      this.hotInstance.init();
    });
  }
  ngOnChanges(changes) {
    if (this.hotInstance === null) {
      return;
    }
    const newOptions = this._hotSettingsResolver.prepareChanges(changes);
    this.updateHotTable(newOptions);
  }
  ngOnDestroy() {
    this.ngZone.runOutsideAngular(() => {
      if (this.hotInstance) {
        this.hotInstance.destroy();
      }
    });
    if (this.hotId) {
      this._hotTableRegisterer.removeInstance(this.hotId);
    }
  }
  updateHotTable(newSettings) {
    if (!this.hotInstance) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      this.hotInstance.updateSettings(newSettings, false);
    });
  }
  onAfterColumnsChange() {
    if (this.columnsComponents === void 0) {
      return;
    }
    if (this.columnsComponents.length > 0) {
      const columns = [];
      this.columnsComponents.forEach((column) => {
        columns.push(this._hotSettingsResolver.mergeSettings(column));
      });
      const newOptions = {
        columns
      };
      this.updateHotTable(newOptions);
    }
  }
  onAfterColumnsNumberChange() {
    const columns = [];
    if (this.columnsComponents.length > 0) {
      this.columnsComponents.forEach((column) => {
        columns.push(this._hotSettingsResolver.mergeSettings(column));
      });
    }
    this.updateHotTable({
      columns
    });
  }
  addColumn(column) {
    this.columnsComponents.push(column);
    this.onAfterColumnsNumberChange();
  }
  removeColumn(column) {
    const index = this.columnsComponents.indexOf(column);
    this.columnsComponents.splice(index, 1);
    this.onAfterColumnsNumberChange();
  }
  static ɵfac = function HotTableComponent_Factory(t) {
    return new (t || _HotTableComponent)(ɵɵdirectiveInject(HotTableRegisterer), ɵɵdirectiveInject(HotSettingsResolver), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _HotTableComponent,
    selectors: [["hot-table"]],
    viewQuery: function HotTableComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
      }
    },
    inputs: {
      settings: "settings",
      hotId: "hotId",
      activeHeaderClassName: "activeHeaderClassName",
      allowEmpty: "allowEmpty",
      allowHtml: "allowHtml",
      allowInsertColumn: "allowInsertColumn",
      allowInsertRow: "allowInsertRow",
      allowInvalid: "allowInvalid",
      allowRemoveColumn: "allowRemoveColumn",
      allowRemoveRow: "allowRemoveRow",
      ariaTags: "ariaTags",
      autoColumnSize: "autoColumnSize",
      autoRowSize: "autoRowSize",
      autoWrapCol: "autoWrapCol",
      autoWrapRow: "autoWrapRow",
      bindRowsWithHeaders: "bindRowsWithHeaders",
      cell: "cell",
      cells: "cells",
      checkedTemplate: "checkedTemplate",
      className: "className",
      colHeaders: "colHeaders",
      collapsibleColumns: "collapsibleColumns",
      columnHeaderHeight: "columnHeaderHeight",
      columns: "columns",
      columnSorting: "columnSorting",
      columnSummary: "columnSummary",
      colWidths: "colWidths",
      commentedCellClassName: "commentedCellClassName",
      comments: "comments",
      contextMenu: "contextMenu",
      copyable: "copyable",
      copyPaste: "copyPaste",
      correctFormat: "correctFormat",
      currentColClassName: "currentColClassName",
      currentHeaderClassName: "currentHeaderClassName",
      currentRowClassName: "currentRowClassName",
      customBorders: "customBorders",
      data: "data",
      dataDotNotation: "dataDotNotation",
      dataSchema: "dataSchema",
      dateFormat: "dateFormat",
      datePickerConfig: "datePickerConfig",
      defaultDate: "defaultDate",
      tabNavigation: "tabNavigation",
      disableVisualSelection: "disableVisualSelection",
      dragToScroll: "dragToScroll",
      dropdownMenu: "dropdownMenu",
      editor: "editor",
      enterBeginsEditing: "enterBeginsEditing",
      enterMoves: "enterMoves",
      fillHandle: "fillHandle",
      filter: "filter",
      filteringCaseSensitive: "filteringCaseSensitive",
      filters: "filters",
      fixedColumnsLeft: "fixedColumnsLeft",
      fixedColumnsStart: "fixedColumnsStart",
      fixedRowsBottom: "fixedRowsBottom",
      fixedRowsTop: "fixedRowsTop",
      formulas: "formulas",
      fragmentSelection: "fragmentSelection",
      height: "height",
      hiddenColumns: "hiddenColumns",
      hiddenRows: "hiddenRows",
      invalidCellClassName: "invalidCellClassName",
      imeFastEdit: "imeFastEdit",
      label: "label",
      language: "language",
      layoutDirection: "layoutDirection",
      licenseKey: "licenseKey",
      locale: "locale",
      manualColumnFreeze: "manualColumnFreeze",
      manualColumnMove: "manualColumnMove",
      manualColumnResize: "manualColumnResize",
      manualRowMove: "manualRowMove",
      manualRowResize: "manualRowResize",
      maxCols: "maxCols",
      maxRows: "maxRows",
      mergeCells: "mergeCells",
      minCols: "minCols",
      minRows: "minRows",
      minSpareCols: "minSpareCols",
      minSpareRows: "minSpareRows",
      multiColumnSorting: "multiColumnSorting",
      navigableHeaders: "navigableHeaders",
      nestedHeaders: "nestedHeaders",
      nestedRows: "nestedRows",
      noWordWrapClassName: "noWordWrapClassName",
      numericFormat: "numericFormat",
      observeDOMVisibility: "observeDOMVisibility",
      outsideClickDeselects: "outsideClickDeselects",
      persistentState: "persistentState",
      placeholder: "placeholder",
      placeholderCellClassName: "placeholderCellClassName",
      preventOverflow: "preventOverflow",
      preventWheel: "preventWheel",
      readOnly: "readOnly",
      readOnlyCellClassName: "readOnlyCellClassName",
      renderAllColumns: "renderAllColumns",
      renderAllRows: "renderAllRows",
      renderer: "renderer",
      rowHeaders: "rowHeaders",
      rowHeaderWidth: "rowHeaderWidth",
      rowHeights: "rowHeights",
      search: "search",
      selectionMode: "selectionMode",
      selectOptions: "selectOptions",
      skipColumnOnPaste: "skipColumnOnPaste",
      skipRowOnPaste: "skipRowOnPaste",
      sortByRelevance: "sortByRelevance",
      source: "source",
      startCols: "startCols",
      startRows: "startRows",
      stretchH: "stretchH",
      strict: "strict",
      tableClassName: "tableClassName",
      tabMoves: "tabMoves",
      title: "title",
      trimDropdown: "trimDropdown",
      trimRows: "trimRows",
      trimWhitespace: "trimWhitespace",
      type: "type",
      uncheckedTemplate: "uncheckedTemplate",
      undo: "undo",
      validator: "validator",
      viewportColumnRenderingOffset: "viewportColumnRenderingOffset",
      viewportRowRenderingOffset: "viewportRowRenderingOffset",
      visibleRows: "visibleRows",
      width: "width",
      wordWrap: "wordWrap",
      afterAddChild: "afterAddChild",
      afterAutofill: "afterAutofill",
      afterBeginEditing: "afterBeginEditing",
      afterCellMetaReset: "afterCellMetaReset",
      afterChange: "afterChange",
      afterChangesObserved: "afterChangesObserved",
      afterColumnCollapse: "afterColumnCollapse",
      afterColumnExpand: "afterColumnExpand",
      afterColumnFreeze: "afterColumnFreeze",
      afterColumnMove: "afterColumnMove",
      afterColumnResize: "afterColumnResize",
      afterColumnSequenceChange: "afterColumnSequenceChange",
      afterColumnSort: "afterColumnSort",
      afterColumnUnfreeze: "afterColumnUnfreeze",
      afterContextMenuDefaultOptions: "afterContextMenuDefaultOptions",
      afterContextMenuHide: "afterContextMenuHide",
      afterContextMenuShow: "afterContextMenuShow",
      afterCopy: "afterCopy",
      afterCopyLimit: "afterCopyLimit",
      afterCreateCol: "afterCreateCol",
      afterCreateRow: "afterCreateRow",
      afterCut: "afterCut",
      afterDeselect: "afterDeselect",
      afterDestroy: "afterDestroy",
      afterDetachChild: "afterDetachChild",
      afterDocumentKeyDown: "afterDocumentKeyDown",
      afterDrawSelection: "afterDrawSelection",
      afterDropdownMenuDefaultOptions: "afterDropdownMenuDefaultOptions",
      afterDropdownMenuHide: "afterDropdownMenuHide",
      afterDropdownMenuShow: "afterDropdownMenuShow",
      afterFilter: "afterFilter",
      afterFormulasValuesUpdate: "afterFormulasValuesUpdate",
      afterGetCellMeta: "afterGetCellMeta",
      afterGetColHeader: "afterGetColHeader",
      afterGetColumnHeaderRenderers: "afterGetColumnHeaderRenderers",
      afterGetRowHeader: "afterGetRowHeader",
      afterGetRowHeaderRenderers: "afterGetRowHeaderRenderers",
      afterHideColumns: "afterHideColumns",
      afterHideRows: "afterHideRows",
      afterInit: "afterInit",
      afterLanguageChange: "afterLanguageChange",
      afterListen: "afterListen",
      afterLoadData: "afterLoadData",
      afterMergeCells: "afterMergeCells",
      afterModifyTransformEnd: "afterModifyTransformEnd",
      afterModifyTransformFocus: "afterModifyTransformFocus",
      afterModifyTransformStart: "afterModifyTransformStart",
      afterMomentumScroll: "afterMomentumScroll",
      afterNamedExpressionAdded: "afterNamedExpressionAdded",
      afterNamedExpressionRemoved: "afterNamedExpressionRemoved",
      afterOnCellContextMenu: "afterOnCellContextMenu",
      afterOnCellCornerDblClick: "afterOnCellCornerDblClick",
      afterOnCellCornerMouseDown: "afterOnCellCornerMouseDown",
      afterOnCellMouseDown: "afterOnCellMouseDown",
      afterOnCellMouseOut: "afterOnCellMouseOut",
      afterOnCellMouseOver: "afterOnCellMouseOver",
      afterOnCellMouseUp: "afterOnCellMouseUp",
      afterPaste: "afterPaste",
      afterPluginsInitialized: "afterPluginsInitialized",
      afterRedo: "afterRedo",
      afterRedoStackChange: "afterRedoStackChange",
      afterRefreshDimensions: "afterRefreshDimensions",
      afterRemoveCellMeta: "afterRemoveCellMeta",
      afterRemoveCol: "afterRemoveCol",
      afterRemoveRow: "afterRemoveRow",
      afterRender: "afterRender",
      afterRenderer: "afterRenderer",
      afterRowMove: "afterRowMove",
      afterRowResize: "afterRowResize",
      afterRowSequenceChange: "afterRowSequenceChange",
      afterScrollHorizontally: "afterScrollHorizontally",
      afterScrollVertically: "afterScrollVertically",
      afterScroll: "afterScroll",
      afterSelectColumns: "afterSelectColumns",
      afterSelection: "afterSelection",
      afterSelectionByProp: "afterSelectionByProp",
      afterSelectionEnd: "afterSelectionEnd",
      afterSelectionEndByProp: "afterSelectionEndByProp",
      afterSelectionFocusSet: "afterSelectionFocusSet",
      afterSelectRows: "afterSelectRows",
      afterSetCellMeta: "afterSetCellMeta",
      afterSetDataAtCell: "afterSetDataAtCell",
      afterSetDataAtRowProp: "afterSetDataAtRowProp",
      afterSetSourceDataAtCell: "afterSetSourceDataAtCell",
      afterSheetAdded: "afterSheetAdded",
      afterSheetRenamed: "afterSheetRenamed",
      afterSheetRemoved: "afterSheetRemoved",
      afterTrimRow: "afterTrimRow",
      afterUndo: "afterUndo",
      afterUndoStackChange: "afterUndoStackChange",
      afterUnhideColumns: "afterUnhideColumns",
      afterUnhideRows: "afterUnhideRows",
      afterUnlisten: "afterUnlisten",
      afterUnmergeCells: "afterUnmergeCells",
      afterUntrimRow: "afterUntrimRow",
      afterUpdateData: "afterUpdateData",
      afterUpdateSettings: "afterUpdateSettings",
      afterValidate: "afterValidate",
      afterViewportColumnCalculatorOverride: "afterViewportColumnCalculatorOverride",
      afterViewportRowCalculatorOverride: "afterViewportRowCalculatorOverride",
      afterViewRender: "afterViewRender",
      beforeAddChild: "beforeAddChild",
      beforeAutofill: "beforeAutofill",
      beforeBeginEditing: "beforeBeginEditing",
      beforeCellAlignment: "beforeCellAlignment",
      beforeChange: "beforeChange",
      beforeChangeRender: "beforeChangeRender",
      beforeColumnCollapse: "beforeColumnCollapse",
      beforeColumnExpand: "beforeColumnExpand",
      beforeColumnFreeze: "beforeColumnFreeze",
      beforeColumnMove: "beforeColumnMove",
      beforeColumnResize: "beforeColumnResize",
      beforeColumnSort: "beforeColumnSort",
      beforeColumnWrap: "beforeColumnWrap",
      beforeColumnUnfreeze: "beforeColumnUnfreeze",
      beforeContextMenuSetItems: "beforeContextMenuSetItems",
      beforeContextMenuShow: "beforeContextMenuShow",
      beforeCopy: "beforeCopy",
      beforeCreateCol: "beforeCreateCol",
      beforeCreateRow: "beforeCreateRow",
      beforeCut: "beforeCut",
      beforeDetachChild: "beforeDetachChild",
      beforeDrawBorders: "beforeDrawBorders",
      beforeDropdownMenuSetItems: "beforeDropdownMenuSetItems",
      beforeDropdownMenuShow: "beforeDropdownMenuShow",
      beforeFilter: "beforeFilter",
      beforeGetCellMeta: "beforeGetCellMeta",
      beforeHideColumns: "beforeHideColumns",
      beforeHideRows: "beforeHideRows",
      beforeHighlightingColumnHeader: "beforeHighlightingColumnHeader",
      beforeHighlightingRowHeader: "beforeHighlightingRowHeader",
      beforeInit: "beforeInit",
      beforeInitWalkontable: "beforeInitWalkontable",
      beforeKeyDown: "beforeKeyDown",
      beforeLanguageChange: "beforeLanguageChange",
      beforeLoadData: "beforeLoadData",
      beforeMergeCells: "beforeMergeCells",
      beforeOnCellContextMenu: "beforeOnCellContextMenu",
      beforeOnCellMouseDown: "beforeOnCellMouseDown",
      beforeOnCellMouseOut: "beforeOnCellMouseOut",
      beforeOnCellMouseOver: "beforeOnCellMouseOver",
      beforeOnCellMouseUp: "beforeOnCellMouseUp",
      beforePaste: "beforePaste",
      beforeRedo: "beforeRedo",
      beforeRedoStackChange: "beforeRedoStackChange",
      beforeRefreshDimensions: "beforeRefreshDimensions",
      beforeRemoveCellClassNames: "beforeRemoveCellClassNames",
      beforeRemoveCellMeta: "beforeRemoveCellMeta",
      beforeRemoveCol: "beforeRemoveCol",
      beforeRemoveRow: "beforeRemoveRow",
      beforeRender: "beforeRender",
      beforeRenderer: "beforeRenderer",
      beforeRowMove: "beforeRowMove",
      beforeRowResize: "beforeRowResize",
      beforeRowWrap: "beforeRowWrap",
      beforeSelectColumns: "beforeSelectColumns",
      beforeSelectionFocusSet: "beforeSelectionFocusSet",
      beforeSelectionHighlightSet: "beforeSelectionHighlightSet",
      beforeSelectRows: "beforeSelectRows",
      beforeSetCellMeta: "beforeSetCellMeta",
      beforeSetRangeEnd: "beforeSetRangeEnd",
      beforeSetRangeStart: "beforeSetRangeStart",
      beforeSetRangeStartOnly: "beforeSetRangeStartOnly",
      beforeStretchingColumnWidth: "beforeStretchingColumnWidth",
      beforeTouchScroll: "beforeTouchScroll",
      beforeTrimRow: "beforeTrimRow",
      beforeUndo: "beforeUndo",
      beforeUndoStackChange: "beforeUndoStackChange",
      beforeUnhideColumns: "beforeUnhideColumns",
      beforeUnhideRows: "beforeUnhideRows",
      beforeUnmergeCells: "beforeUnmergeCells",
      beforeUntrimRow: "beforeUntrimRow",
      beforeUpdateData: "beforeUpdateData",
      beforeValidate: "beforeValidate",
      beforeValueRender: "beforeValueRender",
      beforeViewportScroll: "beforeViewportScroll",
      beforeViewportScrollHorizontally: "beforeViewportScrollHorizontally",
      beforeViewportScrollVertically: "beforeViewportScrollVertically",
      beforeViewRender: "beforeViewRender",
      construct: "construct",
      init: "init",
      modifyAutoColumnSizeSeed: "modifyAutoColumnSizeSeed",
      modifyAutofillRange: "modifyAutofillRange",
      modifyColHeader: "modifyColHeader",
      modifyColumnHeaderHeight: "modifyColumnHeaderHeight",
      modifyColumnHeaderValue: "modifyColumnHeaderValue",
      modifyColWidth: "modifyColWidth",
      modifyCopyableRange: "modifyCopyableRange",
      modifyFiltersMultiSelectValue: "modifyFiltersMultiSelectValue",
      modifyFocusedElement: "modifyFocusedElement",
      modifyData: "modifyData",
      modifyFocusOnTabNavigation: "modifyFocusOnTabNavigation",
      modifyGetCellCoords: "modifyGetCellCoords",
      modifyRowData: "modifyRowData",
      modifyRowHeader: "modifyRowHeader",
      modifyRowHeaderWidth: "modifyRowHeaderWidth",
      modifyRowHeight: "modifyRowHeight",
      modifySourceData: "modifySourceData",
      modifyTransformEnd: "modifyTransformEnd",
      modifyTransformFocus: "modifyTransformFocus",
      modifyTransformStart: "modifyTransformStart",
      persistentStateLoad: "persistentStateLoad",
      persistentStateReset: "persistentStateReset",
      persistentStateSave: "persistentStateSave"
    },
    features: [ɵɵProvidersFeature([HotTableRegisterer, HotSettingsResolver]), ɵɵNgOnChangesFeature],
    decls: 2,
    vars: 1,
    consts: [["container", ""], [3, "id"]],
    template: function HotTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "div", 1, 0);
      }
      if (rf & 2) {
        ɵɵproperty("id", ctx.hotId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HotTableComponent, [{
    type: Component,
    args: [{
      selector: "hot-table",
      template: '<div #container [id]="hotId"></div>',
      encapsulation: ViewEncapsulation$1.None,
      providers: [HotTableRegisterer, HotSettingsResolver]
    }]
  }], () => [{
    type: HotTableRegisterer
  }, {
    type: HotSettingsResolver
  }, {
    type: NgZone
  }], {
    container: [{
      type: ViewChild,
      args: ["container", {
        static: false
      }]
    }],
    settings: [{
      type: Input
    }],
    hotId: [{
      type: Input
    }],
    activeHeaderClassName: [{
      type: Input
    }],
    allowEmpty: [{
      type: Input
    }],
    allowHtml: [{
      type: Input
    }],
    allowInsertColumn: [{
      type: Input
    }],
    allowInsertRow: [{
      type: Input
    }],
    allowInvalid: [{
      type: Input
    }],
    allowRemoveColumn: [{
      type: Input
    }],
    allowRemoveRow: [{
      type: Input
    }],
    ariaTags: [{
      type: Input
    }],
    autoColumnSize: [{
      type: Input
    }],
    autoRowSize: [{
      type: Input
    }],
    autoWrapCol: [{
      type: Input
    }],
    autoWrapRow: [{
      type: Input
    }],
    bindRowsWithHeaders: [{
      type: Input
    }],
    cell: [{
      type: Input
    }],
    cells: [{
      type: Input
    }],
    checkedTemplate: [{
      type: Input
    }],
    className: [{
      type: Input
    }],
    colHeaders: [{
      type: Input
    }],
    collapsibleColumns: [{
      type: Input
    }],
    columnHeaderHeight: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    columnSorting: [{
      type: Input
    }],
    columnSummary: [{
      type: Input
    }],
    colWidths: [{
      type: Input
    }],
    commentedCellClassName: [{
      type: Input
    }],
    comments: [{
      type: Input
    }],
    contextMenu: [{
      type: Input
    }],
    copyable: [{
      type: Input
    }],
    copyPaste: [{
      type: Input
    }],
    correctFormat: [{
      type: Input
    }],
    currentColClassName: [{
      type: Input
    }],
    currentHeaderClassName: [{
      type: Input
    }],
    currentRowClassName: [{
      type: Input
    }],
    customBorders: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    dataDotNotation: [{
      type: Input
    }],
    dataSchema: [{
      type: Input
    }],
    dateFormat: [{
      type: Input
    }],
    datePickerConfig: [{
      type: Input
    }],
    defaultDate: [{
      type: Input
    }],
    tabNavigation: [{
      type: Input
    }],
    disableVisualSelection: [{
      type: Input
    }],
    dragToScroll: [{
      type: Input
    }],
    dropdownMenu: [{
      type: Input
    }],
    editor: [{
      type: Input
    }],
    enterBeginsEditing: [{
      type: Input
    }],
    enterMoves: [{
      type: Input
    }],
    fillHandle: [{
      type: Input
    }],
    filter: [{
      type: Input
    }],
    filteringCaseSensitive: [{
      type: Input
    }],
    filters: [{
      type: Input
    }],
    fixedColumnsLeft: [{
      type: Input
    }],
    fixedColumnsStart: [{
      type: Input
    }],
    fixedRowsBottom: [{
      type: Input
    }],
    fixedRowsTop: [{
      type: Input
    }],
    formulas: [{
      type: Input
    }],
    fragmentSelection: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    hiddenColumns: [{
      type: Input
    }],
    hiddenRows: [{
      type: Input
    }],
    invalidCellClassName: [{
      type: Input
    }],
    imeFastEdit: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    language: [{
      type: Input
    }],
    layoutDirection: [{
      type: Input
    }],
    licenseKey: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    manualColumnFreeze: [{
      type: Input
    }],
    manualColumnMove: [{
      type: Input
    }],
    manualColumnResize: [{
      type: Input
    }],
    manualRowMove: [{
      type: Input
    }],
    manualRowResize: [{
      type: Input
    }],
    maxCols: [{
      type: Input
    }],
    maxRows: [{
      type: Input
    }],
    mergeCells: [{
      type: Input
    }],
    minCols: [{
      type: Input
    }],
    minRows: [{
      type: Input
    }],
    minSpareCols: [{
      type: Input
    }],
    minSpareRows: [{
      type: Input
    }],
    multiColumnSorting: [{
      type: Input
    }],
    navigableHeaders: [{
      type: Input
    }],
    nestedHeaders: [{
      type: Input
    }],
    nestedRows: [{
      type: Input
    }],
    noWordWrapClassName: [{
      type: Input
    }],
    numericFormat: [{
      type: Input
    }],
    observeDOMVisibility: [{
      type: Input
    }],
    outsideClickDeselects: [{
      type: Input
    }],
    persistentState: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    placeholderCellClassName: [{
      type: Input
    }],
    preventOverflow: [{
      type: Input
    }],
    preventWheel: [{
      type: Input
    }],
    readOnly: [{
      type: Input
    }],
    readOnlyCellClassName: [{
      type: Input
    }],
    renderAllColumns: [{
      type: Input
    }],
    renderAllRows: [{
      type: Input
    }],
    renderer: [{
      type: Input
    }],
    rowHeaders: [{
      type: Input
    }],
    rowHeaderWidth: [{
      type: Input
    }],
    rowHeights: [{
      type: Input
    }],
    search: [{
      type: Input
    }],
    selectionMode: [{
      type: Input
    }],
    selectOptions: [{
      type: Input
    }],
    skipColumnOnPaste: [{
      type: Input
    }],
    skipRowOnPaste: [{
      type: Input
    }],
    sortByRelevance: [{
      type: Input
    }],
    source: [{
      type: Input
    }],
    startCols: [{
      type: Input
    }],
    startRows: [{
      type: Input
    }],
    stretchH: [{
      type: Input
    }],
    strict: [{
      type: Input
    }],
    tableClassName: [{
      type: Input
    }],
    tabMoves: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    trimDropdown: [{
      type: Input
    }],
    trimRows: [{
      type: Input
    }],
    trimWhitespace: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    uncheckedTemplate: [{
      type: Input
    }],
    undo: [{
      type: Input
    }],
    validator: [{
      type: Input
    }],
    viewportColumnRenderingOffset: [{
      type: Input
    }],
    viewportRowRenderingOffset: [{
      type: Input
    }],
    visibleRows: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    wordWrap: [{
      type: Input
    }],
    afterAddChild: [{
      type: Input
    }],
    afterAutofill: [{
      type: Input
    }],
    afterBeginEditing: [{
      type: Input
    }],
    afterCellMetaReset: [{
      type: Input
    }],
    afterChange: [{
      type: Input
    }],
    afterChangesObserved: [{
      type: Input
    }],
    afterColumnCollapse: [{
      type: Input
    }],
    afterColumnExpand: [{
      type: Input
    }],
    afterColumnFreeze: [{
      type: Input
    }],
    afterColumnMove: [{
      type: Input
    }],
    afterColumnResize: [{
      type: Input
    }],
    afterColumnSequenceChange: [{
      type: Input
    }],
    afterColumnSort: [{
      type: Input
    }],
    afterColumnUnfreeze: [{
      type: Input
    }],
    afterContextMenuDefaultOptions: [{
      type: Input
    }],
    afterContextMenuHide: [{
      type: Input
    }],
    afterContextMenuShow: [{
      type: Input
    }],
    afterCopy: [{
      type: Input
    }],
    afterCopyLimit: [{
      type: Input
    }],
    afterCreateCol: [{
      type: Input
    }],
    afterCreateRow: [{
      type: Input
    }],
    afterCut: [{
      type: Input
    }],
    afterDeselect: [{
      type: Input
    }],
    afterDestroy: [{
      type: Input
    }],
    afterDetachChild: [{
      type: Input
    }],
    afterDocumentKeyDown: [{
      type: Input
    }],
    afterDrawSelection: [{
      type: Input
    }],
    afterDropdownMenuDefaultOptions: [{
      type: Input
    }],
    afterDropdownMenuHide: [{
      type: Input
    }],
    afterDropdownMenuShow: [{
      type: Input
    }],
    afterFilter: [{
      type: Input
    }],
    afterFormulasValuesUpdate: [{
      type: Input
    }],
    afterGetCellMeta: [{
      type: Input
    }],
    afterGetColHeader: [{
      type: Input
    }],
    afterGetColumnHeaderRenderers: [{
      type: Input
    }],
    afterGetRowHeader: [{
      type: Input
    }],
    afterGetRowHeaderRenderers: [{
      type: Input
    }],
    afterHideColumns: [{
      type: Input
    }],
    afterHideRows: [{
      type: Input
    }],
    afterInit: [{
      type: Input
    }],
    afterLanguageChange: [{
      type: Input
    }],
    afterListen: [{
      type: Input
    }],
    afterLoadData: [{
      type: Input
    }],
    afterMergeCells: [{
      type: Input
    }],
    afterModifyTransformEnd: [{
      type: Input
    }],
    afterModifyTransformFocus: [{
      type: Input
    }],
    afterModifyTransformStart: [{
      type: Input
    }],
    afterMomentumScroll: [{
      type: Input
    }],
    afterNamedExpressionAdded: [{
      type: Input
    }],
    afterNamedExpressionRemoved: [{
      type: Input
    }],
    afterOnCellContextMenu: [{
      type: Input
    }],
    afterOnCellCornerDblClick: [{
      type: Input
    }],
    afterOnCellCornerMouseDown: [{
      type: Input
    }],
    afterOnCellMouseDown: [{
      type: Input
    }],
    afterOnCellMouseOut: [{
      type: Input
    }],
    afterOnCellMouseOver: [{
      type: Input
    }],
    afterOnCellMouseUp: [{
      type: Input
    }],
    afterPaste: [{
      type: Input
    }],
    afterPluginsInitialized: [{
      type: Input
    }],
    afterRedo: [{
      type: Input
    }],
    afterRedoStackChange: [{
      type: Input
    }],
    afterRefreshDimensions: [{
      type: Input
    }],
    afterRemoveCellMeta: [{
      type: Input
    }],
    afterRemoveCol: [{
      type: Input
    }],
    afterRemoveRow: [{
      type: Input
    }],
    afterRender: [{
      type: Input
    }],
    afterRenderer: [{
      type: Input
    }],
    afterRowMove: [{
      type: Input
    }],
    afterRowResize: [{
      type: Input
    }],
    afterRowSequenceChange: [{
      type: Input
    }],
    afterScrollHorizontally: [{
      type: Input
    }],
    afterScrollVertically: [{
      type: Input
    }],
    afterScroll: [{
      type: Input
    }],
    afterSelectColumns: [{
      type: Input
    }],
    afterSelection: [{
      type: Input
    }],
    afterSelectionByProp: [{
      type: Input
    }],
    afterSelectionEnd: [{
      type: Input
    }],
    afterSelectionEndByProp: [{
      type: Input
    }],
    afterSelectionFocusSet: [{
      type: Input
    }],
    afterSelectRows: [{
      type: Input
    }],
    afterSetCellMeta: [{
      type: Input
    }],
    afterSetDataAtCell: [{
      type: Input
    }],
    afterSetDataAtRowProp: [{
      type: Input
    }],
    afterSetSourceDataAtCell: [{
      type: Input
    }],
    afterSheetAdded: [{
      type: Input
    }],
    afterSheetRenamed: [{
      type: Input
    }],
    afterSheetRemoved: [{
      type: Input
    }],
    afterTrimRow: [{
      type: Input
    }],
    afterUndo: [{
      type: Input
    }],
    afterUndoStackChange: [{
      type: Input
    }],
    afterUnhideColumns: [{
      type: Input
    }],
    afterUnhideRows: [{
      type: Input
    }],
    afterUnlisten: [{
      type: Input
    }],
    afterUnmergeCells: [{
      type: Input
    }],
    afterUntrimRow: [{
      type: Input
    }],
    afterUpdateData: [{
      type: Input
    }],
    afterUpdateSettings: [{
      type: Input
    }],
    afterValidate: [{
      type: Input
    }],
    afterViewportColumnCalculatorOverride: [{
      type: Input
    }],
    afterViewportRowCalculatorOverride: [{
      type: Input
    }],
    afterViewRender: [{
      type: Input
    }],
    beforeAddChild: [{
      type: Input
    }],
    beforeAutofill: [{
      type: Input
    }],
    beforeBeginEditing: [{
      type: Input
    }],
    beforeCellAlignment: [{
      type: Input
    }],
    beforeChange: [{
      type: Input
    }],
    beforeChangeRender: [{
      type: Input
    }],
    beforeColumnCollapse: [{
      type: Input
    }],
    beforeColumnExpand: [{
      type: Input
    }],
    beforeColumnFreeze: [{
      type: Input
    }],
    beforeColumnMove: [{
      type: Input
    }],
    beforeColumnResize: [{
      type: Input
    }],
    beforeColumnSort: [{
      type: Input
    }],
    beforeColumnWrap: [{
      type: Input
    }],
    beforeColumnUnfreeze: [{
      type: Input
    }],
    beforeContextMenuSetItems: [{
      type: Input
    }],
    beforeContextMenuShow: [{
      type: Input
    }],
    beforeCopy: [{
      type: Input
    }],
    beforeCreateCol: [{
      type: Input
    }],
    beforeCreateRow: [{
      type: Input
    }],
    beforeCut: [{
      type: Input
    }],
    beforeDetachChild: [{
      type: Input
    }],
    beforeDrawBorders: [{
      type: Input
    }],
    beforeDropdownMenuSetItems: [{
      type: Input
    }],
    beforeDropdownMenuShow: [{
      type: Input
    }],
    beforeFilter: [{
      type: Input
    }],
    beforeGetCellMeta: [{
      type: Input
    }],
    beforeHideColumns: [{
      type: Input
    }],
    beforeHideRows: [{
      type: Input
    }],
    beforeHighlightingColumnHeader: [{
      type: Input
    }],
    beforeHighlightingRowHeader: [{
      type: Input
    }],
    beforeInit: [{
      type: Input
    }],
    beforeInitWalkontable: [{
      type: Input
    }],
    beforeKeyDown: [{
      type: Input
    }],
    beforeLanguageChange: [{
      type: Input
    }],
    beforeLoadData: [{
      type: Input
    }],
    beforeMergeCells: [{
      type: Input
    }],
    beforeOnCellContextMenu: [{
      type: Input
    }],
    beforeOnCellMouseDown: [{
      type: Input
    }],
    beforeOnCellMouseOut: [{
      type: Input
    }],
    beforeOnCellMouseOver: [{
      type: Input
    }],
    beforeOnCellMouseUp: [{
      type: Input
    }],
    beforePaste: [{
      type: Input
    }],
    beforeRedo: [{
      type: Input
    }],
    beforeRedoStackChange: [{
      type: Input
    }],
    beforeRefreshDimensions: [{
      type: Input
    }],
    beforeRemoveCellClassNames: [{
      type: Input
    }],
    beforeRemoveCellMeta: [{
      type: Input
    }],
    beforeRemoveCol: [{
      type: Input
    }],
    beforeRemoveRow: [{
      type: Input
    }],
    beforeRender: [{
      type: Input
    }],
    beforeRenderer: [{
      type: Input
    }],
    beforeRowMove: [{
      type: Input
    }],
    beforeRowResize: [{
      type: Input
    }],
    beforeRowWrap: [{
      type: Input
    }],
    beforeSelectColumns: [{
      type: Input
    }],
    beforeSelectionFocusSet: [{
      type: Input
    }],
    beforeSelectionHighlightSet: [{
      type: Input
    }],
    beforeSelectRows: [{
      type: Input
    }],
    beforeSetCellMeta: [{
      type: Input
    }],
    beforeSetRangeEnd: [{
      type: Input
    }],
    beforeSetRangeStart: [{
      type: Input
    }],
    beforeSetRangeStartOnly: [{
      type: Input
    }],
    beforeStretchingColumnWidth: [{
      type: Input
    }],
    beforeTouchScroll: [{
      type: Input
    }],
    beforeTrimRow: [{
      type: Input
    }],
    beforeUndo: [{
      type: Input
    }],
    beforeUndoStackChange: [{
      type: Input
    }],
    beforeUnhideColumns: [{
      type: Input
    }],
    beforeUnhideRows: [{
      type: Input
    }],
    beforeUnmergeCells: [{
      type: Input
    }],
    beforeUntrimRow: [{
      type: Input
    }],
    beforeUpdateData: [{
      type: Input
    }],
    beforeValidate: [{
      type: Input
    }],
    beforeValueRender: [{
      type: Input
    }],
    beforeViewportScroll: [{
      type: Input
    }],
    beforeViewportScrollHorizontally: [{
      type: Input
    }],
    beforeViewportScrollVertically: [{
      type: Input
    }],
    beforeViewRender: [{
      type: Input
    }],
    construct: [{
      type: Input
    }],
    init: [{
      type: Input
    }],
    modifyAutoColumnSizeSeed: [{
      type: Input
    }],
    modifyAutofillRange: [{
      type: Input
    }],
    modifyColHeader: [{
      type: Input
    }],
    modifyColumnHeaderHeight: [{
      type: Input
    }],
    modifyColumnHeaderValue: [{
      type: Input
    }],
    modifyColWidth: [{
      type: Input
    }],
    modifyCopyableRange: [{
      type: Input
    }],
    modifyFiltersMultiSelectValue: [{
      type: Input
    }],
    modifyFocusedElement: [{
      type: Input
    }],
    modifyData: [{
      type: Input
    }],
    modifyFocusOnTabNavigation: [{
      type: Input
    }],
    modifyGetCellCoords: [{
      type: Input
    }],
    modifyRowData: [{
      type: Input
    }],
    modifyRowHeader: [{
      type: Input
    }],
    modifyRowHeaderWidth: [{
      type: Input
    }],
    modifyRowHeight: [{
      type: Input
    }],
    modifySourceData: [{
      type: Input
    }],
    modifyTransformEnd: [{
      type: Input
    }],
    modifyTransformFocus: [{
      type: Input
    }],
    modifyTransformStart: [{
      type: Input
    }],
    persistentStateLoad: [{
      type: Input
    }],
    persistentStateReset: [{
      type: Input
    }],
    persistentStateSave: [{
      type: Input
    }]
  });
})();
var HotColumnComponent = class _HotColumnComponent {
  parentComponent;
  firstRun = true;
  // handsontable column options
  allowEmpty;
  allowHtml;
  allowInvalid;
  checkedTemplate;
  className;
  columnSorting;
  colWidths;
  commentedCellClassName;
  copyable;
  correctFormat;
  data;
  dateFormat;
  defaultDate;
  editor;
  filteringCaseSensitive;
  invalidCellClassName;
  label;
  language;
  noWordWrapClassName;
  numericFormat;
  placeholder;
  placeholderCellClassName;
  readOnly;
  readOnlyCellClassName;
  renderer;
  selectOptions;
  skipColumnOnPaste;
  sortByRelevance;
  source;
  strict;
  title;
  trimDropdown;
  type;
  uncheckedTemplate;
  validator;
  visibleRows;
  width;
  wordWrap;
  constructor(parentComponent) {
    this.parentComponent = parentComponent;
  }
  ngOnInit() {
    this.firstRun = false;
    this.parentComponent.addColumn(this);
  }
  ngOnChanges() {
    if (this.firstRun) {
      return;
    }
    this.parentComponent.onAfterColumnsChange();
  }
  ngOnDestroy() {
    this.parentComponent.removeColumn(this);
  }
  static ɵfac = function HotColumnComponent_Factory(t) {
    return new (t || _HotColumnComponent)(ɵɵdirectiveInject(HotTableComponent));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _HotColumnComponent,
    selectors: [["hot-column"]],
    inputs: {
      allowEmpty: "allowEmpty",
      allowHtml: "allowHtml",
      allowInvalid: "allowInvalid",
      checkedTemplate: "checkedTemplate",
      className: "className",
      columnSorting: "columnSorting",
      colWidths: "colWidths",
      commentedCellClassName: "commentedCellClassName",
      copyable: "copyable",
      correctFormat: "correctFormat",
      data: "data",
      dateFormat: "dateFormat",
      defaultDate: "defaultDate",
      editor: "editor",
      filteringCaseSensitive: "filteringCaseSensitive",
      invalidCellClassName: "invalidCellClassName",
      label: "label",
      language: "language",
      noWordWrapClassName: "noWordWrapClassName",
      numericFormat: "numericFormat",
      placeholder: "placeholder",
      placeholderCellClassName: "placeholderCellClassName",
      readOnly: "readOnly",
      readOnlyCellClassName: "readOnlyCellClassName",
      renderer: "renderer",
      selectOptions: "selectOptions",
      skipColumnOnPaste: "skipColumnOnPaste",
      sortByRelevance: "sortByRelevance",
      source: "source",
      strict: "strict",
      title: "title",
      trimDropdown: "trimDropdown",
      type: "type",
      uncheckedTemplate: "uncheckedTemplate",
      validator: "validator",
      visibleRows: "visibleRows",
      width: "width",
      wordWrap: "wordWrap"
    },
    features: [ɵɵNgOnChangesFeature],
    decls: 0,
    vars: 0,
    template: function HotColumnComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HotColumnComponent, [{
    type: Component,
    args: [{
      selector: "hot-column",
      template: ""
    }]
  }], () => [{
    type: HotTableComponent
  }], {
    allowEmpty: [{
      type: Input
    }],
    allowHtml: [{
      type: Input
    }],
    allowInvalid: [{
      type: Input
    }],
    checkedTemplate: [{
      type: Input
    }],
    className: [{
      type: Input
    }],
    columnSorting: [{
      type: Input
    }],
    colWidths: [{
      type: Input
    }],
    commentedCellClassName: [{
      type: Input
    }],
    copyable: [{
      type: Input
    }],
    correctFormat: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    dateFormat: [{
      type: Input
    }],
    defaultDate: [{
      type: Input
    }],
    editor: [{
      type: Input
    }],
    filteringCaseSensitive: [{
      type: Input
    }],
    invalidCellClassName: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    language: [{
      type: Input
    }],
    noWordWrapClassName: [{
      type: Input
    }],
    numericFormat: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    placeholderCellClassName: [{
      type: Input
    }],
    readOnly: [{
      type: Input
    }],
    readOnlyCellClassName: [{
      type: Input
    }],
    renderer: [{
      type: Input
    }],
    selectOptions: [{
      type: Input
    }],
    skipColumnOnPaste: [{
      type: Input
    }],
    sortByRelevance: [{
      type: Input
    }],
    source: [{
      type: Input
    }],
    strict: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    trimDropdown: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    uncheckedTemplate: [{
      type: Input
    }],
    validator: [{
      type: Input
    }],
    visibleRows: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    wordWrap: [{
      type: Input
    }]
  });
})();
var HotTableModule = class _HotTableModule {
  static version = "14.4.0";
  static forRoot() {
    return {
      ngModule: _HotTableModule,
      providers: [HotTableRegisterer]
    };
  }
  static ɵfac = function HotTableModule_Factory(t) {
    return new (t || _HotTableModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _HotTableModule,
    declarations: [HotTableComponent, HotColumnComponent],
    exports: [HotTableComponent, HotColumnComponent]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HotTableModule, [{
    type: NgModule,
    args: [{
      declarations: [HotTableComponent, HotColumnComponent],
      exports: [HotTableComponent, HotColumnComponent]
    }]
  }], null, null);
})();
export {
  HOT_DESTROYED_WARNING,
  HotColumnComponent,
  HotSettingsResolver,
  HotTableComponent,
  HotTableModule,
  HotTableRegisterer
};
/*! Bundled license information:

handsontable/i18n/languages/en-US.mjs:
  (**
   * @preserve
   * Authors: Handsoncode
   * Last updated: Nov 15, 2017
   *
   * Description: Definition file for English - United States language-country.
   *)
*/
//# sourceMappingURL=@handsontable_angular.js.map
