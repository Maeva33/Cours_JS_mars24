const pizzas = [
    {
        name: 'Margherita',
        price: 11.50,
        ingredients: ['mozzarella', 'tomate', 'basilic ', "huile d'olive"],
        baseTomate: true
    },
    {
        name: 'Regina',
        price: 12,
        ingredients: ['mozzarella', 'tomate', 'origan', 'jambon', 'champignons'],
        baseTomate: true
    },
    {
        name: '4 saisons',
        price: 15,
        ingredients: ['artichaut', 'courgette', 'poivron', 'mozzarella', 'oignon rouge'],
        baseTomate: true
    },
    {
        name: 'Napolitaine',
        price: 14,
        ingredients: ['tomate', 'mozzarella', 'anchois', 'olives noires', 'origan'],
        baseTomate: true
    },
    {
        name: '4 fromages',
        price: 16,
        ingredients: ['tomate', 'mozzarella', 'emmental', 'comté', 'roquefort'],
        baseTomate: true
    },
    {
        name: 'Montagnarde',
        price: 19,
        ingredients: ['mozzarella', 'reblochon', 'gruyère', 'oignon', 'champignon'],
        baseTomate: false
    },
    {
        name: 'Chèvre-miel',
        price: 18,
        ingredients: ['mozzarella', 'chèvre', 'miel'],
        baseTomate: false
    },
    {
        name: 'Hawaïenne',
        price: 17,
        ingredients: ['mozzarella', 'tomate', 'jambon', 'ananas'],
        baseTomate: true
    }
]

//Afficher dans la console une chaîne de caractere de tous les ingrédients de la dernière pizza : "mozzarella, tomate, jambon, ananas" avec une boucle for:

//?console.log(pizzas[pizzas.length - 1].ingredients + "") HACK ; )

let result = "";  //déclare une variable result et lui attribue une valeur initiale de chaîne vide. Cette variable sera utilisée pour stocker la chaîne résultante des ingrédients de la pizza.
let ingredients = pizzas[pizzas.length - 1].ingredients;   
//Déclare une variable ingredients et lui attribue le tableau d'ingrédients de la dernière pizza du tableau pizzas.

for (let i = 0; i < ingredients.length; i++) {   
    // Démarre une boucle for qui itérera sur chaque élément du tableau ingredients. La variable i est initialisée à 0, la boucle continue tant que i est inférieur à la longueur du tableau ingredients, et à chaque itération, i est incrémentée de 1.
    if (i === ingredients.length - 1) {
        // vérifie si l'indice actuel i est égal à la longueur du tableau ingredients moins 1, ce qui signifie que c'est le dernier ingrédient dans le tableau.
        result += ingredients[i];
        //  Si c'est le cas, ajoute l'ingrédient à la variable result.
    } else {
        result += ingredients[i] + ", ";
        // Si ce n'est pas le dernier ingrédient, ajoute l'ingrédient suivi d'une virgule et d'un espace à la variable result.
    }
}
console.log(result);
// Affiche la chaîne result dans la console une fois que la boucle est terminée.
