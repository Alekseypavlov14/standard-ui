import React, { FC, InputHTMLAttributes } from 'react'
import cn from 'classnames'
import './Input.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ className, ...props }) => {
  const classNames = cn('__Input__', className)

  return (
    <input 
      className={classNames}
      {...props}
    />
  )
}