import React, { memo, useState } from 'react'
import filterData from "@/assets/data/filter_data.json"
import { FilterWrapper } from './style'
import classNames from 'classnames'

const FilterSection = memo(() => {
  const [selectItems, setSelectItems] = useState([])

  const itemClick = (item) => {
    const newItems = [...selectItems]
    if (selectItems.includes(item)) {
      const index = selectItems.findIndex(name => name === item)
      newItems.splice(index, 1)
    } else {
      newItems.push(item)
    }
    setSelectItems(newItems)
  }

  return (
    <FilterWrapper>
      <div className='filter'>
        {
          filterData.map(item => {
            return (
              <div 
                className={classNames("item", { active: selectItems.includes(item) })} 
                key={item}
                onClick={() => itemClick(item)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})

export default FilterSection