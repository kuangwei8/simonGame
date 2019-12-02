//Business Logic
class simonGame{
  constructor(){
    this._numberList = []; 
  }
  get numberList(){
    return this._numberList; 
  }

  generateNumber(){
    let randomNum = Math.floor((Math.random() * 4) + 1);
    this.numberList.push(randomNum); 
  }
    
  changeColor(list) { 
      for (let i=0; i< list.length; i++) {
          if (list[i] == 1) {
            setTimeout(() => {
              document.getElementById("red").style.backgroundColor = "#ff3300";
              setTimeout(() => document.getElementById("red").style.backgroundColor = "grey", 1500);
            }, i * 2000)
          }
          if (list[i] == 2) {
            setTimeout(() => {
              document.getElementById("blue").style.backgroundColor = "#0040ff";
              setTimeout(() => document.getElementById("blue").style.backgroundColor = "grey", 1500);
            }, i * 2000)
          }
          if (list[i] == 3) {
            setTimeout(() => {
              document.getElementById("yellow").style.backgroundColor = "#ffff66";
              setTimeout(() => document.getElementById("yellow").style.backgroundColor = "grey", 1500);
            }, i * 2000)
          }
          if (list[i] == 4) {
            setTimeout(() => {
              document.getElementById("green").style.backgroundColor = "#00cc00";
              setTimeout(() => document.getElementById("green").style.backgroundColor = "grey", 1500);
            }, i * 2000)
          }
      }
    }
}

  const redKey = document.getElementById("red").addEventListener("click", displayRed);
  const blueKey = document.getElementById("blue").addEventListener("click", displayBlue);
  const yellowKey = document.getElementById("yellow").addEventListener("click", displayYellow); 
  const greenKey = document.getElementById("green").addEventListener("click", displayGreen);
  const userNumList =[]; 

  function displayRed(){
    document.getElementById("red").style.backgroundColor = "#ff3300";
    setTimeout(() => document.getElementById("red").style.backgroundColor = "grey", 1000);
    userNumList.push(1);
    console.log('1');
  }
  function displayBlue() {
    document.getElementById("blue").style.backgroundColor = "#0040ff";
    setTimeout(() => document.getElementById("blue").style.backgroundColor = "grey", 1000);
    userNumList.push(2); 
  }
  function displayYellow() {
    document.getElementById("yellow").style.backgroundColor = "#ffff66";
    setTimeout(() => document.getElementById("yellow").style.backgroundColor = "grey", 1000);
    userNumList.push(3)
  }
  function displayGreen() {
    document.getElementById("green").style.backgroundColor = "#00cc00";
    setTimeout(() => document.getElementById("green").style.backgroundColor = "grey", 1000);
    userNumList.push(4);
  }

// User Interface Logic

const newGame = new simonGame(); 

 
// play game


$('#play').click(function() {
  newGame.generateNumber();
  const colorNum = newGame.numberList;
  console.log(colorNum);
  newGame.changeColor(colorNum);
  setTimeout(() => {
    alert("now is your turn to play");
  }, colorNum.length * 2000);

})

$('#submit').click(function () {
  console.log(userNumList);
  while(userNumList.length){
    userNumList.pop(); 
  }
  console.log(userNumList); 
 

})

 
  





