export const set = <K extends string, V extends string>(k: K) => (v: V) => {
  localStorage.setItem(k, v);
};
export const clear = () => localStorage.clear;
export const get = (key: string): string | null => localStorage.getItem(key);
