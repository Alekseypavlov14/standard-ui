import React, { FC, ReactNode } from 'react'
import { ThemeProvider } from '../../features/ThemeProvider/ThemeProvider'
import './BackgroundLayer.css'
import cn from 'classnames'

interface BackgroundLayerProps {
  onClick: () => void
  isShown: boolean
  children: ReactNode
}

export const BackgroundLayer: FC<BackgroundLayerProps> = ({
  onClick,
  children,
  isShown
}) => {
  const classNames = cn("__BackgroundLayer__", !isShown && '__BackgroundLayer-Hidden__')

  return (
    <ThemeProvider>
      <div 
        className={classNames} 
        onClick={onClick}
      >
        {children}
      </div>
    </ThemeProvider>
  )
}
