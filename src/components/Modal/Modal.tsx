import React, { FC, ReactNode } from 'react'
import { CustomizationProvider } from '../../features/CustomizationProvider/CustomizationProvider'
import { BackgroundLayer } from './../BackgroundLayer/BackgroundLayer'
import { ThemeProvider } from '../../features/ThemeProvider/ThemeProvider'
import cn from 'classnames'
import './Modal.css'

interface ModalProps extends CustomizationProvider {
  title: string
  children?: ReactNode
  close: () => void
}

export const Modal: FC<ModalProps> = ({
  title,
  children,
  close,
  className,
}) => {
  return (
    <ThemeProvider>
      <BackgroundLayer onClick={close}>
        <div className={cn('__Modal__', className)}>
          <div className="__Title__">{title}</div>
          {children}
        </div>
      </BackgroundLayer>
    </ThemeProvider>
  )
}
