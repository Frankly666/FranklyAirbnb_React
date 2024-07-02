import React, { memo } from 'react'
import ScrollView from '@/base-ui/scroll-view'
import SectionHeader from '@/components/section-header'
import LongforItem from '@/components/longfor-item'
import { LongforWrapper } from './style'

const HomeLongfor = memo((props) => {
  const { infoData } = props
  const { title, subtitle, list = [] } = infoData

  return (
    <LongforWrapper>
      <SectionHeader title={title} subtitle={subtitle}/>
      <ScrollView>
        {
          list.map(item => {
            return (
              <LongforItem key={item.city} itemData={item}/>
            )
          })
        }
      </ScrollView>
    </LongforWrapper>
  )
})

export default HomeLongfor