 //=============================================================/BODY/

var body = document.body;

 //=============================================================/HEADER/

var headerEl = document.createElement("header");
var highscoresEl = document.createElement("div");
var timerEl = document.createElement("div");

 //=============================================================/MAIN/

var containersEl = document.createElement("main");

// //=========================================/START SECTION/
var startContainerEl = document.createElement("section");
var h1El = document.createElement("h1");
var greetEl = document.createElement("p")

 //===========================================/GAME SECTION/
var gameContainerEl = document.createElement("section");

        //QUESTION 1/
var questionEl = document.createElement("div");
var choicesListEl = document.createElement("ol");
        //LIST ITEMS/
var choicesLi1 = document.createElement("li");
var choicesLi2 = document.createElement("li");
var choicesLi3 = document.createElement("li");
var choicesLi4 = document.createElement("li");
        //ANSWER/
var answer1 = document.createElement("p");

        //QUESTION 2/
var question2El = document.createElement("div");
var choices2ListEl = document.createElement("ol");
        //LIST ITEMS/
var choices2Li1 = document.createElement("li");
var choices2Li2 = document.createElement("li");
var choices2Li3 = document.createElement("li");
var choices2Li4 = document.createElement("li");
        //ANSWER/
var answer2 = document.createElement("p");

        //QUESTION 3/
var questionEl = document.createElement("div");
var choicesListEl = document.createElement("ol");
        //LIST ITEMS/
var choices3Li1 = document.createElement("li");
var choices3Li2 = document.createElement("li");
var choices3Li3 = document.createElement("li");
var choices3Li4 = document.createElement("li");
console.log("CHOICES#" + choices3Li4)
        //ANSWER/
var answer3 = document.createElement("p");

        //QUESTION 4/
var question4El = document.createElement("div");
var choices4ListEl = document.createElement("ol");
        //LIST ITEMS/
var choices4Li1 = document.createElement("li");
var choices4Li2 = document.createElement("li");
var choices4Li3 = document.createElement("li");
var choices4Li4 = document.createElement("li");
        //ANSWER/
var answer4 = document.createElement("p");


        //QUESTION 5/
var question5El = document.createElement("div");
var choicesListEl = document.createElement("ol");
        //LIST ITEMS/
var choices5Li1 = document.createElement("li");
var choices5Li2 = document.createElement("li");
var choices5Li3 = document.createElement("li");
var choices5Li4 = document.createElement("li");
        //ANSWER/
var answer5 = document.createElement("p");


 //=========================================/INITIALS SECTION/
var initialContainerEl = document.createElement("section");
var intitialH2El = document.createElement("h2");
var initialMsg = document.createElement("p");
var initialForm = document.createElement("form");

 //======================================/HIGHSCORES SECTION/
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

