import {testExpectedMustBeADate, testReceivedMustBeADate} from '../test-utils'

/* eslint-disable max-lines-per-function */
describe('.toBeAfter', () => {
  testExpectedMustBeADate('toBeAfter', {receivedValue: new Date()})
  testReceivedMustBeADate('toBeAfter', {expectedValue: new Date()})

  test('passes when date is after', () => {
    expect(new Date('2020')).toBeAfter(new Date('1970'))
  })

  test('fails when date is before', () => {
    expect(() => {
      expect(new Date('1970')).toBeAfter(new Date('2020'))
    }).toThrowError()
  })

  test('fails when date is after and assertion is inverted', () => {
    expect(() => {
      expect(new Date('2020')).not.toBeAfter(new Date('1970'))
    }).toThrowError()
  })

  test('passes when date is before and assertion is inverted', () => {
    expect(new Date('1970')).not.toBeAfter(new Date('2020'))
  })
})
