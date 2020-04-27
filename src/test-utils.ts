import {NotADateError} from './utils'

type Property = (name: string) => void

function testMatcher(name: string, properties: Property[]) {
  describe(`.${name}`, () => {
    properties.forEach(property => property(name))
  })
}

const property = {
  passes: (
    description: string,
    {received, expected}: {received: Date; expected?: Date},
  ): Property => matcherName => {
    test(`passes ${description}`, () => {
      ;(expect(received) as any)[matcherName](expected)
    })

    test(`fails ${description} and assertion is inverted`, () => {
      expect(() => {
        ;(expect(received) as any).not[matcherName](expected)
      }).toThrowError()
    })
  },
  fails: (
    description: string,
    {received, expected}: {received: Date; expected?: Date},
  ): Property => matcherName => {
    test(`fails ${description}`, () => {
      expect(() => {
        ;(expect(received) as any)[matcherName](expected)
      }).toThrowError()
    })

    test(`passes ${description} and assertion is inverted`, () => {
      ;(expect(received) as any).not[matcherName](expected)
    })
  },
  expectedMustBeADate: ({
    received,
  }: {
    received?: Date
  } = {}): Property => matcherName => {
    test('throws when expected is not a valid date', () => {
      expect(() => {
        ;(expect(received) as any)[matcherName](new Date('bla'))
      }).toThrowError(NotADateError)

      expect(() => {
        ;(expect(received) as any).not[matcherName](new Date('bla'))
      }).toThrowError(NotADateError)
    })

    test('throws when expected is not a date', () => {
      expect(() => {
        ;(expect(received) as any)[matcherName]('2020')
      }).toThrowError(NotADateError)

      expect(() => {
        ;(expect(received) as any).not[matcherName]('1970')
      }).toThrowError(NotADateError)
    })
  },
  receivedMustBeADate: ({
    expected,
  }: {
    expected?: Date
  } = {}): Property => matcherName => {
    test('throws when received is not a valid date', () => {
      expect(() => {
        ;(expect(new Date('bla')) as any)[matcherName](expected)
      }).toThrowError(NotADateError)

      expect(() => {
        ;(expect(new Date('bla')) as any).not[matcherName](expected)
      }).toThrowError(NotADateError)
    })

    test('throws when received is not a date', () => {
      expect(() => {
        ;(expect('1970') as any)[matcherName](expected)
      }).toThrowError(NotADateError)

      expect(() => {
        ;(expect('2020') as any).not[matcherName](expected)
      }).toThrowError(NotADateError)
    })
  },
}

// eslint-disable-next-line jest/no-export
export {testMatcher, property}
