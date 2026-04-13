import "core-js/modules/es.error.cause.js";
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { addClass, outerWidth, outerHeight } from "../../helpers/dom/element.mjs";
/**
 * Comment editor for the Comments plugin.
 *
 * @private
 * @class CommentEditor
 */
class CommentEditor {
  static get CLASS_EDITOR_CONTAINER() {
    return 'htCommentsContainer';
  }
  static get CLASS_EDITOR() {
    return 'htComments';
  }
  static get CLASS_INPUT() {
    return 'htCommentTextArea';
  }
  static get CLASS_CELL() {
    return 'htCommentCell';
  }

  /**
   * @type {HTMLDocument}
   */

  constructor(rootDocument, isRtl) {
    _defineProperty(this, "rootDocument", void 0);
    /**
     * @type {boolean}
     */
    _defineProperty(this, "isRtl", false);
    /**
     * @type {HTMLElement}
     */
    _defineProperty(this, "container", null);
    /**
     * @type {HTMLElement}
     */
    _defineProperty(this, "editor", void 0);
    /**
     * @type {CSSStyleDeclaration}
     */
    _defineProperty(this, "editorStyle", void 0);
    /**
     * @type {boolean}
     */
    _defineProperty(this, "hidden", true);
    this.rootDocument = rootDocument;
    this.isRtl = isRtl;
    this.editor = this.createEditor();
    this.editorStyle = this.editor.style;
    this.hide();
  }

  /**
   * Set position of the comments editor according to the  provided x and y coordinates.
   *
   * @param {number} x X position (in pixels).
   * @param {number} y Y position (in pixels).
   */
  setPosition(x, y) {
    this.editorStyle.left = `${x}px`;
    this.editorStyle.top = `${y}px`;
  }

  /**
   * Set the editor size according to the provided arguments.
   *
   * @param {number} width Width in pixels.
   * @param {number} height Height in pixels.
   */
  setSize(width, height) {
    if (width && height) {
      const input = this.getInputElement();
      input.style.width = `${width}px`;
      input.style.height = `${height}px`;
    }
  }

  /**
   * Returns the size of the comments editor.
   *
   * @returns {{ width: number, height: number }}
   */
  getSize() {
    return {
      width: outerWidth(this.getInputElement()),
      height: outerHeight(this.getInputElement())
    };
  }

  /**
   * Reset the editor size to its initial state.
   */
  resetSize() {
    const input = this.getInputElement();
    input.style.width = '';
    input.style.height = '';
  }

  /**
   * Set the read-only state for the comments editor.
   *
   * @param {boolean} state The new read only state.
   */
  setReadOnlyState(state) {
    const input = this.getInputElement();
    input.readOnly = state;
  }

  /**
   * Show the comments editor.
   */
  show() {
    this.editorStyle.display = 'block';
    this.hidden = false;
  }

  /**
   * Hide the comments editor.
   */
  hide() {
    if (!this.hidden) {
      this.editorStyle.display = 'none';
    }
    this.hidden = true;
  }

  /**
   * Checks if the editor is visible.
   *
   * @returns {boolean}
   */
  isVisible() {
    return this.editorStyle.display === 'block';
  }

  /**
   * Set the comment value.
   *
   * @param {string} [value] The value to use.
   */
  setValue() {
    let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    const comment = value || '';
    this.getInputElement().value = comment;
  }

  /**
   * Get the comment value.
   *
   * @returns {string}
   */
  getValue() {
    return this.getInputElement().value;
  }

  /**
   * Checks if the comment input element is focused.
   *
   * @returns {boolean}
   */
  isFocused() {
    return this.rootDocument.activeElement === this.getInputElement();
  }

  /**
   * Focus the comments input element.
   */
  focus() {
    this.getInputElement().focus();
  }

  /**
   * Create the `textarea` to be used as a comments editor.
   *
   * @returns {HTMLElement}
   */
  createEditor() {
    const editor = this.rootDocument.createElement('div');
    const textArea = this.rootDocument.createElement('textarea');
    editor.style.display = 'none';
    this.container = this.rootDocument.createElement('div');
    this.container.setAttribute('dir', this.isRtl ? 'rtl' : 'ltr');
    addClass(this.container, CommentEditor.CLASS_EDITOR_CONTAINER);
    this.rootDocument.body.appendChild(this.container);
    addClass(editor, CommentEditor.CLASS_EDITOR);
    addClass(textArea, CommentEditor.CLASS_INPUT);
    textArea.setAttribute('data-hot-input', true);
    editor.appendChild(textArea);
    this.container.appendChild(editor);
    return editor;
  }

  /**
   * Get the input element.
   *
   * @returns {HTMLElement}
   */
  getInputElement() {
    return this.editor.querySelector(`.${CommentEditor.CLASS_INPUT}`);
  }

  /**
   * Destroy the comments editor.
   */
  destroy() {
    const containerParentElement = this.container ? this.container.parentNode : null;
    this.editor.parentNode.removeChild(this.editor);
    this.editor = null;
    this.editorStyle = null;
    if (containerParentElement) {
      containerParentElement.removeChild(this.container);
    }
  }
}
export default CommentEditor;