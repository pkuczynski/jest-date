import {isSameDay} from 'date-fns'
import {checkDate, deriveRelativeDateMessage} from './utils'

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert whether a date is the same day as another.
       * @param {Date} date - Date to compare to
       * @example
       * expect(new Date(2020, 8, 1)).toBeSameDayAs(new Date(2020, 8, 1))
       */
      toBeSameDayAs(date: Date): R
    }
  }
}

export function toBeSameDayAs(
  this: jest.MatcherUtils,
  received: Date,
  expected: Date,
) {
  checkDate('received', received, toBeSameDayAs, {invert: this.isNot})
  checkDate('expected', expected, toBeSameDayAs, {invert: this.isNot})

  const messageContext = {
    name: toBeSameDayAs.name,
    expected,
    received,
    invert: this.isNot,
  }

  return {
    pass: isSameDay(received, expected),
    message: () => deriveRelativeDateMessage(messageContext),
  }
}
