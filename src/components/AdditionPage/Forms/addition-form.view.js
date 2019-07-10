import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Button } from 'elements';
import { Content, Form, Input } from '../elements/table.elements';

function AdditionForm({
  values,
  handleChange,
  errors,
  touched,
  handleSubmit,
  t
}) {
  return (
    <Content>
      <Form onSubmit={handleSubmit}>
        <div>
          <Input
            id="nameInput"
            className="nameInput"
            type="text"
            name="name"
            onChange={handleChange}
            placeholder={t('labels.Name')}
            border={errors.name && touched.name && '1px solid red'}
            value={values.name}
          />
        </div>
        <div>
          <Input
            number
            id="priceInput"
            className="priceInput"
            type="number"
            name="price"
            step={0.5}
            small
            onChange={handleChange}
            placeholder={t('labels.Price')}
            border={errors.price && touched.price && '1px solid red'}
            value={values.price}
          />
        </div>
        <div>
          <Button blue className="submitButton" type="submit" lg>
            {t('buttons.Submit')}
          </Button>
        </div>
      </Form>
    </Content>
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
