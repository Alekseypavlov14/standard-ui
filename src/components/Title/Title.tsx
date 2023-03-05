import React, { FC, ReactNode } from 'react'
import cn from 'classnames'
import './Title.css'

interface TitleProps {
  children: ReactNode
  bold?: boolean
  className?: string
}

export const Title: FC<TitleProps> = ({ children, bold, className }) => {
  const classNames = cn(
    '__Title__', 
    bold && '__Bold__', 
    className
  )

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}