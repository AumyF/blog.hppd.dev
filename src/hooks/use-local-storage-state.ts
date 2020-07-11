import { useEffect, useState } from "react";

const get = <V extends string>(key: string): V | null =>
  localStorage.getItem(key) as V | null;

const useStorageState = <V extends string>(
  storageType: "localStorage" | "sessionStorage",
  key: string,
  initialValue: V | (() => V)
) => {
  const [state, setState] = useState(initialValue);
  const storage = globalThis[storageType];
  useEffect(() => {
    storage.getItem(key) ??
      storage.setItem(
        key,
        typeof initialValue === "function" ? initialValue() : initialValue
      );
    setState(prev => get<V>(key) ?? prev);
  }, [key, initialValue, storage]);

  useEffect(() => {
    storage.setItem(key, state);
  }, [key, state, storage]);
  return [state, setState] as const;
};

export const useLocalStorageState = <V extends string>(
  key: string,
  initialValue: V | (() => V)
) => useStorageState("localStorage", key, initialValue);
