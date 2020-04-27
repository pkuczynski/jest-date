import {
  RECEIVED_COLOR as receivedColor,
  EXPECTED_COLOR as expectedColor,
  matcherHint,
  printWithType,
  printReceived,
  printExpected,
} from 'jest-matcher-utils'
import {isValid, formatDistanceStrict, isBefore, getDay} from 'date-fns'

class NotADateError extends Error {
  constructor(
    type: 'expected' | 'received',
    date: Date,
    matcherFn: Function,
    context: jest.MatcherUtils,
  ) {
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

function checkDate(
  type: 'received' | 'expected',
  date: Date,
  matcher: Function,
  context: jest.MatcherUtils,
) {
  if (date instanceof Date === false || !isValid(date)) {
    throw new NotADateError(type, date, matcher, context)
  }
}

interface DeriveRelativeMessage {
  name: string
  expected: Date
  received: Date
  invert: boolean
}

function deriveRelativeDateMessage({
  name,
  expected,
  received,
  invert,
}: DeriveRelativeMessage) {
  const MESSAGE_TEMPLATE = `{matcher_hint}
  
  Expected date {received} {shakespeare} {expected_relation} {expected}, but it was {actual_relation}.`

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

interface DeriveWeekdayMessage {
  name: string
  received: Date
  invert: boolean
}

function deriveWeekdayMessage({name, received, invert}: DeriveWeekdayMessage) {
  const WEEKDAYS = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ]
  const MESSAGE_TEMPLATE = `{matcher_hint}
  
  Expected date {received} to be on a {expected_day}, but it was on a {actual_day}.`

  const INVERTED_MESSAGE_TEMPLATE = `{matcher_hint}
  
  Expected date {received} not to be on a {expected_day}, but it was.`

  const template = invert ? INVERTED_MESSAGE_TEMPLATE : MESSAGE_TEMPLATE

  return template
    .replace(
      '{matcher_hint}',
      matcherHint(
        `${invert ? '.not' : ''}.${name}`,
        received.toISOString(),
        '',
      ),
    )
    .replace('{received}', printReceived(received))
    .replace(
      '{expected_day}',
      name
        .split(/(?=[A-Z])/)
        .slice(-1)[0]
        .toLowerCase(),
    )
    .replace('{actual_day}', WEEKDAYS[getDay(received)])
}

export {
  NotADateError,
  checkDate,
  deriveRelativeDateMessage,
  deriveWeekdayMessage,
}
