// REVISIONS DU JOUR 8 :
// Les tableaux map et filter

const numbers = [3,2,4]

// tous sauf le dernier :
const result = numbers.map((el,index,arr) => {
    if(index !== numbers.length - 1) {
    return el + 5 
    } else {
        return el
    }
})

console.log(numbers,result)

//? NOTES = .map créé un nouveau tableau avec les éléments modifiés, .sort trie les éléments du tableau, .filter filtre les éléments du tableau. Foreach ne retourne rien, il est utilisé pour exécuter une fonction sur chaque élément du tableau.
