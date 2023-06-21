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

export const BannerImage = styled.img`
  object-fit: fill;
  width: 250px;
  position: sticky;
  position: -webkit-sticky;
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
  align-self: flex-start;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40vh;
  padding: 25px;
`

export const ModalPara = styled.p`
  width: 280px;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 0px;
`
