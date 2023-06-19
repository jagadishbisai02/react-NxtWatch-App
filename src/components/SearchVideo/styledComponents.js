import styled from 'styled-components/macro'

export const PageLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const NothingContainer = styled.div`
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

export const SearchInput = styled.input`
  width: 250px;
  border: none;
  padding: 3px 10px;
  outline: none;
`

export const SearchBtn = styled.button`
  padding: 3px 19px;
  border: none;
  border-left: 1px solid #64748b;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const SearchBox = styled.div`
  border: 1px solid #64748b;
  margin-left: 60px;
  border-radius: 2px;
  margin-top: 15px;
`
