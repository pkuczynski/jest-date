import {isSameSecond} from 'date-fns'
import {checkDate, deriveRelativeDateMessage} from './utils'

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert whether a date is the same second as another.
       * @param {Date} date - Date to compare to
       * @example
       * expect(new Date(2020, 8, 1, 12, 30, 10))
       *  .toBeSameSecondAs(new Date(2020, 8, 1, 12, 30, 10))
       */
      toBeSameSecondAs(date: Date): R
    }
  }
}

export function toBeSameSecondAs(
  this: jest.MatcherUtils,
  received: Date,
  expected: Date,
) {
  checkDate('received', received, toBeSameSecondAs, {invert: this.isNot})
  checkDate('expected', expected, toBeSameSecondAs, {invert: this.isNot})

  const messageContext = {
    name: toBeSameSecondAs.name,
    expected,
    received,
    invert: this.isNot,
  }

  return {
    pass: isSameSecond(received, expected),
    message: () => deriveRelativeDateMessage(messageContext),
  }
}
