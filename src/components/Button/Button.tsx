import React, { FC, MouseEvent } from 'react'
import { CustomizationProvider } from '../../features/CustomizationProvider/CustomizationProvider'
import { ThemeProvider } from '../../features/ThemeProvider/ThemeProvider'
import cn from 'classnames'
import './Button.css'

interface ButtonProps extends CustomizationProvider {
  children: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  outlined?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  outlined,
  className,
}) => {
  return (
    <ThemeProvider>
      <button
        className={cn('__Button__', outlined && '__Outlined__', className)}
        onClick={onClick}
        children={children}
      />
    </ThemeProvider>
  )
}
