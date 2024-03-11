// LUNDI 11 MARS 2024
//CONDITIONS IMBRIQUEES
// if(){
//     if(){
//         //code
//     }else{
//         //code
//     }
// }

// RAPPEL BOUCLE FOR
// for(let index = 0; index < 100; index++){
//     console.log(index)
// }

//array.length, index

// let obj = {}
// let arr = ["Dann","Sami","Karim"] 

// let result = ""


//ecrire la chaîne de caractère en concaténation "Dann, Sami, Karim", "assistent au cours de Javascript."
// for(let index = 0; index < arr.length; index++){
//     if(index == 0){
//         result = arr[index]
//     }else if(index == arr.length - 1){
//         result += " et " + arr[index] + " "
//     }else{
//         result += ",  " + arr[index]
//     }
// }

// result += "assistent au cours de Javascript."
// console.log(result)

// let numbers = [3,1,21,13,8]
// let total = 0

// // A l'aide d'un parcours de tableau, calculer la somme totale du tableau
// for(let index = 0; index < numbers.length; index++){
//     total += numbers[index]
// }
//console.log(total)

// A l'aide d'un parcours de tableau, calculer la somme de la premiere moitié du tableau, et de la somme de la deuxième moitié du tableau

// let total_1 = 0
// let total_2 = 0

// for(let index = 0; index < numbers.length; index++){
//     if(index < numbers.length / 2){
//         total_1 += numbers[index]
//     }else{
//         total_2 += numbers[index]
//     }
// }

//console.log(total_1, total_2)

let people = [
    {
        name: "Jean",
        age: 28,
        hasCar: false
    },
    {
        name: "Daniel",
        age: 17,
        hasCar: false
    },
    {
        name: "Mathilde",
        age: 21,
        hasCar: true
    },
    {
        name: "Oscar",
        age: 12,
        hasCar: false
    },
    {
        name: "Adèle",
        age: 43,
        hasCar: true
    },
    {
        name: "Romane",
        age: 61,
        hasCar: false
    },
    {
        name: "Amandine",
        age: 8,
        hasCar: false
    },
    {
        name: "Johanna",
        age: 25,
        hasCar: true
    },
]

// Calculer la moyenne des âges de people (le total divisé par le nombre d'éléments)

let totalAgePeople = 0
for(let index = 0; index < people.length; index++){
    totalAgePeople += people[index].age
}
let averageAgePeople = totalAgePeople / people.length
// console.log(averageAgePeople)

// Difficulté supplémentaire, afficher la moyenne avec un chiffre après la virgule en utilisant la méthode Math.round()

let averageAgePeopleRound = Math.round(averageAgePeople)
//console.log(averageAgePeopleRound)

// Calculer le nombre de personnes qui ont une voiture

let totalPeopleWithCar = 0
for(let index = 0; index < people.length; index++){
    if(people[index].hasCar){
        totalPeopleWithCar++
    }
}
// console.log(totalPeopleWithCar)

// Difficulté supplémentaire, afficher une phrase qui indique "un tel, un tel, un tel ...  ont une voiture"

let peopleWithCar = ""
for(let index = 0; index < people.length; index++){
    if(people[index].hasCar){
        peopleWithCar += people[index].name + ", "
    }
}
peopleWithCar = peopleWithCar.slice(0, -2)
// console.log(peopleWithCar + " ont une voiture")

// LES FONCTIONS 
// Déclaration d'une fonction et on lui donne un nom
//Exemple :
function logName(parameter){
    //  console.log("Bonjour " + parameter + " Vous avez gafné un million de dollars ! ")
 }
// Cela peremet d'afficher le parametre, il n'y à rien dans la console pour l'instant, car on a pas défini parameter

//Exécution de la fonction
logName("Dann")
logName("Sami")
logName("Karim")

// add(3, 4)
// add(200, 41)
// add(21, 7)

// function add (param1, param2){
//     console.log (param1 + param2)
// }

// function addWithReturn (param1, param2){
//     return param1 + param2
// }
// let resultAddition = addWithReturn(5, 6)

// let names_1 = ["Dann", "Sami", "Karim"]

// function getAllNamesInSentence(arrParameter){
//     let sentence = ""
//     for(let i = 0; i < arrParameter.length; i++){
//         sentence += arrParameter[i] + ", "
//     }
//     return sentence
// }

// let result = getAllNamesInSentence([names_1])


let town = ['Bordeaux', 'Talence', 'Pessac', 'Mérignac']
let sentence = "  "

//Ecrire une fonction qui prend en paramètre un tableau de tableau et qui retourne une phrase 'Bordeaux', 'Talence', 'Pessac', 'Mérignac'

function getAllNamesInSentence(arrParameter){
    let sentence = ""
    for(let i = 0; i < arrParameter.length; i++){
        sentence += arrParameter[i] + ", "
    }
    return sentence
}

let result = getAllNamesInSentence(town)
console.log(result)

let resultFromArrayOfObject = getAllNamesInSentence(people)
console.log(resultFromArrayOfObject)
// 'Jean - Mathilde - Adèle - Johanna'
function getAllNamesInSentence(arr){
    let sentence = ""
    for(let i = 0; i < arr.length; i++){
        sentence += arr[i].name + " - "
    }
    return sentence
}











