const quiz = [
    {
        question: "Quelle est la capitale de la France ?",
        options: ["Paris", "Londres", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Quel est le plus grand océan du monde ?",
        options: ["Atlantique", "Indien", "Arctique", "Pacifique"],
        answer: "Pacifique"
    },
    {
        question: "Combien de continents y a-t-il sur Terre ?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    }
];

let score = 0;
let currentQuestionIndex = 0; // Pour suivre la question actuelle

// Fonction pour afficher la question actuelle
function displayQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = ""; // Réinitialiser le conteneur

    const currentQuestion = quiz[currentQuestionIndex];
    
    // Créer un élément pour la question
    const questionElement = document.createElement("h2");
    questionElement.textContent = currentQuestion.question;
    quizContainer.appendChild(questionElement);

    // Créer des boutons pour les options
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        quizContainer.appendChild(button);
    });
}

// Fonction pour vérifier la réponse de l'utilisateur
function checkAnswer(userAnswer) {
    const currentQuestion = quiz[currentQuestionIndex];

    if (userAnswer === currentQuestion.answer) {
        score++;
        alert("Correct !");
    } else {
        alert(`Incorrect ! La bonne réponse était : ${currentQuestion.answer}`);
    }

    currentQuestionIndex++;

    // Vérifier si le quiz est terminé
    if (currentQuestionIndex < quiz.length) {
        displayQuestion();
    } else {
        showScore();
    }
}

// Fonction pour afficher le score final
function showScore() {
    const quizContainer = document.getElementById("quiz-container");
    const scoreContainer = document.getElementById("score-container");
    quizContainer.style.display = "none"; // Masquer le conteneur du quiz
    scoreContainer.style.display = "block"; // Afficher le conteneur du score

    const finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = `Votre score final est : ${score} sur ${quiz.length}`;

    const restartButton = document.getElementById("restart-btn");
    restartButton.onclick = () => restartQuiz(); // Ajouter une fonction pour recommencer
}

// Fonction pour réinitialiser le quiz
function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    const scoreContainer = document.getElementById("score-container");
    const quizContainer = document.getElementById("quiz-container");

    scoreContainer.style.display = "none"; // Masquer le conteneur du score
    quizContainer.style.display = "block"; // Afficher le conteneur du quiz

    displayQuestion(); // Afficher la première question
}

// Commencer le quiz
displayQuestion();
