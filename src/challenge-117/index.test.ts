import { minMinMax } from '.'

it('should throw an error if less than one element', () => {
  expect(() => minMinMax([])).toThrow()
})

it('should return smallest, minimumAbsent, largest from array of numbers', () => {
  expect(minMinMax([-1, 4, 5, -23, 24])).toStrictEqual([-23, -22, 24])
  expect(minMinMax([1, 3, -3, -2, 8, -1])).toStrictEqual([-3, 0, 8])
  expect(minMinMax([2, -4, 8, -5, 9, 7])).toStrictEqual([-5, -3, 9])
})

it('should return undefined for minimumAbsent if not present between smallest and largest', () => {
  expect(minMinMax([-3, -2, -1, 0, 1, 2, 3])).toStrictEqual([-3, undefined, 3])
})

it('should support a single number', () => {
  expect(minMinMax([1])).toStrictEqual([1, undefined, 1])
})

it('should support two numbers', () => {
  expect(minMinMax([1, 2])).toStrictEqual([1, undefined, 2])
  expect(minMinMax([1, 3])).toStrictEqual([1, 2, 3])
})
