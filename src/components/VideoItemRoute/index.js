import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import FailureView from '../FailureView'
import PlayVideoView from '../PlayVideoView'

import CartContext from '../../context/CartContext'

import Header from '../Header'

import SideBar from '../SideBar'

import {VideosDetailContainer, LoaderContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetails extends Component {
  state = {
    videoDetails: [],
    apiStatus: apiStatusConstants.initial,
    isSaved: false,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = {
        id: fetchedData.video_details.id,
        title: fetchedData.video_details.title,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        videoUrl: fetchedData.video_details.video_url,
        channel: {
          name: fetchedData.video_details.channel.name,
          profileImageUrl: fetchedData.video_details.channel.profile_image_url,
          subscriberCount: fetchedData.video_details.channel.subscriber_count,
        },
        viewCount: fetchedData.video_details.view_count,
        publishedAt: fetchedData.video_details.published_at,
        description: fetchedData.video_details.description,
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  clickLiked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  clickDisliked = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  renderLoadingView = () => (
    <LoaderContainer className="product-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  onRetry = () => {
    this.getVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderPlayVideoView = () => {
    const {videoDetails, isLiked, isDisliked, isSaved} = this.state

    return (
      <PlayVideoView
        videoDetails={videoDetails}
        clickLiked={this.clickLiked}
        clickDisliked={this.clickDisliked}
        isSaved={isSaved}
        isLiked={isLiked}
        isDisliked={isDisliked}
      />
    )
  }

  renderVideoDetailView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderPlayVideoView()
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
            <>
              <Header />
              <SideBar />
              <VideosDetailContainer
                data-testid="videoItemDetails"
                bgColor={bgColor}
              >
                {this.renderVideoDetailView()}
              </VideosDetailContainer>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default VideoDetails
