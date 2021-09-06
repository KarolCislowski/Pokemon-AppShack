import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Loading } from '../../components/Loading/Loading'
import { TypeList } from '../../types'
import { TypeCard } from './components/TypeCard/TypeCard'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  margin: 15px auto;
  max-width: 1000px;
  padding: 15px;
`

export const TypeChart = () => {
  const [typeList, setTypeList] = useState<TypeList>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)

    fetch('https://pokeapi.co/api/v2/type')
      .then((res) => res.json())
      .then((data) => {
        setTypeList(data.results)
        setLoading(false)
      })
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Main>
          {typeList
            ?.filter((e) => e.name !== 'unknown' && e.name !== 'shadow')
            .map((type) => (
              <TypeCard name={type.name} key={type.name} url={type.url} />
            ))}
        </Main>
      )}
    </>
  )
}
