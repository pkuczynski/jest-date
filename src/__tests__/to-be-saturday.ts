import {setDay} from 'date-fns'
import {testMatcher, property} from '../test-utils'

const date = new Date()

testMatcher('toBeSaturday', [
  property.passes('when date is saturday', {
    received: setDay(date, 6),
  }),
  property.fails('when date is not saturday', {
    received: setDay(date, 0),
  }),
  property.receivedMustBeADate(),
])
