import { string, object, number } from 'yup';

const validationSchema = object().shape({
  name: string().required(),
  price: number()
    .required()
    .min(0)
});

export default validationSchema;
