//=====================================================================DEPENDENICES

//highscores link
var highscores = document.getElementById("highscores");
//countdown timer
var timer = document.getElementById("timer");
//question & answer choice cards
var questionCards = document.getElementById("gameContainer");
//card that gives the user the ability to enter initials
var initialsCard = document.getElementById("initialsContainer");
//highscore card
var scoreCard = document.getElementById("scoresContainer");

                //Buttons
//start button
var startButton = document.getElementById("startButton");

//answerButtons
var buttons = document.querySelector(".buttons");

//submit button

//clear records button




//=====================================================================STARTING DATA

//Questions stored as an object with answers as key/value pairs: 
// var questions = [
//         {
//                 question: "What does DOM stand for?"  
//                 a: "Document Object Method."
//                 b: "Donuts Over Money."
//                 c: "Don't Operate Machinery."
//                 d: "Domain Over-ride Methods."
//                 answer: "a"
//         },
//         {
//                 question: "What is an Array?"  
//                 a: "A type of laser beam that is used for severe acne treatment."
//                 b: "A data structure that contains a group of elements, each identified by at least one array index or key."
//                 c: "A container for storing data values."
//                 d: "A data structure made up of text and contains, letter, numbers, symbols, punctuation, and even emoji."
//                 answer: "b"
//         },
//         {
//                 question: "Function paremeters are enclosed by which of the following?:"  
//                 a: "{}"
//                 b: "[]"
//                 c: "++"
//                 d: "()"
//                 answer: "d"
//         },
//         {
//                 question: "What is a String?"  
//                 a: "I piece of fabric, often used to bind things together using knots."
//                 b: "A data structure made up of text and contains, letter, numbers, symbols, punctuation, and even emoji."
//                 c: "A container for storing data values."
//                 d: "A data object made up of text and contains, letter, numbers, symbols, punctuation, and even emoji."
//                 answer: "b"
//         },
//         {
//                 question: "Who invented Javascript?"  
//                 a: "James Weldon Johnson"
//                 b: "Chris Beard"
//                 c: "Brendan Eich"
//                 d: "Yan Zhu"
//                 answer: "c"
//         },
        
// ]
// console.log(questions)


//currentQuestionIndex
//keeps track of questions that have been answered
var currentQuestionIndex = 0;
//currentQuestionObject

var timeLeft = 90;

//=====================================================================FUNCTIONS

//start quiz
function startQuiz() {
        console.log("We bout to start")
        //timer starts
        startTimer();
}

function startTimer() {
        timer.textContent = timeLeft;
        var timeInterval = setInterval(function() {
            timeLeft--;
            if (timeLeft > 0) {
                timer.textContent = timeLeft;
            } else {
                clearInterval(timeInterval);
                timer.textContent = 0;
                timeLeft = 90;
            }
        }, 1000);
    }

// function startTimer() {
//         console.log("timer has started");
//         //make sure time starts from beginning
//         timeLeft = 90;
//         var timerInterval = setInterval(function() {
//                 //subtract 1 from the time left
//                 timeLeft--;
//                 //update the time in display
//                 timer.textContent = timeLeft;
//                 //timer reaches zero
//                 //stop the timer
//                 //stop the quiz
//         }, 1000);
// }
//render the questions/answers to the card
function renderQuestions(index) {
        //clear off the start card
        
        //create question section
        //add content from the question object array
        //place it in questions card

        //create answer choices as buttons
        //place in questions card

}
//displays hidden question/answer cards

//score card function
function setScoreKeeper() {
        countEl.textContent = count;
      }


//=====================================================================USER INTERACTIONS


//Button clicks
// buttons.addEventListener("click", function(event) {
//         var element = event.target;
//         if (element.matches(".buttons")) {
//                 console.log("i clicked a button");
//         }
// })

//start button
startButton.addEventListener("click", function(event) {
        var element = event.target;
        if (element.matches("#startButton")) {
                console.log("i clicked the start button");
        }startQuiz();
})

//Moving to the next question hiding/unhiding the question cards
// unhide.addEventListener("click", function() {
//         console.log("Hello")     
//      })
//======================================================================INITIALIZATION

//Start Container appears upon page loading






//  //=============================================================/BODY/

// var body = document.body;

//  //=============================================================/HEADER/
// //CREATE
// var headerEl = document.createElement("header");
// var highscoresEl = document.createElement("div");
// var timerEl = document.createElement("div");
// //BUILD
// highscoresEl.textContent = "Highscores"
// console.log(highscoresEl)

// //PLACE
// document.appendChild(headerEl)
// headerEl.appendChild(highscoresEl)
// console.log(highscoresEl)

//=============================================================/MAIN/

// var containersEl = document.createElement("main");

// // //=========================================/START SECTION/
// var startContainerEl = document.createElement("section");
// var h1El = document.createElement("h1");
// var greetEl = document.createElement("p")

//  //===========================================/GAME SECTION/
// var gameContainerEl = document.createElement("section");

//         //QUESTION 1/
// var questionEl = document.createElement("div");
// var choicesListEl = document.createElement("ol");
//         //LIST ITEMS/
// var choicesLi1 = document.createElement("li");
// var choicesLi2 = document.createElement("li");
// var choicesLi3 = document.createElement("li");
// var choicesLi4 = document.createElement("li");
//         //ANSWER/
// var answer1 = document.createElement("p");

//         //QUESTION 2/
// var question2El = document.createElement("div");
// var choices2ListEl = document.createElement("ol");
//         //LIST ITEMS/
// var choices2Li1 = document.createElement("li");
// var choices2Li2 = document.createElement("li");
// var choices2Li3 = document.createElement("li");
// var choices2Li4 = document.createElement("li");
//         //ANSWER/
// var answer2 = document.createElement("p");

//         //QUESTION 3/
// var questionEl = document.createElement("div");
// var choicesListEl = document.createElement("ol");
//         //LIST ITEMS/
// var choices3Li1 = document.createElement("li");
// var choices3Li2 = document.createElement("li");
// var choices3Li3 = document.createElement("li");
// var choices3Li4 = document.createElement("li");
//         //ANSWER/
// var answer3 = document.createElement("p");

//         //QUESTION 4/
// var question4El = document.createElement("div");
// var choices4ListEl = document.createElement("ol");
//         //LIST ITEMS/
// var choices4Li1 = document.createElement("li");
// var choices4Li2 = document.createElement("li");
// var choices4Li3 = document.createElement("li");
// var choices4Li4 = document.createElement("li");
//         //ANSWER/
// var answer4 = document.createElement("p");


//         //QUESTION 5/
// var question5El = document.createElement("div");
// var choicesListEl = document.createElement("ol");
//         //LIST ITEMS/
// var choices5Li1 = document.createElement("li");
// var choices5Li2 = document.createElement("li");
// var choices5Li3 = document.createElement("li");
// var choices5Li4 = document.createElement("li");
//         //ANSWER/
// var answer5 = document.createElement("p");


//  //=========================================/INITIALS SECTION/
// var initialContainerEl = document.createElement("section");
// var intitialH2El = document.createElement("h2");
// var initialMsg = document.createElement("p");
// var initialForm = document.createElement("form");

//  //======================================/HIGHSCORES SECTION/
// var highscoreContainerEl = document.createElement("section");
// var highscoreH2El = document.createElement("h2");
// var highscoreForm = document.createElement("form");









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

