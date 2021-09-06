import styled from 'styled-components'
import { TypeList } from '../../../../../types'
import { bg } from '../../../../../utils/bg'

const Tab = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`

const TabHead = styled.div`
  background-color: white;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
`

const TabBody = styled.div`
  padding: 15px;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`

const TypePill = styled.p`
  text-transform: capitalize;
  color: white;
  padding: 5px 10px;
  border-radius: 10%;
  margin: 5px;
  box-shadow: black 2px 2px 2px;
`

type DamageProps = {
  heading: string
  types: TypeList | undefined
  mode: 'good' | 'bad'
}

export const DamageRangeTab = ({ heading, types, mode }: DamageProps) => {
  return (
    <Tab
      style={{
        background: `${mode === 'good' ? '#d5f2e3' : '#f5dedf'}`,
        color: `${mode === 'good' ? '#1a751a' : '#a7514c'}`,
      }}
    >
      <TabHead>{heading}</TabHead>
      <TabBody>
        {types?.map((e) => (
          <TypePill
            style={{ background: `${bg([{ type: { name: e.name } }])}` }}
          >
            {e.name}
          </TypePill>
        ))}
      </TabBody>
    </Tab>
  )
}
