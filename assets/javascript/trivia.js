$(document).ready(function() {
    //event listeners
    $("#remaining-time").hide();
    $("#start").on('click', trivia.startGame);
    $(document).on('click', '.option', trivia.guessChecker);
})


var trivia = {
    //properties
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 20,
    timerOn: false,
    timerId: '',

    questions: {
        q1: "What cuisine consist of greens, mac & cheese, yams, cornbread and sweet potato pie?",
        q2: "What cuisine consist of pasta, garlic bread, pizza, calzones and wine?",
        q3: "What cuisine consist of dumplings, sake, lo mein and fortune cookies?",
        q4: "What cuisine consist of cucumber sauce, pita bread basmati rice and is known for its many spices?",
        q5: "What cuisine consist of rice and peas, curry chicken, fried plantain and callaloo?",
        q6: "What cuisine consist of pastrami and  cornbeef sandwhiches coupled with chips and beef?",
        q7: "What cuisine consist of paella, shrimp and garlic, seafood parrillada and sangria?",
        q8: "What cuisine consist of taco's quesidillas, tortilla chips and guacamole?",
    },
    options: {
        q1: ["mexican", "spanish", "southern", "italian"],
        q2: ["greek", "mediterranean", "spanish", "italian"],
        q3: ["mexican", "chinese", "southern", "carribean"],
        q4: ["irish", "spanish", "indian", "greek"],
        q5: ["carribean", "indian", "mediterranean", "mexican"],
        q6: ["peruvian", "chinese", "irish", "italian"],
        q7: ["southern", "peruvian", "italian", "carribean"],
        q8: ["mexican", "southern", "chinese", "irish"],
    },

    answers: {
        q1: "southern",
        q2: "italian",
        q3: "chinese",
        q4: "indian",
        q5: "carribean",
        q6: "irish",
        q7: "peruvian",
        q8: "mexican"
    },
    //method to initialize game
    startGame: function () {
        trivia.currentSet = 0;
        trivia.correct = 0;
        trivia.incorrect = 0;
        trivia.unanswered = 0;
        clearInterval(trivia.timerId);

        //show game section    
        $('#game').show();

        //empty last results
        $('#results').html('');

        //show timer
        $('#timer').text(trivia.timer);

        //remove start button
        $('#start').hide();

        //show reamining time
        $('#remaining-time').show();

        //ask first question
        trivia.nextQuestion();

    },
    //method to loop through and display questions and options
    nextQuestion: function () {
        clearInterval(trivia.timerId);

        //set timer to 30 seconds each question
        trivia.timer = 10;
        trivia.timerId = setInterval(trivia.timerRunning, 1000);

        $('#timer').removeClass('last-seconds');
        $('#timer').text(trivia.timer);

        //prevent timer speeding up
        // if (!trivia.timerOn) {
        //     trivia.timerId = setInterval(trivia.timerRunning, 1000);
        // }

        //get and index current questions
        var questionContent = Object.values(trivia.questions)[trivia.currentSet];
        $('#question').text(questionContent);

        //array of user options for current game
        var questionOptions = Object.values(trivia.options)[trivia.currentSet];


        //create all the trivia guess option in the html
        $.each(questionOptions, function (index, key) {
            $('#options').append($('<button class="option btn btn-info btn-lg">' + key + '</button>'));
        })
    },

    //method to decrement counter and count unanswered if timer runs out

    timerRunning: function (){
        if (trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length){
            $('#timer').text(trivia.timer);
            trivia.timer--;
            if (trivia.timer === 4) {
                $('#timer').addClass('last-seconds');
            }
        }
        //time has run out and increment unanswered, ran result
        else if (trivia.timer <= -1) {
            trivia.unanswered++;
            trivia.result = false;
            clearInterval(trivia.timerId);
            resultId = setTimeout(trivia.guessResult, 1000);
            $('#results').html('<h3>Bombers dude! The answer was ' + Object.values(trivia.answers)[trivia.currenSet] + '</h3');
        }

        //if all questions asked then end game and show results
        else if (trivia.currentSet === Object.keys(trivia.questions).length) {
            //add results
            $('#results')
                .html('<h3>Thanks for playing Cuisine Trivia!</h3>' +
                    '<p>Correct: ' + trivia.correct + '</p>' +
                    '<p>Incorrect: ' + trivia.incorrect + '</p>' +
                    '<p>Unanswered: ' + trivia.unanswered + "</p>" +
                    '<p>Please stay and play again!</p>');

            //hide game section
            $('#game').hide();

            //show start button to beginnew game
            $('#start').show();
        }
    },

    guessChecker: function () {
        clearInterval(trivia.timerId);

        //timer ID for gameResult setTimeout
        var resultId;
        
        //answer to current question
        var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];

        //if option picked matched answer of current question, increment correct
        if ($(this).text() === currentAnswer){
            //turn button green for correct
            $(this).addClass('btn-success').removeClass('btn-info');

            trivia.correct++;
            resultId = setTimeout(trivia.guessResult, 2000);
            $('#results').html('<h3>Correct Answer!</h3>');
        } else{
            //turn button clicked red for incorrect
            $(this).addClass('btn-danger').removeClass('btn-info');
            trivia.incorrect++;
            resultId = setTimeout(trivia.guessResult, 2000);
            $('#results').html('<h3>Hang in there! ' + currentAnswer + '</h3>');
        }
    },
    //method to remove previous question results and options
    guessResult: function () {
        //increment to next question set
        console.log(trivia.currentSet);

        trivia.currentSet += 1;
        console.log(trivia.currentSet);
        //remove the option and results
        $('.option').remove();
        $('#results h3').remove();

        //begin next question
        trivia.nextQuestion();

    }
}