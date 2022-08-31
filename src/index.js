const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

// repaint 역할을 하는 함수
const updateText = (count) => {
  number.innerText = count;
};

const handleAdd = () => {
  count += 1;
  updateText(count); // 리페인트 함수 호출
};

const handleMinus = () => {
  count -= 1;
  updateText(count); // 리페인트 함수 호출
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
