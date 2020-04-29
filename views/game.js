
const startButton= document.getElementById('start-btn')
const nextButton= document.getElementById('next-btn')
const questionContainerElements= document.getElementById('question container')
const questionElement = document.getElementById('question')
const answerButtonsElment = document.getElementById('answer-buttons')

// set the question randomly

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
startButton.classList.add('hide');
shuffledQuestions = questions.sort(()=> Math.random() - .5)
currentQuestionIndex = 0
questionContainerElements.classList.remove('hide');

setNextQuestion();


}

function setNextQuestion(){
    resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question){
questionElement.innerText = question.question
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElment.appendChild(button)
})
}
        

function resetState(){
clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElment.firstChild){
        answerButtonsElment.removeChild
        (answerButtonsElment.firstChild)
    }
}

function selectAnswer(e){
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElment.children).forEach(button=>{
    setStatusClass(button, button.dataset.correct)
})
if(shuffledQuestions.length > currentQuestionIndex +1){

    nextButton.classList.remove('hide')
}else{
    startButton.innerText='restart'
    startButton.classList.remove('hide')
    
}
}

function setStatusClass(element, correct){

    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
element.classList.remove('correct')
element.classList.remove('wrong')

}

const questions = [
    {question: "What do I use to brush teeth?",
      answers: [
          {text: 'Tooth Brush', correct: true},
          {text: 'Glasses', correct: false},
          {text: 'Hair Brush', correct: false},
          {text: 'tissue', correct: false},]
    },
    {question: "Apple is a",
    answers: [
        {text: 'car', correct: false},
        {text: 'fruit', correct: true},
        {text: 'bed', correct: false},
        {text: 'toaster', correct: false},]
    },
    {question: "Kitchen is where I can",
    answers: [
      {text: 'urinate', correct: false},
      {text: 'take a shower', correct: false},
      {text: 'wash my car', correct: false},
      {text: 'cook dinner', correct: true},]
    }
  ];
