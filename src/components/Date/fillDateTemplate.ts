import { Country } from "./Country.type"
import { parseTime } from "./parseTime"
import { timeFormatMap } from "./timeFormatMap"

export function fillDateTemplate(time: number, country: Country) {
  const { day, month, year } = parseTime(time)

  if (!timeFormatMap[country]) country = 'Europe'

  return timeFormatMap[country]
    .replace(/DD/, day)
    .replace(/MM/, month)
    .replace(/YY/, year)
}