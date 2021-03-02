const myURL = new URL('https://example.org/abc/xyz?123:8888');
console.log(myURL.pathname);
console.log(myURL.href);
myURL.port = 1234
console.log(myURL.port);

myURL.port = '22'
console.log(myURL.port);

myURL.port = 'abc'
console.log(myURL.port);


console.log(Date.now())
for (let i = 0; i < 1000000; i += 1){ 

 }
console.log(Date.now())