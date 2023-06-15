import styled from 'styled-components/macro'

export const HomeContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
`

export const HomeSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  background-color: ${props => props.bgColor};
`

export const BannerImage = styled.img`
  object-fit: fill;
  width: 250px;
`

export const HomeStickyContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
`

export const CloseButton = styled.button`
  color: #7e858e;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  align-self: flex-end;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

export const GetItNowButton = styled.button`
  color: #181818;
  border: solid #181818;
  background-color: transparent;
  height: 30px;
  width: 100px;
  margin: 20px;
  text-align: center;
`

export const BannerImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: ${props => props.display};
  flex-direction: row;
  width: 80%;
  height: 40vh;
  padding: 50px;
`
