import {matcherHint, printReceived, printExpected} from 'jest-matcher-utils'
import {isAfter} from 'date-fns'
import {checkDate} from './utils'

export function toBeAfter(received, expected) {
  checkDate('received', received, toBeAfter, this)
  checkDate('expected', expected, toBeAfter, this)

  return {
    pass: isAfter(received, expected),
    message: () => {
      const is = isAfter(expected, received) ? 'to be' : 'not to be'
      return [
        matcherHint(
          `${this.isNot ? '.not' : ''}.toBeAfter`,
          expected,
          received,
        ),
        '',
        `Expected date ${printReceived(received)} ${is} after ${printExpected(
          expected,
        )}`,
      ].join('\n')
    },
  }
}
