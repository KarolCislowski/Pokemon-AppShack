import { useEffect, useState } from 'react'
import { ErrorPage } from '../../components/Error/Error'
import { Loading } from '../../components/Loading/Loading'
import { TypeList } from '../../types'
import { TypeCard } from './components/TypeCard/TypeCard'
import { FilteringBar, Main, SearchInput } from './TypeChart.ui'

export const TypeChart = () => {
  const [typeList, setTypeList] = useState<TypeList>([])
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [filter, setFilter] = useState<string>('')

  useEffect(() => {
    setLoading(true)

    fetch('https://pokeapi.co/api/v2/type')
      .then((res) => res.json())
      .then((data) => {
        setTypeList(data.results)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  const filteredTypes = typeList
    ?.filter((e) => e.name !== 'unknown' && e.name !== 'shadow')
    .filter((e) => e.name.includes(filter.toLocaleLowerCase()))

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorPage />
      ) : (
        <Main>
          <FilteringBar>
            <label>
              Find the type:
              <SearchInput
                type="text"
                onChange={(e) => setFilter(e.target.value)}
              />
            </label>
          </FilteringBar>
          {filteredTypes.map((type) => (
            <TypeCard name={type.name} key={type.name} url={type.url} />
          ))}
        </Main>
      )}
    </>
  )
}
