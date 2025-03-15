document.addEventListener("DOMContentLoaded", () => {
  const score = localStorage.getItem("score") || 0;
  const totalQuestions =
    JSON.parse(localStorage.getItem("questions"))?.length || 10;

  document.getElementById("score").textContent = score;
  document.getElementById("totalQuestions").textContent = totalQuestions;

  // Display a message based on score
  let message = "";
  if (score == totalQuestions) {
    message = "You got a perfect score!";
  } else if (score > totalQuestions / 2) {
    message = "Good job! Try again to improve.";
  } else {
    message = "Better luck next time!";
  }
  document.getElementById("message").textContent = message;
});

function restartQuiz() {
  localStorage.removeItem("score");
  localStorage.removeItem("questions");
  window.location.href = "index.html"; // Change this to your quiz start page
}
