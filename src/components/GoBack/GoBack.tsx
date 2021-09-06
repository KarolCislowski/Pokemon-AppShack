import { useHistory } from 'react-router'
import { StyledLink } from './GoBack.ui'

export const GoBack = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return <StyledLink onClick={goBack}>Go back</StyledLink>
}
