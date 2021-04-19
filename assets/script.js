//==================================CREATE==================================  .createElement("elementname")

//*********************************/BODY/

var body = document.body;

//*******************************/HEADER/

var headerEl = document.createElement("header");
var highscoresEl = document.createElement("div");
var timerEl = document.createElement("div");

//********************************/MAIN/

var containersEl = document.createElement("main");

//****************/START SECTION/
var startContainerEl = document.createElement("section");
var h1El = document.createElement("h1");
var greetEl = document.createElement("p")

//***************/GAME SECTION/
var gameContainerEl = document.createElement("section");

//QUESTIONS LIST/
var questionsEl = document.createElement("div");
var questListEl = document.createElement("ol");

//LIST ITEMS/
var questLi1 = document.createElement("li");
var questLi2 = document.createElement("li");
var questLi3 = document.createElement("li");
var questLi4 = document.createElement("li");
var questLi5 = document.createElement("li");

//ANSWER LIST/
var answersChoicesEl = document.createElement("div");
var answerChoicesListEl = document.createElement("ol");

//LIST ITEMS/
var answerChoicesLi1 = document.createElement("li");
var answerChoicesLi2 = document.createElement("li");
var answerChoicesLi3 = document.createElement("li");
var answerChoicesLi4 = document.createElement("li");
var answerChoicesLi5 = document.createElement("li");

//CORRECT ANSWERS/
var correctAnswerEl = document.createElement("div");
var correctAnswerListEl = document.createElement("ol");

//LIST ITEMS/
var correctAnswerLi1 = document.createElement("li");
var correctAnswerLi2 = document.createElement("li");
var correctAnswerLi3 = document.createElement("li");
var correctAnswerLi4 = document.createElement("li");
var correctAnswerLi5 = document.createElement("li");

//***********/INITIALS SECTION/
var initialContainerEl = document.createElement("section");
var intitialH2El = document.createElement("h2");
var initialMsg = document.createElement("p");
var initialForm = document.createElement("form");

//********/HIGHSCORES SECTION/
var highscoreContainerEl = document.createElement("section");
var highscoreH2El = document.createElement("h2");
var highscoreForm = document.createElement("form");




//BUILD   name.textContent = ("text")


//PLACE   destination.appendChild(name)

// INITIALIZE
// questionObjects as collection of objects containing a question, an answer, and possible choices

// WHEN I click the start button
// THEN I hide the game div by adding "hide" class to gamediv
//  timer displays and starts
//  set timer to 90 seconds
//  run setinterval to decrement timer every second
//  select questionObject from collection of questionObjects
//  display question and answer choices from questionObject

// When each answer is selected
// THEN compare to correct answer in the questionObject
//  if answer is true. flash correct, add point
//  if wrong flash wrong and subtract 5s from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score

//Display the highscore
//give the user the option to go back or clear highscore

// const startContainer = document.getElementById("startContainer")

// startContainer.addEventListener("click", function () {
//     console.log("hello")
// })


// $("#startContainer").click(function () {
//     console.log("hello")
// })



// function $(element) {
//     return new $$(element)
// }

// function $$(element) {
//     this.isId = element[0] === "#"
//     this._element = element.split("").slice(1).join("")
//     this.element = this.isId ? document.getElementById(this._element) : null;


//     this.click = function (callback) {
//         this.element.addEventListener("click", callback)
//     }

// }

