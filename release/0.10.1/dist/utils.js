/*
Copyright (c) 2018 Daybrush
@name: @daybrush/utils
license: MIT
author: Daybrush
repository: https://github.com/daybrush/utils
@version 0.10.1
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.utils = factory());
}(this, (function () { 'use strict';

  /**
  * @namespace
  * @name Consts
  */

  /**
  * get string "rgb"
  * @memberof Color
  * @example
  import {RGB} from "@daybrush/utils";

  console.log(RGB); // "rgb"
  */
  var RGB = "rgb";
  /**
  * get string "rgba"
  * @memberof Color
  * @example
  import {RGBA} from "@daybrush/utils";

  console.log(RGBA); // "rgba"
  */

  var RGBA = "rgba";
  /**
  * get string "hsl"
  * @memberof Color
  * @example
  import {HSL} from "@daybrush/utils";

  console.log(HSL); // "hsl"
  */

  var HSL = "hsl";
  /**
  * get string "hsla"
  * @memberof Color
  * @example
  import {HSLA} from "@daybrush/utils";

  console.log(HSLA); // "hsla"
  */

  var HSLA = "hsla";
  /**
  * gets an array of color models.
  * @memberof Color
  * @example
  import {COLOR_MODELS} from "@daybrush/utils";

  console.log(COLOR_MODELS); // ["rgb", "rgba", "hsl", "hsla"];
  */

  var COLOR_MODELS = [RGB, RGBA, HSL, HSLA];
  /**
  * get string "function"
  * @memberof Consts
  * @example
  import {FUNCTION} from "@daybrush/utils";

  console.log(FUNCTION); // "function"
  */

  var FUNCTION = "function";
  /**
  * get string "property"
  * @memberof Consts
  * @example
  import {PROPERTY} from "@daybrush/utils";

  console.log(PROPERTY); // "property"
  */

  var PROPERTY = "property";
  /**
  * get string "array"
  * @memberof Consts
  * @example
  import {ARRAY} from "@daybrush/utils";

  console.log(ARRAY); // "array"
  */

  var ARRAY = "array";
  /**
  * get string "object"
  * @memberof Consts
  * @example
  import {OBJECT} from "@daybrush/utils";

  console.log(OBJECT); // "object"
  */

  var OBJECT = "object";
  /**
  * get string "string"
  * @memberof Consts
  * @example
  import {STRING} from "@daybrush/utils";

  console.log(STRING); // "string"
  */

  var STRING = "string";
  /**
  * get string "number"
  * @memberof Consts
  * @example
  import {NUMBER} from "@daybrush/utils";

  console.log(NUMBER); // "number"
  */

  var NUMBER = "number";
  /**
  * get string "undefined"
  * @memberof Consts
  * @example
  import {UNDEFINED} from "@daybrush/utils";

  console.log(UNDEFINED); // "undefined"
  */

  var UNDEFINED = "undefined";
  /**
  * Check whether the environment is window or node.js.
  * @memberof Consts
  * @example
  import {IS_WINDOW} from "@daybrush/utils";

  console.log(IS_WINDOW); // false in node.js
  console.log(IS_WINDOW); // true in browser
  */

  var IS_WINDOW = typeof window !== UNDEFINED;
  /**
  * Check whether the environment is window or node.js.
  * @memberof Consts
  * @name document
  * @example
  import {IS_WINDOW} from "@daybrush/utils";

  console.log(IS_WINDOW); // false in node.js
  console.log(IS_WINDOW); // true in browser
  */

  var doc = typeof document !== UNDEFINED && document;
  var prefixes = ["webkit", "ms", "moz", "o"];
  /**
   * @namespace CrossBrowser
   */

  /**
  * Get a CSS property with a vendor prefix that supports cross browser.
  * @function
  * @param {string} property - A CSS property
  * @return {string} CSS property with cross-browser vendor prefix
  * @memberof CrossBrowser
  * @example
  import {getCrossBrowserProperty} from "@daybrush/utils";

  console.log(getCrossBrowserProperty("transform")); // "transform", "-ms-transform", "-webkit-transform"
  console.log(getCrossBrowserProperty("filter")); // "filter", "-webkit-filter"
  */

  var getCrossBrowserProperty =
  /*#__PURE__*/
  function (property) {
    if (!doc) {
      return "";
    }

    var styles = (doc.body || doc.documentElement).style;
    var length = prefixes.length;

    if (typeof styles[property] !== UNDEFINED) {
      return property;
    }

    for (var i = 0; i < length; ++i) {
      var name = "-" + prefixes[i] + "-" + property;

      if (typeof styles[name] !== UNDEFINED) {
        return name;
      }
    }

    return "";
  };
  /**
  * get string "transfrom" with the vendor prefix.
  * @memberof CrossBrowser
  * @example
  import {TRANSFORM} from "@daybrush/utils";

  console.log(TRANSFORM); // "transform", "-ms-transform", "-webkit-transform"
  */

  var TRANSFORM =
  /*#__PURE__*/
  getCrossBrowserProperty("transform");
  /**
  * get string "filter" with the vendor prefix.
  * @memberof CrossBrowser
  * @example
  import {FILTER} from "@daybrush/utils";

  console.log(FILTER); // "filter", "-ms-filter", "-webkit-filter"
  */

  var FILTER =
  /*#__PURE__*/
  getCrossBrowserProperty("filter");
  /**
  * get string "animation" with the vendor prefix.
  * @memberof CrossBrowser
  * @example
  import {ANIMATION} from "@daybrush/utils";

  console.log(ANIMATION); // "animation", "-ms-animation", "-webkit-animation"
  */

  var ANIMATION =
  /*#__PURE__*/
  getCrossBrowserProperty("animation");
  /**
  * get string "keyframes" with the vendor prefix.
  * @memberof CrossBrowser
  * @example
  import {KEYFRAMES} from "@daybrush/utils";

  console.log(KEYFRAMES); // "keyframes", "-ms-keyframes", "-webkit-keyframes"
  */

  var KEYFRAMES =
  /*#__PURE__*/
  ANIMATION.replace("animation", "keyframes");

  /**
  * @namespace
  * @name Utils
  */

  /**
   * Returns the inner product of two numbers(`a1`, `a2`) by two criteria(`b1`, `b2`).
   * @memberof Utils
   * @param - The first number
   * @param - The second number
   * @param - The first number to base on the inner product
   * @param - The second number to base on the inner product
   * @return - Returns the inner product
  import { dot } from "@daybrush/utils";

  console.log(dot(0, 15, 2, 3)); // 6
  console.log(dot(5, 15, 2, 3)); // 9
  console.log(dot(5, 15, 1, 1)); // 10
   */

  function dot(a1, a2, b1, b2) {
    return (a1 * b2 + a2 * b1) / (b1 + b2);
  }
  /**
  * Check the type that the value is undefined.
  * @memberof Utils
  * @param {string} value - Value to check the type
  * @return {boolean} true if the type is correct, false otherwise
  * @example
  import {isUndefined} from "@daybrush/utils";

  console.log(isUndefined(undefined)); // true
  console.log(isUndefined("")); // false
  console.log(isUndefined(1)); // false
  console.log(isUndefined(null)); // false
  */

  function isUndefined(value) {
    return typeof value === UNDEFINED;
  }
  /**
  * Check the type that the value is object.
  * @memberof Utils
  * @param {string} value - Value to check the type
  * @return {} true if the type is correct, false otherwise
  * @example
  import {isObject} from "@daybrush/utils";

  console.log(isObject({})); // true
  console.log(isObject(undefined)); // false
  console.log(isObject("")); // false
  console.log(isObject(null)); // false
  */

  function isObject(value) {
    return value && typeof value === OBJECT;
  }
  /**
  * Check the type that the value is isArray.
  * @memberof Utils
  * @param {string} value - Value to check the type
  * @return {} true if the type is correct, false otherwise
  * @example
  import {isArray} from "@daybrush/utils";

  console.log(isArray([])); // true
  console.log(isArray({})); // false
  console.log(isArray(undefined)); // false
  console.log(isArray(null)); // false
  */

  function isArray(value) {
    return Array.isArray(value);
  }
  /**
  * Check the type that the value is string.
  * @memberof Utils
  * @param {string} value - Value to check the type
  * @return {} true if the type is correct, false otherwise
  * @example
  import {isString} from "@daybrush/utils";

  console.log(isString("1234")); // true
  console.log(isString(undefined)); // false
  console.log(isString(1)); // false
  console.log(isString(null)); // false
  */

  function isString(value) {
    return typeof value === STRING;
  }
  /**
  * Check the type that the value is function.
  * @memberof Utils
  * @param {string} value - Value to check the type
  * @return {} true if the type is correct, false otherwise
  * @example
  import {isFunction} from "@daybrush/utils";

  console.log(isFunction(function a() {})); // true
  console.log(isFunction(() => {})); // true
  console.log(isFunction("1234")); // false
  console.log(isFunction(1)); // false
  console.log(isFunction(null)); // false
  */

  function isFunction(value) {
    return typeof value === FUNCTION;
  }
  /**
  * divide text by space.
  * @memberof Utils
  * @param {string} text - text to divide
  * @return {Array} divided texts
  * @example
  import {spliceSpace} from "@daybrush/utils";

  console.log(splitSpace("a b c d e f g"));
  // ["a", "b", "c", "d", "e", "f", "g"]
  console.log(splitSpace("'a,b' c 'd,e' f g"));
  // ["'a,b'", "c", "'d,e'", "f", "g"]
  */

  function splitSpace(text) {
    // divide comma(,)
    var matches = text.match(/("[^"]*")|('[^']*')|([^\s()]*(?:\((?:[^()]*|\([^()]*\))*\))[^\s()]*)|\S+/g);
    return matches || [];
  }
  /**
  * divide text by comma.
  * @memberof Utils
  * @param {string} text - text to divide
  * @return {Array} divided texts
  * @example
  import {splitComma} from "@daybrush/utils";

  console.log(splitComma("a,b,c,d,e,f,g"));
  // ["a", "b", "c", "d", "e", "f", "g"]
  console.log(splitComma("'a,b',c,'d,e',f,g"));
  // ["'a,b'", "c", "'d,e'", "f", "g"]
  */

  function splitComma(text) {
    // divide comma(,)
    // "[^"]*"|'[^']*'
    var matches = text.match(/("[^"]*"|'[^']*'|[^,\s()]*\((?:[^()]*|\([^()]*\))*\)[^,\s()]*|[^,])+/g);
    return matches ? matches.map(function (str) {
      return str.trim();
    }) : [];
  }
  /**
  * divide text by bracket "(", ")".
  * @memberof Utils
  * @param {string} text - text to divide
  * @return {object} divided texts
  * @example
  import {splitBracket} from "@daybrush/utils";

  console.log(splitBracket("a(1, 2)"));
  // {prefix: "a", value: "1, 2", suffix: ""}
  console.log(splitBracket("a(1, 2)b"));
  // {prefix: "a", value: "1, 2", suffix: "b"}
  */

  function splitBracket(text) {
    var matches = /([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(text);

    if (!matches || matches.length < 4) {
      return {};
    } else {
      return {
        prefix: matches[1],
        value: matches[2],
        suffix: matches[3]
      };
    }
  }
  /**
  * divide text by number and unit.
  * @memberof Utils
  * @param {string} text - text to divide
  * @return {} divided texts
  * @example
  import {splitUnit} from "@daybrush/utils";

  console.log(splitUnit("10px"));
  // {prefix: "", value: 10, unit: "px"}
  console.log(splitUnit("-10px"));
  // {prefix: "", value: -10, unit: "px"}
  console.log(splitUnit("a10%"));
  // {prefix: "a", value: 10, unit: "%"}
  */

  function splitUnit(text) {
    var matches = /^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(text);

    if (!matches) {
      return {
        prefix: "",
        unit: "",
        value: NaN
      };
    }

    var prefix = matches[1];
    var value = matches[2];
    var unit = matches[3];
    return {
      prefix: prefix,
      unit: unit,
      value: parseFloat(value)
    };
  }
  /**
  * transform strings to camel-case
  * @memberof Utils
  * @param {String} text - string
  * @return {String} camel-case string
  * @example
  import {camelize} from "@daybrush/utils";

  console.log(camelize("transform-origin")); // transformOrigin
  console.log(camelize("abcd_efg")); // abcdEfg
  console.log(camelize("abcd efg")); // abcdEfg
  */

  function camelize(str) {
    return str.replace(/[\s-_]([a-z])/g, function (all, letter) {
      return letter.toUpperCase();
    });
  }
  /**
  * transform a camelized string into a lowercased string.
  * @memberof Utils
  * @param {string} text - a camel-cased string
  * @param {string} [separator="-"] - a separator
  * @return {string}  a lowercased string
  * @example
  import {decamelize} from "@daybrush/utils";

  console.log(decamelize("transformOrigin")); // transform-origin
  console.log(decamelize("abcdEfg", "_")); // abcd_efg
  */

  function decamelize(str, separator) {
    if (separator === void 0) {
      separator = "-";
    }

    return str.replace(/([a-z])([A-Z])/g, function (all, letter, letter2) {
      return "" + letter + separator + letter2.toLowerCase();
    });
  }
  /**
  * transforms something in an array into an array.
  * @memberof Utils
  * @param - Array form
  * @return an array
  * @example
  import {toArray} from "@daybrush/utils";

  const arr1 = toArray(document.querySelectorAll(".a")); // Element[]
  const arr2 = toArray(document.querySelectorAll<HTMLElement>(".a")); // HTMLElement[]
  */

  function toArray(value) {
    return [].slice.call(value);
  }
  /**
  * Date.now() method
  * @memberof CrossBrowser
  * @return {number} milliseconds
  * @example
  import {now} from "@daybrush/utils";

  console.log(now()); // 12121324241(milliseconds)
  */

  function now() {
    return Date.now ? Date.now() : new Date().getTime();
  }
  /**
  * Returns the index of the first element in the array that satisfies the provided testing function.
  * @function
  * @memberof CrossBrowser
  * @param - The array `findIndex` was called upon.
  * @param - A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.
  * @param - Returns defaultIndex if not found by the function.
  * @example
  import { findIndex } from "@daybrush/utils";

  findIndex([{a: 1}, {a: 2}, {a: 3}, {a: 4}], ({ a }) => a === 2); // 1
  */

  function findIndex(arr, callback, defaultIndex) {
    if (defaultIndex === void 0) {
      defaultIndex = -1;
    }

    var length = arr.length;

    for (var i = 0; i < length; ++i) {
      if (callback(arr[i], i, arr)) {
        return i;
      }
    }

    return defaultIndex;
  }
  /**
  * Returns the value of the first element in the array that satisfies the provided testing function.
  * @function
  * @memberof CrossBrowser
  * @param - The array `find` was called upon.
  * @param - A function to execute on each value in the array,
  * @param - Returns defalutValue if not found by the function.
  * @example
  import { find } from "@daybrush/utils";

  find([{a: 1}, {a: 2}, {a: 3}, {a: 4}], ({ a }) => a === 2); // {a: 2}
  */

  function find(arr, callback, defalutValue) {
    var index = findIndex(arr, callback);
    return index > -1 ? arr[index] : defalutValue;
  }
  /**
  * window.requestAnimationFrame() method with cross browser.
  * @function
  * @memberof CrossBrowser
  * @param {FrameRequestCallback} callback - The function to call when it's time to update your animation for the next repaint.
  * @return {number} id
  * @example
  import {requestAnimationFrame} from "@daybrush/utils";

  requestAnimationFrame((timestamp) => {
    console.log(timestamp);
  });
  */

  var requestAnimationFrame =
  /*#__PURE__*/
  function () {
    var firstTime = now();
    var raf = IS_WINDOW && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame);
    return raf ? raf.bind(window) : function (callback) {
      var currTime = now();
      var id = window.setTimeout(function () {
        callback(currTime - firstTime);
      }, 1000 / 60);
      return id;
    };
  }();
  /**
  * window.cancelAnimationFrame() method with cross browser.
  * @function
  * @memberof CrossBrowser
  * @param {number} handle - the id obtained through requestAnimationFrame method
  * @return {void}
  * @example
  import { requestAnimationFrame, cancelAnimationFrame } from "@daybrush/utils";

  const id = requestAnimationFrame((timestamp) => {
    console.log(timestamp);
  });

  cancelAnimationFrame(id);
  */

  var cancelAnimationFrame =
  /*#__PURE__*/
  function () {
    var caf = IS_WINDOW && (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame);
    return caf ? caf.bind(window) : function (handle) {
      clearTimeout(handle);
    };
  }();

  /**
  * @namespace
  * @name Color
  */

  /**
  * Remove the # from the hex color.
  * @memberof Color
  * @param {} hex - hex color
  * @return {} hex color
  * @example
  import {cutHex} from "@daybrush/utils";

  console.log(cutHex("#000000")) // "000000"
  */

  function cutHex(hex) {
    return hex.replace("#", "");
  }
  /**
  * convert hex color to rgb color.
  * @memberof Color
  * @param {} hex - hex color
  * @return {} rgb color
  * @example
  import {hexToRGBA} from "@daybrush/utils";

  console.log(hexToRGBA("#00000005"));
  // [0, 0, 0, 1]
  console.log(hexToRGBA("#201045"));
  // [32, 16, 69, 1]
  */

  function hexToRGBA(hex) {
    var h = cutHex(hex);
    var r = parseInt(h.substring(0, 2), 16);
    var g = parseInt(h.substring(2, 4), 16);
    var b = parseInt(h.substring(4, 6), 16);
    var a = parseInt(h.substring(6, 8), 16) / 255;

    if (isNaN(a)) {
      a = 1;
    }

    return [r, g, b, a];
  }
  /**
  * convert 3(or 4)-digit hex color to 6(or 8)-digit hex color.
  * @memberof Color
  * @param {} hex - 3(or 4)-digit hex color
  * @return {} 6(or 8)-digit hex color
  * @example
  import {toFullHex} from "@daybrush/utils";

  console.log(toFullHex("#123")); // "#112233"
  console.log(toFullHex("#123a")); // "#112233aa"
  */

  function toFullHex(h) {
    var r = h.charAt(1);
    var g = h.charAt(2);
    var b = h.charAt(3);
    var a = h.charAt(4);
    var arr = ["#", r, r, g, g, b, b, a, a];
    return arr.join("");
  }
  /**
  * convert hsl color to rgba color.
  * @memberof Color
  * @param {} hsl - hsl color(hue: 0 ~ 360, saturation: 0 ~ 1, lightness: 0 ~ 1, alpha: 0 ~ 1)
  * @return {} rgba color
  * @example
  import {hslToRGBA} from "@daybrush/utils";

  console.log(hslToRGBA([150, 0.5, 0.4]));
  // [51, 153, 102, 1]
  */

  function hslToRGBA(hsl) {
    var h = hsl[0];
    var s = hsl[1];
    var l = hsl[2];

    if (h < 0) {
      h += Math.floor((Math.abs(h) + 360) / 360) * 360;
    }

    h %= 360;
    var c = (1 - Math.abs(2 * l - 1)) * s;
    var x = c * (1 - Math.abs(h / 60 % 2 - 1));
    var m = l - c / 2;
    var rgb;

    if (h < 60) {
      rgb = [c, x, 0];
    } else if (h < 120) {
      rgb = [x, c, 0];
    } else if (h < 180) {
      rgb = [0, c, x];
    } else if (h < 240) {
      rgb = [0, x, c];
    } else if (h < 300) {
      rgb = [x, 0, c];
    } else if (h < 360) {
      rgb = [c, 0, x];
    }

    var result = [Math.round((rgb[0] + m) * 255), Math.round((rgb[1] + m) * 255), Math.round((rgb[2] + m) * 255), hsl.length > 3 ? hsl[3] : 1];
    return result;
  }
  /**
  * convert string to rgba color.
  * @memberof Color
  * @param {} - 3-hex(#000), 4-hex(#0000) 6-hex(#000000), 8-hex(#00000000) or RGB(A), or HSL(A)
  * @return {} rgba color
  * @example
  import {stringToRGBA} from "@daybrush/utils";

  console.log(stringToRGBA("#000000")); // [0, 0, 0, 1]
  console.log(stringToRGBA("rgb(100, 100, 100)")); // [100, 100, 100, 1]
  console.log(stringToRGBA("hsl(150, 0.5, 0.4)")); // [51, 153, 102, 1]
  */

  function stringToRGBA(color) {
    if (color.charAt(0) === "#") {
      if (color.length === 4 || color.length === 5) {
        return hexToRGBA(toFullHex(color));
      } else {
        return hexToRGBA(color);
      }
    } else if (color.indexOf("(") !== -1) {
      // in bracket.
      var _a = splitBracket(color),
          prefix = _a.prefix,
          value = _a.value;

      if (!prefix || !value) {
        return;
      }

      var arr = splitComma(value);
      var colorArr = [];
      var length = arr.length;

      switch (prefix) {
        case RGB:
        case RGBA:
          for (var i = 0; i < length; ++i) {
            colorArr[i] = parseFloat(arr[i]);
          }

          return colorArr;

        case HSL:
        case HSLA:
          for (var i = 0; i < length; ++i) {
            if (arr[i].indexOf("%") !== -1) {
              colorArr[i] = parseFloat(arr[i]) / 100;
            } else {
              colorArr[i] = parseFloat(arr[i]);
            }
          } // hsl, hsla to rgba


          return hslToRGBA(colorArr);
      }
    }

    return;
  }

  /**
   * Returns all element descendants of node that
   * match selectors.
   */

  /**
   * Checks if the specified class value exists in the element's class attribute.
   * @memberof DOM
   * @param - A DOMString containing one or more selectors to match
   * @param - If multi is true, a DOMString containing one or more selectors to match against.
   * @example
  import {$} from "@daybrush/utils";

  console.log($("div")); // div element
  console.log($("div", true)); // [div, div] elements
  */

  function $(selectors, multi) {
    return multi ? doc.querySelectorAll(selectors) : doc.querySelector(selectors);
  }
  /**
  * Checks if the specified class value exists in the element's class attribute.
  * @memberof DOM
  * @param element - target
  * @param className - the class name to search
  * @return {boolean} return false if the class is not found.
  * @example
  import {hasClass} from "@daybrush/utils";

  console.log(hasClass(element, "start")); // true or false
  */

  function hasClass(element, className) {
    if (element.classList) {
      return element.classList.contains(className);
    }

    return !!element.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
  }
  /**
  * Add the specified class value. If these classe already exist in the element's class attribute they are ignored.
  * @memberof DOM
  * @param element - target
  * @param className - the class name to add
  * @example
  import {addClass} from "@daybrush/utils";

  addClass(element, "start");
  */

  function addClass(element, className) {
    if (element.classList) {
      element.classList.add(className);
    } else {
      element.className += " " + className;
    }
  }
  /**
  * Removes the specified class value.
  * @memberof DOM
  * @param element - target
  * @param className - the class name to remove
  * @example
  import {removeClass} from "@daybrush/utils";

  removeClass(element, "start");
  */

  function removeClass(element, className) {
    if (element.classList) {
      element.classList.remove(className);
    } else {
      var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
      element.className = element.className.replace(reg, " ");
    }
  }
  /**
  * Gets the CSS properties from the element.
  * @memberof DOM
  * @param elements - elements
  * @param properites - the CSS properties
  * @return returns CSS properties and values.
  * @example
  import {fromCSS} from "@daybrush/utils";

  console.log(fromCSS(element, ["left", "opacity", "top"])); // {"left": "10px", "opacity": 1, "top": "10px"}
  */

  function fromCSS(elements, properties) {
    if (!elements || !properties || !properties.length) {
      return {};
    }

    var element;

    if (elements instanceof Element) {
      element = elements;
    } else if (elements.length) {
      element = elements[0];
    } else {
      return {};
    }

    var cssObject = {};
    var styles = window.getComputedStyle(element);
    var length = properties.length;

    for (var i = 0; i < length; ++i) {
      cssObject[properties[i]] = styles[properties[i]];
    }

    return cssObject;
  }
  /**
  * Sets up a function that will be called whenever the specified event is delivered to the target
  * @memberof DOM
  * @param - event target
  * @param - A case-sensitive string representing the event type to listen for.
  * @param - The object which receives a notification (an object that implements the Event interface) when an event of the specified type occurs
  * @param - An options object that specifies characteristics about the event listener. The available options are:
  * @example
  import {addEvent} from "@daybrush/utils";

  addEvent(el, "click", e => {
    console.log(e);
  });
  */

  function addEvent(el, type, listener, options) {
    el.addEventListener(type, listener, options);
  }
  /**
  * removes from the EventTarget an event listener previously registered with EventTarget.addEventListener()
  * @memberof DOM
  * @param - event target
  * @param - A case-sensitive string representing the event type to listen for.
  * @param - The EventListener function of the event handler to remove from the event target.
  * @example
  import {addEvent, removeEvent} from "@daybrush/utils";
  const listener = e => {
    console.log(e);
  };
  addEvent(el, "click", listener);
  removeEvent(el, "click", listener);
  */

  function removeEvent(el, type, listener) {
    el.removeEventListener(type, listener);
  }



  var utils = ({
    RGB: RGB,
    RGBA: RGBA,
    HSL: HSL,
    HSLA: HSLA,
    COLOR_MODELS: COLOR_MODELS,
    FUNCTION: FUNCTION,
    PROPERTY: PROPERTY,
    ARRAY: ARRAY,
    OBJECT: OBJECT,
    STRING: STRING,
    NUMBER: NUMBER,
    UNDEFINED: UNDEFINED,
    IS_WINDOW: IS_WINDOW,
    document: doc,
    getCrossBrowserProperty: getCrossBrowserProperty,
    TRANSFORM: TRANSFORM,
    FILTER: FILTER,
    ANIMATION: ANIMATION,
    KEYFRAMES: KEYFRAMES,
    cutHex: cutHex,
    hexToRGBA: hexToRGBA,
    toFullHex: toFullHex,
    hslToRGBA: hslToRGBA,
    stringToRGBA: stringToRGBA,
    dot: dot,
    isUndefined: isUndefined,
    isObject: isObject,
    isArray: isArray,
    isString: isString,
    isFunction: isFunction,
    splitSpace: splitSpace,
    splitComma: splitComma,
    splitBracket: splitBracket,
    splitUnit: splitUnit,
    camelize: camelize,
    decamelize: decamelize,
    toArray: toArray,
    now: now,
    findIndex: findIndex,
    find: find,
    requestAnimationFrame: requestAnimationFrame,
    cancelAnimationFrame: cancelAnimationFrame,
    $: $,
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    fromCSS: fromCSS,
    addEvent: addEvent,
    removeEvent: removeEvent
  });

  return utils;

})));
//# sourceMappingURL=utils.js.map
