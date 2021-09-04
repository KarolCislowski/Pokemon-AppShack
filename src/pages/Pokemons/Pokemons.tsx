import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { PokemonList } from '../../types'
import { Pagination } from './components/Pagination/Pagination'
import { PokemonCard } from './components/PokemonCard/PokemonCard'

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 1200px;
`

export const Pokemons = () => {
  /*  Our client asked us to build application which will list all pokemons sorted by name.
      Unfortunately pokeApi has no sorting functions so we need to fetch full list of 1118 Pokemon species
      and sort it on our end.
      For the same reason we can't use APIs built in pagination system, because it is achieved by offsetting and limiting the list of pokemons listed by ID not by name.
      In the future it probably will be achievable because pokeAPI is working on their GraphQL version, and features like sorting and filtering are built in the Graph engine. */

  const listUrl = `https://pokeapi.co/api/v2/pokemon/?limit=1118`
  const { page } = useParams<{ page: string }>()
  const [pokemonsList, setPokemonsList] = useState<PokemonList>([])
  const [currentPage, setCurrentPage] = useState<number>(+page || 1)
  const [pokePerPage] = useState(20)

  useEffect(() => {
    fetch(listUrl)
      .then((res) => res.json())
      .then((data) => {
        setPokemonsList(
          data.results.sort((a: { name: string }, b: { name: string }) => {
            if (a.name < b.name) {
              return -1
            }
            if (a.name > b.name) {
              return 1
            }
            return 0
          })
        )
      })
  }, [listUrl])

  const lastPokeOnPage = currentPage * pokePerPage
  const firstPokeOnPage = lastPokeOnPage - pokePerPage

  const paginate = (number: number) => {
    setCurrentPage(number)
  }

  return (
    <Main>
      {pokemonsList?.slice(firstPokeOnPage, lastPokeOnPage).map((e) => (
        <PokemonCard key={e.name} url={e.url} />
      ))}
      <Pagination
        pokePerPage={pokePerPage}
        totalPoke={pokemonsList.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </Main>
  )
}