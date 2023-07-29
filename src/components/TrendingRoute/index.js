import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiFillFire} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Header from '../Header'
import CartContext from '../../context/CartContext'
import SideBar from '../SideBar'
import TrendingVideoItem from '../TrendingVideoItem'

import {
  PageLoader,
  NotFoundContainer,
  Image,
  Heading,
  Desc,
  RetryButton,
  SearchVideosContainer,
  VideosContainer,
  HomeContainer,
  HomeStickyContainer,
  HomeSideContainer,
  VideosHeaderContainer,
  Icons,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchedVideos: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const UpdatedVideos = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        searchedVideos: UpdatedVideos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <PageLoader className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </PageLoader>
  )

  renderTrendingVideos = () => (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {searchedVideos} = this.state

        const bgColor = isDarkTheme ? '#0f0f0f' : '#f4f4f4'
        const textColor = isDarkTheme ? '#f4f4f4' : '#231f20'
        const headBgColor = isDarkTheme ? '#231f20' : '#d7dfe9'
        const iconBgColor = isDarkTheme ? '#181818' : '#f4f4f4'

        return (
          <SearchVideosContainer bgColor={bgColor}>
            <VideosHeaderContainer bgColor={headBgColor}>
              <Icons size={30} color="#ff0000" iconBgColor={iconBgColor}>
                <AiFillFire />
              </Icons>
              <Heading size={30} textColor={textColor}>
                Trending
              </Heading>
            </VideosHeaderContainer>
            <VideosContainer>
              {searchedVideos.map(each => (
                <TrendingVideoItem videoDetails={each} key={each.id} />
              ))}
            </VideosContainer>
          </SearchVideosContainer>
        )
      }}
    </CartContext.Consumer>
  )

  renderFailureView = () => (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const bgColor = isDarkTheme ? '#0f0f0f' : '#f4f4f4'

        const textColor = isDarkTheme ? '#231f20' : '#f9f9f9'

        return (
          <NotFoundContainer bgColor={bgColor}>
            <Image
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              }
              alt="failure view"
            />
            <Heading textColor={textColor}>Oops! Something Went Wrong</Heading>
            <Desc>
              We are having some trouble to Complete your request. Please try
              again.
            </Desc>
            <RetryButton type="button" onClick={this.getVideos}>
              Retry
            </RetryButton>
          </NotFoundContainer>
        )
      }}
    </CartContext.Consumer>
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideos()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f4f4f4'

          return (
            <div data-testid="trending">
              <Header />
              <HomeContainer bgColor={bgColor} data-testid="home">
                <HomeStickyContainer>
                  <SideBar />
                </HomeStickyContainer>
                <HomeSideContainer bgColor={bgColor}>
                  {this.renderAllVideos()}
                </HomeSideContainer>
              </HomeContainer>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default TrendingRoute
