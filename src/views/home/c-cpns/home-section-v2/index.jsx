import React, { memo } from 'react'
import { SectionWrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionList from '@/components/section-list'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props
  const { title, subtitle, list } = infoData

  return (
    <SectionWrapper>
      <SectionHeader title={title} subtitle={subtitle}/>
      <SectionList destList={list?.slice(0, 8)} itemWidth="25%"/>
    </SectionWrapper>
  )
})

export default HomeSectionV2