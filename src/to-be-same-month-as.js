import {isSameMonth} from 'date-fns'
import {checkDate, deriveRelativeDateMessage} from './utils'

export function toBeSameMonthAs(received, expected) {
  checkDate('received', received, toBeSameMonthAs, this)
  checkDate('expected', expected, toBeSameMonthAs, this)

  const messageContext = {
    name: toBeSameMonthAs.name,
    expected,
    received,
    invert: this.isNot,
  }

  return {
    pass: isSameMonth(received, expected),
    message: () => deriveRelativeDateMessage(messageContext),
  }
}
