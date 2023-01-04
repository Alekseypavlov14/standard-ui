import React, { FC, ReactNode } from 'react'
import { CustomizationProvider } from '../../features/CustomizationProvider/CustomizationProvider'
import { BackgroundLayer } from './../BackgroundLayer/BackgroundLayer'
import { ThemeProvider } from '../../features/ThemeProvider/ThemeProvider'
import cn from 'classnames'
import './Modal.css'

interface ModalProps extends CustomizationProvider {
  title: string
  children?: ReactNode
  isShown: boolean
  onClose: () => void
}

export const Modal: FC<ModalProps> = ({
  title,
  children,
  isShown,
  onClose,
  className,
}) => {
  const classNames = cn('__Modal__', !isShown && '__Modal-Hidden__', className)

  return (
    <ThemeProvider>
      <BackgroundLayer 
        onClick={onClose} 
        isShown={isShown}
      >
        <div className={classNames}>
          <div className="__Title__">{title}</div>
          {children}
        </div>
      </BackgroundLayer>
    </ThemeProvider>
  )
}
