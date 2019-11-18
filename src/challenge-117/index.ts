export const minMinMax = (
  set: number[],
): [number, number | undefined, number] => {
  if (set.length < 1) {
    throw new Error('set must include at least one number')
  }
  const sorted = set.sort((a, b) => a - b)
  const smallest = sorted[0]
  const largest = sorted[set.length - 1]
  let minimumAbsent = smallest + 1
  for (let i = 1; i < sorted.length; i++) {
    if (minimumAbsent != sorted[i]) break
    minimumAbsent++
  }

  return [
    smallest,
    minimumAbsent > largest ? undefined : minimumAbsent,
    largest,
  ]
}
