
function solution(S, K) {
  /* const map = new Map()
  map.set('Mon', 1)
  map.set('Tue', 2)
  map.set('Wed', 3)
  map.set('Thu', 4)
  map.set('Fri', 5)
  map.set('Sat', 6)
  map.set('Sun', 7)
  const mapi = new Map()
  map.set(1, 'Mon')
  map.set(2, 'Tue')
  map.set(3, 'Wed')
  map.set(4, 'Thu')
  map.set(5, 'Fri')
  map.set(6, 'Sat')
  map.set(7, 'Sun')
  const actualDay = map.get(S)
  console.log(actualDay)
  for (let x = 0; x < K; x++) {
    
  }*/
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const index = days.findIndex((day) => {
    return day == S
  })

  return days[(index + K) %7 ];
}


console.log(solution('Wed', 2))
