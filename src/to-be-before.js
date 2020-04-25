import {matcherHint, printReceived, printExpected} from 'jest-matcher-utils'
import {isBefore, formatDistanceStrict} from 'date-fns'
import {checkDate} from './utils'

const MESSAGE_TEMPLATE =
  'Expected date {received} {shakespeare} before {expected}, but it was {distance} {relation}'

export function toBeBefore(received, expected) {
  checkDate('received', received, toBeBefore, this)
  checkDate('expected', expected, toBeBefore, this)

  return {
    pass: isBefore(received, expected),
    message: () => {
      return [
        matcherHint(
          `${this.isNot ? '.not' : ''}.${toBeBefore.name}`,
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
