import { minMinMax } from '.'

it('should return smallest, minimumAbsent, largest from array of numbers', () => {
  expect(minMinMax([-1, 4, 5, -23, 24])).toStrictEqual([-23, -22, 24])
  expect(minMinMax([1, 3, -3, -2, 8, -1])).toStrictEqual([-3, 0, 8])
  expect(minMinMax([2, -4, 8, -5, 9, 7])).toStrictEqual([-5, -3, 9])
})
