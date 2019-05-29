import React, { Component } from 'react';
import { Title, Button } from '../../elements';
import store from '../../config/redux.store';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleLogout() {
    store.dispatch({
      type: 'LOGOUT'
    });
  }

  render() {
    return (
      <>
        <Title>Main Page</Title>
        <Button type="button" onClick={this.handleLogout}>
          LOGOUT
        </Button>
      </>
    );
  }
}

export default MainPage;
