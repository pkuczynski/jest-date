import {testExpectedMustBeADate, testReceivedMustBeADate} from '../test-utils'

/* eslint-disable max-lines-per-function */
describe('.toBeBefore', () => {
  testExpectedMustBeADate('toBeBefore', {receivedValue: new Date()})
  testReceivedMustBeADate('toBeBefore', {expectedValue: new Date()})

  test('passes when date is before', () => {
    expect(new Date('1970')).toBeBefore(new Date('2020'))
  })

  test('fails when date is after', () => {
    expect(() => {
      expect(new Date('2020')).toBeBefore(new Date('1970'))
    }).toThrowError()
  })

  test('fails when date is before and assertion is inverted', () => {
    expect(() => {
      expect(new Date('1970')).not.toBeBefore(new Date('2020'))
    }).toThrowError()
  })

  test('passes when date is after and assertion is inverted', () => {
    expect(new Date('2020')).not.toBeBefore(new Date('1970'))
  })
})
