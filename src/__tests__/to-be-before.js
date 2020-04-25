/* eslint-disable max-lines-per-function */
describe('.toBeBefore', () => {
  test('handles date input', () => {
    expect(new Date('1970')).toBeBefore(new Date('2020'))
    expect(new Date('2020')).not.toBeBefore(new Date('1970'))
  })

  test('throws when received is not a valid date', () => {
    expect(() => {
      expect(new Date('bla')).toBeBefore(new Date('2020'))
    }).toThrowError()

    expect(() => {
      expect(new Date('bla')).not.toBeBefore(new Date('2020'))
    }).toThrowError()
  })

  test('throws when received is not a date', () => {
    expect(() => {
      expect('1970').toBeBefore(new Date('2020'))
    }).toThrowError()

    expect(() => {
      expect('2020').not.toBeBefore(new Date('1970'))
    }).toThrowError()
  })

  test('throws when expected is not a valid date', () => {
    expect(() => {
      expect(new Date('1970')).toBeBefore(new Date('bla'))
    }).toThrowError()

    expect(() => {
      expect(new Date('1970')).not.toBeBefore(new Date('bla'))
    }).toThrowError()
  })

  test('throws when expected is not a date', () => {
    expect(() => {
      expect(new Date('1970')).toBeBefore('2020')
    }).toThrowError()

    expect(() => {
      expect(new Date('2020')).not.toBeBefore('1970')
    }).toThrowError()
  })
})
