/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/


/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto "persona" con: nome, cognome, eta, citta.
   Stampa: "Mario Rossi, 25 anni, vive a Roma."
*/

// Creo l'oggetto "persona" 
const persona = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 25,
  citta: "Roma"
};

// Utilizzio la dot notation oggetto.proprietà
console.log(`${persona.nome} ${persona.cognome}, ${persona.eta} anni, vive a ${persona.citta}.`);


/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto "persona": aggiungi "email", poi rimuovi "eta".
   Stampa l'oggetto risultante.
*/

persona.email = "mario.rossi@email.com";

// "delete" è l'operatore che rimuove una proprietà da un oggetto.
// Dopo questo, persona.eta sarà undefined.
delete persona.eta;

// Stampo l'intero oggetto: la console mostra tutte le proprietà rimaste.
console.log(persona);


/* ESERCIZIO 3 — Oggetto annidato
   Oggetto "utente" con una proprietà "indirizzo" (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

// "indirizzo" è a sua volta un oggetto: un oggetto dentro un oggetto.
const utente = {
  nome: "Lucia",
  indirizzo: {
    via: "Via Roma 10",
    citta: "Napoli",
    cap: "80100" //il cap non può essere un numero perchè gli 00 iniziali non verrebbero letti se all'inizio
  }
};


// Ogni punto scende di un livello nell'oggetto.
console.log(utente.indirizzo.cap);


/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto "persona", variabile chiave = "nome".
   Stampa il valore con bracket notation usando la variabile chiave.
*/


let chiave = "nome";
console.log(persona[chiave]); // equivale a persona["nome"], cioè persona.nome


/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa "Pareggio".
*/

let a = 1;
let b = 3;
let c = 3;

// Confronto prima se a è più grande di c e b. 
// Poi controllo b, poi c. Se nessuno è più grande, significa che ci sono almeno due valori uguali
if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else if (c > a && c > b) {
  console.log(c);
} else {
  console.log("Pareggio");
}


/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile "totale".
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: "Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€"
   Risolvi una volta con if/else e una volta con ternario.
*/

let totale = 35;
let spedizione; //undefined perchè verrà calcolata solo dopo aver eseguito l'if

if (totale >= 50) {
  spedizione = 0;
} else {
  spedizione = 9.90;
}
console.log(`Totale carrello: ${totale}€ — Spedizione: ${spedizione}€ — Totale finale: ${totale + spedizione}€`);

/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, "ciao", true]).
   Con un for + if, per ogni elemento stampa "x è un numero" o "x non è un numero".
*/

const valori = [42, "ciao", true, 1994, "Napoli", 2026];

for (let i = 0; i < valori.length; i++) { //i viene incrementato di uno ogni volta che l'if viene "completato", questo avviene scorrendo l'array per la sua lunghezza
  if (typeof valori[i] === "number") { //"number" è un'etichetta per descrivere i numeri in js. 
    console.log(`${valori[i]} è un numero`);
  } else {
    console.log(`${valori[i]} non è un numero`);
  }
}


/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/

const numeri = []; 

// push() aggiunge un elemento in fondo
numeri.push(1);
numeri.push(2);
numeri.push(3);
numeri.push(4);
numeri.push(5);

// unshift() aggiunge un elemento all'inizio e sposta tutti gli altri di una posizione a destra.
numeri.unshift(0);

console.log(numeri);//nuovo arr
console.log(numeri.length); //lunghezza     
console.log(numeri [numeri.length -1]); //indice dell'ultimo 


/* ESERCIZIO 9 — Carrello con splice
   Array ["Penna", "Quaderno", "Zaino", "Astuccio"].
   Con splice: rimuovi "Quaderno", poi inserisci "Diario" al suo posto.
   Stampa dopo ogni operazione.
*/

// splice(indice, quantità_da_rimuovere, ...elementi_da_inserire)
const carrello = ["Penna", "Quaderno", "Zaino", "Astuccio"];

// "Quaderno" è all'indice 1. Passo 1 come quantità: ne rimuovo solo uno.
carrello.splice(1, 1);
console.log(carrello); // Penna Zaino Astuccio

// Ora inserisco "Diario" all'indice 1 
// Il secondo parametro è 0: non rimuovo nulla, aggiungo soltanto.
carrello.splice(1, 0, "Diario");
console.log(carrello); //Penna Diario Zaino Astuccio


/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ["Penna", "Quaderno", "Zaino"].
   cercato = "Zaino".
   Con includes: stampa "Zaino è in carrello: true".
   Con indexOf: stampa la posizione, o "Non in carrello".
*/

const prodotti = ["Penna", "Quaderno", "Diario"];
let cercato = "Zaino";

// includes() restituisce true o false: l'elemento c'è o non c'è.
console.log(`${cercato} è in carrello: ${prodotti.includes(cercato)}`);

// indexOf() restituisce l'indice della prima corrispondenza, oppure -1 se non trovato.
const posizione = prodotti.indexOf(cercato);
if (posizione !== -1) {
  console.log(`${cercato} trovato alla posizione ${posizione}`);
} else {
  console.log("Non in carrello");
}

