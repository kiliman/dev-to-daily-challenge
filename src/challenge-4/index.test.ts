import { checkbookBalance } from './'

describe('#4 checkbook balance', () => {
  it('should throw exception on invalid balance', () => {
    const input = `
10xxx00.00
125 Market 125.45
`.trim()

    expect(() => checkbookBalance(input)).toThrow()
  })

  it('should throw exception on invalid entry', () => {
    const input = `
1000.00
bad125 Market 12bad5.45
`.trim()

    expect(() => checkbookBalance(input)).toThrow()
  })

  it('should read checkbook and display balance', () => {
    const input = `
1000.00
125 Market 125.45
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10
`.trim()

    expect(checkbookBalance(input)).toMatchSnapshot()
  })

  it('should read checkbook and display balance with extra characters', () => {
    const input = `
1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tires;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;
`.trim()

    expect(checkbookBalance(input)).toMatchSnapshot()
  })
})
