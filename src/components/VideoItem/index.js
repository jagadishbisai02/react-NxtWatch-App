import {formatDistanceToNow} from 'date-fns'
import CartContext from '../../context/CartContext'

import {
  NavLink,
  VideoCardContainer,
  ThumbnailImage,
  VideoDetailsContainer,
  VideoCardBottomContainer,
  VideoDetailsText,
  ProfileContainer,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    title,
    id,
    thumbnailUrl,
    viewCount,
    channel,
    publishedAt,
  } = videoDetails

  const {name, profileImageUrl} = channel

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        return (
          <NavLink to={`videos/${id}`} bgColor={bgColor}>
            <VideoCardContainer>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoCardBottomContainer>
                <ProfileContainer src={profileImageUrl} alt="profile image" />
                <VideoDetailsContainer>
                  <VideoDetailsText textColor={textColor} size={16}>
                    {title}
                  </VideoDetailsText>
                  <VideoDetailsText textColor={textColor} size={12}>
                    {name}
                  </VideoDetailsText>
                  <VideoDetailsText textColor={textColor} size={12}>
                    {viewCount} views .
                    {formatDistanceToNow(new Date(`${publishedAt}`))}
                  </VideoDetailsText>
                </VideoDetailsContainer>
              </VideoCardBottomContainer>
            </VideoCardContainer>
          </NavLink>
        )
      }}
    </CartContext.Consumer>
  )
}

export default VideoCard
