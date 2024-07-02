import React, { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SectionHeader from "@/components/section-header"
import SectionTabs from "@/components/section-tabs"
import SectionList from "@/components/section-list"
import SectionFooter from "@/components/section-footer"
import { DiscountWrapper } from './style'

const DiscountSection = memo(() => {
  const { discountInfo } = useSelector((state) => ({
    discountInfo: state.home.discountInfo
  }))

  const { title, subtitle, dest_address = [], dest_list = [] } = discountInfo
  const destNames = dest_address.map(item => item.name)
  const [destList, setDestList] = useState([])

  useEffect(() => {
    setDestList(Object.values(discountInfo.dest_list || {})[0])
  }, [discountInfo])

  const tabClick = (index) => {
    const destName = destNames[index]
    setDestList(dest_list[destName])
  }

  return (
    <DiscountWrapper>
      <SectionHeader title={title} subtitle={subtitle}/>
      <SectionTabs destNames={destNames} tabClick={tabClick}/>
      <SectionList destList={destList}/>
      <SectionFooter city={destNames[0]}/>
    </DiscountWrapper>
  )
})

export default DiscountSection