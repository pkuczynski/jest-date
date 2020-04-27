import {isSameQuarter} from 'date-fns'
import {checkDate, deriveRelativeDateMessage} from './utils'

export function toBeSameQuarterAs(received, expected) {
  checkDate('received', received, toBeSameQuarterAs, this)
  checkDate('expected', expected, toBeSameQuarterAs, this)

  const messageContext = {
    name: toBeSameQuarterAs.name,
    expected,
    received,
    invert: this.isNot,
  }

  return {
    pass: isSameQuarter(received, expected),
    message: () => deriveRelativeDateMessage(messageContext),
  }
}
