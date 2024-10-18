const quiz = [
    {
        question: "Quelle est la capital de la France ?",
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
]


let score = 0;

for (let i = 0; i < quiz.length; i++) {
    const currentQuestion = quiz[i];
    const userAnswer = prompt(`${currentQuestion.question}\n${currentQuestion.options.join(", ")}`);

    //Vérifie la réponse
    if (userAnswer === currentQuestion.answer) {
        score++;
        alert("Correct !");
    } else {
        alert(`Incorrect ! la bonne réponse était : ${currentQuestion.answer}`);
    }
}