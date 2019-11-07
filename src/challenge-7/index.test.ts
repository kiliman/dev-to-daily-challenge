import { decomp } from '.'

describe('#7 decomp', () => {
  it('should return decomposition of n!', () => {
    expect(decomp(25)).toBe(
      '2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23',
    )
  })
})
