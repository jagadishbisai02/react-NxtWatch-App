import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/LoginRoute'
import ProtectedRoute from './components/ProtectedRoute'
import VideoDetails from './components/VideoItemRoute'
import GamingRoute from './components/GamingRoute'
import TrendingRoute from './components/TrendingRoute'
import HomeRoute from './components/HomeRoute'
import CartContext from './context/CartContext'
import SavedVideos from './components/SavedVideoRoute'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, activeTab: 'HOME', savedVideos: []}

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  activeTabItem = item => {
    this.setState({activeTab: item})
  }

  addVideo = videoDetails => {
    const {savedVideos} = this.state
    const videoObject = savedVideos.find(each => each.id === videoDetails.id)

    if (videoObject) {
      this.setState(prev => ({savedVideos: [...prev.savedVideos]}))
    } else {
      this.setState({savedVideos: [...savedVideos, videoDetails]})
    }
  }

  removeSaveVideos = id => {
    const {savedVideos} = this.state
    const updatedVideos = savedVideos.filter(each => each.id !== id)
    this.setState({savedVideos: updatedVideos})
  }

  render() {
    const {isDarkTheme, savedVideos, activeTab} = this.state

    return (
      <CartContext.Provider
        value={{
          isDarkTheme,
          onChangeTheme: this.onChangeTheme,
          savedVideos,
          addVideo: this.addVideo,
          removeSaveVideos: this.removeSaveVideos,
          activeTab,
          activeTabItem: this.activeTabItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}
export default App
