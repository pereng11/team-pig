let diceNumber = 0;
let sum = 0;
let firstPlayer = 0;
let secondPlayer = 0;
let turnFlag = true;  // true : fisrtPlayuer, false : secondPlayer

let rollBtn = document.querySelector('.rollBtn');
let bankBtn = document.querySelector('.bankBtn');

rollBtn.addEventListener('click', ()=>{
  diceNumber = Math.floor(Math.random() * (6-1)+1);  // 1~6 랜덤 넘버
  if (diceNumber == 1) {
    sum = 0;
  } 
  sum += diceNumber;
})

bankBtn.addEventListener('click', () => {
  if (turnFlag) {
    firstPlayer += sum;
  }
  else {
    secondPlayer += sum;
  }
})