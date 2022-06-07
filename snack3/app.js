// @ts-nocheck
// Snack 3
// Dato l’array di nomi:
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

// listaNomi.forEach(element, index, array) => {}

const listaNomi = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];



const minMax = [];

const numeroMinore = 2;
const numeroMaggiore = 6;



listaNomi.forEach((element, i) => {
    if (i > numeroMinore && i < numeroMaggiore) {
        minMax.push(element)
    }
});

console.log(minMax);


// Filter 

const minMaxnomi = listaNomi.filter((element, i) => {

   if(i > numeroMinore && i < numeroMaggiore){
       return true;
   } else {
       return false;
   }
});

console.log(minMaxnomi);


