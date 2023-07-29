import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiFillFire} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Header from '../Header'
import CartContext from '../../context/CartContext'
import SideBar from '../SideBar'
import GamingVideoItem from '../GamingVideoItem'
import FailureView from '../FailureView'

import {
  PageLoader,
  Heading,
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

class GamingRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingVideos: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
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
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideos: UpdatedVideos,
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

  renderVideosView = () => {
    const {gamingVideos} = this.state

    return (
      <VideosContainer>
        {gamingVideos.map(each => (
          <GamingVideoItem videoDetails={each} key={each.id} />
        ))}
      </VideosContainer>
    )
  }

  onRetry = () => {
    this.getVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderAllVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
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
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const headBgColor = isDarkTheme ? '#231f20' : '#d7dfe9'
          const iconBgColor = isDarkTheme ? '#181818' : '#f4f4f4'

          return (
            <div>
              <Header />
              <HomeContainer bgColor={bgColor} data-testid="home">
                <HomeStickyContainer>
                  <SideBar />
                </HomeStickyContainer>
                <HomeSideContainer data-testid="gaming" bgColor={bgColor}>
                  <SearchVideosContainer bgColor={bgColor}>
                    <VideosHeaderContainer bgColor={headBgColor}>
                      <Icons
                        size={30}
                        color="#ff0000"
                        iconBgColor={iconBgColor}
                      >
                        <AiFillFire />
                      </Icons>
                      <Heading size={30} textColor={textColor}>
                        Gaming
                      </Heading>
                    </VideosHeaderContainer>
                  </SearchVideosContainer>
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

export default GamingRoute
