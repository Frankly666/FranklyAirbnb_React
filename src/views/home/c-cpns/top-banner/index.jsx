import React, { memo } from 'react'
import { BannerWrapper } from './style'

const TopBanner = memo(() => {
  return (
    <BannerWrapper>
      <div className='cover'></div>
    </BannerWrapper>
  )
})

export default TopBanner