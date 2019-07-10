import { string, object } from 'yup';
import reg from 'config/regex';
import i18n from 'config/localize';

export const loginValidationSchema = object().shape({
  email: string()
    .email()
    .required(i18n.t('Login:validation:emailRequired')),
  password: string().required(i18n.t('Login:validation:passwordRequired'))
});

export const passwordValidationSchema = object().shape({
  password: string()
    .required(i18n.t('Login:validation:emailRequired'))
    .matches(reg.password, i18n.t('Login:validation:passwordIncorrect'))
});
