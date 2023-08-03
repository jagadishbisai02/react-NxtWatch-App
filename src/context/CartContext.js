import React from 'react'

const CartContext = React.createContext({
  isDarkTheme: false,
  onChangeTheme: () => {},
  savedVideos: [],
  addVideo: () => {},
  removeSavedVideos: () => {},
  activeTab: '',
  activeTabItem: () => {},
})
export default CartContext
