import {isSameWeek} from 'date-fns'
import {checkDate, deriveRelativeDateMessage} from './utils'

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert whether a date is the same week as another.
       * @param {Date} date - Date to compare to
       * @example
       * expect(new Date(2020, 8, 1)).toBeSameWeekAs(new Date(2020, 8, 1))
       */
      toBeSameWeekAs(date: Date): R
    }
  }
}

export function toBeSameWeekAs(
  this: jest.MatcherUtils,
  received: Date,
  expected: Date,
) {
  checkDate('received', received, toBeSameWeekAs, this)
  checkDate('expected', expected, toBeSameWeekAs, this)

  const messageContext = {
    name: toBeSameWeekAs.name,
    expected,
    received,
    invert: this.isNot,
  }

  return {
    pass: isSameWeek(received, expected),
    message: () => deriveRelativeDateMessage(messageContext),
  }
}
