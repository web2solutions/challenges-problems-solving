

function isBalanced(str) {
  const allBrackets = []
  const map = {
    '{': '}',
    '(': ')',
    '[': ']',
  }
  str = str.replace(new RegExp('[0-9]', 'g'), '')
  str = str.replace(new RegExp('[a-z A-Z]', 'g'), '')
  for (let x = 0; x < str.length; x++) {
    const char = str[x]
    if (char === '[' || char === '(' || char === '{') {
      allBrackets.push(char)
    } else {
      const lastItem = allBrackets.pop()
      if (char !== map[lastItem]) {
        console.log(map[lastItem])
        return 'NO'
      }
    }
  }
  
  if (allBrackets.length !== 0) {
   return 'NO'
  }

  return 'YES'
}


console.log(isBalanced('f(e(d))'))


/**
 * 
 {
 '(a[0]+b[2c[6]]) {24 + 53}' : true,
 'f(e(d))' : true,
 '[()]{}([])' : true,
 '((b)' : false,
 '(c]' : false,
 '{(a[])' : false,
 '([)]' : false,
 ')(' : false,
 '' : false
}
 */
