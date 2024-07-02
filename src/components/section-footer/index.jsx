import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import arrowRight from "@/assets/img/common/arrow-right.svg"
import { FooterWrapper } from './style'

const SectionFooter = memo((props) => {
  const { city = "广州" } = props
  const navigate = useNavigate()

  return (
    <FooterWrapper onClick={e => navigate("/entire")}>
      <div className='text'>
        查看更多{city}房源
      </div>
      <img className='icon' src={arrowRight} alt="" />
    </FooterWrapper>
  )
})

export default SectionFooter