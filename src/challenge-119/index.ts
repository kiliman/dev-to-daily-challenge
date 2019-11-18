export const add = (a: string, b: string): string => {
  const re = /^\d+$/
  if (!re.test(a) || !re.test(b)) {
    throw new Error(`{a} and {b} must be positive integers`)
  }

  const result = []
  a = a
    .split('')
    .reverse()
    .join('')
  b = b
    .split('')
    .reverse()
    .join('')
  let carry = 0
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const a_ = a.length > i ? parseInt(a[i]) : 0
    const b_ = b.length > i ? parseInt(b[i]) : 0
    let sum = a_ + b_ + carry
    carry = Math.floor(sum / 10)
    if (carry !== 0) {
      sum = sum % 10
    }
    result.push(String(sum))
  }
  if (carry > 0) {
    result.push(carry)
  }
  return result.reverse().join('')
}
