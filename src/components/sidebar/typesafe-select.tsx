import React, { HTMLAttributes } from "react";

type htmlSelect = HTMLAttributes<HTMLSelectElement>;

export type SelectProps<T extends string[]> = {
  options: T;
  onChangeHandler: (arg: ElementOf<T>) => unknown;
  className?: string;
  defaultValue: htmlSelect["defaultValue"];
};

type ElementOf<A extends unknown[]> = A extends (infer R)[] ? R : never;

export const Select = <T extends string[]>({
  options,
  onChangeHandler,
  className,
  defaultValue,
}: SelectProps<T>) => {
  const onChange: htmlSelect["onSelect"] = e =>
    onChangeHandler(e.currentTarget.value as ElementOf<T>);
  return (
    <select {...{ onChange, className, defaultValue }}>
      {options.map(opt => (
        <option value={opt} key={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};
