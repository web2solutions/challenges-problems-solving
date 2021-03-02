const myIsPal2 = function (str, modify = [null, null]) {
  let reverseStr = str.split('').reverse().join('')
  console.log('reverseStr', reverseStr)
  console.log(str, reverseStr)
  if (reverseStr === str) {
    return true
  } else {
    // try to modify
    const [what, value] = modify
    if ( (what !== null) && ( value !== null) )
    {
      console.log('----------1', [what, value])
      const reg = new RegExp(what, "g")
      const str2 = str.replace(reg, value)
      const reverseStr2 = str2.split('').reverse().join('')
      if (reverseStr2 === str2)
      {
        return true
      }
    }
  }
  return false
}
console.log(myIsPal2('abccbx', ['x', 'a']))