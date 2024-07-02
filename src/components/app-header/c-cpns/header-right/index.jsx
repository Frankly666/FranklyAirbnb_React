import React, { memo, useState } from 'react'
import Button from '@/base-ui/button'
import { RightWrapper } from "./style"
import { useEffect } from 'react'
import { useRef } from 'react'

const HeaderRight = memo((props) => {
  const { isTop } = props
  return (
    <RightWrapper>
      <div className='btns'>
        <Button isAlpha={isTop}>成为房东</Button>
        <Button isAlpha={isTop}>登录</Button>
        <Button isAlpha={isTop}>注册</Button>
      </div>
      <div className='profile hshadow'>
        <span className='btn menu'></span>
        <span className='btn avatar'></span>
      </div>
    </RightWrapper>
  )
})

export default HeaderRight