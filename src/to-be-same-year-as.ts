import {isSameYear} from 'date-fns'
import {checkDate, deriveRelativeDateMessage} from './utils'

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert whether a date is the same year as another.
       * @param {Date} date - Date to compare to
       * @example
       * expect(new Date(2020, 1)).toBeSameYearAs(new Date(2020, 7))
       */
      toBeSameYearAs(date: Date): R
    }
  }
}

export function toBeSameYearAs(
  this: jest.MatcherUtils,
  received: Date,
  expected: Date,
) {
  checkDate('received', received, toBeSameYearAs, this)
  checkDate('expected', expected, toBeSameYearAs, this)

  const messageContext = {
    name: toBeSameYearAs.name,
    expected,
    received,
    invert: this.isNot,
  }

  return {
    pass: isSameYear(received, expected),
    message: () => deriveRelativeDateMessage(messageContext),
  }
}
