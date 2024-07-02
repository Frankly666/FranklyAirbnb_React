import React, { memo, useState } from 'react'
import ScrollView from '../../base-ui/scroll-view'
import classNames from 'classnames'
import { TabsWrapper } from './style'

const SectionTabs = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { destNames = [], tabClick } = props

  const itemClick = (index) => {
    setCurrentIndex(index)
    tabClick(index)
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {
          destNames.map((item, index) => {
            return (
              <div 
                className={classNames("item hshadow", { active: currentIndex === index })} 
                key={item}
                onClick={() => itemClick(index)}
              >
                {item}
              </div>
            )
          })
        }
      </ScrollView>
    </TabsWrapper>
  )
})

export default SectionTabs