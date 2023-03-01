describe("RPS Game", () => {
	//play the game with the rock option
	it("play the game with the rock option", () => {
		//visit the webpage
		cy.visit("https://camajsterek.github.io/RPS/");
		//click on the rock button that should exist
		cy.get("#Rock").should("exist").click();
		//check that the option is set to rock
		cy.get("#Choices").should("contain", "Rock");
		//check for the computer option
		cy.get("#Choices").then(($option) => {
			//both choose rock
			if ($option.text().includes("Both")) {
				//should be draw
				cy.get("#Result").should("contain", "draw!");
				//computer chooses paper
			} else if ($option.text().includes("Computer chose Paper")) {
				//should be loss
				cy.get("#Result").should("contain", "loses");
				//computer chooses scissors
			} else if ($option.text().includes("Computer chose Scissors")) {
				//should be win
				cy.get("#Result").should("contain", "wins");
			}
		});
	});
	//play the game with the Scissor option
	it("play the game with the scissor option", () => {
		//visit the webpage
		cy.visit("https://camajsterek.github.io/RPS/");
		//click on the rock button that should exist
		cy.get("#Scissors").should("exist").click();
		//check that the option is set to rock
		cy.get("#Choices").should("contain", "Scissors");
		//check for the computer option
		cy.get("#Choices").then(($option) => {
			//both choose Scissors
			if ($option.text().includes("Both")) {
				//should be draw
				cy.get("#Result").should("contain", "draw!");
				//computer chooses paper
			} else if ($option.text().includes("Computer chose Paper")) {
				//should be win
				cy.get("#Result").should("contain", "wins");
				//computer chooses rock
			} else if ($option.text().includes("Computer chose Rock")) {
				//should be win
				cy.get("#Result").should("contain", "loses");
			}
		});
	});
});
