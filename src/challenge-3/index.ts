export const countVowels = (s: string): number => {
  const re = /[aeiou]/gi
  let count = 0
  while (re.exec(s)) {
    count++
  }
  return count
}
