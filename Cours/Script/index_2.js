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

let numbers = [3,1,21,13,8]
let total = 0

// A l'aide d'un parcours de tableau, calculer la somme totale du tableau
for(let index = 0; index < numbers.length; index++){
    total += numbers[index]
}
//console.log(total)

// A l'aide d'un parcours de tableau, calculer la somme de la premiere moitié du tableau, et de la somme de la deuxième moitié du tableau

let total_1 = 0
let total_2 = 0

for(let index = 0; index < numbers.length; index++){
    if(index < numbers.length / 2){
        total_1 += numbers[index]
    }else{
        total_2 += numbers[index]
    }
}

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
console.log(averageAgePeopleRound)










