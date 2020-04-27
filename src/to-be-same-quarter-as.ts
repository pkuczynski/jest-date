import {isSameQuarter} from 'date-fns'
import {checkDate, deriveRelativeDateMessage} from './utils'

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert whether a date is the same quarter as another.
       * @param {Date} date - Date to compare to
       * @example
       * expect(new Date(2020, 8)).toBeSameQuarterAs(new Date(2020, 8))
       */
      toBeSameQuarterAs(date: Date): R
    }
  }
}

export function toBeSameQuarterAs(
  this: jest.MatcherUtils,
  received: Date,
  expected: Date,
) {
  checkDate('received', received, toBeSameQuarterAs, this)
  checkDate('expected', expected, toBeSameQuarterAs, this)

  const messageContext = {
    name: toBeSameQuarterAs.name,
    expected,
    received,
    invert: this.isNot,
  }

  return {
    pass: isSameQuarter(received, expected),
    message: () => deriveRelativeDateMessage(messageContext),
  }
}
