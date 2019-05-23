import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function App(props) {
  const { children } = props;
  return (
    <div>
      <h3>User Authentication System</h3>
      {children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.shape.isRequired
};

export default App;
