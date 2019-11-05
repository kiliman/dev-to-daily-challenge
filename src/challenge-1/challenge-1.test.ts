import { stringPeeler } from './challenge-1'
describe('#1 stringPeeler', () => {
  it('should return a string with first and last characters removed', () => {
    const text = 'hello world'
    expect(stringPeeler(text)).toBe('ello worl')
  })
  it('should throw error if string is less than 2 characters', () => {
    expect(() => stringPeeler('')).toThrow()
  })
})
