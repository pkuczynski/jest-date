import {setDay} from 'date-fns'
import {testMatcher, property} from '../test-utils'

const date = new Date()

testMatcher('toBeMonday', [
  property.passes('when date is monday', {
    received: setDay(date, 1),
  }),
  property.fails('when date is not monday', {
    received: setDay(date, 2),
  }),
  property.receivedMustBeADate({receivedValue: new Date()}),
])
