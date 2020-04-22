/* eslint-disable max-lines-per-function */
describe('.toBeBefore', () => {
  test('handles date input', () => {
    expect(new Date('2020-01-01')).toBeBefore(new Date('2021-01-01'))
    expect(new Date('2021-01-01')).not.toBeBefore(new Date('2020-01-01'))
  })

  test('throws when received is not a valid date', () => {
    expect(() => {
      expect(new Date('bla')).toBeBefore(new Date('2021-01-01'))
    }).toThrowError()
  })

  test('throws when received is not a date', () => {
    expect(() => {
      expect('2020-01-01').toBeBefore(new Date('2021-01-01'))
    }).toThrowError()
  })

  test('throws when expected is not a valid date', () => {
    // expect(() => {
    expect(new Date('2020-01-01')).toBeBefore(new Date('bla'))
    // }).toThrowError()
  })

  test('throws when expected is not a date', () => {
    expect(() => {
      expect(new Date('2020-01-01')).toBeBefore('2021-01-01')
    }).toThrowError()
  })
})
