import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Wrapper, Header, Main, Footer, HeaderLabel } from 'elements/modal.css';
import { Button, CloseButton, CloseIcon, Text } from 'elements';
import { addResource } from 'config/localize';
import styled from 'styled-components';
import localization from './localization.delete-modal';

const RemoveButton = styled(Button)`
  background: #9a1e1e;
  color: #fff;
  margin-right: 20px;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

addResource('DeleteModalAddition', localization);
const EditForm = ({ addition: { _id, name, price }, remove, t, close }) => {
  return (
    <Wrapper>
      <Header>
        <HeaderLabel>{t('labels.titleMain')}</HeaderLabel>
        <CloseButton onClick={close}>
          <CloseIcon small />
        </CloseButton>
      </Header>
      <Main onSubmit={remove}>
        <FlexWrapper>
          <Text className="addition-name">{name}</Text>
          <Text className="addition-price">{price}</Text>
        </FlexWrapper>
      </Main>
      <Footer>
        <RemoveButton
          lg
          onClick={() => {
            close();
            remove(_id);
          }}
        >
          {t('buttons.submit')}
        </RemoveButton>
        <Button lg onClick={close}>
          {t('buttons.cancel')}
        </Button>
      </Footer>
    </Wrapper>
  );
};

EditForm.propTypes = {
  addition: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired
    })
  ).isRequired,
  remove: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation('DeleteModalAddition')(EditForm);
