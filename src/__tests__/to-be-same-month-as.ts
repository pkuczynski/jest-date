import {endOfMonth, addMonths} from 'date-fns'
import {testMatcher, property} from '../test-utils'

const date = new Date()

testMatcher('toBeSameMonthAs', [
  property.passes('when date is same month', {
    expected: date,
    received: endOfMonth(date),
  }),
  property.fails('when date is not same month', {
    expected: date,
    received: addMonths(date, 1),
  }),
  property.expectedMustBeADate({received: new Date()}),
  property.receivedMustBeADate({expected: new Date()}),
])
