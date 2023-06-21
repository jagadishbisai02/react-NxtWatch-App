import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'

import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'

import {RiPlayListAddFill} from 'react-icons/ri'

import CartContext from '../../context/CartContext'

import Header from '../Header'

import SideBar from '../SideBar'

import {
  HomeContainer,
  ProductLoaderContainer,
  VideoDetailsSideContainer,
  VideoDetailsTitle,
  VideoDetailsTextContainer,
  ViewDetailsContainer,
  LikeContainer,
  ViewsText,
  IconsContainer,
  HorizontalLine,
  ChannelLogo,
  ChannelContainer,
  ChannelDetailsContainer,
  LogoContainer,
  NotFoundContainer,
  Image,
  Heading,
  Desc,
  RetryButton,
  VideoDetailContainer,
  TextContainer,
  NameSubscription,
} from './styledComponents'

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
    isVideoSaved: false,
    isLiked: false,
    isDisLiked: false,
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

  renderSpecificVideoDetails = () => (
    <CartContext.Consumer>
      {value => {
        const {videoDetails, isLiked, isDisLiked, isVideoSaved} = this.state
        const {
          id,
          channel,
          title,
          viewCount,
          publishedAt,
          description,
          videoUrl,
        } = videoDetails
        const {name, profileImageUrl, subscriberCount} = channel
        const {addToSaveVideos, removeSaveVideos, isDarkTheme} = value

        const addOrRemoveVideos = () => {
          if (isVideoSaved === true) {
            removeSaveVideos(id)
          } else {
            addToSaveVideos(videoDetails)
          }
        }

        const saveVideoToList = () => {
          this.setState(
            prev => ({isVideoSaved: !prev.isVideoSaved}),
            addOrRemoveVideos,
          )
        }

        const onClickLikeButton = () => {
          this.setState(prev => ({isLiked: !prev.isLiked, isDisLiked: false}))
        }

        const onClickDisLikeButton = () => {
          this.setState(prev => ({
            isDisLiked: !prev.isDisLiked,
            isLiked: false,
          }))
        }

        const likeClass = isLiked ? '#3b82f6' : '#616e7c'
        const disLikeClass = isDisLiked ? '#3b82f6' : '#616e7c'

        const likeIcon = isLiked ? <AiFillLike /> : <AiOutlineLike />
        const disLikeIcon = isDisLiked ? (
          <AiFillDislike />
        ) : (
          <AiOutlineDislike />
        )

        const bgColor = isDarkTheme ? '#181818' : '#f1f1f1'
        const textColor = isDarkTheme ? '#f1f1f1' : '#181818'

        const hrLine = isDarkTheme ? '#f1f1f1' : '#181818'

        return (
          <div data-testid="videoItemDetails">
            <Header />
            <HomeContainer bgColor={bgColor}>
              <SideBar />
              <VideoDetailsSideContainer>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="98%"
                  height="500px"
                />
                <VideoDetailsTextContainer>
                  <VideoDetailsTitle textColor={textColor}>
                    {title}
                  </VideoDetailsTitle>
                  <ViewDetailsContainer>
                    <TextContainer>
                      <ViewsText textColor={textColor}>
                        {viewCount} views
                      </ViewsText>
                      <ViewsText textColor={textColor}>
                        .{formatDistanceToNow(new Date(`${publishedAt}`))}
                      </ViewsText>
                    </TextContainer>
                    <LikeContainer>
                      <IconsContainer
                        type="button"
                        onClick={onClickLikeButton}
                        color={likeClass}
                      >
                        {likeIcon}
                        <ViewsText color={likeClass}>Like</ViewsText>
                      </IconsContainer>
                      <IconsContainer
                        type="button"
                        onClick={onClickDisLikeButton}
                        color={disLikeClass}
                      >
                        {disLikeIcon}
                        <ViewsText color={disLikeClass}>Dislike</ViewsText>
                      </IconsContainer>
                      <IconsContainer
                        type="button"
                        onClick={saveVideoToList}
                        color={isVideoSaved ? '#4f46e5' : '#616e7c'}
                      >
                        <RiPlayListAddFill />
                        <ViewsText color={isVideoSaved ? '#4f46e5' : '#616e7c'}>
                          Saved
                        </ViewsText>
                      </IconsContainer>
                    </LikeContainer>
                  </ViewDetailsContainer>
                  <HorizontalLine bgColor={hrLine} />
                  <ChannelContainer>
                    <ChannelDetailsContainer>
                      <LogoContainer>
                        <ChannelLogo src={profileImageUrl} alt="channel logo" />
                      </LogoContainer>
                      <NameSubscription>
                        <ViewsText textColor={textColor}>{name}</ViewsText>
                        <ViewsText textColor={textColor}>
                          {subscriberCount} Subscribers
                        </ViewsText>
                        <ViewsText textColor={textColor}>
                          {description}
                        </ViewsText>
                      </NameSubscription>
                    </ChannelDetailsContainer>
                  </ChannelContainer>
                </VideoDetailsTextContainer>
              </VideoDetailsSideContainer>
            </HomeContainer>
          </div>
        )
      }}
    </CartContext.Consumer>
  )

  renderLoadingView = () => (
    <ProductLoaderContainer
      className="product-loader-container"
      data-testid="loader"
    >
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </ProductLoaderContainer>
  )

  renderFailureView = () => (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const bgColor = isDarkTheme ? '#231f20' : '#f4f4f4'

        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <NotFoundContainer bgColor={bgColor}>
            <Image
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
              }
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
        return this.renderSpecificVideoDetails()
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
          const bgColor = isDarkTheme ? '#231f20' : '#f4f4f4'

          return (
            <VideoDetailContainer bgColor={bgColor}>
              {this.renderAllVideos()}
            </VideoDetailContainer>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default VideoDetails
