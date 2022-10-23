import React, { FC } from 'react'
import { Button } from './../Button/Button'
import { Modal } from '../Modal/Modal'
import './Confirm.css'

interface ConfirmProps {
  children: string,
  onConfirm: () => void,
  onCancel?: () => void,
  close: () => void
}

export const Confirm: FC<ConfirmProps> = ({
  children,
  onConfirm,
  onCancel,
  close
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
    <Modal 
      title={children}
      close={close}
    >
      <div className='__Buttons__'>
        <Button onClick={cancelHandler} dangerous>Cancel</Button>
        <Button onClick={confirmHandler}>Confirm</Button>
      </div>
    </Modal>
  )
}