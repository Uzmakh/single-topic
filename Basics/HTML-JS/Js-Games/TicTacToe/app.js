let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newgame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// define alternate turns
let turnO = true;


// storing the winning patterns in 2D-array
const winPatterns = [[0, 1, 2],
    [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6,], [3, 4, 5], [6, 7, 8]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Button is clicked!");
        
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        })
})
    
const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern); 
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "")  {
            if (pos1Val === pos2Val && pos2Val=== pos3Val) {
                // console.log("Hoorray ");
                showWinner(pos1Val);
                return true;
            }
        }
    }
}
const showWinner = (winner) => {
    // Add slight delay to show the message
    setTimeout(() => {
        msg.innerText = `🎉 Player ${winner} Wins! 🎉`;
        msgContainer.classList.remove("hide");

        // Confetti burst
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        // Additional confetti bursts for celebration effect
        setTimeout(() => confetti({ spread: 50, startVelocity: 35 }), 100);
        setTimeout(() => confetti({ spread: 70, origin: { x: 0.3 } }), 200);
        setTimeout(() => confetti({ spread: 70, origin: { x: 0.7 } }), 300);

    }, 1000); // 1 second delay
    disableBoxes();
};
  

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

    // Clear any pending timeouts
    clearTimeout(winTimeout);
}

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);