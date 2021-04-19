//Global variables
var startBtn = document.getElementById("startBtn");
var timer = document.getElementById("timer");
var viewScore = document.getElementById("viewScoreBtn");
var quizCover = document.getElementById("quizCover");
var question = document.getElementById("question");
var answers = document.getElementById("answers");
var userResult = document.getElementById("user-result");
var currentQuestion = 0;
var timeLeft = 50;
var answer1;
var answer2;
var answer3;
var answer4;
var points = 0;
var arrPoints = [];

//array of questions and answers
var questionsArray = [
	{
		question: "Commonly used data types DO Not include which of the following?",
		answer: "alerts",
		choices: ["strings", "booleans", "numbers", "alerts"],
	},
	{
		question: "The condition in an if / else statement is enclosed within ____.",
		answer: "parentheses",
		choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
	},
	{
		question: "Arrays in Javascript can be used to store ____.",
		answer: "all of the above",
		choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
	},
	{
		question: "String values must be enclosed within ____ when being assigned to variables.",
		answer: "quotes",
		choices: ["commas", "curly brackets", "quotes", "parenthesis"],
	},
	{
		question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
		answer: "console log",
		choices: ["Javascript", "terminal / bash", "for loops", "console log"],
	},
];

//starts the quiz with the click of start quiz button and removes the quiz cover.
function startQuiz() {
	quizCover.style.display = "none";
	timer.textContent = "Time: 50";
	startBtn.style.display = "none";
	countdown();
}

// Timer function
function countdown() {
	var timeInterval = setInterval(function () {
		//if timer is less than 0 or we finished question 5
		if (timeLeft < 0 || currentQuestion == 5) {
			// Once time gets to 0, set `timerEl` to an empty string
			timer.textContent = "";
			// stops timer
			clearInterval(timeInterval);
			// add score function
			addScore();
		}
		//keeps quiz running
		else if (timeLeft >= 0) {
			timer.textContent = "Time: " + timeLeft;
			timeLeft--;
		}
	}, 1000);

	displayQuestion();
}

function displayQuestion() {
	//Displays questions
	question.textContent = questionsArray[currentQuestion].question;

	//Displays answers
	answer1 = "<button id='choice1'>" + questionsArray[currentQuestion].choices[0];
	answer2 = "<button id='choice2'>" + questionsArray[currentQuestion].choices[1];
	answer3 = "<button id='choice3'>" + questionsArray[currentQuestion].choices[2];
	answer4 = "<button id='choice4'>" + questionsArray[currentQuestion].choices[3];

	answers.innerHTML = "<ul><li>" + answer1 + "</li><li>" + answer2 + "</li><li>" + answer3 + "</li><li>" + answer4 + "</li></ul>";
}

//function to track clicks
function checkAnswer(event) {
	event.preventDefault();
	var button = document.getElementById(event.target.id);
	var userInitials;

	if (button.id === "initials") {
		return;
	}

	//saves initials
	if (button.id === "submitScore") {
		userInitials = document.getElementById("initials");
		saveScore(userInitials);
		return;
	}

	//We are checking here the user answer and the correct answer and acting accordingly
	if (answer1.includes(questionsArray[currentQuestion].answer) && button.id === "choice1") {
		userResult.textContent = "CORRECT!";
		currentQuestion++;
		points += 10;
		displayQuestion();
	} else if (answer2.includes(questionsArray[currentQuestion].answer) && button.id === "choice2") {
		userResult.textContent = "CORRECT!";
		currentQuestion++;
		points += 10;
		displayQuestion();
	} else if (answer3.includes(questionsArray[currentQuestion].answer) && button.id === "choice3") {
		userResult.textContent = "CORRECT!";
		currentQuestion++;
		points += 10;
		displayQuestion();
	} else if (answer4.includes(questionsArray[currentQuestion].answer) && button.id === "choice4") {
		userResult.textContent = "CORRECT!";
		currentQuestion++;
		points += 10;
		displayQuestion();
	} else {
		userResult.textContent = "WRONG!";
		currentQuestion++;
		timeLeft -= 10;
		displayQuestion();
	}
}

// displaying score from test
function addScore() {
	timer.innerHTML = "";
	question.textContent = "All done!";
	quizCover.textContent = "Your final score is: " + points;
	quizCover.style.display = "block";
	userResult.textContent = "";

	var initials = '<input id ="initials" type="text" name="initials" placeholder="" />';

	answers.innerHTML = "<h3>Enter Initials: " + initials + "</h3>" + '<button id="submitScore"">SUBMIT</button>';
	return [initials, points];
}

//saves initials and scores to local storage
function saveScore(userInput) {
	var userScore = {
		initials: userInput.value,
		score: points,
	};

	arrPoints.push(userScore);

	localStorage.setItem("scores", JSON.stringify(arrPoints));
}

//attempt to retrieve initials and scores from local storage

function displayScores(scores) {
	var savedScores = localStorage.getItem("scores", JSON.stringify(arrPoints));
	if (!savedScores) {
		return false;
	}
	console.log("Saved scores found!");
	// else, load up saved tasks

	// parse into array of objects
	savedScores = JSON.parse(savedScores);

	// loop through savedTasks array
	for (var i = 0; i < savedScores.length; i++) {
		// pass each task object into the `createTaskEl()` function
		question.textContent = "top Scores " + savedScores[i].value;
	}
}
startBtn.addEventListener("click", startQuiz);
answers.addEventListener("click", checkAnswer);
viewScore.addEventListener("click", displayScores);
