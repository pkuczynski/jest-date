import {endOfYear, addYears} from 'date-fns'
import {testMatcher, property} from '../test-utils'

const date = new Date()

testMatcher('toBeSameYearAs', [
  property.passes('when date is same year', {
    expected: date,
    received: endOfYear(date),
  }),
  property.fails('when date is not same year', {
    expected: date,
    received: addYears(date, 1),
  }),
  property.expectedMustBeADate({receivedValue: new Date()}),
  property.receivedMustBeADate({expectedValue: new Date()}),
])
