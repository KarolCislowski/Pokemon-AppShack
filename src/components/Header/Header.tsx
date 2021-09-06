import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  background-color: #ef5350;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  flex: 1;
  padding: 0 15px;
`

const Logo = styled.h3`
  font-family: PokemonSolidNormal;
  color: orange;
  font-size: 1.5rem;
  text-shadow: 3px 3px 10px #0530f0;
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
`

const Button = styled(Link)`
  padding: 0 10px;
  font-weight: 500;
`

export const Header = () => (
  <Nav>
    <Container>
      <Logo>Pokédex</Logo>
      <Buttons>
        <Button to="/">Pokemons List</Button>
        <Button to="/types">Types Chart</Button>
      </Buttons>
    </Container>
  </Nav>
)
