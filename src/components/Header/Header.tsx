import { Button, Buttons, Container, Logo, Nav } from './header.ui'

export const Header = () => (
  <Nav>
    <Container>
      <Button to="/">
        <Logo>Pokédex</Logo>
      </Button>
      <Buttons>
        <Button to="/">Pokemons List</Button>
        <Button to="/types">Types Chart</Button>
      </Buttons>
    </Container>
  </Nav>
)
