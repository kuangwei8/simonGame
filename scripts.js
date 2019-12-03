'use strict';
//=========================== {COMPUTER TURN} ===================================//
class simonGame{
  constructor(){
    this.colorSequence = []; 
    this.convertToColor = ["","red","blue","yellow","green"];
  }

  generateNextColor(){
    let randomNumber = Math.floor((Math.random() * 4) + 1);
    let randomColor = this.convertToColor[randomNumber];
    this.colorSequence.push(randomColor); 
  }

  playSequence(){
    for(let i = 0; i < this.colorSequence.length; i++){
      let currentColor = this.colorSequence[i];
      setTimeout(() => {
        displayColor(currentColor);
      }, 1200 * i);
    }
  }
  computerTurn() {
    this.generateNextColor();
    this.playSequence();
  }
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
}

function displayColor(color){
  let targetedTile = document.getElementById(color);
  targetedTile.style.opacity = 1;
  const fadeEffect = setInterval(function(){
    let opacity = parseFloat(targetedTile.style.opacity);
    if(opacity > 0.2){
      targetedTile.style.opacity = `${opacity - 0.1}`;
    }else{
      clearInterval(fadeEffect);
      targetedTile.style.opacity = 1;
    }
  }, 100);
  sounds[color].play();
}

const sounds = {
  red: new sound('./Music/red.wav'),
  blue: new sound('./Music/blue.wav'),
  yellow: new sound('./Music/yellow.wav'),
  green: new sound('./Music/green.wav')
}

//=========================== {USER TURN} ===================================//
class user{
  constructor(){
    this.numberOfGuesses = -1;
  }
  checkResult(currentColor) { //compare clicked color to computer color
    let currentIdx = this.numberOfGuesses;
    let color = newGame.colorSequence[currentIdx];
    let lastIdx = newGame.colorSequence.length - 1;
    if (currentColor !== color) {
      endGame();
      location.reload(); 
    }
    if(currentIdx === lastIdx){
      this.numberOfGuesses = -1; 
      setTimeout(()=> newGame.computerTurn(), lastIdx * 500); 
    }
  }
}

//=========================== {EVENT LISTENERS} ===================================//
function intializeEventListeners(){
  for(let i = 1; i < newGame.convertToColor.length; i++){
    document.getElementById(newGame.convertToColor[i]).addEventListener("click", handleClickedColor);
  }
}

function handleClickedColor(event){
  this.selectedColor = event.target.id;
  document.getElementById(this.selectedColor)
  displayColor(this.selectedColor);
  player.numberOfGuesses++;
  player.checkResult(this.selectedColor);
}

$('#play').click(function() {
  newGame.generateNextColor();
  newGame.playSequence();
  $('#play').hide();
})

function endGame(){
  alert("END OF GAME");
}

//=========================== {INITIALIZE GAME} ===================================//
const newGame = new simonGame();
const player = new user();
intializeEventListeners();





//=================={Old Code}======================================
// $('#submit').click(function () {
// let result = true; 
// if(newGame.colorSequence.length != userNumList.length){
//   result = false
// }
// for(let i = 0; i<newGame.colorSequence.length; i++){
//   if(newGame.colorSequence[i] !== userNumList[i] ){
//     result = false; 
//   }
// }
// if(result === true){
//   alert("Click Play to continue");
// }

// if(result === false){
//   alert("Click Play to restart the game"); 
//   while(newGame.colorSequence.length){
//     newGame.colorSequence.pop(); 
//   }
// }

// while(userNumList.length){
//   userNumList.pop(); 
// }

// })











  /*
    target.style.opacity = '1';
  // Reduce opacity on each function call
  var fade_effect = setInterval(function() {
    var opacity = parseFloat(target.style.opacity);
    if (opacity > 0.20) {
      target.style.opacity = `${opacity - 0.1}`;
    } else {
      clearInterval(fade_effect);

      // Next color in sequence
      correct_clicks_from_user++;
      show_next_color_sequence();
    }
  }, 100)
  */
    
