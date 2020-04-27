import {isBefore} from 'date-fns'
import {checkDate, deriveRelativeDateMessage} from './utils'

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert whether a date is before another or not.
       * @param {Date} date - Date to compare to
       * @example
       * expect(new Date(2017, 8)).toBeBefore(new Date(2020, 8))
       */
      toBeBefore(date: Date): R
    }
  }
}

export function toBeBefore(
  this: jest.MatcherUtils,
  received: Date,
  expected: Date,
) {
  checkDate('received', received, toBeBefore, this)
  checkDate('expected', expected, toBeBefore, this)

  const messageContext = {
    name: toBeBefore.name,
    expected,
    received,
    invert: this.isNot,
  }

  return {
    pass: isBefore(received, expected),
    message: () => deriveRelativeDateMessage(messageContext),
  }
}
