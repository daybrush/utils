
/**
 * @typedef
 */
export interface IArrayFormat<T> {
  length: number;
  [index: number]: T;
}
/**
 * @typedef
 */
export interface IObject<T> {
  [name: string]: T;
}
/**
 * @typedef
 */
export interface IEventMap extends ElementEventMap,
  HTMLElementEventMap, SVGElementEventMap, HTMLMediaElementEventMap, HTMLBodyElementEventMap {
  [name: string]: Event;
}
