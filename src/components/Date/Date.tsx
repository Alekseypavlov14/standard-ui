import React, { FC } from 'react'
import { fillDateTemplate } from './utils/fillDateTemplate'
import { defaultTimeZone } from './const/defaultTimeZone'
import { Region } from './types/Region'
import cn from 'classnames'
import './Date.css'

interface DateProps {
  time: number
  region?: Region
  className?: string
}

export const Date: FC<DateProps> = ({ time, region = defaultTimeZone, className }) => {
  const dateView = fillDateTemplate(time, region)

  const classNames = cn('__Date__', className)

  return <span className={classNames}>{dateView}</span>
}
