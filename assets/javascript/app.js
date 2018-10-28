
$(document).ready(function() {
    //console.log("ready");

    var questionCounter = 0;
    var timer = 15;
    var correctGuesses = 0;
    var incorrectGuesses = 0;


// listing all the questions
var question = [{
    question: "Eating which herb improves memory?",
    choices:[ "rosemary", "sage",  "marijuana"],

      correctAnswer: "Sage",
      image: "<img src ='assets/images/imageA.jpg' class = 'picture'>"
},{
    question: "What country do Amaryllis bulbs originate from?",
    choices:[ "Mexico","Italy", "South Africa"],

    correctAnswer: "South Africa",
    image: "<img src ='assets/images/imageB.jpg' class = 'picture'>"

},{
    question: "How long was the world’s longest ever parsnip?",
    choices: ["3ft", "6ft", "12ft"],

     correctanswer: "12 foot",
     image: "<img src ='assets/images/imageC.jpg' class = 'picture'>"
},{
    question: "Which fruit is also known by the scientific name of `Malus pumila?",
    choices:["apple","orange","starwberry"],

    correctAnswer:"apple",
    image: "<img src ='assets/images/imageD.jpg' class = 'picture'>"
},{
    question: "What kind of tree is a British Mountain Ash?",
    choices: [ "Evergreen","Deciduous", "Iroko"],

    correctAnswer:"Deciduous",
    image: "<img src ='assets/images/imageE.jpg' class = 'picture'>"


}];


function questionContent() {
    $("#gameScreen").append("<P><strong>" +
    question[questionCounter].question +
    "</p><p class = 'choices'>" +
    question[questionCounter].choices[0] +
    "</p><p class = 'choices'>" +
    question[questionCounter].choices[1] +
    "</p><p class = 'choices'>" +
    question[questionCounter].choices[2] +
    "</p><p class = 'choices'>" +
    question[questionCounter].choices[3] +
    "</strong></p>");

}
//user play correct answers

function userWin() {
    $("#gameScreen").html ("<p> You got it right</p>");
    correctGuesses++;
    var correctAnswer =  question[questionCounter].correctAnswer;
    $("#gameScreen").append("<p> the answer was <span class = 'answer'>"+
         correctAnswer +
         "<span></p>" +
         question[questionContent].image);
         setTimeout(nextQuestion, 4000);
         questionCounter++;
}

function userLoss() {
    $("#gameScreen").html ("<p>No, you loss</p>");
    incorrectGuesses++;
    var correctAnswer =  question[questionCounter].correctAnswer;
    $("#gameScreen").append("<p> the answer was <span class = 'answer'>" +
         correctAnswer +
         "<span></p>" +
         question[questionContent].image);
         setTimeout(nextQuestion, 4000);
         questionCounter++;
}

//user time up
function userTimeout() {
if (time === 0) {
    $("#gameScreen").html ("<p>Your Time is up!</p>");
    incorrectGuesses++;
    var correctAnswer =  question[questionCounter].correctAnswer;
    $("#gameScreen").append("<p> the answer was <span class = 'answer'>"+
         correctAnswer +
         "<span></p>" +
         question[questionContent].image);
         setTimeout(nextQuestion, 4000);
         questionCounter++;
}
}
//final score and message
function resultScreen() {
    if (correctGuesses > incorrectGuesses) {
        message = "congratulations"; 

    } else  message = "wrong option";
     
}


//function timer() {
    clock = setInterval(countDown, 1000);

    function countDown() {
        if (time < 1) {
            clearInterval (clock);
            userTimeout();
        }
        if (time > 0){
            time--;
        }
        $("#timer").html( "<strong>" + time + "</strong>");
    }
//question counter moves to next question
function nextQuestion() {
    if (questionCounter < question.length) {
        time = 15;
        $("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
			questionContent();
			timer();
			userTimeout();
		}
		else {
			resultsScreen();
		}
	// console.log(questionCounter);
    // console.log(question[questionCounter].correctAnswer);
    
    }

//reset score and counter parameters on restart
function gameReset(){
    $("#gameSreen").html("<p> you have <span id = 'timer'>" + time + "</span>seconds left!</p>");
    $("#start"). hide();
    questionContent();
    timer();
    userTimeout();
}
// this starts the game
$("#start").click(nextQuestion);

// click function to trigger right or wrong screen
$("#gameScreen").on("click", "choices", function() {

    var userGuess =$(this).text();
    if (userGuess === question[questionCounter].correctAnswer) {
        clearInterval(clock);
        userWin();

    } else {
        clearInterval(clock);
        userLoss();
   }
    

}
