let storedQuestions = JSON.parse(localStorage.getItem("questions")) || [];
const questionElement = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const resultElement = document.getElementById('result');
const submitButton = document.getElementById('btnSubmit');
const nextButton = document.getElementById('btnNext');
const counterElement = document.getElementById('counterSpan');
const timerElement = document.getElementById("timer");

let questionIndex = 0;
let score = 0;
let selectedAnswer = null;
let timer;
let timeLeft = 15;

// Fetch questions from API only if not in localStorage
async function fetchQuestions() {
    if (storedQuestions.length === 0) {
        try {
            const response = await fetch("https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple");
            const data = await response.json();
            storedQuestions = data.results;
            localStorage.setItem("questions", JSON.stringify(storedQuestions)); 
        } catch (error) {
            console.error("Error fetching questions:", error);
        }
    }
    displayQuestion();
}

// Display current question
function displayQuestion() {
    if (questionIndex >= storedQuestions.length) {
        localStorage.setItem("score", score);
        window.location.href = "result.html"; 
        return;
    }

    const questionData = storedQuestions[questionIndex];
    questionElement.innerHTML = questionData.question;
    counterElement.innerHTML = `Question ${questionIndex + 1} / ${storedQuestions.length}`;

    let allAnswers = [...questionData.incorrect_answers, questionData.correct_answer];
    allAnswers.sort(() => Math.random() - 0.5); // Shuffle answers

    answersContainer.innerHTML = "";
    allAnswers.forEach((answer) => {
        const button = document.createElement("button");
        button.classList.add("btn", "answer");
        button.textContent = answer;
        button.onclick = () => selectAnswer(button, answer, questionData.correct_answer);
        answersContainer.appendChild(button);
    });

    resultElement.style.display = "none";
    submitButton.style.display = "block";
    nextButton.style.display = "none";

    startTimer();
}

// Handle Answer Selection
function selectAnswer(button, selected, correct) {
    selectedAnswer = selected;

    // Remove previous selection
    document.querySelectorAll(".answer").forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
}

// Timer Logic
function startTimer() {
    clearInterval(timer); 
    timeLeft = 15;
    timerElement.textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeout(); // Call function if time runs out
        }
    }, 1000);
}

// Handle Timeout (Treat as Wrong Answer)
function handleTimeout() {
    resultElement.innerHTML = "Time's up!";
    resultElement.style.color = "red";
    resultElement.style.display = "block";
    
    submitButton.style.display = "none";
    nextButton.style.display = "block";
}

// Validate Answer
submitButton.addEventListener("click", () => {
    if (!selectedAnswer) {
        resultElement.innerHTML = " Please select an answer!";
        resultElement.style.display = "block";
        return;
    }

    clearInterval(timer); 
    const correctAnswer = storedQuestions[questionIndex].correct_answer;

    if (selectedAnswer === correctAnswer) {
        resultElement.innerHTML = "CORRECT!";
        resultElement.style.color = "green";
        score++;
    } else {
        resultElement.innerHTML = `INCORRECT! Correct: ${correctAnswer}`;
        resultElement.style.color = "red";
    }

    resultElement.style.display = "block";
    submitButton.style.display = "none";
    nextButton.style.display = "block";
});

// Move to Next Question
nextButton.addEventListener("click", () => {
    questionIndex++;
    selectedAnswer = null;
    displayQuestion();
});

// Start Game
document.addEventListener("DOMContentLoaded", fetchQuestions);
