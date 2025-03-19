'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var react = require('@emotion/react');
var jsxRuntime = require('@emotion/react/jsx-runtime');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _templateObject$2;
function applyResponsiveCss(atomicFunction) {
  return function responsiveCss(responsiveProp) {
    if (Array.isArray(responsiveProp)) {
      var _responsiveProp = _slicedToArray(responsiveProp, 2),
          defaultValue = _responsiveProp[0],
          responsiveValues = _responsiveProp[1];

      var defaultStyle = atomicFunction(defaultValue);
      var responsiveStyles = Object.entries(responsiveValues).sort(function (a, b) {
        return +b[0] - +a[0];
      }).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        return react.css(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n              @media screen and (max-width: ", "px) {\n                ", ";\n              }\n            "])), key, atomicFunction(value));
      });
      return [defaultStyle, responsiveStyles];
    }

    return atomicFunction(responsiveProp);
  };
}

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
var row = react.css(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var rowWrap = function rowWrap(wrap) {
  return react.css(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  flex-wrap: ", ";\n"])), wrap ? "wrap" : "nowrap");
};
var rowAlign = applyResponsiveCss(function (align) {
  var cssAlign = align === "start" || align === "end" ? "flex-".concat(align) : align;
  return react.css(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n    align-items: ", ";\n  "])), cssAlign);
});
var rowGap = applyResponsiveCss(function (gap) {
  return gap === "spaceBetween" ? react.css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        justify-content: space-between;\n      "]))) : react.css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin-left: ", "px;\n      "])), -gap);
});
var rowVGap = applyResponsiveCss(function (vGap) {
  return !vGap ? null : react.css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-top: ", "px;\n      "])), -vGap);
});
var wrapBefore = function wrapBefore(screenSize) {
  return react.css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  @media screen and (max-width: ", "px) {\n    flex-direction: column;\n  }\n"])), screenSize);
};
var box = react.css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n\n  & > * {\n    flex: 1;\n  }\n"])));
var boxGap = applyResponsiveCss(function (gap) {
  return gap === "spaceBetween" ? null : react.css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        margin-left: ", "px;\n      "])), gap);
});
var boxVGap = applyResponsiveCss(function (vGap) {
  return react.css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    margin-top: ", "px;\n  "])), vGap);
});

function Row(_ref) {
  var gap = _ref.gap,
      vGap = _ref.vGap,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? "start" : _ref$align,
      _ref$wrap = _ref.wrap,
      wrap = _ref$wrap === void 0 ? true : _ref$wrap,
      wrapBefore$1 = _ref.wrapBefore,
      children = _ref.children;
  return jsxRuntime.jsx("div", {
    css: [row, rowWrap(wrap), rowAlign(align), rowGap(gap), rowVGap(vGap), !wrapBefore$1 ? null : wrapBefore(wrapBefore$1)],
    children: React__default['default'].Children.map(children, function (child, index) {
      return !child ? null : jsxRuntime.jsx("div", {
        css: [box, boxGap(gap), boxVGap(vGap)],
        children: child
      }, index);
    })
  });
}

var _templateObject, _templateObject2, _templateObject3;
var stack = react.css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-rows: auto;\n\n  & > * {\n    min-width: 0;\n  }\n"])));
var align = applyResponsiveCss(function (alignValue) {
  var cssAlign = alignValue === "start" || alignValue === "end" ? "flex-".concat(alignValue) : alignValue;
  return react.css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    justify-items: ", ";\n  "])), cssAlign);
});
var stackGap = applyResponsiveCss(function (gap) {
  return react.css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    row-gap: ", "px;\n  "])), gap);
});

function Stack(_ref) {
  var gap = _ref.gap,
      _ref$align = _ref.align,
      align$1 = _ref$align === void 0 ? "center" : _ref$align,
      children = _ref.children;
  return jsxRuntime.jsx("div", {
    css: [stack, align(align$1), stackGap(gap)],
    children: children
  });
}

exports.Row = Row;
exports.Stack = Stack;
//# sourceMappingURL=index.js.map
