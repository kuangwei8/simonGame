//Business Logic
class simonGame{
  constructor(){
    this._numberList = []; 
  }
  get numberList(){
    return this._numberList; 
  }

  generateNumber(){
    let randomNum = Math.floor((Math.random() * 1) + 1);
    this.numberList.push(randomNum); 
  }

  originalColor(color){
    document.getElementById(color).style.backgroundColor = "grey";
  }

  changeColor(list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] == 1) {
  
          document.getElementById("red").style.backgroundColor = "#ff3300";
          setTimeout(this.originalColor("red"), 3000);
       
      }
      if (list[i] == 2) {
        document.getElementById("blue").style.backgroundColor = "#0040ff";
     
        
      }
      if (list[i] == 3) {
        document.getElementById("yellow").style.backgroundColor = "#ffff66";

        

      }
      if (list[i] == 4) {
        document.getElementById("green").style.backgroundColor = "#00cc00";
      
        
      }
    }
  }


}

// User Interface Logic

const newGame = new simonGame(); 

$('#play').click(function(){
  newGame.generateNumber(); 
  const colorNum = newGame.numberList; 
  console.log(colorNum); 
  newGame.changeColor(colorNum); 

})