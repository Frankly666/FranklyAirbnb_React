import React, { memo, useState } from 'react'
import { CSSTransition } from "react-transition-group"
import Tabs from '@/base-ui/tabs'
import SearchTabs from '@/components/search-tabs'
import { CenterWrapper } from "./style"
import searchTitles from "@/assets/data/search_titles.json"

const HeaderCenter = memo((props) => {
  const { isSearch, isTop, searchBarClick } = props

  const [isEnded, setEnded] = useState(false)
  if (isTop && isEnded) {
    setEnded(false)
  }

  const [currentTab, setCurrentTab] = useState(0)
  const titles = searchTitles.map(item => item.title)
  function tabChange(index) {
    setCurrentTab(index)
  }
  function searchBarChange() {
    searchBarClick(true)
    setEnded(false)
  }

  return (
    <CenterWrapper>
      <CSSTransition 
        classNames="detail" 
        in={isSearch} 
        timeout={250} 
        unmountOnExit={true}
      >
        <div className='search-detail'>
          { isSearch && <Tabs titles={titles} tabChange={tabChange}/> }
          <div className='infos'>
            <SearchTabs searchInfos={searchTitles[currentTab].searchInfos}/>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        classNames="bar" 
        in={!isSearch} 
        timeout={250} 
        unmountOnExit={true}
      >
        <div className='search-bar' onClick={searchBarChange}>
          <span className='text'>搜索房源和体验</span>
          <span className='icon'></span>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter