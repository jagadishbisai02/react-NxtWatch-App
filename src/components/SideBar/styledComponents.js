import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 90vh;
  position: sticky;
  position: -webkit-sticky;
  background-color: ${props => props.bgColor};
`
export const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.textColor};
`

export const TextItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 0px;
  padding-left: 15px;
  width: 100%;
  background-color: ${props => props.isActive};
`
export const ItemText = styled.p`
font-family: 'Roboto';
color: ${props => props.color}
width: 100px;
margin-left: 10px;
`

export const BottomItemText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.textColor};
  width: 100px;
`

export const SideBarBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100px;
  padding-left: 15px;
`

export const BottomText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.textColor};
  width: 140px;
  font-size: 20px;
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const IconImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  cursor: pointer;
`

export const NavLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 15px;
  color: ${props => props.color};
`
