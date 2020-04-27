import {isSameWeek} from 'date-fns'
import {checkDate, deriveRelativeDateMessage} from './utils'

export function toBeSameWeekAs(received, expected) {
  checkDate('received', received, toBeSameWeekAs, this)
  checkDate('expected', expected, toBeSameWeekAs, this)

  const messageContext = {
    name: toBeSameWeekAs.name,
    expected,
    received,
    invert: this.isNot,
  }

  return {
    pass: isSameWeek(received, expected),
    message: () => deriveRelativeDateMessage(messageContext),
  }
}
