import {endOfHour, addHours} from 'date-fns'
import {testMatcher, property} from '../test-utils'

const date = new Date()

testMatcher('toBeSameHourAs', [
  property.passes('when date is same hour', {
    expected: date,
    received: endOfHour(date),
  }),
  property.fails('when date is not same hour', {
    expected: date,
    received: addHours(date, 1),
  }),
  property.expectedMustBeADate({received: new Date()}),
  property.receivedMustBeADate({expected: new Date()}),
])
