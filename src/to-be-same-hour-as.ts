import {isSameHour} from 'date-fns'
import {checkDate, deriveRelativeDateMessage} from './utils'

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert whether a date is the same hour as another.
       * @param {Date} date - Date to compare to
       * @example
       * expect(new Date(2020, 8, 1, 12)).toBeSameHourAs(new Date(2020, 8, 1, 12))
       */
      toBeSameHourAs(date: Date): R
    }
  }
}

export function toBeSameHourAs(
  this: jest.MatcherUtils,
  received: Date,
  expected: Date,
) {
  checkDate('received', received, toBeSameHourAs, this)
  checkDate('expected', expected, toBeSameHourAs, this)

  const messageContext = {
    name: toBeSameHourAs.name,
    expected,
    received,
    invert: this.isNot,
  }

  return {
    pass: isSameHour(received, expected),
    message: () => deriveRelativeDateMessage(messageContext),
  }
}
