import {isSaturday} from 'date-fns'
import {checkDate, deriveWeekdayMessage} from './utils'

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert whether a date is saturday or not.
       * @example
       * expect(new Date()).toBeSaturday()
       */
      toBeSaturday(): R
    }
  }
}

export function toBeSaturday(this: jest.MatcherUtils, received: Date) {
  checkDate('received', received, toBeSaturday, {
    excludeExpected: true,
    invert: this.isNot,
  })

  const messageContext = {
    name: toBeSaturday.name,
    received,
    invert: this.isNot,
  }

  return {
    pass: isSaturday(received),
    message: () => deriveWeekdayMessage(messageContext),
  }
}
