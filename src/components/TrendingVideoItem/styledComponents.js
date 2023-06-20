import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`
export const VideoDetailsText = styled.p`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: ${props => props.size}px;
  margin-bottom: 5px;
`

export const ThumbnailImage = styled.img`
  width: 35%;
`
export const VideoCardBottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`
export const VideoCardContainer = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  cursor: pointer;
  margin: 25px;
`

export const VideoDetailsContainer = styled.div`
  margin-bottom: 0px;
  margin-top: 0px;
  padding-left: 18px;
`

export const ProfileContainer = styled.img`
  width: 20%;
  border-radius: 25%;
  align-self: flex-start;
  padding-top: 23px;
  margin-right: 5px;
`
