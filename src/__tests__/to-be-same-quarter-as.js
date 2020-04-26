import {endOfQuarter, addQuarters} from 'date-fns'
import {testMatcher, property} from '../test-utils'

const date = new Date()

testMatcher('toBeSameQuarterAs', [
  property.passes('when date is same quarter', {
    expected: date,
    received: endOfQuarter(date),
  }),
  property.fails('when date is not same quarter', {
    expected: date,
    received: addQuarters(date, 1),
  }),
  property.expectedMustBeADate({receivedValue: new Date()}),
  property.receivedMustBeADate({expectedValue: new Date()}),
])
