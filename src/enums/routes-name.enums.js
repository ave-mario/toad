import i18n from '../config/localize';

export default Object.freeze([
  {
    name: i18n.t('routes:Main'),
    link: '/'
  },
  {
    name: i18n.t('routes:Rooms'),
    link: '/rooms'
  },
  {
    name: i18n.t('routes:Addition'),
    link: '/rooms-services'
  },
  {
    name: i18n.t('routes:Services'),
    link: '/services'
  }
]);
