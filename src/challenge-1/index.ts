export const stringPeeler = (s: string): string | null =>
  s.length < 2 ? null : s.substring(1, s.length - 1)
