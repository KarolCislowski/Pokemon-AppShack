import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { pokeType } from '../../../../types'
import { bg } from '../../../../utils/bg'
import { DamageRangeTab } from './DamageRangeTab/DamageRangeTab'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px black;
`

const Headline = styled.h1`
  color: white;
  font-size: 2rem;
  padding: 10px;
  text-transform: capitalize;
`

const CardBodyLine = styled.div`
  display: flex;
`

type TypeProps = {
  name: string
  url: string
}

export const TypeCard = ({ url, name }: TypeProps) => {
  const [pokeType, setPokeType] = useState<pokeType>()
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setPokeType({
          super: data.damage_relations.double_damage_to,
          resistant: data.damage_relations.no_damage_from.concat(
            data.damage_relations.half_damage_from
          ),
          notEffective: data.damage_relations.no_damage_to.concat(
            data.damage_relations.half_damage_to
          ),
          weak: data.damage_relations.double_damage_from,
        })
      )
  }, [url])

  return (
    <Card>
      <Headline style={{ background: `${bg([{ type: { name } }])}` }}>
        {name}
      </Headline>
      <CardBodyLine>
        <DamageRangeTab
          heading="Super Effective Against"
          types={pokeType?.super}
          mode="good"
        />
        <DamageRangeTab
          heading="Resistant to"
          types={pokeType?.resistant}
          mode="good"
        />
      </CardBodyLine>
      <CardBodyLine>
        <DamageRangeTab
          heading="Not Very Effective Against"
          types={pokeType?.notEffective}
          mode="bad"
        />
        <DamageRangeTab heading="Weak To" types={pokeType?.weak} mode="bad" />
      </CardBodyLine>
    </Card>
  )
}
