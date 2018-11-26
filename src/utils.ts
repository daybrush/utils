import { ObjectInterface } from "./consts";

export function isUndefined(value: any): value is undefined {
  return (typeof value === "undefined");
}
export function isObject(value: any): value is ObjectInterface<any> {
  return value && (typeof value === "object");
}
export function isArray(value: any): value is any[] {
  return Array.isArray(value);
}
export function isString(value: any): value is string {
  return typeof value === "string";
}
/**
* divide text by space.
* @memberof Property
* @function splitSpace
* @param {String} text - text to divide
* @return {Array} divided texts
* @example
console.log(splitSpace("a b c d e f g"));
// ["a", "b", "c", "d", "e", "f", "g"]
console.log(splitSpace("'a,b' c 'd,e' f g"));
// ["'a,b'", "c", "'d,e'", "f", "g"]
*/
export function splitSpace(text: string) {
  // divide comma(,)
  const matches = text.match(/("[^"]*")|('[^']*')|([^\s()]*(?:\((?:[^()]*|\([^()]*\))*\))[^\s()]*)|\S+/g);

  return matches || [];
}
/**
* divide text by comma.
* @memberof Property
* @function splitComma
* @param {String} text - text to divide
* @return {Array} divided texts
* @example
console.log(splitComma("a,b,c,d,e,f,g"));
// ["a", "b", "c", "d", "e", "f", "g"]
console.log(splitComma("'a,b',c,'d,e',f,g"));
// ["'a,b'", "c", "'d,e'", "f", "g"]
*/
export function splitComma(text: string) {
  // divide comma(,)
  // "[^"]*"|'[^']*'
  const matches = text.match(/("[^"]*"|'[^']*'|[^,\s()]*\((?:[^()]*|\([^()]*\))*\)[^,\s()]*|[^,])+/g);

  return matches ? matches.map(str => str.trim()) : [];
}

export function splitBracket(text: string) {
  const matches = (/([^(]*)\(([\s\S]*)\)([\s\S]*)/g).exec(text);

  if (!matches || matches.length < 4) {
    return {};
  } else {
    return { prefix: matches[1], value: matches[2], suffix: matches[3] };
  }
}
export function splitUnit(text: string) {
  const matches = /^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(text);

  if (!matches) {
    return { prefix: "", unit: "", value: NaN };
  }
  const prefix = matches[1];
  const value = matches[2];
  const unit = matches[3];

  return { prefix, unit, value: parseFloat(value) };
}
export function camelize(str: string) {
  return str.replace(/[\s-_]([a-z])/g, (all, letter) => letter.toUpperCase());
}
export function decamelize(str: string) {
  return str.replace(/([a-z])([A-Z])/g, (all, letter, letter2) => `${letter}-${letter2.toLowerCase()}`);
}
export function now() {
  return Date.now ? Date.now() : new Date().getTime();
}
export const requestAnimationFrame = /*#__PURE__*/(() => {
  const firstTime = now();
  const raf = typeof window !== "undefined" &&
    (window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
      (window as any).mozRequestAnimationFrame);

  return raf ? (raf.bind(window) as (callback: FrameRequestCallback) => number) : ((callback: FrameRequestCallback) => {
      const currTime = now();
      const id = window.setTimeout(() => {
        callback(currTime - firstTime);
      }, 1000 / 60);
      return id;
    });
})();
