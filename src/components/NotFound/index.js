import CartContext from '../../context/CartContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  NotFoundContainer,
  NotFoundVideoImage,
  NotFoundVideosHeading,
  NotFoundVideosNote,
  NotFoundVideosView,
  RetryButton,
} from './styledComponents'

const NotFound = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }
  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const bgColor = isDarkTheme ? '#231f20' : '#f4f4f4'
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#f9f9f9' : '#475569'

        return (
          <>
            <Header />
            <SideBar />
            <NotFoundContainer bgColor={bgColor}>
              <NotFoundVideosView>
                <NotFoundVideoImage
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  }
                  alt="not found"
                />
                <NotFoundVideosHeading headingColor={headingColor}>
                  Page Not Found
                </NotFoundVideosHeading>
                <NotFoundVideosNote noteColor={noteColor}>
                  we are sorry, the page you requested could not be found.
                </NotFoundVideosNote>
                <RetryButton type="button" onClick={onClickRetry}>
                  Retry
                </RetryButton>
              </NotFoundVideosView>
            </NotFoundContainer>
          </>
        )
      }}
    </CartContext.Consumer>
  )
}

export default NotFound
