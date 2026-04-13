"use strict";

exports.__esModule = true;
/**
 * Render type calculation calculates how many DOM nodes should be created and where placed
 * based on `startRow` and `endRow` properties.
 *
 * @type {number}
 */
const RENDER_TYPE = exports.RENDER_TYPE = 1;
/**
 * Fully visible type calculation calculates rows that are fully visible in the viewport.
 * This type of calculation is used in scrolling by arrow keys navigation.
 *
 * @type {number}
 */
const FULLY_VISIBLE_TYPE = exports.FULLY_VISIBLE_TYPE = 2;
/**
 * Partially visible type calculation calculates rows that are fully and partially visible in
 * the viewport. This type of calculation is used to check `endRow` (or `startRow`) with properties
 * calculated in render calculator. If checking met the criteria slow render is
 * performed (which render calculator with new data).
 *
 * @type {number}
 */
const PARTIALLY_VISIBLE_TYPE = exports.PARTIALLY_VISIBLE_TYPE = 3;