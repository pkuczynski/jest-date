import {matcherHint, printReceived, printExpected} from 'jest-matcher-utils'
import {formatDistanceStrict, isSameHour} from 'date-fns'
import {checkDate} from './utils'

const MESSAGE_TEMPLATE =
  'Expected date {received} {shakespeare} in the same hour as {expected}, but it was {distance} {relation}'

export function toBeSameHourAs(received, expected) {
  checkDate('received', received, toBeSameHourAs, this)
  checkDate('expected', expected, toBeSameHourAs, this)

  return {
    pass: isSameHour(received, expected),
    message: () => {
      return [
        matcherHint(
          `${this.isNot ? '.not' : ''}.${toBeSameHourAs.name}`,
          expected.toISOString(),
          received.toISOString(),
        ),
        '',
        MESSAGE_TEMPLATE.replace('{received}', printReceived(received))
          .replace('{shakespeare}', this.isNot ? 'not to be' : 'to be')
          .replace('{expected}', printExpected(expected))
          .replace('{distance}', formatDistanceStrict(expected, received))
          .replace('{relation}', this.isNot ? 'before' : 'after'),
      ].join('\n')
    },
  }
}
