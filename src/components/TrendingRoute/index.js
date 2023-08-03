import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiFillFire} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Header from '../Header'
import CartContext from '../../context/CartContext'
import SideBar from '../SideBar'
import TrendingVideoItem from '../TrendingVideoItem'
import FailureView from '../FailureView'

import {
  PageLoader,
  TrendingContainer,
  TrendingVideoTitle,
  TrendingVideoList,
  TitleIconContainer,
  TrendingText,
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
    trendingVideos: [],
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
        trendingVideos: UpdatedVideos,
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
    const {trendingVideos} = this.state

    return (
      <TrendingVideoList>
        {trendingVideos.map(each => (
          <TrendingVideoItem videoDetails={each} key={each.id} />
        ))}
      </TrendingVideoList>
    )
  }

  onRetry = () => {
    this.getVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderTrendingVideos = () => {
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
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f4f4f4'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const headBgColor = isDarkTheme ? '#181818' : '#94a3b8'

          return (
            <div data-testid="trending">
              <Header />
              <SideBar />
              <TrendingContainer data-testid="trending" bgColor={bgColor}>
                <TrendingVideoTitle headBgColor={headBgColor}>
                  <TitleIconContainer>
                    <AiFillFire size={35} color="#ff0000" />
                  </TitleIconContainer>
                  <TrendingText textColor={textColor}>Trending</TrendingText>
                </TrendingVideoTitle>
                {this.renderTrendingVideos()}
              </TrendingContainer>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default TrendingRoute
