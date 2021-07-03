import { useEffect, useState } from "react"

import { PokemonCard } from "./components/PokemonCard/PokemonCard"

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
    <>
      {pokemonsList?.map((e) => (
        <PokemonCard url={e.url} />
      ))}
    </>
  )
}