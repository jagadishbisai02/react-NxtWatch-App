import {Component} from 'react'
import {MdPlaylistAdd} from 'react-icons/md'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import CartContext from '../../context/CartContext'

import {
  SideBarContainer,
  NavItemsContainer,
  TextItemContainer,
  NavLink,
  ItemText,
  SideBarBottomContainer,
  BottomText,
  IconsContainer,
  IconImage,
} from './styledComponents'

class SideBar extends Component {
  renderStatusItem = () => (
    <CartContext.Consumer>
      {value => {
        const {activeTabItem, activeTab, isDarkTheme} = value

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

        const bgColor = isDarkTheme ? '#ffffff' : '#000000'

        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        return (
          <SideBarContainer>
            <NavItemsContainer>
              <TextItemContainer
                isActive={activeTab === 'HOME' ? '#f1f5f9' : 'transparent'}
                isActiveColor={bgColor}
                onClick={onClickHomeTab}
              >
                <NavLink
                  to="/"
                  color={activeTab === 'HOME' ? '#ff0000' : {bgColor}}
                >
                  <AiFillHome />
                  <ItemText
                    color={activeTab === 'HOME' ? '#ff0000' : {textColor}}
                  >
                    Home
                  </ItemText>
                </NavLink>
              </TextItemContainer>
              <TextItemContainer
                isActive={activeTab === 'TRENDING' ? '#f1f5f9' : 'transparent'}
                onClick={onClickTrendingTabItem}
              >
                <NavLink
                  to="/trending"
                  color={activeTab === 'TRENDING' ? '#ff0000' : {bgColor}}
                >
                  <AiFillFire />
                  <ItemText
                    color={activeTab === 'TRENDING' ? '#ff0000' : {textColor}}
                  >
                    Trending
                  </ItemText>
                </NavLink>
              </TextItemContainer>
              <TextItemContainer
                isActive={activeTab === 'GAMING' ? '#f1f5f9' : 'transparent'}
                isActiveColor={bgColor}
                onClick={onClickGamingTabItem}
              >
                <NavLink
                  to="/gaming"
                  color={activeTab === 'GAMING' ? '#ff0000' : {bgColor}}
                >
                  <SiYoutubegaming />
                  <ItemText
                    color={activeTab === 'GAMING' ? '#ff0000' : {textColor}}
                  >
                    Gaming
                  </ItemText>
                </NavLink>
              </TextItemContainer>
              <TextItemContainer
                isActive={
                  activeTab === 'SAVED VIDEOS' ? '#f1f5f9' : 'transparent'
                }
                isActiveColor={bgColor}
                onClick={onClickSaveVideosTabItem}
              >
                <NavLink
                  to="/saved-videos"
                  color={activeTab === 'SAVED VIDEOS' ? '#ff0000' : {bgColor}}
                >
                  <MdPlaylistAdd />
                  <ItemText
                    color={
                      activeTab === 'SAVED VIDEOS' ? '#ff0000' : {textColor}
                    }
                  >
                    Saved Videos
                  </ItemText>
                </NavLink>
              </TextItemContainer>
            </NavItemsContainer>
            <SideBarBottomContainer>
              <BottomText>CONTACT US</BottomText>
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
              <ItemText color={textColor}>
                Enjoy! Now to see your channels and recommendations!
              </ItemText>
            </SideBarBottomContainer>
          </SideBarContainer>
        )
      }}
    </CartContext.Consumer>
  )
}

export default SideBar
