import { useEffect, useState } from "react"
import styled from 'styled-components'

import { PokemonCard } from "./components/PokemonCard/PokemonCard"

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 1200px;
`

export const Pokemons = () => {
  const listUrl = `https://pokeapi.co/api/v2/pokemon/?limit=1118`
  const [pokemonsList, setPokemonsList] = useState([])

  useEffect(() => {
    fetch(listUrl)
      .then((res) => res.json())
      .then((data) => {
        setPokemonsList(
          data.results.sort((a, b) => {
            if (a.name < b.name) { return -1 }
            if (a.name > b.name) { return 1 }
            return 0
          })
        )
      })
  }, [listUrl])

  return (
    <Main>
      {pokemonsList?.map((e) => (
        <PokemonCard url={e.url} />
      ))}
    </Main>
  )
}