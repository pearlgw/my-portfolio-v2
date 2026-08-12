import 'server-only';

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  id: () => import('./id.json').then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: string) => {
  if (locale === 'id') return dictionaries['id']();
  return dictionaries['en'](); // Default to 'en'
};
