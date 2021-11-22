readlineSync = require("readline-sync");
var score = 0
console.log("Welcome to Rajesh Anuragi's Quizzes :")
function play(question,answer){
  var userinput = readlineSync.question(question)
  if(userinput.toUpperCase()===answer.toUpperCase()){
    console.log("Correct Answer")
    score=score+1
  } else{
    console.log("Incorrect Wrong")
  }
}
var question=[{
  question : "Q.1 What type of cancer is caused by smoking? \n    1.Blood Cancer \n    2.Lung Cancer \n    3.Brain Cancer \n    Enter your Answer: ",
  answer : "2"
},
{
  question : "Q.2 What number of people died in 2019 due to smoking? \n   1.Nearly 8 million \n   2.less 4.5 million \n   3.more 110 million \n   Enter your Answer: ",
  answer : "1"
},
{
  question :  "Q.3 What material is used in making of cigarettes? \n   1.Weed \n   2.Drugs \n   3.Tabbaco \n   Enter your Answer: ",
  answer : "3"
},
{
  question :  "Q.4 What is the name of the game most played in India? \n   1.PUBG \n   2.FREE FIRE \n   3.COD \n   Enter your Answer: ",
  answer : "1"
},
{
  question :  "Q.5 For which IPL team, Virat Kohli plays? \n   1.MI \n   2.CSK \n   3.RCB \n   Enter your Answer: ",
  answer : "3"
},
{
  question :  "Q.6 Which team has won the most IPL trophees? \n   1.MI \n   2.CSK \n   3.KXIP \n   Enter your Answer: ",
  answer : "3"
}];
for(var i=0; i<question.length; i++){
  var currentquestion = question[i]
  play(currentquestion.question,currentquestion.answer)
}
console.log("you have scored", score)