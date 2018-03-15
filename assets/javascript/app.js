
//Show start page and with start button once clicked reveal questions
var correctAnswers = 0;
var wrongAnswers = 0;
var allQuestions = [
    {
        questionText: "Who became the first emporer of Rome?",
        answers: ["Cicero", "Gaius Marius", "Caesar Augustus", "Julius Caesar"],
        correctAnswer: "Caesar Augustus"
    },
    {
        questionText: "About how many soldiers were in a Roman Legion?",
        answers: ["1,000", "10,000", "8,000", "5,000"],
        correctAnswer: "5,000"
    },
    {
        questionText: "Around what year did the Western Roman Empire fall?",
        answers: ["412 BC", "55 BC", "476 AD", "902 AD"],
        correctAnswer: "476 AD"
    },
    {
        questionText: "What was the highest position in the Roman Republic?",
        answers: ["Emperor", "Consul", "Senator", "Tribune"],
        correctAnswer: "Consul"
    },
    {
        questionText: "In ancient Rome, what color was it treasonous to dress in completely?",
        answers: ["Purple", "Green", "Yellow", "Red"],
        correctAnswer: "Purple"
    },
]
function endGame(){
    $("#wrongAnswers").append("<p> Correct: " + wrongAnswers + "</p>");
    $("#correctAnswers").append("<p> Wrong: " + correctAnswers + "</p>");
    
}

function timer() {

    var cc = 30;

    var interval = setInterval(function () {
        document.getElementById("cco").innerHTML = --cc;

        if (cc == 0) {
            clearInterval(interval);
            $('#gamePage').hide();
            $('.time').removeClass('unhidden').addClass('hidden');
            $('#submitButton').hide();
            checkAnswers();
            endGame();

        }
    }, 1000);
}

function displayQuestions() {
        for (var i = 0; i < allQuestions.length; i++) {
            $("#gamePage").append('<h3>' + allQuestions[i].questionText + '</h3>');
            for (var j = 0; j < allQuestions[i].answers.length; j++) {
                $("#gamePage").append('<input id="button" type="radio" name="question-' + i + '" value="' + 
                allQuestions[i].answers[j] + '">"' + allQuestions[i].answers[j] + '')
            }
        }
    }

// I couldn't get the correct value to work against the checked value. I ultimately switched out the value of the
// if else statement and that worked but it's not what I intended to do. Also I don't know why there is a " before
// the text value of the answers

function checkAnswers() {
    for (var i = 0; i < allQuestions.length; i++) {
        if ($('input[name="question-' + i + '"]:checked').val() === allQuestions[i].correctAnswer) {
            wrongAnswers++
        } else {
            correctAnswers++
        }
    }
}

$("#startButton").on("click", function () {
    $('#gamePage').removeClass('hidden').addClass('unhidden');
    $('#submitButton').removeClass('hidden').addClass('unhidden');
    $('.time').removeClass('hidden').addClass('unhidden');
    $("#startButton").fadeOut("slow");
    displayQuestions();
    timer();
})

//I don't understand how to end the timer function when clicking the submit button because
// it calls the endGame function twice. so close but yet so far.

$("#submitButton").on("click", function() {
    $('#submitButton').hide();
    $('#gamePage').hide();
    $('.time').hide();
    checkAnswers();
    endGame();
});