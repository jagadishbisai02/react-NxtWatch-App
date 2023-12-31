import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FiSun} from 'react-icons/fi'
import {BsMoon} from 'react-icons/bs'
import Popup from 'reactjs-popup'

import {
  NavHeader,
  ProfileImage,
  ContentContainer,
  LogoutButton,
  ThemeButton,
  WebsiteLogo,
  ModalContainer,
  CloseButton,
  AlignRow,
  ConfirmButton,
  ModalDesc,
  AlignColumn,
  ContentListItem,
} from './styledComponents'

import CartContext from '../../context/CartContext'

const Header = props => (
  <CartContext.Consumer>
    {value => {
      const {onChangeTheme, isDarkTheme} = value

      const onClickChangeTheme = () => {
        onChangeTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const color = isDarkTheme ? '#f9f9f9' : '#00306e'
      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const border = isDarkTheme ? '1px solid #f9f9f9' : 'none'
      const bgBtnColor = isDarkTheme ? 'transparent' : '#4f46e5'

      return (
        <NavHeader bgColor={bgColor}>
          <Link to="/">
            <WebsiteLogo src={websiteLogo} alt="website logo" />
          </Link>
          <ContentContainer>
            <ContentListItem>
              <ThemeButton
                onClick={onClickChangeTheme}
                data-testid="theme"
                color={color}
                bgBtnColor={bgBtnColor}
              >
                {isDarkTheme ? <FiSun /> : <BsMoon />}
              </ThemeButton>
            </ContentListItem>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <LogoutButton
                  type="button"
                  bgBtnColor={bgBtnColor}
                  border={border}
                >
                  Logout
                </LogoutButton>
              }
              className="popup-content"
            >
              {close => (
                <ModalContainer>
                  <AlignColumn>
                    <ModalDesc>Are you sure, you want to logout</ModalDesc>
                    <AlignRow>
                      <CloseButton
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </CloseButton>
                      <ConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </AlignRow>
                  </AlignColumn>
                </ModalContainer>
              )}
            </Popup>
          </ContentContainer>
        </NavHeader>
      )
    }}
  </CartContext.Consumer>
)

export default withRouter(Header)
