import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const Nav = styled.div`
  display: flex;
`

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 92%;
  position: fixed;
  top: 60px;
  background-color: ${props => props.bgColor};
  @media screen and(max-width:768px) {
    display: none;
  }
`
export const NavItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  padding: 0px;
  margin-top: 0px;
  color: ${props => props.textColor};
`

export const TextItemContainer = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 20px;
  background-color: ${props => props.isActive};
`
export const ItemText = styled.p`
font-family: 'Roboto';
color: ${props => props.textColor}
font-size: 18px;
margin-left: 15px;
`

export const BottomItemText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.textColor};
  width: 100px;
`

export const SideBarBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

export const BottomText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.textColor};
  font-size: 25px;
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const IconImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  margin-right: 10px;
  cursor: pointer;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
