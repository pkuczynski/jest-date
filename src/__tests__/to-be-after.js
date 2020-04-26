import {addDays, subDays} from 'date-fns'
import {testMatcher, property} from '../test-utils'

const date = new Date()

testMatcher('toBeAfter', [
  property.passes('when date is after', {
    expected: date,
    received: addDays(date, 1),
  }),
  property.fails('when date is before', {
    expected: date,
    received: subDays(date, 1),
  }),
  property.expectedMustBeADate({receivedValue: new Date()}),
  property.receivedMustBeADate({expectedValue: new Date()}),
])
