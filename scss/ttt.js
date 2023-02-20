function sol(arr) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    // console.log(map);
    // console.log(map.get(arr[i]));
    if (map.get(arr[i]) === undefined) {
      // console.log(1);
      map.set(arr[i], i);
    } else {
      // console.log(2);
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }

  console.log(map);
}

const array = [1, 2, 3, 3, 3, 4];
// sol(arr);
let arr = new Map();

for (let i = 0; i < array.length; i++) {
  arr.set(array[i], (arr.get(array[i]) || 0) + 1);
}

console.log(arr);
