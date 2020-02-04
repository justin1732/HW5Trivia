//Start Button Go Away!
$('#start').on('click', function(){
    $('#start').remove();
//Time to load the answers...
TriviaTime.loadQuestion();
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
    countdown:30,
    right:0,
    wrong:0,
    countdown:function (){
        TriviaTime.countdown--;
        $('#countdown').html(TriviaTime.countdown);
        if (TriviaTime.countdown<=0)
        console.log("Time's Up!");
        TriviaTime.TimesUp();
    },
    loadQuestion: function (){
        timer= setInterval(TriviaTime.countdown, 1000);
        $('#subwrapper').html('<h2>'+questions[TriviaTime.currentQuestion].question+'</h2>');
        for (var i=0;i<questions[TriviaTime.currentQuestion].answers.length;i++){
            $('#subwrapper').append('<button class = "answer-button" id= "button-'+i+'" data-name="'+questions[TriviaTime.currentQuestion].answers[i]+'">'+questions[TriviaTime.currentQuestion].answers[i]+'</button>');
        }
    },
    nextQuestion: function(){

    },

    TimesUp: function (){

    }, 

    results:function (){

    },

    clicked: function (){

    },

    rightAnswer: function(){

    },

    wrongAnswer: function(){

    },

    startOver: function(){

    },




}
