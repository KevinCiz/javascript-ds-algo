const items = [
  { id: "a", val: 10, w: 3 },
  { id: "b", val: 6, w: 8 },
  { id: "c", val: 3, w: 3 },
];

const maxWeight = 8;

function solution(items, maxWeight) {
  let tmpVal = 0;
  let tmpWeight = 0;
  let result = [];
  for (let item of items) {
    console.log(item);
  }
  //   for (let i = 0; i < items.length; i++) {
  //     // Check if list weight + tmpWeight exceed maxWeight
  //     if ((items[i].w + tmpWeight) > maxWeight){
  //         continue
  //     }
  //     tmpWeight = items[i].w + tmpWeight
  //     result.append(items[i].id)
  //   }
}

console.log(solution(items, maxWeight));
