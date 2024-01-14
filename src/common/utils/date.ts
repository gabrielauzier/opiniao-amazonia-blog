export const formatDate = function (date: Date) {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  const dateFormatted = `${year}-${month}-${day}`

  const time = [date.getHours(), date.getMinutes(), date.getSeconds()]
    .map(function (n) {
      return n.toString().padStart(2, '0')
    })
    .join(':')
    .concat('.')
    .concat(date.getMilliseconds().toString())

  return dateFormatted + 'T' + time
}
