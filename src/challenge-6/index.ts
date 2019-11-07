export const computeTrip = (
  friends: string[],
  livesIn: { [friend: string]: string },
  map: { [town: string]: number },
): number => {
  const townCount = Object.values(map).length + 1

  const getTownForFriend = (friend: string): string => livesIn[friend]
  const distanceFromOrigin = (town: string): number => map[town]
  const getNextTown = (town: string): string =>
    `X${(Number(town[1]) + 1) % townCount}`

  const distanceToTown = (town: string): number => {
    const nextTown = getNextTown(town)
    const a = distanceFromOrigin(town)
    if (nextTown === 'X0') {
      return a
    }
    const c = distanceFromOrigin(nextTown)
    const b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2))
    return b
  }

  const totalDistance = friends.reduce((prev, friend) => {
    const town = getTownForFriend(friend)
    if (!town) return prev
    return prev + distanceToTown(town)
  }, 0)

  return Math.floor(totalDistance)
}
