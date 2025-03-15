let categoryType = 10;
let questionNumber = 10;
let questionDifficulty = 'medium';

document.addEventListener('DOMContentLoaded', () => {
    const questionNum = document.getElementById('questionNum');
    const difficultySelect = document.getElementById('difficulty');
    const categorySelect = document.getElementById('category');

    // Populate Difficulty Dropdown
    const getQuestionDifficulty = () => {
        const difficulties = ["Easy", "Medium", "Hard"];
        difficulties.forEach(diff => {
            const option = document.createElement('option');
            option.value = diff.toLowerCase();
            option.text = diff;
            difficultySelect.appendChild(option);
        });
    };

    // Fetch and Populate Categories
    const getCategories = async () => {
        try {
            const response = await fetch("https://opentdb.com/api_category.php");
            const data = await response.json();

            data.trivia_categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category.id;
                option.text = category.name;
                categorySelect.appendChild(option);
            });
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    //  Number of Questions Dropdown (1 to 15)
    const getQuestionNumbers = () => {
        for (let i = 1; i <= 15; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.text = i;
            questionNum.appendChild(option);
        }
    };

    // Initialize dropdowns
    getQuestionDifficulty();
    getCategories();
    getQuestionNumbers();
});

// Handle Quiz Start
document.getElementById("submitForm").addEventListener("click", () => {
    const category = document.getElementById("category").value;
    const difficulty = document.getElementById("difficulty").value;
    const questionNum = document.getElementById("questionNum").value;

    if (!category || !difficulty || !questionNum) {
        alert("Please select category, difficulty, and number of questions");
        return;
    }

    const url = `https://opentdb.com/api.php?amount=${questionNum}&category=${category}&difficulty=${difficulty}&type=multiple`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.results.length === 0) {
                alert("No questions available for this selection. Try different settings");
                return;
            }

            localStorage.setItem("questions", JSON.stringify(data.results));
            localStorage.setItem("questionNum", questionNum);
            localStorage.setItem("difficulty", difficulty);
            localStorage.setItem("category", category);
            window.location.href = "gamescreen.html"; 
        })
        .catch(() => alert("Failed to load questions. Please try again"));
});
