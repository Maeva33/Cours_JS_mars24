// alert('Salut tout le monde')

// console.log("Hello console")

var myNumber = 31 

var myName = "Maëva"

// console.log(myName)

let myLastname = "Rodrigues"
const myAge1 = 39
let myAge2 = 40 

myAge2 = 21

// console.log(myAge2)

// MANIP NBRE
let firstNb = 23 
// let result = firstNb + 12 
// result = result + 10
// result += 10

// result -= 5

// result *= 2
// result /= 8


// console.log(result)

// result = 15
// result % 3
// const moduloresult = result % 3
// console.log(moduloresult)

// LES CHAINES DE CARACTERE 
const firstName = "Mae"
const lastName = `Rodrigues`

// const sentence = 'je m\'appelle Mae'

//ES6 = 2015 JS MODERNE
// const sentence = `je m'appelle Mae`

// const fullName = ${firstName} + ---  ${lastName}
// console.log(fullName)

let name1 = "J'habite à "
name1 += `Talence`
// console.log(name1)

let myTown = "Bordeaux"
let myArea = 33

const result = myTown + myArea
// console.log(result2)

// BOOLEENS
let myBoolean = true
let myBoolean2 = false

if(myBoolean2) {
    // console.log(`ma condition est vraie`)
} else {
    // console.log(`ma condition est fausse`)
}

let myCurrentAge = 39
let legalAgeToDrive = 18

// if(myCurrentAge >= legalAgeToDrive) {
    // console.log('Tu as le droit de conduire')
// } else {
    // console.log(`Tu n'as pas le droit de conduire`)


// 
let age1 = 12
let age3 = 23 
let age4 = 30
let age5 = 70


// 4 conditions chaînées pour afficher les résultats suivants : 
// "Tu as moins de 10 ans"
// "Tu as entre 11 et 30 ans
// "Tu as netre 31 et 50 ans"
//"Tu as plus de 50 ans"

if(age1 <= 10)  {
    //console.log("Tu as moins de 10 ans")
} else if (age1 <= 30) {
    //console.log("Tu as entre 11 et 30 ans")
} else if (age1 <= 50) {
    //console.log("Tu as netre 31 et 50 ans")
} else  {
    //console.log("Tu as netre 31 et 50 ans")
} 

//variables complexes : les objets

const myIdentity = {
    firstname: "Maëva",
    lastname:"Rodrigues",
    age: 39,
    town: "Bordeaux"
}

// console.log(myIdentity.firstname)

const fullnameFromIdentity = myIdentity.firstname + ' ' + myIdentity.lastname
// console.log(fullnameFromIdentity)

const myHello = `Bonjour je m'appelle` +  `${myIdentity.firstname}` +  `j'ai` +  `${myIdentity.age}` + `et j'habite` +  `${myIdentity.town}`
//console.log(myHello)

// test pour savoir si la personne est un mineur qui habite bordeaux

const personn1 = {
    firstname: "Pierre",
    lastname:"Doazan",
    age: 17,
    town:"Bordeaux"
}
const personn2 = {
    firstname: "Mathilde",
    lastname:"Doazan",
    age: 15,
    town:"Paris"
}
const personn3 = {
    firstname: "Paul",
    lastname:"Doazan",
    age: 35,
    town:"Marseille"
}

let personToTest = personn1


// if(personnToTest.town === "Bordeaux" && personnToTest.age <18) {
    // console.log(`${personToTest.firstname} est mineur et habite Bordeaux`)
// } else {
    // console.log(`${personToTest.firstname} n'est pas mineur et n'habite pas Bordeaux`)
// }

// LES TABLEAUX : Array
let myArray = ["Sara","Alice","Antoine","Stéphane"]
let myArrayOfObjects = [
    {name: 'Sara', gender:`f`},
    {name: 'Alice', gender:`f`},
    {name: 'Antoine', gender:`m`},
    {name: 'Stéphane', gender:`m`}
]



let fName = myArray [3]
// exo sarah, alice et stéphane sont partis
console.log(`${myArray[0]}, ${myArray[1]} et ${myArray[3]} sont partis`)

let objectToTest = myArrayOfObjects [0]
let gone ="parti"

if(objectToTest.gender === "f") {
    gone += `e`
};

console.log(`${objectToTest.name} est ${gone} !`)

