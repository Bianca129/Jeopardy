let stop = false; //solange Spiel läuft false

let player1 = new Team("team1", 0, true);
let player2 = new Team("team2", 0, false);
let player3 = new Team("team3", 0, false);

//console.log("t. " + player1);

//Felder für Punktestand
let team1 = document.getElementById("team1Punkte");
let team2 = document.getElementById("team2Punkte");
let team3 = document.getElementById("team3Punkte");

//Punktestände

let punkteTeam1 = player1.punkte;
let punkteTeam2 = player2.punkte;
let punkteTeam3 = player3.punkte;

//Runde
let count = 0;

//Team 1 fängt an
let aktuellesTeam;
let aktuellesElement;
let versuch = 0;
let geraten = [];
let aktuelleFrage; 

//Buttons
let buttonTeam1 = document.getElementById("team1");
let buttonTeam2 = document.getElementById("team2");
let buttonTeam3 = document.getElementById("team3");
let falscherButton = document.getElementById("buttonFalsch");
let richtigerButton = document.getElementById("buttonRichtig");
let tipp1 = document.getElementById("tipp1");
let tipp2 = document.getElementById("tipp2");
let tipp3 = document.getElementById("tipp3");
let auswerten = document.getElementById("auswerten");

let modal = document.getElementById("myModal");
let answerBlock = document.getElementById("answerModal");

let anzeige = document.getElementById("currentPlayer");

//Frage richtig beantwortet
let t1 = false;
let t2 = false;
let t3 = false;

let PunktzahlFrage = document.getElementById("PunktzahlFrage");

let footer = document.getElementById("footer");

//Sobald auf das Feld geklickt wird, wird ein Modal geöffnet
//Das Team, das die letzte Frage richtig beantwortet hat, ist an der Reihe; Team 1 beginnt.
function ausblenden(element) {
  buttonTeam1.hidden = false;
  buttonTeam2.hidden = false;
  buttonTeam3.hidden = false;
  falscherButton.hidden = true;
  richtigerButton.hidden = true;

  aktuellesElement = element;
  let table = document.getElementsByTagName("table")[0];
  table.classList.add("show-background");

  buildModal(element);
  let kreuz = document.getElementById("closeButton");
  kreuz.style.display = "none";

  element.classList.add("clicked");

  element.removeAttribute("onclick");
  let punkte = aktuellesElement.id;
  punkte = punkte.split("/");
  punkte = Number(punkte[1]);
  PunktzahlFrage.value = punkte;

  //Dann passiert so lange nichts bis auf einen Button im Modal geklickt wird.
  //--> Team wird ausgewählt
}






