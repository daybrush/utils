
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
