type UrlType = {
  demo?: string;
  website?: string;
  github?: string;
};

export type CardProps = {
  name: string;
  slug?: string;
  url?: UrlType;
};
