import { panic } from "./panic";

class AssertsNonNullError extends Error {
  constructor(e: string = '"assertsNonNull" recieved nullish.') {
    super(e);
    this.name = new.target.name;
  }
}

export const assertsNonNull = <T extends {}>(v: T | null | undefined): T =>
  v ?? panic(new AssertsNonNullError(`assertsNonNull`));
