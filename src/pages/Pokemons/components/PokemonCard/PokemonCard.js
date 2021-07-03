import { useEffect, useState } from "react"

export const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState(null)

  const typeColors =
  {
    normal: "RGBA(168,168,120,1)",
    fighting: "RGBA(192,48,40,1)",
    flying: "RGBA(168,144,240,1)",
    poison: "RGBA(181,90,165,1)",
    ground: "RGBA(224,192,104,1)",
    rock: "RGBA(189,165,90,1)",
    bug: "RGBA(168,184,32,1)",
    ghost: "RGBA(99,99,181,1)",
    steel: "RGBA(184,184,208,1)",
    fire: "RGBA(240,128,48,1)",
    water: "RGBA(104,144,240,1)",
    grass: "RGBA(120,200,80,1)",
    electric: "RGBA(248,208,48,1)",
    psychic: "RGBA(248,88,136,1)",
    ice: "RGBA(152,216,216,1)",
    dragon: "RGBA(112,56,248,1)",
    dark: "RGBA(115,90,74,1)",
    fairy: "RGBA(238,153,172,1)",
  }

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

  const bg = () => {
    if (pokemon.types.length === 1) {
      return typeColors[pokemon?.types[0].type.name]
    } else {
      return `linear-gradient(50deg, ${typeColors[pokemon?.types[0].type.name]} 0%, ${typeColors[pokemon?.types[0].type.name]} 40%, ${typeColors[pokemon?.types[1].type.name]}60%, ${typeColors[pokemon?.types[1].type.name]} 100%)`
    }
  }

  return (
    <>
      {pokemon &&
        <div style={{ background: `${bg()}` }}>{pokemon?.name} - {pokemon.id}
          <img src={pokemon.img} alt="poke-art" />
        </div>}

    </>
  )
}