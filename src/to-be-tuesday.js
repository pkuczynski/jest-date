import {isTuesday} from 'date-fns'
import {checkDate, deriveWeekdayMessage} from './utils'

export function toBeTuesday(received) {
  checkDate('received', received, toBeTuesday, this)

  const messageContext = {
    name: toBeTuesday.name,
    received,
    invert: this.isNot,
  }

  return {
    pass: isTuesday(received),
    message: () => deriveWeekdayMessage(messageContext),
  }
}
