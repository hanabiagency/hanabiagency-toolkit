import React from 'react';
import { css } from '@emotion/react';
import { jsx } from '@emotion/react/jsx-runtime';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

function applyResponsiveCss(atomicFunction) {
  return function responsiveCss(responsiveProp) {
    if (Array.isArray(responsiveProp)) {
      var defaultValue = responsiveProp[0],
          responsiveValues = responsiveProp[1];
      var defaultStyle = atomicFunction(defaultValue);
      var responsiveStyles = Object.entries(responsiveValues).sort(function (a, b) {
        return +b[0] - +a[0];
      }).map(function (_a) {
        var key = _a[0],
            value = _a[1];
        return css(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n              @media screen and (max-width: ", "px) {\n                ", ";\n              }\n            "], ["\n              @media screen and (max-width: ", "px) {\n                ", ";\n              }\n            "])), key, atomicFunction(value));
      });
      return [defaultStyle, responsiveStyles];
    }

    return atomicFunction(responsiveProp);
  };
}
var templateObject_1$2;

var row = css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var rowWrap = function rowWrap(wrap) {
  return css(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex-wrap: ", ";\n"], ["\n  flex-wrap: ", ";\n"])), wrap ? "wrap" : "nowrap");
};
var rowAlign = applyResponsiveCss(function (align) {
  var cssAlign = align === "start" || align === "end" ? "flex-" + align : align;
  return css(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n    align-items: ", ";\n  "], ["\n    align-items: ", ";\n  "])), cssAlign);
});
var rowGap = applyResponsiveCss(function (gap) {
  return gap === "spaceBetween" ? css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        justify-content: space-between;\n      "], ["\n        justify-content: space-between;\n      "]))) : css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        margin-left: ", "px;\n      "], ["\n        margin-left: ", "px;\n      "])), -gap);
});
var rowVGap = applyResponsiveCss(function (vGap) {
  return !vGap ? null : css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        margin-top: ", "px;\n      "], ["\n        margin-top: ", "px;\n      "])), -vGap);
});
var wrapBefore = function wrapBefore(screenSize) {
  return css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  @media screen and (max-width: ", "px) {\n    flex-direction: column;\n  }\n"], ["\n  @media screen and (max-width: ", "px) {\n    flex-direction: column;\n  }\n"])), screenSize);
};
var box = css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n\n  & > * {\n    flex: 1;\n  }\n"], ["\n  display: flex;\n\n  & > * {\n    flex: 1;\n  }\n"])));
var boxGap = applyResponsiveCss(function (gap) {
  return gap === "spaceBetween" ? null : css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n        margin-left: ", "px;\n      "], ["\n        margin-left: ", "px;\n      "])), gap);
});
var boxVGap = applyResponsiveCss(function (vGap) {
  return css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    margin-top: ", "px;\n  "], ["\n    margin-top: ", "px;\n  "])), vGap);
});
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;

function Row(_a) {
  var gap = _a.gap,
      vGap = _a.vGap,
      _b = _a.align,
      align = _b === void 0 ? "start" : _b,
      _c = _a.wrap,
      wrap = _c === void 0 ? true : _c,
      wrapBefore$1 = _a.wrapBefore,
      children = _a.children;
  return jsx("div", {
    css: [row, rowWrap(wrap), rowAlign(align), rowGap(gap), rowVGap(vGap), !wrapBefore$1 ? null : wrapBefore(wrapBefore$1)],
    children: React.Children.map(children, function (child, index) {
      return !child ? null : jsx("div", {
        css: [box, boxGap(gap), boxVGap(vGap)],
        children: child
      }, index);
    })
  });
}

var stack = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-rows: auto;\n\n  & > * {\n    min-width: 0;\n  }\n"], ["\n  display: grid;\n  grid-template-rows: auto;\n\n  & > * {\n    min-width: 0;\n  }\n"])));
var align = applyResponsiveCss(function (alignValue) {
  var cssAlign = alignValue === "start" || alignValue === "end" ? "flex-" + alignValue : alignValue;
  return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    justify-items: ", ";\n  "], ["\n    justify-items: ", ";\n  "])), cssAlign);
});
var stackGap = applyResponsiveCss(function (gap) {
  return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    row-gap: ", "px;\n  "], ["\n    row-gap: ", "px;\n  "])), gap);
});
var templateObject_1, templateObject_2, templateObject_3;

function Stack(_a) {
  var gap = _a.gap,
      _b = _a.align,
      align$1 = _b === void 0 ? "center" : _b,
      children = _a.children;
  return jsx("div", {
    css: [stack, align(align$1), stackGap(gap)],
    children: children
  });
}

export { Row, Stack };
//# sourceMappingURL=index.es.js.map
