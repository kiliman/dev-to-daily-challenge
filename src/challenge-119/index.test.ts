import { add } from '.'

it('should throw an error if numbers are not all digits', () => {
  expect(() => add('', '')).toThrow()
  expect(() => add('abc', '321')).toThrow()
  expect(() => add('11', 'xyz')).toThrow()
})

it('should return sum of two numbers', () => {
  expect(add('0', '0')).toBe('0')
  expect(add('123', '321')).toBe('444')
  expect(add('11', '99')).toBe('110')
  expect(add('1', '199')).toBe('200')
})

it('should return sum of two really big numbers', () => {
  expect(add('123456789', '987654321')).toBe('1111111110')
  expect(add('12345678910123456789', '987654323109876543210')).toBe(
    '1000000002019999999999',
  )
})
