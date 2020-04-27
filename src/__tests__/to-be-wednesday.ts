import {setDay} from 'date-fns'
import {testMatcher, property} from '../test-utils'

const date = new Date()

testMatcher('toBeWednesday', [
  property.passes('when date is wednesday', {
    received: setDay(date, 3),
  }),
  property.fails('when date is not wednesday', {
    received: setDay(date, 4),
  }),
  property.receivedMustBeADate(),
])
