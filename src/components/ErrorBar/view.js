import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Close from '@material-ui/icons/Close';
import { ServerError, ServerErrorText } from '../../elements';

class ErrorBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isShow: !state.isShow
    }));
  }

  render() {
    const { isShow } = this.state;
    const { error } = this.props;
    return (
      <>
        {error !== 'Unauthorized' && isShow && (
          <ServerError>
            <ServerErrorText>{error.message}</ServerErrorText>
            <Close
              style={{ cursor: 'pointer', color: 'white', fontSize: '30' }}
              onClick={this.handleClick}
            />
          </ServerError>
        )}
      </>
    );
  }
}

ErrorBar.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])),
    PropTypes.string
  ]).isRequired
};

export default ErrorBar;
