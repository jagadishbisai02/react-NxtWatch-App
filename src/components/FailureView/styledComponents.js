import styled from 'styled-components'

export const FailedView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const FailedImage = styled.img`
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const FailedHeading = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: 600;
  text-align: center
  color: ${props => props.headingColor};
  line-height: 1.5;
`

export const FailedNote = styled.p`
  color: ${props => props.noteColor};
  font-size: 18px;
  font-family: 'Roboto';
  line-height: 1.5;
  text-align: center;
`

export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  padding: 6px 20px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
`
