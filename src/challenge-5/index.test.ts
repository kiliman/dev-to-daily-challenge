import { generateWalk, validateSteps } from '.'

describe('#5 generate walk', () => {
  it('should throw an error if duration is odd', () => {
    expect(() => generateWalk(1)).toThrow()
  })

  it('should return you to your current location', () => {
    const steps = ['n', 's', 'e', 'w']
    expect(validateSteps(steps)).toBe(true)
  })

  it('should return you to your current location for a long walk', () => {
    const steps = generateWalk(20)
    console.log(steps)
    expect(validateSteps(steps)).toBe(true)
  })
})
