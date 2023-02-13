const firstBoxEl = document.querySelector(".box1");
const secondBoxEl = document.querySelector(".box2");
const inputEl = document.querySelector("input");

firstBoxEl.innerHTML = "<a href='http://naver.com'>네이버로 이동";
secondBoxEl.innerText = "박스 내용 및 스타일 변경";
secondBoxEl.setAttribute("style", "background-color: orange");
inputEl.setAttribute("placeholder", "아이디를 입력하세요");
