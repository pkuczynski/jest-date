import {isSameYear} from 'date-fns'
import {checkDate, deriveMessage} from './utils'

export function toBeSameYearAs(received, expected) {
  checkDate('received', received, toBeSameYearAs, this)
  checkDate('expected', expected, toBeSameYearAs, this)

  const messageContext = {
    name: toBeSameYearAs.name,
    expected,
    received,
    invert: this.isNot,
  }

  return {
    pass: isSameYear(received, expected),
    message: () => deriveMessage(messageContext),
  }
}
