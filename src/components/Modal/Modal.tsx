import React, { FC, ReactNode } from 'react'
import { BackgroundLayer } from './../BackgroundLayer/BackgroundLayer'
import cn from 'classnames'
import './Modal.css'

interface ModalProps {
  title: string
  children?: ReactNode
  isShown: boolean
  onClose: () => void
  className?: string
}

export const Modal: FC<ModalProps> = ({
  title,
  children,
  isShown,
  onClose,
  className,
}) => {
  const classNames = cn(
    '__Modal__', 
    !isShown && '__Modal-Hidden__', 
    className
  )

  return (
    <BackgroundLayer 
      onClick={onClose} 
      isShown={isShown}
    >
      <div className={classNames}>
        <div className="__Title__">{title}</div>
        {children}
      </div>
    </BackgroundLayer>
  )
}
