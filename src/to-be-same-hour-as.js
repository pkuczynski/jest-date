import {isSameHour} from 'date-fns'
import {checkDate, deriveRelativeDateMessage} from './utils'

export function toBeSameHourAs(received, expected) {
  checkDate('received', received, toBeSameHourAs, this)
  checkDate('expected', expected, toBeSameHourAs, this)

  const messageContext = {
    name: toBeSameHourAs.name,
    expected,
    received,
    invert: this.isNot,
  }

  return {
    pass: isSameHour(received, expected),
    message: () => deriveRelativeDateMessage(messageContext),
  }
}
