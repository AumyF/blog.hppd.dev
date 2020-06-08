export const callOptionalUndefined = <Parameter extends {}, Returnee>(
  fn: (arg: Parameter) => Returnee
) => (arg: Parameter | undefined): Returnee | undefined =>
  arg === undefined ? arg : fn(arg);
