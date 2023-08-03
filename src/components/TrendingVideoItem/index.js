import {formatDistanceToNow} from 'date-fns'
import CartContext from '../../context/CartContext'

import {
  ItemLink,
  TrendingListItem,
  TrendingThumbnailImage,
  TrendingContentSection,
  TrendingTitle,
  TrendingChannelName,
  TrendingViewsAndDate,
  TrendingDot,
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
        const textColor = isDarkTheme ? '#f9f9f9' : '#0f0f0f'

        return (
          <ItemLink to={`videos/${id}`} className="link">
            <TrendingListItem>
              <TrendingThumbnailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingContentSection>
                <TrendingTitle textColor={textColor} size={16}>
                  {title}
                </TrendingTitle>
                <TrendingChannelName textColor={textColor} size={12}>
                  {name}
                </TrendingChannelName>
                <TrendingViewsAndDate textColor={textColor} size={12}>
                  {viewCount} views <TrendingDot>&#8226; </TrendingDot>
                  {formatDistanceToNow(new Date(`${publishedAt}`))}
                </TrendingViewsAndDate>
              </TrendingContentSection>
            </TrendingListItem>
          </ItemLink>
        )
      }}
    </CartContext.Consumer>
  )
}

export default TrendingVideoItem
