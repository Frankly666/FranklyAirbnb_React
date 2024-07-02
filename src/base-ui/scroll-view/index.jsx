import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollWrapper } from './style'


const ScrollView = memo((props) => {
  const { children } = props
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)

  const areaRef = useRef()
  const totalDistance = useRef(0)
  const positionIndex = useRef(0)

  useEffect(() => {
    const scrollWidth = areaRef.current.scrollWidth
    const clientWidth = areaRef.current.clientWidth

    totalDistance.current = scrollWidth - clientWidth
    setShowRight(totalDistance.current > 0)
  }, [children])

  const arrowLeftClick = () => {
    positionIndex.current--
    handlePosition()
  }
  const arrowRightClick = () => {
    positionIndex.current++
    handlePosition()
  }
    
  const handlePosition = () => {
    const positionValue = areaRef.current.children[positionIndex.current].offsetLeft
    areaRef.current.style.transform = `translate(-${positionValue}px)`
    setShowRight(positionValue < totalDistance.current)
    setShowLeft(positionValue > 8)
  }

  return (
    <ScrollWrapper>
      {
        showLeft &&
        <div className='control left'>
          <span className='arrow' onClick={() => arrowLeftClick()}></span>
        </div>
      }
      <div className='area' ref={areaRef}>
        { Array.isArray(children) ? children.map(item => item): children }
      </div>
      {
        showRight &&
        <div className='control right'>
          <span className='arrow' onClick={() => arrowRightClick()}></span>
        </div>
      }
    </ScrollWrapper>
  )
})

export default ScrollView