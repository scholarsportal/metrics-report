import {
  __commonJS
} from "./chunk-XEBHCIPT.js";

// node_modules/patternomaly/dist/patternomaly.js
var require_patternomaly = __commonJS({
  "node_modules/patternomaly/dist/patternomaly.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.pattern = factory();
    })(exports, function() {
      "use strict";
      var BACKGROUND_COLOR = "rgba(100, 100, 100, 0.7)";
      var PATTERN_COLOR = "rgba(255, 255, 255, 0.8)";
      var POINT_STYLE = "round";
      var asyncGenerator = function() {
        function AwaitValue(value) {
          this.value = value;
        }
        function AsyncGenerator(gen) {
          var front, back;
          function send(key, arg) {
            return new Promise(function(resolve, reject) {
              var request = {
                key,
                arg,
                resolve,
                reject,
                next: null
              };
              if (back) {
                back = back.next = request;
              } else {
                front = back = request;
                resume(key, arg);
              }
            });
          }
          function resume(key, arg) {
            try {
              var result = gen[key](arg);
              var value = result.value;
              if (value instanceof AwaitValue) {
                Promise.resolve(value.value).then(function(arg2) {
                  resume("next", arg2);
                }, function(arg2) {
                  resume("throw", arg2);
                });
              } else {
                settle(result.done ? "return" : "normal", result.value);
              }
            } catch (err) {
              settle("throw", err);
            }
          }
          function settle(type, value) {
            switch (type) {
              case "return":
                front.resolve({
                  value,
                  done: true
                });
                break;
              case "throw":
                front.reject(value);
                break;
              default:
                front.resolve({
                  value,
                  done: false
                });
                break;
            }
            front = front.next;
            if (front) {
              resume(front.key, front.arg);
            } else {
              back = null;
            }
          }
          this._invoke = send;
          if (typeof gen.return !== "function") {
            this.return = void 0;
          }
        }
        if (typeof Symbol === "function" && Symbol.asyncIterator) {
          AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
            return this;
          };
        }
        AsyncGenerator.prototype.next = function(arg) {
          return this._invoke("next", arg);
        };
        AsyncGenerator.prototype.throw = function(arg) {
          return this._invoke("throw", arg);
        };
        AsyncGenerator.prototype.return = function(arg) {
          return this._invoke("return", arg);
        };
        return {
          wrap: function(fn) {
            return function() {
              return new AsyncGenerator(fn.apply(this, arguments));
            };
          },
          await: function(value) {
            return new AwaitValue(value);
          }
        };
      }();
      var classCallCheck = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
      var createClass = /* @__PURE__ */ function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      };
      var possibleConstructorReturn = function(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      };
      var Shape = function() {
        function Shape2() {
          var size = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 20;
          var backgroundColor = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : BACKGROUND_COLOR;
          var patternColor = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : PATTERN_COLOR;
          classCallCheck(this, Shape2);
          this._canvas = document.createElement("canvas");
          this._context = this._canvas.getContext("2d");
          this._canvas.width = size;
          this._canvas.height = size;
          this._context.fillStyle = backgroundColor;
          this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
          this._size = size;
          this._patternColor = patternColor;
          return this;
        }
        createClass(Shape2, [{
          key: "setStrokeProps",
          value: function setStrokeProps() {
            this._context.strokeStyle = this._patternColor;
            this._context.lineWidth = this._size / 10;
            this._context.lineJoin = POINT_STYLE;
            this._context.lineCap = POINT_STYLE;
          }
        }, {
          key: "setFillProps",
          value: function setFillProps() {
            this._context.fillStyle = this._patternColor;
          }
        }]);
        return Shape2;
      }();
      var Plus = function(_Shape) {
        inherits(Plus2, _Shape);
        function Plus2() {
          classCallCheck(this, Plus2);
          return possibleConstructorReturn(this, (Plus2.__proto__ || Object.getPrototypeOf(Plus2)).apply(this, arguments));
        }
        createClass(Plus2, [{
          key: "drawTile",
          value: function drawTile() {
            var halfSize = this._size / 2;
            this._context.beginPath();
            this.setStrokeProps();
            this.drawPlus();
            this.drawPlus(halfSize, halfSize);
            this._context.stroke();
            return this._canvas;
          }
        }, {
          key: "drawPlus",
          value: function drawPlus() {
            var offsetX = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            var offsetY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            var size = this._size;
            var halfSize = size / 2;
            var quarterSize = size / 4;
            this._context.moveTo(quarterSize + offsetX, 0 + offsetY);
            this._context.lineTo(quarterSize + offsetX, halfSize + offsetY);
            this._context.moveTo(0 + offsetX, quarterSize + offsetY);
            this._context.lineTo(halfSize + offsetX, quarterSize + offsetY);
            this._context.closePath();
          }
        }]);
        return Plus2;
      }(Shape);
      var Cross = function(_Shape) {
        inherits(Cross2, _Shape);
        function Cross2() {
          classCallCheck(this, Cross2);
          return possibleConstructorReturn(this, (Cross2.__proto__ || Object.getPrototypeOf(Cross2)).apply(this, arguments));
        }
        createClass(Cross2, [{
          key: "drawTile",
          value: function drawTile() {
            var halfSize = this._size / 2;
            this._context.beginPath();
            this.setStrokeProps();
            this.drawCross();
            this.drawCross(halfSize, halfSize);
            this._context.stroke();
            return this._canvas;
          }
        }, {
          key: "drawCross",
          value: function drawCross() {
            var offsetX = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            var offsetY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            var size = this._size;
            var halfSize = size / 2;
            var gap = 2;
            this._context.moveTo(offsetX + gap, offsetY + gap);
            this._context.lineTo(halfSize - gap + offsetX, halfSize - gap + offsetY);
            this._context.moveTo(offsetX + gap, halfSize - gap + offsetY);
            this._context.lineTo(halfSize - gap + offsetX, offsetY + gap);
            this._context.closePath();
          }
        }]);
        return Cross2;
      }(Shape);
      var Dash = function(_Shape) {
        inherits(Dash2, _Shape);
        function Dash2() {
          classCallCheck(this, Dash2);
          return possibleConstructorReturn(this, (Dash2.__proto__ || Object.getPrototypeOf(Dash2)).apply(this, arguments));
        }
        createClass(Dash2, [{
          key: "drawTile",
          value: function drawTile() {
            var halfSize = this._size / 2;
            this._context.beginPath();
            this.setStrokeProps();
            this.drawDash();
            this.drawDash(halfSize, halfSize);
            this._context.stroke();
            return this._canvas;
          }
        }, {
          key: "drawDash",
          value: function drawDash() {
            var offsetX = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            var offsetY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            var size = this._size;
            var halfSize = size / 2;
            var gap = 2;
            this._context.moveTo(offsetX + gap, offsetY + gap);
            this._context.lineTo(halfSize - gap + offsetX, halfSize - gap + offsetY);
            this._context.closePath();
          }
        }]);
        return Dash2;
      }(Shape);
      var CrossDash = function(_Shape) {
        inherits(CrossDash2, _Shape);
        function CrossDash2() {
          classCallCheck(this, CrossDash2);
          return possibleConstructorReturn(this, (CrossDash2.__proto__ || Object.getPrototypeOf(CrossDash2)).apply(this, arguments));
        }
        createClass(CrossDash2, [{
          key: "drawTile",
          value: function drawTile() {
            var halfSize = this._size / 2;
            this._context.beginPath();
            this.setStrokeProps();
            var cross = new Cross();
            cross.drawCross.call(this);
            var dash = new Dash();
            dash.drawDash.call(this, halfSize, halfSize);
            this._context.stroke();
            return this._canvas;
          }
        }]);
        return CrossDash2;
      }(Shape);
      var Dot = function(_Shape) {
        inherits(Dot2, _Shape);
        function Dot2() {
          classCallCheck(this, Dot2);
          return possibleConstructorReturn(this, (Dot2.__proto__ || Object.getPrototypeOf(Dot2)).apply(this, arguments));
        }
        createClass(Dot2, [{
          key: "drawTile",
          value: function drawTile() {
            var halfSize = this._size / 2;
            this._context.beginPath();
            this.setFillProps();
            this.drawDot();
            this.drawDot(halfSize, halfSize);
            this._context.fill();
            return this._canvas;
          }
        }, {
          key: "drawDot",
          value: function drawDot() {
            var offsetX = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            var offsetY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            var diameter = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this._size / 10;
            var size = this._size;
            var quarterSize = size / 4;
            var x = quarterSize + offsetX;
            var y = quarterSize + offsetY;
            this._context.moveTo(x + quarterSize, y);
            this._context.arc(x, y, diameter, 0, 2 * Math.PI);
            this._context.closePath();
          }
        }]);
        return Dot2;
      }(Shape);
      var DotDash = function(_Shape) {
        inherits(DotDash2, _Shape);
        function DotDash2() {
          classCallCheck(this, DotDash2);
          return possibleConstructorReturn(this, (DotDash2.__proto__ || Object.getPrototypeOf(DotDash2)).apply(this, arguments));
        }
        createClass(DotDash2, [{
          key: "drawTile",
          value: function drawTile() {
            var halfSize = this._size / 2;
            this._context.beginPath();
            this.setStrokeProps();
            var dash = new Dash();
            dash.drawDash.call(this, halfSize, halfSize);
            this._context.closePath();
            this._context.stroke();
            this.setFillProps();
            var dot = new Dot();
            dot.drawDot.call(this);
            this._context.fill();
            return this._canvas;
          }
        }]);
        return DotDash2;
      }(Shape);
      var Disc = function(_Dot) {
        inherits(Disc2, _Dot);
        function Disc2() {
          classCallCheck(this, Disc2);
          return possibleConstructorReturn(this, (Disc2.__proto__ || Object.getPrototypeOf(Disc2)).apply(this, arguments));
        }
        createClass(Disc2, [{
          key: "drawTile",
          value: function drawTile() {
            var halfSize = this._size / 2;
            var diameter = this._size / 5;
            this._context.beginPath();
            this.setFillProps();
            this.drawDot(0, 0, diameter);
            this.drawDot(halfSize, halfSize, diameter);
            this._context.fill();
            return this._canvas;
          }
        }]);
        return Disc2;
      }(Dot);
      var Ring = function(_Dot) {
        inherits(Ring2, _Dot);
        function Ring2() {
          classCallCheck(this, Ring2);
          return possibleConstructorReturn(this, (Ring2.__proto__ || Object.getPrototypeOf(Ring2)).apply(this, arguments));
        }
        createClass(Ring2, [{
          key: "drawTile",
          value: function drawTile() {
            var halfSize = this._size / 2;
            var diameter = this._size / 5;
            this._context.beginPath();
            this.setStrokeProps();
            this.drawDot(0, 0, diameter);
            this.drawDot(halfSize, halfSize, diameter);
            this._context.stroke();
            return this._canvas;
          }
        }]);
        return Ring2;
      }(Dot);
      var Line = function(_Shape) {
        inherits(Line2, _Shape);
        function Line2() {
          classCallCheck(this, Line2);
          return possibleConstructorReturn(this, (Line2.__proto__ || Object.getPrototypeOf(Line2)).apply(this, arguments));
        }
        createClass(Line2, [{
          key: "drawTile",
          value: function drawTile() {
            var halfSize = this._size / 2;
            this._context.beginPath();
            this.setStrokeProps();
            this.drawLine();
            this.drawLine(halfSize, halfSize);
            this._context.stroke();
            return this._canvas;
          }
        }, {
          key: "drawLine",
          value: function drawLine() {
            var offsetX = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            var offsetY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            var size = this._size;
            var quarterSize = size / 4;
            this._context.moveTo(0, quarterSize + offsetY);
            this._context.lineTo(this._size, quarterSize + offsetY);
            this._context.closePath();
          }
        }]);
        return Line2;
      }(Shape);
      var VerticalLine = function(_Line) {
        inherits(VerticalLine2, _Line);
        function VerticalLine2() {
          classCallCheck(this, VerticalLine2);
          return possibleConstructorReturn(this, (VerticalLine2.__proto__ || Object.getPrototypeOf(VerticalLine2)).apply(this, arguments));
        }
        createClass(VerticalLine2, [{
          key: "drawTile",
          value: function drawTile() {
            this._context.translate(this._size, 0);
            this._context.rotate(90 * Math.PI / 180);
            Line.prototype.drawTile.call(this);
            return this._canvas;
          }
        }]);
        return VerticalLine2;
      }(Line);
      var Weave = function(_Shape) {
        inherits(Weave2, _Shape);
        function Weave2() {
          classCallCheck(this, Weave2);
          return possibleConstructorReturn(this, (Weave2.__proto__ || Object.getPrototypeOf(Weave2)).apply(this, arguments));
        }
        createClass(Weave2, [{
          key: "drawTile",
          value: function drawTile() {
            this._context.beginPath();
            this.setStrokeProps();
            this.drawWeave(0, 0);
            this._context.stroke();
            return this._canvas;
          }
        }, {
          key: "drawWeave",
          value: function drawWeave(offsetX, offsetY) {
            var size = this._size;
            var halfSize = size / 2;
            this._context.moveTo(offsetX + 1, offsetY + 1);
            this._context.lineTo(halfSize - 1, halfSize - 1);
            this._context.moveTo(halfSize + 1, size - 1);
            this._context.lineTo(size - 1, halfSize + 1);
            this._context.closePath();
          }
        }]);
        return Weave2;
      }(Shape);
      var Zigzag = function(_Shape) {
        inherits(Zigzag2, _Shape);
        function Zigzag2() {
          classCallCheck(this, Zigzag2);
          return possibleConstructorReturn(this, (Zigzag2.__proto__ || Object.getPrototypeOf(Zigzag2)).apply(this, arguments));
        }
        createClass(Zigzag2, [{
          key: "drawTile",
          value: function drawTile() {
            this._context.beginPath();
            this.setStrokeProps();
            this.drawZigzag();
            this.drawZigzag(this._size / 2);
            this._context.stroke();
            return this._canvas;
          }
        }, {
          key: "drawZigzag",
          value: function drawZigzag() {
            var offsetY = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            var size = this._size;
            var quarterSize = size / 4;
            var halfSize = size / 2;
            var tenthSize = size / 10;
            this._context.moveTo(0, tenthSize + offsetY);
            this._context.lineTo(quarterSize, halfSize - tenthSize + offsetY);
            this._context.lineTo(halfSize, tenthSize + offsetY);
            this._context.lineTo(size - quarterSize, halfSize - tenthSize + offsetY);
            this._context.lineTo(size, tenthSize + offsetY);
          }
        }]);
        return Zigzag2;
      }(Shape);
      var ZigzagVertical = function(_Zigzag) {
        inherits(ZigzagVertical2, _Zigzag);
        function ZigzagVertical2() {
          classCallCheck(this, ZigzagVertical2);
          return possibleConstructorReturn(this, (ZigzagVertical2.__proto__ || Object.getPrototypeOf(ZigzagVertical2)).apply(this, arguments));
        }
        createClass(ZigzagVertical2, [{
          key: "drawTile",
          value: function drawTile() {
            this._context.translate(this._size, 0);
            this._context.rotate(90 * Math.PI / 180);
            Zigzag.prototype.drawTile.call(this);
            return this._canvas;
          }
        }]);
        return ZigzagVertical2;
      }(Zigzag);
      var Diagonal = function(_Shape) {
        inherits(Diagonal2, _Shape);
        function Diagonal2() {
          classCallCheck(this, Diagonal2);
          return possibleConstructorReturn(this, (Diagonal2.__proto__ || Object.getPrototypeOf(Diagonal2)).apply(this, arguments));
        }
        createClass(Diagonal2, [{
          key: "drawTile",
          value: function drawTile() {
            var halfSize = this._size / 2;
            this._context.beginPath();
            this.setStrokeProps();
            this.drawDiagonalLine();
            this.drawDiagonalLine(halfSize, halfSize);
            this._context.stroke();
            return this._canvas;
          }
        }, {
          key: "drawDiagonalLine",
          value: function drawDiagonalLine() {
            var offsetX = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            var offsetY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            var size = this._size;
            var halfSize = size / 2;
            var gap = 1;
            this._context.moveTo(halfSize - gap - offsetX, gap * -1 + offsetY);
            this._context.lineTo(size + 1 - offsetX, halfSize + 1 + offsetY);
            this._context.closePath();
          }
        }]);
        return Diagonal2;
      }(Shape);
      var DiagonalRightLeft = function(_Diagonal) {
        inherits(DiagonalRightLeft2, _Diagonal);
        function DiagonalRightLeft2() {
          classCallCheck(this, DiagonalRightLeft2);
          return possibleConstructorReturn(this, (DiagonalRightLeft2.__proto__ || Object.getPrototypeOf(DiagonalRightLeft2)).apply(this, arguments));
        }
        createClass(DiagonalRightLeft2, [{
          key: "drawTile",
          value: function drawTile() {
            this._context.translate(this._size, 0);
            this._context.rotate(90 * Math.PI / 180);
            Diagonal.prototype.drawTile.call(this);
            return this._canvas;
          }
        }]);
        return DiagonalRightLeft2;
      }(Diagonal);
      var Square = function(_Shape) {
        inherits(Square2, _Shape);
        function Square2() {
          classCallCheck(this, Square2);
          return possibleConstructorReturn(this, (Square2.__proto__ || Object.getPrototypeOf(Square2)).apply(this, arguments));
        }
        createClass(Square2, [{
          key: "drawTile",
          value: function drawTile() {
            var halfSize = this._size / 2;
            this._context.beginPath();
            this.setFillProps();
            this.drawSquare();
            this.drawSquare(halfSize, halfSize);
            this._context.fill();
            return this._canvas;
          }
        }, {
          key: "drawSquare",
          value: function drawSquare() {
            var offsetX = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            var offsetY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            var size = this._size;
            var halfSize = size / 2;
            var gap = size / 20;
            this._context.fillRect(offsetX + gap, offsetY + gap, halfSize - gap * 2, halfSize - gap * 2);
            this._context.closePath();
          }
        }]);
        return Square2;
      }(Shape);
      var Box = function(_Shape) {
        inherits(Box2, _Shape);
        function Box2() {
          classCallCheck(this, Box2);
          return possibleConstructorReturn(this, (Box2.__proto__ || Object.getPrototypeOf(Box2)).apply(this, arguments));
        }
        createClass(Box2, [{
          key: "drawTile",
          value: function drawTile() {
            var halfSize = this._size / 2;
            this._context.beginPath();
            this.setStrokeProps();
            this.drawBox();
            this.drawBox(halfSize, halfSize);
            this._context.stroke();
            return this._canvas;
          }
        }, {
          key: "drawBox",
          value: function drawBox() {
            var offsetX = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            var offsetY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            var size = this._size;
            var halfSize = size / 2;
            var gap = size / 20;
            this._context.strokeRect(offsetX + gap, offsetY + gap, halfSize - gap * 4, halfSize - gap * 4);
            this._context.closePath();
          }
        }]);
        return Box2;
      }(Shape);
      var Triangle = function(_Shape) {
        inherits(Triangle2, _Shape);
        function Triangle2() {
          classCallCheck(this, Triangle2);
          return possibleConstructorReturn(this, (Triangle2.__proto__ || Object.getPrototypeOf(Triangle2)).apply(this, arguments));
        }
        createClass(Triangle2, [{
          key: "drawTile",
          value: function drawTile() {
            var halfSize = this._size / 2;
            this._context.beginPath();
            this.setFillProps();
            this.drawTriangle();
            this.drawTriangle(halfSize, halfSize);
            this._context.fill();
            return this._canvas;
          }
        }, {
          key: "drawTriangle",
          value: function drawTriangle() {
            var offsetX = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            var offsetY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            var size = this._size;
            var halfSize = size / 2;
            var quarterSize = size / 4;
            this._context.moveTo(quarterSize + offsetX, offsetY);
            this._context.lineTo(halfSize + offsetX, halfSize + offsetY);
            this._context.lineTo(offsetX, halfSize + offsetY);
            this._context.closePath();
          }
        }]);
        return Triangle2;
      }(Shape);
      var TriangleVertical = function(_Triangle) {
        inherits(TriangleVertical2, _Triangle);
        function TriangleVertical2() {
          classCallCheck(this, TriangleVertical2);
          return possibleConstructorReturn(this, (TriangleVertical2.__proto__ || Object.getPrototypeOf(TriangleVertical2)).apply(this, arguments));
        }
        createClass(TriangleVertical2, [{
          key: "drawTile",
          value: function drawTile() {
            var size = this._size;
            this._context.translate(size, size);
            this._context.rotate(180 * Math.PI / 180);
            Triangle.prototype.drawTile.call(this);
            return this._canvas;
          }
        }]);
        return TriangleVertical2;
      }(Triangle);
      var Diamond = function(_Shape) {
        inherits(Diamond2, _Shape);
        function Diamond2() {
          classCallCheck(this, Diamond2);
          return possibleConstructorReturn(this, (Diamond2.__proto__ || Object.getPrototypeOf(Diamond2)).apply(this, arguments));
        }
        createClass(Diamond2, [{
          key: "drawTile",
          value: function drawTile() {
            var halfSize = this._size / 2;
            this._context.beginPath();
            this.setFillProps();
            this.drawDiamond();
            this.drawDiamond(halfSize, halfSize);
            this._context.fill();
            return this._canvas;
          }
        }, {
          key: "drawDiamond",
          value: function drawDiamond() {
            var offsetX = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            var offsetY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            var size = this._size;
            var halfSize = size / 2;
            var quarterSize = size / 4;
            this._context.moveTo(quarterSize + offsetX, offsetY);
            this._context.lineTo(halfSize + offsetX, quarterSize + offsetY);
            this._context.lineTo(quarterSize + offsetX, halfSize + offsetY);
            this._context.lineTo(offsetX, quarterSize + offsetY);
            this._context.closePath();
          }
        }]);
        return Diamond2;
      }(Shape);
      var DiamondBox = function(_Diamond) {
        inherits(DiamondBox2, _Diamond);
        function DiamondBox2() {
          classCallCheck(this, DiamondBox2);
          return possibleConstructorReturn(this, (DiamondBox2.__proto__ || Object.getPrototypeOf(DiamondBox2)).apply(this, arguments));
        }
        createClass(DiamondBox2, [{
          key: "drawTile",
          value: function drawTile() {
            var halfSize = this._size / 2;
            this._context.beginPath();
            this.setStrokeProps();
            this.drawDiamond();
            this.drawDiamond(halfSize, halfSize);
            this._context.stroke();
            return this._canvas;
          }
        }, {
          key: "drawDiamond",
          value: function drawDiamond() {
            var offsetX = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            var offsetY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            var size = this._size;
            var halfSize = size / 2 - 1;
            var quarterSize = size / 4;
            this._context.moveTo(quarterSize + offsetX, offsetY + 1);
            this._context.lineTo(halfSize + offsetX, quarterSize + offsetY);
            this._context.lineTo(quarterSize + offsetX, halfSize + offsetY);
            this._context.lineTo(offsetX + 1, quarterSize + offsetY);
            this._context.closePath();
          }
        }]);
        return DiamondBox2;
      }(Diamond);
      var shapes = {
        "plus": Plus,
        "cross": Cross,
        "dash": Dash,
        "cross-dash": CrossDash,
        "dot": Dot,
        "dot-dash": DotDash,
        "disc": Disc,
        "ring": Ring,
        "line": Line,
        "line-vertical": VerticalLine,
        "weave": Weave,
        "zigzag": Zigzag,
        "zigzag-vertical": ZigzagVertical,
        "diagonal": Diagonal,
        "diagonal-right-left": DiagonalRightLeft,
        "square": Square,
        "box": Box,
        "triangle": Triangle,
        "triangle-inverted": TriangleVertical,
        "diamond": Diamond,
        "diamond-box": DiamondBox
      };
      var deprecatedShapes = {
        "circle": shapes["disc"],
        "triangle-vertical": shapes["triangle-inverted"],
        "line-horizontal": shapes["line"],
        "line-diagonal-lr": shapes["diagonal"],
        "line-diagonal-rl": shapes["diagonal-right-left"],
        "zigzag-horizontal": shapes["zigzag"],
        "diamond-outline": shapes["diamond-box"]
      };
      var completeShapesList = [];
      function getRandomShape() {
        var excludedShapeTypes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        var shapesList = Object.keys(shapes);
        excludedShapeTypes.forEach(function(shapeType) {
          shapesList.splice(shapesList.indexOf(shapeType), 1);
        });
        var randomIndex = Math.floor(Math.random() * shapesList.length);
        return shapesList[randomIndex];
      }
      _extends(completeShapesList, shapes, deprecatedShapes);
      function draw() {
        var shapeType = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "square";
        var backgroundColor = arguments[1];
        var patternColor = arguments[2];
        var size = arguments[3];
        var patternCanvas = document.createElement("canvas");
        var patternContext = patternCanvas.getContext("2d");
        var outerSize = size * 2;
        var Shape2 = completeShapesList[shapeType];
        var shape = new Shape2(size, backgroundColor, patternColor);
        var pattern2 = patternContext.createPattern(shape.drawTile(), "repeat");
        patternCanvas.width = outerSize;
        patternCanvas.height = outerSize;
        pattern2.shapeType = shapeType;
        return pattern2;
      }
      function generate(colorList) {
        var firstShapeType = void 0;
        var previousShapeType = void 0;
        return colorList.map(function(color, index, list) {
          var shapeType = void 0;
          if (index === 0) {
            shapeType = getRandomShape();
            previousShapeType = shapeType;
            firstShapeType = previousShapeType;
          } else if (index === list.length - 1) {
            shapeType = getRandomShape([previousShapeType, firstShapeType]);
          } else {
            shapeType = getRandomShape([previousShapeType]);
            previousShapeType = shapeType;
          }
          return draw(shapeType, color);
        });
      }
      var pattern = {
        draw,
        generate
      };
      return pattern;
    });
  }
});
export default require_patternomaly();
//# sourceMappingURL=patternomaly.js.map
