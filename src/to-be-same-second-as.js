import {matcherHint, printReceived, printExpected} from 'jest-matcher-utils'
import {formatDistanceStrict, isSameSecond} from 'date-fns'
import {checkDate} from './utils'

const MESSAGE_TEMPLATE =
  'Expected date {received} {shakespeare} in the same second as {expected}, but it was {distance} {relation}'

export function toBeSameSecondAs(received, expected) {
  checkDate('received', received, toBeSameSecondAs, this)
  checkDate('expected', expected, toBeSameSecondAs, this)

  return {
    pass: isSameSecond(received, expected),
    message: () => {
      return [
        matcherHint(
          `${this.isNot ? '.not' : ''}.${toBeSameSecondAs.name}`,
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
