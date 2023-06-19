import CartContext from '../../context/CartContext'

import {
  NavLink,
  VideoCardContainer,
  ThumbnailImage,
  VideoDetailsContainer,
  VideoCardBottomContainer,
  VideoDetailsText,
} from './styledComponents'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {title, id, thumbnailUrl, viewCount} = videoDetails

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
                <VideoDetailsContainer>
                  <VideoDetailsText textColor={textColor} size={16}>
                    {title}
                  </VideoDetailsText>
                  <VideoDetailsText textColor={textColor} size={12}>
                    {viewCount} views
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

export default GamingVideoItem
