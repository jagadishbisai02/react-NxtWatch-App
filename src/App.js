import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './components/LoginRoute'
import ProtectedRoute from './components/ProtectedRoute'
import VideoDetails from './components/VideoItemRoute'
import GamingRoute from './components/GamingRoute'
import TrendingRoute from './components/TrendingRoute'
import HomeRoute from './components/HomeRoute'
import CartContext from './context/CartContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, activeTab: 'HOME'}

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  activeTabItem = item => {
    this.setState({activeTab: item})
  }

  render() {
    const {isDarkTheme, activeTab} = this.state

    return (
      <CartContext.Provider
        value={{
          isDarkTheme,
          onChangeTheme: this.onChangeTheme,
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
        </Switch>
      </CartContext.Provider>
    )
  }
}
export default App
