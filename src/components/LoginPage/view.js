import React, { Component } from 'react';
import { Header, Main, Footer } from '../../elements';
import {
  SubmitButton,
  LoginForm,
  LoginInput,
  LoginTitle,
  LoginSubTitle
} from './elements/login.form';
import store from '../../config/redux.store';
import authActions from '../../actions/auth.actions';

const { Creators } = authActions;
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
    store.dispatch(Creators.loginRequest(email, password));
  }

  render() {
    return (
      <>
        <LoginForm>
          <Header>
            <LoginTitle>Welcome to hotel management</LoginTitle>
            <LoginSubTitle>Sign in</LoginSubTitle>
          </Header>
          <Main>
            <LoginInput
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
            <LoginInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </Main>
          <Footer>
            <SubmitButton type="submit" onClick={this.handleSubmit}>
              SIGN IN
            </SubmitButton>
          </Footer>
        </LoginForm>
      </>
    );
  }
}
export default LoginPage;
