import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const ItemLink = styled(Link)`
  text-decoration: none;
`
export const TrendingTitle = styled.p`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 15px;
`

export const TrendingThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const TrendingContentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
export const TrendingListItem = styled.li`
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-left: 40px;
  }
`

export const TrendingViewsAndDate = styled.p`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 12px;
`

export const TrendingChannelName = styled.p`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 13px;
`

export const TrendingDot = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 8px 0px;
`
