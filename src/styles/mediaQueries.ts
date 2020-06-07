/**
 * `sm` : 640px~
 * `md` : 768px~
 * `lg` : 1024px~
 * `xl` : 1280px~
 */
export const mq = {
  tab: "@media (min-width: 560px)",
  small: `@media (min-width: 640px)`,
  medium: `@media (min-width: 768px)`,
  pc: `@media (min-width: 960px)`,
  large: `@media (min-width: 1024px)`,
  huge: `@media (min-width: 1280px)`,
  fhd: `@media (min-width: 1920px)`,
} as const;
