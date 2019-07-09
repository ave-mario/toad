import React from 'react';
import PropTypes from 'prop-types';
import { Title, Title3 } from 'elements';
import { NotFound, NotFoundButton } from './elements';

function NotFoundPage(props) {
  const { goBack } = props;
  return (
    <>
      <NotFound>
        <Title3>OOPS! PAGE NOT FOUND</Title3>
        <Title fontSize="5em">404</Title>
        <Title3>WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND</Title3>
        <NotFoundButton
          onClick={() => {
            goBack();
          }}
          className="goBackButton"
        >
          GO MAIN PAGE
        </NotFoundButton>
      </NotFound>
    </>
  );
}

NotFoundPage.propTypes = {
  goBack: PropTypes.func.isRequired
};

export default NotFoundPage;
