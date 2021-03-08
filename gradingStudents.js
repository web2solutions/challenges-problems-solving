'use strict'
// https://www.hackerrank.com/challenges/grading/problem?h_r=profile

function gradingStudents(grades) {
  const maxDiffer = 3
  const final = []
  for (let x = 0; x < grades.length; x++) {
    let grade = grades[x]
    if (grade >= 38) {
      let next5Multiple = Math.ceil(grades[x] / 5) * 5
      const differ = (next5Multiple - grades[x])
      if (differ < maxDiffer) {
        final.push(grade + differ)
      }
      else {
        final.push(grade)
      }
    } else {
      // failing   
      final.push(grade)
    }
  }
  return final
}
console.log(gradingStudents([73, 67, 38, 33]))
