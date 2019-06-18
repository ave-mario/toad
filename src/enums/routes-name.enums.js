import i18n from '../config/localize';

const routes = Object.freeze([
  {
    name: i18n.t('routes:main'),
    link: '/'
  },
  {
    name: i18n.t('routes:rooms'),
    link: '/rooms'
  },
  {
    name: i18n.t('routes:addition'),
    link: '/rooms-services'
  },
  {
    name: i18n.t('routes:services'),
    link: '/services'
  }
]);

export default routes;
