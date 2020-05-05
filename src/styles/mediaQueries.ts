/**
 * `sm` : 640px~
 * `md` : 768px~
 * `lg` : 1024px~
 * `xl` : 1280px~
 */
export const mq: { [index in "sm" | "md" | "lg" | "xl"]: string } = {
  sm: `@media (min-width: 640px)`,
  md: `@media (min-width: 768px)`,
  lg: `@media (min-width: 1024px)`,
  xl: `@media (min-width: 1280px)`,
};
