// Nouvelle façon d'écrire les fonctions :
const add = (param1, param2) => {
    //console.log("arrow function")
    return param1 + param2
}

const result = add(4, 8)
//console.log(result)

function addParameters(param1, param2) {
   //console.log("standard function")
    return param1 + param2
}

const numbers = [2, 5, 8, 91, 21, 34]
// filtrer le tableau pour récupérer un tableau des nombres impairs

const filterRedNumbers = numbers.filter((element) => { element % 2 === 1 })
// console.log(filterRedNumbers)

// A l'aide de la méthode .map(), retourner un tableau dont les valeurs inférieures à 30 sont multipliées par 2 
 //condition ternaire
    //return element < 30 ? element * 2 : element

const mapNumbers = numbers.map((element) => {
    if (element < 30) {
        return element * 2
    }
    return element
})
//console.log(mapNumbers)

//! Correction de Paul
//! const biggerNumbers = numbers.map((element) => {
//!     if (element < 30) {
//!         return element * 2
//!     return element
//!     }
//! })
//! console.log(biggerNumbers)

// A l'aide de .map(), retourner un tableau dont 1 élèment sur 2 est multiplié par 10
const numbersByTen = numbers.map((num,i) => {
    //Condition ternaire
    return i % 2 === 0 ? num * 10 : num
//     if (i % 2 === 0) {
//         return num * 10;
//     }   else {
//         return num;
//     }
});
// console.log(numbersByTen)

// A l'aide de .map(), retourner un tableau dont tous les éléments sont multipliés par 10, sauf le dernier


// C'est l'ordre des paramètres qui définit leur valeur dans le corps de la fonction
const numbersByTenExceptLast = numbers.map((num, index, arr) => {
    if (index === arr.length - 1) {
        return num
    } else {
        return num * 10
    }
})

// console.log(numbersByTenExceptLast)

 // calculer la somme totale avec la méthode ForEach ( diff avec map : map retourne un tableau, forEach ne retourne rien) : 
 let total = 0
    const resArr = numbers.forEach((el,index,arr) => {
        total += el
    })
    // console.log(total, resArr)

    // Travail sur les variables
let nb1 = 10

// assignation par valeur, par défaut pour les VARIABLES PRIMITIVES
let nb2 = nb1

nb2 += 3

console.log(nb1, nb2)

let arr1 = ["Paul", "Pierre"]
// assignation par référence, par défaut pour les VARIABLES COMPLEXES
let arr2 = arr1

arr2.push("Mathilde")
arr1.push('Simon')

console.log(arr1, arr2)

 



    

   
    