function pruefen() {
  console.log(count == 30);
  
  if(count == 30){
    let erster = document.getElementById("erster"); 
    let zweiter = document.getElementById("zweiter");
    let dritter = document.getElementById("dritter"); 
    let winner = document.getElementById("winner");

    let name1 = document.getElementById("setTeam1").innerHTML;
    let name2 = document.getElementById("setTeam2").innerHTML;
    let name3 = document.getElementById("setTeam3").innerHTML;

    winner.style.display ="block";

  player1.name = name1;
  player2.name = name2;
  player3.name = name3;

    // Array der Teams erstellen
    let teams = [player1, player2, player3];

    // Teams nach Punkten sortieren
    let sortedTeams = teams.sort((a, b) => b.punkte - a.punkte);

    // Teams in der sortierten Reihenfolge anzeigen und in Variable speichern
    let teamInfo = sortedTeams.map(team => team.name + " | " + team.punkte + " P");

    console.log(teamInfo);
if (player1.punkte != player2.punkte && player1 != player3.punkte && player2.punkte != player3.punkte){
    erster.innerHTML = teamInfo[0]; 
    zweiter.innerHTML = teamInfo[1];
    dritter.innerHTML = teamInfo[2];
}else if (teamInfo[0].punkte == teamInfo[1].punkte){
  erster.innerHTML = teamInfo[0] + "<br>" + teamInfo[1];
  zweiter.innerHTML = teamInfo[2]
}else if (teamInfo[0].punkte == teamInfo[2].punkte){
  erster.innerHTML = teamInfo[0] + "<br>" + teamInfo[2];
  zweiter.innerHTML = teamInfo[1]  

}else if(teamInfo[1].punkte == teamInfo[2].punkte){
  erster.innerHTML = teamInfo[1] + "<br>" + teamInfo[2];
  zweiter.innerHTML = teamInfo[0]  
}
/*


    for(let i=0; i < sort.length; i++){
      if(sort[i].name=="team1"){
        sort[i].name = "Team 1";
      }
      if(sort[i].name=="team2"){
        sort[i].name = "Team 2";
      }

      if(sort[i].name=="team3"){
        sort[i].name = "Team 3";
      }
    }

  
    console.log(sort);
    console.log(sort[0].punkte);
    console.log(sort[1].punkte);
    console.log(sort[2].punkte);

    if (sort[0].punkte == sort[1].punkte) {
      alert("hier1");
      erster.innerHTML = sort[0].name + " | " + sort[0].punkte  + " P" + "<br>" + sort[1].name + " | " + sort[1].punkte + " P";
      zweiter.innerHTML = sort[2].name + " | " + sort[2].punkte + " P";
    }

    else if (sort[1].punkte == sort[2].punkte) {
      alert("hier2");
      erster.innerHTML = sort[0].name + " | " + sort[0].punkte + " P";
      zweiter.innerHTML = sort[1].name + " | " + sort[1].punkte + " P" + "<br>" + sort[2].name + " | " + sort[2].punkte + " P";
    }
    else if (sort[0].punkte == sort[1].punkte == sort[2].punkte) {
      alert("hier3");
      erster.innerHTML = sort[0].name + " | " + sort[0].punkte + " P" + "<br>" + sort[1].name + " | " + sort[1].punkte + " P" +  "<br>" + sort[2].name + + " | " + sort[2].punkte + " P";
    }
    else{
      alert("hier4");
    erster.innerHTML = sort[0].name + " | " + sort[0].punkte + " P";
    zweiter.innerHTML = sort[1].name + " | " + sort[1].punkte + " P"; 
    dritter.innerHTML = sort[2].name + " | " + sort[2].punkte + " P"; 
    }*/
  }



  }
