//Chiedi all’utente la sua email,

var mailUtente = prompt("Inserisci il tuo indirizzo Mail");

console.log(mailUtente);


//controlla che sia nella lista di chi può accedere,

var utentiRegistrati = ["pippo@gmail.com", "pluto@libero.it", "paperino@aruba.it", "paperina@gmail.com"];

console.log(utentiRegistrati);

for (var i = 0; i == utentiRegistrati.length; i++) {

    if (mailUtente != utentiRegistrati.length) {
        console.log(prompt("Prima ti devi registrare"));
    }
    else {
        console.log(prompt("Digita la password"));
    }
    
}
//stampa un messaggio appropriato sull’esito del controllo.



