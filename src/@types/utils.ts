export type ForwardRefSubComponent<T, U> = Combine<
  React.ForwardRefExoticComponent<
    Combine<T, React.RefAttributes<HTMLDivElement>>
  >,
  U
>;

export type Combine<T, K> = T & Omit<K, keyof T>;

export type Combine3<T, K, Z> = Combine<Combine<T, K>, Combine<K, Z>>;
