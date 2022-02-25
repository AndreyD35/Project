

let numberOfFilms;

function start(){
     numberOfFilms = +prompt('Сколькь фильмов вы уже посмотрели?','');

     while (numberOfFilms=='' || numberOfFilms==null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколькь фильмов вы уже посмотрели?','');
     }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    moveis: {},
    actors: {},
    genres: [],
    privet: false
};




function rememberMyFilms(){
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
}

//rememberMyFilms();



function detectPersonalLevel(){
    if(personalMovieDB.count<10){
        console.log('Просмотрено довольно мало фильмов');
    }else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
        console.log('Вы классический зритель');
    }else if(personalMovieDB.count>=30){
        console.log('Вы киноман');
    }else{
        console.log('Произошла ошибка');
    }
}

//detectPersonalLevel();

function showMyDB(hiddem){
    if(!hiddem){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privet);

function writeYourGenres(){
        for (let i = 1; i <= 3; i++) {
// personalMovieDB.genres[i-1]=prompt(`Ваш любимый жанр под номерои ${i}`,''):
            const genres = prompt(`Ваш любимый жанр под номерои ${i}`,'');
            personalMovieDB.genres[i-1]=genres;
        }
}

writeYourGenres();