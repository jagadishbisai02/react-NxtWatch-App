import styled from 'styled-components/macro'

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
export const NoVideoHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
`

export const NoVideoViews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const NoVideoImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NoVideoNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.noteColor};
`

export const VideoCardList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (min-width: 7658px) {
    margin-left: 20px;
  }
`
