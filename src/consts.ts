/**
* @namespace
* @name consts
*/

export interface ObjectInterface<T> {
  [name: string]: T;
}

/**
* get string "rgb"
* @memberof consts
* @example
import {RGB} from "@daybrush/utils";

console.log(RGB); // "rgb"
*/
export const RGB = "rgb";
/**
* get string "rgba"
* @memberof consts
* @example
import {RGBA} from "@daybrush/utils";

console.log(RGBA); // "rgba"
*/
export const RGBA = "rgba";
/**
* get string "hsl"
* @memberof consts
* @example
import {HSL} from "@daybrush/utils";

console.log(HSL); // "hsl"
*/
export const HSL = "hsl";
/**
* get string "hsla"
* @memberof consts
* @example
import {HSLA} from "@daybrush/utils";

console.log(HSLA); // "hsla"
*/
export const HSLA = "hsla";
/**
* gets an array of color models.
* @memberof consts
* @example
import {COLOR_MODELS} from "@daybrush/utils";

console.log(COLOR_MODELS); // ["rgb", "rgba", "hsl", "hsla"];
*/
export const COLOR_MODELS = [RGB, RGBA, HSL, HSLA];

/**
* get string "function"
* @memberof consts
* @example
import {FUNCTION} from "@daybrush/utils";

console.log(FUNCTION); // "function"
*/
export const FUNCTION = "function";
/**
* get string "property"
* @memberof consts
* @example
import {PROPERTY} from "@daybrush/utils";

console.log(PROPERTY); // "property"
*/
export const PROPERTY = "property";
/**
* get string "array"
* @memberof consts
* @example
import {ARRAY} from "@daybrush/utils";

console.log(ARRAY); // "array"
*/
export const ARRAY = "array";
/**
* get string "object"
* @memberof consts
* @example
import {OBJECT} from "@daybrush/utils";

console.log(OBJECT); // "object"
*/
export const OBJECT = "object";
/**
* get string "string"
* @memberof consts
* @example
import {STRING} from "@daybrush/utils";

console.log(STRING); // "string"
*/
export const STRING = "string";
/**
* get string "number"
* @memberof consts
* @example
import {NUMBER} from "@daybrush/utils";

console.log(NUMBER); // "number"
*/
export const NUMBER = "number";
/**
* get string "undefined"
* @memberof consts
* @example
import {UNDEFINED} from "@daybrush/utils";

console.log(UNDEFINED); // "undefined"
*/
export const UNDEFINED = "undefined";

const prefixes: string[] = ["webkit", "ms", "moz", "o"];

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
export const getCrossBrowserProperty =  /*#__PURE__*/(property: string) => {
  if (typeof document === UNDEFINED) {
    return "";
  }
  const styles = (document.body || document.documentElement).style as any;
  const length = prefixes.length;

  if (typeof styles[property] !== UNDEFINED) {
    return property;
  }
  for (let i = 0; i < length; ++i) {
    const name = `-${prefixes[i]}-${property}`;

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
export const TRANSFORM = /*#__PURE__*/getCrossBrowserProperty("transform");
/**
* get string "filter" with the vendor prefix.
* @memberof CrossBrowser
* @example
import {FILTER} from "@daybrush/utils";

console.log(FILTER); // "filter", "-ms-filter", "-webkit-filter"
*/
export const FILTER = /*#__PURE__*/getCrossBrowserProperty("filter");
/**
* get string "animation" with the vendor prefix.
* @memberof CrossBrowser
* @example
import {ANIMATION} from "@daybrush/utils";

console.log(ANIMATION); // "animation", "-ms-animation", "-webkit-animation"
*/
export const ANIMATION = /*#__PURE__*/getCrossBrowserProperty("animation");
/**
* get string "keyframes" with the vendor prefix.
* @memberof CrossBrowser
* @example
import {KEYFRAMES} from "@daybrush/utils";

console.log(KEYFRAMES); // "keyframes", "-ms-keyframes", "-webkit-keyframes"
*/
export const KEYFRAMES = /*#__PURE__*/ANIMATION.replace("animation", "keyframes");
