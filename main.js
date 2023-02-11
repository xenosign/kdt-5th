// for (let i = 1; i < 10; i += 1) {
//   for (let j = 1; j < 10; j += 1) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

// let i = 1;
// let j = 1;

// while (i < 10) {
//   while (j < 10) {
//     console.log(`${i} x ${j} = ${i * j}`);
//     j += 1;
//   }
//   j = 1;
//   i += 1;
// }

// say();

// const say = function () {
//   console.log("say");
// };

// console.log(Math.pow(3));

// // .split: 문자를 인수 기준으로 쪼개서 배열로 반환
// let helloTest = "H-e-l-l-o";
// let helloTestArr = helloTest.split("-");
// console.log(helloTestArr);

// // .reverse: 배열의 순서를 뒤집어서 반환
// // .join: 배열을 인수 기준으로 문자로 병합해서 반환
// let hello = "Hello~";
// helloArr = hello.split("");
// console.log(helloArr);

// let reverseHello = helloArr.reverse();
// console.log(reverseHello);

// let helloJoin = reverseHello.join("");
// console.log(helloJoin);

// console.log(hello.split("").reverse().join(""));

const kdtCurriculum = ["HTML", "CSS", "JS", "BACKEND", "REAC"];
const result1 = kdtCurriculum.shift().split("").reverse().join("");
const result2 = kdtCurriculum.pop().split("").reverse().join("");
console.log(result1);
console.log(result2);
