export const panic: (err: Error) => never = err => {
  throw err;
};
