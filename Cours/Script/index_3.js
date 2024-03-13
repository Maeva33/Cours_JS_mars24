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
    //console.log(`${person.name} a un IMC de ${imc}`)
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
    // 4 JE VAIS DECLARER 2 VARIABLES QUI VA STOCKER L'OBJET
    let maxImc= getIMC(arr[0])
    let maxImcPerson = arr[0]

    // 5 JE VAIS PARCOURIR MON TABLEAU D'OBJETS
    for(let i = 1; i < arr.length; i++) {
        // 6 SI L'ELEMENT DU TABLEAU EST PLUS GRAND QUE LE MAXIMUM   
        if (getIMC(arr[i]) > maxImc) {
            // 7 JE VAIS LE STOCKER DANS LA VARIABLE MAXIMUM 
            maxImc = getIMC(arr[i])
            maxImcPerson = arr[i]
    }
    // 9 JE VAIS RETOURNER LE MAXIMUM
    return maxImcPerson
    }
}
// 10 AFFICHER LE RESULTAT EN CONSOLE
//console.log()

// INTERRACTION AVEC LE DOM
// EXECUTER LA FONCTION QUERYSELECTOR
//! ATTENTION DANS LE SELECTOR(CLASS OU ID) 
const btnBlue = document.querySelector(".btn-blue")
btnBlue.textContent = "Cliquez-moi"
btnBlue.style.color = "white"

// PHRASE POUR EXPLIQUER LE CODE : Lorsqu'un clic de souris se produit sur le bouton avec la class 'btnBlue', exécute la fonction 'onBtnClick'". Assurez-vous simplement que la fonction onBtnClick est définie quelque part dans votre code pour qu'elle puisse être exécutée correctement.
// EXPLIQUER add.EventListener = C'est une méthode en JavaScript qui permet d'ajouter un écouteur d'événement à un élément HTML. Cela signifie que le code réagit à un événement particulier sur cet élément.
// click = événement de clic de souris
btnBlue.addEventListener("click", onBtnClick)


// // Exercice quand on clique sur le bouton, changer le texte du bouton en "Clic OK" :
// let btnClick = false 

// function onBtnClick() {
//    if (btnClick) {
//          btnClick = false
//        btnBlue.textContent = "Cliquez-moi"
//    } else {
//        btnClick = true
//        btnBlue.textContent = "Clic OK"
//    }
// }

// //Même chose avec un bouton rouge
// const btnRed = document.querySelector(".btn-red")
// btnRed.textContent = "Cliquez-moi"
// btnRed.style.color = "white"
// btnRed.addEventListener("click", onBtnClickRed)

// let btnClickRed = false

// function onBtnClickRed() {
//     if (btnClickRed) {
//         btnClickRed = false
//         btnRed.textContent = "Cliquez-moi"
//     } else {
//         btnClickRed = true
//         btnRed.textContent = "Clic OK"
//     }
// }

// //Même chose avec un bouton jaune 
// const btnYellow = document.querySelector(".btn-yellow")
// btnYellow.textContent = "Cliquez-moi"
// btnYellow.style.color = "white"
// btnYellow.addEventListener("click", onBtnClickYellow)

// let btnClickYellow = false

// function onBtnClickYellow() {
//     if (btnClickYellow) {
//         btnClickYellow = false
//         btnYellow.textContent = "Cliquez-moi"
//     } else {
//         btnClickYellow = true
//         btnYellow.textContent = "Clic OK"
//     }
// }

 //INTERACTION AVEC LE DOM
 const btnsArray = document.querySelectorAll(".btn")
const container = document.querySelector(".container")

for (let i = 0; i < btnsArray.length; i++) {
    btnsArray[i].isClicked = false
    btnsArray[i].addEventListener("click", onBtnClick)
}

function onBtnClick(e) {
    e.currentTarget.isClicked = !e.currentTarget.isClicked
    container.style.backgroundColor = e.currentTarget.textContent
    if (e.currentTarget.isClicked) {
        e.currentTarget.style.transform = "rotate(180deg)"
    } else {
        e.currentTarget.style.transform = "rotate(0deg)"
    }
}

//Exercice : quand on clique sur un des boutons, changer la couleur de fond du container en aléatoire
//pour générer la fonction aléatoire : Math.random() ==> 0 < nb < 1
//En css, on passera une couleur en rgb(0, 0, 0) 

// CHANGER LA COULEUR DE FOND DU CONTAINER EN ALEATOIRE
const btnsArray = document.querySelectorAll(".btn")
const container = document.querySelector(".container")

//GENERER LA FONCTION ALEATOIRE : 
Math.random()







}

















