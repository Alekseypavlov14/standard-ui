import React, { FC, ReactNode } from 'react'
import { CustomizationProvider } from '../../features/CustomizationProvider/CustomizationProvider'
import cn from 'classnames'
import './Title.css'

interface TitleProps extends CustomizationProvider {
  children: ReactNode
  bold?: boolean
}

export const Title: FC<TitleProps> = ({ children, bold, className }) => {
  const classNames = cn('__Title__', bold && '__Bold__', className)

  return <div className={classNames}>{children}</div>
}
