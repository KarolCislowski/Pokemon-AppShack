import pika from '../../static/pikachu-pokemon.gif'
import styled from 'styled-components'
import { GoBack } from '../GoBack/GoBack'

const ErrPage = styled.div`
  background-color: #ac78f4;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ErrorPage = () => (
  <ErrPage>
    <img src={pika} alt="pikachu" />
    <h1>Something went wrong!</h1>
    <GoBack />
  </ErrPage>
)
