/* eslint-disable max-lines-per-function */
describe('.toBeAfter', () => {
  test('handles date input', () => {
    expect(new Date('2020')).toBeAfter(new Date('1970'))
    expect(new Date('1970')).not.toBeAfter(new Date('2020'))
  })

  test('throws when received is not a valid date', () => {
    expect(() => {
      expect(new Date('bla')).toBeAfter(new Date('1970'))
    }).toThrowError()

    expect(() => {
      expect(new Date('bla')).not.toBeAfter(new Date('1970'))
    }).toThrowError()
  })

  test('throws when received is not a date', () => {
    expect(() => {
      expect('2020').toBeAfter(new Date('1970'))
    }).toThrowError()

    expect(() => {
      expect('1970').not.toBeAfter(new Date('2020'))
    }).toThrowError()
  })

  test('throws when expected is not a valid date', () => {
    expect(() => {
      expect(new Date('2020')).toBeAfter(new Date('bla'))
    }).toThrowError()

    expect(() => {
      expect(new Date('2020')).not.toBeAfter(new Date('bla'))
    }).toThrowError()
  })

  test('throws when expected is not a date', () => {
    expect(() => {
      expect(new Date('2020')).toBeAfter('1970')
    }).toThrowError()

    expect(() => {
      expect(new Date('1970')).not.toBeAfter('2020')
    }).toThrowError()
  })
})
