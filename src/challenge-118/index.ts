export const code = (s: string, num: number): string => {
  const map = (c: string) => c.charCodeAt(0) - 97
  const unmap = (x: number) => String.fromCharCode(x + 97)
  const f = (x: number) => (num * x) % 26

  let r = ''
  for (let i = 0; i < s.length; i++) {
    const x = map(s[i])
    const ch = unmap(f(x))
    r += ch
  }
  return String(num) + r
}

// calculate modular inverse
// https://rosettacode.org/wiki/Modular_inverse#JavaScript
const modInverse = (a: number, b: number): number => {
  a %= b
  for (let x = 1; x < b; x++) {
    if ((a * x) % b === 1) {
      return x
    }
  }
  return 1
}

export const decode = (r: string): string => {
  const match = r.match(/^\d+/)
  let num = -1
  if (match) {
    num = parseInt(match[0])
    r = r.substring(match[0].length)
  }
  const a_ = modInverse(num, 26)
  if (num === -1 || a_ === 1) {
    return 'Impossible to decode'
  }

  const map = (c: string) => c.charCodeAt(0) - 97
  const unmap = (x: number) => String.fromCharCode(x + 97)
  const f = (x: number) => (a_ * x) % 26

  let s = ''
  for (let i = 0; i < r.length; i++) {
    const x = map(r[i])
    const ch = unmap(f(x))
    s += ch
  }

  return s
}
