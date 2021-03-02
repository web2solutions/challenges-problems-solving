
function maxCost (cost, labels, dailyCount) {
  const dailyGoalBuild = 3
  const dayLegalCount = 2
  let daysTobuild = Math.round(cost.length / dailyGoalBuild)
  let needToProduce = cost.length
  let totalProduced = 0
  let allc = []
  for (let x = 1; x <= daysTobuild; x++) {
    let dayTotalCost = 0
    let dayTotalLegal = 0
    let isLegalDayAchivied = false
    let buildtoday = 0
    let startW = 0
    if (needToProduce > dailyGoalBuild) {
      buildtoday = dailyGoalBuild
    } else {
      startW = totalProduced
    }
    console.log('buildtoday', buildtoday)
    for (let y = startW; y < buildtoday; y++) {
      const amount = cost[y]
      dayTotalCost = dayTotalCost + amount
      totalProduced = totalProduced + 1
      const status = labels[y]
      if (status === 'legal') {
        dayTotalLegal = dayTotalLegal + 1
        if (dayTotalLegal === dayLegalCount) {
          isLegalDayAchivied = true
        }
      }
    }
    console.log('day', x)

    if (dayTotalLegal) {
      allc.push(dayTotalCost)
    }
    console.log('dayTotalCost', dayTotalCost)
    console.log('dayTotalLegal', dayTotalLegal)
    console.log('isLegalDayAchivied', isLegalDayAchivied)
  }
  // Write your code here
  // dailyGoalBuild 3
  // dayLegalCount 2
  // cost [2, 5, 3, 11, 1]
  // labels ["legal", "illegal", "legal", "illegal", "legal"]
  // dailyCount 2
  return Math.max(...allc)
}
console.log(
  maxCost(
    [2, 5, 3, 11, 1],
    ['legal', 'illegal', 'legal', 'illegal', 'legal'],
    2
  )
)
