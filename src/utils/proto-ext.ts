/* eslint-disable no-extend-native */

export const tap = Symbol("tap");
export const log = Symbol("log");

declare global {
  interface Object {
    [log](): this;
    [tap](fun: (arg: this) => unknown): this;
  }
}

Object.prototype[tap] = function (fun) {
  fun(this);
  return this;
};
Object.prototype[log] = function () {
  return this[tap](console.log);
};
