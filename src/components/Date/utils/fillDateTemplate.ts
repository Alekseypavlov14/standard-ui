import { defaultTimeZone } from '../const/defaultTimeZone'
import { timeFormatMap } from '../const/timeFormatMap'
import { parseTime } from './parseTime'
import { Region } from '../types/Region'

export function fillDateTemplate(time: number, region: Region) {
  const { day, month, year } = parseTime(time)

  return timeFormatMap[region || defaultTimeZone]
    .replace(/DD/, day)
    .replace(/MM/, month)
    .replace(/YY/, year)
}
