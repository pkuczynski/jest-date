import {isTuesday} from 'date-fns'
import {checkDate, deriveWeekdayMessage} from './utils'

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert whether a date is tuesday another or not.
       * @example
       * expect(new Date()).toBeTuesday()
       */
      toBeTuesday(): R
    }
  }
}

export function toBeTuesday(this: jest.MatcherUtils, received: Date) {
  checkDate('received', received, toBeTuesday, this)

  const messageContext = {
    name: toBeTuesday.name,
    received,
    invert: this.isNot,
  }

  return {
    pass: isTuesday(received),
    message: () => deriveWeekdayMessage(messageContext),
  }
}
