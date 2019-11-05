import { diamond } from './challenge-2'

describe('#2 diamond', () => {
  it('should return null if width is even or negative', () => {
    expect(diamond(2)).toBe(null)
    expect(diamond(-1)).toBe(null)
  })

  it('should return a string as diamond shape with width', () => {
    console.log(diamond(9))
    expect(diamond(3)).toMatchSnapshot()
    expect(diamond(5)).toMatchSnapshot()
    expect(diamond(9)).toMatchSnapshot()
  })
})
