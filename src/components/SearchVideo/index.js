import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch} from 'react-icons/ai'
import CartContext from '../../context/CartContext'
import VideoCard from '../VideoCardTwo'

import {
  PageLoader,
  NothingContainer,
  Image,
  Heading,
  Desc,
  RetryButton,
  SearchVideosContainer,
  VideosContainer,
  SearchContainer,
  SearchInput,
  SearchBtn,
  VideoContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SearchVideos extends Component {
  state = {
    searchInput: '',
    searchValue: '',
    apiStatus: apiStatusConstants.initial,
    searchedVideos: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    const {searchInput} = this.state
    this.setState({searchValue: searchInput}, this.getVideos)
  }

  onEnterClickSearch = event => {
    if (event.key === 'Enter') {
      const {searchInput} = this.state
      this.setState({searchValue: searchInput}, this.getVideos)
    }
  }

  getVideos = async () => {
    const {searchValue} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
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
        searchedVideos: UpdatedVideos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <PageLoader className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </PageLoader>
  )

  renderHomeVideos = () => (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {searchedVideos} = this.state

        const bgColor = isDarkTheme ? '#231f20' : '#f9f9f9'
        const isVideoAvailable = searchedVideos.length === 0

        return isVideoAvailable ? (
          <NothingContainer>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <Heading>No Search result found</Heading>
            <Desc>Try different key words or remove search filter</Desc>
            <RetryButton type="button" onClick={this.getVideos}>
              Retry
            </RetryButton>
          </NothingContainer>
        ) : (
          <SearchVideosContainer bgColor={bgColor}>
            <VideosContainer>
              {searchedVideos.map(each => (
                <VideoCard videoDetails={each} key={each.id} />
              ))}
            </VideosContainer>
          </SearchVideosContainer>
        )
      }}
    </CartContext.Consumer>
  )

  renderFailureView = () => (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const bgColor = isDarkTheme ? '#231f20' : '#f9f9f9'

        const textColor = isDarkTheme ? '#231f20' : '#f9f9f9'

        return (
          <NothingContainer bgColor={bgColor}>
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
          </NothingContainer>
        )
      }}
    </CartContext.Consumer>
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomeVideos()
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
      <SearchContainer>
        <SearchInput
          type="search"
          onChange={this.onChangeSearchInput}
          placeholder="Search"
          onKeyDown={this.onEnterClickSearch}
        />
        <SearchBtn
          type="button"
          onClick={this.onClickSearchButton}
          data-testid="searchButton"
        >
          <AiOutlineSearch />
        </SearchBtn>
        <VideoContainer>{this.renderAllVideos()}</VideoContainer>
      </SearchContainer>
    )
  }
}

export default SearchVideos
