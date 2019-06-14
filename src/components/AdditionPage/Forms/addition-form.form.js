import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import validationSchema from '../../../validation/services.schema';
import AdditionForm from './addition-form.view';

const Addition = props => (
  <Formik
    validateOnBlur="true"
    validateOnChange="false"
    initialValues={{ name: '', price: 0.0 }}
    validationSchema={validationSchema}
    onSubmit={values => {
      const { saveService } = props;
      saveService(values.name, values.price);
    }}
    render={formikProps => <AdditionForm {...formikProps} />}
  />
);

Addition.propTypes = {
  saveService: PropTypes.func.isRequired
};

export default Addition;
