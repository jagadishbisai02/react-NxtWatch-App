import styled from 'styled-components/macro'

export const SavedContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const SavedTitleIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 35px;
  }
`

export const PageLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const SavedText = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  color: ${props => props.textColor};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const SavedVideoTitle = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.headBgColor};
`

export const SavedVideoList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
  @media screen and (min-width: 768px) {
    margin-left: 25px;
  }
`

export const NoSavedVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const NoSavedVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768) {
    width: 450px;
  }
`

export const NoSavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  text-align: center;
  color: ${props => props.headingColor};
`

export const NoSavedVideosNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
  color: ${props => props.noteColor};
`
