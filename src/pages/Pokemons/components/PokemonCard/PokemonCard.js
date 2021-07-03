import { useEffect, useState } from "react"
import styled from "styled-components"

import { bg } from "../../../../utils/bg"

const Card = styled.article`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 20px;
  text-align: center;
  border: 2px solid steelblue;
  border-radius: 20px;
  flex-grow:none;
  margin: 15px;
  cursor: pointer;
  text-decoration: none;
  text-transform: capitalize;
`

export const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(
          {
            name: data.name,
            id: data.id,
            types: data.types,
            img: data.sprites.other['official-artwork'].front_default
          }
        )
      })
  })

  return (
    <>
      {pokemon &&
        <Card style={{ background: `${bg(pokemon?.types)}` }}>
          <h3>{pokemon?.name}</h3>
          <img src={pokemon?.img} alt="poke-art" />
        </Card>}

    </>
  )
}