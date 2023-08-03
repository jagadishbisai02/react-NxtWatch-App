import {Component} from 'react'
import {MdPlaylistAdd} from 'react-icons/md'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import CartContext from '../../context/CartContext'

import {
  Nav,
  SideBarContainer,
  NavItemsContainer,
  TextItemContainer,
  NavLink,
  ItemText,
  SideBarBottomContainer,
  BottomText,
  IconsContainer,
  IconImage,
  BottomItemText,
} from './styledComponents'

class SideBar extends Component {
  renderStatusItem = () => (
    <CartContext.Consumer>
      {value => {
        const {activeTabItem, activeTab, isDarkTheme} = value
        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        const activeTabBag = isDarkTheme ? '#475569' : '#cbd5e1'
        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        const onClickHomeTab = () => {
          activeTabItem('HOME')
        }

        const onClickTrendingTabItem = () => {
          activeTabItem('TRENDING')
        }

        const onClickGamingTabItem = () => {
          activeTabItem('GAMING')
        }

        const onClickSaveVideosTabItem = () => {
          activeTabItem('SAVED VIDEOS')
        }

        return (
          <Nav>
            <SideBarContainer bgColor={bgColor}>
              <NavItemsContainer>
                <NavLink to="/">
                  <TextItemContainer
                    key="home"
                    isActive={activeTab === 'HOME' ? activeTabBag : 'none'}
                    onClick={onClickHomeTab}
                  >
                    <AiFillHome
                      size={30}
                      color={activeTab === 'HOME' ? '#ff0000' : '#909090'}
                    />
                    <ItemText textColor={textColor}>Home</ItemText>
                  </TextItemContainer>
                </NavLink>

                <NavLink to="/trending">
                  <TextItemContainer
                    key="trending"
                    isActive={activeTab === 'TRENDING' ? activeTabBag : 'none'}
                    onClick={onClickTrendingTabItem}
                  >
                    <AiFillFire
                      size={30}
                      color={activeTab === 'TRENDING' ? '#ff0000' : '#909090'}
                    />
                    <ItemText textColor={textColor}>Trending</ItemText>
                  </TextItemContainer>
                </NavLink>

                <NavLink
                  to="/gaming"
                  color={activeTab === 'GAMING' ? '#ff0000' : '#909090'}
                >
                  <TextItemContainer
                    key="gaming"
                    isActive={activeTab === 'GAMING' ? activeTabBag : 'none'}
                    onClick={onClickGamingTabItem}
                  >
                    <SiYoutubegaming
                      size={30}
                      color={activeTab === 'GAMING' ? '#ff0000' : '#909090'}
                    />
                    <ItemText textColor={textColor}>Gaming</ItemText>
                  </TextItemContainer>
                </NavLink>
                <NavLink
                  to="/saved-videos"
                  color={activeTab === 'SAVED VIDEOS' ? '#ff0000' : '#909090'}
                >
                  <TextItemContainer
                    key="save"
                    isActive={
                      activeTab === 'SAVED VIDEOS' ? activeTabBag : 'none'
                    }
                    onClick={onClickSaveVideosTabItem}
                  >
                    <MdPlaylistAdd />
                    <ItemText textColor={textColor}>Saved Videos</ItemText>
                  </TextItemContainer>
                </NavLink>
              </NavItemsContainer>
              <SideBarBottomContainer>
                <BottomText textColor={textColor}>CONTACT US</BottomText>
                <IconsContainer>
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </IconsContainer>
                <BottomItemText textColor={textColor}>
                  Enjoy! Now to see your channels and recommendations!
                </BottomItemText>
              </SideBarBottomContainer>
            </SideBarContainer>
          </Nav>
        )
      }}
    </CartContext.Consumer>
  )

  render() {
    return <>{this.renderStatusItem()}</>
  }
}

export default SideBar
