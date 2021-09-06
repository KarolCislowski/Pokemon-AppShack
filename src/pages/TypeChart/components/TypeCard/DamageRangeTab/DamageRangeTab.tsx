import { TypeList } from '../../../../../types'
import { bg } from '../../../../../utils/bg'
import { Tab, TabBody, TabHead, TypePill } from './DamageRangeTab.ui'

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
