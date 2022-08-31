import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

// 리듀서 : 함수 상태의 Modifier == Setter, set 함수
// count = 0 : State count 값이 undefined 이면 0 할당, 초기화
// 반환값이 State 의 값이 됩니다.
const countModifier = (count = 0, action) => {
  //console.log(count, action);
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

// Store 생성, 리듀서 함수 인자로 전달
const countStore = createStore(countModifier);

// State 변화를 감지하여 콜백함수 호출
countStore.subscribe(() => (number.innerText = countStore.getState()));

// Dispatch 메서드 사용하여 action type 리듀서로 전달
add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
