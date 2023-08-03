import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import CartContext from '../../context/CartContext'

import {
  VideoPlayer,
  PlayVideoTitle,
  PlayVideoStatus,
  PlayVideoStatusContainer,
  PlayVideoDot,
  PlaySocialButtonsContainer,
  SocialButton,
  ButtonText,
  HrLine,
  ChannelImage,
  ChannelContainer,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  BtnContainer,
} from './styledComponents'

const PlayVideoView = props => {
  const {
    videoDetails,
    isLiked,
    isDisliked,
    clickLiked,
    clickDisliked,
    isSaved,
  } = props

  const onClickLike = () => {
    clickLiked()
  }

  const onClickDislike = () => {
    clickDisliked()
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, removeSaveVideos} = value
        const textColor = isDarkTheme ? '#64748b' : '#231f20'

        const addOrRemoveVideos = () => {
          if (isSaved === true) {
            removeSaveVideos(videoDetails.id)
          } else {
            addVideo(videoDetails)
          }
        }

        const onClickSave = () => {
          this.setState(
            prevState => ({isSaved: !prevState.isSaved}),
            addOrRemoveVideos,
          )
        }

        const saveIconColor = isSaved ? '#2363eb' : textColor

        const likeIcon = isLiked ? <AiFillLike /> : <AiOutlineLike />
        const dislikeIcon = isDisliked ? (
          <AiFillDislike />
        ) : (
          <AiOutlineDislike />
        )

        return (
          <VideoPlayer>
            <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
            <PlayVideoTitle textColor={textColor}>
              {videoDetails.title}
            </PlayVideoTitle>
            <PlayVideoStatusContainer>
              <PlayVideoStatus>
                {videoDetails.viewCount} views
                <PlayVideoDot> &#8226; </PlayVideoDot>
                {formatDistanceToNow(new Date(`${videoDetails.publishedAt}`))}
              </PlayVideoStatus>
              <PlaySocialButtonsContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={isLiked ? '#2563eb' : textColor}
                    onClick={onClickLike}
                  >
                    {likeIcon}
                    <ButtonText>Like</ButtonText>
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={isDisliked ? '#2563eb' : textColor}
                    onClick={onClickDislike}
                  >
                    {dislikeIcon}
                    <ButtonText>Dislike</ButtonText>
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={saveIconColor}
                    onClick={onClickSave}
                  >
                    <BiListPlus />
                    <ButtonText>{isSaved ? 'Saved' : 'Save'}</ButtonText>
                  </SocialButton>
                </BtnContainer>
              </PlaySocialButtonsContainer>
            </PlayVideoStatusContainer>
            <HrLine />
            <ChannelContainer>
              <ChannelImage
                src={videoDetails.channel.profileImageUrl}
                alt="channel logo"
              />
              <ChannelInfo>
                <ChannelName textColor={textColor}>
                  {videoDetails.channel.name}
                </ChannelName>
                <ChannelSubscribers textColor={textColor}>
                  {videoDetails.channel.subscriberCount} Subscribers
                </ChannelSubscribers>
                <ChannelDescription textColor={textColor}>
                  {videoDetails.description}
                </ChannelDescription>
              </ChannelInfo>
            </ChannelContainer>
          </VideoPlayer>
        )
      }}
    </CartContext.Consumer>
  )
}

export default PlayVideoView
