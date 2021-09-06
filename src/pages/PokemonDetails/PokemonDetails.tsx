import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ErrorPage } from '../../components/Error/Error'
import { GoBack } from '../../components/GoBack/GoBack'
import { Loading } from '../../components/Loading/Loading'
import { Pokemon } from '../../types'

import { bg } from '../../utils/bg'
import {
  Item,
  List,
  Main,
  StatName,
  StatParam,
  Stats,
} from './PokemonDetails.ui'

export const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>()
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const { pokemonName } = useParams<{ pokemonName: string }>()

  useEffect(() => {
    setLoading(true)
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
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [pokemonName])

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorPage />
      ) : (
        <>
          {pokemon && (
            <Main>
              <GoBack />
              {pokemon.img ? (
                <img src={pokemon.img} alt="" />
              ) : (
                <h2>Sorry no photo :{`(`}</h2>
              )}
              <Stats style={{ background: `${bg(pokemon.types)}` }}>
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
                        <span key={index}>
                          {index + 1 < arr.length
                            ? `${e.type.name}, `
                            : `${e.type.name}`}
                        </span>
                      ))}
                    </StatParam>
                  </Item>
                  {pokemon.stats?.map((e) => (
                    <Item key={e.stat.name}>
                      <StatName>{e.stat.name}:</StatName>
                      <StatParam>{e.base_stat}</StatParam>
                    </Item>
                  ))}
                  <Item>
                    <StatName>Abilities:</StatName>
                    <StatParam>
                      {pokemon.abilities?.map((e, index, arr) => (
                        <span key={e.ability.name}>
                          {index + 1 < arr.length
                            ? `${e.ability.name}, `
                            : `${e.ability.name}`}
                        </span>
                      ))}
                    </StatParam>
                  </Item>
                </List>
              </Stats>
            </Main>
          )}
        </>
      )}
    </>
  )
}
