import {matcherHint, printReceived, printExpected} from 'jest-matcher-utils'
import {isAfter, formatDistanceStrict} from 'date-fns'
import {checkDate} from './utils'

const MESSAGE_TEMPLATE =
  'Expected date {received} {shakespeare} after {expected}, but it was {distance} {relation}'

export function toBeAfter(received, expected) {
  checkDate('received', received, toBeAfter, this)
  checkDate('expected', expected, toBeAfter, this)

  return {
    pass: isAfter(received, expected),
    message: () => {
      return [
        matcherHint(
          `${this.isNot ? '.not' : ''}.${toBeAfter.name}`,
          expected.toISOString(),
          received.toISOString(),
        ),
        '',
        MESSAGE_TEMPLATE.replace('{received}', printReceived(received))
          .replace('{shakespeare}', this.isNot ? 'not to be' : 'to be')
          .replace('{expected}', printExpected(expected))
          .replace('{distance}', formatDistanceStrict(expected, received))
          .replace('{relation}', this.isNot ? 'after' : 'before'),
      ].join('\n')
    },
  }
}
