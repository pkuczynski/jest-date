import {testMatcher, property} from '../test-utils'

testMatcher('toBeSameMinuteAs', [
  property.passes('when date is same minute', {
    expected: new Date('2000-01-01T00:00'),
    received: new Date('2000-01-01T00:00:30'),
  }),
  property.fails('when date is not same minute', {
    expected: new Date('2000-01-01T00:00'),
    received: new Date('1999-12-31T23:59'),
  }),
  property.expectedMustBeADate({receivedValue: new Date()}),
  property.receivedMustBeADate({expectedValue: new Date()}),
])
