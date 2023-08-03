import styled from 'styled-components/macro'

export const NavHeader = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  position: fixed;
  scroll-behavior: smooth;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px;) {
    flex-direction: column;
  }
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 10px;
  margin-right: 10px;
`

export const ContentContainer = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  width: 15%;
`

export const LogoutButton = styled.button`
  color: #ffffff;
  background-color: ${props => props.bgBtnColor};
  font-size: 10px;
  font-weight: 600;
  font-family: 'Roboto';
  border: ${props => props.border};
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  outline: none;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => props.color};
`

export const WebsiteLogo = styled.img`
  width: 110px;
  @media screen and (min-width: 768px) {
    width: 165px;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 200px;
  width: 400px;
  background-color: #cbd5e1;
  border-radius: 10px;
`

export const NavbarLargeContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: ${props => props.bgColor};
  }
`
export const NavbarSmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const CloseButton = styled.button`
  color: #7e858e;
  background-color: transparent;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Roboto';
  border: 1px solid #7e858e;
  border-radius: 10px;
  padding: 13px 20px;
  cursor: pointer;
  outline: none;
  align-self: flex-end;
`

export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #00306e;
  color: #ffffff;
  padding: 15px 20px;
  border: none;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
`

export const ModalDesc = styled.p`
  font-size: 25px;
  font-family: 'Roboto';
  margin: 10px;
  color: #000000;
`

export const AlignColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #cbd5e1;
  padding: 20px;
  border-radius: 10px;
`

export const ContentListItem = styled.li`
  display: flex;
`
