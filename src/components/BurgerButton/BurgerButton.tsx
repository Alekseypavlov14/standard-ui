import React, { FC, useState } from 'react'
import { CustomizationProvider } from '../../features/CustomizationProvider/CustomizationProvider'
import { ThemeProvider } from '../../features/ThemeProvider/ThemeProvider'
import cn from 'classnames'
import './BurgerButton.css'

interface BurgerButtonProps extends CustomizationProvider {
  onOpen: () => void
  onClose: () => void
  initialOpened?: boolean
}

export const BurgerButton: FC<BurgerButtonProps> = ({
  onOpen,
  onClose,
  initialOpened,
  className,
}) => {
  const [isOpened, setOpened] = useState<boolean>(Boolean(initialOpened))

  const toggleClicked = () => {
    setOpened(isOpened => !isOpened)
  }

  const modifier = isOpened && '__Clicked__'

  const openHandler = () => {
    toggleClicked()
    onOpen()
  }

  const closeHandler = () => {
    toggleClicked()
    onClose()
  }

  const actualHandler = isOpened ? closeHandler : openHandler

  return (
    <ThemeProvider>
      <div
        className={cn('__BurgerButton__', modifier, className)}
        onClick={actualHandler}
      >
        <span />
      </div>
    </ThemeProvider>
  )
}
