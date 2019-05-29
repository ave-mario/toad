import React, { Component } from 'react';
import { Form, Input, Title, Button, Title2 } from '../../elements';
import store from '../../config/redux.store';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    store.dispatch({
      type: 'LOGIN_REQUEST',
      email,
      password
    });
  }

  render() {
    return (
      <>
        <Form width="500px">
          <Title>Welcome to our hotel</Title>
          <Title2>Sign in</Title2>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <Button type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
export default LoginPage;
