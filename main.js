// ------- FIRST -------

  function printWindowValues() {
    console.log(window);
  }

  printWindowValues()
// console.log(window);


// ------- SECOND -------

function expTen(number) {
  let result = number;
  for (let i = 0; i < 9; i++) {
    result *= number;
  }
  return result;
}
console.log(expTen(12));


// ------- THIRD -------

function getFuncRes(func, string) {
  return func(string);
}
getFuncRes(console.log, "Hello World!")
