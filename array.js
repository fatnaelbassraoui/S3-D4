/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".


let me = {
  name: 'Joh',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css']
}

me.skills.pop()
console.log(me)*/

/* ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.


  let arr = [];

  for (i1=1; i1<=100; i1+=2){
      arr.push(i1)
     

  }
  console.log(arr); */

/* ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 
  let arrNum = []  
  for (i2=0; i2<100; i2++){
 arr= Math.floor(Math.random(arrNum)*100)+1;
 arrNum.push(arr)
}
  console.log(arrNum);*/
/* ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 
  let arrPari = [22,67,88,33,66,97];
  
  for (j=0; j<arrPari.length; j++){
    if (arrPari[j] % 2 == 0  ){
      console.log(arrPari[j])
    }
  }
  */
  /* ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 

let myArray = [3, 6, 1, 5, 8, 90];
var sum = 0;
for (i3=0; i3< myArray.length; i3++){
  sum += myArray[i3];
}
console.log(sum);*/ 

/* ESERCIZIO 6
  Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.

 let num = [3, 6, 1, 5, 8, 90];
 let incr = 1;
for (i4=0; i4<num.length;i4++){
  let risultato= num[i4] + incr;
  console.log("il risultato dei valori dell'array inceremtati di 1 è: "+risultato);
 }
 */ 

/* ESERCIZIO 7 (EXTRA)
  Scrivi del codice per eliminare solo i valori PARI da un array.

let elenco = [2,3,4,5,6,7,8,9,];

for (let i5= 0; i5< elenco.length; i5++){ // "i" punta il valore di elenco. e vanno da 0 a n+
  if (elenco[i5] % 2 == 0 ){
    
    elenco.splice(i5,1)
    console.log(elenco[i5])


  }
}

console.log(elenco)*/ 

/* visualizza gli elementi dell'array elenco dall'ultimo al primo
let elenco2 = [2,3,4,5,6,7,8,9,];

for (let i6=elenco2.length-1; i6> 0; i6--){

  console.log(elenco2[i6])
}
*/ 

/* ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; 
  ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), 
  SENZA AMMETTERE DUPLICATI.

let myArr =[];
let i7=0;
while (i7 < 10){
  let tmp = Math.floor(Math.random()*11);
  if (!myArr.includes(tmp)){
    myArr[i7] = tmp;
    i7++; 
    continue;
  }
}
console.log(myArr) */
/* ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]


let stringa = ["EPICODE", "is", "great"];
stringa [0] = stringa[0].length;
stringa [1] = stringa[1].length;
stringa [2] = stringa[2].length;
console.log(stringa)
*/
/* ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]


let numeri1 = [1, 3, 5];
numeri1.reverse();
console.log(numeri1);*/

/* ESERCIZIO 11
  Scrivi del codice per estrarre il massimo e minimo valore numerico da un array.

let listArr = [2,7,9,];
console.log(Math.max( ...listArr));

let elencoArr2 = [99,120,450,789,33,99];

function minimo(ary) {
  return Math.min.apply(Math, ary);
}

console.log(minimo([99,120,450,789,33,99])); 

function massimo(ary) {
  return Math.max.apply(Math, ary);
}

console.log(massimo(elencoArr2)); 

//secondo metodo usando le function
function MyMax(myarr){
  var al = myarr.length;
  maximum = myarr[al-1];
  while (al--){
      if(myarr[al] > maximum){
          maximum = myarr[al]
      }
  }
          return maximum;
};
var myArray1 = [1, 5, 6, 2, 3];
var m = MyMax(myArray1);
console.log(m)




function MyMin(myarr){
  var al = myarr.length;
  minimum = myarr[al-1];
  while (al--){
      if(myarr[al] < minimum){
          minimum = myarr[al]
      }
  }
  return minimum;
};
var myArray3 = [1, 5, 6, 2, 3];
var m = MyMin(myArray3);
console.log(m)
*/
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
let movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi del codice per trovare il film più vecchio nell'array fornito.


let i = 0;
let x = movies[i].Year
while (i < movies.length) {
  if (x > movies[i].Year){
    x = movies[i].Year
  }
  i++;
}
console.log(x);
*/

/* ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.

let x = 0;
for (i=0; i< movies.length; i++){
  x++;
}
console.log(x);*/
/*console.log(movies.length);*/
/* ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.


let film =[];

for (i=0; i < movies.length; i++){
  film[i]=movies[i].Title
  
}
console.log(film);*/


/* ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

let millenio =[] ;

for (i=0; i< movies.length; i++){
  if (movies.Year > 2000){
    millenio.push(Year)}
  
}
console.log(millenio)
/* ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.

const id = 'tt0355702'

for (i=0; i < movies.length; i++){
  if (movies[i].imdbID == id ){
    let id2 = movies[i]

    console.log(id2)
    break;
  }
}*/

/* ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.


let anni =[];
let sum 
let x = 0;

while (x < movies.length){
  anni[x]=movies[x].Year*1
  x++;
}

sum = movies.map(item =>item.Year*1).reduce((prev,curr) => prev + curr,0);
console.log(sum);*/

/* ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.


let lord = [] // creo un array vuoto
let world = "lord"; // creo una variabile con la parola "lord"
let srcWorld = world.toLowerCase(); // mi ritorna le lettere della parola "lord" nella variabile tutte minuscolo
for (i=0; i < movies.length; i++){// attivo il ciclo
   let lord= movies[i].Title; // assegno all'array lord il titolo della posizione attuale di movies
   let lord2= lord.toLowerCase(); //assegno alla nuova variabile lord2 il titolo in minuscolo
   if (lord2.includes(srcWorld)){ // chiedo se all'interno di lord2 è presnte la parola lord
    console.log(movies[i]);  // se è vero mi stampa i film
   }else{
    console.log("non trovato")
   }
}*/
/*
let str = "Lord" //creazione variabile di ricerca 
let strSrc = str.toLowerCase(); //resa in minuscolo
for (let i = 0; i < movies.length; i++) {
  let lord = movies[i].Title; //assegno il titolo del movies[i]
  let lord2 = lord.toLowerCase(); //titolo reso minuscolo
  let filmSrc = movies[i] //assegnato tutto l'oggetto movies[i]
  if (lord2.includes(strSrc)){ //chiesto se nel titolo reso minuscolo c'è la variabile resa minuscola
    console.log(filmSrc); //return tutto l'oggetto movies[i] assegnato alla variabile filmSrc
  } else {
    console.log("Non trovato");
  }
}*/
/*
let today = new Date();
let hourNow = today.getHours();

switch (hourNow ){
  case 19:
    console.log("good night");
    break;
    case 20: 
    console.log("good evening");
    break;
    case 10:
      console.log("good morning");
      break;
      default:
        console.log("welcome");
        break
}

*/

/*a) Crea un ciclo che vada da 111 a 101 inclusi, e visualizzi nella console tutti i valori compresi nell’intervallo*/


/*
for (i=111; i>=101; i--){
    console.log(i);
}*/


/*b) crea un ciclo che vada da 5432 a 5399 inclusi, e visualizza solamente i valori pari

for (i=5432; i>=5399; i--){
  if (i %2 == 0){
    console.log(i);
  }
}*/

/*c) Crea un array vuoto chiamato importo. Popola quindi l’array attraverso dei campi calcolati: 
l’array deve contenere la tabellina del due (2 4 6 8 10 12 14 16 18 20), ma devi inserire i valori
 facendoli calcolare da PHP
let importo = [];
let total=2;


for (j5=0; j5<21 ; j5++){
  importo.push(j5);
  let summ = importo[j5]*2;
  console.log(summ)
  
}*/


/*d) Crea un array chiamato CAP contenente i seguenti valori: 00100 00173 00127 00148 0014721000 21001 21004 2100800078 00079 00089
Crea quindi un ciclo che visualizzi ciascun elemento contenuto in CAP*/

let cap = ["00100" , "00173" , "00127" , "00148" , "0014721000" , "21001" ,"21004" , "2100800078" , "00079" , "00089"];

console.log(cap);
 
  

/*e) hai ricevuto dei dati grezzi in questa forma:*/


let Dresses= [
 [ {
  codiceAbito: "34fas",
descrizione: "Tshirt casual",
taglieDisponibili:["M","L" , "XL"] ,
coloriDisponibili:["bianco", "nero ", "rosso"],
note:"Linea Bio",
disponibilità: 324,
prezzo : 89.00, 
moda: "unisex"
},

{
codiceAabito: "fgf22s",
descrizione: "Tshirt elegante",
taglieDisponibili:[" M "],
coloriDisponibili: "bianco",
note: "realizzata con materiale sostenibili",
disponibilità: 464,
prezzo: 29.00,
moda : "unisex"
}]

[{
codiceAabito: "ttf0023",
descrizione: "Pantaloni Jeans",
taglieDisponibili: ["S", "M", "L", "XL"],
coloriDisponibili: "jeans",
note: "da promuovere ai saldi",
disponibilità: 800,
prezzo: 39.99,
moda: "donna"
}]

]
console.log(Dresses)
/*Sapendo che le taglie disponibili sono: XS S M L XL XXL
e sapendo che moda può essere: bambino uomo donna unisex

realizza una struttura dati in grado di accogliere queste informazioni, e altri future, basate sulla medesima struttura dati*/