/*


    let array = [];
    array.push(player1.punkte);
    array.push(player2.punkte);
    array.push(player3.punkte);

    let sortiertePunkte = array.slice().sort((a, b) => b - a);

    let eindeutigePunkte = [...new Set(sortiertePunkte)];
    console.log(eindeutigePunkte);
    for (let i = 0; i < eindeutigePunkte.length; i++) {
      let punkteAnzahl = sortiertePunkte.filter(
        (p) => p === eindeutigePunkte[i]
      ).length;
      let platzierung = i + 1;
      (`${platzierung}. Platz: ${eindeutigePunkte[i]} Punkte (${punkteAnzahl} mal erreicht)`);
        let erster = document.getElementById("erster"); 
        let zweiter = document.getElementById("zweiter");
        let dritter = document.getElementById("dritter"); 
        let winner = document.getElementById("winner");

        let zusatzErster= document.getElementById("zusatzErster");
        winner.style.display ="block";

      if(i == 2){
        if (eindeutigePunkte[0] == player1.punkte){
          erster.innerHTML = "Team 1 hat gewonnen";
        }
        else if (eindeutigePunkte[0] == player2.punkte){
          erster.innerHTML = "Team 2 hat gewonnen";
        }else{
          erster.innerHTML = "Team 3 hat gewonnen";
        }

        if (eindeutigePunkte[1] == player1.punkte){
          zweiter.innerHTML = "Team 1 belegt den zweiten Platz";
        }else if (eindeutigePunkte[1] == player2.punkte){
          zweiter.innerHTML = "Team 2 belegt den zweiten Platz";
        }else{
          zweiter.innerHTML = "Team 3 belegt den zweiten Platz";
        }

        if (eindeutigePunkte[2] == player1.punkte){
          dritter.innerHTML = "Team 1 belegt den dritten Platz";
        }else if (eindeutigePunkte[2] == player2.punkte){
          dritter.innerHTML = "Team 2 belegt den dritten Platz";
        }else{
          dritter.innerHTML = "Team 3 belegt den dritten Platz";
        }
      }

        //erster.innerHTML = ${platzierung}; 
      console.log(
        `${platzierung}. Platz: ${eindeutigePunkte[i]} Punkte (${punkteAnzahl} mal erreicht)`
      );

      if(i==0){
        erster.innerHTML = `${platzierung}. Platz: ${eindeutigePunkte[i]} Punkte (${punkteAnzahl} mal erreicht)`;
        if(eindeutigePunkte[i] == player1.punkte){
          zusatzErster.innerHTML= "Team 1";
        }
      }
      else if(i==1){
        zweiter.innerHTML = `${platzierung}. Platz: ${eindeutigePunkte[i]} Punkte (${punkteAnzahl} mal erreicht)`;
      }else{
        dritter.innerHTML = `${platzierung}. Platz: ${eindeutigePunkte[i]} Punkte (${punkteAnzahl} mal erreicht)`;
      }
/*      if (eindeutigePunkte[0] == player1.punkte){
        erster.innerHTML = "Team 1 hat gewonnen";
      }
      else if (eindeutigePunkte[0] == player2.punkte){
        erster.innerHTML = "Team 2 hat gewonnen";
      }else{
        erster.innerHTML = "Team 3 hat gewonnen";
      }

      if (eindeutigePunkte[1] == player1.punkte){
        zweiter.innerHTML = "Team 1 belegt den zweiten Platz";
      }else if (eindeutigePunkte[1] == player2.punkte){
        zweiter.innerHTML = "Team 2 belegt den zweiten Platz";
      }else{
        zweiter.innerHTML = "Team 3 belegt den zweiten Platz";
      }

      if (eindeutigePunkte[2] == player1.punkte){
        dritter.innerHTML = "Team 1 belegt den dritten Platz";
      }else if (eindeutigePunkte[2] == player2.punkte){
        dritter.innerHTML = "Team 2 belegt den dritten Platz";
      }else{
        dritter.innerHTML = "Team 3 belegt den dritten Platz";
      }*/
    

    /*
    array.sort(compareNumbers);
    console.log(array);
if(player1.punkte != player2.punkte && player1.punkte != player3 && player2.punkte != player3.punkte){
    for(let i=0; i < array.length; i++){
    
      if (array[i] == player1.punkte ){
        console.log("Team 1 ist " + i+1);
      }

      if (array[i] == player2.punkte){
        console.log("Team 2 ist " + i+1);
      }

      if (array[i] == player3.punkte){
        console.log("Team 3 ist " + i+1);
      }
    }
  }else {
    alert("gleichstand")
  }
  }
}*/

//let array = [12, 8, 15, 10, 11, 15, 10, 12];

function compareNumbers(a, b) {
  return b - a;
}

