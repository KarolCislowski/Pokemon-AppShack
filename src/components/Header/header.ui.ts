import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  background-color: #ef5350;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  flex: 1;
  padding: 0 15px;
`

export const Logo = styled.h3`
  font-family: PokemonSolidNormal;
  color: orange;
  font-size: 1.5rem;
  text-shadow: 3px 3px 10px #0530f0;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`

export const Button = styled(Link)`
  padding: 0 10px;
  font-weight: 500;
`
