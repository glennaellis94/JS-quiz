// var points = 0;
// var questionsArray = [
// 	{
// 		question: "question 1",
// 		answer: "answer 1",
// 		choices: ["answer 1", "wrong", "wrong", "wrong"],
// 	},
// 	{
// 		question: "question 1",
// 		answer: "answer 1",
// 		choices: ["answer 1", "wrong", "wrong", "wrong"],
// 	},
// 	{
// 		question: "question 1",
// 		answer: "answer 1",
// 		choices: ["answer 1", "wrong", "wrong", "wrong"],
// 	},
// 	{
// 		question: "question 1",
// 		answer: "answer 1",
// 		choices: ["answer 1", "wrong", "wrong", "wrong"],
// 	},
// 	{
// 		question: "question 1",
// 		answer: "answer 1",
// 		choices: ["answer 1", "wrong", "wrong", "wrong"],
// 	},
// ];
// //This starts the quiz by removing the short paragraph describing the quiz and starting the time
// function startQuiz() {
// 	introduction.style.display = "none";
// 	timer.textContent = "Time: 50";
// 	startBtn.style.display = "none";

// 	countdown();
// }
// function countdown() {
// 	// Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
// 	var timeInterval = setInterval(function () {
// 		// As long as the `timeLeft` is greater than 1

// 		if (timeLeft < 0 || currentQuestion == 5) {
// 			// Once `timeLeft` gets to 0, set `timerEl` to an empty string
// 			timer.textContent = "";
// 			// Use `clearInterval()` to stop the timer
// 			clearInterval(timeInterval);

// 			// End game function here
// 			addScore();
// 		} else if (timeLeft >= 1) {
// 			timer.textContent = "Time: " + timeLeft;
// 			timeLeft--;
// 		}
// 	}, 1000);

// 	displayQuestion();
// }

// // //create answer button
// var createChoices = function () {
// 	var questionChoice = document.createElement("div");
// 	questionChoice.className = "task-actions";
// 	//create first choice
// 	var buttonChoice1 = document.createElement("button");
// 	buttonChoice1.textContent = choices[0];
// 	buttonChoice1.className = "btn choice-btn";
// 	buttonChoice1.setAttribute("btn edit-btn");
// 	//create second choice
// 	var buttonChoice2 = document.createElement("button");
// 	buttonChoice2.textContent = choices[1];
// 	buttonChoice2.className = "btn choice-btn";
// 	buttonChoice2.setAttribute("btn edit-btn");
// 	//create third choice
// 	var buttonChoice3 = document.createElement("button");
// 	buttonChoice3.textContent = choices[2].value;
// 	buttonChoice3.className = "btn choice-btn";
// 	buttonChoice3.setAttribute("btn edit-btn");
// 	//create forth choice
// 	var buttonChoice4 = document.createElement("button");
// 	buttonChoice4.textContent = choices[3];
// 	buttonChoice4.className = "btn choice-btn";
// 	buttonChoice4.setAttribute("btn edit-btn");

// 	questionChoice.appendChild(buttonChoice1);
// 	questionChoice.appendChild(buttonChoice2);
// 	questionChoice.appendChild(buttonChoice3);
// 	questionChoice.appendChild(buttonChoice4);
// 	main.appendChild;
// };
// createChoices();

// // buttonEl.addEventListener("click", function () {
// // 	alert("button clicked");
// // });
