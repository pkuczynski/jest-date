import {isSameMonth} from 'date-fns'
import {checkDate, deriveRelativeDateMessage} from './utils'

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert whether a date is the same month as another.
       * @param {Date} date - Date to compare to
       * @example
       * expect(new Date(2020, 8)).toBeSameMonthAs(new Date(2020, 8))
       */
      toBeSameMonthAs(date: Date): R
    }
  }
}

export function toBeSameMonthAs(
  this: jest.MatcherUtils,
  received: Date,
  expected: Date,
) {
  checkDate('received', received, toBeSameMonthAs, {invert: this.isNot})
  checkDate('expected', expected, toBeSameMonthAs, {invert: this.isNot})

  const messageContext = {
    name: toBeSameMonthAs.name,
    expected,
    received,
    invert: this.isNot,
  }

  return {
    pass: isSameMonth(received, expected),
    message: () => deriveRelativeDateMessage(messageContext),
  }
}
