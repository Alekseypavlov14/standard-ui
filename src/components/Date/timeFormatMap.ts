import { Country } from "./Country.type"

type timeFormatMap = {
  [key in Country]: string
}

export const timeFormatMap: timeFormatMap = {
  Europe: 'DD.MM.YY',
  USA: 'MM.DD.YY',
  Asia: 'YY.MM.DD',
}