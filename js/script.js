const personalMovieDB = {
    count: 0,
    moveis: {},
    actors: {},
    genres: [],
    privet: false,
    start: function(){
     personalMovieDB.count = +prompt('Сколькь фильмов вы уже посмотрели?','');
   
        while (this.count=='' || this.count==null || isNaN(this.count)) {
     personalMovieDB.count = +prompt('Сколькь фильмов вы уже посмотрели?','');
        }
   },
    rememberMyFilms:()=>{
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
},
    detectPersonalLevel: function(){
    if(this.count<10){
        console.log('Просмотрено довольно мало фильмов');
    }else if(this.count>=10 && this.count<30){
        console.log('Вы классический зритель');
    }else if(this.count>=30){
        console.log('Вы киноман');
    }else{
        console.log('Произошла ошибка');
    }
},
    showMyDB:(hiddem)=>{
    if(!hiddem){
        console.log(personalMovieDB);
    }
},
    writeYourGenres:()=>{
    for (let i = 1; i <= 3; i++) {
// personalMovieDB.genres[i-1]=prompt(`Ваш любимый жанр под номерои ${i}`,''):
        let genre = prompt(`Ваш любимый жанр под номерои ${i}`,'');
 //if(!genre)    
        if(genre=='' || genre==null){
           console.log('Вы ввели не корректные даные');
           i--;
       }else{personalMovieDB.genres[i-1]=genre;}
    }
 
    personalMovieDB.genres.forEach((item,i)=>{
        console.log(`Любимый жанр ${i+1} - это ${item}`);
    });

},
    toggleVisibleMyDB:()=>{
        if(personalMovieDB.privet){
            personalMovieDB.privet=false;
        }else{personalMovieDB.privet=true;}
    }
};