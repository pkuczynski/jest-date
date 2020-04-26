import {isSameDay} from 'date-fns'
import {checkDate, deriveMessage} from './utils'

export function toBeSameDayAs(received, expected) {
  checkDate('received', received, toBeSameDayAs, this)
  checkDate('expected', expected, toBeSameDayAs, this)

  const messageContext = {
    name: toBeSameDayAs.name,
    expected,
    received,
    invert: this.isNot,
  }

  return {
    pass: isSameDay(received, expected),
    message: () => deriveMessage(messageContext),
  }
}
