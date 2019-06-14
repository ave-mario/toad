import { string, object } from 'yup';
import reg from './regex';
import i18n from './localize';

export const loginValidationSchema = object().shape({
  email: string()
    .email(i18n.t('validation:incorrect:email'))
    .required(i18n.t('validation:required:email')),
  password: string().required(i18n.t('validation:required:password'))
});

export const passwordValidationSchema = object().shape({
  password: string()
    .required(i18n.t('validation:required:password'))
    .matches(reg.password, i18n.t('validation:incorrect:password'))
});
