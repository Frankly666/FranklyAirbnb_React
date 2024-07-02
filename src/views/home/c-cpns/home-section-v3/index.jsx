import React, { memo } from 'react'
import SectionHeader from '@/components/section-header'
import { SectionWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'
import SectionItem from '@/components/section-item'

const HomeSectionV3 = memo((props) => {
  const { infoData } = props
  const { title, subtitle, list = [] } = infoData

  return (
    <SectionWrapper>
      <SectionHeader title={title} subtitle={subtitle}/>
      <ScrollView>
        {
          list.map(item => {
            return <SectionItem itemData={item} key={item.id} itemWidth="20%"/>
          })
        }
      </ScrollView>
    </SectionWrapper>
  )
})

export default HomeSectionV3