import {setDay} from 'date-fns'
import {testMatcher, property} from '../test-utils'

const date = new Date()

testMatcher('toBeThursday', [
  property.passes('when date is thursday', {
    received: setDay(date, 4),
  }),
  property.fails('when date is not thursday', {
    received: setDay(date, 5),
  }),
  property.receivedMustBeADate(),
])
