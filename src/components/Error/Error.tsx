import pika from '../../static/pikachu-pokemon.gif'
import styled from 'styled-components'
import { useHistory } from 'react-router'

const ErrPage = styled.div`
  background-color: #ac78f4;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledLink = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 25px;
  padding: 10px 20px;
  border: #c31a1a solid 2px;
  border-radius: 10px;
  background-color: white;
  box-shadow: black 2px 2px 2px;
`

export const ErrorPage = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }
  return (
    <ErrPage>
      <img src={pika} alt="pikachu" />
      <h1>Something went wrong!</h1>
      <StyledLink onClick={goBack}>Go back</StyledLink>
    </ErrPage>
  )
}
