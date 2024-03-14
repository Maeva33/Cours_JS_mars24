
//Afficher dans la console une chaîne de caractere de tous les ingrédients de la dernière pizza : "mozzarella, tomate, jambon, ananas" avec une boucle for:

//?console.log(pizzas[pizzas.length - 1].ingredients + "") HACK ; )

// let result = "";  //déclare une variable result et lui attribue une valeur initiale de chaîne vide. Cette variable sera utilisée pour stocker la chaîne résultante des ingrédients de la pizza.
// let ingredients = pizzas[pizzas.length - 1].ingredients;   
//Déclare une variable ingredients et lui attribue le tableau d'ingrédients de la dernière pizza du tableau pizzas.

// for (let i = 0; i < ingredients.length; i++) {   
//     // Démarre une boucle for qui itérera sur chaque élément du tableau ingredients. La variable i est initialisée à 0, la boucle continue tant que i est inférieur à la longueur du tableau ingredients, et à chaque itération, i est incrémentée de 1.
//     if (i === ingredients.length - 1) {
//         // vérifie si l'indice actuel i est égal à la longueur du tableau ingredients moins 1, ce qui signifie que c'est le dernier ingrédient dans le tableau.
//         result += ingredients[i];
//         //  Si c'est le cas, ajoute l'ingrédient à la variable result.
//     } else {
//         result += ingredients[i] + ", ";
//         // Si ce n'est pas le dernier ingrédient, ajoute l'ingrédient suivi d'une virgule et d'un espace à la variable result.
//     }
// }
// console.log(result);
// Affiche la chaîne result dans la console une fois que la boucle est terminée.

//! CORRECTION DE PAUL :
import pizzas from "../data/pizzas.json" assert {type: "json"}

let result = ""
const ingredientsArray = pizzas[pizzas.length - 1].ingredients

for (let i = 0; i < ingredientsArray.length; i++) {
    if (i !== ingredientsArray.length - 1) {
        result += ingredientsArray[i] + ", "
    } else {
        result += ingredientsArray[i] + " !"
    }
}

// console.log(result)

// Afficher le nom de la pizza la plus chère :

let maxPrice = [0] 
let pizzaName = ""
for (let i = 0; i < pizzas.length; i++) {
    if (pizzas[i].price > maxPrice) {
        maxPrice = pizzas[i].price
        pizzaName = pizzas[i].name
    }
}
//console.log(pizzaName)

//TODO Initialisation des variables :

// TODO Nous initialisons deux variables : maxPrice qui stockera le prix maximum trouvé et pizzaName qui stockera le nom de la pizza correspondant à ce prix maximum. maxPrice est initialisé à [0] et pizzaName est initialisé à une chaîne vide "".
// TODO Boucle de parcours des pizzas :

//TODO  Une boucle for pour parcourir toutes les pizzas dans le tableau pizzas.
// TODO La condition i < pizzas.length garantit que  chaque pizza est parcourue dans le tableau.

// TODO Vérification du prix maximum :
// TODO Dans chaque itération de la boucle, le prix de la pizza actuelle est comparée (pizzas[i].price) avec le prix maximum trouvé jusqu'à présent (maxPrice).

//TODO  Si le prix de la pizza actuelle est supérieur au prix maximum actuel, cela signifie que nous avons trouvé une nouvelle pizza avec un prix plus élevé.
//TODO  Nous mettons donc à jour maxPrice avec le prix de la pizza actuelle et pizzaName avec le nom de cette pizza.

//TODO  Affichage du nom de la pizza la plus chère :
// TODO Une fois que la boucle a parcouru toutes les pizzas et a trouvé la pizza la plus chère, nous affichons le nom de cette pizza dans la console en utilisant console.log(pizzaName).

// TODO En résumé, ce code parcourt toutes les pizzas pour trouver celle avec le prix maximum, puis affiche le nom de cette pizza.

// ! CORRECTION DE PAUL :

let maxPizza = pizzas[0]


function getMostExpensivePizza() {
}
for (let i = 1; i < pizzas.length; i++) {
    if (pizzas[i].price > maxPizza.price) {
        maxPizza = pizzas[i]
    }
}
console.log(`La ${maxPizza.name} a pour ingrédients ${maxPizza.ingredients} et coûte ${maxPizza.price}`)

// En paramètre, un tableau de pizzas, on retourne la pizza la plus chère
const mostExpPizza = getMostExpensivePizza(pizzas)
console.log(mostExpPizza.name)

// En paramètre, un tableau de pizzas, on retourne la pizza la plus chère
function getMostExpensivePizza(arrPizzas) {
    let maxPizza = arrPizzas[0]

    for (let i = 1; i < arrPizzas.length; i++) {
        if (arrPizzas[i].price > maxPizza.price) {
            maxPizza = arrPizzas[i]
        }
    }

    return maxPizza
}


// console.log(`La ${maxPizza.name} a pour ingrédients ${maxPizza.ingredients} et coûte ${maxPizza.price}`)

import pizzas from "../data/pizzas.json" assert {type: "json"}
import pizzas_2 from "../data/pizzas_2.json" assert {type: "json"}

// Ecrire une fonction qui cherche la pizza la plus chère parmi 2 tableaux passés en paramètre
// Array.push() => la méthode qui permet d'ajouter un élément à la fin d'un tableau
const ultimate = getUltimatePizza(pizzas, pizzas_2)
console.log(ultimate.name)

function getUltimatePizza(arr1, arr2) {
    let totalArray = []
    for (let i = 0; i < arr1.length; i++) {
        totalArray.push(arr1[i])
    }
    for (let i = 0; i < arr2.length; i++) {
        totalArray.push(arr2[i])
    }

    return getMostExpensivePizza(totalArray)
}







