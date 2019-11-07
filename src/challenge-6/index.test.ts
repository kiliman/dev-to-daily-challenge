import { computeTrip } from '.'

describe('#6 compute trip', () => {
  it('should return distance traveled', () => {
    const friends = ['A1', 'A2', 'A3', 'A4', 'A5']
    const livesIn = { A1: 'X1', A2: 'X2', A3: 'X3', A4: 'X4' }
    const map = { X1: 100.0, X2: 200.0, X3: 250.0, X4: 300.0 }

    expect(computeTrip(friends, livesIn, map)).toBe(789)
  })
})
