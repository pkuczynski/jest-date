import {
  RECEIVED_COLOR as receivedColor,
  EXPECTED_COLOR as expectedColor,
  matcherHint,
  printWithType,
  printReceived,
  printExpected,
} from 'jest-matcher-utils'
import {isValid} from 'date-fns'

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

export {NotADateError, checkDate}