function buildModal(element) {
  console.log(count);

  //console.log(quizQuestions[0]);

  // Get the button that opens the modal
  let idElement = element.id;
  count++;
  //console.log(count);
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";

  let modalHeader = document.getElementById("headerModal");
  let trs = document.getElementsByTagName("tr");
  let kat;

  for (let i = 1; i < trs.length; i++) {
    for (let j = 0; j < trs.length; j++) {
      if (trs[i].children[j].id == element.id) {
        kat = trs[i].children[j].id.split("/")[0];
        if (kat == "k1") {
          modalHeader.innerHTML =
            trs[0].children[0].innerHTML +
            " | " +
            element.innerHTML +
            "-Punkte-Frage";
        } else if (kat == "k2") {
          modalHeader.innerHTML =
            trs[0].children[1].innerHTML +
            " | " +
            element.innerHTML +
            "-Punkte-Frage";
        } else if (kat == "k3") {
          modalHeader.innerHTML =
            trs[0].children[2].innerHTML +
            " | " +
            element.innerHTML +
            "-Punkte-Frage";
        } else if (kat == "k4") {
          modalHeader.innerHTML =
            trs[0].children[3].innerHTML +
            " | " +
            element.innerHTML +
            "-Punkte-Frage";
        } else if (kat == "k5") {
          modalHeader.innerHTML =
            trs[0].children[4].innerHTML +
            " | " +
            element.innerHTML +
            "-Punkte-Frage";
        } else if (kat == "k6") {
          modalHeader.innerHTML =
            trs[0].children[5].innerHTML +
            " | " +
            element.innerHTML +
            "-Punkte-Frage";
        }
      }
    }
  }

  let questionBlock = document.getElementById("questionModal");
  let tds = document.getElementsByTagName("td");
  let who = document.getElementById("who");
  //console.log(element == tds[0]);
  for (let i = 0; i < tds.length; i++) {
    if (element == tds[i]) {
      //console.log(element);
      //console.log(quizQuestions[i].who);
      questionBlock.innerHTML = quizQuestions[i].question;
      aktuelleFrage=quizQuestions[i];
      if (quizQuestions[i].who != "one") {
        who.innerHTML = "ALLE";
        tipp1.hidden = false; 
        tipp2.hidden = false; 
        tipp3.hidden = false; 

        auswerten.hidden = false; 
        buttonTeam1.hidden = true; 
        buttonTeam2.hidden = true; 
        buttonTeam3.hidden = true; 
        tipp1.style.border="none";
        tipp2.style.border="none";
        tipp3.style.border="none";
        tipp1.style.background = "none";
        tipp2.style.background = "none";
        tipp3.style.background = "none";
        answerBlock.innerHTML = "";
        //footer.hidden = false;
        if(quizQuestions[i].art == "number"){
          tipp1.type = "number";
          tipp2.type = "number";
          tipp3.type = "number";
        }else{
        tipp1.type = "text";
        tipp2.type = "text";
        tipp3.type = "text";
        }

      } else {
        who.innerHTML = "";
        tipp1.hidden = true; 
        tipp2.hidden = true; 
        tipp3.hidden = true; 
        auswerten.hidden = true; 
        buttonTeam1.hidden = false; 
        buttonTeam2.hidden = false; 
        buttonTeam3.hidden = false; 

        tipp1.style.border="none";
        tipp2.style.border="none";
        tipp3.style.border="none";
        answerBlock.innerHTML = "";
        //footer.hidden = false; 

      }
    }
  }

  // When the user clicks on the button, open the modal
  idElement.onclick = function () {
    modal.style.display = "block";
    buttonTeam1.hidden = false;
    buttonTeam2.hidden = false;
    buttonTeam3.hidden = false;
    falscherButton.hidden = true;
    richtigerButton.hidden = true;

    //modalHeader.innerHTML
  };
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
    tipp1.hidden = true; 
    tipp1.value ="";
    tipp2.hidden = true; 
    tipp2.value ="";
    tipp3.hidden = true; 
    tipp3.value="";
    auswerten.hidden = true; 
    buttonTeam1.hidden = false; 
    buttonTeam2.hidden = false; 
    buttonTeam3.hidden = false; 
    pruefen();
    
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "block";
    }
  };
}

function getPunkte() {
  showAnswer();
  let punkte = aktuellesElement.id;
  punkte = punkte.split("/");
  punkte = Number(punkte[1]);
  PunktzahlFrage.value = punkte;
  versuch = 0;

  //aktuelles Team bleibt gleich & bekommt Punkte
  aktuellesTeam.addPoints(PunktzahlFrage.value);
  //console.log(aktuellesTeam.punkte);
  refreshPoints();
  // modal.style.display = "none";
  anzeigeTeam();
  geraten = [];
  t1 = false;
  t2 = false;
  t3 = false;
/*  setTimeout(function(){
    pruefen()}, 1000)*/
}

