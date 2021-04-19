//==================================CREATE==================================  .createElement("elementname")

//*********************************/BODY/

var body = document.body;
var h1El = document.createElement("h1");
console.log("BODY:" + body)
console.log("H1:" + h1El)

//*******************************/HEADER/

var headerEl = document.createElement("header");
console.log("HEADER:" + headerEl)
var highscoresEl = document.createElement("div");
console.log("HIGHSCORES:" + highscoresEl);
var timerEl = document.createElement("div");
console.log("TIMER:" + timerEl);

//********************************/MAIN/

var containersEl = document.createElement("main");
console.log("CONTIANERS:" + containersEl);

//****************/START SECTION/
var startContainerEl = document.createElement("section");
console.log("START:" + startContainerEl);

//***************/GAME SECTION/
var gameContainerEl = document.createElement("section");
console.log("GAME:" + gameContainerEl);


//QUESTIONS LIST/
var questionsEl = document.createElement("div");
console.log("QUESTIONS:" + questionsEl);
var questListEl = document.createElement("ol");
console.log("Q-LIST:" +questListEl);

//LIST ITEMS/
var questLi1 = document.createElement("li");
var questLi2 = document.createElement("li");
var questLi3 = document.createElement("li");
var questLi4 = document.createElement("li");
var questLi5 = document.createElement("li");
console.log("Q-ITEMS" + questLi1)

//ANSWER LIST/

var answersChoicesEl = document.createElement("div");
console.log("A-CHOICES:" + answersChoicesEl);
var answerChoicesListEl = document.createElement("ol");
console.log("A-LIST:" + answerChoicesListEl);

//LIST ITEMS/
var answerChoicesLi1 = document.createElement("li");
var answerChoicesLi2 = document.createElement("li");
var answerChoicesLi3 = document.createElement("li");
var answerChoicesLi4 = document.createElement("li");
var answerChoicesLi5 = document.createElement("li");
console.log("A-ITEMS:" + answerChoicesLi1)

//CORRECT ANSWERS/

var correctAnswerEl = document.createElement("div");
console.log("CORRECT:" + correctAnswerEl);
var correctAnswerListEl = document.createElement("ol");
console.log("COR-LIST:" + correctAnswerListEl);

//LIST ITEMS/
var correctAnswerLi1 = document.createElement("li");
var correctAnswerLi2 = document.createElement("li");
var correctAnswerLi3 = document.createElement("li");
var correctAnswerLi4 = document.createElement("li");
var correctAnswerLi5 = document.createElement("li");
console.log("COR-ITEMS:" + correctAnswerLi1)


//***********/INITIALS SECTION/





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

