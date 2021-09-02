import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Pokemon } from '../../../../types'

import { bg } from '../../../../utils/bg'

const Card = styled.article`
  display: flex;
  flex-direction: column;
  opacity: 0.8;
  width: 200px;
  min-height: 250px;
  padding: 20px;
  text-align: center;
  border: 2px solid steelblue;
  border-radius: 20px;
  flex-grow: none;
  margin: 15px;
  cursor: pointer;
  text-decoration: none;
  text-transform: capitalize;
  overflow: hidden;
  &:hover {
    transform: scale(1.1);
  }
`

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
