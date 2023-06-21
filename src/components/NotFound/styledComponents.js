import styled from 'styled-components/macro'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
  background-color: ${props => props.bgColor};
  margin-left: 250px;
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
`

export const Heading = styled.h1`
  font-size: ${props => props.size}px;
  font-family: 'Roboto';
  font-weight: 600;
  color: ${props => props.textColor};
  line-height: 1.5;
`

export const Desc = styled.p`
  color: ${props => props.textColor};
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
export const HomeStickyContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
`

export const HomeContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
  height: 95vh;
`
