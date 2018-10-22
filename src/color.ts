import { RGB, RGBA, HSL, HSLA } from "./consts";
import { splitBracket, splitComma } from "./utils";

/**
* @namespace
* @name Color
*/
export const COLOR_MODELS = [RGB, RGBA, HSL, HSLA];

/**
* Remove the # from the hex color.
* @memberof Color
* @param {String} hex - hex color
* @return {String} hex color
* @example
console.log(cutHex("#000000"))
// "000000"
*/
export function cutHex(hex: string) {
  return (hex.charAt(0) === "#") ? hex.substring(1) : hex;
}
/**
* convert hex color to rgb color.
* @memberof Color
* @param {String} hex - hex color
* @return {Array} rgb color
* @example
console.log(hexToRGB("#000000"));
// [0, 0, 0]
console.log(hexToRGB("#201045"));
// [32, 16, 69]
*/
export function hexToRGBA(hex: string) {
  const h = cutHex(hex);
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  let a = parseInt(h.substring(6, 8), 16) / 255;

  if (isNaN(a)) {
    a = 1;
  }
  return [r, g, b, a];
}

/**
* convert 3-digit hex color to 6-digit hex color.
* @memberof Color
* @param {String} hex - 3-digit hex color
* @return {String} 6-digit hex color
* @example
console.log(hex3to6("#123"));
// "#112233"
*/
export function hex3to6(h: string) {
  const r = h.charAt(1);
  const g = h.charAt(2);
  const b = h.charAt(3);
  const arr = ["#", r, r, g, g, b, b];

  return arr.join("");
}
/**
* convert hsl color to rgb color.
* @memberof Color
* @param {Array} hsl(a) - hsl color(hue: 0 ~ 360, saturation: 0 ~ 1, lightness: 0 ~ 1, alpha: 0 ~ 1)
* @return {Array} rgb color
* @example
console.log(hslToRGB([150, 0.5, 0.4]));
// [51, 153, 102]
*/
export function hslToRGBA(hsl: number[]) {
  let h = hsl[0];
  const s = hsl[1];
  const l = hsl[2];

  if (h < 0) {
    h +=  Math.floor((Math.abs(h) + 360) / 360) * 360;
  }
  h %= 360;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;
  let rgb;

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
  const result = [
    Math.round((rgb[0] + m) * 255),
    Math.round((rgb[1] + m) * 255),
    Math.round((rgb[2] + m) * 255),
    hsl.length > 3 ? hsl[3] : 1,
  ];

  return result;
}
/**
* convert string to rgba color.
* @memberof Color
* @param {String} - Hex(rgb, rgba) or RGB(A), or HSL(A)
* @return {Array} rgba color
*/
export function stringToRGBA(color: string) {
  if (color.charAt(0) === "#") {
    if (color.length === 4) {
      return hexToRGBA(hex3to6(color));
    } else {
      return hexToRGBA(color);
    }
  } else if (color.indexOf("(") !== -1) {
    // in bracket.
    const {prefix, value} = splitBracket(color);

    if (!prefix || !value) {
      return;
    }
    const arr = splitComma(value);
    const colorArr: number[] = [];
    const length = arr.length;

    switch (prefix) {
      case RGB:
      case RGBA:
        for (let i = 0; i < length; ++i) {
          colorArr[i] = parseFloat(arr[i]);
        }
        return colorArr;
      case HSL:
      case HSLA:
        for (let i = 1; i < length; ++i) {
          if (arr[i].indexOf("%") !== -1) {
            colorArr[i] = parseFloat(arr[i]) / 100;
          }
        }
        // hsl, hsla to rgba
        return hslToRGBA(colorArr);
    }
  }
  return;
}
