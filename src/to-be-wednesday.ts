import {isWednesday} from 'date-fns'
import {checkDate, deriveWeekdayMessage} from './utils'

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert whether a date is wednesday or not.
       * @example
       * expect(new Date()).toBeWednesday()
       */
      toBeWednesday(): R
    }
  }
}

export function toBeWednesday(this: jest.MatcherUtils, received: Date) {
  checkDate('received', received, toBeWednesday, this)

  const messageContext = {
    name: toBeWednesday.name,
    received,
    invert: this.isNot,
  }

  return {
    pass: isWednesday(received),
    message: () => deriveWeekdayMessage(messageContext),
  }
}
