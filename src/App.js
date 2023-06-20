import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './components/LoginRoute'
import ProtectedRoute from './components/ProtectedRoute'
import VideoDetails from './components/VideoItemRoute'
import GamingRoute from './components/GamingRoute'
import TrendingRoute from './components/TrendingRoute'
import HomeRoute from './components/HomeRoute'
import CartContext from './context/CartContext'
import SavedVideos from './components/SavedVideoRoute'
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

  addToSaveVideos = videoDetails => {
    const {savedVideos} = this.state
    console.log(savedVideos)
    const videoObject = savedVideos.find(each => each.id === videoDetails.id)
    console.log(videoObject)

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

    console.log(savedVideos)

    return (
      <CartContext.Provider
        value={{
          isDarkTheme,
          onChangeTheme: this.onChangeTheme,
          savedVideos,
          addToSaveVideos: this.addToSaveVideos,
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
          <ProtectedRoute exact path="saved-videos" component={SavedVideos} />
        </Switch>
      </CartContext.Provider>
    )
  }
}
export default App
