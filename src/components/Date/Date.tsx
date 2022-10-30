import React, { FC } from 'react'
import { CustomizationProvider } from '../../features/CustomizationProvider/CustomizationProvider'
import { ThemeProvider } from '../../features/ThemeProvider/ThemeProvider'
import { fillDateTemplate } from './fillDateTemplate'
import { Region } from './Region.type'
import cn from 'classnames'
import './Date.css'

interface DateProps extends CustomizationProvider {
  time: number
  region?: Region
}

export const Date: FC<DateProps> = ({ time, region = 'Europe', className }) => {
  const dateView = fillDateTemplate(time, region)

  return (
    <ThemeProvider>
      <span className={cn('__Date__', className)}>{dateView}</span>
    </ThemeProvider>
  )
}
