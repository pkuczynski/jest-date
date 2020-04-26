import {isSameMinute} from 'date-fns'
import {checkDate, deriveMessage} from './utils'

export function toBeSameMinuteAs(received, expected) {
  checkDate('received', received, toBeSameMinuteAs, this)
  checkDate('expected', expected, toBeSameMinuteAs, this)

  const messageContext = {
    name: toBeSameMinuteAs.name,
    expected,
    received,
    invert: this.isNot,
  }

  return {
    pass: isSameMinute(received, expected),
    message: () => deriveMessage(messageContext),
  }
}
