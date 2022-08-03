let diceNumber = 0;
let sum = 0;

let rollBtn = document.querySelector('.rollBtn');
rollBtn.addEventListener('click', ()=>{
  diceNumber = Math.floor(Math.random() * (6-1)+1);  // 1~6 랜덤 넘버
  if (diceNumber == 1) {
    sum = 0;
  } 
  sum += diceNumber;
})