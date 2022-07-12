var buttonEl = document.querySelector('button');
var bodyEl = document.querySelector('body');
var questionAreaEl = document.querySelector('.questionArea');
var answerAreaEl = document.querySelector('.answerArea');
var timerEl = document.querySelector('#timer');
// create var to hold questions and answers
// possible an array 
var interval
var qCounter = 0;
var timeLeft = 100;
var gameQuestions = [
	{
		question: "What is JavaScript?";
		answer1: "It is the language for a gaming engine called Java."
		answer2: "It is a version of HTML that allows you to code faster and more efficiently" ;
		answer3: "An object-oriented computer programming language commonly used to create interactive effects within web browsers." ;
		answer4: " " ;
		correct: 3 ;

	},
	{
		question: "what is html",
		answer1: ;
		answer2: ;
		answer3: ;
		answer4: ;
	
	}
]

function startTimer() {
	interval = setInterval (function(){
		timeLeft --;
	timerEl.textContent = timeLeft;
	if (timeLeft<=0){
		clearInterval(interval)
	}
	}, 1000)
 // start a timer for the quiz
}
function clickHandler(event) {
	console.log(event);
// 
	//hide start
	buttonEl.classList.add("hide")
	questionAreaEl.classList.remove("hide")
	answerAreaEl.classList.remove("hide")
	// unnide q area and answer area

	startTimer();
	displayQuestion()
}

function checkAnserHandler(event) {
	//check event to see if thing click === correct answer
	// if true nothing
	// if false subtract 10 sec
	qCounter++
	displayQuestion()
}

function displayQuestion() {
	// display the first question
	// display the possible answers
	var question = gameQuestions[qCounter].question
	questionAreaEl.append(question);
}

buttonEl.addEventListener('click', clickHandler)

// When start button is clicked, the first question appears.
	//Write a function for the quiz to start when start button is pressed. This function will display the question and answer areas.
// When start button is clicked, the timer begins to count backwards from 100 seconds
	// Write a click event that will begin a 100 second tmer
	//Display that timer in the top right of the webpage
// When the user clicks an answer, the next question is displayed.
	// Write an if/else function that will check if the answer was correct or incorrect and trip the correct or incorrect functions accordingly.
// When the user clicks the correct answer, they lose no time on the timer
	//Write a fuction to run when the correct answer is chosen that will make the next question appear
// When the user clicks an incorrect answer, they lose 10 seconds on the timer
	//Write a fuction to run when the incorrect answer is chosen that will make the next question appear and lose 10 seconds from the timer
// When the game is over, the timer either hits 0 or every question has been answered
	// Write a loop to check if every question has been displayed.
	// Write an if/else statement to check for the timer status
// When the game is over, the user can input initials and save their score
	// Give user input for initials and a submit button, save into local storage when submit button is clicked
