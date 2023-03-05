import React, { FC, ButtonHTMLAttributes } from 'react'
import cn from 'classnames'
import './Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean
}

export const Button: FC<ButtonProps> = ({
  outlined,
  className,
  ...props
}) => {
  const classNames = cn(
    '__Button__', 
    outlined && '__Outlined__', 
    className
  )

  return (
    <button
      className={classNames}
      {...props}
    />
  )
}
