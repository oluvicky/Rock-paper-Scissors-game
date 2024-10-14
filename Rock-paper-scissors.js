
// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Function to get computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to get human choice
function getHumanChoice() {
  let choice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    choice = prompt("Invalid Parameters. Enter rock, paper, or scissors:").toLowerCase();
  }
  return choice;
}

// Function to play a round
function playRound(humanSelection, computerSelection) {
  console.log(`You chose: ${humanSelection}`);
  console.log(`Computer chose: ${computerSelection}`);

  if (humanSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "paper" && computerSelection === "rock") ||
    (humanSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log("You win this round!");
    humanScore++;
  } else {
    console.log("Computer wins this round!");
    computerScore++;
  }
}

// Function to play the game
function playGame() {
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
  }

  if (humanScore < computerScore) {
    console.log("You lose!");
    alert("You lose the game!");
  } else if (humanScore === computerScore) {
    console.log("It's a draw!");
    alert("You draw!");
  } else {
    console.log("computer win!");
    alert("computer win the game!");
  }
}

// Start the game
playGame();


