import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import validationSchema from 'validation/services.schema';
import EditForm from './edit-modal.view';

const EditView = ({ addition: { _id, name, price }, update, close }) => (
  <Formik
    validateOnBlur="true"
    validateOnChange="false"
    initialValues={{
      name,
      price,
      action: 'update'
    }}
    validationSchema={validationSchema}
    onSubmit={values => {
      const { action, ...data } = values;
      if (action === 'close') close();
      else if (action === 'update') {
        update(_id, { ...data });
        close();
      }
    }}
    render={formikProps => <EditForm {...formikProps} />}
  />
);

EditView.propTypes = {
  update: PropTypes.func.isRequired,
  addition: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired
    })
  ).isRequired,
  close: PropTypes.func.isRequired
};

export default EditView;
