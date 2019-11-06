import { stringPeeler } from '.'
describe('#1 stringPeeler', () => {
  it('should return a string with first and last characters removed', () => {
    const text = 'hello world'
    expect(stringPeeler(text)).toBe('ello worl')
  })

  it('should return null if string is less than 2 characters', () => {
    expect(stringPeeler('')).toBe(null)
    expect(stringPeeler('a')).toBe(null)
  })
})
