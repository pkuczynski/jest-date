import {setDay} from 'date-fns'
import {testMatcher, property} from '../test-utils'

const date = new Date()

testMatcher('toBeTuesday', [
  property.passes('when date is tuesday', {
    received: setDay(date, 2),
  }),
  property.fails('when date is not tuesday', {
    received: setDay(date, 3),
  }),
  property.receivedMustBeADate({receivedValue: new Date()}),
])
