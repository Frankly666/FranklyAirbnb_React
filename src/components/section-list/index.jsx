import React, { memo } from 'react'
import SectionItem from "../section-item"
import { ListWrapper } from './style'

const SectionList = memo((props) => {
  const { destList = [], itemWidth } = props

  return (
    <ListWrapper>
      {
        destList.map((item) => {
          return <SectionItem itemData={item} itemWidth={itemWidth} key={item.id}/>
        })
      }
    </ListWrapper>
  )
})

export default SectionList