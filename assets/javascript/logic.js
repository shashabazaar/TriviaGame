function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

   function showQuestions(_questions, _quizContainer){

  }

  function showResults(_questions, _quizContainer, _resultsContainer){
  }

  showQuestions(questions, quizContainer);

  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }
  }


var triviaQuestions = [
  { 
  question: "What cuisine consist of greens, mac & cheese, yams, cornbread and sweet potato pie?",
  answerList: {
    a: "mexican", b: "spanish", c: "southern", d: "italian"},
  answer: "c"

},{
  question: "What cuisine consist of pasta, garlic bread, pizza, calzones and wine?",
  answerList: {
    a: "greek", b: "mediterranean", c: "spanish", d: "italian"},
  answer: "d"
},{  

  question: "What cuisine consist of dumplings, sake, lo mein and fortune cookies?",
  answerList: {
    a: "mexican", b: "chinese", c: "southern", d: "carribean"},
  answer: "b"

},{  

  question: "What cuisine consist of cucumber sauce, pita bread basmati rice and is known for its many spices?",
  answerList: {
    a: "irish", b: "spanish", c: "indian", d: "greek"},
  answer: "c"

},{
  
  question: "What cuisine consist of rice and peas, curry chicken, fried plantain and callaloo?",
  answerList: {
    a: "carribean", b: "indian", c: "mediterranean",d: "mexican"},
  answer: "a"

},{
  
  question: " What cuisine consist of pastrami and  cornbeef sandwhiches coupled with chips and beef?",
  answerList: {
    a: "peruvian", b: "chinese", c: "irish", d: "italian"},
  answer: "c"
  
},{
  
  question: "What cuisine consist of paella, shrimp and garlic, seafood parrillada and sangria?",
  answerList: {
    a: "southern", b: "peruvian", c: "italian", d: "carribean"},
  answer: "b"

},{
  
  question: "What cuisine consist of taco's quesidillas, tortilla chips and guacamole?",
  answerlist: {
    a: "mexican", b: "southern", c: "chinese", d: "irish"},
  answer: "a"

}];

function showQuestions(questions, _questionContainer){
  var output = [];
  var answer;

  for(var i=0; i<questions.length; i++){
    answers = [];

    for(letter in questions[i].answers){

      answers.push(

        '<label>'
            + '<input type="radio" name="question'+i+'"value="'+letter+ ':'
            + questions[i].answers[letter]
            + '</label>'
          );
    }
    output.push(
      '<div class="questions">' + questions[i].question + '</div>'

       + '<div class="answers">' + answers.join('') + '</div>'

    );
  }
  quizContainer.innerHTML = output.join('');
}

function showQuestions(questions, quizContainer){

}

function showResults(_questions, _quizContainer, _resultsContainer){

}

var answerContainers = quizContainer.querySelectorAll('.answers');

var userAnswer = '';

var numCorrect = 0;

for(var i=0; i<questions.length; i++){

  userAnswer = (answerContainers[i].querySelector('input(name=question'));


    if(userAnswer ===questions[i].correctAnswer){

      numCorrect++;

      answerContainers[i].style.color = 'lightgreen';
    }
    else{
      answerContainers[i].style.color = 'red';
    }
  
  resultsContainer.innerHTML = numCorrect + 'out of' + questions.length;
  }

  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

  var quizContainer = documentElementById('quiz');
  var resultsContainer = documentElementById('results');
  var submitButton = document.getElementById('submit');

  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButtton);
