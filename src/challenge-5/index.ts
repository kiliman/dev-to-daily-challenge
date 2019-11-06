export const generateWalk = (duration: number): string[] => {
  if (duration % 2 === 1) {
    throw new Error(`duration ${duration} must be even`)
  }
  const directions = ['n', 'e', 's', 'w']
  const steps = []

  for (let i = 0; i < duration / 2; i++) {
    // pick random direction
    const n = Math.floor(Math.random() * 4)
    const direction = directions[n % 4]
    // get opposite direction (so we can return to origin)
    const opposite = directions[(n + 2) % 4]
    steps.push(direction)
    steps.push(opposite)
  }

  const shuffle = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

  shuffle(steps)
  return steps
}
export const validateSteps = (steps: string[]): boolean => {
  const start = { x: 0, y: 0 }
  const pos = steps.reduce((prev, direction) => {
    switch (direction) {
      case 'n':
        return { ...prev, y: prev.y + 1 }
      case 's':
        return { ...prev, y: prev.y - 1 }
      case 'e':
        return { ...prev, x: prev.x + 1 }
      case 'w':
        return { ...prev, x: prev.x - 1 }
      default:
        throw new Error(`invalid direction ${direction}`)
    }
  }, start)

  return pos.x === start.x && pos.y === start.y
}
