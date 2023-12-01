// Questions that will be asked
const Questions = [
    {
        q: "1: What is the capital of France?",
        a: [
            { text: "Berlin", isCorrect: false },
            { text: "Madrid", isCorrect: false },
            { text: "Rome", isCorrect: false },
            { text: "Paris", isCorrect: true }
        ]
    },
    {
        q: "2: Which planet is known as the Red Planet?",
        a: [
            { text: "Earth", isCorrect: false },
            { text: "Mars", isCorrect: true },
            { text: "Jupiter", isCorrect: false },
            { text: "Venus", isCorrect: false }
        ]
    },
    {
        q: "3: Who wrote the play 'Romeo and Juliet'?",
        a: [
            { text: "William Shakespeare", isCorrect: true },
            { text: "Charles Dickens", isCorrect: false },
            { text: "Jane Austen", isCorrect: false },
            { text: "Leo Tolstoy", isCorrect: false }
        ]
    },
    {
        q: "4: What is the largest mammal in the world?",
        a: [
            { text: "Elephant", isCorrect: false },
            { text: "Giraffe", isCorrect: false },
            { text: "Blue Whale", isCorrect: true },
            { text: "Hippopotamus", isCorrect: false }
        ]
    },
    {
        q: "5: Which gas do plants absorb from the atmosphere?",
        a: [
            { text: "Oxygen", isCorrect: false },
            { text: "Carbon Dioxide", isCorrect: true },
            { text: "Nitrogen", isCorrect: false },
            { text: "Methane", isCorrect: false }
        ]
    },
    {
        q: "6: What is the largest organ in the human body?",
        a: [
            { text: "Liver", isCorrect: false },
            { text: "Brain", isCorrect: false },
            { text: "Heart", isCorrect: false },
            { text: "Skin", isCorrect: true }
        ]
    },
    {
        q: "6: Who painted the Mona Lisa?",
        a: [
            { text: "Pablo Picasso", isCorrect: false },
            { text: "Vincent van Gogh", isCorrect: false },
            { text: "Leonardo da Vinci", isCorrect: true },
            { text: "Michelangelo", isCorrect: false }
        ]
    },
    {
        q: "7:What is the largest ocean in the world?",
        a: [
            { text: "Indian Ocean", isCorrect: false },
            { text: "Arctic Ocean", isCorrect: false },
            { text: "Atlantic Ocean", isCorrect: false },
            { text: "Pacific Ocean", isCorrect: true }
        ]
    },
    {
        q: "8:Which gas makes up the majority of Earth's atmosphere?",
        a: [
            { text: "Carbon Dioxide", isCorrect: false },
            { text: "Oxygen", isCorrect: false },
            { text: "Nitrogen", isCorrect: true },
            { text: "Hydrogen", isCorrect: false }
        ]
    },
    {
        q: "9:Who is the author of 'To Kill a Mockingbird'?",
        a: [
            { text: "Harper Lee", isCorrect: true },
            { text: "Mark Twain", isCorrect: false },
            { text: "F. Scott Fitzgerald", isCorrect: false },
            { text: "George Orwell", isCorrect: false }
        ]
    },
    {
        q: "10: Which country is known as the Land of the Rising Sun?",
        a: [
            { text: "China", isCorrect: false },
            { text: "South Korea", isCorrect: false },
            { text: "Japan", isCorrect: true },
            { text: "Thailand", isCorrect: false }
        ]
    },
    {
        q: "What is the tallest mountain in the world?",
        a: [
            { text: "K2", isCorrect: false },
            { text: "Mount Kilimanjaro", isCorrect: false },
            { text: "Mount Everest", isCorrect: true },
            { text: "Mount Fuji", isCorrect: false }
        ]
    },
    {
        q: "Which element has the chemical symbol 'H'?",
        a: [
            { text: "Helium", isCorrect: false },
            { text: "Hydrogen", isCorrect: true },
            { text: "Oxygen", isCorrect: false },
            { text: "Nitrogen", isCorrect: false }
        ]
    },
    {
        q: "Who is the Greek god of the sea?",
        a: [
            { text: "Zeus", isCorrect: false },
            { text: "Apollo", isCorrect: false },
            { text: "Poseidon", isCorrect: true },
            { text: "Hades", isCorrect: false }
        ]
    },
    {
        q: "What is the capital of Brazil?",
        a: [
            { text: "Rio de Janeiro", isCorrect: false },
            { text: "Sao Paulo", isCorrect: false },
            { text: "Brasilia", isCorrect: true },
            { text: "Salvador", isCorrect: false }
        ]
    },
    {
        q: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        a: [
            { text: "Venus", isCorrect: true },
            { text: "Mars", isCorrect: false },
            { text: "Mercury", isCorrect: false },
            { text: "Jupiter", isCorrect: false }
        ]
    },
    {
        q: "Who wrote the play 'Hamlet'?",
        a: [
            { text: "Charles Dickens", isCorrect: false },
            { text: "William Shakespeare", isCorrect: true },
            { text: "Jane Austen", isCorrect: false },
            { text: "Leo Tolstoy", isCorrect: false }
        ]
    },
    {
        q: "What is the largest desert in the world?",
        a: [
            { text: "Sahara Desert", isCorrect: true },
            { text: "Arabian Desert", isCorrect: false },
            { text: "Gobi Desert", isCorrect: false },
            { text: "Atacama Desert", isCorrect: false }
        ]
    },
    {
        q: "Who is the author of 'Harry Potter'?",
        a: [
            { text: "George Orwell", isCorrect: false },
            { text: "Aldous Huxley", isCorrect: false },
            { text: "Ray Bradbury", isCorrect: false },
            { text: "J.K. Rowling", isCorrect: true }
        ]
    },
    {
        q: "Which gas do humans exhale when they breathe?",
        a: [
            { text: "Carbon Monoxide", isCorrect: false },
            { text: "Oxygen", isCorrect: false },
            { text: "Carbon Dioxide", isCorrect: true },
            { text: "Nitrogen", isCorrect: false }
        ]
    }
]
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}
