import React, { FC } from 'react'
import cn from 'classnames'
import './BurgerButton.css'

interface BurgerButtonProps {
  isOpened: boolean
  onClick: () => void
  className?: string
}

export const BurgerButton: FC<BurgerButtonProps> = ({
  isOpened,
  onClick,
  className,
}) => {
  const classNames = cn(
    '__BurgerButton__',
    isOpened && '__Clicked__',
    className
  )

  return (
    <div 
      className={classNames} 
      onClick={onClick}  
    >
      <span />
    </div>
  )
}
