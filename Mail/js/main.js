//Chiedi all’utente la sua email,

var mailUtente = prompt("Inserisci il tuo indirizzo Mail");

console.log(mailUtente);


//controlla che sia nella lista di chi può accedere,

var utentiRegistrati = ["pippo@gmail.com", "pluto@libero.it", "paperino@aruba.it", "paperina@gmail.com"];

var controlloMail = false;

for (var i = 0; i < utentiRegistrati.length; i++) {

    if (mailUtente == utentiRegistrati[i]) {
        console.log("Digita la password");
        controlloMail = true;
        document.getElementById("registrati").innerHTML = "Felice di rivederti ora digita la password";
    }
  
    
}

//stampa un messaggio appropriato sull’esito del controllo.

    if (controlloMail == false) {
        console.log("ti devi registrare");
        document.getElementById("registrati").innerHTML = "Non sei ancora registrato, accedi all'area Nuovo Utente";
    }



