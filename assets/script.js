var startBtn= document.getElementById("start-btn");
var introSectionEl= document.getElementById("intro-section");
var timerEl= document.getElementById("timer");
var questionSectionEl= document.getElementById("question-section");
var choicesEl= document.querySelectorAll(".choices")
var titleEl=document.getElementById('title');
var questionIndex= 0;
var initialSectionEl = document.getElementById("initial-section");
var finalScoreEl  = document.getElementById("highscore-section");
var goBackBtn = document.getElementById("go-back-bt");
var enteredValueEl = document.getElementById("initial-input");
var showEndListEl = document.getElementById("entered-value")


var questionsArray=[
    {
        title:"Commonly used data types DO NOT include:",
        choices:["1.Strings","2.Booleans","3.Alerts", "4.Numbers" ],
        answer: "1",
    },
    {
        title:"The Condition in an if / else statement is enclosed with ____.",
        choices:[ "1.Quotes","2.Curley Brackets","3.Parenthesis","4.Square Brackets"],
        answer: 2,
    },
    {
        
        title:"Arrays in JavaScript can be used to store ______.",
        choices:["1.Numbers and Strings", "2.Other Arrays", "3.Booleans", "4.All of the Above" ],
        answer: 3,
    },
    {
        title:"String values must be enclosed within _____ when being assigned to variables.",
        choices:["Commas", "Curly Brackets", "Quotations", "Parenthesis"],
        answer: 2,
    },
    {
        title:"A very useful tool used during development and debugging for printing content to the debugger is:",
        choices:["JavaScript", "Terminal/hash", "For Loops", "console.log"],
        answer: 3,
    }
]

var timeLeft= questionsArray.length* 15;

// ^brings in the selectors from HTML to create usable variables

// 1. hide intro
// 2. start the timer
// 3. show questions 
// 4. data structure to store questions and choices

var setIntervalId=0;

function startQuiz(){
    
    introSectionEl.setAttribute("class","hide")
    questionSectionEl.classList.remove("hide");
    // creates a dynamic hide 
    countDown();
    setIntervalId=setInterval(countDown,1000);
    showQuestions()
}

function countDown(){
    timerEl.textContent=timeLeft;
    if(timeLeft>0)
    {
        timeLeft--;   
    }
    else
    {
        clearInterval(setIntervalId)
    }
    // put text in
}

function showQuestions(){
    if(questionIndex < questionsArray.length) {
      titleEl.textContent = questionsArray[questionIndex].title;
      var currentQuestionChoices = questionsArray[questionIndex].choices;
      for(var i = 0; i< currentQuestionChoices.length; i++) {
        choicesEl[i].textContent = currentQuestionChoices[i];
      }
    }  
  
  }

function showFinalScore(){
    questionSectionEl.setAttribute("class","hide")
    initialSectionEl.classList.remove("hide");
    
}
var saveBtn = document.getElementById("save-btn")
saveBtn.addEventListener("click",function(){
    initialSectionEl.setAttribute("class","hide");
    showEnd();

    
    
    
})

function showEnd(){
    initialSectionEl.setAttribute("class","hide");
    finalScoreEl.classList.remove("hide")
    
}



function nextQuestion(event){
    var currentElement= event.target;
    if(currentElement.matches("button")){
        
        if(questionIndex < questionsArray.length - 1)
        {   
            questionIndex++;
            showQuestions();   
        }
        else{
            questionIndex++;
            showFinalScore();
        }
       }
}

function goBack(){
    questionIndex = 0;
    setIntervalId=setInterval(countDown,1000)
    finalScoreEl.classList.add("hide");
    introSectionEl.classList.remove("hide");
    

    
}






startBtn.addEventListener("click",startQuiz)

questionSectionEl.addEventListener("click",nextQuestion)

goBackBtn.addEventListener("click",goBack)