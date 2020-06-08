import { nage } from "../utils/nage";

export const assertsNonNull = <T extends {}>(v: T | null | undefined): T =>
  v ?? nage(new Error(`assertsNonNull`));
