var readlineSync = require ('readline-sync');
const chalk=require('chalk')
var score = 0;

var user = readlineSync.question("What is your name:");
console.log("\nWelcome   "  +user+  "   do you know about Ramayana? lets see!!\n\n");

function quiz(question , answer){
var userAnswer = readlineSync.question(question)
if (userAnswer === answer){
  console.log(chalk.yellow("you are right!"));
  score = score + 1 ;
  console.log("your score is:",score);
  console.log(chalk.green("-----------**************-------------"));
}
else{
  console.log(chalk.green("you are wrong!!")) ;
  score = score -1 ;
   console.log("your score is:",score);
  console.log(chalk.green("----------*****************--------------"));
}
}
var questions=[{
  question : "Who had composed the original Ramayana?\na) Tulsi Das\nb) Sant Ek Nath\nc) Rishi Valmiki\nd) Anhinanda\ntype your answer: ",
    answer: "c"
 
},{
 question :"Lakshmana is considered to be the incarnation of whom?\na) Lord Vishnu\nb)Lord Brahma\nc) Lord Shiva\nd)Sheshnag\ntype your answer: ",
    answer:"d"
} ,{
    
 question :"Ravana was a devotee of whom?\na)Lord Vishnu\nb)Lord Brahma\nc)Lord Shiva\nd)none of the above\ntype your answer: ",
 answer :"c"

} , {
 question :"Bal Kanda, Aranya Kanda , Kishkindha Kanda are parts of?\na)Vedas\nb)Bhagwat Gita\nc)Ramcharitmanas\nd)Mahabharata\ntype your answer: ",

 answer : "c"

},
{
    
 question :"Who was Lakshmana's mother?\na)Kausalaya\nb)Sumitra\nc)Kaikai\nd)Mandodhari",
 answer : "b"

} ,
{
    
 question :"Rama has to lift Shiva's bow to be eligible to marry Sita. What is the name of the bow?\na)Pindaka\nb)Rulapand\nc)Anandaka\nd)Pinaka",
 answer : "d"

} , {
    
 question :"Who was Bharata's Mother?\na)Kaikai\nb)Sumitra\nc)Kunti\nd)Devki ",
 answer : "a"

}, {
    
 question :"Rama is the avatar of which Hindu God?\na)Lord Vishnu\nb)Lord Shiva\nc)Lord Brahma\nd)Lord Surya\ntype your answer: ",
 answer : "a"

} ,{
    
 question :"What is name of Lakshmana's wife?\na)Sita\nb)Urmila\nc)Mandavi\nd)Sutkriti\ntype your answer: ",
 answer : "b"

}];

//for loop
for (var i=0 ; i<questions.length; i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer)
}
console.log("yay! you scored:",score);
