import {isMonday} from 'date-fns'
import {checkDate, deriveWeekdayMessage} from './utils'

export function toBeMonday(received) {
  checkDate('received', received, toBeMonday, this)

  const messageContext = {
    name: toBeMonday.name,
    received,
    invert: this.isNot,
  }

  return {
    pass: isMonday(received),
    message: () => deriveWeekdayMessage(messageContext),
  }
}
