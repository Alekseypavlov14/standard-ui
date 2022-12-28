import React, { FC, ReactNode } from 'react'
import { CustomizationProvider } from '../../features/CustomizationProvider/CustomizationProvider'
import cn from 'classnames'
import './Container.css'

interface ContainerProps extends CustomizationProvider {
  children: ReactNode
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('__Container__', className)}>
      {children}
    </div>
  )
}