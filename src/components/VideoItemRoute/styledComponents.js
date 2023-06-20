import styled from 'styled-components/macro'

export const VideoDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`

export const ProductLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const VideoDetailsSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  width: 100%;
`

export const VideoDetailsTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 19px;
  line-height: 1.5;
  color: ${props => props.textColor};
`

export const VideoDetailsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 98%;
`

export const ViewDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const TextContainer = styled.div`
  display: flex;
`

export const LikeContainer = styled.div`
  display: flex;
`
export const ViewsText = styled.p`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  margin-right: 15px;
  line-height: 0.9;
  margin-bottom: 5px;
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: none;
  color: ${props => props.color};
`
export const HorizontalLine = styled.hr`
  background-color: ${props => props.bgColor};
  width: 100%;
  margin: 15px 0px;
  padding: 0px;
`

export const ChannelLogo = styled.img`
  width: 55px;
  height: 55px;
  margin-top: 7px;
`

export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const NameSubscription = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
`

export const LogoContainer = styled.div`
  background-color: ${props => props.color};
  border-radius: 40px;
  padding: 10px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const Image = styled.img`
  width: 300px;
`

export const Heading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 600;
  text-align: center;
  color: ${props => props.textColor};
`
export const Desc = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  text-align: center;
  color: ${props => props.textColor};
`

export const RetryButton = styled.button`
  background-color: #3b82f6;
  color: #f1f1f1;
  font-size: 15px;
  font-family: 'Roboto';
  padding: 12px 32px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`
