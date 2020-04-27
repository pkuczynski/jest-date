import {isSameMinute} from 'date-fns'
import {checkDate, deriveRelativeDateMessage} from './utils'

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert whether a date is the same minute as another.
       * @param {Date} date - Date to compare to
       * @example
       * expect(new Date(2020, 8, 1, 12, 30)).toBeSameMinuteAs(new Date(2020, 8, 1, 12, 30))
       */
      toBeSameMinuteAs(date: Date): R
    }
  }
}

export function toBeSameMinuteAs(
  this: jest.MatcherUtils,
  received: Date,
  expected: Date,
) {
  checkDate('received', received, toBeSameMinuteAs, {invert: this.isNot})
  checkDate('expected', expected, toBeSameMinuteAs, {invert: this.isNot})

  const messageContext = {
    name: toBeSameMinuteAs.name,
    expected,
    received,
    invert: this.isNot,
  }

  return {
    pass: isSameMinute(received, expected),
    message: () => deriveRelativeDateMessage(messageContext),
  }
}
