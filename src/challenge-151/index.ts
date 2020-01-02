export const reverseInParens = (s: string) => {
  let result = ''
  let parenCount = 0
  let startParen = -1
  let endParen = -1
  console.log(`reverseInParens('${s}')`)
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]

    if (ch === '(') {
      if (parenCount === 0) {
        startParen = i
      }
      parenCount++
    } else if (ch === ')') {
      parenCount--
      if (parenCount === 0) {
        endParen = i

        const parenText = s.substring(startParen + 1, endParen)
        const reverseText = reverse(parenText)
        result += `(${reverseInParens(reverseText)})`
      }
    } else {
      if (parenCount === 0) {
        result += ch
      }
    }
  }
  console.log(result)
  return result
}

const reverse = (s: string) =>
  s
    .split('')
    .reverse()
    // need to flip the parens when reversing string
    .map(ch => (ch === '(' ? ')' : ch === ')' ? '(' : ch))
    .join('')
