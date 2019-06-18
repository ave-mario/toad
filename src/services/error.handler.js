import localization from './localization.error.handler';
import i18n, { addResource } from '../config/localize';

addResource('ErrorHandler', localization);

export default function(error) {
  const message = error.message ? error.message : error;
  let handledMessage = '';

  switch (message) {
    case 'Network Error':
      handledMessage = i18n.t('ErrorHandler:error:networkError');
      break;
    case 'Email or password incorrect':
      handledMessage = i18n.t('ErrorHandler:error:invalidCredentials');
      break;
    default:
      return false;
  }
  return handledMessage;
}
