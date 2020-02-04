//Start Button Go Away!
$('#start').on('click', function(){
    $('#start').remove();
//Time to load the answers...
TriviaTime.loadQuestion();
})
$(document).on('click', '#startOver', function(){
    TriviaTime.startOver();
});

//More clicking to get the next questions loaded
$(document).on ('click', ".answer-button", function(event){
    TriviaTime.clicked(event);
})
//Question Loop
var questions = [{
    question: "Who is the hero of the first Star Ocean Video game?",
    answers: ["Roddick", "Ronyx", "Dorne", "Cyuss", "Erys"],
    correctAnswer: "Roddick",
    image: "images/Roddick.jpg"
},{ 
question: "Who is one of the heroes of the second Star Ocean Video game?",
    answers: ["Claude", "Ashton", "Bowman", "Celine", "Roddick (again)"],
    correctAnswer: "Claude",
    image: "images/Claude.jpg"
}, {
    question: "Who is the best character in the second Star Ocean Video game?",
    answers: ["Dias", "Rena", "Erys", "Ronyx", "Gabriel"],
    correctAnswer: "Rena",
    image: "images/Rena.jpg"
},{
    question: "Which is considered the worst Star Ocean game to date?",
    answers: ["The first", "The second", "The third", "The fourth", "The fifth"],
    correctAnswer: "The fifth",
    image: "images/fifth.jpg"
},{
    question: "Finally, which is considered the best Star Ocean game?",
    answers: ["The first", "The second", "The third", "The fourth", "The fifth"],
    correctAnswer: "The second",
    image: "images/second.jpg"
}];

//Time to get the trivia
var TriviaTime= {
    questions:questions,
    currentQuestion:0,
    counter:30,
    right:0,
    wrong:0,
    TimedOut: 0,

    countdown:function (){
        TriviaTime.counter--;
        $('#counter').html(TriviaTime.counter);
        if (TriviaTime.counter<=0){
        console.log("Time's Up!");
        TriviaTime.TimesUp();
        }
    },
    loadQuestion: function (){
        timer= setInterval(TriviaTime.countdown,1000);
        $('#subwrapper').html("<h2 id ='counter'>30</h2>");
        $('#subwrapper').append('<h2>'+questions[TriviaTime.currentQuestion].question+'</h2>');
        for (var i=0;i<questions[TriviaTime.currentQuestion].answers.length;i++){
            $('#subwrapper').append('<button class = "answer-button" id= "button-'+i+'" data-name="'+
            questions[TriviaTime.currentQuestion].answers[i]+'">'+questions[TriviaTime.currentQuestion].answers[i]+
            '</button>');
        }
    },
    nextQuestion: function(){
        TriviaTime.counter = 30;
        $('counter').html(TriviaTime.counter);
        TriviaTime.currentQuestion++;
        TriviaTime.loadQuestion();
    },
    TimesUp: function (){
        clearInterval(timer);
        TriviaTime.TimedOut++;
        $('#subwrapper').html('<h2>Time Over!</h2>');
        $('#subwrapper').append('<h3>The right response was:' +questions[TriviaTime.currentQuestion].correctAnswer+'</h3>');
        {if(TriviaTime.currentQuestion==questions.length-1){
            setTimeout(TriviaTime.results, 3*1000);}
            else {setTimeout(TriviaTime.nextQuestion, 3*1000);}
        }

    }, 
    results:function (){
        clearInterval(timer);
        $('#subwrapper').html("You finished!");
        $('#subwrapper').append('<h3>Correct: '+ TriviaTime.right+'</h3>');
        $('#subwrapper').append('<h3>Incorrect: '+ TriviaTime.wrong+'</h3>');
        $('#subwrapper').append('<h3>Unanswered: '+ TriviaTime.TimedOut+'</h3>');
        $('#subwrapper').append("<button id='startover'>Start Over?</button>");

    },
    clicked: function (){
        clearInterval(timer);
        if ($(event.target).data("name")==questions[TriviaTime.currentQuestion].correctAnswer){
            TriviaTime.rightAnswer();
        } else
        {TriviaTime.wrongAnswer();
        }
    },
    rightAnswer: function(){
        console.log ("Excellent job, Ensign (right)!");
        clearInterval(timer);
        TriviaTime.right++;
        $('#subwrapper').html('<h2>Excellent job, Ensign (right)!</h2>');
        if(TriviaTime.currentQuestion==questions.length-1){
            setTimeout(TriviaTime.results, 3*1000);
        }else {
            setTimeout(TriviaTime.nextQuestion, 3*1000);
        }

    },
    wrongAnswer: function(){
        console.log ("You disappoint Captain Ronyx (wrong).");
        clearInterval(timer);
        TriviaTime.wrong++;
        $('#subwrapper').html('<h2>You disappoint Captain Ronyx (wrong).</h2>');
        $('#subwrapper').append('<h3>The right response was:' +questions[TriviaTime.currentQuestion].correctAnswer+'</h3>');
        if(TriviaTime.currentQuestion==questions.length-1){
            setTimeout(TriviaTime.results, 3*1000);
        }else {
            setTimeout(TriviaTime.nextQuestion, 3*1000);
        }

    },
    startOver: function(){
        TriviaTime.currentQuestion=0;
        TriviaTime.counter=0;
        TriviaTime.right= 0;
        TriviaTime.wrong=0;
        TriviaTime.TimedOut=0;
        TriviaTime.loadQuestion();
    },




}
