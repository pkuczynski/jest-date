import {isBefore} from 'date-fns'
import {checkDate, deriveRelativeDateMessage} from './utils'

export function toBeBefore(received, expected) {
  checkDate('received', received, toBeBefore, this)
  checkDate('expected', expected, toBeBefore, this)

  const messageContext = {
    name: toBeBefore.name,
    expected,
    received,
    invert: this.isNot,
  }

  return {
    pass: isBefore(received, expected),
    message: () => deriveRelativeDateMessage(messageContext),
  }
}
