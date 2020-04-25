import {testMatcher, property} from '../test-utils'

testMatcher('toBeBefore', [
  property.passes('when date is before', {
    expected: new Date('2020'),
    received: new Date('1970'),
  }),
  property.fails('when date is after', {
    expected: new Date('1970'),
    received: new Date('2020'),
  }),
  property.expectedMustBeADate({receivedValue: new Date()}),
  property.receivedMustBeADate({expectedValue: new Date()}),
])
