export const cyan = (text: unknown) => {
  return `\x1b[36m${text}\x1b[0m`;
};

export const yellow = (text: unknown) => {
  return `\x1b[33m${text}\x1b[0m`;
};
