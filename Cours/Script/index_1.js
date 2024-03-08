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
console.log(`le modèle ${arr[index].model} ${arr[index].year} de la marque ${arr[index].brand} ${isElectricSentence}`)