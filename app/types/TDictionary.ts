export type Dictionary = {
  [key: string]: string;
};

export type PageKeys = 'home' | 'about';

export type Locale = 'en' | 'es';

export type LocaleContextProps = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};
