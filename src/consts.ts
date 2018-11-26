export interface ObjectInterface<T> {
  [name: string]: T;
}

const prefixes: string[] = ["webkit", "ms", "moz", "o"];
const checkProperties =  /*#__PURE__*/(property: string) => {
  if (typeof document === "undefined") {
    return "";
  }
  const styles = (document.body || document.documentElement).style as any;
  const length = prefixes.length;

  if (typeof styles[property] !== "undefined") {
    return property;
  }
  for (let i = 0; i < length; ++i) {
    const name = `-${prefixes[i]}-${property}`;

    if (typeof styles[name] !== "undefined") {
      return name;
    }
  }
  return "";
};

export const RGB = "rgb";
export const RGBA = "rgba";
export const HSL = "hsl";
export const HSLA = "hsla";
export const TRANSFORM = /*#__PURE__*/checkProperties("transform");
export const FILTER = /*#__PURE__*/checkProperties("filter");
export const ANIMATION = /*#__PURE__*/checkProperties("animation");
export const KEYFRAMES = /*#__PURE__*/ANIMATION.replace("animation", "keyframes");
