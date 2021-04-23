//=====================================================================DEPENDENICES

//highscores link
var highscores = document.getElementById("highscores");
//countdown timer
var timer = document.getElementById("timer");
//question & answer choice cards
var startContainer = document.getElementById("startContainer")
var gameContainer = document.getElementById("gameContainer");
//card that gives the user the ability to enter initials
var initialsCard = document.getElementById("initialsContainer");
//highscore card
var scoreCard = document.getElementById("scoresContainer");

//Buttons
//start button
var startButton = document.getElementById("startButton");

//answerButtons
// var answerBtns = document.querySelector(".answerBtns");

//submit button
var submitBtn = document.getElementById("submitBtn");
//clear records button




//=====================================================================STARTING DATA

//Questions stored as an object with answers as key/value pairs: 
var questions = [
        {
                question: "What does DOM stand for?",
                choices: [
                        "Document Object Method.",
                        "Donuts Over Money.",
                        "Don't Operate Machinery.",
                        "Domain Over-ride Methods.",
                ],
                answer: "Document Object Method."

        },
        {
                question: "What is an Array?",
                choices: [
                        "A type of laser beam that is used for severe acne treatment.",
                        "A data structure that contains a group of elements, each identified by at least one array index or key.",
                        "A container for storing data values.",
                        "A data structure made up of text and contains, letter, numbers, symbols, punctuation, and even emoji.",
                ],
                answer: "A data structure that contains a group of elements, each identified by at least one array index or key."
        },
        {
                question: "Function parameters are enclosed by which of the following?:",
                choices: [
                        "{}",
                        "[]",
                        "++",
                        "()",
                ],
                answer: "()"
        },

        {
                question: "What is a string?",
                choices: [
                        "I piece of fabric, often used to bind things together using knots.",
                        "A data structure made up of text and contains, letter, numbers, symbols, punctuation, and even emoji.",
                        "A container for storing data values.",
                        "A data object made up of text and contains, letter, numbers, symbols, punctuation, and even emoji.",
                ],
                answer: "A data structure made up of text and contains, letter, numbers, symbols, punctuation, and even emoji."
        },
        {
                question: "Who invented Javascript?",
                choices: [
                        "James Weldon Johnson",
                        "Chris Beard",
                        "Brendan Eich",
                        "Yan Zhu",
                ],
                answer: "Brendan Eich"
        },

]


//currentQuestionIndex
//keeps track of questions that have been answered
var currentQuestionIndex = 0;
//currentQuestionObject

var timeLeft = 90;

//Button clicks
//answer buttons
// answerBtns.addEventListener("click", function (event) {
//         var element = event.target;
//         if (element.matches(".answerBtns")) {
//                 console.log("i clicked an answer button");
//         } nextCard();
// })
// document.addEventListener("click", function (event) {
//         if (event.target.classList.contains("answerBtns"))
//                 console.log(event.target)
//         else console.log("NOPE!")
// })

//start button
// startButton.addEventListener("click", function (event) {
//         var element = event.target;
//         if (element.matches("#startButton")) {
//                 console.log("i clicked the start button");
//         } startQuiz();
// })
startButton.addEventListener("click", startQuiz)


//=====================================================================FUNCTIONS
//start quiz
function startQuiz() {
        //hide start container
        startContainer.classList.add("hide")
        gameContainer.classList.remove("hide")
        //timer starts
        startTimer();
        renderQuestion()
}

function startTimer() {
        timer.textContent = timeLeft;
        var timeInterval = setInterval(function () {
                //subtract 1 from the time left
                timeLeft--;
                if (timeLeft > 0) {
                        //update the time in display
                        timer.textContent = timeLeft;
                } else {
                        clearInterval(timeInterval);
                        //timer reaches zero
                        timer.textContent = 0;
                        timeLeft = 90;
                        //stop the timer
                        //stop the quiz
                }
        }, 1000);
}

// // //render the questions/answers to the card
function renderQuestion() {
        gameContainer.innerHTML = ""

        var q = questions[currentQuestionIndex]

        var questionEl = document.createElement("div");
        questionEl.classList.add("question");
        questionEl.textContent = q.question;

        gameContainer.appendChild(questionEl)

        // var i = 0;
        // while (i < q.choices.length) {
        //         var btn = document.createElement("button")
        //         btn.classList.add("buttons")
        //         btn.textContent = q.choices[i]
        //         btn.addEventListener("click", nextCard)
        //         gameContainer.appendChild(btn)
        //         i++;
        // }

        // for (var i = 0; i < q.choices.length; i++) {
        //         var btn = document.createElement("button")
        //         btn.classList.add("buttons")
        //         btn.textContent = q.choices[i]
        //         btn.addEventListener("click", nextCard)
        //         gameContainer.appendChild(btn)
        // }

        // console.log(q.choices)
        // // for in:left
        // for (var i in q.choices) {
        //         var btn = document.createElement("button")
        //         btn.classList.add("buttons")
        //         btn.textContent = q.choices[i]
        //         btn.addEventListener("click", nextCard)
        //         gameContainer.appendChild(btn)
        // }

        // // for of:right
        // for (var choice of q.choices) {
        //         var btn = document.createElement("button")
        //         btn.classList.add("buttons")
        //         btn.textContent = choice
        //         btn.addEventListener("click", nextCard)
        //         gameContainer.appendChild(btn)
        // }

        q.choices.forEach(function (choice) {
                var btn = document.createElement("button")
                btn.classList.add("buttons")
                btn.textContent = choice
                btn.addEventListener("click", nextCard)
                gameContainer.appendChild(btn)
        })


        //create question section

        //add content from the question object array
        //place it in questions card

        //create answer choices as buttons
        //place in questions card

}
//displays hidden question/answer cards
function nextCard(event) {
        console.log(event.target.textContent === questions[currentQuestionIndex].answer)



        currentQuestionIndex++
        renderQuestion()
        //for each
        //when answerBtn is clicked
        //current card .add("hide")
        //next card .add("unhide")
}
//score card function
function setScoreKeeper() {
        countEl.textContent = count;
}


//=====================================================================USER INTERACTIONS




//Moving to the next question hiding/unhiding the question cards
// unhide.addEventListener("click", function() {
//         console.log("Hello")     
//      })
//======================================================================INITIALIZATION

//Start Container appears upon page loading


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

