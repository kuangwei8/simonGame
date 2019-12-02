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
          setTimeout(()=>{
            document.getElementById("red").style.backgroundColor = "#ff3300";
            setTimeout(() => document.getElementById("red").style.backgroundColor = "grey", 1500);
          }, 2000)
        }
        if (list[i] == 2) {
          setTimeout(()=>{
            document.getElementById("blue").style.backgroundColor = "#0040ff";
            setTimeout(() => document.getElementById("blue").style.backgroundColor = "grey", 1500);
          },2000)
        }
        if (list[i] == 3) {
          setTimeout(()=>{
            document.getElementById("yellow").style.backgroundColor = "#ffff66";
            setTimeout(() => document.getElementById("yellow").style.backgroundColor = "grey", 1500);
          }, 2000)
        }
        if (list[i] == 4) {
          setTimeout(()=>{
            document.getElementById("green").style.backgroundColor = "#00cc00";
            setTimeout(() => document.getElementById("green").style.backgroundColor = "grey", 1500);
          },2000)
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