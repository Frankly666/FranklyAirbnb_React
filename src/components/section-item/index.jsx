import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeDetailInfosAction } from '@/store/features/detail'
import { Rate } from 'antd'

import { ItemWrapper } from "./style"

const SectionItem = memo((props) => {
  const { itemData, itemWidth = '33%' } = props
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function itemClick() {
    navigate("/detail")
    dispatch(changeDetailInfosAction(itemData))
  }

  return (
    <ItemWrapper itemWidth={itemWidth} onClick={itemClick}>
      <div className='inner'>
        <div className='cover'>
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className='desc'>{itemData.verify_info.messages.join("·")}</div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>¥{itemData.price}/晚</div>
        <div className='bottom'>
          <span className='rate'>
            <Rate style={{fonstSize: '12px'}} allowHalf disabled defaultValue={itemData.star_rating || 5}/>
          </span>
          <span className='count'>{itemData.reviews_count}</span>
          <span className='info'>{itemData.bottom_info?.content}</span>
        </div>
      </div>
    </ItemWrapper>
  )
})

export default SectionItem