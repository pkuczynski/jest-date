import {isThursday} from 'date-fns'
import {checkDate, deriveWeekdayMessage} from './utils'

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert whether a date is thursday or not.
       * @example
       * expect(new Date()).toBeThursday()
       */
      toBeThursday(): R
    }
  }
}

export function toBeThursday(this: jest.MatcherUtils, received: Date) {
  checkDate('received', received, toBeThursday, {
    excludeExpected: true,
    invert: this.isNot,
  })

  const messageContext = {
    name: toBeThursday.name,
    received,
    invert: this.isNot,
  }

  return {
    pass: isThursday(received),
    message: () => deriveWeekdayMessage(messageContext),
  }
}
