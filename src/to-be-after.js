import {isAfter} from 'date-fns'
import {checkDate, deriveRelativeDateMessage} from './utils'

export function toBeAfter(received, expected) {
  checkDate('received', received, toBeAfter, this)
  checkDate('expected', expected, toBeAfter, this)

  const messageContext = {
    name: toBeAfter.name,
    expected,
    received,
    invert: this.isNot,
  }

  return {
    pass: isAfter(received, expected),
    message: () => deriveRelativeDateMessage(messageContext),
  }
}
