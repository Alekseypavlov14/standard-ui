import { Region } from './Region.type'
import { parseTime } from './parseTime'
import { timeFormatMap } from './timeFormatMap'

export function fillDateTemplate(time: number, region: Region) {
  const { day, month, year } = parseTime(time)

  if (!timeFormatMap[region]) region = 'Europe'

  return timeFormatMap[region]
    .replace(/DD/, day)
    .replace(/MM/, month)
    .replace(/YY/, year)
}
