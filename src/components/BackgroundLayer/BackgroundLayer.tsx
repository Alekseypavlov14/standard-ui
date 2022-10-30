import React, { FC, ReactNode } from 'react'
import { ThemeProvider } from '../../features/ThemeProvider/ThemeProvider'
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
    <ThemeProvider>
      <div className="__BackgroundLayer__" onClick={onClick}>
        {children}
      </div>
    </ThemeProvider>
  )
}
