import {setDay} from 'date-fns'
import {testMatcher, property} from '../test-utils'

const date = new Date()

testMatcher('toBeSunday', [
  property.passes('when date is sunday', {
    received: setDay(date, 0),
  }),
  property.fails('when date is not sunday', {
    received: setDay(date, 1),
  }),
  property.receivedMustBeADate(),
])
