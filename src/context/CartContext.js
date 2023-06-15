import React from 'react'

const CartContext = React.createContext({
  isDarkTheme: false,
  onChangeTheme: () => {},
  activeTab: '',
  activeTabItem: () => {},
})
export default CartContext
