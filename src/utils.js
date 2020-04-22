import {
  RECEIVED_COLOR as receivedColor,
  matcherHint,
  printWithType,
  printReceived,
} from 'jest-matcher-utils'

class NotADateError extends Error {
  constructor(received, matcherFn, context) {
    super()

    /* istanbul ignore next */
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, matcherFn)
    }
    let withType = ''
    try {
      withType = printWithType('Received', received, printReceived)
    } catch (e) {
      // Can throw for Document:
      // https://github.com/jsdom/jsdom/issues/2304
    }
    this.message = [
      matcherHint(
        `${context.isNot ? '.not' : ''}.${matcherFn.name}`,
        'received',
        '',
      ),
      '',
      `${receivedColor('received')} value must be a valid Date.`,
      withType,
    ].join('\n')
  }
}

function checkDate(date, ...args) {
  if (date instanceof Date === false || isNaN(date)) {
    throw new NotADateError(date, ...args)
  }

  // if (!isNaN(d)) {
  // }
}

export {NotADateError, checkDate}
