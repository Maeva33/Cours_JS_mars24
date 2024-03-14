
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

console.log(result)