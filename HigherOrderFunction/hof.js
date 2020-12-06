/*
    Write a generator using a higher order function (function takes a function as a argument / return function as a value)
*/

function foo(x) {
  return function bar(y) {
    return x + y;
  };
}

var bar1 = foo(5);
var bar2 = foo(10);

// console.log(bar1(2));

/*
    Write a generator using a higher order function that will generate integers
    starting at a 'start' and going up to a 'end' value. Once the 'end' value has been generated,
    the generator will return undefined
*/

function from(start) {
  let i = start;
  return function () {
    return i++;
  };
}

function to(start, end) {
  let i = start;
  return function () {
    if (i > end) return undefined;
    return i++;
  };
}

function range(start, end) {
  const gfrom = from(start);
  const gto = to(start, end);
  return function () {
    let from = gfrom();
    let to = gto();
    return to > end ? undefined : to;
  };
}

// var g = range(0, 5);
// console.log(g());

var foo = to(0, 10);
for (let i = 0; i < 10; i++) {
  console.log(foo());
}
