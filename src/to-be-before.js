import {matcherHint, printReceived, printExpected} from 'jest-matcher-utils'
import {isBefore} from 'date-fns'
import {checkDate} from './utils'

export function toBeBefore(received, expected) {
  checkDate(expected, toBeBefore, this)
  checkDate(received, toBeBefore, this)

  return {
    pass: isBefore(received, expected),
    message: () => {
      const is = isBefore(expected, received) ? 'to be' : 'not to be'
      return [
        matcherHint(
          `${this.isNot ? '.not' : ''}.toBeBefore`,
          expected,
          received,
        ),
        '',
        `Expected date ${printReceived(received)} ${is} before ${printExpected(
          expected,
        )}`,
      ].join('\n')
    },
  }
}
