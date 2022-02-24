const numberOfFilms = +prompt('Сколькь фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    moveis: {},
    actors: {},
    genres: [],
    privet: false
};

const a = prompt('Один из последних просмотреных фильмов?',''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотреных фильмов?',''),
      d = prompt('На сколько оцените его?','');

personalMovieDB.moveis[a] = b;
personalMovieDB.moveis[c] = d;

console.log(personalMovieDB);