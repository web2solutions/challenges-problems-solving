"use strict";
for (let i = 0; i < 3; i++) {
  let log = function () {
    console.log(i)
  }
  setTimeout(log, 100)
}

var func;

function func() {
  
}

console.log(func)
