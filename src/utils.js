import {
  RECEIVED_COLOR as receivedColor,
  EXPECTED_COLOR as expectedColor,
  matcherHint,
  printWithType,
  printReceived,
  printExpected,
} from 'jest-matcher-utils'

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
  if (date instanceof Date === false || isInvalidDate(date)) {
    throw new NotADateError(type, date, ...args)
  }
}

function isInvalidDate(date) {
  // Reference: https://www.geeksforgeeks.org/how-to-check-a-date-is-valid-or-not-using-javascript/
  // eslint-disable-next-line no-self-compare
  return date.getTime() !== date.getTime()
}

export {NotADateError, checkDate}
