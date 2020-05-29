import {
  DeepNonNullable,
  DeepNullable,
  DeepRequired,
  DeepPartial,
  ValueOf,
} from "ts-essentials";

const entries = <T extends object>(o: T): [keyof T, ValueOf<T>][] =>
  Object.entries(o) as any;

export const withDefault = <T>(
  o: T,
  d: DeepNonNullable<DeepRequired<T>> extends infer A ? A : never
) => <K extends keyof T>(key: K): typeof d[keyof typeof d & K] =>
  o[key] ?? (d as any)[key]; //typeof d[K]

export const withDefault1 = <T>(
  d: DeepNonNullable<DeepRequired<T>> extends infer A ? A : never
) => (o: T) => withDefault(o, d);

export const withDefault2 = <T>(o: T) => (
  d: DeepNonNullable<DeepRequired<T>> extends infer A ? A : never
) => withDefault(o, d);

type I<T> = T extends infer A ? A : never;
type i = I<"string">;

type Test = {
  a: string;
  b: {
    c: string;
    d?: string;
    e?: string | null;
    f: number | null;
    g: number | string;
  };
  h?: {
    i?: boolean;
  };
};

const test: Test = {
  a: "test",
  b: {
    c: "test",
    f: 3,
    g: 3,
  },
  h: {},
};

const re = withDefault(test, {
  a: "default a",
  b: {
    c: "default c",
    f: 42,
    d: "default d",
    e: "default e",
    g: 42,
  },
  h: {
    i: true,
  },
});

const b = re("h");
const res = (["a", "b", "h"] as const).map(re);

type Some<T> = { _tag: "Some"; value: T };
type None = { _tag: "None" };
type Option<T> = Some<T> | None;

type R<T> = T extends null | undefined ? None : Some<T>;
type S = R<string | null>;

export const _withDefault: <T>(
  o: T,
  d: DeepNonNullable<DeepRequired<T>> extends infer A ? A : never
) => <K extends keyof T>(...keys: K[]) => typeof d[keyof typeof d & K][] = (
  o,
  d
) => (...keys) => keys.map(key => o[key] ?? (d as any)[key]);

export const _withDefault2: <T>(
  o: T,
  d: DeepNonNullable<DeepRequired<T>> extends infer A ? A : never
) => <K extends keyof T>(
  ...keys: K[]
) => { [index in keyof typeof d]: ValueOf<typeof d> } = (o, d) => (...keys) =>
  Object.fromEntries<ValueOf<typeof d>>(
    keys.map(key => [key, o[key] ?? (d as any)[key]])
  ) as any;

type PP = keyof DeepNonNullable<
  DeepRequired<{ str: string; p: { pp?: string } }>
>;

const rr = _withDefault2(test, {
  a: "default a",
  b: {
    c: "default c",
    f: 42,
    d: "default d",
    e: "default e",
    g: 42,
  },
  h: {
    i: true,
  },
})("a", "b", "h");

Object.fromEntries([["s", 3]]);
