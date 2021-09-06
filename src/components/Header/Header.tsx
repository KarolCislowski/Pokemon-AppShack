import { Button, Buttons, Container, Logo, Nav } from './header.ui'

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
