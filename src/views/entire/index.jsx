import { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchEntireListAction } from '@/store/entire/actionCreators'
import { changeHeaderConfigAction } from "@/store/features/main"

import FilterSection from "./c-cpns/filter-section"
import HouseList from "./c-cpns/house-list"
import CPagination from './c-cpns/c-pagination'
import { EntireWrapper } from './style'

export default memo(function Entire() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEntireListAction())
    dispatch(changeHeaderConfigAction({ topSearch: false, topFixed: true }))
  }, [dispatch])

  return (
    <EntireWrapper>
      <FilterSection/>
      <HouseList/>
      <CPagination/>
    </EntireWrapper>
  )
})
