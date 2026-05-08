function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    let randomNumber1to3 = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    
    switch (randomNumber1to3) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
};

function getHumanChoice() {    
    switch (prompt("Make a choice: rock, paper or scissors?").toLowerCase()) {
        case "rock":
            return "rock";
            break;
        case "paper":
            return "paper";
            break;
        case "scissors":
            return "scissors";
            break;
    }

};

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {
    if (computerChoice == "rock" && humanChoice == "rock" 
        || computerChoice == "paper" && humanChoice == "paper" 
        || computerChoice == "scissors" && humanChoice == "scissors"
    ) { 
        console.log("It's a draw!");
    } else { if (computerChoice == "rock" && humanChoice == "scissors"
        || computerChoice == "paper" && humanChoice == "rock"
        || computerChoice == "scissors" && humanChoice == "paper"
    ) {
        computerScore++;
        console.log("Computer wins!");
    } else { if (computerChoice == "rock" && humanChoice == "paper"
        || computerChoice == "paper" && humanChoice == "scissors"
        || computerChoice == "scissors" && humanChoice == "rock")
        {
        humanScore++;
        console.log("You win!");
    } else {
        console.log("There's a bug!");
    }
    }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log("ROUND: " + (i + 1));
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        console.log("Computer choice: "+ computerSelection);
        console.log("Your choice: " + humanSelection);
        playRound(computerSelection, humanSelection);
        console.log("Computer score: " + computerScore);
        console.log("Your score: "+ humanScore);
    }

    if (computerScore === humanScore) {
        console.log("FINAL: It's a draw!")
    } else { if (computerScore > humanScore) {
        console.log("FINAL: Computer wins!")
    } else { if (computerScore < humanScore) {
        console.log("FINAL: You win!")
    }
        console.log("FINAL: There's a bug!")
    }
        
    }
}

playGame()