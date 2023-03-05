import React, { FC, ReactNode } from 'react'
import cn from 'classnames'
import './Container.css'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  const classNames = cn('__Container__', className)

  return <div className={classNames}>{children}</div>
}
