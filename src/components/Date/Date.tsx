import React, { FC } from 'react'
import { fillDateTemplate } from './fillDateTemplate'
import { Country } from './Country.type'
import './Date.css'

interface DateProps {
  time: number
  country?: Country
}

export const Date: FC<DateProps> = ({ time, country = 'Europe' }) => {
  const dateView = fillDateTemplate(time, country)

  return <span className="__Date__">{dateView}</span>
}
