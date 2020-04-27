import {isSunday} from 'date-fns'
import {checkDate, deriveWeekdayMessage} from './utils'

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert whether a date is sunday or not.
       * @example
       * expect(new Date()).toBeSunday()
       */
      toBeSunday(): R
    }
  }
}

export function toBeSunday(this: jest.MatcherUtils, received: Date) {
  checkDate('received', received, toBeSunday, {
    excludeExpected: true,
    invert: this.isNot,
  })

  const messageContext = {
    name: toBeSunday.name,
    received,
    invert: this.isNot,
  }

  return {
    pass: isSunday(received),
    message: () => deriveWeekdayMessage(messageContext),
  }
}
