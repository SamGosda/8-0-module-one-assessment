/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  let movieTitlesArr = [];
  for(let i=0; i<movies.length; i++){
    movieTitlesArr.push(movies[i].title);
  };
  return movieTitlesArr;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  let highestMetascore = 0;
  for(let i=0; i<movies.length; i++){
    if(movies[i].metascore > highestMetascore){
      highestMetascore = movies[i].metascore;
    };
  };
  return Number(highestMetascore);
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  let averageIMDBRating = 0;
  let totatlOfIMDBRatings = 0;
  if(movies.length){
    for(let i=0; i<movies.length; i++){
      totatlOfIMDBRatings += Number(movies[i].imdbRating);
    };
    averageIMDBRating = totatlOfIMDBRatings / movies.length;
  };
  return averageIMDBRating;
}

// movies[i].imdbRating

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  let ratingMoviesCountObj = {};
  let ratingsArr = [];
  if(movies.length){
    for(let i=0; i<movies.length; i++){
      ratingsArr = (Object.keys(ratingMoviesCountObj))
      if(ratingsArr.includes(movies[i].rated)){
        ratingMoviesCountObj[movies[i].rated] += 1;
      }else{
        ratingMoviesCountObj[movies[i].rated] = 1;
      };
    };
  };
  return ratingMoviesCountObj;
}

// console.log(countByRating(exampleMovies));

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  if(movies.length){
    for(let i=0; i<movies.length; i++){
      if(id === movies[i].imdbID){
        return movies[i];
      };
    };
  }
  return null;
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  let moviesWithGenre = [];
  if(movies.length){
    for(let i=0; i<movies.length; i++){
      let lowercaseGenresWithoutCommas = (movies[i].genre).split(',').join('').toLowerCase();
      let arrOfGenres = lowercaseGenresWithoutCommas.split(' ');
      if(arrOfGenres.includes(genre.toLowerCase())){
        moviesWithGenre.push(movies[i]);
      };
    };
  };
  return moviesWithGenre;
}

// console.log(filterByGenre(exampleMovies));

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let moviesThatExisted = [];
  if(movies.length){
    for(let i=0; i<movies.length; i++){
      let yearMovieWasReleased = Number(movies[i].released.split(' ').splice(2));
      if(year >= yearMovieWasReleased){
        moviesThatExisted.push(movies[i]);
      };
    };
  }
  return moviesThatExisted;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  let movieWithHighestBoxOffice = movies[0]
  if(movies.length){
    for(let i=1; i<movies.length; i++){
      let highestBoxOfficeMovieSplit = movieWithHighestBoxOffice.boxOffice.split('');
      let removingDollarSignHighestBoxOffice = highestBoxOfficeMovieSplit.shift();
      let highestBoxOfficeNumber = Number(highestBoxOfficeMovieSplit.join('').split(',').join(''));
      let boxOfficeMovieSplit = movies[i].boxOffice.split('');
      let removingDollarSign = boxOfficeMovieSplit.shift();
      let boxOfficeNumber = Number(boxOfficeMovieSplit.join('').split(',').join(''));
      if(highestBoxOfficeNumber < boxOfficeNumber){
        movieWithHighestBoxOffice = movies[i];
      };
    };
  }else{
    return null;
  };
  return movieWithHighestBoxOffice.title;
}

// let splitMovies = boxOffice.split('') 
// // === ['$', '4', '3', ...]
// let removingDollarSign = splitMovies.shift()
// //  === $
// let boxOfficeWithoutDollarSign = Number(splitMovies.join('').split(',').join(''))
// // //  === 434038008


// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
