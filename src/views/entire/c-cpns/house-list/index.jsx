import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import SectionItem from "@/components/section-item"
import { HouseWrapper } from './style'

const HouseList = memo(() => {
  const { houseList } = useSelector((state) => ({
    houseList: state.entire.houseList
  }))

  return (
    <HouseWrapper>
      {
        houseList.map(item => {
          return <SectionItem itemData={item} key={item.id} itemWidth="20%"/>
        })
      }
    </HouseWrapper>
  )
})

export default HouseList