/* eslint-disable jest/valid-expect */
import {NotADateError} from './utils'

function testExpectedMustBeADate(matcherName, {receivedValue} = {}) {
  test('throws when expected is not a valid date', () => {
    expect(() => {
      expect(receivedValue)[matcherName](new Date('bla'))
    }).toThrowError(NotADateError)

    expect(() => {
      expect(receivedValue).not[matcherName](new Date('bla'))
    }).toThrowError(NotADateError)
  })

  test('throws when expected is not a date', () => {
    expect(() => {
      expect(receivedValue)[matcherName]('2020')
    }).toThrowError(NotADateError)

    expect(() => {
      expect(receivedValue).not[matcherName]('1970')
    }).toThrowError(NotADateError)
  })
}

function testReceivedMustBeADate(matcherName, {expectedValue} = {}) {
  test('throws when received is not a valid date', () => {
    expect(() => {
      expect(new Date('bla'))[matcherName](expectedValue)
    }).toThrowError(NotADateError)

    expect(() => {
      expect(new Date('bla')).not[matcherName](expectedValue)
    }).toThrowError(NotADateError)
  })

  test('throws when received is not a date', () => {
    expect(() => {
      expect('1970')[matcherName](expectedValue)
    }).toThrowError(NotADateError)

    expect(() => {
      expect('2020').not[matcherName](expectedValue)
    }).toThrowError(NotADateError)
  })
}

// eslint-disable-next-line jest/no-export
export {testExpectedMustBeADate, testReceivedMustBeADate}
