import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiFillFire} from 'react-icons/ai'
import CartContext from '../../context/CartContext'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideoItem from '../TrendingVideoItem'

import {
  PageLoader,
  NotFoundContainer,
  HomeContainer,
  Image,
  HomeStickyContainer,
  HomeSideContainer,
  Heading,
  Desc,
  RetryButton,
  SearchVideosContainer,
  VideosContainer,
  VideosHeaderContainer,
  Icons,
} from './styledComponents'

class SavedVideos extends Component {
  renderSavedVideos = () => (
    <CartContext.Consumer>
      {value => {
        const {savedVideos, isDarkTheme} = value
        console.log(savedVideos)
        const bgColor = isDarkTheme ? '#0f0f0f' : '#f4f4f4'
        const textColor = isDarkTheme ? '#f4f4f4' : '#181818'
        const headBgColor = isDarkTheme ? '#231f20' : '#d7dfe9'
        const iconBgColor = isDarkTheme ? '#181818' : '#f4f4f4'
        const isVideoAvailable = savedVideos.length === 0
        console.log(isDarkTheme)

        return isVideoAvailable ? (
          <NotFoundContainer bgColor={bgColor}>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <Heading textColor={textColor}>No Saved videos found</Heading>
            <Desc textColor={textColor}>
              Try different key words or remove search filter
            </Desc>
            <RetryButton type="button" onClick={this.getVideos}>
              Retry
            </RetryButton>
          </NotFoundContainer>
        ) : (
          <SearchVideosContainer bgColor={bgColor}>
            <VideosHeaderContainer bgColor={headBgColor}>
              <Icons size={30} color="#ff0000" iconBgColor={iconBgColor}>
                <AiFillFire />
              </Icons>
              <Heading size={30} textColor={textColor}>
                Saved Videos
              </Heading>
            </VideosHeaderContainer>
            <VideosContainer>
              {savedVideos.map(each => (
                <TrendingVideoItem videoDetails={each} key={each.id} />
              ))}
            </VideosContainer>
          </SearchVideosContainer>
        )
      }}
    </CartContext.Consumer>
  )

  renderLoadingView = () => (
    <PageLoader className="loader-container" data-testid="loader">
      <Loader type="FourDots" color="#3b82f6" height="50" width="70" />
    </PageLoader>
  )

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <div data-testid="savedVideo">
              <Header />
              <HomeContainer bgColor={bgColor} data-testid="home">
                <HomeStickyContainer>
                  <SideBar />
                </HomeStickyContainer>
                <HomeSideContainer bgColor={bgColor}>
                  {this.renderSavedVideos()}
                </HomeSideContainer>
              </HomeContainer>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default SavedVideos
