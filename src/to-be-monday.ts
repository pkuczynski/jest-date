import {isMonday} from 'date-fns'
import {checkDate, deriveWeekdayMessage} from './utils'

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert whether a date is monday or not.
       * @example
       * expect(new Date()).toBeMonday()
       */
      toBeMonday(): R
    }
  }
}

export function toBeMonday(this: jest.MatcherUtils, received: Date) {
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
