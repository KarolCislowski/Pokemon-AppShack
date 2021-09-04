import { useEffect, useState } from 'react'
import { TypeList } from '../../types'

export const TypeChart = () => {
  const [typeList, setTypeList] = useState<TypeList>([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then((res) => res.json())
      .then((data) => setTypeList(data.results))
  }, [])

  return (
    <>
      {typeList.map((type) => (
        // <TypeCard name={type.name} key={type.name} url={type.url} />
        <h1>name</h1>
      ))}
    </>
  )
}
