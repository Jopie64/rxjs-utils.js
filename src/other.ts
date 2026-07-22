import { OperatorFunction, filter, map } from 'rxjs';

export const filterNull = <T>(): OperatorFunction<T | null | undefined, T> => obs =>
  obs.pipe(
    filter(v => v !== null && v !== undefined),
    map(v => v!));
