import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from 'actions/auth.actions';
import { CloseButton as Button } from 'elements';
import { Icon, Card } from '../menu.elements';

const LeftFooter = ({ logout }) => {
  return (
    <Card>
      <Button onClick={logout}>
        <Icon />
      </Button>
    </Card>
  );
};

LeftFooter.propTypes = {
  logout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(Actions.Creators.logout());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LeftFooter);
