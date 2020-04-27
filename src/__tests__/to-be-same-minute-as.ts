import {startOfMinute, addMinutes} from 'date-fns'
import {testMatcher, property} from '../test-utils'

const date = new Date()

testMatcher('toBeSameMinuteAs', [
  property.passes('when date is same minute', {
    expected: date,
    received: startOfMinute(date),
  }),
  property.fails('when date is not same minute', {
    expected: date,
    received: addMinutes(date, 1),
  }),
  property.expectedMustBeADate({received: new Date()}),
  property.receivedMustBeADate({expected: new Date()}),
])
