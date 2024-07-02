import React, { memo } from 'react'
import { PictureWrapper } from './style'


const PictureViewer = memo((props) => {
  const { picturesData } = props
  console.log(picturesData)

  const genRightPicItem = (item) => {
    return (
      <div className='item' key={item}>
        <img src={item} alt=""/>
      </div>
    )
  }

  return (
    <PictureWrapper>
      <div className='left'>
        <div className='item'>
          <img src={picturesData?.[0]} alt="" />
        </div>
      </div>
      <div className='right'>
        {
          picturesData?.slice(1, 5).map(genRightPicItem)
        }
      </div>
    </PictureWrapper>
  )
})

export default PictureViewer