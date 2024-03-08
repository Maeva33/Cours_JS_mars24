// VENDREDI 8 MARS
// OBJETS 
let person1 = {
    name:'Max',
    vehicle: 'car',
    town: 'Paris',
}
let person2 = {
    name:'Nat',
    vehicle: 'bike',
    town: 'Bordeaux',
}
let person3 = {
    name:'Cathy',
    vehicle: 'car',
    town: 'Lyon',
}

// écrire la condition pour afficher "{un tell}" a une voiture
// if (person1.vehicle === 'car') {
    // console.log(`${person1.name} a une voiture`);
// } else {
    // console.log(`${person1.name} n'a pas de voiture`);
// }

// if (person2.vehicle === 'car') {
//     console.log(`${person2.name} a une voiture`);
// } else {
//     console.log(`${person2.name} n'a pas de voiture`);
// }

// if (person3.vehicle === 'car') {
//     console.log(`${person3.name} a une voiture`);
// } else {
//     console.log(`${person3.name} n'a pas de voiture`);
// }

// CORRECTION :
// let personToTest = person1 -----variable qui peut changer
// if (personToTest.vehicle === 'car') {  ------si la personne à tester appeler la variable vehicle est strictement egale à "car"
// console.log(`${personToTest.name} a une voiture`); -----alors la personne à une voiture
// } else {
// console.log(`${personToTest.name} n'a pas de voiture`); ----sinon la personne n'a pas de voiture
// }

// CONDITIONS IMBRIQUEES : 
// TEST pour savoir : si la personne doit se rendre à Paris, et ensuite si la personne peut :
//  un tel n'a pas besoin de se rendre à Paris
// un tel n'a pas besoin de se rendre à Paris

// let personToTest = person1
// if(personToTest.town == 'Paris' && personToTest.vehicle == 'car') {
    // console.log(`${personToTest.name} n'a pas besoin de se rendre à Paris`);
// } else {
    // if(personToTest.vehicle === "car") {
        //console.log (`${personToTest.name} peut se rendre en voiture à Paris`);
    // } else {
        // console.log(`${personToTest.name} ne peut se rendre en voiture à Paris`);
    // }
    // console.log(`${personToTest.name} ne peut se rendre en voiture à Paris`);
// }

// TABLEAUX : Array[]
const myArray = [2,5,7,9];
const sumResult = myArray [0] + myArray [1] +  myArray [2] + myArray [3] 
// console.log(sumResult);

const arr = [
    {
        brand: "Citroen", 
        model: "Berlingo", 
        year: 2014, 
        electric: false
    },
    {
        brand: "Renault", 
        model: "Kangoo", 
        year: 2018, 
        electric: true
    },
]

let isElectricSentence = "est électrique"

// tester si la prorpiété electric
const index = 0

if(arr[index].electric ===false){
    isElectricSentence = "n'est pas électrique"
} 
// console.log(isElectricSentence)
// console.log(`le modèle ${arr[index].model} ${arr[index].year} de la marque ${arr[index].brand} ${isElectricSentence}`)
 
// LES BOUCLES
// Syntax: mettre un indice, tant qu'il est inf à 10, à chaque passage je rajoute 1 à cet index (incrémentation)
 
// console.log('before loop')

// let sum = 0

// for(let index = 0; index < 50; index ++){
//     if(index % 3=== 0 ) {
//         console.log('multiple de 3 :' + index);
//     }
// }


// let sum = 0 

// for(let index = 0; index < 5; index ++) {
//     sum += index
//  }
//  console.log(sum)
    
// console.log('📌before loop')

// Exo calculer la somme des nbr impair:

// let sum = 0;

// for(let index = 0; index < 20; index ++) {
//     if (index % 2 === 1) {
//     sum += index
//     }

//  }
//  console.log(`📐` + sum)

//  let letters = ["p","f","t","g"]
//  console.log(letters.length)

//  for(let index = 0; index < letters.length; index++) {
//     console.log(letters[index])
//  }

//  calculer et afficher la somme des nombres supérieurs à 10
let numbers = [12,4,67,32,11,3,1,14]

let sum = 0;

// for (let index = 0; index < numbers.length; index++) {
//    if (numbers[index] > 10) {
//     sum += numbers[index];
//    }
//    }
//    console.log('La somme des nombres 🚀supérieurs à 10 est : ' + sum);
 
// Exo difficile : Calculer et afficher la somme des nombres supérieurs à la moyenne
// une premiere boucle for pour calculer la moyenne, puis une seconde boucle for pour faire la comparaison avec cette moyenne.


// // Moyenne
// for (let i = 0; i < numbers.length; i++) {
//      (sum += numbers[i]);
// }
// let moy = sum / numbers.length;

//     console.log(result)

//     //SECONDE BOUCLE : 
// let total = 0
// for(let i = 0; i < numbers.length; i++) {
//    if (total += numbers[i]); {
//     }
// }

//MANIPULATION DU DOM :
const stripes = document.querySelectorAll('.stripe')
// récupérer toutes les div en tablo; 

// for(let i = 0; i <stripes.lentgh; i++){
//     stripes[i].style.backgroundColor= "green";
// }

for (let i = 0; i < stripes.length; i++) {
    if (i % 2 === 0) {
        stripes[i].style.background = 'linear-gradient(to right, blue, green)'; 
    } else {
        stripes[i].style.background = 'linear-gradient(to right, red, yellow)'; 
    } 
}