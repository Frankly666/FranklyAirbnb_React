import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ButtonWrapper } from './style'

const Button = memo((props) => {
  const { children, isHover = true, isAlpha = true } = props
  const classlist = classNames({hover: isHover})

  return (
    <ButtonWrapper isAlpha={isAlpha} className={classlist}>{children}</ButtonWrapper>
  )
})

Button.propTypes = {
  isHover: PropTypes.bool,
  isAlpha: PropTypes.bool
}

export default Button
