import React, { FC } from 'react'
import { CustomizationProvider } from '../../features/CustomizationProvider/CustomizationProvider'
import { ThemeProvider } from '../../features/ThemeProvider/ThemeProvider'
import { fillDateTemplate } from './fillDateTemplate'
import { Country } from './Country.type'
import cn from 'classnames'
import './Date.css'

interface DateProps extends CustomizationProvider {
  time: number
  country?: Country
}

export const Date: FC<DateProps> = ({
  time,
  country = 'Europe',
  className,
}) => {
  const dateView = fillDateTemplate(time, country)

  return (
    <ThemeProvider>
      <span className={cn('__Date__', className)}>{dateView}</span>
    </ThemeProvider>
  )
}
