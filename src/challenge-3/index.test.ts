import { countVowels } from '.'

describe('#3 countVowels', () => {
  it('should return the number of vowels in string', () => {
    expect(countVowels('')).toBe(0)
    expect(countVowels('xyz')).toBe(0)
    expect(countVowels('abc')).toBe(1)
    expect(countVowels('abcdefghijklmnopqrstuvwxyz')).toBe(5)
    expect(countVowels('aaabbbcccdddeee')).toBe(6)
    expect(countVowels('aAabbbcccdddEee\n123iIiO oo Ux')).toBe(13)
  })
})
