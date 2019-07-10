import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Close from '@material-ui/icons/Close';
import { ServerError, ServerErrorText } from 'elements';
import services from 'services';

class ErrorBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
      message: props.message
    };
    this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.message === nextProps.message) return { isShow: true };
    return null;
  }

  changeError() {
    const { message, isError } = this.props;
    if (isError) return services.errorHandlerService(message);
    return message;
  }

  handleClick() {
    this.setState(prevState => ({ isShow: !prevState.isShow }));
  }

  render() {
    const { isShow } = this.state;
    const { isError } = this.props;
    const message = this.changeError();
    return (
      <>
        {message && isShow && (
          <ServerError fixed backgroundColor={isError ? '#ed1e3a' : '#27ae60'}>
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
  message: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])),
    PropTypes.bool,
    PropTypes.string
  ]),
  isError: PropTypes.bool.isRequired
};

ErrorBar.defaultProps = {
  message: ''
};
export default ErrorBar;
