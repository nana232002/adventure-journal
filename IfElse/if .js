// 1
let movingRating = 21;
if(movingRating>7){
    console.log("highly rated movie"); 
}
else{
    console.log("this movie needs to be improved ");
    
}
//2
const movingBudgrt = 1500000;
if(movingBudgrt>=1000000&& movingBudgrt <=100000000){
    console.log("highly budget"); 
}
else{
    console.log("this movie needs to be improved ");
    
}
//3 
const movieGenere = "Horror";
const movingAge = 21;
if(movingAge< 18 && movieGenere=="Horror"){
    console.log("NOT SUITIBLE"); 
}
else{
    console.log("sutible foe all ");   
}

//4
let movie1 ;

//5
let Age ;
if(Age< 19 && Age >12){
    console.log(" SUITIBLE FOR TEENS "); 
}
else{
    if (Age>18)
    console.log("sutible foe Adult ");   
    else{
        console.log("sutible foe kids "); 
    }
}
//6
let popularityScore = 85; // Example score
let popularityMessage = popularityScore >= 80 ? "Popular movie" : "Less known movie";
console.log(popularityMessage);
//7
let numOfAwards = 5; // Example number of awards
let awardsMessage = numOfAwards % 2 === 0 ? "Even number of awards" : "Odd number of awards";
console.log(awardsMessage);
//8
let actorAge = 22; // Example actor age
let ageGroup = actorAge < 14 ? "Child Actor" 
              : actorAge <= 24 ? "Young Actor" 
              : "Adult Actor";
console.log(ageGroup);

//9
let value=true ;
if(value){
    console.log("welcome"); 
}
else{
    console.log("not invited ");   
}
//10
let screeningDuration = 90; // Example duration in minutes

if (screeningDuration < 40) {
    console.log('Short film');
} else if (screeningDuration <= 120) {
    console.log('Feature film');
} else {
    console.log('Epic length movie');
}
//11
let dayOfWeek = 'Sunday'; // Example day of the week

if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') {
    console.log('Special screening event!');
} else {
    console.log('Regular movie showtimes');
}
//12
let releaseYear = 2005; // Example release year

if (releaseYear >= 2001 && releaseYear <= 2100) {
    console.log('21st century movie');
} else {
    console.log('20th century movie');
}
//13
let movieGenre = 'Action'; // Example genre
let movieRating = 8;       // Example rating

if (movieGenre === 'Action' && movieRating >= 7) {
    console.log('Must Watch');
} else {
    console.log('Check reviews before watching');
}
//14
let ticketPrice = 12; // Example ticket price

if (ticketPrice <= 10) {
    console.log('Discounted ticket');
} else {
    console.log('Regular ticket price');
}
//15
let age = 22;       // Example viewer's age
let isAdult = true; // Example whether the movie is for adults only

if (age > 18 || !isAdult) {
    console.log('Allowed to watch');
} else {
    console.log('Age-restricted content');
}

// 16
const title ="Spider-MAN2" ;
if(title.includes("2")|| title.includes("part")){
    console.log("true"); 
}
else{
    console.log("false ");   
}
