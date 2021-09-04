import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Pokemon } from '../../types'

import { bg } from '../../utils/bg'

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
`

const Stats = styled.article`
  margin: 20px auto;
  max-width: 600px;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
`

const List = styled.ul`
  list-style: none;
`

const Item = styled.li`
  display: flex;
  justify-content: space-between;
`

const StatName = styled.span`
  font-weight: 800;
`

const StatParam = styled.span`
  font-weight: 500;
`

export const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>()
  const { pokemonName } = useParams<{ pokemonName: string }>()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon({
          name: data.name,
          id: data.id,
          types: data.types,
          img: data.sprites.other['official-artwork'].front_default,
          abilities: data.abilities,
          stats: data.stats,
        })
      })
  }, [pokemonName])

  return (
    <>
      {pokemon && (
        <Main style={{ background: `${bg(pokemon.types)}` }}>
          {pokemon.img ? (
            <img src={pokemon.img} alt="" />
          ) : (
            <h2>Sorry no photo :{`(`}</h2>
          )}
          <Stats>
            <h1>{pokemon.name}</h1>
            <List>
              <Item>
                <StatName>ID:</StatName>
                <StatParam>{pokemon.id}</StatParam>
              </Item>
              <Item>
                <StatName>Type:</StatName>
                <StatParam>
                  {pokemon.types.map((e, index, arr) => (
                    <>
                      {index + 1 < arr.length
                        ? `${e.type.name}, `
                        : `${e.type.name}`}
                    </>
                  ))}
                </StatParam>
              </Item>
              {pokemon.stats?.map((e) => (
                <Item>
                  <StatName>{e.stat.name}:</StatName>
                  <StatParam>{e.base_stat}</StatParam>
                </Item>
              ))}
              <Item>
                <StatName>Abilities:</StatName>
                <StatParam>
                  {pokemon.abilities?.map((e, index, arr) => (
                    <>
                      {index + 1 < arr.length
                        ? `${e.ability.name}, `
                        : `${e.ability.name}`}
                    </>
                  ))}
                </StatParam>
              </Item>
            </List>
          </Stats>
        </Main>
      )}
    </>
  )
}
