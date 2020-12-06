const numList = [1, 23, 4, 7, 21, 12, 32, 1, 2];
var maxFreq = 1;
var item;

function mostFrequent(list) {
  for (let i = 0; i < numList.length; i++) {
    let counter = 0;
    for (let j = 0; j < numList.length; j++) {
      if (numList[i] === numList[j]) {
        counter++;
      }
      if (counter > maxFreq) {
        maxFreq = counter;
        item = numList[i];
      }
    }
  }
  return `Number ${item} has Frequency of ${maxFreq}`;
}

function mostFrequentv2(list) {
  const counts = {};
  let maxFreq = 0;
  let maxKey;

  for (let i = 0; i < list.length; i++) {
    const key = list[i];
    const count = (counts[key] = (counts[key] || 0) + 1);
    if (count > maxFreq) {
      maxFreq = count;
      maxKey = key;
    }
  }
  console.log(counts);

  return `Number ${maxKey} has Frequency of ${maxFreq}`;
}

console.log(mostFrequent(numList));
console.log(mostFrequentv2(numList));
