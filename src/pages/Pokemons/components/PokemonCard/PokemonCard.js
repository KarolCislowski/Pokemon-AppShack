import { useEffect, useState } from "react"

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
    <div>{pokemon?.name} - {pokemon.id}
      <img src={pokemon.img} alt="poke-art" />
    </div>
  )
}