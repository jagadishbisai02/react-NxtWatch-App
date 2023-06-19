import styled from 'styled-components/macro'

export const HomeContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
  height: 95vh;
`

export const HomeSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 95%;
  background-color: ${props => props.bgColor};
`
export const HomeStickyContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
`
export const PageLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-top: 90px;
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
`

export const Heading = styled.h1`
  font-size: 19px;
  font-family: 'Roboto';
  font-weight: 600;
  color: ${props => props.textColor};
  line-height: 1.5;
`

export const Desc = styled.p`
  color: #1e293b;
  font-size: 15px;
  font-family: 'Roboto';
  line-height: 1.5;
`

export const RetryButton = styled.button`
  color: #f9f9f9;
  background-color: #4f46e5;
  padding: 12px 32px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
`

export const SearchVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
  padding: 15px;
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
`
