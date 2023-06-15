import styled from 'styled-components/macro'

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 90%;
  max-width: 1110px;
  margin: auto;
  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`

export const LoginWebsiteLogo = styled.img`
  width: 185px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  width: 100%;
  max-width: 350px;
  border-radius: 8px;
  @media screen and (min-width: 992px) {
    width: 350px;
    flex-shrink: 0;
    box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
    padding: 64px 48px;
  }
`

export const ShowHideContainer = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: flex-start;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`

export const LabelInput = styled.label`
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 3px;
  margin-bottom: 0px;
  line-height: 16px;
  color: '#475569';
`

export const UsernameInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px;
  outline: none;
`

export const PasswordInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px;
  outline: none;
`

export const CheckboxInput = styled.input`
  margin-left: 4px;
`

export const ButtonContainer = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto';
  border: none;
  border-radius: 5px;
  padding: 10px 32px;
  margin-top: 8px;
  width: 100%;
`

export const ErrorText = styled.p`
  color: #ff0b37;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  line-height: 16px;
`
