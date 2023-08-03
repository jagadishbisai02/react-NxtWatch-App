import styled from 'styled-components/macro'

export const TrendingContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const TitleIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 35px;
  }
`

export const PageLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const TrendingText = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  color: ${props => props.textColor};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const TrendingVideoTitle = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.headBgColor};
`

export const TrendingVideoList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
  @media screen and (min-width: 768px) {
    margin-left: 25px;
  }
`
