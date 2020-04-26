import {endOfDay, addDays} from 'date-fns'
import {testMatcher, property} from '../test-utils'

const date = new Date()

testMatcher('toBeSameDayAs', [
  property.passes('when date is same day', {
    expected: date,
    received: endOfDay(date),
  }),
  property.fails('when date is not same day', {
    expected: date,
    received: addDays(date, 1),
  }),
  property.expectedMustBeADate({receivedValue: new Date()}),
  property.receivedMustBeADate({expectedValue: new Date()}),
])
