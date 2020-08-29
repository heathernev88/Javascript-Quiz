const startButton = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const questionsEl = document.getElementById("questions");
const answersEl = document.getElementById("answers");
const answerResponse = document.getElementById("answerResponse");

 let currentIndex = 0;
 let seconds = 60; 
 let countdownTimer = document.getElementById("countdownTimer")
    countdownTimer.classList.remove("hide");
 let score = 0;
 let myInterval= "";


 startButton.addEventListener("click", startQuiz, timer)


const questions = [
    { 
        question: "Commonly used data types DO NOT include:",
        answers: [
           { text: "1. Strings", correct: false },
           { text: "2. Booleans", correct: false },
           { text: "3. Alerts", correct: true },
           { text: "4. Numbers", correct: false },
        ]
        
    },
{ question: "The condition in an if / else statement is enclosed within ________.",
        answers: [
           { text: "1. quotes", correct: false},
           { text: "2. curly brackets", correct:true },
           { text: "3. parentheses", correct:false },
           { text: "4. square brackets", correct:false },
        ]
    },
    { question: "Arrays in JavaScript can be used to store _______.",
        answers: [
           { text: "1. numbers and strings", correct: false },
           { text: "2. Other Arrays", correct:false},
           { text: "3. Booleans", correct:false},
           { text: "4. all of the above", correct:true}
        ],
        correctAnswer: "d"
    },
        
    { question: "String values must be enclosed within _________ when being assigned to variables.",
        answers: [
            { text: "1. commas", correct: false },
            { text: "2. curly brackets", correct: false },
            { text: "3. quotes", correct: true },
            { text: "4. parentheses", correct: false}
        ]
    },
        
    { question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "1. JavaScript", correct: false },
            { text: "2. terminal/ bash", correct: false },
            { text: "3. for loops", correct: false },
            { text: "4. console log", correct: true },
        ],
    },
]



function startQuiz() {
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    myInterval = setInterval(timer, 1000);
    showQuestion();
}



function timer() {
    let time = seconds;
    countdownTimer.innerHTML = "0:" + seconds;
    seconds--; 
    

    if (seconds < 0) {
        alert("Time's up!");
        clearInterval(myInterval);
        countdownTimer.classList.add("hide")
        showResults();
    }

    if(seconds <10) {
        seconds = ("0" + seconds)
    }
}


function showQuestion() {
    let button;

    questionsEl.textContent = questions[currentIndex].question;
    answersEl.innerHTML = "";
    answerResponse.innerText = "";

    if (currentIndex === questions.length) {
        showResults()
    }

    for (var i = 0; i < questions[currentIndex].answers.length; i++) {
        button = document.createElement("button");
        button.classList.add("btn");
        button.textContent = questions[currentIndex].answers[i].text;
        button.setAttribute("data-correct", questions[currentIndex].answers[i].correct);
        button.addEventListener("click", function(e) {
            let selectedButton = e.target;
            selectedButton.getAttribute("data-correct");

            if (selectedButton.getAttribute("data-correct") === "true"){
                // score = score + 10;
                score += 10;
                answerResponse.innerText = "Correct!"
                
            } else { 
                seconds -= 10;
                answerResponse.innerText = "Wrong!"
                
            }

            
            setTimeout(showQuestion, 1000)
            
        });
        
        answersEl.appendChild(button);
        
    }

    currentIndex++;
    
}
  
function showResults() {
    let finishedMessage = document.getElementById("finishedMessage");
    finishedMessage.classList.remove("hide");
    let inputBox = document.getElementById("inputBox");
    let savedScore = [];
    let displayScore = document.getElementById("displayScore");
    
    questionContainer.classList.add("hide");
    inputBox.classList.remove("hide");
    displayScore.innerText = ("Your score is: " + score)

    
    };
    
    
    let initialsSubmit = document.getElementById("initialsButtons")
    // save score in array
    initialsSubmit.addEventListener("click", function() {
        let endButtons = document.querySelector("endButtons");
        endButtons.classList.remove("hide");
        let scoreArray = document.createElement("ol")
        
    
    // TODO create an input box for user to enter initials and submit button
    
    // if user puts initials in "string" and clicks submit an ol will show with their initals and score
    // button will appear to restart quiz
});

	

