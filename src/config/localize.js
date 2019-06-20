import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import validation from '../validation/localization.validation';
import routes from '../routes/routes.localization';

i18n.use(initReactI18next).init({
  resources: {
    ru: {},
    en: {}
  },
  fallbackLng: ['en', 'ru'],
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

export const addResource = (ns, resources) => {
  ['ru', 'en'].forEach(lng => {
    i18n.addResourceBundle(lng, ns, resources[lng]);
  });
};

addResource('validation', validation);
addResource('routes', routes);

export default i18n;
