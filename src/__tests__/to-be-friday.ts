import {setDay} from 'date-fns'
import {testMatcher, property} from '../test-utils'

const date = new Date()

testMatcher('toBeFriday', [
  property.passes('when date is friday', {
    received: setDay(date, 5),
  }),
  property.fails('when date is not friday', {
    received: setDay(date, 6),
  }),
  property.receivedMustBeADate(),
])
