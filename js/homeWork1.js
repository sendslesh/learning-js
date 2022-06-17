"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let grade, movie;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,  
};

// for (let i=0; i<2, i++)
// {
//     let movie = prompt('Один из последних просмотренных фильмов?', '');
//     let grade  = prompt('на сколько оцените его?', '');

// };

const a = prompt('Один из последних просмотренных фильмов?', ''),
b = prompt('На сколько оцените его?', ''),
c = prompt('Один из последних просмотренных фильмов?', ''),
d = prompt('На сколько оцените его?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);