
//Show start page and with start button once clicked reveal questions
var correctAnswers = 0;
var wrongAnswers = 0;
var question1 = ['#buttonA1', '#buttonB1', '#buttonC1', '#buttonD1']
var question2 = ['#buttonA2', '#buttonB2', '#buttonC2', '#buttonD2']
var question3 = ['#buttonA3', '#buttonB3', '#buttonC3', '#buttonD3']
var question4 = ['#buttonA4', '#buttonB4', '#buttonC4', '#buttonD4']
var question5 = ['#buttonA5', '#buttonB5', '#buttonC5', '#buttonD5']

$("#startButton").on("click", function(){
return $('#gamePage').removeClass('hidden').addClass('unhidden');
})

$("#startButton").on("click", function(){
    $("#startButton").fadeOut("slow");
})


$('#queston1').on("click", function(){
    if($('#buttonC1').on('click')) {
        alert("hello");
    }
})

$('#question2').on("click", function(){

})

$('#question3').on("click", function(){

})

$('#question4').on("click", function(){

})

$('#question5').on("click", function(){

})

// call results function withing the function below
$("#startButton").on("click", function(){

    var cc = 30;

    var interval = setInterval(function()
    {
        document.getElementById("cco").innerHTML = -- cc;
    
        if (cc == 0){
            clearInterval(interval);
            $('#gamePage').hide();
        }
    }, 1000);

});


// displays number of right and wrong answers hide/unhide
$("#submitButton").on("click", function(){

});

$("#submitButton").on("click", function(){
    $('#gamePage').hide();
});