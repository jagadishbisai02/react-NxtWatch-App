import styled from 'styled-components/macro'

export const HomeContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #909090;
  border-radius: 3px;
  margin: 20px;
  width: 60%;
  height: 40px;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
`
export const SearchInput = styled.input`
  width: 100%;
  border: none;
  padding: 5px;
  outline: none;
  background: none;
  color: ${props => props.color};
  font-family: 'Roboto';
`

export const SearchIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #909090;
  width: 70px;
  border: none;
`

export const BannerImage = styled.img`
  width: 80px;
  height: 30px;
`

export const BannerButton = styled.button`
  color: #000000;
  background: none;
  border: 1px solid #000000;
  border-radius: 10px;
  padding: 10px 5px;
  cursor: pointer;
  outline: none;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: ${props => props.display};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 250px;
  padding: 20px;
`

export const BannerLeftPart = styled.div`
  width: 50%;
`

export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 100px;
`
export const BannerText = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: #000000;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const BannerCloseButton = styled.button`
  border: none;
  background: none;
  text-align: start;
`

export const PageLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`
