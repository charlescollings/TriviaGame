
$(document).ready(function() {

    let questions = [
        {
            "question": "What is Marge's maiden name?",
            "answers": ["Smith", "Buvier", "Bubble"],
            "correctAnswer": "Buvier",
        },
        {
            "question": "What is Homers favorite snack?",
            "answers": ["Beer", "Donuts", "Salad"],
            "correctAnswer": "Donuts",
        }
    ]
    let userAnswers = []; 

    // functions
    function startGame() {
       // populate div with questions
        for (var i=0; i < questions.length; i++) {
                $('.js-questions').append('<p>' + questions[i].question + '</p>');
            
                // loop through answers
                for (var j=0; j < questions[i].answers.length; j++) {
                $('.js-questions').append('<input type="radio" value= "' + questions[i].answers[j] + '" data-name="'+ questions[i].answers[j] + '">' + questions[i].answers[j] + '</input>');
            }
            $('.js-questions').append('<br><hr>');
        }

    };

    function stopGame() {
        // I could not fully figure this section out
            $('input:checked').each(function() {
              
              var userAnswers = $('input:checked').attr("data-name");

                if (userAnswers === questions.correctAnswer)  {
                  console.log("correct");
                }
                else {
                    console.log("wrong");
                }
            });   
    };

    // events
    //  click start button will start game
    $(".js-start").on('click', function() {
        startGame();
    });
    //  click stop button to see score
    $(".js-stop").on('click', function() {
        stopGame();
        
    });
    //  timer runs out to end game and show score

})
