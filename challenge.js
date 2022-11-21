// stores correct answers
let answers = 0;

let  playerRank = 0;

const main = document.querySelector("main");


const question1  = prompt("what is my name");
const question2 = prompt("how old am i");
const  question3 = prompt("what year is it");
const question4  = prompt("what month is it");
const question5 = prompt("what day is it");

const answer1 = ("Xavier").toLowerCase();
const answer2 = ("24");
const answer3 = ("2022");
const answer4 = ("November").toLowerCase();
const answer5 =("Monday").toLowerCase();

if (question1 === answer1) {
    answers += 1;
}
if (question2 === answer2) {
    answers +=1;
}
if (question3 === answer3) {
    answers +=1;
}
if (question4 === answer4) {
    answers +=1;
}
if (question5 === answer5) {
    answers +=1;
}


if (answers == 5) {
    playerRank == ("gold");

} else if (answers >= 3) {
    playerRank == ("silver");

} else (answers >= 1) ;{  
    playerRank = ("bronze");
}

main.innerHTML = ` <h2>you got ${answers} correct 
youre rank is ${playerRank}</h2>`;
