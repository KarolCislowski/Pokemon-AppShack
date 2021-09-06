import { useHistory } from 'react-router'
import styled from 'styled-components'

const StyledLink = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 25px;
  padding: 10px 20px;
  border: #c31a1a solid 2px;
  border-radius: 10px;
  background-color: white;
  box-shadow: black 2px 2px 2px;
  max-width: max-content;
`

export const GoBack = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return <StyledLink onClick={goBack}>Go back</StyledLink>
}
