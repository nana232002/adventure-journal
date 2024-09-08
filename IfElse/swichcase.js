//2
const themeColor ="dark";
switch(themeColor){
    case "dark" :
    console.log("the culor is dark");
    break;
    case "light" :
    console.log("the culor is light");
    break;
    case "night" :
    console.log("the culor is night");
    break;
    default :
    console.log("the culor is undifined");
    break;
}
//3
const notifecatiion ="read";
switch(notifecatiion){
    case "unread": 
    case "new":
    case "unopeaned":
    console.log("you have new notification ");
    break;
    default:
        console.log("you have  no new notification ");
}

//4
const movingRating ="pg";
switch(movingRating){
    case "pg" :
    console.log("pg");
    break;
    case "p" :
    console.log("p");
    break;
    case "pg-13" :
    console.log("pg-13");
    break;
    case "nc-17" :
    console.log("nc17");
    break;
    default :
    console.log("default");
    
}
//5
/*
const audionceScore=50;
switch(audionceScore){
    case (audionceScore>=90):
    console.log("must wach");
    break;
    case (audionceScore>=75&&audionceScore<90):
    console.log("recommended");
    break;
    case (audionceScore<61):
    console.log("skip it");
    break;
    case (audionceScore>=60&&audionceScore<75):
    console.log("mixed reviewd");
    break;
    default:
        console.log("Unknown ");
}
*/
const audionceScore=50;
switch(true){
    case audionceScore>=90:
    console.log("must wach");
    break;
    case audionceScore>=75&&audionceScore<90:
    console.log("recommended");
    break;
    case audionceScore<61:
    console.log("skip it");
    break;
    case audionceScore>=60&&audionceScore<75:
    console.log("mixed reviewd");
    break;
    default:
        console.log("Unknown ");
}
//6
const userInput =true;
switch(typeof(userInput)){
    case "string":
        console.log("It is a string");
        break;
    case "number":
        console.log("It is a number");
        break;
    case "boolean":
        console.log("It is a boolean");
        break;
    default:
        console.log("Unknown type");
}
//7
const relesemonth =10;
switch(true){
    case (relesemonth>9):
    console.log("Q4");
    break;
    case (relesemonth>=7 && relesemonth<10):
    console.log("Q3");
    break;
    case (relesemonth<4):
    console.log("Q1");
    break;
    case (relesemonth>=4 && relesemonth<7):
    console.log("Q2");
    break;
    default:
        console.log("Unknown ");
}