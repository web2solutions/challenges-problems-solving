var counter = 0;
try {
  function foo() {
    var local = 'ahgjhgjhgjjhgjjhghjhgjhgjhgjhhjgjhgjhjghj';
    counter += 1;
    foo();
  }
  foo();
} catch(e) {
  console.error(e);
  console.log('counter =', counter);
}
