import React, { FC } from 'react'
import { CustomizationProvider } from '../../features/CustomizationProvider/CustomizationProvider'
import { ThemeProvider } from '../../features/ThemeProvider/ThemeProvider'
import { Button } from './../Button/Button'
import { Modal } from '../Modal/Modal'
import './Confirm.css'

interface ConfirmProps extends CustomizationProvider {
  title: string
  isShown: boolean
  onConfirm: () => void
  onCancel?: () => void
  onClose: () => void
}

export const Confirm: FC<ConfirmProps> = ({
  title,
  isShown,
  onConfirm,
  onCancel,
  onClose,
  className,
}) => {
  const confirmHandler = () => {
    onConfirm()
    onClose()
  }

  const cancelHandler = () => {
    if (onCancel) onCancel()
    onClose()
  }

  return (
    <ThemeProvider>
      <Modal 
        isShown={isShown} 
        title={title} 
        onClose={onClose} 
        className={className}
      >
        <div className="__Buttons__">
          <Button onClick={cancelHandler} outlined>
            Cancel
          </Button>
          <Button onClick={confirmHandler}>Confirm</Button>
        </div>
      </Modal>
    </ThemeProvider>
  )
}
