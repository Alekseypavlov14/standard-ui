export function parseTime(time: number) {
  const date = new Date(time)

  const year = date.getFullYear()
  const yearView = String(year)

  let month = date.getMonth() + 1
  let monthView = `${month}`
  if (month < 10) monthView = `0${month}`

  let day = date.getDate()
  let dayView = `${day}`
  if (day < 10) dayView = `0${day}`

  return {
    year: yearView,
    month: monthView,
    day: dayView,
  }
}
