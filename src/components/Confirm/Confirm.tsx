import React, { FC } from 'react'
import { CustomizationProvider } from '../../features/CustomizationProvider/CustomizationProvider'
import { ThemeProvider } from '../../features/ThemeProvider/ThemeProvider'
import { Button } from './../Button/Button'
import { Modal } from '../Modal/Modal'
import './Confirm.css'

interface ConfirmProps extends CustomizationProvider {
  children: string
  onConfirm: () => void
  onCancel?: () => void
  close: () => void
}

export const Confirm: FC<ConfirmProps> = ({
  children,
  onConfirm,
  onCancel,
  close,
  className,
}) => {
  const confirmHandler = () => {
    onConfirm()
    close()
  }

  const cancelHandler = () => {
    if (onCancel) onCancel()
    close()
  }

  return (
    <ThemeProvider>
      <Modal title={children} close={close} className={className}>
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
