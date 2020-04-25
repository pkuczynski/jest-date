/* eslint-disable jest/valid-expect */
import {NotADateError} from './utils'

function testMatcher(name, properties) {
  describe(`.${name}`, () => {
    properties.forEach(property => property(name))
  })
}

const property = {
  passes: (description, {received, expected}) => matcherName => {
    test(`passes ${description}`, () => {
      expect(received)[matcherName](expected)
    })

    test(`fails ${description} and assertion is inverted`, () => {
      expect(() => {
        expect(received).not[matcherName](expected)
      }).toThrowError()
    })
  },
  fails: (description, {received, expected}) => matcherName => {
    test(`fails ${description}`, () => {
      expect(() => {
        expect(received)[matcherName](expected)
      }).toThrowError()
    })

    test(`passes ${description} and assertion is inverted`, () => {
      expect(received).not[matcherName](expected)
    })
  },
  expectedMustBeADate: ({receivedValue}) => matcherName => {
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
  },
  receivedMustBeADate: ({expectedValue}) => matcherName => {
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
  },
}

// eslint-disable-next-line jest/no-export
export {testMatcher, property}
