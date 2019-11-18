import { code, decode } from '.'

describe('encode data', () => {
  it('should return encoded data', () => {
    expect(code('mer', 6015)).toBe('6015ekx')
    expect(code('hello', 9317)).toBe('9317lkvvw')
    expect(code('goodbye', 1234603)).toBe('1234603kggftoy')
  })
})

describe('decode data', () => {
  it('should return decoded data', () => {
    expect(decode('6015ekx')).toBe('mer')
    expect(decode('9317lkvvw')).toBe('hello')
    expect(decode('1234603kggftoy')).toBe('goodbye')
  })

  it('should return "Impossible to decode" if unable to decode', () => {
    expect(decode('5057aan')).toBe('Impossible to decode')
    expect(decode('xxx5057aan')).toBe('Impossible to decode')
  })
})
