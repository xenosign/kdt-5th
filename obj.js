const tetz = {
  name: "이효석",
  isOld: true,
  hobby: ["음주", "콜라", "플스", "자전거"],
};
const jsonObj = JSON.stringify(tetz);
window.localStorage.setItem("tetz", jsonObj);
const obj = JSON.parse(window.localStorage.getItem("tetz"));
console.log(obj);
