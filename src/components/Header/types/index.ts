export type TNavMenuLink<K extends string | null> = {
  title: string;
  key: K;
  children: K extends null ? Array<TNavMenuLink<string | null>> : never;
};

export type TDynamicNavMenuLink = TNavMenuLink<string> | TNavMenuLink<null>;
