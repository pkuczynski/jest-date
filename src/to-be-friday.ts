import {isFriday} from 'date-fns'
import {checkDate, deriveWeekdayMessage} from './utils'

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert whether a date is friday or not.
       * @example
       * expect(new Date()).toBeFriday()
       */
      toBeFriday(): R
    }
  }
}

export function toBeFriday(this: jest.MatcherUtils, received: Date) {
  checkDate('received', received, toBeFriday, {
    invert: this.isNot,
    excludeExpected: true,
  })

  const messageContext = {
    name: toBeFriday.name,
    received,
    invert: this.isNot,
  }

  return {
    pass: isFriday(received),
    message: () => deriveWeekdayMessage(messageContext),
  }
}
