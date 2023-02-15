// 1단계
const numbers = [1, 2, 3, 4, 5, 6];
let sum = 0;
numbers.map(function (item) {
  sum += item;
});
console.log(sum);

const string = {
  1: 1,
  2: 2,
};

for (let i = 0; i < string.length; i++) {
  console.log(string[i]);
}

for (letter in string) {
  console.log(string[letter]);
}

let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

let x = fruits1.filter((item) => !fruits2.includes(item));
let y = fruits1.filter((item) => fruits2.includes(item));

console.log(x, y);

const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, item, index) => {
  return (acc += item);
}, 0);
console.log(result); // 15

// const arr2 = [1, 2, 3, 4, 5];
// const result2 = arr2.reduce((acc, item, idx) => {
//   return (acc += item);
// }, 10);
// console.log(result2); // 25

// const numbers = [2, -5, -123, 59, -5480, 24, 0, -69, 349, 3];
// const result = numbers.reduce(
//   (acc, cur, idx) => {
//     if (cur < 0) {
//       // 처리할 현재 요소가 음수일 경우
//       acc[0]++;
//     } else if (cur > 0) {
//       // 처리할 현재 요소가 양수일 경우
//       acc[1]++;
//     }
//     return acc;
//   },
//   [0, 0]
// );
// console.log(result); // [4, 5]

const phone_number = "010444444444";

function solution(phone_number) {
  console.log(phone_number.length);
  const arr = [...phone_number].map((item, index) => {
    if (index < phone_number.length - 4) return "*";
    return item;
  });
  return arr.join("");
}

console.log(solution(phone_number));

const user = {
  id: 1,
  name: "tetz",
  email: "xenosign@naver.com",
};
// const { id, name, email, address } = user;
// 기본값 설정 const { id, name, email, address = "KOREA"} = user;
const { id, name: tetz, email, address = "KOREA" } = user;
console.log(id);
console.log(name);
console.log(tetz);
console.log(email);
console.log(address);
// const fruits = ["사과", "딸기", "망고", "수박"];
// const [a, b, c, d] = fruits;
// console.log(a, b, c, d);

// let str = "apple";
// let strToArr2 = str.split("");
// let strToArr = [...string];
// console.log(strToArr2);

const fruits = ["사과", "바나나", "수박", "망고", "딸기"];
function conLog(...rest) {
  console.log(rest);
}
conLog(...fruits);
