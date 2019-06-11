import { string, object } from 'yup';
import reg from './regex';

export const loginValidationSchema = object().shape({
  email: string()
    .email()
    .required('Email is required'),
  password: string().required('Password is required')
});

export const passwordValidationSchema = object().shape({
  password: string()
    .required('Password is required')
    .matches(
      reg.password,
      'Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number'
    )
});
