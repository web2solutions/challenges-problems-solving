/*
 TODO: describe the order of console's logs
*/
console.log("main thread: normal log");

for(let i = 0; i < 5; i++) {
  console.log('main thread: for 1 indice = ' + i);
}

let count = 0;
// run after setTimeOut
const int = setInterval(() => {
  if (count > 3) { 
    clearInterval(int);
  }
  console.log("macrotask queue: setInterval");
  count++;
}, 0);
 
setTimeout(() => {
   console.log("macrotask queue: setTimeout");
}, 0);

 
(new Promise(resolve => resolve())).then(() => {
 console.log("microtask queue: promise");
});

// last executed
setImmediate(() => {
 console.log("macrotask queue: setImmediate");
});
 
for(let i = 0; i < 5; i++) {
  console.log('main thread: for 2 indice = ' + i);
}

// runs before promise and 
process.nextTick(() => {
  console.log("microtask queue: 5 next tick");
});
 
console.log("main thread: normal log 6");

a();

(function () {
  console.log('main thread: immediate function')
})();

a();

function a() { 
  console.log('main thread: function a')
}

console.log("main thread: normal log 7");
