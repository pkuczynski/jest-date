import {matcherHint, printReceived, printExpected} from 'jest-matcher-utils'
import {formatDistanceStrict, isSameMinute} from 'date-fns'
import {checkDate} from './utils'

const MESSAGE_TEMPLATE =
  'Expected date {received} {shakespeare} in the same minute as {expected}, but it was {distance} {relation}'

export function toBeSameMinuteAs(received, expected) {
  checkDate('received', received, toBeSameMinuteAs, this)
  checkDate('expected', expected, toBeSameMinuteAs, this)

  return {
    pass: isSameMinute(received, expected),
    message: () => {
      return [
        matcherHint(
          `${this.isNot ? '.not' : ''}.${toBeSameMinuteAs.name}`,
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
