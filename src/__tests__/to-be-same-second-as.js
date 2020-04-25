import {testExpectedMustBeADate, testReceivedMustBeADate} from '../test-utils'

/* eslint-disable max-lines-per-function */
describe('.toBeSameSecondAs', () => {
  testExpectedMustBeADate('toBeSameSecondAs', {receivedValue: new Date()})
  testReceivedMustBeADate('toBeSameSecondAs', {expectedValue: new Date()})

  test('passes when date is same second', () => {
    expect(new Date('2000-01-01T00:00:00.999')).toBeSameSecondAs(
      new Date('2000-01-01T00:00:00'),
    )
  })

  test.each([new Date('2000-01-01T00:00:01'), new Date('1999-12-31T23:59:59')])(
    'fails when date is not same second',
    date => {
      expect(() => {
        expect(date).toBeSameSecondAs(new Date('2000-01-01T00:00:00'))
      }).toThrowError()
    },
  )

  test.each([new Date('2000-01-01T00:00:01'), new Date('1999-12-31T23:59:59')])(
    'passes when date is not same second and assertion is inverted',
    date => {
      expect(date).not.toBeSameSecondAs(new Date('2000-01-01T00:00:00'))
    },
  )

  test('fails when date is same second and assertion is inverted', () => {
    expect(() => {
      expect(new Date('2000-01-01T00:00:00')).not.toBeSameSecondAs(
        new Date('2000-01-01T00:00:00'),
      )
    }).toThrowError()
  })
})
