type CheckbookEntry = {
  check: string
  category: string
  amount: number
  balance: number
}

const toCents = (s: string): number => Number(s) * 100
const formatMoney = (amount: number): string => (amount / 100).toFixed(2)

export const checkbookBalance = (input: string): string => {
  const lines = input.split('\n')
  if (!/^\d+\.\d\d?$/.test(lines[0])) {
    throw new Error(`Invalid opening balanace ${lines[0]}`)
  }
  const originalBalance = toCents(lines[0])

  const regex = /^(?<check>\d+)\s+(?<category>\w+)\W+(?<amount>\d+\.\d\d?)/i
  let currentBalance = originalBalance
  const entries = lines.splice(1).map(line => {
    const match = line.match(regex)
    if (match) {
      const { groups } = match
      if (groups) {
        const amount = toCents(groups['amount'])
        currentBalance -= amount
        //console.log(currentBalance)
        return {
          check: groups['check'],
          category: groups['category'],
          amount: amount,
          balance: currentBalance,
        }
      }
    }
    throw new Error(`Invalid format on line ${line}`)
  })
  const totalExpense = entries.reduce(
    (prev, entry) => (prev += entry.amount),
    0,
  )
  const averageExpense = Math.round(totalExpense / entries.length)
  const output = [
    `Original_Balance: ${formatMoney(originalBalance)}`,
    ...entries.map(
      ({ check, category, amount, balance }) =>
        `${check} ${category} ${formatMoney(amount)} Balance ${formatMoney(
          balance,
        )}`,
    ),
    `Total expense ${formatMoney(totalExpense)}`,
    `Average expense ${formatMoney(averageExpense)}`,
  ]

  return output.join('\n')
}
