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
    cap: "80100"
  }
};


// Ogni punto scende di un livello nell'oggetto.
console.log(utente.indirizzo.cap);


/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto "persona", variabile chiave = "nome".
   Stampa il valore con bracket notation usando la variabile chiave.
*/


const chiave = "nome";
console.log(persona[chiave]); // equivale a persona["nome"], cioè persona.nome
