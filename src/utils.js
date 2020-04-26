import {
  RECEIVED_COLOR as receivedColor,
  EXPECTED_COLOR as expectedColor,
  matcherHint,
  printWithType,
  printReceived,
  printExpected,
} from 'jest-matcher-utils'
import {isValid, formatDistanceStrict, isBefore} from 'date-fns'

class NotADateError extends Error {
  constructor(type, date, matcherFn, context) {
    super()

    /* istanbul ignore next */
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, matcherFn)
    }

    this.message = [
      matcherHint(
        `${context.isNot ? '.not' : ''}.${matcherFn.name}`,
        'received',
        'expected',
      ),
      '',
      `${
        type === 'received'
          ? receivedColor('received')
          : expectedColor('expected')
      } value must be a valid Date.`,
      type === 'received'
        ? printWithType('Received', date, printReceived)
        : printWithType('Expected', date, printExpected),
    ].join('\n')
  }
}

function checkDate(type, date, ...args) {
  if (date instanceof Date === false || !isValid(date)) {
    throw new NotADateError(type, date, ...args)
  }
}

function deriveMessage({name, expected, received, invert}) {
  const MESSAGE_TEMPLATE = `{matcher_hint}
  
  Expected date {received} {shakespeare} {expected_relation} {expected}, but it was {actual_relation}`

  return MESSAGE_TEMPLATE.replace(
    '{matcher_hint}',
    matcherHint(
      `${invert ? '.not' : ''}.${name}`,
      expected.toISOString(),
      received.toISOString(),
    ),
  )
    .replace('{received}', printReceived(received))
    .replace('{shakespeare}', invert ? 'not to be' : 'to be')
    .replace(
      '{expected_relation}',
      name
        .split(/(?=[A-Z])/)
        .slice(2)
        .map(s => s.toLowerCase())
        .join(' '),
    )
    .replace('{expected}', printExpected(expected))
    .replace(
      '{actual_relation}',
      `${formatDistanceStrict(expected, received)} ${
        isBefore(received, expected) ? 'before' : 'after'
      }`,
    )
}

export {NotADateError, checkDate, deriveMessage}
