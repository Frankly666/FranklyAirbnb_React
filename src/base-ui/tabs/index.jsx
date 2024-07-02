import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'

const Tabs = memo((props) => {
  const { titles, tabChange } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClick(index) {
    setCurrentIndex(index)
    tabChange(index)
  }

  return (
    <TabsWrapper>
      {
        titles.map((item, index) => {
          return (
            <div 
              className={classNames("item", {active: currentIndex === index})}
              key={index}
              onClick={e => itemClick(index)}
            >
              <span className='text'>{item}</span>
              <span className='bottom'></span>
            </div>
          )
        })
      }
    </TabsWrapper>
  )
})

Tabs.propTypes = {
  titles: PropTypes.array
}

export default Tabs