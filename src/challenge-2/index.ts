export const diamond = (width: number): string | null => {
  if (width % 2 === 0 || width < 0) {
    return null
  }

  let s = ''
  // build top half
  for (let n = 1; n <= width; n += 2) {
    const spaces = (width - n) / 2
    s += ' '.repeat(spaces) + '*'.repeat(n) + ' '.repeat(spaces) + '\n'
  }
  // build bottom half
  for (let n = width - 2; n >= 1; n -= 2) {
    const spaces = (width - n) / 2
    s += ' '.repeat(spaces) + '*'.repeat(n) + ' '.repeat(spaces) + '\n'
  }

  return s
}