function changePlayer() {
  //wenn Antwort falsch war
  //Das Team das schon geraten hat, wird in Array geschrieben.
  geraten.push(aktuellesTeam.name);

  //Richtig und Falsch wird ausgeblendet, da zuerst ein Team ausgewählt werden muss
  falscherButton.hidden = true;
  richtigerButton.hidden = true;

  // console.log("Länge: " + geraten.length);
  if (geraten.length < 3) {
    //richtig und falscher Button ausblenden
    /*falscherButton.hidden = true;
    richtigerButton.hidden = true;
    */

    //Team Buttons einblenden --> kann angeklickt werden welches Team an der Reihe ist.

    if (aktuellesTeam.name == "team1") {
      if (geraten.length < 2) {
        t1 = true;
        buttonTeam1.hidden = true;
        buttonTeam2.hidden = false;
        buttonTeam3.hidden = false;
      } else {
        t1 = true;
        checkWinnerQuestion(t1, t2, t3);
      }
    } else if (aktuellesTeam.name == "team2") {
      if (geraten.length < 2) {
        t2 = true;
        buttonTeam1.hidden = false;
        buttonTeam2.hidden = true;
        buttonTeam3.hidden = false;
      } else {
        t2 = true;
        checkWinnerQuestion(t1, t2, t3);
      }
    } else if (aktuellesTeam.name == "team3") {
      if (geraten.length < 2) {
        t3 = true;
        buttonTeam1.hidden = false;
        buttonTeam2.hidden = false;
        buttonTeam3.hidden = true;
      } else {
        t3 = true;
        checkWinnerQuestion(t1, t2, t3);
      }
    }
  }

  if (geraten.length >= 2) {
    //aktuellesTeam bekommt die Punkte und ist an der Reihe
    //console.log(aktuellesTeam);
    showAnswer(); 
    //modal.style.display = "none";
    aktuellesTeam.addPoints(PunktzahlFrage.value);
    //alert("Punktzahl erhöht" + aktuellesTeam.name);
    /*if ((count == 30)) {
      pruefen();
    }*/

    t1 = false;
    t2 = false;
    t3 = false;
    geraten = [];
  }
  anzeigeTeam();
  refreshPoints();
}

function setTeam(element) {
  falscherButton.hidden = false;
  richtigerButton.hidden = false;
  buttonTeam1.hidden = true;
  buttonTeam2.hidden = true;
  buttonTeam3.hidden = true;

  //console.log(element.id);
  //Das Objekt auswählen, das den Namen element.id
  if (player1.name == element.id) {
    aktuellesTeam = player1;
  }

  if (player2.name == element.id) {
    aktuellesTeam = player2;
  }

  if (player3.name == element.id) {
    aktuellesTeam = player3;
  }

  //aktuelles Team ausgewählt; dann soll Richtig oder Falsch angezeigt werden
  anzeigeTeam();
}

function refreshPoints() {
  //Punkte ausgeben
  team1.innerHTML = player1.punkte;
  team2.innerHTML = player2.punkte;
  team3.innerHTML = player3.punkte;
}

function anzeigeTeam() {
  let teamname = aktuellesTeam.name;
  //console.log(teamname);
  let t1 = document.getElementById("t1");
  let t2 = document.getElementById("t2");
  let t3 = document.getElementById("t3");

  if (teamname == "team1") {
    t1.style.border = "5px solid #EF37E7";
    t2.style.border = "5px solid white";
    t3.style.border = "5px solid white";
  }

  if (teamname == "team2") {
    t2.style.border = "5px solid #EF37E7";
    t1.style.border = "5px solid white";
    t3.style.border = "5px solid white";
  }

  if (teamname == "team3") {
    t3.style.border = "5px solid #EF37E7";
    t2.style.border = "5px solid white";
    t1.style.border = "5px solid white";
  }

  /*let firstLetter = teamname.slice(0, 1); // erster Buchstabe T

  let restOfStr = teamname.slice(1); //eam2
  let eam = restOfStr.slice(0, 3); //eam
  let number = restOfStr.slice(3, 4); //2
  firstLetter = firstLetter.toUpperCase();
  let team = firstLetter + eam + " " + number;
  currentPlayer.innerHTML = team + " ist an der Reihe";*/
  //console.log(PunktzahlFrage.value);
}

