import React, { FC, useState } from 'react'
import { CustomizationProvider } from '../../features/CustomizationProvider/CustomizationProvider'
import { ThemeProvider } from '../../features/ThemeProvider/ThemeProvider'
import cn from 'classnames'
import './BurgerButton.css'

interface BurgerButtonProps extends CustomizationProvider {
  isOpened: boolean
  onClick: () => void
}

export const BurgerButton: FC<BurgerButtonProps> = ({
  isOpened,
  onClick,
  className,
}) => {
  const classNames = cn(
    '__BurgerButton__',
    isOpened && '__Clicked__',
    className
  )

  return (
    <ThemeProvider>
      <div className={classNames} onClick={onClick}>
        <span />
      </div>
    </ThemeProvider>
  )
}
