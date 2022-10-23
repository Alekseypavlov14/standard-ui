import React, { FC, ReactNode } from 'react'
import { BackgroundLayer } from './../BackgroundLayer/BackgroundLayer'
import './Modal.css'

interface ModalProps {
  title: string,
  children?: ReactNode,
  close: () => void
}

export const Modal: FC<ModalProps> = ({ 
  title,
  children, 
  close 
}) => {
  return (
    <BackgroundLayer onClick={close}>
      <div className='__Modal__'>
        <div className='__Title__'>
          {title}
        </div>

        {children}
      </div>
    </BackgroundLayer>
  )
}