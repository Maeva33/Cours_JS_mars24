// setTimeout(() => {
//     console.log("index_b.js")
// }, 3000)

import movies from '../data/movies.json' assert {type: "json"}
// console.log(movies)

// a. Logger le premier element du tableau movies
// console.log(movies[0])
// b. Logger l'annee du 4eme element du tableau movies
// console.log(movies[3].year)
// c. Logger le titre du dernier element du tableau movies
// console.log(movies[movies.length-1].title)

// écrire les scripts dans des fonctions

// d. Logger le titre du film qui a la meilleure note
const bestMovie = getBestMovie(movies)
// console.log(bestMovie.title)

// difficulté supplémentaire : on peut utiliser la méthode de tableau .sort()
function getBestMovie(arr) {
    let best = arr[0]
    arr.forEach((element) => {
        if (element.rate > best.rate) {
            best = element
        }
    })
    return best
}

// e. Logger le titre du film le plus ancien
function getolderMovie(arr)
{
    let olderMovie = arr[0];
    for(let i; i < arr.length; i ++ )
    {
        if(arr[i].year < olderMovie.year)
        {
            olderMovie = arr[i];
        }
    }
    return olderMovie.year;
}

// console.log(getolderMovie(movies))

// f. Logger un tableau de tous les titres de film qui ont au moins 3 acteurs
//Définit une fonction nommée getMoviesWith3Actors qui prend un tableau d'objets de films comme argument.
function getMoviesWith3Actors(arr) {
    //initialisation du tableau vide qui va contenir les titres des films
    let moviesWith3Actors = []
    // Utilise la méthode forEach() pour parcourir chaque élément du tableau arr (qui est supposé être un tableau d'objets de films).
    arr.forEach((element) => {
        // Vérifie si la longueur de la propriété actors de l'élément actuel est supérieure ou égale à 3 ==> Tableau dans un tableau
        if (element.actors.length >= 3) {
            // Si le film a au moins 3 acteurs, ajoute son titre (element.title) au tableau moviesWith3Actors à l'aide de la méthode push()(.push() est une méthode native de JavaScript qui est utilisée pour ajouter un ou plusieurs éléments à la fin d'un tableau.)
            moviesWith3Actors.push(element.title)
        }
    })
    // Retourne le tableau moviesWith3Actors, qui contient les titres des films ayant au moins 3 acteurs.
    return moviesWith3Actors
}
//console.log(getMoviesWith3Actors(movies))

//! Correction de Paul :
//! const moviesWithMoreThan2Actors = getAllMoviesWithMoreThan2Actors(movies)
//! console.log(moviesWithMoreThan2Actors)

//!function getAllMoviesWithMoreThan2Actors(arr) {
   //! const filteredArray = arr.filter(el => {
      //!  return el.actors.length > 2
  //!  })

  //!  const mappedArray = filteredArray.map(el => el.title)

  //!  return mappedArray

// 1. Ecrire une fonction qui prend en parametre le tableau movies et qui retourne un nouveau tableau de tous les titres de films
function getAllMovieTitles (arr = movies)  {
    let allMovieTitles = []
    arr.forEach((element) => {
    if (element.title) {
        allMovieTitles.push(element.title)
    }
})
    return allMovieTitles
}

console.log(getAllMovieTitles(movies))

//!const resTitles = getTitles(movies)
//!console.log(resTitles);

//!function getTitles(arr) {
   //! return arr.map(el => el.title)
//!}


// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (movies), et qui retourne un nouveau tableau de titres de film de l'annee specifiée
function getMovieYear (arr = movies, year) { 
    let movieYear = []
    arr.forEach((element) => {
        if (element.year === year) {
            movieYear.push(element.title)
        }
    })
    return movieYear
}
//console.log(getMovieYear(movies, year))

//! Correction de Paul :

//!let resultArr = getMoviesByYear(movies, 1994)
//!console.log(resultArr)

//!function getMoviesByYear(arr, yearParam) {
 //!   const filteredArray = arr.filter(el => {
        //! return el.year === yearParam

//!}

 // const emptyArray = []

    // for (let i = 0; i < mappedArray.length; i++) {
    //     for (let j = 0; j < mappedArray[i].length; j++) {
    //         emptyArray.push(mappedArray[i][j])
    //     }
    // }

    // return emptyArray;
// }

// 3. Ecrire une fonction qui prend en parametre un realisateur et un tableau (movies), et qui retourne un nouveau tableau de tous les titres de films de ce realisateur