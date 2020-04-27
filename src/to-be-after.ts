import {isAfter} from 'date-fns'
import {checkDate, deriveRelativeDateMessage} from './utils'

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert whether a date is after another or not.
       * @param {Date} date - Date to compare to
       * @example
       * expect(new Date(2020, 8)).toBeAfter(new Date(2017, 8))
       */
      toBeAfter(date: Date): R
    }
  }
}

export function toBeAfter(
  this: jest.MatcherUtils,
  received: Date,
  expected: Date,
) {
  checkDate('received', received, toBeAfter, {invert: this.isNot})
  checkDate('expected', expected, toBeAfter, {invert: this.isNot})

  const messageContext = {
    name: toBeAfter.name,
    expected,
    received,
    invert: this.isNot,
  }

  return {
    pass: isAfter(received, expected),
    message: () => deriveRelativeDateMessage(messageContext),
  }
}
