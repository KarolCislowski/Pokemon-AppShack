import { useEffect, useState } from "react"
import { bg } from "../../../../utils/bg"

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
        <div style={{ background: `${bg(pokemon?.types)}` }}>{pokemon?.name} - {pokemon.id}
          <img src={pokemon.img} alt="poke-art" />
        </div>}

    </>
  )
}