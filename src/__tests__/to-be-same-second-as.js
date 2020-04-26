import {endOfSecond, addSeconds} from 'date-fns'
import {testMatcher, property} from '../test-utils'

const date = new Date()

testMatcher('toBeSameSecondAs', [
  property.passes('when date is same second', {
    expected: date,
    received: endOfSecond(date),
  }),
  property.fails('when date is not same second', {
    expected: date,
    received: addSeconds(date, 1),
  }),
  property.expectedMustBeADate({receivedValue: new Date()}),
  property.receivedMustBeADate({expectedValue: new Date()}),
])
