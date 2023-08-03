import CartContext from '../../context/CartContext'

import {
  ItemLink,
  GamingListItem,
  GamingThumbnailImage,
  GamingContentSection,
  GamingTitle,
  GamingViewsAndDate,
} from './styledComponents'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {title, id, thumbnailUrl, viewCount} = videoDetails

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        return (
          <ItemLink to={`videos/${id}`} className="link">
            <GamingListItem>
              <GamingThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <GamingContentSection>
                <GamingTitle textColor={textColor}>{title}</GamingTitle>
                <GamingViewsAndDate textColor={textColor}>
                  {viewCount} views
                </GamingViewsAndDate>
              </GamingContentSection>
            </GamingListItem>
          </ItemLink>
        )
      }}
    </CartContext.Consumer>
  )
}

export default GamingVideoItem
