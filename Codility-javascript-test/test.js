

// Codility Javascript Certification
function solution() {
  const isPerson = document.getElementById('type_person').checked
  const isCompany = document.getElementById('type_company').checked

  const first_name = document.getElementById('first_name').value
  const last_name = document.getElementById('last_name').value
  const email = document.getElementById('email').value
  const company_name = document.getElementById('company_name').value
  const phone = document.getElementById('phone').value

  if (isPerson) {
    if (first_name === '' || last_name === '') {
      return false
    }
    if (email.length > 0) {
      const vemail = email.split('@')
      if (vemail.length !== 2) { // more than one @
        return false
      }

      if (vemail[0].length > 64) { // up to 64 chars
        return false
      }

      if (vemail[1].length > 64) { // up to 64 chars
        return false
      }

      if (vemail[1].indexOf('.') === -1) { // match a .
        return false
      }

      const isPart1Val = vemail[0].match(new RegExp(/^[0-9a-zA-Z.]+$/))
      const isPart2Val = vemail[1].match(new RegExp(/^[0-9a-zA-Z.]+$/))
      if (!isPart1Val) { // more than one @
        return false
      }
      if (!isPart2Val) { // more than one @
        return false
      }
    }
    else {
      return false
    }
  } else if (isCompany) {
    if (company_name === '') {
      return false
    }

    if (phone.length >= 6) {
      const isPhoneVal = phone.match(new RegExp(/^[0-9\- ]+$/))
      if (!isPhoneVal) {
        return false
      }
    }
    else {
      return false
    }
  }
  return true
}
