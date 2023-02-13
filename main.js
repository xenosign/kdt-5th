// // for (let i = 1; i < 10; i += 1) {
// //   for (let j = 1; j < 10; j += 1) {
// //     console.log(`${i} x ${j} = ${i * j}`);
// //   }
// // }

// // let i = 1;
// // let j = 1;

// // while (i < 10) {
// //   while (j < 10) {
// //     console.log(`${i} x ${j} = ${i * j}`);
// //     j += 1;
// //   }
// //   j = 1;
// //   i += 1;
// // }

// // say();

// // const say = function () {
// //   console.log("say");
// // };

// // console.log(Math.pow(3));

// // // .split: 문자를 인수 기준으로 쪼개서 배열로 반환
// // let helloTest = "H-e-l-l-o";
// // let helloTestArr = helloTest.split("-");
// // console.log(helloTestArr);

// // // .reverse: 배열의 순서를 뒤집어서 반환
// // // .join: 배열을 인수 기준으로 문자로 병합해서 반환
// // let hello = "Hello~";
// // helloArr = hello.split("");
// // console.log(helloArr);

// // let reverseHello = helloArr.reverse();
// // console.log(reverseHello);

// // let helloJoin = reverseHello.join("");
// // console.log(helloJoin);

// // console.log(hello.split("").reverse().join(""));

// const kdtCurriculum = ["HTML", "CSS", "JS", "BACKEND", "REAC"];
// const result1 = kdtCurriculum.shift().split("").reverse().join("");
// const result2 = kdtCurriculum.pop().split("").reverse().join("");
// console.log(result1);
// console.log(result2);

// // const fs = require('fs');
// // const input = fs.readFileSync('/dev/stdin').toString().split(' ');

// // const A = parseInt(input[0], 10);
// // const B = parseInt(input[1], 10);

// const A = 1;
// const B = 2;

// console.log(A + B);

// const user = {
//   name: "Mike",
//   sayH: function () {
//     console.log(`H, ${this.name}`);
//   },
// };

// user.sayH();

// const tetz = {
//   name: "이효석",
//   email: "xenosign@naver.com",
// };

// const tetzCopy = tetz;
// tetzCopy.name = "tetz"
// ;
// console.log(tetzCopy);
// console.log(tetz);
// console.log(tetz === tetzCopy); // TRUE

// class Car {
//   // 생성자 전달
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   } // 메소드 선언
//   drive() {
//     console.log(
//       `이 차의 브랜드는 ${this.brand}이고 색상은 ${this.color} 입니다.`
//     );
//   }
// }
// // 상속 선언
// class ElecCar extends Car {
//   constructor(brand, color, fuel) {
//     super(brand, color);
//     this.fuel = fuel;
//   }
//   drive() {
//     console.log(
//       `이 차의 브랜드는 ${this.brand}이고 색상은 ${this.color} 이며, ${this.fuel}의 힘으로 움직입니다!`
//     );
//   }
// }

// class HydroCar extends Car {
//   constructor(brand, color, fuel) {
//     super(brand, color);
//     this.fuel = fuel;
//   }
//   showSpec() {
//     super.showSpec();
//     console.log(`그리고 이 차는 ${this.fuel}의 힘으로 움직입니다!`);
//   }
// }
// const hyundai = new Car("hyundai", "white");
// const tesla = new ElecCar("tesla", "red", "electricity");
// const nexxo = new HydroCar("nexxo", "skyblue", "hydrogen");
// console.log(tesla instanceof ElecCar);
// console.log(nexxo instanceof ElecCar);
// console.log(nexxo instanceof Car);
// console.log(nexxo instanceof Object);

let box1El = document.querySelector(".box1");
let box2El = document.querySelector(".box2");

box1El.innerHTML = "<button>test</button>";
box2El.innerText = "<button>test</button>";
