/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Main, Footer } from '../../elements';
import {
  SubmitButton,
  LoginForm,
  LoginInput,
  LoginTitle,
  LoginSubTitle
} from './elements/login.form';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLogged: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    const { email, password } = this.state;
    const { login } = this.props;
    if (email === 'vidgf@sdf.sfn' && password === '12345QWE') {
      this.setState({ isLogged: true });
    }
    e.preventDefault();
    login(email, password);
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
              className="emailInput"
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
            <LoginInput
              className="passwordInput"
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </Main>
          <Footer>
            <SubmitButton
              className="submitButton"
              type="submit"
              onClick={this.handleSubmit}
            >
              SIGN IN
            </SubmitButton>
          </Footer>
        </LoginForm>
      </>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired
};
export default LoginPage;
