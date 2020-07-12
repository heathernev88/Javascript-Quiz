const startButton = document.getElementById("start-btn")
const questionContainer = document.getElementById("question-container")
const questionsEl = document.getElementById("questions")
const answersEl = document.getElementById("answers")

let currentQuestionIndex = 0


startButton.addEventListener("click", startGame)
answersEl.addEventListener("click", nextQuestion)

const questions = [
    { 
        question: "Commonly used data types DO NOT include:",
        answers: [
           { text: "1. Strings", correct: false },
           { text: "2. Booleans", correct: false },
           { text: "3. Alerts", correct:true },
           { text: "4. Numbers" , correct:false },
        ]
    },
{ question: "The condition in an if / else statement is enclosed within ________.",
        answers: [
           { text: "1. quotes", correct:false},
           { text: "2. curly brackets", correct:true},
           { text: "3. parentheses", correct:false},
           { text: "4. square brackets", correct:false},
        ]
    },
    { question: "Arrays in JavaScript can be used to store _______.",
        answers: [
           { text: "1. numbers and strings", correct:false},
           { text: "2. Other Arrays", correct:false},
           { text: "3. Booleans", correct:false},
           { text: "4. all of the above", correct:true}
        ]
    },
        
    { question: "String values must be enclosed within _________ when being assigned to variables.",
        answers: [
            { text: "1. commas", correct:false},
            { text: "2. curly brackets", correct:false},
            { text: "3. quotes", correct:true},
            { text: "4. parentheses", correct:false}
        ]
    },
        
    { question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "1. JavaScript", correct:false},
            { text: "2. terminal/ bash", correct:false},
            { text: "3. for loops", correct:false},
            { text: "4. console log", correct:true}
        ]
    },
]

function startGame() {
    startButton.classList.add("hide")
    questionContainer.classList.remove("hide")
    
    nextQuestion()
}

function nextQuestion() {
    // after hitting start button user sees first question
    // after selecing an answer user will see next question until no more questions
    
    // loop to show user each question after theyve answered 
    for (let i = 0; i <= questions.length; i++) {
        questionsEl.innerText = question[i];
    }
    
    
}

function showQuestion(question) {
    
    
}

function selectAnswer() {
// If user chooses correct answer add hr element with Correct! text under it, wait 2 seconds with interval and 
// then show next question
// if user chooses wrong answer show Wrong! and then move to next question
 }
}