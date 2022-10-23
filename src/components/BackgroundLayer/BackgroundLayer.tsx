import React, { FC, ReactNode } from 'react'
import './BackgroundLayer.css'

interface BackgroundLayerProps {
  onClick: () => void
  children: ReactNode
}

export const BackgroundLayer: FC<BackgroundLayerProps> = ({
  onClick,
  children,
}) => {
  return (
    <div className="__BackgroundLayer__" onClick={onClick}>
      {children}
    </div>
  )
}
