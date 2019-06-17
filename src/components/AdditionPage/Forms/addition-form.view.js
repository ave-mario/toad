import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Title3, Form, Button, Input } from '../../../elements';
import { addResource } from '../../../config/localize';
import localization from '../localization.addition';

addResource('Addition', localization);
function AdditionForm({
  values,
  handleChange,
  errors,
  touched,
  handleSubmit,
  t
}) {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div>
          <Title3>{t('labels.Name')}</Title3>
          <Input
            id="nameInput"
            className="nameInput"
            type="text"
            name="name"
            onChange={handleChange}
            border={errors.name && touched.name && '1px solid red'}
            value={values.name}
          />
        </div>
        <div>
          <Title3>{t('labels.Price')}</Title3>
          <Input
            id="priceInput"
            className="priceInput"
            type="number"
            name="price"
            step={0.5}
            onChange={handleChange}
            border={errors.price && touched.price && '1px solid red'}
            value={values.price}
          />
        </div>
        <Button className="submitButton" type="submit">
          {t('buttons.Submit')}
        </Button>
      </Form>
    </div>
  );
}

AdditionForm.propTypes = {
  values: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  touched: PropTypes.objectOf(PropTypes.bool).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation('Addition')(AdditionForm);
