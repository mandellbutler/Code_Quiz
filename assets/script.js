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

var timeLeft = 90;

//start button
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

//start timer
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
        //creat, build and palce questions in div
        var questionEl = document.createElement("div");
        questionEl.classList.add("question");
        questionEl.textContent = q.question;

        gameContainer.appendChild(questionEl)

        for (var i = 0; i < q.choices.length; i++) {
                //create, build and place buttons with questions
                var btn = document.createElement("button")
                btn.classList.add("buttons")
                btn.textContent = q.choices[i]
                btn.addEventListener("click", nextCard)
                gameContainer.appendChild(btn)
        }
}

//displays hidden question/answer cards
function nextCard(event) {
        // compares to correct answer in the questionObject
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


////========   REVISIT===========///////

//  if answer is true. flash correct, add point
//time penalty
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
//highscore link needs style
//highscore card needs to be shown after game
//local storage for the highscore
