import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const ItemLink = styled(Link)`
  text-decoration: none;
`
export const GamingTitle = styled.p`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 15px;
  margin-bottom: 0px;
`

export const GamingThumbnailImage = styled.img`
  width: 100vw;
  height: 300px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`
export const GamingListItem = styled.li`
  background: none
  display: flex;
  align-items: center;
  width: 100%;
  @media screen and (min-width:768px){
      width:280px;
      margin-right: 35px;
  }
`
export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start
  padding: 8px;
`

export const GamingViewsAndDate = styled.p`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 12px;
`

export const ProfileContainer = styled.img`
  width: 20%;
  border-radius: 25%;
  align-self: flex-start;
  padding-top: 23px;
  margin-right: 5px;
`
