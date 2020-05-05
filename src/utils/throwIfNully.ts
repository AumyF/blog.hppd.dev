export default function throwIfNully<T>(
  value: T | null | undefined
): asserts value is T {
  if (value == null) {
    throw TypeError("throwIfNully");
  }
}
