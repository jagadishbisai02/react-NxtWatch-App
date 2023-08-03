import styled from 'styled-components/macro'

export const VideosDetailContainer = styled.div`
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

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`
