import {formatDistanceToNow} from 'date-fns'
import CartContext from '../../context/CartContext'

import {
  NavLink,
  VideoCardContainer,
  ThumbnailImage,
  VideoDetailsContainer,
  VideoCardBottomContainer,
  VideoDetailsText,
} from './styledComponents'

const TrendingVideoItem = props => {
  const {videoDetails} = props
  const {
    title,
    id,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails
  const {name} = channel

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

        const textColor = isDarkTheme ? '#f9f9f9' : '#0f0f0f'

        return (
          <NavLink to={`videos/${id}`} bgColor={bgColor}>
            <VideoCardContainer>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoCardBottomContainer>
                <VideoDetailsContainer>
                  <VideoDetailsText textColor={textColor} size={16}>
                    {title}
                  </VideoDetailsText>
                  <VideoDetailsText textColor={textColor} size={12}>
                    {name}
                  </VideoDetailsText>
                  <VideoDetailsText textColor={textColor} size={12}>
                    {viewCount} views .{' '}
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

export default TrendingVideoItem
