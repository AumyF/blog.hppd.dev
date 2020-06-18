import React from "react";

export type SelectProps<T extends string[]> = {
  options: T;
};

export const Select = <T extends string[]>({ options }: SelectProps<T>) => {
  return (
    <select name="" id="">
      {options.map(opt => (
        <option value={opt}>{opt}</option>
      ))}
    </select>
  );
};
