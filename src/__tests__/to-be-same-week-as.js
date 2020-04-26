import {endOfWeek, addWeeks} from 'date-fns'
import {testMatcher, property} from '../test-utils'

const date = new Date()

testMatcher('toBeSameWeekAs', [
  property.passes('when date is same week', {
    expected: date,
    received: endOfWeek(date),
  }),
  property.fails('when date is not same week', {
    expected: date,
    received: addWeeks(date, 1),
  }),
  property.expectedMustBeADate({receivedValue: new Date()}),
  property.receivedMustBeADate({expectedValue: new Date()}),
])
