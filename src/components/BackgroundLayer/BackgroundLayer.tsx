import React, { FC, ReactNode } from 'react'
import './BackgroundLayer.css'
import cn from 'classnames'

interface BackgroundLayerProps {
  onClick: () => void
  isShown: boolean
  children: ReactNode
}

export const BackgroundLayer: FC<BackgroundLayerProps> = ({
  onClick,
  isShown,
  children,
}) => {
  const classNames = cn(
    "__BackgroundLayer__", 
    !isShown && '__BackgroundLayer-Hidden__'
  )

  return (
    <div 
      className={classNames} 
      onClick={onClick}
    >
      {children}
    </div>
  )
}
