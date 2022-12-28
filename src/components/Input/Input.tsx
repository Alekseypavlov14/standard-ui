import React, { FC, InputHTMLAttributes } from 'react'
import { CustomizationProvider } from '../../features/CustomizationProvider/CustomizationProvider'
import cn from 'classnames'
import './Input.css'

interface InputProps extends CustomizationProvider, InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input 
      className={cn('__Input__', className)}
      {...props}
    />
  )
}