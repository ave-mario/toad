import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Close from '@material-ui/icons/Close';
import { ServerError, ServerErrorText } from 'elements';
import services from 'services';

class ErrorBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
      error: props.error
    };
    this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.error === nextProps.error) return { isShow: true };
    return null;
  }

  changeError() {
    const { error } = this.props;
    return services.errorHandlerService(error);
  }

  handleClick() {
    this.setState(prevState => ({ isShow: !prevState.isShow }));
  }

  render() {
    const { isShow } = this.state;
    const message = this.changeError();
    return (
      <>
        {message && isShow && (
          <ServerError>
            <ServerErrorText>{message}</ServerErrorText>
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
    PropTypes.bool,
    PropTypes.string
  ]).isRequired
};

export default ErrorBar;
