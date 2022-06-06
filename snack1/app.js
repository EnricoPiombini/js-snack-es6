// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const biciCorsa = [
    {
        nome: "Colnago",
        peso: "6400g"
    },

    {
        nome: "Wilier",
        peso: "6500g"
    },

    {
        nome: "Cannondale",
        peso: "7500g"
    },

    {
        nome: "Trek",
        peso: "7800g"
    }

];

// Trovare la bici con il peso minore

// Prendo il div dall'html
const bikeHtml = document.querySelector(".container")

// Imposto una variabile fuori dal ciclo
let pesoMinore;

for (let i = 0; i < biciCorsa.length; i++) {
    const kgMin = biciCorsa[i];

    if (!pesoMinore) {
        pesoMinore = kgMin;
    } else if (pesoMinore.peso > kgMin.peso) {
        pesoMinore = kgMin
    }

}

// Stampo a schermo usando destructuring e template literal
const { nome, peso } = pesoMinore
bikeHtml.innerHTML += ` <h1>${nome}</h1>
 <h3>${peso}</h3>`


console.log(nome, peso);


