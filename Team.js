class Team {
    constructor(name, punkte, turn) {
      this.name = name;
      this.punkte = punkte;
      this.turn = turn;
    }
  
    showPoints() {
      return this.punkte;
    }

    addPoints(punkte){
      this.punkte += +punkte;
    }

    showTurn(){
        return this.turn; 
    }

    setTurnFalse(){
        this.turn =false;
    }

    setTurnTrue(){
        this.turn =true;
    }
  }