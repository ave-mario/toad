import React from 'react';
import PropTypes from 'prop-types';
import service from '../../services';
import { Welcome } from './WelcomeForm';

function WelcomePage(props) {
  const { isFailed, search } = props;
  const { name, token } = service.queryStringService(search);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}
    >
      <Welcome isFailed={isFailed} name={name} token={token} />
    </div>
  );
}

WelcomePage.propTypes = {
  search: PropTypes.string.isRequired,
  isFailed: PropTypes.bool
};
WelcomePage.defaultProps = {
  isFailed: false
};
export default WelcomePage;
