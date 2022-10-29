import React, { FC, MouseEvent } from 'react'
import { ColorThemeProvider } from '../../features/ColorThemeProvider/ColorThemeProvider'
import cn from 'classnames'
import './Button.css'

interface ButtonProps {
  children: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  outlined?: boolean
}

export const Button: FC<ButtonProps> = ({ children, onClick, outlined }) => {
  return (
    <ColorThemeProvider>
      <button
        className={cn('__Button__', outlined && '__Outlined__')}
        onClick={onClick}
        children={children}
      />
    </ColorThemeProvider>
  )
}
