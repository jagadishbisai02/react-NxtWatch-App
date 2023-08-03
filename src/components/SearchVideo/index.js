import VideoCard from '../VideoItem'
import CartContext from '../../context/CartContext'

import {
  NoVideoHeading,
  NoVideoViews,
  NoVideoImage,
  NoVideoNote,
  RetryButton,
  VideoCardList,
} from './styledComponents'

const SearchVideo = props => {
  const {searchedVideos, onRetry} = props
  const videosCount = searchedVideos.length

  console.log(videosCount > 0)

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

        return videosCount > 0 ? (
          <VideoCardList>
            {searchedVideos.map(each => (
              <VideoCard videoDetails={each} key={each.id} />
            ))}
          </VideoCardList>
        ) : (
          <NoVideoViews>
            <NoVideoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideoHeading headingColor={headingColor}>
              No Search result found
            </NoVideoHeading>
            <NoVideoNote noteColor={noteColor}>
              Try different key words or remove search filter
            </NoVideoNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoVideoViews>
        )
      }}
    </CartContext.Consumer>
  )
}
export default SearchVideo
