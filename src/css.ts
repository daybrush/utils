import { ObjectInterface } from "./consts";

/**
 * @namespace DOM
 */

/**
* Checks if the specified class value exists in the element's class attribute.
* @memberof DOM
* @param {HTMLElement} element - target
* @param {string} className - the class name to search
* @return {boolean} return false if the class is not found.
* @example
import {hasClass} from "@daybrush/utils";

console.log(hasClass(element, "start")); // true or false
*/
export function hasClass(element: HTMLElement, className: string) {
  if (element.classList) {
    return element.classList.contains(className);
  }
  return !!element.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`));
}

/**
* Add the specified class value. If these classe already exist in the element's class attribute they are ignored.
* @memberof DOM
* @param {HTMLElement} element - target
* @param {string} className - the class name to add
* @example
import {addClass} from "@daybrush/utils";

addClass(element, "start");
*/
export function addClass(element: HTMLElement, className: string) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += ` ${className}`;
  }
}

/**
* Removes the specified class value.
* @memberof DOM
* @param {HTMLElement} element - target
* @param {string} className - the class name to remove
* @example
import {removeClass} from "@daybrush/utils";

removeClass(element, "start");
*/
export function removeClass(element: HTMLElement, className: string) {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    const reg = new RegExp(`(\\s|^)${className}(\\s|$)`);

    element.className = element.className.replace(reg, " ");
  }
}

/**
* Gets the CSS properties from the element.
* @memberof DOM
* @param {HTMLElement | HTMLElement[]} elements - elements
* @param {string[]} properites - the CSS properties
* @return {object} returns CSS properties and values.
* @example
import {fromCSS} from "@daybrush/utils";

console.log(fromCSS(element, ["left", "opacity", "top"])); // {"left": "10px", "opacity": 1, "top": "10px"}
*/
export function fromCSS(elements: HTMLElement | HTMLElement[] | NodeListOf<HTMLElement>, properties: string[]) {
  if (!elements || !properties || !properties.length) {
    return {};
  }
  let element;

  if (elements instanceof Element) {
    element = elements;
  } else if (elements.length) {
    element = elements[0];
  } else {
    return {};
  }
  const cssObject: ObjectInterface<any> = {};
  const styles = window.getComputedStyle(element) as any;
  const length = properties.length;

  for (let i = 0; i < length; ++i) {
    cssObject[properties[i]] = styles[properties[i]];
  }
  return cssObject;
}
