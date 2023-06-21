import CartContext from '../../context/CartContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  NotFoundContainer,
  Image,
  Heading,
  Desc,
  HomeContainer,
  HomeStickyContainer,
} from './styledComponents'

const NotFound = () => (
  <CartContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? '#231f20' : '#f4f4f4'

      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

      return (
        <div data-testid="home">
          <Header />
          <HomeContainer bgColor={bgColor}>
            <HomeStickyContainer>
              <SideBar />
            </HomeStickyContainer>
            <NotFoundContainer bgColor={bgColor}>
              <Image
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                }
              />
              <Heading textColor={textColor}>Page Not Found</Heading>
              <Desc textColor={textColor}>
                We are sorry, the page your requested could not be found
              </Desc>
            </NotFoundContainer>
          </HomeContainer>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default NotFound
