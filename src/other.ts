import { OperatorFunction } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export const filterNull = <T>(): OperatorFunction<T | null | undefined, T> => obs =>
  obs.pipe(
    filter(v => v !== null && v !== undefined),
    map(v => v!));
