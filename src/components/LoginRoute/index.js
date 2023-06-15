import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  LoginFormContainer,
  LoginWebsiteLogo,
  FormContainer,
  ShowHideContainer,
  InputContainer,
  LabelInput,
  UsernameInputField,
  PasswordInputField,
  CheckboxInput,
  ButtonContainer,
  ErrorText,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    isCheckedPassword: false,
  }

  getUsername = event => this.setState({username: event.target.value})

  getPassword = event => this.setState({password: event.target.value})

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 2, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onShowHidePassword = () => {
    this.setState(prevState => ({
      isCheckedPassword: !prevState.isCheckedPassword,
    }))
  }

  onSubmitLoginFrom = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.errorMsg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <LabelInput htmlFor="username">Username</LabelInput>
        <UsernameInputField
          type="text"
          id="username"
          value={username}
          onChange={this.getUsername}
          placeholder="username"
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, isCheckedPassword} = this.state

    return (
      <>
        <LabelInput>Password</LabelInput>
        <PasswordInputField
          type={isCheckedPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={this.getPassword}
          placeholder="password"
        />
        <ShowHideContainer>
          <CheckboxInput
            type="checkbox"
            id="showPassword"
            checked={isCheckedPassword}
            onChange={this.onShowHidePassword}
          />
          <LabelInput htmlFor="showPassword">Show Password</LabelInput>
        </ShowHideContainer>
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginFormContainer>
        <FormContainer onSubmit={this.onSubmitLoginFrom}>
          <LoginWebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo image"
          />
          <InputContainer>{this.renderUsernameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <ButtonContainer type="submit">Login</ButtonContainer>
          {showSubmitError && <ErrorText>*{errorMsg}</ErrorText>}
        </FormContainer>
      </LoginFormContainer>
    )
  }
}

export default Login
