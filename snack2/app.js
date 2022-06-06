// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const infoSquadra = [

    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0,
    },

];

//Array numeri random   

const newPar = [];


for (let i = 0; i < infoSquadra.length; i++) {
    const puntiFatti = Math.floor(Math.random() * 90);
    const falliSubiti = Math.floor(Math.random() * 400);

    newPar.push({
        ...infoSquadra[i],
        puntiFatti,
        falliSubiti
    })
}

console.table(newPar);

// Nuovo array con solo nomi e falli subiti

const nomeFalli = [];

for (let i = 0; i < infoSquadra.length; i++) {
    const falliSubiti = Math.floor(Math.random()*400);
    const {nome} = infoSquadra[i]
   
    nomeFalli.push({
       nome,
       falliSubiti
        })
}

console.table(nomeFalli);


