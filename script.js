
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const result = document.querySelector(".result");
const yourScore = document.querySelector(".your-score span");
const machineScore = document.querySelector(".machine-score span");
const resetBtn = document.getElementById("reset");

let yourPoints = 0;
let machinePoints = 0;

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        result.textContent = "EMPATE!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        yourPoints++;
        yourScore.textContent = yourPoints;
        result.textContent = "VITÓRIA!!!";
    } else {
        machinePoints++;
        machineScore.textContent = machinePoints;
        result.textContent = "DERROTA!";
    }
}

function resetGame() {
    // 1. Volte as variáveis de pontos para 0
    yourPoints = 0;
    machinePoints = 0;

    // 2. Atualize o texto dos placares no HTML para "0"
    yourScore.textContent = yourPoints;
    machineScore.textContent = machinePoints;

    // 3. Limpe a mensagem de resultado (ex: "Aguardando jogada...")
    result.textContent = "";
}

rock.addEventListener("click", () => playRound("rock", computerPlay()));
paper.addEventListener("click", () => playRound("paper", computerPlay()));
scissors.addEventListener("click", () => playRound("scissors", computerPlay()));
resetBtn.addEventListener("click", resetGame);

