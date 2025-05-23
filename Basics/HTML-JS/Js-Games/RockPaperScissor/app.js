// To track the user and computer score,we set the two variables ,
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreBox = document.querySelector("#user-score");
const compScoreBox = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    // rock,paper,scissors
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = () => {
    console.log("Game is DRAW!");
  msg.innerText = "Game is DRAW! Play AGAIN";
}

const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    // console.log("You WIN!");
    userScore++;
    userScoreBox.innerText = userScore;
    msg.innerText = `You WIN! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    // console.log("You LOSE!");
    compScore++;
    compScoreBox.innerText = compScore;
    msg.innerText = `You LOSE! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) => {
    console.log("user choice: ", userChoice);
    // Generate computer choice --> modular approach
    const compChoice = genCompChoice();
    console.log("choice is generated!", compChoice);

    if (userChoice === compChoice) {
        // Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {  // scissors,rock
          userWin = compChoice === "scissors" ? false : true;
        }
            else {
          //rock,paper
          userChoice=compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
        }
    }

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log(id)
        console.log("choice is clicked!", userChoice);
        playGame(userChoice);
    })
})