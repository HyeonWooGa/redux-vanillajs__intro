import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// 리듀서 : 함수 상태의 Modifier == Setter, set 함수
// state = 0 : 인자 state 값이 undefined 이면 0 할당, 초기화
const countModifier = (count = 0) => {
  return count;
};

const countStore = createStore(countModifier);
console.log(countStore.getState());
