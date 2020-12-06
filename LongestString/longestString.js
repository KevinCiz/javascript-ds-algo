/* 
    Write a pure function that accepts a list of strings, 
    return the longest string. Use no loops
*/

function longest(list) {
  const lengths = list.map((str, index) => ({
    index,
    length: str.length,
  }));

  console.log("lengths", lengths);

  var i = lengths.reduce(function (acc, obj) {
    return obj.length > acc ? obj.length : acc;
  }, 0);

  let obj = lengths.find((o) => o.length === i);
  let idx = lengths.indexOf(obj);

  return list[idx];
  //   var i = lengths.reduce((acc, obj) => (obj.length > acc ? obj.index : acc), -1);
  //   return list[i];
}

console.log(longest(["12345", "123", "1234"]));

/* 
    Write a pure function that accepts a list of strings, 
    return the longest string. Use no loops
*/

function longestwLoop(list) {
  let currentLongest = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].length > currentLongest.length) {
      currentLongest = list[i];
    }
  }
  return currentLongest;
}

console.log(longestwLoop(["Hello", "Kevin", "Pro"]));
