import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HousePicture from './c-cpns/house-picture'
import { DetailWrapper } from './style'

import { changeHeaderConfigAction } from '@/store/features/main'

const Detail = memo(() => {
  const { detailInfos } = useSelector((state) => ({
    detailInfos: state.detail.detailInfos
  }))
  console.log(detailInfos)
  const { picture_urls } = detailInfos
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeHeaderConfigAction({ topSearch: false, topFixed: false }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <HousePicture picturesData={picture_urls}/>
    </DetailWrapper>
  )
})

export default Detail