//   changeColor(list) { 
//       for (let i=0; i< list.length; i++) {
//           if (list[i] == 1) {
//             setTimeout(() => {
//               document.getElementById("red").style.backgroundColor = "#ff3300";
//               redSound.play();
//               setTimeout(() => document.getElementById("red").style.backgroundColor = "grey", 1500);
//             }, i * 2000)
//           }
//           if (list[i] == 2) {
//             setTimeout(() => {
//               document.getElementById("blue").style.backgroundColor = "#0040ff";
//               blueSound.play();
//               setTimeout(() => document.getElementById("blue").style.backgroundColor = "grey", 1500);
//             }, i * 2000)
//           }
//           if (list[i] == 3) {
//             setTimeout(() => {
//               document.getElementById("yellow").style.backgroundColor = "#ffff66";
//               yellowSound.play();
//               setTimeout(() => document.getElementById("yellow").style.backgroundColor = "grey", 1500);
//             }, i * 2000)
//           }
//           if (list[i] == 4) {
//             setTimeout(() => {
//               document.getElementById("green").style.backgroundColor = "#00cc00";
//               greenSound.play();
//               setTimeout(() => document.getElementById("green").style.backgroundColor = "grey", 1500);
//             }, i * 2000)
//           }
//       }
//     }
// }


// function displayRed(){
//   document.getElementById("red").style.backgroundColor = "#ff3300";
//   setTimeout(() => document.getElementById("red").style.backgroundColor = "grey", 1000);
//   sounds["red"].play();
//   userNumList.push(1);
// }
// function displayBlue() {
//   document.getElementById("blue").style.backgroundColor = "#0040ff";
//   setTimeout(() => document.getElementById("blue").style.backgroundColor = "grey", 1000);
//   sounds["blue"].play();
//   userNumList.push(2); 
// }
// function displayYellow() {
//   document.getElementById("yellow").style.backgroundColor = "#ffff66";
//   setTimeout(() => document.getElementById("yellow").style.backgroundColor = "grey", 1000);
//   sounds["yellow"].play();
//   userNumList.push(3)
// }
// function displayGreen() {
//   document.getElementById("green").style.backgroundColor = "#00cc00";
//   setTimeout(() => document.getElementById("green").style.backgroundColor = "grey", 1000);
//   sounds["green"].play();
//   userNumList.push(4);
// }

/*
function displayRed() {
  document.getElementById("red").style.backgroundColor = "#ff3300";
  setTimeout(() => document.getElementById("red").style.backgroundColor = "grey", 1000);
  newGame.turn++;
  checkResult(1);
  
}
 
function displayBlue() {
  document.getElementById("blue").style.backgroundColor = "#0040ff";
  setTimeout(() => document.getElementById("blue").style.backgroundColor = "grey", 1000);
  newGame.turn++;
  checkResult(2);
}
 
function displayYellow() {
  document.getElementById("yellow").style.backgroundColor = "#ffff66";
  setTimeout(() => document.getElementById("yellow").style.backgroundColor = "grey", 1000);
  newGame.turn++;
  checkResult(3);
}
 
function displayGreen() {
  document.getElementById("green").style.backgroundColor = "#00cc00";
  setTimeout(() => document.getElementById("green").style.backgroundColor = "grey", 1000);
  newGame.turn++;
  checkResult(4);
}
 
const newGame = new simonGame()
 
function play() { // computer play
  newGame.generateNumber();
  const colorNum = newGame.numberList;
  newGame.changeColor(colorNum);
  console.log(colorNum); 
  
}
 
//user input happens after play()
 
function checkResult(num) { // compare user input to computer number
 
    let idx = newGame.turn;
 
    if (newGame.numberList[idx] !== num) {
     
      alert("Game Over, press OK to restart"); 
      location.reload(); 
    }
    
    if(newGame.numberList[idx]===num && idx === (newGame.numberList.length-1)){
      newGame.turn = -1; 
      setTimeout(()=> play(), newGame.numberList.length *500); 
    }
     
}
*/

