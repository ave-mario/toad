import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import validation from '../validation/localization.shemas';

i18n.use(initReactI18next).init({
  resources: {
    ru: {},
    en: {}
  },
  fallbackLng: 'en',
  debug: true,
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
    formatSeparator: ','
  },
  react: {
    wait: true
  }
});

export const addResourse = (ns, resources) => {
  ['ru', 'en'].forEach(lng => {
    i18n.addResourceBundle(lng, ns, resources[lng]);
  });
};

addResourse('validation', validation);

export default i18n;
