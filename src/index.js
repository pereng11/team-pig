let diceNumber = 0;
let sum = 0;
let firstPlayer = 0;
let secondPlayer = 0;
let turnFlag = true;  // true : fisrtPlayuer, false : secondPlayer

let rollBtn = document.querySelector('.rollBtn');
let bankBtn = document.querySelector('.bankBtn');
let firstPlayerScore = document.querySelector('.firstPlayerScore');
let secondPlayerScore = document.querySelector('.secondPlayerScore');
let firstPlayerCurrScore = document.querySelector('.firstPlayerCurrScore');
let secondPlayerCurrScore = document.querySelector('.secondPlayerCurrScore');
firstPlayerScore.innerHTML = 0;
secondPlayerScore.innerHTML = 0;
firstPlayerCurrScore.innerHTML = 0;
secondPlayerCurrScore.innerHTML = 0;

rollBtn.addEventListener('click', ()=>{
  // 랜덤 넘버 생성
  // 점수 누적

  diceNumber = Math.floor(Math.random() * (6-1)+1);  // 1~6 랜덤 넘버
  sum += diceNumber;
  if (diceNumber == 1) {
    sum = 0;
    turnFlag = !turnFlag; // 턴바꿈
  } 

  if (turnFlag) {
    firstPlayerCurrScore.innerHTML = sum;
  }
  else {
    secondPlayerCurrScore.innerHTML += sum;
  }
  
})

bankBtn.addEventListener('click', () => {
  // 눌렀을 경우 누적 점수 반영
  // 턴 바뀜
  if (turnFlag) {
    firstPlayer += sum;
    firstPlayerScore.innerHTML = firstPlayer;
  }
  else {
    secondPlayer += sum;
    secondPlayerScore.innerHTML = secondPlayer;
  }
  sum = 0;
  flag = !flag; // 턴바꿈
})

