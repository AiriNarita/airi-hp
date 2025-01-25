export const defaultLanguage = 'ja';
export const availableLanguages = [defaultLanguage, 'en'];

export const namespaces = ['translation', 'header', 'footer', 'navigation'];

export function getOptions(lng = defaultLanguage) {
  return {
    lng,
    defaultNS: namespaces[0],
    fallbackLng: defaultLanguage,
    fallbackNS: namespaces[0],
    ns: namespaces,
    supportedLngs: availableLanguages,
    returnObjects: true,
  };
}