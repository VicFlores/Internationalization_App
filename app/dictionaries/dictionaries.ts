import { Locale, PageKeys } from '../types';

const dictionaries: Record<
  Locale,
  Record<PageKeys, () => Promise<{ title: string; description: string }>>
> = {
  es: {
    home: () => import('./es/home.json').then((module) => module.default),
    about: () => import('./es/about.json').then((module) => module.default),
  },
  en: {
    home: () => import('./en/home.json').then((module) => module.default),
    about: () => import('./en/about.json').then((module) => module.default),
  },
};

export const getDictionary = async (locale: Locale, page: PageKeys) => {
  return dictionaries[locale][page]();
};
