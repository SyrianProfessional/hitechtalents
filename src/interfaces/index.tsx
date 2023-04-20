type Primitive = string | number | symbol;
export type GenericObject = Record<Primitive, unknown>;

type Level = 0 | 1 | 2 | 3 | 4 | 5 | 'max';
type NextLevel<L> = L extends 0
  ? 1
  : L extends 1
  ? 2
  : L extends 2
  ? 3
  : L extends 3
  ? 4
  : L extends 4
  ? 5
  : 'max';

type Union<
  L extends unknown | undefined,
  R extends unknown | undefined,
> = L extends undefined
  ? R extends undefined
    ? undefined
    : R
  : R extends undefined
  ? L
  : L | R;

type Join<
  L extends Primitive | undefined,
  R extends Primitive | undefined,
> = L extends string
  ? R extends string
    ? `${L}.${R}`
    : L
  : R extends string
  ? R
  : never;

export type NestedPaths<
  T extends GenericObject,
  Prev extends Primitive | undefined = undefined,
  Path extends Primitive | undefined = undefined,
  L extends Level = 0,
> = L extends 'max'
  ? never
  : {
      [K in keyof T]: T[K] extends GenericObject
        ? NestedPaths<T[K], Union<Prev, Path>, Join<Path, K>, NextLevel<L>>
        : Union<Union<Prev, Path>, Join<Path, K>>;
    }[keyof T];

export type MinimalFieldProp<T extends GenericObject> = {
  name: NestedPaths<T>;
  accessibilityLabel?: string;
};
