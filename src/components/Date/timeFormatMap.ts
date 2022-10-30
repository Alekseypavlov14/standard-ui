import { Region } from './Region.type'

type timeFormatMap = {
  [key in Region]: string
}

export const timeFormatMap: timeFormatMap = {
  Europe: 'DD.MM.YY',
  USA: 'MM.DD.YY',
  Asia: 'YY.MM.DD',
}
