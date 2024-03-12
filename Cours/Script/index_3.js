//MARDI 12 MARS 2024
//! REVISION FONCTION
//DECLARER LA FONCTION (LA NOMMER + ARGUMENT "PARAM")
function myLittleFunction(param) {
    //RETOURNER LA VALEUR (spécifie la valeur qui est renvoyée par la fonction)
    return `Tartine et chocolat ${param}`;
}
//APPELER LA FONCTION
// const result = myLittleFunction('c\'est bon');
//AFFICHER LE RESULTAT
//console.log(result);

let number = 5
let myName

if (number < 10) {
    myName = "Paul"
} else {
    myName = "Pierre"
}

// console.log(myName)

let arrNumbers_1 = [2, 7, 3, 1, 4]
let arrNumbers_2 = [12, 17, 13, 11, 14, 31, 6, 28]

// écrire la fonction qui retourne le minimum d'un tableau passé en paramètre et la commenter par une phrase
// 2 APPELER LA FONCTION
const min_1 = getMinimum (arrNumbers_1)
const min_2 = getMinimum (arrNumbers_2)
// 1 LA FONCTION VA RECUPERER LE MINIMUM DE MON TABLEAU
function getMinimum(arr) {
// 4 JE VAIS DECLARER UNE VARIABLE QUI VA STOCKER LE MINIMUM
    let minimum = arr[0]
    // 3 JE VAIS PARCOURIR MON TABLEAU
    for(let i = 0; i < arr.length; i++) {
        // 5 PREMIER ELEMENT DU TABLEAU
        let min = arr[0]
        // 6 SI L'ELEMENT DU TABLEAU EST PLUS PETIT QUE LE MINIMUM
        if (arr[i] < minimum) {
            // 7 JE VAIS LE STOCKER DANS LA VARIABLE MINIMUM
            min = arr[i]
        }
    }
    // 8 JE VAIS RETOURNER LE MINIMUM
    return minimum
}
// 9 AFFICHER LE RESULTAT
// console.log(min_1)
// console.log(min_2)

//! RETOUR IMC
// Exercice IMC
// CALCUL DE L'IMC

const person_1 = {
    name: "Jean",
    size: 1.78,
    weigth: 75
}

const person_2 = {
    name: "Marc",
    size: 1.92,
    weigth: 86
}

const person_3 = {
    name: "Sophie",
    size: 1.70,
    weigth: 67
}

const person_4 = {
    name: "Julie",
    size: 1.65,
    weigth: 67
}

// formule de l'IMC : poids / (taille * taille)

// Ecrire la fonction qui retourne l'IMC d'une personne.
// Afficher en console "Un tel a une IMC de ..."


logIMC(person_1)
logIMC(person_2)
logIMC(person_3)
logIMC(person_4)

function getIMC(param) {
    let imc = Math.round(param.weigth * 100 / (param.size * param.size)) / 100
    return imc
}

function logIMC(person) {
    let imc = getIMC(person)
    console.log(`${person.name} a un IMC de ${imc}`)
}

// Exercice++
// const people_2 = [person_1, person_2, person_3, person_4]
// Ecrire une nouvelle fonction qui prend en paramètre le tableau d'objets ci-dessus et retourne l'objet de la personne
// ayant l'IMC le plus élevé.

// 1 DECLARER LA FONCTION 
const people = [person_1, person_2, person_3, person_4]
// 2 APPELER LA FONCTION 
const result = biggestIMC(people)
// 3 LA FONCTION VA RECUPERER L'IMC LE PLUS ELEVE DU TABLEAU
function biggestIMC(arr) {
    // 4 JE VAIS DECLARER UNE VARIABLE BIGGEST QUI VA STOCKER L'OBJET
    let biggest = arr[0]
    // 5 JE VAIS PARCOURIR MON TABLEAU D'OBJETS
    for(let i = 0; i < arr.length; i++) {
        // 6 JE VAIS RECUPERER L'IMC
        let imc = getIMC(arr[i])
        // 7 SI L'IMC EST PLUS GRAND QUE GETIMC(BIGGEST)   
        if (imc > getIMC(biggest)) {
            // 8 JE VAIS LE STOCKER DANS LA VARIABLE BIGGEST    
            biggest = arr[i]
        }
    }
    // 9 JE VAIS RETOURNER L'OBJET BIGGEST
    return biggest
}
// 10 AFFICHER LE RESULTAT EN CONSOLE
console.log(result)








