import React, { memo, useState, useEffect } from 'react'
import SectionHeader from "@/components/section-header"
import SectionTabs from "@/components/section-tabs"
import SectionList from "@/components/section-list"
import SectionFooter from "@/components/section-footer"

import { SectionWrapper } from './style'

const HomeSection = memo((props) => {
  const { infoData } = props

  const { title, subtitle, dest_address = [], dest_list = [] } = infoData
  const destNames = dest_address.map(item => item.name)
  const [destList, setDestList] = useState([])

  useEffect(() => {
    setDestList(Object.values(infoData.dest_list || {})[0])
  }, [infoData.dest_list])

  const tabClick = (index) => {
    const destName = destNames[index]
    setDestList(dest_list[destName])
  }

  return (
    <SectionWrapper>
      <SectionHeader title={title} subtitle={subtitle}/>
      <SectionTabs destNames={destNames} tabClick={tabClick}/>
      <SectionList destList={destList}/>
      <SectionFooter city={destNames[0]}/>
    </SectionWrapper>
  )
})

export default HomeSection