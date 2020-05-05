
const startButton= document.getElementById('start-btn')
const endloop = document.getElementById('answer-buttons')
const nextButton= document.getElementById('next-btn')

const questionContainerElements= document.getElementById('question_container')
const questionElement = document.getElementById('question')
const answerButtonsElment = document.getElementById('answer-buttons')
var score = 0

// set the question randomly

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
startButton.classList.add('hide');
shuffledQuestions = questions.sort(()=> Math.random() - .5)
shuffledQuestions = shuffledQuestions.slice(0,5)
console.log(shuffledQuestions.length);

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
    // startButton.innerText='restart'
    // startButton.classList.remove('hide')
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/answer", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(
      JSON.stringify({
        gamescore: score, // passing value to server with key: value pair, changed from value1 to gamescore
      })
    );
    endloopMethod();
}
}

function endloopMethod(){
    endloop.classList.add('hide')
    document.getElementById('question').innerHTML="Congragulations! Game Finished"
    
}



function setStatusClass(element, correct){

    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
        console.log("correct");
        score  = score + 1;
        console.log(score);  
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
    {QID: "1",
        question: "I use (below) to brush teeth",
      answers: [
          {text: 'Tooth Brush', correct: true},
          {text: 'Glasses', correct: false},
          {text: 'Hair Brush', correct: false},
          {text: 'tissue', correct: false},]
    },
    {QID: "2",
        question: "Apple is a",
    answers: [
        {text: 'car', correct: false},
        {text: 'fruit', correct: true},
        {text: 'bed', correct: false},
        {text: 'toaster', correct: false},]
    },
    {QID: "3",
        question: "Kitchen is where I can",
    answers: [
      {text: 'withdraw money', correct: false},
      {text: 'take a shower', correct: false},
      {text: 'wash my car', correct: false},
      {text: 'cook dinner', correct: true},]
    },
    {QID: "4",
    question: "Animal name beginning with the letter S",
    answers: [
    {text: 'Tigar', correct: false},
    {text: 'Sugar', correct: false},
    {text: 'Spider', correct: false},
    {text: 'Skunk', correct: true},]
    },
    {QID: "5",
    question: "40 * 50 = ",
    answers: [
    {text: '40', correct: false},
    {text: '50', correct: false},
    {text: '300', correct: false},
    {text: '200', correct: true},]
    },
    {QID: "6",
    question: "Which one is the largest number?",
    answers: [
    {text: '456', correct: true},
    {text: '123', correct: false},
    {text: '111', correct: false},
    {text: '340', correct: false},]
    },
    {QID: "7",
    question: "what the missing number at the end of the series. 5, 12, 19, 26,?",
    answers: [
    {text: '31', correct: false},
    {text: '32', correct: false},
    {text: '33', correct: false},
    {text: '34', correct: true},]
    },
    {QID: "8",
    question: "5 + 2 = ",
    answers: [
    {text: '5', correct: false},
    {text: '7', correct: true},
    {text: '52', correct: false},
    {text: '12', correct: false},]
    },
    {QID: "9",
    question: "I go to a bank to",
    answers: [
    {text: 'Deposit money', correct: true},
    {text: 'Watch a movie', correct: false},
    {text: 'Cook dinner', correct: false},
    {text: 'cut my hair', correct: false},]
    },
    {QID: "10",
    question: "33 / 11 =",
    answers: [
    {text: '33', correct: false},
    {text: '3', correct: true},
    {text: '11', correct: false},
    {text: 'unknown', correct: false},]
    },
    {QID: "11",
    question: "Fill in the missing word: An Espress Book Machine (EBM) prints and binds a high-quality copy of a book right in the store, in just a few minutes. There’s a catalogue of millions of books to choose from, including rare manuscripts and books that publishers are no longer _______",
    answers: [
    {text: 'printing', correct: true},
    {text: 'asking', correct: false},
    {text: 'seeking', correct: false},
    {text: 'recommending', correct: false},]
    },
    {QID: "12",
    question: "Which of the following is the opposite of the word dark?",
    answers: [
    {text: 'Gloomy', correct: false},
    {text: 'Happy', correct: false},
    {text: 'Day', correct: false},
    {text: 'Light', correct: true},]
    },
    {QID: "13",
    question: "which number is the smallest?",
    answers: [
    {text: '67', correct: false},
    {text: '90', correct: false},
    {text: '16.5', correct: true},
    {text: '34', correct: false},]
    },
    {QID: "14",
    question: "Country name beginning with the letter A",
    answers: [
    {text: 'Adelaide', correct: false},
    {text: 'Australia', correct: true},
    {text: 'India', correct: false},
    {text: 'China', correct: false},]
    },
    {QID: "15",
    question: "Letter is to word as house is to",
    answers: [
    {text: 'mansion', correct: false},
    {text: 'room', correct: true},
    {text: 'hospital', correct: false},
    {text: 'homeless', correct: false},]
    },
  ];
