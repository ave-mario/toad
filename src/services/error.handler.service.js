import i18n, { addResource } from 'config/localize';
import localization from './localization.error.handler.service';

addResource('ErrorHandler', localization);

export default function(error) {
  const message = error || '';
  let handledMessage = '';

  switch (message) {
    case 'There are no tokens':
      handledMessage = '';
      break;
    case 'Network Error':
      handledMessage = i18n.t('ErrorHandler:error:networkError');
      break;
    case 'Email or password incorrect':
      handledMessage = i18n.t('ErrorHandler:error:invalidCredentials');
      break;
    case 'Data already exist':
      handledMessage = i18n.t('ErrorHandler:error:dataExist');
      break;
    default:
      return message;
  }
  return handledMessage;
}
