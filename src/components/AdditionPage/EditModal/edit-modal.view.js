import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Wrapper, Header, Form, Footer, HeaderLabel } from 'elements/modal.css';
import { Button, CloseButton, CloseIcon, Text, Input } from 'elements';

const EditForm = ({
  values,
  handleSubmit,
  setFieldValue,
  errors,
  handleChange,
  handleBlur,
  touched,
  t
}) => {
  async function handleClick(actionName) {
    await setFieldValue('action', actionName);
    handleSubmit();
  }

  return (
    <Wrapper editAdd>
      <Header>
        <HeaderLabel>{t('edit.title')}</HeaderLabel>
        <CloseButton
          onClick={() => {
            handleClick('close');
          }}
        >
          <CloseIcon small />
        </CloseButton>
      </Header>
      <Form flex onSubmit={handleSubmit}>
        <div>
          <Text margin="0 20px">{t('labels.Name')}</Text>
          <Input
            onBlur={handleBlur}
            value={values.name}
            name="name"
            onChange={handleChange}
            error={touched.name && Boolean(errors.name)}
          />
        </div>

        <div>
          <Text margin="0 20px">{t('labels.Price')}</Text>
          <Input
            type="number"
            number
            name="price"
            step={0.2}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.price && Boolean(errors.price)}
            value={values.price}
          />
        </div>
      </Form>
      <Footer>
        <Button
          blue
          lg
          onClick={() => {
            handleClick('update');
          }}
        >
          {t('edit.button')}
        </Button>
      </Footer>
    </Wrapper>
  );
};

EditForm.propTypes = {
  values: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      action: PropTypes.string.isRequired
    })
  ).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  touched: PropTypes.objectOf(PropTypes.bool).isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation('Addition')(EditForm);
