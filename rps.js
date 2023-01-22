//Start with setting variables used to track scoring
let CompScore = 0;
let PlayScore = 0;
		
//declare functions for each of the buttons used on the associated website
function Rock() {
	let CompPlay = Math.floor(Math.random() * 3) + 1;
		//this part runs through the game given the player choosing rock
		if (CompPlay == 1) {
			document.getElementById("Choices").innerHTML = "Both chose Rock.";
			document.getElementById("Result").innerHTML = "It's a draw!";
		} else if (CompPlay == 2) {
			document.getElementById("Choices").innerHTML = "Player chose Rock, Computer chose Paper.";
			document.getElementById("Result").innerHTML = "Computer wins.";
			CompScore++
			document.getElementById("Computer").innerHTML = "Computer Score: " + CompScore;
		} else {
			document.getElementById("Choices").innerHTML = "Player chose Rock, Computer chose Scissors.";
			document.getElementById("Result").innerHTML = "Player wins.";
			PlayScore++
			document.getElementById("Player").innerHTML = "Player Score: " + PlayScore;
		}
		//this part updates the scoring
		if (CompScore > PlayScore) {
			document.getElementById("Winning").innerHTML = "The computer is winning overall!";
		} else if (PlayScore > CompScore) {
			document.getElementById("Winning").innerHTML = "The player is winning overall!";
		} else {
			document.getElementById("Winning").innerHTML = "It's a draw!";
		}
	}

//function for paper, it has the same format as rock
function Paper() {
	let CompPlay = Math.floor(Math.random() * 3) + 1;
		if (CompPlay == 2) {
			document.getElementById("Choices").innerHTML = "Both chose Paper.";
			document.getElementById("Result").innerHTML = "It's a draw!";
		} else if (CompPlay == 3) {
			document.getElementById("Choices").innerHTML = "Player chose Paper, Computer chose Scissors.";
			document.getElementById("Result").innerHTML = "Computer wins.";
			CompScore++
			document.getElementById("Computer").innerHTML = "Computer Score: " + CompScore;
		} else {
			document.getElementById("Choices").innerHTML = "Player chose Paper, Computer chose Rock.";
			document.getElementById("Result").innerHTML = "Player wins.";
			PlayScore++
			document.getElementById("Player").innerHTML = "Player Score: " + PlayScore;
		}
		if (CompScore > PlayScore) {
			document.getElementById("Winning").innerHTML = "The computer is winning overall!";
		} else if (PlayScore > CompScore) {
			document.getElementById("Winning").innerHTML = "The player is winning overall!";
		} else {
			document.getElementById("Winning").innerHTML = "It's a draw!";
		}
	}
	
//function for Scissors, same format as the two above
function Scissors() {
	let CompPlay = Math.floor(Math.random() * 3) + 1;
		if (CompPlay == 3) {
			document.getElementById("Choices").innerHTML = "Both chose Scissors.";
			document.getElementById("Result").innerHTML = "It's a draw!";
		} else if (CompPlay == 1) {
			document.getElementById("Choices").innerHTML = "Player chose Scissors, Computer chose Rock.";
			document.getElementById("Result").innerHTML = "Computer wins.";
			CompScore++
			document.getElementById("Computer").innerHTML = "Computer Score: " + CompScore;
		} else {
			document.getElementById("Choices").innerHTML = "Player chose Scissors, Computer chose Paper.";
			document.getElementById("Result").innerHTML = "Player wins.";
			PlayScore++
			document.getElementById("Player").innerHTML = "Player Score: " + PlayScore;
		}
		if (CompScore > PlayScore) {
			document.getElementById("Winning").innerHTML = "The computer is winning overall!";
		} else if (PlayScore > CompScore) {
			document.getElementById("Winning").innerHTML = "The player is winning overall!";
		} else {
			document.getElementById("Winning").innerHTML = "It's a draw!";
		}
	}
