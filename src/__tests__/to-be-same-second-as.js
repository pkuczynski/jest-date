import {testMatcher, property} from '../test-utils'

testMatcher('toBeSameSecondAs', [
  property.passes('when date is same second', {
    expected: new Date('2000-01-01T00:00:00'),
    received: new Date('2000-01-01T00:00:00.5'),
  }),
  property.fails('when date is not same second', {
    expected: new Date('2000-01-01T00:00:00'),
    received: new Date('1999-12-31T23:59:59'),
  }),
  property.expectedMustBeADate({receivedValue: new Date()}),
  property.receivedMustBeADate({expectedValue: new Date()}),
])
