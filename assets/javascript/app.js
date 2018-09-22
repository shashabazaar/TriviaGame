var triviaQuestions = [{ 
  question: "What cuisine consist of greens, mac & cheese, yams, cornbread and sweet potato pie?",
  answerList: ["mexican", "spanish", "southern", "italian"],
  answer: 3

},{
  question: "What cuisine consist of pasta, garlic bread, pizza, calzones and wine?",
  answerList: ["greek", "mediterranean", "spanish", "italian"],
  answer: 4
},{  

  question: "What cuisine consist of dumplings, sake, lo mein and fortune cookies?",
  answerList: ["mexican", "chinese", "southern", "carribean"],
  answer: 2

},{  

  question: "What cuisine consist of cucumber sauce, pita bread basmati rice and is known for its many spices?",
  answerList: ["irish", "spanish", "indian", "greek"],
  answer: 3

},{
  
  question: "What cuisine consist of rice and peas, curry chicken, fried plantain and callaloo?",
  answerList: ["carribean", "indian", "mediterranean","mexican"],
  answer: 1

},{
  
  question: " What cuisine consist of pastrami and  cornbeef sandwhiches coupled with chips and beef?",
  answerList: ["peruvian", "chinese", "irish", "italian"],
  answer: 3
  
},{
  
  question: "What cuisine consist of paella, shrimp and garlic, seafood parrillada and sangria?",
  answerList: ["southern", "peruvian", "italian", "carribean"],
  answer: 2

},{
  
  question: "What cuisine consist of taco's quesidillas, tortilla chips and guacamole?",
  answerlist: ["mexican", "southern", "chinese", "irish"],
  answer: 1

}];
var cuisineArray= ['question1', 'question2', 'question3', 'question4', 'question5', 'question6','question7', 'question8'];

var chosenWord = "";

var lettersInChosenWord = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = [];

var letterGuessed = "";

var letterInWord = "";

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 7;

var messages = {
  correct: "Now you're cooking, that's right!",
  incorrect: "You loss, you loss, you ate tomato sauce.",
  endtime: "Bombers, you ran out of time.",
  finished: "Drumroll please, it's time to check your superb knowledge!"

}

$('#startButton').on('click', function(){
    $(this).hide();
    newGame();
});

$('#startOverBtn').on('click', function(){
  $(this).hide();
  newGame();
})

fucntion newGame(){
  $('#correctAnswers').empty();
  $('#incorrect answers').empty();
  $('#unanswered').empty();
  $('#finalMessage').empty();
  currentAnswer = 0;
  currentQuestion = 0;
  unanswered = 0;
  incorrectAnswer = 0;
  newQuestion();
}

function newQuestion(){
  $('#message').empty();
  $('#correctedAnswer').empty();
  $('gif').empty();
  answered = true;
}
//new questions and answersList

$('#currentQuestion').html('Question #' +(currentQuestion+1)+'/'+triviaQuestions.length);
$('.question').html('<h2>' + triviaQuestions[currentQuestions].question + '</h2>');
for(var i = 0; i < 4; i++){
  var choices = $('<div>');
  choices.text(triviaQuestions[currentQuestion].answerList[i]);
  choices.addClass('thisChoice');
  $('.answerList').append(choices);
}

countdown();
//clicking on an answer will stop the clock and activate answers page.
$('thisChoice').on('click', function(){
  userSelect = $(this).data('index');
  clearInterval(time);
  answersPage();
});

function countdown(){
  seconds = 13;
  $('#timeLeft').html('<h3>Time Left:  ' + seconds + '</h3>');
  answered = true;
  //activates timer decrease
  time = setInterval(showCountdown, 1000);
}

function showCountdown(){
  seconds--;
  $('#timeLeft').html('<h3>Time Left: ' + secomds + '</h3>');
  if(seconds < 1){
    clearInterval(time);
    answered = false;
    answerPage();
  }
}

function answersPage(){
  $('#currentQuestion').empty();
  $('thisChoice').empty(); //Clears question page
  $('.question').empty();

  var rightAnswerText = triviaQuestions[currentQuestion].answerlist[triviaQuestions[currentQuestions].answer];
  
  var rightAnswerText = triviaQuestions[currentQuestion].answer;
  $('#gif').html('<img src = "assets/images/'+ '.gif" width = "400px">');

  
}



//startGame()
function startGame() {

numGuesses = 7;

chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];

lettersInChosenWord = chosenWord.split("");

numBlanks = lettersInChosenWord.length;

console.log(chosenWord);

WrongGuesses = [];

for (var i = 0; i < numBlanks; i++) {
  blanksAndSuccesses.push("_");
}
  console.log(blanksAndSuccess);

  document.getElementById("guesses-left").innerHTML = numGuesses;

  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  function checkLetters(letter) {

    var letterInWord = false;

    for (var i = 0; i < numBlanks; i++) {

      if (chosenWord[i] === letter) {
        letterInWord = true;
      }

      }
    }
  }



}
}
