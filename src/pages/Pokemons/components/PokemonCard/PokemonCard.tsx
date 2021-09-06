import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Pokemon } from '../../../../types'
import { bg } from '../../../../utils/bg'
import { Card } from './PokemonCard.ui'

type PokemonProps = {
  url: string
}

export const PokemonCard = ({ url }: PokemonProps) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon({
          name: data.name,
          id: data.id,
          types: data.types,
          img: data.sprites.other['official-artwork'].front_default,
        })
      })
  })

  return (
    <>
      {pokemon && (
        <Link to={`/${pokemon.name}`}>
          <Card style={{ background: `${bg(pokemon.types)}` }}>
            <h3>{pokemon.name}</h3>
            {pokemon.img ? (
              <img src={pokemon.img} alt="" />
            ) : (
              <h4>Sorry no photo :{`(`}</h4>
            )}
          </Card>
        </Link>
      )}
    </>
  )
}
