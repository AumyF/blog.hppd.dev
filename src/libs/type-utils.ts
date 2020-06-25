import { Post } from "../../types/graphqlTypes";

export type PartialPick<T, K extends keyof T> = Partial<Pick<T, K>>;
export type PickAndPartialPick<T, K extends keyof T, P extends keyof T> = Pick<
  T,
  K
> &
  PartialPick<T, P>;
