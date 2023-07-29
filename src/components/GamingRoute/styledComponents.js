import styled from 'styled-components/macro'

export const HomeContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
  height: 95vh;
`

export const VideosHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => props.bgColor};
  padding-left: 15px;
`

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  margin-right: 10px;
  margin-left: 15px;
  font-size: ${props => props.size}px;
  color: ${props => props.color};
  background-color: ${props => props.iconBgColor};
  padding: 10px;
  border-radius: 50px;
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

export const Heading = styled.h1`
  font-size: ${props => props.size}px;
  font-family: 'Roboto';
  font-weight: 600;
  color: ${props => props.textColor};
  line-height: 1.5;
`

export const SearchVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0px;
`
