//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

//numero random giocatore

var dado_giocatore = Math.round(Math.random() * 5) + 1;
console.log(dado_giocatore);
document.getElementById("dado-giocatore").innerHTML = dado_giocatore;

var dado_computer = Math.round(Math.random() * 5) + 1;
console.log(dado_computer); 
document.getElementById("dado-computer").innerHTML = dado_computer;



//Stabilire il vincitore, in base a chi fa il punteggio più alto.


if (dado_giocatore < dado_computer) {

    document.getElementById("risultato").innerHTML = "Hai perso";
}
else if (dado_giocatore == dado_computer) {
    
    document.getElementById("risultato").innerHTML = "Ritira il dado";
}
else {

    document.getElementById("risultato").innerHTML = "Hai vinto";
}