function checkWinnerQuestion(t1, t2, t3) {
  if (t1 == false) {
    aktuellesTeam = player1;
  } else if (t2 == false) {
    aktuellesTeam = player2;
  } else if (t3 == false) {
    aktuellesTeam = player3;
  }
}

function showAnswer() {
  //aktuellesElement
  let tds = document.getElementsByTagName("td");
  //console.log(aktuellesElement == tds[0]);
  for (let i = 0; i < tds.length; i++) {
    if (aktuellesElement == tds[i]) {
      //console.log(aktuellesElement);
      //console.log(quizQuestions[i].who);
      answerBlock.innerHTML = quizQuestions[i].answer;
    }

    //footer.hidden = true;
  }

  //richtig & falsch Buttons entfernen
  falscherButton.hidden = true;
  richtigerButton.hidden = true;

  //Kreuz setzen
  let kreuz = document.getElementById("closeButton");
  kreuz.style.display = "flex";
  kreuz.style.float = "right";



}

function checkAntworten(){
  let erg1 = tipp1.value; 
  let erg2 = tipp2.value; 
  let erg3 = tipp3.value;
  
  let aktRundeT1 =false;
  let aktRundeT2 =false;
  let aktRundeT3 =false; 
  let countTrue= 0;
  let countFalse =0; 

  
// akteuelles element --> split id f
  let res = aktuelleFrage.tipp; 
  console.log("res: " + res); 
if(erg1 != "" && erg2 != "" && erg3 != ""){
  if(aktuelleFrage.art == "number"){
    
    let diff1 = Math.abs(res - erg1);
    let diff2 = Math.abs(res - erg2);
    let diff3 = Math.abs(res - erg3);

    if (diff1 < diff2 && diff1 < diff3) {
      tipp1.style.border="3px solid green";
      tipp1.style.background="green";
      aktuellesTeam=player1;
      aktuellesTeam.addPoints(PunktzahlFrage.value);
      
    } else if (diff2 < diff1 && diff2 < diff3) {
      tipp2.style.border="3px solid green";
      tipp2.style.background="green";
      aktuellesTeam=player2;
      aktuellesTeam.addPoints(PunktzahlFrage.value);
    } else if (diff3 < diff1 && diff3 < diff2){
      tipp3.style.border="3px solid green";
      tipp3.style.background="green";
      aktuellesTeam=player3;
      aktuellesTeam.addPoints(PunktzahlFrage.value);
    }else if (diff1 == diff2 && diff3 != diff2){
      tipp1.style.border="3px solid green";
      tipp1.style.background="green";
      tipp2.style.border="3px solid green";
      tipp2.style.background="green";
      player1.addPoints(PunktzahlFrage.value/2);
      player2.addPoints(PunktzahlFrage.value/2);
      let zufall = [player1, player2]; 

      // Zufälligen Index generieren
      var randomIndex = Math.floor(Math.random() * zufall.length);
      // Zufälliges Element auswählen
      var randomElement = zufall[randomIndex];
      aktuellesTeam=randomElement;
    
    }else if (diff1 == diff3 && diff2 != diff3){
      tipp1.style.border="3px solid green";
      tipp1.style.background="green";
      tipp3.style.border="3px solid green";
      tipp3.style.background="green";
      player1.addPoints(PunktzahlFrage.value/2);
      player3.addPoints(PunktzahlFrage.value/2);
      let zufall = [player1, player3]; 

      // Zufälligen Index generieren
      var randomIndex = Math.floor(Math.random() * zufall.length);
      // Zufälliges Element auswählen
      var randomElement = zufall[randomIndex];
      aktuellesTeam=randomElement;
    }else if (diff2 == diff3 && diff1 != diff3){
      tipp2.style.border="3px solid green";
      tipp2.style.background="green";
      tipp3.style.border="3px solid green";
      tipp3.style.background="green";
      player2.addPoints(PunktzahlFrage.value/2);
      player3.addPoints(PunktzahlFrage.value/2);
      let zufall = [player2, player3]; 

      // Zufälligen Index generieren
      var randomIndex = Math.floor(Math.random() * zufall.length);
      // Zufälliges Element auswählen
      var randomElement = zufall[randomIndex];
      aktuellesTeam=randomElement;
    }else if(diff1 == diff2 && diff1 == diff3){
      tipp1.style.border="3px solid green";
      tipp1.style.background="green";
      tipp2.style.border="3px solid green";
      tipp2.style.background="green";
      tipp3.style.border="3px solid green";
      tipp3.style.background="green";
      player1.addPoints(Math.round(PunktzahlFrage.value/3));
      player2.addPoints(Math.round(PunktzahlFrage.value/3));
      player3.addPoints(Math.round(PunktzahlFrage.value/3));
      let zufall = [player1, player2, player3]; 

      // Zufälligen Index generieren
      var randomIndex = Math.floor(Math.random() * zufall.length);
      // Zufälliges Element auswählen
      var randomElement = zufall[randomIndex];
      aktuellesTeam=randomElement;
    }

     
    anzeigeTeam();
    refreshPoints();

  }

  
  if(aktuelleFrage.art == "text"){

    if(erg1 == res){
      aktRundeT1 = true; 
      countTrue++;
      tipp1.style.border="3px solid green";
      tipp1.style.background="green";
      aktuellesTeam=player1;

    }else{
      countFalse++;
    }
    if(erg2 == res){
      aktRundeT2 = true; 
      countTrue++;
      tipp2.style.border="3px solid green";
      tipp2.style.background="green";
      aktuellesTeam=player2;
    }else{
      countFalse++;
    }
    if(erg3 == res){
      aktRundeT3 = true; 
      countTrue++;
      tipp3.style.border="3px solid green";
      tipp3.style.background="green";
      aktuellesTeam=player3;
    }else{
      countFalse++; 
    }

    let aktuelleRunde = [aktRundeT1, aktRundeT2, aktRundeT3];
    if(countTrue == 1){
        if (aktuelleRunde[0]){
          player1.addPoints(PunktzahlFrage.value);
        }
        else if (aktuelleRunde[1]){
          player2.addPoints(PunktzahlFrage.value);
        }
        else if (aktuelleRunde[2]){
          player3.addPoints(PunktzahlFrage.value);
        }
       
    }

    else if (countTrue == 2){
      let halbePunkte = PunktzahlFrage.value/2;

      if (aktuelleRunde[0]){
        player1.addPoints(halbePunkte);
      }
      if (aktuelleRunde[1]){
        player2.addPoints(halbePunkte);
      }
      if (aktuelleRunde[2]){
        player3.addPoints(halbePunkte);
      }

    }

    else if (countTrue == 3){
      let drittelPunkte = Math.round(PunktzahlFrage.value/3);

      if (aktuelleRunde[0]){
        player1.addPoints(drittelPunkte);
      }
      if (aktuelleRunde[1]){
        player2.addPoints(drittelPunkte);
      }
      if (aktuelleRunde[2]){
        player3.addPoints(drittelPunkte);
      }

    }else{
      showAnswer();
    }
    refreshPoints();
    anzeigeTeam();


  }
  auswerten.hidden = true; 
  showAnswer();
  //pruefen();
}else{
  alert ("Es haben noch nicht alle Teams eine Antwort abgegeben!")
}
}


function namenVergeben(element){
let name = prompt("Gebt hier euern Teamnamen ein");
let team1 = document.getElementById("setTeam1");
let team2 = document.getElementById("setTeam2");
let team3 = document.getElementById("setTeam3");

if(element.id == "t1"){
  team1.innerHTML = name;
}

if(element.id == "t2"){
  team2.innerHTML = name;
}

if(element.id == "t3"){
  team3.innerHTML = name;
}
}


