

const numberOfFilms = +prompt('Сколькь фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    moveis: {},
    actors: {},
    genres: [],
    privet: false
};

/*const a = prompt('Один из последних просмотреных фильмов?',''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотреных фильмов?',''),
      d = prompt('На сколько оцените его?','');

personalMovieDB.moveis[a] = b;
personalMovieDB.moveis[c] = d;*/

for(let i=0; i<2; i++){
    const a = prompt('Один из последних просмотреных фильмов?',''),
          b = prompt('На сколько оцените его?','');

//if(a && b && a.length<50)
    if(a!=null && b!=null && a!='' && b!='' && a.length<50){
         personalMovieDB.moveis[a] = b; 
         console.log('done');
    } else{
        console.log('error');
        i--;
    }

}

if(personalMovieDB.count<10){
    console.log('Просмотрено довольно мало фильмов');
}else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
    console.log('Вы классический зритель');
}else if(personalMovieDB.count>=30){
    console.log('Вы киноман');
}else{
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);