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
