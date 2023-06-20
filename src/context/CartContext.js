import React from 'react'

const CartContext = React.createContext({
  isDarkTheme: false,
  onChangeTheme: () => {},
  savedVideos: [],
  addToSavedVideos: () => {},
  removeSavedVideos: () => {},
  activeTab: '',
  activeTabItem: () => {},
})
export default CartContext
