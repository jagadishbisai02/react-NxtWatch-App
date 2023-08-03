import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import {AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import CartContext from '../../context/CartContext'
import SearchVideo from '../SearchVideo'
import FailureView from '../FailureView'
import SideBar from '../SideBar'

import {
  HomeContainer,
  SearchContainer,
  BannerImage,
  SearchIconContainer,
  SearchInput,
  BannerContainer,
  BannerCloseButton,
  BannerButton,
  BannerLeftPart,
  BannerRightPart,
  BannerText,
  PageLoader,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomeRoute extends Component {
  state = {
    display: 'flex',
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    searchedVideos: [],
    searchValue: '',
  }

  componentDidMount() {
    this.getVideos()
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
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
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

  onCloseBanner = () => {
    this.setState({display: 'none'})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  getSearchResult = () => {
    this.getVideos()
  }

  renderVideosView = () => {
    const {searchedVideos} = this.state

    return (
      <SearchVideo searchedVideos={searchedVideos} onRetry={this.onRetry} />
    )
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoadingView = () => (
    <PageLoader className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </PageLoader>
  )

  renderHomeVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {searchInput, display} = this.state

    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const bannerDisplay = display === 'flex' ? 'flex' : 'none'

          return (
            <>
              <Header />
              <SideBar />
              <HomeContainer data-testid="home" bgColor={bgColor}>
                <BannerContainer data-testid="banner" display={bannerDisplay}>
                  <BannerLeftPart>
                    <BannerImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerText>Buy Nxt Watch Premium </BannerText>
                    <BannerButton type="button">GET IT NOW</BannerButton>
                  </BannerLeftPart>
                  <BannerRightPart>
                    <BannerCloseButton
                      type="button"
                      data-testid="close"
                      onClick={this.onCloseBanner}
                    >
                      <IoMdClose size={30} color="#231f20" />
                    </BannerCloseButton>
                  </BannerRightPart>
                </BannerContainer>
                <SearchContainer bgColor={bgColor}>
                  <SearchInput
                    type="search"
                    onChange={this.onChangeSearchInput}
                    value={searchInput}
                    placeholder="Search"
                    color={textColor}
                  />
                  <SearchIconContainer
                    type="button"
                    onClick={this.getSearchResult}
                    data-testid="searchButton"
                  >
                    <AiOutlineSearch size={20} />
                  </SearchIconContainer>
                </SearchContainer>
                {this.renderHomeVideos()}
              </HomeContainer>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default HomeRoute
