import React, { FC, MouseEvent } from 'react'
import cn from 'classnames'
import './Button.css'

interface ButtonProps {
  children: string,
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  dangerous?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  dangerous
}) => {
  return (
    <button 
      className={cn('__Button__', dangerous && '__Dangerous__')}
      onClick={onClick}
      children={children}
    />
  )
}