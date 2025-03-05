let currentPlayer = 1;
let currentScores = [0, 0];
let savedScores = [0, 0];
let gameStarted = false;

function startGame() {
  document.getElementById("player1Name").disabled = true;
  document.getElementById("player2Name").disabled = true;
  document.getElementById("rollBtn").disabled = false;
  document.getElementById("saveBtn").disabled = false;

  // Disable the start button
  document.querySelector('button[onclick="startGame()"]').disabled = true;

  gameStarted = true;

  // Update player names in UI
  document.getElementById("name1").textContent =
    document.getElementById("player1Name").value;
  document.getElementById("name2").textContent =
    document.getElementById("player2Name").value;
}

function rollDice() {
  if (!gameStarted) return;
  const roll = Math.floor(Math.random() * 6) + 1;
  document.getElementById("diceImage").src = `images/dice${roll}.png`;
  if (roll === 1) {
    currentScores[currentPlayer - 1] = 0;
    switchTurn();
  } else {
    currentScores[currentPlayer - 1] += roll;
  }
  updateUI();
}

function saveScore() {
  if (!gameStarted) return;
  savedScores[currentPlayer - 1] += currentScores[currentPlayer - 1];
  currentScores[currentPlayer - 1] = 0;
  updateUI();
  if (savedScores[currentPlayer - 1] >= 100) {
    showWinnerScreen();
    return;
  }
  switchTurn();
}

function showWinnerScreen() {
  let winnerName = document.getElementById(`player${currentPlayer}Name`).value;
  document.getElementById("winnerText").textContent = winnerName + " Wins!";
  document.getElementById("winnerScreen").style.display = "flex";
}

function resetGame() {
  currentScores = [0, 0];
  savedScores = [0, 0];
  currentPlayer = 1;
  gameStarted = false;
  document.getElementById("winnerScreen").style.display = "none";
  document.getElementById("player1Name").disabled = false;
  document.getElementById("player2Name").disabled = false;
  document.getElementById("rollBtn").disabled = true;
  document.getElementById("saveBtn").disabled = true;
  updateUI();
}

function switchTurn() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
}

function updateUI() {
  document.getElementById("savedScore1").textContent = savedScores[0];
  document.getElementById("savedScore2").textContent = savedScores[1];
  document.getElementById("currentScore1").textContent = currentScores[0];
  document.getElementById("currentScore2").textContent = currentScores[1];
}
