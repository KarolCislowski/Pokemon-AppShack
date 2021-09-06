import pika from '../../static/pika-pikachu.gif'
import styled from 'styled-components'

const LoadingPage = styled.div`
  background-color: #fcfdfc;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Loading = () => (
  <LoadingPage>
    <img src={pika} alt="pikachu" />
    <h1>Loading...</h1>
  </LoadingPage>
)
