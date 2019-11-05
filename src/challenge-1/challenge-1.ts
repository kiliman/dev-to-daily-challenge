export const stringPeeler = (s: string): string => {
  if (s.length < 2) {
    throw new Error(`string ${s} must be at least 2 characters in length`)
  }
  return s.substring(1, s.length - 1)
}
