// Sélectionner les div square et changer la couleur d'une case sur deux en blanc

// 1. Sélectionner les div square
// const squares = document.querySelectorAll('.square');
// // 2. Parcourir les div square
// squares.forEach((square, index) => {
//     // 3. Changer la couleur d'une case sur deux en blanc
//     if (index % 2 === 0) {
//         square.style.backgroundColor = 'white';}
//     });
//     // 4. Afficher le résultat dans la console
//     console.log(square.style.backgroundColor);

//! CORRECTION DE PAUL : 
// Selectionner les div square et changer la couleur d'une case sur deux en blanc
// const squares = document.querySelectorAll('.square')

// for (let i = 0; i < squares.length; i++) {
//     if (i % 2 === 0) {
//         squares[i].style.backgroundColor = "white"
//     } else {
//         squares[i].style.backgroundColor = "black"
//     }
// }

// CREATION D'ELEMENT DU DOM
const row = document.querySelector('.row')

// Consigne : créer 5 éléments noir ou blanc insérés dans la div row
const square = document.createElement('div')
square.style.width = "80px"
square.style.height = "80px"
square.style.backgroundColor = "white"
row.appendChild(square)




