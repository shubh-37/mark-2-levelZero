var readlineSync = require("readline-sync");

var score = 0;
var question = "What is your name? ";

var userAnswer = readlineSync.question(question);

console.log("Welcome "+ userAnswer + " to DO YOU KNOW SHUBH? ");

function myquiz(question, answer){
  var userAns = readlineSync.question(question);
  if(userAns == answer){
    console.log("YAY its correct!!")
    score = score+1;
  }else{
    console.log("OOPS incorrect :((");
  }
}

var quizArr = [
  {
    question: "What is my favorite food? ",
    answer: "pizza",
  },
  {
    question: "What is my favorite tv show? ",
    answer: "game of thrones"
  },
  {
    question: "Who is my favorite player in cricket? ",
    answer: "sehwag"
  },
  {
    question: "which is my fav fiction movie? ",
    answer: "lord of the rings",
  },
  {
    question: "what is my fav number? ",
    answer: 37,
  }
]

for (let i = 0; i < quizArr.length; i++){
  var currentQues = quizArr[i];
  console.log(myquiz(currentQues.question, currentQues.answer))
}

console.log("Your Score is " + score);