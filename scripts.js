//Business Logic
class simonGame{
  constructor(){
    this._numberList = []; 
  }
  get numberList(){
    return this._numberList; 
  }

  generateNumber(){
    let randomNum = Math.floor((Math.random() * 3) + 1);
    this.numberList.push(randomNum); 
  }

  lightUp(){
    for(let i = 0; i<this.numberList.length; i++){
      if(this.numberList[i]== 1){
        console.log("red"); 
      }
      if(this.numberList[i]==2){
        console.log("blue"); 
      }
      if(this.numberList[i]==3){
        console.log("yellow");
      }
      if(this.numberList[i]==4){
        console.log("green"); 
      }
    }
  }
  changeColor(color){

  }

}

const game1 = new simonGame(); 

console.log(game1.numberList); 
game1.lightUp(); 

// User Interface Logic

