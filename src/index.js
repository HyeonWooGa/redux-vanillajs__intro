import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

// 리듀서 : 함수 상태의 Modifier == Setter, set 함수
// state = 0 : 인자 state 값이 undefined 이면 0 할당, 초기화
const countModifier = (count = 0, action) => {
  //console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  }
  return count;
};

const countStore = createStore(countModifier);

countStore.subscribe(() => (number.innerText = countStore.getState()));

add.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));
