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
      handledError: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { error } = this.props;
    this.setState({ handledError: services.errorHandlerService(error) });
  }

  handleClick() {
    this.setState(state => ({
      isShow: !state.isShow
    }));
  }

  render() {
    const { isShow, handledError } = this.state;
    return (
      <>
        {handledError && isShow && (
          <ServerError>
            <ServerErrorText>{handledError}</ServerErrorText>
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
