import { memo, useState } from 'react'
import { ThemeProvider } from "styled-components"
import { AppHeaderWrapper, HeaderLeft, TopWrapper } from "./style"
import HeaderRight from './c-cpns/header-right'
import HeaderCenter from './c-cpns/header-center'
import { useScrollPosition } from '@/hooks'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

/**
 * 控制解析:
 *  isTop: 控制背景颜色
 *  isSearch:
 *    1.控制100高度
 *    2.控制显示搜索小框还是tabs
 *  isFixed: 控制要不要fixed
 */

export default memo(function() {
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }))
  const isFixed = headerConfig.topFixed

  const { wScrollY } = useScrollPosition()
  const [ prevPosition, setPrevPosition ] = useState(0)
  const isTop = wScrollY === 0 && headerConfig.topSearch
  const themeColor = isTop? "#fff":"#222"
  const [isSearch, setIsSearch] = useState(true)

  if (!isTop && prevPosition === 0 && isSearch) {
    setIsSearch(false)
    setPrevPosition(wScrollY)
  }
  if (Math.abs(wScrollY - prevPosition) >= 50 && isSearch) {
    setIsSearch(false)
  }

  function searchBarClick(isSearch) {
    setIsSearch(isSearch)
    setPrevPosition(wScrollY)
  }

  const dynamicClasses = classNames({notTop: !isTop, notsearch: !isSearch && !isTop, fixed: isFixed})

  return (
    <AppHeaderWrapper className={dynamicClasses}>
      <ThemeProvider theme={{color: themeColor}}>
        <TopWrapper>
          <HeaderLeft className='left'>
            <img src={require("@/assets/img/common/logo.svg").default} alt="" />
          </HeaderLeft>
          <HeaderCenter isSearch={isSearch || isTop} isTop={isTop} searchBarClick={searchBarClick}/>
          <HeaderRight isTop={isTop}/>
        </TopWrapper>
        <div className='search-area'></div>
        {!isTop && <div className='header-bottom'></div>}
      </ThemeProvider>
    </AppHeaderWrapper>
  )
})
